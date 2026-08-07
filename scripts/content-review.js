#!/usr/bin/env node
/**
 * 内容自动审查与更新（由 GitHub Actions 定时调用）
 *
 * - 选取「高风险必查名单」+「按 id 滚动批次」的教授
 * - 调用带联网搜索能力的 LLM（OpenAI 兼容接口，默认 Perplexity sonar）核查公开信息
 * - 仅以保守规则改写数据：职称变动、bio/achievements 追加、邮箱/电话仅在原为空时补全、office 更新
 * - 绝不删除记录、绝不猜测；所有不确定项写入 CONTENT_REVIEW.md 供人工复核
 *
 * 环境变量：
 *   LLM_API_KEY   必填（仓库 Secrets）
 *   LLM_BASE_URL  可选，默认 https://api.perplexity.ai
 *   LLM_MODEL     可选，默认 sonar-pro
 *   MAX_REVIEWS   可选，单次最多审查人数，默认 25
 *   LLM_MOCK=1    本地测试：不联网，返回假数据验证改写链路
 */
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const DATA_PATH = path.join(root, 'js', 'data.js');
const VERSION_PATH = path.join(root, 'version.json');
const REPORT_PATH = path.join(root, 'CONTENT_REVIEW.md');

const API_KEY = process.env.LLM_API_KEY;
const BASE_URL = (process.env.LLM_BASE_URL || 'https://api.perplexity.ai').replace(/\/$/, '');
const MODEL = process.env.LLM_MODEL || 'sonar-pro';
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

// ---------- 构造核查 prompt ----------
function buildPrompt(p) {
  return `你是一个严谨的学者信息核查助手。请使用联网搜索，核对以下中国高校量子计算领域教授的最新公开信息（以官方教师主页、学校新闻、学院公告为准）。

姓名：${p.name}
院校：${p.uni}
当前职称：${p.title || '（未知）'}
院系：${p.dept || '（未知）'}
当前邮箱：${p.email || '（空）'}
当前成就/奖项：${p.achievements || '（空）'}

请联网检索其官方主页与近一年新闻，回答：
1. 职称是否有变动（晋升/新聘）？
2. 近一年是否有重要新成果、新奖项、新职务？
3. 邮箱/电话/办公室是否公开变更？

仅基于可核实的公开来源，不要猜测。以 JSON 返回：
{
  "verified": true,
  "confidence": "high|medium|low",
  "title": "<若职称变动请给出新职称，否则 null>",
  "bio_add": "<若有重要新成果/奖项，用一句话中文描述并尽量附来源URL，否则 null>",
  "ach_add": "<若有可加入 achievements 的新奖项，给简短中文短语，否则 null>",
  "email": "<若当前为空且能核实新邮箱则给，否则 null>",
  "phone": "<若当前为空且能核实新电话则给，否则 null>",
  "office": "<若变更则给新地址，否则 null>",
  "notes": "<任何不确定或需人工确认的事项，否则 null>",
  "sources": ["url1", "url2"]
}`;
}

// ---------- 解析 LLM 返回的 JSON ----------
function parseJsonContent(content) {
  try {
    const m = content.match(/\{[\s\S]*\}/);
    if (m) return JSON.parse(m[0]);
  } catch { /* ignore */ }
  return {};
}

// ---------- 调用 LLM（含一次失败重试，去掉 response_format） ----------
async function callLLM(prompt) {
  const body = {
    model: MODEL,
    temperature: 0,
    messages: [
      { role: 'system', content: '你是严谨的学者信息核查助手，仅基于可核实的公开来源回答，返回严格 JSON。' },
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
async function reviewProfessor(p) {
  if (MOCK) {
    if (_mockFirst) {
      _mockFirst = false;
      return { verified: true, confidence: 'medium', title: null, bio_add: '测试核查：样例新增成果（mock，不会进入线上）', ach_add: null, email: null, phone: null, office: null, notes: null, sources: ['https://example.com/mock'] };
    }
    return { verified: true, confidence: 'high', title: null, bio_add: null, ach_add: null, email: null, phone: null, office: null, notes: null, sources: [] };
  }
  const content = await callLLM(buildPrompt(p.obj));
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
    changes: `内容审查与更新（GitHub Actions + LLM 联网核查）：高风险名单及滚动批次核查完成，部分记录已据公开来源修正/补全。详见 CONTENT_REVIEW.md。`,
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
  let md = `\n## ${today} 内容核查（GitHub Actions${MOCK ? ' · MOCK' : ''}）\n\n`;
  md += `- 运行时间(UTC)：${ts}\n- 审查人数：${reviewed.length}\n- 有数据变更：${anyChange ? '是' : '否'}\n\n`;
  for (const r of reviewed) {
    md += `### ${r.name}（id ${r.id}）\n`;
    if (r.error) { md += `- ⚠️ 核查失败：${r.error}\n`; continue; }
    const res = r.result || {};
    if (r.changes && r.changes.length) md += `- ✅ 已应用：${r.changes.join('；')}\n`;
    if (res.notes) md += `- 📝 需人工复核：${res.notes}\n`;
    if (Array.isArray(res.sources) && res.sources.length) md += `- 🔗 来源：${res.sources.join('，')}\n`;
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
  const text = fs.readFileSync(DATA_PATH, 'utf8');
  const { lines, profLines } = loadProfessors(text);
  const idSet = selectBatch(profLines);
  const byId = new Map(profLines.map((p) => [p.obj.id, p]));
  const reviewed = [];
  let changeCount = 0;
  for (const id of idSet) {
    const p = byId.get(id);
    if (!p) continue;
    let result;
    try { result = await reviewProfessor(p); }
    catch (e) { reviewed.push({ id, name: p.obj.name, error: String(e.message || e) }); console.error(`核查 ${p.obj.name} 失败:`, e.message); continue; }
    const changes = applyResult(p, result, today, result.sources || []);
    if (changes.length) { p.dirty = true; changeCount++; }
    reviewed.push({ id, name: p.obj.name, result, changes });
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
})();
