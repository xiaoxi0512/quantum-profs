// ===== 应用逻辑 =====

let currentTechFilter = 'all';
let currentAppFilter = 'all';
let currentTierFilter = 'all';
let currentFeatureFilter = '';
let searchTerm = '';
let currentProvinceFilter = 'all';
let updateCheckInterval = null;

// ===== 省份映射：依据高校/机构名称推导所在省份（用于「省份」筛选） =====
// 优先精确匹配（高校名不含省份/城市关键字），否则按关键字（城市/区域）判定。
const PROVINCE_EXACT = {
  '清华大学': '北京',
  '百度研究院量子计算研究所': '北京',
  '玻色量子': '北京',
  '华翊量子': '北京',
  '首都师范大学': '北京',
  '国家纳米科学中心': '北京',
  '中关村实验室': '北京',
  '中国科学院半导体研究所': '北京',
  '中国科学院计算技术研究所': '北京',
  '中国科学院空天信息创新研究院': '北京',
  '中国科学院理化技术研究所': '北京',
  '中国科学院理论物理研究所': '北京',
  '中国科学院软件研究所': '北京',
  '中国科学院数学与系统科学研究院': '北京',
  '中国科学院物理研究所': '北京',
  '中国科学院自动化研究所': '北京',
  '中国人民大学': '北京',
  '中国信息通信研究院': '北京',
  '中国移动通信研究院': '北京',
  '中国长城研究院': '北京',
  '中科院物理所': '北京',
  '复旦大学': '上海',
  '同济大学': '上海',
  '华东师范大学': '上海',
  '建信金融科技有限责任公司': '上海',
  '图灵量子': '上海',
  '中国银联金融科技研究院': '上海',
  '南开大学': '天津',
  '本源量子': '安徽',
  '国盾量子': '安徽',
  '国仪量子': '安徽',
  '弧光量子': '安徽',
  '科大国盾量子技术股份有限公司': '安徽',
  '中国科学技术大学': '安徽',
  '东南大学': '江苏',
  '国家并行计算机工程技术研究中心': '江苏',
  '中国移动云能力中心': '江苏',
  '之江实验室': '浙江',
  '华中科技大学': '湖北',
  '中国科学院精密测量科学与技术创新研究院': '湖北',
  '中科酷原': '湖北',
  '中科酷原科技（武汉）有限公司': '湖北',
  '中南大学': '湖南',
  '国防科技大学': '湖南',
  '中山大学': '广东',
  '华南理工大学': '广东',
  '华南师范大学': '广东',
  '暨南大学': '广东',
  '南方科技大学': '广东',
  '腾讯量子实验室': '广东',
  '鹏城实验室': '广东',
  '电子科技大学': '四川',
  '西南交通大学': '四川',
  '西北大学': '陕西',
  '西北工业大学': '陕西',
  '东北大学': '辽宁'
};

// 关键字匹配顺序很重要：广东/广州/深圳 必须排在 香港/合肥 之前，
// 否则「香港科技大学(广州)」「哈尔滨工业大学(深圳)」会被错判。
const PROVINCE_KW = [
  ['澳门', '澳门'],
  ['台湾', '台湾'],
  ['广东', '广东'], ['广州', '广东'], ['深圳', '广东'], ['珠海', '广东'], ['东莞', '广东'], ['佛山', '广东'], ['中山', '广东'], ['鹏城', '广东'],
  ['香港', '香港'],
  ['北京', '北京'],
  ['上海', '上海'],
  ['天津', '天津'],
  ['重庆', '重庆'],
  ['新疆', '新疆'],
  ['内蒙古', '内蒙古'],
  ['黑龙江', '黑龙江'], ['哈尔滨', '黑龙江'],
  ['吉林', '吉林'], ['长春', '吉林'],
  ['辽宁', '辽宁'], ['大连', '辽宁'], ['沈阳', '辽宁'],
  ['河北', '河北'],
  ['山西', '山西'], ['太原', '山西'],
  ['山东', '山东'], ['济南', '山东'], ['青岛', '山东'],
  ['河南', '河南'], ['郑州', '河南'],
  ['陕西', '陕西'], ['西安', '陕西'],
  ['甘肃', '甘肃'], ['兰州', '甘肃'],
  ['宁夏', '宁夏'],
  ['青海', '青海'],
  ['西藏', '西藏'],
  ['云南', '云南'], ['昆明', '云南'],
  ['贵州', '贵州'],
  ['四川', '四川'], ['成都', '四川'],
  ['湖北', '湖北'], ['武汉', '湖北'],
  ['湖南', '湖南'], ['长沙', '湖南'], ['湘潭', '湖南'],
  ['江西', '江西'],
  ['安徽', '安徽'], ['合肥', '安徽'],
  ['江苏', '江苏'], ['南京', '江苏'], ['苏州', '江苏'], ['无锡', '江苏'], ['常州', '江苏'],
  ['浙江', '浙江'], ['杭州', '浙江'], ['宁波', '浙江'],
  ['福建', '福建'], ['福州', '福建'], ['厦门', '福建'], ['莆田', '福建'], ['泉州', '福建'],
  ['广西', '广西'], ['南宁', '广西'], ['桂林', '广西'],
  ['海南', '海南'], ['海口', '海南']
];

// 筛选栏里省份的展示顺序（仅显示数据中实际存在的省份）
const PROVINCE_ORDER = ['北京', '上海', '天津', '重庆', '广东', '江苏', '浙江', '安徽', '福建', '山东', '山西', '河南', '湖北', '湖南', '四川', '陕西', '辽宁', '吉林', '黑龙江', '河北', '江西', '云南', '贵州', '甘肃', '海南', '内蒙古', '新疆', '广西', '青海', '宁夏', '西藏', '香港', '澳门', '台湾'];

function getProvince(uni) {
  if (!uni) return '未知';
  if (PROVINCE_EXACT[uni]) return PROVINCE_EXACT[uni];
  for (let i = 0; i < PROVINCE_KW.length; i++) {
    if (uni.indexOf(PROVINCE_KW[i][0]) !== -1) return PROVINCE_KW[i][1];
  }
  return '未知';
}

// 统一企业名的半角/全角括号，避免同一公司因标点差异被拆成两个分组
function normalizeGroupKey(name) {
  return name.replace(/\(/g, '（').replace(/\)/g, '）')
             .replace(/\[/g, '［').replace(/\]/g, '］')
             .replace(/\{/g, '｛').replace(/\}/g, '｝');
}

// ===== 初始化更新状态栏 =====
function initUpdateBar() {
  if (typeof DATA_META === 'undefined') return;

  // 显示当前版本信息
  document.getElementById('lastUpdateDate').textContent = DATA_META.lastUpdated || '未知';
  document.getElementById('dataVersion').textContent = DATA_META.version || '未知';

  // 计算并显示下次更新时间
  const nextTime = DATA_META.nextAutoUpdate;
  if (nextTime) {
    const next = new Date(nextTime);
    const now = new Date();
    if (next > now) {
      const diffH = Math.ceil((next - now) / 3600000);
      document.getElementById('nextUpdateDate').textContent = `明日 08:00 (${diffH}小时后)`;
    } else {
      document.getElementById('nextUpdateDate').textContent = '今日 08:00 (即将执行)';
    }
  } else {
    document.getElementById('nextUpdateDate').textContent = '明日 08:00';
  }

  // 更新副标题
  document.getElementById('subtitle').textContent =
    `${DATA_META.totalProfessors || ''}位教授 | ${DATA_META.totalUniversities || ''}所高校 | 含课题组成员 | 数据更新：${DATA_META.lastUpdated || ''}`;

  // 检查是否需要自动刷新（每天8点后如果数据还是昨天的，提示检查更新）
  checkStaleData();
}

// ===== 检查数据是否过期 =====
function checkStaleData() {
  if (typeof DATA_META === 'undefined') return;
  const lastUpdate = new Date(DATA_META.lastUpdatedTime || DATA_META.lastUpdated);
  const now = new Date();
  const hoursSinceUpdate = (now - lastUpdate) / 3600000;

  if (hoursSinceUpdate > 26) {
    // 超过26小时未更新，提示用户
    const status = document.getElementById('updateStatus');
    status.className = 'update-status visible has-update';
    status.textContent = '⚠️ 数据已超过24小时未更新，建议点击"检查更新"获取最新信息';
  }
}

// ===== 检查更新（从version.json读取最新版本信息） =====
function checkForUpdates() {
  const status = document.getElementById('updateStatus');
  const btn = document.getElementById('checkUpdateBtn');
  btn.disabled = true;
  btn.textContent = '🔄 检查中...';
  status.className = 'update-status visible';
  status.textContent = '正在检查数据更新...';

  // 请求 version.json 以获取最新版本（加时间戳防缓存）
  fetch('version.json?t=' + Date.now())
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(data => {
      const currentVersion = (typeof DATA_META !== 'undefined') ? DATA_META.version : '0';
      const currentUpdate = (typeof DATA_META !== 'undefined') ? DATA_META.lastUpdated : '';

      if (data.version !== currentVersion || data.lastUpdated !== currentUpdate) {
        // 有新版本
        status.className = 'update-status visible has-update';
        status.innerHTML = `🎉 发现新版本！<strong>v${data.version}</strong>（更新于 ${data.lastUpdated}）<button class="update-btn" style="margin-left:8px" onclick="window.location.reload(true)">立即刷新加载</button>`;
        // 自动刷新
        setTimeout(() => window.location.reload(true), 3000);
      } else {
        // 已是最新
        status.className = 'update-status visible';
        const nextTime = data.nextAutoUpdate ? new Date(data.nextAutoUpdate) : null;
        const nextStr = nextTime ? `${nextTime.getMonth()+1}月${nextTime.getDate()}日 08:00` : '明日 08:00';
        status.textContent = `✅ 数据已是最新版本 (v${currentVersion})，下次自动更新：${nextStr}`;
      }
    })
    .catch(err => {
      // 本地文件模式无法fetch（file协议），改为基于时间判断
      if (window.location.protocol === 'file:') {
        status.className = 'update-status visible';
        if (typeof DATA_META !== 'undefined') {
          status.innerHTML = `ℹ️ 当前为本地模式 (v${DATA_META.version})，最后更新：${DATA_META.lastUpdated}。<br>在线部署后可自动检查更新，下次自动更新：${DATA_META.autoUpdateSchedule || '每日 08:00'}`;
        } else {
          status.textContent = 'ℹ️ 本地模式，无法自动检查更新。';
        }
      } else {
        status.className = 'update-status visible error';
        status.textContent = '❌ 检查更新失败：' + err.message + '。请稍后重试。';
      }
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = '🔄 检查更新';
    });
}

// ===== 启动定时检查（每30分钟检查一次version.json） =====
function startAutoCheck() {
  // 首次延迟5秒检查
  setTimeout(() => {
    if (window.location.protocol !== 'file:') {
      checkForUpdates();
    }
  }, 5000);

  // 每30分钟检查一次
  updateCheckInterval = setInterval(() => {
    if (window.location.protocol !== 'file:') {
      checkForUpdates();
    }
  }, 30 * 60 * 1000);
}

// ===== 动态生成筛选标签栏（随 TECH_TAGS/APP_TAGS 自动扩展） =====
function buildFilterBar() {
  const techRow = document.getElementById('techFiltersRow');
  const appRow = document.getElementById('appFiltersRow');
  const provRow = document.getElementById('provinceFiltersRow');
  if (techRow) {
    Object.keys(TECH_TAGS).forEach(key => {
      const t = TECH_TAGS[key];
      const b = document.createElement('button');
      b.className = 'filter-btn tech-pill';
      b.dataset.tech = key;
      b.innerHTML = `<span class="dot" style="background:${t.color}"></span>${t.name}`;
      techRow.appendChild(b);
    });
  }
  if (appRow) {
    Object.keys(APP_TAGS).forEach(key => {
      const a = APP_TAGS[key];
      const b = document.createElement('button');
      b.className = 'filter-btn app-pill';
      b.dataset.app = key;
      b.innerHTML = `<span class="dot" style="background:${a.color}"></span>${a.name}`;
      appRow.appendChild(b);
    });
  }
  if (provRow && typeof professors !== 'undefined') {
    // 仅展示数据中实际存在的省份，按固定顺序排序
    const present = [...new Set(professors.map(p => getProvince(p.uni)))].filter(p => p !== '未知');
    const ordered = PROVINCE_ORDER.filter(p => present.includes(p));
    ordered.forEach(prov => {
      const b = document.createElement('button');
      b.className = 'filter-btn prov-pill';
      b.dataset.province = prov;
      b.innerHTML = `<span class="dot" style="background:#7e57c2"></span>${prov}`;
      provRow.appendChild(b);
    });
  }
}

// ===== 面包屑导航 =====
let currentProfessor = null;
function updateBreadcrumb(prof) {
  const bc = document.getElementById('breadcrumb');
  if (!bc) return;
  const parts = ['<span class="bc-home" onclick="resetAll()">🏠 主页</span>'];
  if (currentFeatureFilter === 'enterprise') {
    parts.push('<span class="bc-sep">›</span><span class="bc-item">🏢 有企业</span>');
  } else if (currentTechFilter !== 'all') {
    const t = TECH_TAGS[currentTechFilter];
    if (t) parts.push('<span class="bc-sep">›</span><span class="bc-item">' + t.name + '</span>');
  }
  if (currentAppFilter !== 'all') {
    const a = APP_TAGS[currentAppFilter];
    if (a) parts.push('<span class="bc-sep">›</span><span class="bc-item">' + a.name + '</span>');
  }
  if (currentTierFilter !== 'all') {
    parts.push('<span class="bc-sep">›</span><span class="bc-item">' + (TIER_NAMES[currentTierFilter] || currentTierFilter) + '</span>');
  }
  if (currentProvinceFilter !== 'all') {
    parts.push('<span class="bc-sep">›</span><span class="bc-item">' + currentProvinceFilter + '</span>');
  }
  if (prof) {
    parts.push('<span class="bc-sep">›</span><span class="bc-item">' + prof.uni + '</span>');
    parts.push('<span class="bc-sep">›</span><span class="bc-cur">' + prof.name + '</span>');
  } else {
    parts.push('<span class="bc-sep">›</span><span class="bc-item">全部学者</span>');
  }
  bc.innerHTML = parts.join('');
}

// ===== 一键返回主页（重置所有筛选+收起卡片，回到页面顶部） =====
function resetAll() {
  currentTechFilter = 'all';
  currentAppFilter = 'all';
  currentTierFilter = 'all';
  currentProvinceFilter = 'all';
  currentFeatureFilter = '';
  searchTerm = '';
  const sb = document.getElementById('searchBox');
  if (sb) sb.value = '';
  document.querySelectorAll('.filter-btn').forEach(b => {
    const isAll = b.dataset.tech === 'all' || b.dataset.app === 'all' || b.dataset.tier === 'all' || b.dataset.province === 'all';
    b.classList.toggle('active', !!isAll);
  });
  document.querySelectorAll('.prof-card.expanded').forEach(c => c.classList.remove('expanded'));
  currentProfessor = null;
  updateBreadcrumb(null);
  renderProfessors();
  // 回到顶部：主页按钮应返回首屏；用瞬时跳转（无 smooth），避免与"自动滑动"混淆
  window.scrollTo(0, 0);
}

// ===== 渲染教授卡片 =====
function renderCard(p) {
  // 确定卡片左边框颜色
  let cardClass = 'prof-card';
  if (p.enterprise) cardClass += ' tc-enterprise';
  else if (p.tech && p.tech.length > 0) cardClass += ' tc-' + p.tech[0];

  // 技术路线标签
  const techTags = (p.tech || []).map(t => {
    const tag = TECH_TAGS[t] || { name: t, color: '#8a8a8a' };
    return `<span class="tech-tag" style="background:${tag.color}">${tag.name}</span>`;
  }).join('');

  // 商业应用标签
  const appTags = (p.apps || []).map(a => {
    const tag = APP_TAGS[a] || { name: a, color: '#8a8a8a' };
    return `<span class="app-tag" style="background:${tag.color}">${tag.name}</span>`;
  }).join('');

  // 企业标识
  const entBadge = p.enterprise ? `<span class="enterprise-badge">🏢 ${p.enterprise.name}</span>` : '';

  // 构建链接按钮
  const links = [];
  const L = p.links || {};
  if (L.official) links.push(`<a class="link-btn link-official" href="${L.official}" target="_blank" onclick="event.stopPropagation()">🌐 官方主页</a>`);
  if (L.group) links.push(`<a class="link-btn link-group" href="${L.group}" target="_blank" onclick="event.stopPropagation()">🏠 课题组</a>`);
  if (L.scholar) links.push(`<a class="link-btn link-scholar" href="${L.scholar}" target="_blank" onclick="event.stopPropagation()">📊 Scholar</a>`);
  if (L.baidu) links.push(`<a class="link-btn link-baidu" href="${L.baidu}" target="_blank" onclick="event.stopPropagation()">📚 百度学术</a>`);
  // 实时搜索
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(p.name + ' ' + p.uni + ' 量子计算 2025 2026')}`;
  links.push(`<a class="link-btn link-search" href="${searchUrl}" target="_blank" onclick="event.stopPropagation()">🔍 搜索最新</a>`);
  // 知网
  const cnkiUrl = `https://kns.cnki.net/kns8/defaultresult/index?kw=${encodeURIComponent(p.name + ' 量子计算')}`;
  links.push(`<a class="link-btn link-cnki" href="${cnkiUrl}" target="_blank" onclick="event.stopPropagation()">📄 知网论文</a>`);

  // 企业详细信息
  const entInfo = p.enterprise ? `
    <div class="enterprise-info">
      <strong>🏢 关联企业:</strong> ${p.enterprise.name}<br>
      <strong>企业职务:</strong> ${p.enterprise.role}<br>
      <strong>企业规模:</strong> ${p.enterprise.stock}
      ${p.enterprise.url ? ` | <a href="${p.enterprise.url}" target="_blank" onclick="event.stopPropagation()">🔗 访问企业官网</a>` : ''}
    </div>
  ` : '';

  // 课题组成员
  const membersHtml = (p.members && p.members.length > 0) ? `
    <div class="members-section">
      <div class="members-title">👥 课题组成员（${p.members.length}人）</div>
      <div class="member-list">
        ${p.members.map(m => renderMember(m)).join('')}
      </div>
    </div>
  ` : '<div class="members-section"><div class="members-title" style="color:#999">👥 课题组成员信息待补充</div></div>';

  return `
    <div class="${cardClass}" id="card-${p.id}">
      <div class="card-head" onclick="toggleCard(${p.id})">
        <span class="prof-name">${p.name}</span>
        <span class="prof-title">${p.title}</span>
        ${entBadge}
        <span class="expand-icon">▼</span>
      </div>
      <div class="card-tags">
        ${techTags}
        ${appTags}
      </div>
      <div class="card-brief">
        <span class="dept">🏫 ${p.uni} · ${p.dept}</span><br>
        <span>研究方向: ${p.directions.join('、')}</span>
      </div>
      <div class="card-detail">
        <div class="card-detail-inner">
          <div class="detail-section">
            <div class="detail-section-title">📝 个人简介</div>
            <div class="detail-section-content">${p.bio || '暂无详细简介'}</div>
          </div>
          <div class="detail-section">
            <div class="detail-section-title">📧 联系方式</div>
            <div class="contact-info">
              <div class="row">${p.email ? `<span class="label">邮箱:</span> ${p.email}` : '<span class="label">邮箱:</span> 见官方主页'}</div>
              ${p.phone ? `<div class="row"><span class="label">电话:</span> ${p.phone}</div>` : ''}
              ${p.office ? `<div class="row"><span class="label">办公:</span> ${p.office}</div>` : ''}
            </div>
          </div>
          ${p.achievements ? `
          <div class="detail-section">
            <div class="detail-section-title">🏆 代表性成果</div>
            <div class="achievements">${p.achievements}</div>
          </div>
          ` : ''}
          ${entInfo}
          <div class="detail-section">
            <div class="detail-section-title">🔗 科研链接</div>
            <div class="links">${links.join('')}</div>
          </div>
          ${membersHtml}
        </div>
      </div>
    </div>
  `;
}

// ===== 渲染课题组成员卡片（三级） =====
function renderMember(m) {
  return `
    <div class="member-card" onclick="this.classList.toggle('expanded')">
      <div class="member-head">
        <span class="member-name">${m.name}</span>
        <span class="member-role">${m.role}</span>
        <span class="member-expand">▼</span>
      </div>
      <div class="member-detail">
        <div class="member-detail-content">
          <div class="row"><span class="label">研究方向:</span> ${m.research || '暂无'}</div>
          ${m.email ? `<div class="row"><span class="label">邮箱:</span> ${m.email}</div>` : ''}
          ${m.phone ? `<div class="row"><span class="label">电话:</span> ${m.phone}</div>` : ''}
        </div>
      </div>
    </div>
  `;
}

// ===== 展开/折叠卡片 =====
function toggleCard(id) {
  const card = document.getElementById('card-' + id);
  if (!card) return;
  const willExpand = !card.classList.contains('expanded');
  card.classList.toggle('expanded');
  if (willExpand) {
    const p = professors.find(x => x.id === id);
    currentProfessor = p || null;
    updateBreadcrumb(p);
  } else {
    currentProfessor = null;
    updateBreadcrumb(null);
  }
}

// ===== 主渲染函数 =====
function renderProfessors() {
  const content = document.getElementById('content');
  let filtered = professors;

  // 技术路线筛选
  if (currentTechFilter !== 'all') {
    filtered = filtered.filter(p => p.tech && p.tech.includes(currentTechFilter));
  }

  // 特色筛选：默认主页不展示企业学者，只有点选「🏢 有企业」才展示
  if (currentFeatureFilter === 'enterprise') {
    filtered = filtered.filter(p => p.enterprise);
  } else {
    filtered = filtered.filter(p => !p.enterprise);
  }

  // 商业应用筛选
  if (currentAppFilter !== 'all') {
    filtered = filtered.filter(p => p.apps && p.apps.includes(currentAppFilter));
  }

  // 院校层次筛选
  if (currentTierFilter !== 'all') {
    filtered = filtered.filter(p => p.tier === currentTierFilter);
  }

  // 省份筛选（依据高校名称推导）
  if (currentProvinceFilter !== 'all') {
    filtered = filtered.filter(p => getProvince(p.uni) === currentProvinceFilter);
  }

  // 搜索筛选
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.uni.toLowerCase().includes(term) ||
      p.directions.join('').toLowerCase().includes(term) ||
      (p.email || '').toLowerCase().includes(term) ||
      (p.bio || '').toLowerCase().includes(term) ||
      (p.achievements || '').toLowerCase().includes(term) ||
      (p.enterprise && p.enterprise.name || '').toLowerCase().includes(term)
    );
  }

  // 统计
  const uniCount = new Set(filtered.map(p => p.uni)).size;
  let statsText = `共 <strong>${filtered.length}</strong> 位教授 | <strong>${uniCount}</strong> 所高校/机构`;
  if (currentFeatureFilter === 'enterprise') statsText += ' | 🏢 已筛选有企业的教授';
  if (currentAppFilter !== 'all') statsText += ` | 已筛选应用领域: ${(APP_TAGS[currentAppFilter] || { name: currentAppFilter }).name}`;
  if (currentProvinceFilter !== 'all') statsText += ` | 已筛选省份: ${currentProvinceFilter}`;
  document.getElementById('stats').innerHTML = statsText;

  if (filtered.length === 0) {
    content.innerHTML = '<div class="no-results">未找到匹配的教授信息，请调整筛选条件</div>';
    return;
  }

  // 按院校/企业分组：企业学者统一按 enterprise.name 聚合，非企业学者按 uni 聚合
  const groups = {};
  filtered.forEach(p => {
    if (p.enterprise) {
      const key = normalizeGroupKey(p.enterprise.name);
      if (!groups[key]) groups[key] = { key, isEnterprise: true, tier: 'enterprise', profs: [] };
      groups[key].profs.push(p);
    } else {
      const key = p.uni;
      if (!groups[key]) groups[key] = { key, isEnterprise: false, tier: p.tier, profs: [] };
      groups[key].profs.push(p);
    }
  });

  // 排序：企业分组置顶，其余按院校层次 985 → 211 → 中科院 → 普通本科
  const GROUP_TIER_ORDER = { enterprise: -1, 985: 0, 211: 1, cas: 2, normal: 3 };
  const sortedGroups = Object.values(groups).sort((a, b) => {
    const ta = GROUP_TIER_ORDER[a.tier] !== undefined ? GROUP_TIER_ORDER[a.tier] : 9;
    const tb = GROUP_TIER_ORDER[b.tier] !== undefined ? GROUP_TIER_ORDER[b.tier] : 9;
    return ta - tb || a.key.localeCompare(b.key, 'zh');
  });

  // 渲染
  content.innerHTML = sortedGroups.map(g => {
    const badge = g.isEnterprise
      ? '<span class="uni-tier tier-enterprise">🏢 企业</span>'
      : `<span class="uni-tier tier-${g.tier}">${TIER_NAMES[g.tier] || g.tier}</span>`;
    const icon = g.isEnterprise ? '🏢' : '🏫';
    return `
      <div class="uni-group">
        <div class="uni-header">
          <span>${icon}</span>
          <span>${g.key}</span>
          ${badge}
          <span style="font-size:12px;color:#999;font-weight:normal;margin-left:auto">${g.profs.length}位教授</span>
        </div>
        <div class="card-grid">
          ${g.profs.map(p => renderCard(p)).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// ===== 筛选按钮事件 =====
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const tech = this.dataset.tech;
      const app = this.dataset.app;
      const tier = this.dataset.tier;
      const feature = this.dataset.feature;
      const province = this.dataset.province;

      if (tech !== undefined) {
        currentTechFilter = tech;
        document.querySelectorAll('.filter-btn[data-tech]').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      } else if (app !== undefined) {
        currentAppFilter = app;
        document.querySelectorAll('.filter-btn[data-app]').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      } else if (tier !== undefined) {
        currentTierFilter = tier;
        document.querySelectorAll('.filter-btn[data-tier]').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      } else if (province !== undefined) {
        currentProvinceFilter = province;
        document.querySelectorAll('.filter-btn[data-province]').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      } else if (feature !== undefined) {
        // 特色筛选（有企业等）独立于技术路线，不影响技术路线“全部”的选中状态
        currentFeatureFilter = (currentFeatureFilter === feature) ? '' : feature;
        const active = currentFeatureFilter === feature;
        document.querySelectorAll('.filter-btn[data-feature]').forEach(b => b.classList.remove('active'));
        if (active) this.classList.add('active');
      }
      // 切换筛选时收起已展开卡片并同步面包屑
      document.querySelectorAll('.prof-card.expanded').forEach(c => c.classList.remove('expanded'));
      currentProfessor = null;
      updateBreadcrumb(null);
      renderProfessors();
    });
  });
}

// ===== 搜索框事件 =====
function setupSearch() {
  document.getElementById('searchBox').addEventListener('input', function(e) {
    searchTerm = e.target.value.trim();
    renderProfessors();
  });
}

// ===== 顶部区域：已停用「滚动折叠」 =====
// 原实现用 IntersectionObserver 监听哨兵来折叠标题/筛选栏，折叠时通过改变
// .header / .controls 的 grid 高度（auto 0fr）使吸顶容器整体变矮，从而把下方
// 全部内容向上平移约 200px——这正是「界面自己滑动」的主因之一。
// 现改为标题栏 + 筛选栏常驻顶部、永不在滚动时改变高度，彻底消除该自滑动。
function setupStickyCollapse() {
  // 故意留空：不再监听滚动、不再切换 .collapsed，吸顶栏高度恒定。
  return;
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
  initUpdateBar();
  buildFilterBar();
  setupFilters();
  setupSearch();
  setupStickyCollapse();
  renderProfessors();
  updateBreadcrumb(null);
  startAutoCheck();
});
