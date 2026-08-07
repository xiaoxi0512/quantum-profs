#!/usr/bin/env node
/**
 * 内容自动审查与更新（由 GitHub Actions 定时调用）—— 方案 B：独立搜索 API + 任意 LLM
 *
 * 设计：
 *   1. 用独立的「联网搜索 API」（默认 Tavily）检索教授的最新公开信息（真联网，不依赖 LLM 是否自带搜索）
 *   2. 把检索结果作为「已知上下文」交给任意 OpenAI 兼容 LLM 做判断与结构化抽取
 *   3. 仅以保守规则改写数据：职称变动、bio/achievements 追加、邮箱/电话仅在原为空时补全、office 更新
 *   4. 绝不删除记录、绝不猜测；所有不确定项与检索来源写入 CONTENT_REVIEW.md 供人工复核
 *
 * 环境变量：
 *   LLM_API_KEY    必填（仓库 Secrets）：用于「判断」的 LLM key
 *   LLM_BASE_URL   必填（仓库 Secrets）：LLM 的 OpenAI 兼容接口地址，如 https://api.openai.com/v1
 *   LLM_MODEL      必填（仓库 Secrets）：模型名，如 gpt-4o / deepseek-chat
 *   TAVILY_API_KEY 必填（仓库 Secrets）：Tavily 搜索 API key（真联网检索）
 *   SEARCH_PROVIDER 可选，默认 tavily
 *   SEARCH_MAX     可选，单次检索返回条数，默认 5
 *   MAX_REVIEWS    可选，单次最多审查人数，默认 25
 *   LLM_MOCK=1     本地测试：不联网，返回假数据验证改写链路
 */
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const DATA_PATH = path.join(root, 'js', 'data.js');
const VERSION_PATH = path.join(root, 'version.json');
const REPORT_PATH = path.join(root, 'CONTENT_REVIEW.md');

// 所有密钥在读取时 trim()，消除从 GitHub Secrets 复制粘贴时带入的首尾空格/换行（常见 401 诱因）
const API_KEY = (process.env.LLM_API_KEY || '').trim();
const BASE_URL = (process.env.LLM_BASE_URL || '').trim().replace(/\/$/, '');
const MODEL = (process.env.LLM_MODEL || '').trim();
const SEARCH_API_KEY = (process.env.TAVILY_API_KEY || process.env.SEARCH_API_KEY || '').trim();
const SEARCH_PROVIDER = (process.env.SEARCH_PROVIDER || 'tavily').toLowerCase();
const SEARCH_MAX = Math.max(1, parseInt(process.env.SEARCH_MAX || '5', 10));
const MOCK = process.env.LLM_MOCK === '1';
const MAX_REVIEWS = Math.max(1, parseInt(process.env.MAX_REVIEWS || '25', 10));

// 高风险必查名单（与历史核查口径一致）
const HIGH_RISK = ['李新奇', '毛亚丽', '唐豪', '李绿周', '周宇', '申恒', '王云江'];

// ---------- 北京时间的日期分量 ----------
function bjParts(d = new Date()) {
  const p = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  }).formatToParts(d);
  const g = (t) => p.find((x) => x.type === t).value;
  return { y: g('year'), m: g('month'), d: g('day'), hh: g('hour'), mm: g('minute'), ss: g('second') };
}
const now = new Date();
const bp = bjParts(now);
const today = `${bp.y}-${bp.m}-${bp.d}`;
const isoNow = `${bp.y}-${bp.m}-${bp.d}T${bp.hh}:${bp.mm}:${bp.ss}+08:00`;
const bjDate = new Date(Date.UTC(+bp.y, +bp.m - 1, +bp.d));
const dayOfYear = Math.floor((bjDate - new Date(Date.UTC(+bp.y, 0, 0))) / 86400000);
const group = dayOfYear % 7;

// ---------- 读取 professors 数组（按行） ----------
function loadProfessors(text) {
  const lines = text.split(/\r?\n/);
  const startIdx = lines.findIndex((l) => /^\s*const professors\s*=\s*\[/.test(l));
  if (startIdx < 0) throw new Error('未找到 const professors = [');
  let endIdx = -1;
  for (let i = startIdx + 1; i < lines.length; i++) {
    if (/^\s*\];/.test(lines[i])) { endIdx = i; break; }
  }
  if (endIdx < 0) throw new Error('未找到 professors 数组结束 ]');
  const profLines = [];
  for (let i = startIdx + 1; i < endIdx; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed.startsWith('{')) continue;
    let obj;
    try { obj = JSON.parse(trimmed.replace(/,$/, '')); } catch { continue; }
    if (obj && typeof obj.id === 'number') {
      profLines.push({ lineIdx: i, obj, suffix: trimmed.endsWith(',') ? ',' : '', dirty: false });
    }
  }
  return { lines, profLines };
}

// ---------- 选取批次 ----------
function selectBatch(profLines) {
  const ids = new Set();
  for (const p of profLines) if (HIGH_RISK.includes(p.obj.name)) ids.add(p.obj.id);
  let rolling = profLines.filter((p) => p.obj.id % 7 === group).map((p) => p.obj.id);
  const budget = MAX_REVIEWS - ids.size;
  if (budget > 0 && rolling.length > budget) rolling = rolling.slice(0, budget);
  rolling.forEach((id) => ids.add(id));
  return [...ids];
}

// ---------- 联网搜索（独立搜索 API；默认 Tavily） ----------
async function searchWeb(query) {
  if (MOCK) {
    return [{ title: `Mock 搜索结果：${query}`, url: 'https://example.com/mock', content: '这是本地 mock 的检索片段，不会进入线上数据。' }];
  }
  if (!SEARCH_API_KEY) throw new Error('缺少搜索 API key（TAVILY_API_KEY 或 SEARCH_API_KEY）');
  if (SEARCH_PROVIDER === 'tavily') {
    const res = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      // 按 Tavily 当前官方文档：鉴权只用 Authorization: Bearer 头（body 内的 api_key 已不再推荐）
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${SEARCH_API_KEY}` },
      body: JSON.stringify({
        query,
        max_results: SEARCH_MAX,
        search_depth: 'advanced',
        include_raw_content: false,
      }),
    });
    if (!res.ok) {
      const t = await res.text().catch(() => '');
      throw new Error(`Tavily ${res.status}: ${t.slice(0, 200)}`);
    }
    const data = await res.json();
    return (data.results || []).map((r) => ({ title: r.title, url: r.url, content: r.content || '' }));
  }
  // 其他搜索供应商可在此扩展
  throw new Error(`不支持的 SEARCH_PROVIDER: ${SEARCH_PROVIDER}`);
}

// ---------- 构造核查 prompt（注入检索上下文） ----------
function buildPrompt(p, results) {
  const ctx = results.length
    ? results.map((r, i) => `[${i + 1}] ${r.title}\n${r.url}\n${(r.content || '').slice(0, 600)}`).join('\n\n')
    : '（无搜索结果）';
  return `你是一个严谨的学者信息核查助手。以下是针对该教授的最新联网搜索结果（来源已给出）。
请仅基于这些可核实的公开来源进行判断，不要使用你自己的记忆，不要猜测。

姓名：${p.name}
院校：${p.uni}
当前职称：${p.title || '（未知）'}
院系：${p.dept || '（未知）'}
当前邮箱：${p.email || '（空）'}
当前成就/奖项：${p.achievements || '（空）'}

=== 联网搜索结果 ===
${ctx}
=== 结束 ===

请依据上述来源回答：
1. 职称是否有变动（晋升/新聘）？
2. 近一年是否有重要新成果、新奖项、新职务？
3. 邮箱/电话/办公室是否公开变更？

仅基于可核实的公开来源，不要猜测。以 JSON 返回：
{
  "verified": true,
  "confidence": "high|medium|low",
  "title": "<若职称变动请给出新职称，否则 null>",
  "bio_add": "<若有重要新成果/奖项，用一句话中文描述，否则 null>",
  "ach_add": "<若有可加入 achievements 的新奖项，给简短中文短语，否则 null>",
  "email": "<若当前为空且来源能核实新邮箱则给，否则 null>",
  "phone": "<若当前为空且来源能核实新电话则给，否则 null>",
  "office": "<若变更则给新地址，否则 null>",
  "notes": "<任何不确定或需人工确认的事项，否则 null>",
  "sources": ["url1", "url2"]
}
其中 sources 只填你实际引用的来源 URL（取自上面的 [1]..[n] 的 url）。`;
}

// ---------- 解析 LLM 返回的 JSON ----------
function parseJsonContent(content) {
  try {
    const m = content.match(/\{[\s\S]*\}/);
    if (m) return JSON.parse(m[0]);
  } catch { /* ignore */ }
  return {};
}

// ---------- 调用 LLM（OpenAI 兼容 chat/completions；含一次失败重试） ----------
async function callLLM(prompt) {
  if (!BASE_URL) throw new Error('缺少 LLM_BASE_URL，请在仓库 Secrets 中配置 LLM 的接口地址');
  if (!MODEL) throw new Error('缺少 LLM_MODEL，请在仓库 Secrets 中配置模型名');
  const body = {
    model: MODEL,
    temperature: 0,
    messages: [
      { role: 'system', content: '你是严谨的学者信息核查助手，仅基于给定的公开来源回答，返回严格 JSON。' },
      { role: 'user', content: prompt },
    ],
  };
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` };
  for (const withFmt of [true, false]) {
    const b = withFmt ? { ...body, response_format: { type: 'json_object' } } : body;
    const res = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST', headers, body: JSON.stringify(b),
    });
    if (res.ok) {
      const data = await res.json();
      return data.choices?.[0]?.message?.content || '';
    }
    if (withFmt) continue; // 带 format 失败则重试一次不带
    const t = await res.text().catch(() => '');
    throw new Error(`LLM ${res.status}: ${t.slice(0, 200)}`);
  }
  throw new Error('LLM 调用失败');
}

// ---------- mock 模式（本地验证改写链路，不联网） ----------
let _mockFirst = true;
async function reviewProfessor(p, results) {
  if (MOCK) {
    if (_mockFirst) {
      _mockFirst = false;
      return { verified: true, confidence: 'medium', title: null, bio_add: '测试核查：样例新增成果（mock，不会进入线上）', ach_add: null, email: null, phone: null, office: null, notes: null, sources: [(results[0] && results[0].url) || 'https://example.com/mock'] };
    }
    return { verified: true, confidence: 'high', title: null, bio_add: null, ach_add: null, email: null, phone: null, office: null, notes: null, sources: [] };
  }
  const content = await callLLM(buildPrompt(p.obj, results));
  return parseJsonContent(content);
}

// ---------- 保守改写规则 ----------
function isValidEmail(s) { return typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s); }
function isValidPhone(s) { return typeof s === 'string' && /^[0-9+\-\s()]{6,20}$/.test(s); }

function applyResult(p, r) {
  const changes = [];
  const src = Array.isArray(r.sources) && r.sources.length ? r.sources[0] : '';
  if (r.title && typeof r.title === 'string' && r.title.trim() && r.title !== p.obj.title) {
    p.obj.title = r.title.trim(); changes.push(`职称 → ${r.title}`);
  }
  if (r.bio_add && typeof r.bio_add === 'string' && r.bio_add.trim()) {
    const tag = ` [核查${today}] ${r.bio_add.trim()}` + (src ? `（来源：${src}）` : '');
    p.obj.bio = (p.obj.bio || '') + tag; changes.push('bio 追加');
  }
  if (r.ach_add && typeof r.ach_add === 'string' && r.ach_add.trim()) {
    p.obj.achievements = (p.obj.achievements ? p.obj.achievements + '、' : '') + r.ach_add.trim();
    changes.push('achievements 追加');
  }
  if (r.email && isValidEmail(r.email) && !p.obj.email) {
    p.obj.email = r.email; changes.push('email 补全');
  }
  if (r.phone && isValidPhone(r.phone) && !p.obj.phone) {
    p.obj.phone = r.phone; changes.push('phone 补全');
  }
  if (r.office && typeof r.office === 'string' && r.office.trim() && r.office !== p.obj.office) {
    p.obj.office = r.office.trim(); changes.push('office 更新');
  }
  return changes;
}

// ---------- 版本/时间戳滚动（patch +1） ----------
function bumpMeta() {
  const dataRaw = fs.readFileSync(DATA_PATH, 'utf8');
  const mm = dataRaw.match(/\bconst DATA_META = (\{[\s\S]*?\});/);
  const meta = JSON.parse(mm[1]);
  const v = meta.version.split('.');
  v[2] = String((+v[2] || 0) + 1);
  meta.version = v.join('.');
  meta.lastUpdated = today;
  meta.lastUpdatedTime = isoNow;
  meta.updateLog.push({
    date: today,
    changes: `内容审查与更新（GitHub Actions + 独立搜索API + LLM）：高风险名单及滚动批次核查完成，部分记录已据公开来源修正/补全。详见 CONTENT_REVIEW.md。`,
  });
  const newData = dataRaw.replace(mm[0], `const DATA_META = ${JSON.stringify(meta, null, 2)};`);
  fs.writeFileSync(DATA_PATH, newData);

  const ver = JSON.parse(fs.readFileSync(VERSION_PATH, 'utf8'));
  ver.version = meta.version; ver.lastUpdated = today; ver.lastUpdatedTime = isoNow;
  ver.updateLog.push(meta.updateLog[meta.updateLog.length - 1]);
  fs.writeFileSync(VERSION_PATH, JSON.stringify(ver, null, 2) + '\n');
}

// ---------- 报告 ----------
function appendReport(reviewed, anyChange) {
  const ts = new Date().toISOString();
  let md = `\n## ${today} 内容核查（GitHub Actions${MOCK ? ' · MOCK' : ' · 独立搜索+LLM'}）\n\n`;
  md += `- 运行时间(UTC)：${ts}\n- 审查人数：${reviewed.length}\n- 有数据变更：${anyChange ? '是' : '否'}\n\n`;
  for (const r of reviewed) {
    md += `### ${r.name}（id ${r.id}）\n`;
    if (r.error) { md += `- ⚠️ 核查失败：${r.error}\n`; continue; }
    const res = r.result || {};
    if (r.changes && r.changes.length) md += `- ✅ 已应用：${r.changes.join('；')}\n`;
    if (res.notes) md += `- 📝 需人工复核：${res.notes}\n`;
    if (Array.isArray(r.searchUrls) && r.searchUrls.length) md += `- 🔎 检索来源：${r.searchUrls.join('，')}\n`;
    if (Array.isArray(res.sources) && res.sources.length) md += `- 🔗 引用来源：${res.sources.join('，')}\n`;
    if (!r.changes?.length && !res.notes) md += `- ✓ 与公开来源一致，无需变更\n`;
  }
  let existing = '';
  try { existing = fs.readFileSync(REPORT_PATH, 'utf8'); } catch { existing = '# 内容核查日志（CONTENT_REVIEW）\n'; }
  fs.writeFileSync(REPORT_PATH, existing + md);
}

// ---------- 主流程 ----------
(async () => {
  if (!API_KEY && !MOCK) {
    console.error('[content-review] 缺少环境变量 LLM_API_KEY，请在仓库 Secrets 中添加后重试。');
    process.exit(1);
  }
  if (!MOCK && !SEARCH_API_KEY) {
    console.error('[content-review] 缺少搜索 API key（TAVILY_API_KEY），请在仓库 Secrets 中添加后重试。');
    process.exit(1);
  }
  // 诊断：仅打印 key 前缀与长度、是否含首尾空白（不泄露完整密钥），用于确认 Tavily key 类型与是否被空格/换行污染
  const rawTav = process.env.TAVILY_API_KEY !== undefined ? process.env.TAVILY_API_KEY : process.env.SEARCH_API_KEY;
  const tavTrim = (rawTav || '').trim();
  const diacPrefix = tavTrim.slice(0, 5);
  const tavHadWs = rawTav !== undefined && rawTav !== tavTrim;
  console.error(`[diag] TAVILY_API_KEY 前缀=${diacPrefix || '(空)'} len=${tavTrim.length} 含首尾空白=${tavHadWs ? '是(已自动trim)' : '否'} | LLM_BASE_URL=${BASE_URL ? '(已设置)' : '(空)'} | LLM_MODEL=${MODEL ? '(已设置)' : '(空)'}`);
  const text = fs.readFileSync(DATA_PATH, 'utf8');
  const { lines, profLines } = loadProfessors(text);
  const idSet = selectBatch(profLines);
  const byId = new Map(profLines.map((p) => [p.obj.id, p]));
  const reviewed = [];
  let changeCount = 0;
  for (const id of idSet) {
    const p = byId.get(id);
    if (!p) continue;
    let result, searchUrls = [], err;
    try {
      const results = await searchWeb(`${p.obj.name} ${p.obj.uni} 量子计算 教授 官方主页 最新成果 新晋`);
      searchUrls = results.map((r) => r.url);
      result = await reviewProfessor(p, results);
    } catch (e) {
      err = String(e.message || e);
      console.error(`核查 ${p.obj.name} 失败:`, e.message);
      reviewed.push({ id, name: p.obj.name, error: err });
      continue;
    }
    const changes = applyResult(p, result);
    if (changes.length) { p.dirty = true; changeCount++; }
    reviewed.push({ id, name: p.obj.name, result, changes, searchUrls });
    if (!MOCK) await new Promise((r) => setTimeout(r, 600));
  }
  const anyChange = profLines.some((p) => p.dirty);
  if (anyChange) {
    for (const p of profLines) if (p.dirty) lines[p.lineIdx] = '  ' + JSON.stringify(p.obj) + p.suffix;
    fs.writeFileSync(DATA_PATH, lines.join('\n'));
    bumpMeta();
  }
  appendReport(reviewed, anyChange);
  console.log(`[content-review] 审查 ${reviewed.length} 人，有变更 ${changeCount} 人，文件变更=${anyChange}`);
  const failed = reviewed.filter((r) => r.error).length;
  if (failed > 0 && failed === reviewed.length && !MOCK) {
    console.error(`[content-review] ⚠️ 全部 ${reviewed.length} 人的联网搜索均失败，疑似 TAVILY_API_KEY 无效或 Tavily 接口鉴权方式变更。请检查密钥后重试。`);
    process.exit(1);
  }
})();
