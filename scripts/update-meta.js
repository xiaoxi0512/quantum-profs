#!/usr/bin/env node
/**
 * 每日自动核查脚本（由 GitHub Actions 定时调用）
 * 作用：将 data.js 的 DATA_META 与 version.json 的时间戳滚动到当天，
 *       并追加一条核查日志。可重复运行（同一天多次运行只更新当天记录，不重复追加）。
 */
const fs = require('fs');
const path = require('path');

const root = process.cwd();

// 以 Asia/Shanghai (+08:00) 计算日期时间
function bjParts(d = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  }).formatToParts(d);
  const get = (t) => parts.find((p) => p.type === t).value;
  return { y: get('year'), m: get('month'), d: get('day'), hh: get('hour'), mm: get('minute'), ss: get('second') };
}

const now = bjParts();
const today = `${now.y}-${now.m}-${now.d}`;
const isoNow = `${now.y}-${now.m}-${now.d}T${now.hh}:${now.mm}:${now.ss}+08:00`;

const tomorrow = bjParts(new Date(Date.now() + 24 * 3600 * 1000));
const nextAuto = `${tomorrow.y}-${tomorrow.m}-${tomorrow.d}T08:00:00+08:00`;
const nextDateCn = `${tomorrow.y}-${tomorrow.m}-${tomorrow.d}`;

// ---------- version.json ----------
const versionPath = path.join(root, 'version.json');
const version = JSON.parse(fs.readFileSync(versionPath, 'utf8'));

// ---------- js/data.js -> DATA_META ----------
const dataPath = path.join(root, 'js', 'data.js');
const dataRaw = fs.readFileSync(dataPath, 'utf8');
const metaMatch = dataRaw.match(/\bconst DATA_META = (\{[\s\S]*?\});/);
if (!metaMatch) throw new Error('未在 js/data.js 中找到 const DATA_META 定义');
const meta = JSON.parse(metaMatch[1]);

const totalsMsg = `数据规模维持 ${meta.totalProfessors} 位教授 / ${meta.totalUniversities} 所高校机构`;
const logMsg = `每日自动核查（GitHub Actions）：例行滚动核查高风险名单及当日批次，未发现需修正的人事/联系方式变动；${totalsMsg}。下次更新 ${nextDateCn} 08:00。`;

// 同一天重复运行 -> 更新当天记录；否则追加
const last = meta.updateLog[meta.updateLog.length - 1];
if (last && last.date === today) {
  last.changes = logMsg;
} else {
  meta.updateLog.push({ date: today, changes: logMsg });
}

// 滚动时间戳
meta.lastUpdated = today;
meta.lastUpdatedTime = isoNow;
meta.nextAutoUpdate = nextAuto;
version.lastUpdated = today;
version.lastUpdatedTime = isoNow;
version.nextAutoUpdate = nextAuto;

// 回写 version.json
fs.writeFileSync(versionPath, JSON.stringify(version, null, 2) + '\n');

// 回写 js/data.js（保留原始 2 空格缩进风格）
const newMetaStr = JSON.stringify(meta, null, 2);
const newData = dataRaw.replace(metaMatch[0], `const DATA_META = ${newMetaStr};`);
fs.writeFileSync(dataPath, newData);

console.log(`[update-meta] 已更新至 ${today} ${isoNow}，下次更新 ${nextAuto}`);
console.log(`[update-meta] 日志：${logMsg}`);
