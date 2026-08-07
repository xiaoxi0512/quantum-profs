// Data integrity validation script for js/data.js
const fs = require('fs');
const path = require('path');

// Load and evaluate data.js
const dataContent = fs.readFileSync(path.join(__dirname, 'js', 'data.js'), 'utf8');

// Create a context to evaluate the file (which defines const variables)
const context = {};
const wrappedCode = dataContent + '\n' +
  'this.DATA_META = DATA_META;\n' +
  'this.professors = professors;\n' +
  'this.APP_TAGS = APP_TAGS;\n' +
  'this.TECH_TAGS = TECH_TAGS;\n';
try {
  new Function(wrappedCode).call(context);
} catch (e) {
  console.error('SYNTAX ERROR:', e.message);
  process.exit(1);
}

const { DATA_META, professors } = context;

console.log('=== Data Integrity Validation ===');
console.log(`Total professors: ${professors.length}`);
console.log(`DATA_META version: ${DATA_META.version}`);
console.log(`DATA_META totalProfessors: ${DATA_META.totalProfessors}`);
console.log('');

// Check 1: Each professor has required fields non-empty
const requiredFields = ['uni', 'tier', 'name', 'title', 'dept', 'directions'];
const emptyEmail = [];
const emptyPhone = [];
const emptyRequired = [];

professors.forEach(p => {
  // Check required fields
  requiredFields.forEach(f => {
    if (!p[f] || (Array.isArray(p[f]) && p[f].length === 0)) {
      emptyRequired.push({ id: p.id, name: p.name, field: f });
    }
  });
  // Check email
  if (!p.email || p.email.trim() === '') {
    emptyEmail.push({ id: p.id, name: p.name, uni: p.uni });
  }
  // Check phone
  if (!p.phone || p.phone.trim() === '') {
    emptyPhone.push({ id: p.id, name: p.name, uni: p.uni });
  }
});

console.log(`--- Empty Email: ${emptyEmail.length} entries ---`);
emptyEmail.slice(0, 20).forEach(e => console.log(`  id:${e.id} ${e.name} @ ${e.uni}`));
if (emptyEmail.length > 20) console.log(`  ... and ${emptyEmail.length - 20} more`);

console.log(`--- Empty Phone: ${emptyPhone.length} entries ---`);
emptyPhone.slice(0, 20).forEach(e => console.log(`  id:${e.id} ${e.name} @ ${e.uni}`));
if (emptyPhone.length > 20) console.log(`  ... and ${emptyPhone.length - 20} more`);

console.log(`--- Empty Required Fields: ${emptyRequired.length} entries ---`);
emptyRequired.forEach(e => console.log(`  id:${e.id} ${e.name} field:${e.field}`));

// Check 2: Email domain matches university
const emailDomainMismatches = [];
professors.forEach(p => {
  if (!p.email || p.email.trim() === '') return;
  const domain = p.email.split('@')[1];
  if (!domain) {
    emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, reason: 'no @ sign' });
    return;
  }
  const d = domain.toLowerCase();
  const u = p.uni;
  
  // Known mappings
  if (u.includes('中国科学技术大学') || u.includes('中科大')) {
    if (!d.includes('ustc.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'ustc.edu.cn' });
  } else if (u.includes('北京大学') || u.includes('北大')) {
    if (!d.includes('pku.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'pku.edu.cn' });
  } else if (u.includes('清华大学') || u.includes('清华')) {
    if (!d.includes('tsinghua.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'tsinghua.edu.cn' });
  } else if (u.includes('浙江大学') || u.includes('浙大')) {
    if (!d.includes('zju.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'zju.edu.cn' });
  } else if (u.includes('中国科学院') || u.includes('中科院') || u.includes('精密测量')) {
    if (!d.includes('ac.cn') && !d.includes('ustc.edu.cn') && !d.includes('cas.cn')) {
      emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'ac.cn/cas.cn' });
    }
  } else if (u.includes('南京大学')) {
    if (!d.includes('nju.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'nju.edu.cn' });
  } else if (u.includes('上海交通大学') || u.includes('上海交大')) {
    if (!d.includes('sjtu.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'sjtu.edu.cn' });
  } else if (u.includes('复旦')) {
    if (!d.includes('fudan.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'fudan.edu.cn' });
  } else if (u.includes('北京师范大学') || u.includes('北师大')) {
    if (!d.includes('bnu.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'bnu.edu.cn' });
  } else if (u.includes('电子科技大学')) {
    if (!d.includes('uestc.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'uestc.edu.cn' });
  } else if (u.includes('国防科技大学')) {
    if (!d.includes('nudt.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'nudt.edu.cn' });
  } else if (u.includes('西北工业大学')) {
    if (!d.includes('nwpu.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'nwpu.edu.cn' });
  } else if (u.includes('天津大学')) {
    if (!d.includes('tju.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'tju.edu.cn' });
  } else if (u.includes('南方科技大学')) {
    if (!d.includes('sustech.edu.cn') && !d.includes('sustc.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'sustech.edu.cn' });
  } else if (u.includes('大连海事')) {
    if (!d.includes('dlmu.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'dlmu.edu.cn' });
  } else if (u.includes('山西大学')) {
    if (!d.includes('sxu.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'sxu.edu.cn' });
  } else if (u.includes('海南大学')) {
    if (!d.includes('hainanu.edu.cn') && !d.includes('hainan.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'hainanu.edu.cn' });
  } else if (u.includes('宁波大学')) {
    if (!d.includes('nbu.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'nbu.edu.cn' });
  } else if (u.includes('深圳大学')) {
    if (!d.includes('szu.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'szu.edu.cn' });
  } else if (u.includes('华南师范大学')) {
    if (!d.includes('scnu.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'scnu.edu.cn' });
  } else if (u.includes('合肥工业大学')) {
    if (!d.includes('hfut.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'hfut.edu.cn' });
  } else if (u.includes('西安交通大学') || u.includes('西安交大')) {
    if (!d.includes('xjtu.edu.cn')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'xjtu.edu.cn' });
  } else if (u.includes('香港中文大学')) {
    // CUHK Shenzhen uses cuhk.edu.cn
    if (!d.includes('cuhk.edu.cn') && !d.includes('cuhk.edu.hk')) emailDomainMismatches.push({ id: p.id, name: p.name, email: p.email, uni: p.uni, expected: 'cuhk.edu.cn/hk' });
  }
  // For enterprise/lab institutions, skip domain check
});

console.log(`\n--- Email Domain Mismatches: ${emailDomainMismatches.length} entries ---`);
emailDomainMismatches.forEach(e => console.log(`  id:${e.id} ${e.name} email:${e.email} uni:${e.uni} expected:${e.expected}`));

// Check 3: Duplicate IDs
const ids = professors.map(p => p.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log(`\n--- Duplicate IDs: ${dupes.length} ---`);
if (dupes.length) console.log('  Duplicates:', dupes);

// Check 4: ID sequence
const maxId = Math.max(...ids);
console.log(`\nMax ID: ${maxId}`);
console.log(`Expected count (maxId): ${maxId}`);
console.log(`Actual count: ${professors.length}`);
const missing = [];
for (let i = 1; i <= maxId; i++) {
  if (!ids.includes(i)) missing.push(i);
}
console.log(`Missing IDs: ${missing.length > 0 ? missing.join(', ') : 'none'}`);

// Summary
console.log('\n=== Summary ===');
console.log(`Syntax: OK`);
console.log(`Total entries: ${professors.length}`);
console.log(`Empty email: ${emptyEmail.length}`);
console.log(`Empty phone: ${emptyPhone.length}`);
console.log(`Empty required fields: ${emptyRequired.length}`);
console.log(`Email domain mismatches: ${emailDomainMismatches.length}`);
console.log(`Duplicate IDs: ${dupes.length}`);
console.log(`Missing IDs: ${missing.length}`);

// Find high-risk professors
const highRisk = ['李新奇', '毛亚丽', '唐豪', '李绿周', '周宇', '申恒', '王云江'];
console.log('\n=== High-Risk Professors ===');
highRisk.forEach(name => {
  const found = professors.filter(p => p.name === name);
  if (found.length > 0) {
    found.forEach(p => console.log(`  ${p.name} (id:${p.id}) @ ${p.uni} - email:${p.email || 'EMPTY'} phone:${p.phone || 'EMPTY'}`));
  } else {
    console.log(`  ${name}: NOT FOUND`);
  }
});

// Determine today's rolling batch group
// Aug 7, 2026 is day 219 of the year
// 219 mod 7 = 2
const dayOfYear = 219;
const todayGroup = dayOfYear % 7;
console.log(`\n=== Today's Rolling Batch: group ${todayGroup} (id mod 7 == ${todayGroup}) ===`);
const batch = professors.filter(p => p.id % 7 === todayGroup);
console.log(`Batch size: ${batch.length}`);
batch.forEach(p => console.log(`  id:${p.id} ${p.name} @ ${p.uni}`));

// Unique universities
const unis = [...new Set(professors.map(p => p.uni))];
console.log(`\nTotal unique universities: ${unis.length}`);
console.log(`DATA_META totalUniversities: ${DATA_META.totalUniversities}`);
