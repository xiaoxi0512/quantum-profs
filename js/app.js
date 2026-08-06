// ===== 应用逻辑 =====

let currentTechFilter = 'all';
let currentAppFilter = 'all';
let currentTierFilter = 'all';
let searchTerm = '';
let updateCheckInterval = null;

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
}

// ===== 面包屑导航 =====
let currentProfessor = null;
function updateBreadcrumb(prof) {
  const bc = document.getElementById('breadcrumb');
  if (!bc) return;
  const parts = ['<span class="bc-home" onclick="resetAll()">🏠 主页</span>'];
  if (currentTechFilter === 'enterprise') {
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
  if (prof) {
    parts.push('<span class="bc-sep">›</span><span class="bc-item">' + prof.uni + '</span>');
    parts.push('<span class="bc-sep">›</span><span class="bc-cur">' + prof.name + '</span>');
  } else {
    parts.push('<span class="bc-sep">›</span><span class="bc-item">全部学者</span>');
  }
  bc.innerHTML = parts.join('');
}

// ===== 一键返回主页（重置所有筛选+收起卡片+平滑置顶） =====
function resetAll() {
  currentTechFilter = 'all';
  currentAppFilter = 'all';
  currentTierFilter = 'all';
  searchTerm = '';
  const sb = document.getElementById('searchBox');
  if (sb) sb.value = '';
  document.querySelectorAll('.filter-btn').forEach(b => {
    const isAll = b.dataset.tech === 'all' || b.dataset.app === 'all' || b.dataset.tier === 'all';
    b.classList.toggle('active', !!isAll);
  });
  document.querySelectorAll('.prof-card.expanded').forEach(c => c.classList.remove('expanded'));
  currentProfessor = null;
  updateBreadcrumb(null);
  renderProfessors();
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
  if (currentTechFilter === 'enterprise') {
    filtered = filtered.filter(p => p.enterprise);
  } else if (currentTechFilter !== 'all') {
    filtered = filtered.filter(p => p.tech && p.tech.includes(currentTechFilter));
  }

  // 商业应用筛选
  if (currentAppFilter !== 'all') {
    filtered = filtered.filter(p => p.apps && p.apps.includes(currentAppFilter));
  }

  // 院校层次筛选
  if (currentTierFilter !== 'all') {
    filtered = filtered.filter(p => p.tier === currentTierFilter);
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
  if (currentTechFilter === 'enterprise') statsText += ' | 🏢 已筛选有企业的教授';
  if (currentAppFilter !== 'all') statsText += ` | 已筛选应用领域: ${(APP_TAGS[currentAppFilter] || { name: currentAppFilter }).name}`;
  document.getElementById('stats').innerHTML = statsText;

  if (filtered.length === 0) {
    content.innerHTML = '<div class="no-results">未找到匹配的教授信息，请调整筛选条件</div>';
    return;
  }

  // 按院校分组
  const uniGroups = {};
  filtered.forEach(p => {
    if (!uniGroups[p.uni]) uniGroups[p.uni] = [];
    uniGroups[p.uni].push(p);
  });

  // 按院校层次从高到低排序: 985 → 211 → 中科院 → 普通本科
  const sortedUnis = Object.keys(uniGroups).sort((a, b) => {
    const ta = TIER_ORDER[uniGroups[a][0].tier] !== undefined ? TIER_ORDER[uniGroups[a][0].tier] : 9;
    const tb = TIER_ORDER[uniGroups[b][0].tier] !== undefined ? TIER_ORDER[uniGroups[b][0].tier] : 9;
    return ta - tb || a.localeCompare(b);
  });

  // 渲染
  content.innerHTML = sortedUnis.map(uni => {
    const profs = uniGroups[uni];
    const tier = profs[0].tier;
    return `
      <div class="uni-group">
        <div class="uni-header">
          <span>🏫</span>
          <span>${uni}</span>
          <span class="uni-tier tier-${tier}">${TIER_NAMES[tier]}</span>
          <span style="font-size:12px;color:#999;font-weight:normal;margin-left:auto">${profs.length}位教授</span>
        </div>
        <div class="card-grid">
          ${profs.map(p => renderCard(p)).join('')}
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

// ===== 顶部标题栏滚动折叠 =====
function setupHeaderCollapse() {
  const header = document.getElementById('header');
  const trigger = document.getElementById('headerTrigger');
  if (!header) return;

  let collapsed = false;
  const setCollapsed = (c) => {
    collapsed = c;
    header.classList.toggle('collapsed', c);
  };

  window.addEventListener('scroll', () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    setCollapsed(y > 100);
  }, { passive: true });

  if (trigger) {
    trigger.addEventListener('click', () => setCollapsed(!collapsed));
  }
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
  initUpdateBar();
  buildFilterBar();
  setupFilters();
  setupSearch();
  setupHeaderCollapse();
  renderProfessors();
  updateBreadcrumb(null);
  startAutoCheck();
});
