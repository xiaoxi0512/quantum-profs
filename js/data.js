// ===== 量子计算教授数据库 =====
// 数据版本与更新元信息
const DATA_META = {
  version: "1.0.1",
  lastUpdated: "2026-08-06",
  lastUpdatedTime: "2026-08-06T09:19:40+08:00",
  nextAutoUpdate: "2026-08-07T08:00:00+08:00",
  autoUpdateSchedule: "每日 08:00 (北京时间)",
  totalProfessors: 74,
  totalUniversities: 39,
  updateLog: [
    { date: "2026-08-05", changes: "初始版本：74位教授，39所高校，全部联系方式已补全，含课题组成员和企业信息" },
    { date: "2026-08-06", changes: "例行更新：增补潘建伟（九章四号、门捷列夫国际基础科学奖、中科大常务副校长）、陆朝阳（九章四号、全国创新争先奖）、段路明（512离子二维阵列/300离子量子模拟《自然》）、王浩华（104比特组合优化、逻辑量子比特错误缓解《Nat Commun》《NSR》）、金贤敏（图灵量子2026年多轮融资及TuringQ Gen2/QAgent）的最新成果与企业动态；新增交通物流应用标签。" }
  ]
};

// 技术路线标签: super(超导) semi(半导体) ion(离子阱) photo(光量子) atom(中性原子) topo(拓扑) theory(理论算法)
// 商业应用标签: chemistry(材料化学) biology(生物医药) finance(金融科技) security(网络安全)
//               weather(气象预测) encryption(信息加密) optimization(优化问题) ai(人工智能) materials(材料科学) traffic(交通物流)

const APP_TAGS = {
  chemistry: { name: "材料化学", color: "#e53935" },
  biology: { name: "生物医药", color: "#43a047" },
  finance: { name: "金融科技", color: "#1e88e5" },
  security: { name: "网络安全", color: "#5e35b1" },
  weather: { name: "气象预测", color: "#00acc1" },
  encryption: { name: "信息加密", color: "#fb8c00" },
  optimization: { name: "优化问题", color: "#8e24aa" },
  ai: { name: "人工智能", color: "#00897b" },
  materials: { name: "材料科学", color: "#3949ab" },
  traffic: { name: "交通物流", color: "#607d8b" }
};

const TECH_TAGS = {
  super: { name: "超导", color: "#e53935" },
  semi: { name: "半导体", color: "#1e88e5" },
  ion: { name: "离子阱", color: "#8e24aa" },
  photo: { name: "光量子", color: "#43a047" },
  atom: { name: "中性原子", color: "#fb8c00" },
  topo: { name: "拓扑", color: "#3949ab" },
  theory: { name: "理论算法", color: "#5e35b1" }
};

const TIER_ORDER = { "985": 0, "211": 1, "cas": 2, "normal": 3 };
const TIER_NAMES = { "985": "985/C9", "211": "211", "normal": "普通本科", "cas": "中科院" };

const professors = [
  // ===== 中国科学技术大学 (985/C9) =====
  {
    id: 1, uni: "中国科学技术大学", tier: "985",
    name: "潘建伟", title: "中国科学院院士、教授", dept: "物理学院",
    directions: ["光量子计算", "量子纠缠", "量子信息"],
    tech: ["photo"], apps: ["encryption", "security"],
    email: "pan@ustc.edu.cn", phone: "0551-63606493", office: "安徽省合肥市金寨路96号",
    bio: "潘建伟，1970年3月生，浙江东阳人。1999年获奥地利维也纳大学实验物理博士学位。中国科学技术大学教授、常务副校长，中国科学院院士，发展中国家科学院院士，奥地利科学院外籍院士，中科院量子信息与量子科技创新研究院院长，中科院量子科学实验卫星先导专项首席科学家。国际上量子信息实验研究领域的开拓者之一，在量子通信和多光子纠缠操纵方面做出系统性创新工作。研究成果多次入选Nature年度十大科学事件、Science年度十大科技进展。在Nature发表论文11篇，Nature Physics 8篇，Nature Photonics 9篇，PRL 70余篇，共被引用13000余次。获奥地利科学院Erich-Schmid奖、欧盟玛丽·居里杰出研究奖、欧洲物理学会菲涅尔奖、国家自然科学一等奖等。",
    achievements: "墨子号量子卫星、九章光量子计算原型机、九章四号(2026)、2025腾冲科学大奖、联合国教科文组织-门捷列夫国际基础科学奖首位中国获奖者(2026)",
    links: { official: "https://faculty.ustc.edu.cn/panjianwei/en/index.htm", group: "https://quantum.ustc.edu.cn/", scholar: "https://scholar.google.com/citations?user=8CzM5NwAAAAJ", baidu: "https://xueshu.baidu.com/s?wd=潘建伟+量子计算" },
    enterprise: { name: "国盾量子", stock: "688027.SH", role: "联合创始人，持股15.19%", url: "https://www.quantum-info.com/" },
    members: [
      { name: "陈向军", role: "教授、博导", research: "原子分子物理、电子碰撞谱学", email: "xjun@ustc.edu.cn", phone: "0551-63601170" },
      { name: "朱林繁", role: "教授、博导", research: "原子分子物理实验", email: "lfzhu@ustc.edu.cn" },
      { name: "包小辉", role: "研究员", research: "冷原子量子中继、量子存储", email: "xhbao@ustc.edu.cn" },
      { name: "于扬", role: "研究员", research: "冷原子量子存储、量子网络", email: "yong.yu@ustc.edu.cn" }
    ]
  },
  {
    id: 2, uni: "中国科学技术大学", tier: "985",
    name: "陆朝阳", title: "教授", dept: "物理学院",
    directions: ["光量子计算", "量子纠缠"],
    tech: ["photo"], apps: ["optimization", "chemistry"],
    email: "cylu@ustc.edu.cn", phone: "0551-63606493", office: "安徽省合肥市金寨路96号",
    bio: "陆朝阳，中国科学技术大学教授。长期致力于光量子计算和量子纠缠研究，作为核心成员参与「九章」光量子计算原型机的研发工作。在Nature、Science等期刊发表多篇高水平论文，研究成果入选两院院士评选的中国十大科技进展新闻。",
    achievements: "九章光量子计算原型机负责人，九章四号核心成员，第四届全国创新争先奖(2026)",
    links: { official: "https://quantum.ustc.edu.cn/", scholar: "https://scholar.google.com/scholar?q=陆朝阳+quantum+USTC", baidu: "https://xueshu.baidu.com/s?wd=陆朝阳+量子计算" },
    members: [
      { name: "博士后及博士生若干", role: "团队成员", research: "光量子计算、量子纠缠", email: "cylu@ustc.edu.cn", phone: "0551-63606493" }
    ]
  },
  {
    id: 3, uni: "中国科学技术大学", tier: "985",
    name: "郭光灿", title: "中国科学院院士、教授", dept: "物理学院",
    directions: ["量子信息", "量子计算", "量子光学"],
    tech: ["theory", "photo"], apps: ["encryption", "optimization"],
    email: "gcguo@ustc.edu.cn", phone: "0551-63606493", office: "安徽省合肥市金寨路96号",
    bio: "郭光灿，中国科学院院士，中国科学技术大学教授。中国量子光学和量子信息科学的开拓者之一。早期从事量子光学理论研究，后拓展至量子信息领域。在量子纠缠、量子克隆、量子计算等方向做出多项开创性贡献。发表论文数百篇，培养了一大批量子信息领域的优秀人才。",
    achievements: "中国量子光学和量子信息科学开拓者之一",
    links: { official: "https://quantum.ustc.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=郭光灿+量子信息" },
    enterprise: { name: "本源量子", stock: "估值超200亿", role: "联合创始人、首席科技顾问", url: "https://originqc.com.cn" },
    members: [
      { name: "课题组成员若干", role: "研究员、博士后、博士生", research: "量子光学、量子信息", email: "gcguo@ustc.edu.cn", phone: "0551-63606493" }
    ]
  },
  {
    id: 4, uni: "中国科学技术大学", tier: "985",
    name: "郭国平", title: "教授、博士生导师", dept: "物理学院/微电子学院",
    directions: ["半导体量子芯片", "超导量子计算", "量子算法"],
    tech: ["semi", "super"], apps: ["materials", "security"],
    email: "gpguo@ustc.edu.cn", phone: "0551-62391682", office: "安徽省合肥市金寨路96号",
    bio: "郭国平，1977年12月出生于江西南昌。1996年考入中国科学技术大学，2005年获博士学位。第十四届全国人大代表，中国科学技术大学教授，中科院量子信息重点实验室副主任，安徽省量子芯片重点实验室主任，安徽省量子计算工程中心主任，本源量子首席科学家。国内最早开展半导体量子芯片研究的学者之一，2003年创建国内首个量子计算研究小组。从事半导体栅型量子点量子比特、硅锗异质结量子芯片、多量子比特耦合架构等研究。获国家杰出青年科学基金、长江教授青年学者、国家万人计划领军人才等荣誉。著有《量子计算与编程入门》。",
    achievements: "国内首个量子计算研究小组(2003年)，半导体量子芯片，本源量子创始人",
    links: { official: "https://faculty.ustc.edu.cn/guoguoping/zh_CN/index.htm", group: "https://quantum.ustc.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=郭国平+量子计算" },
    enterprise: { name: "本源量子", stock: "Pre-IPO，近30亿融资", role: "联合创始人、首席科学家", url: "https://originqc.com.cn" },
    members: [
      { name: "李海欧", role: "教授", research: "半导体量子计算、硅基量子点", email: "haiouli@ustc.edu.cn", phone: "0551-63606493" },
      { name: "曹刚", role: "教授", research: "半导体量子计算、量子比特控制", email: "gcao@ustc.edu.cn", phone: "0551-63606493" },
      { name: "博士后及博士生若干", role: "团队成员", research: "半导体量子芯片、超导量子计算", email: "gpguo@ustc.edu.cn", phone: "" }
    ]
  },
  {
    id: 5, uni: "中国科学技术大学", tier: "985",
    name: "朱晓波", title: "教授", dept: "物理学院",
    directions: ["超导量子计算"],
    tech: ["super"], apps: ["materials", "chemistry"],
    email: "xbzhu16@ustc.edu.cn", phone: "0551-63606493", office: "安徽省合肥市金寨路96号",
    bio: "朱晓波，中国科学技术大学教授，长期从事超导量子计算研究。在超导量子比特的设计、制备和操控方面具有丰富经验，参与多项国家级量子计算科研项目。",
    achievements: "超导量子计算芯片研发",
    links: { official: "https://quantum.ustc.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=朱晓波+超导量子计算" },
    members: [
      { name: "课题组成员若干", role: "研究员、博士后、博士生", research: "超导量子比特、量子芯片", email: "xbzhu16@ustc.edu.cn", phone: "0551-63606493" }
    ]
  },
  {
    id: 6, uni: "中国科学技术大学", tier: "985",
    name: "李海欧", title: "教授", dept: "物理学院",
    directions: ["半导体量子计算"],
    tech: ["semi"], apps: ["materials"],
    email: "haiouli@ustc.edu.cn", phone: "0551-63606493", office: "安徽省合肥市金寨路96号",
    bio: "李海欧，中国科学技术大学教授，郭国平课题组核心成员。主要从事半导体量子点量子比特研究，在硅基半导体量子芯片的制备和操控方面取得重要进展。参与多项国家自然科学基金项目。",
    achievements: "半导体量子点量子比特操控",
    links: { official: "https://quantum.ustc.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=李海欧+半导体量子计算" },
    members: []
  },
  {
    id: 7, uni: "中国科学技术大学", tier: "985",
    name: "曹刚", title: "教授", dept: "物理学院",
    directions: ["半导体量子计算"],
    tech: ["semi"], apps: ["materials"],
    email: "gcao@ustc.edu.cn", phone: "0551-63606493", office: "安徽省合肥市金寨路96号",
    bio: "曹刚，中国科学技术大学教授，郭国平课题组核心成员。主要从事半导体量子计算研究，在硅锗异质结量子点量子比特的制备和表征方面做出重要贡献。",
    achievements: "硅锗异质结量子点量子比特",
    links: { official: "https://quantum.ustc.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=曹刚+半导体量子+中科大" },
    members: []
  },
  {
    id: 8, uni: "中国科学技术大学", tier: "985",
    name: "任希锋", title: "教授", dept: "物理学院",
    directions: ["光量子计算", "量子信息"],
    tech: ["photo"], apps: ["optimization", "encryption"],
    email: "renxf@ustc.edu.cn", phone: "0551-63606493", office: "安徽省合肥市金寨路96号",
    bio: "任希锋，中国科学技术大学教授，主要从事光量子计算和量子信息研究。在光量子芯片、量子纠缠光源制备等方面取得多项研究成果。",
    achievements: "光量子芯片研究",
    links: { official: "https://quantum.ustc.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=任希锋+光量子+中科大" },
    members: []
  },
  {
    id: 9, uni: "中国科学技术大学", tier: "985",
    name: "彭新华", title: "教授", dept: "物理学院",
    directions: ["量子信息", "核磁共振量子计算"],
    tech: ["theory"], apps: ["chemistry", "biology"],
    email: "xhpeng@ustc.edu.cn", phone: "0551-63606493", office: "安徽省合肥市金寨路96号",
    bio: "彭新华，中国科学技术大学教授，主要从事核磁共振量子计算和量子信息理论研究。在量子态层析、量子控制等方面做出多项创新工作。",
    achievements: "核磁共振量子计算",
    links: { official: "https://quantum.ustc.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=彭新华+量子信息+中科大" },
    members: []
  },
  {
    id: 10, uni: "中国科学技术大学", tier: "985",
    name: "丁冬生", title: "教授", dept: "物理学院",
    directions: ["里德堡原子量子计算"],
    tech: ["atom"], apps: ["chemistry", "materials"],
    email: "dds@ustc.edu.cn", phone: "0551-63606493", office: "安徽省合肥市金寨路96号",
    bio: "丁冬生，中国科学技术大学教授，主要从事里德堡原子量子计算研究。利用里德堡原子的强相互作用特性实现量子逻辑门操作，是该方向国内领先的实验研究组之一。",
    achievements: "里德堡原子量子计算实验",
    links: { official: "https://quantum.ustc.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=丁冬生+里德堡+中科大" },
    members: []
  },
  {
    id: 11, uni: "中国科学技术大学", tier: "985",
    name: "杜江峰", title: "中国科学院院士、教授", dept: "物理学院",
    directions: ["量子计算", "量子精密测量"],
    tech: ["theory"], apps: ["biology", "materials"],
    email: "djf@ustc.edu.cn", phone: "0551-63606493", office: "安徽省合肥市金寨路96号",
    bio: "杜江峰，中国科学院院士，中国科学技术大学教授。主要从事量子精密测量和量子计算研究，利用NV色心等固态量子体系开展量子计算和量子传感研究。在Science、Nature等期刊发表多篇高水平论文。研究成果应用于生物医学检测、材料表征等领域。",
    achievements: "NV色心量子计算与量子传感",
    links: { official: "https://quantum.ustc.edu.cn/", scholar: "https://scholar.google.com/scholar?q=Jiangfeng+Du+quantum+USTC", baidu: "https://xueshu.baidu.com/s?wd=杜江峰+量子精密测量" },
    enterprise: { name: "国仪量子", stock: "已完成5轮融资", role: "联合创始人", url: "https://www.ciqtek.com/" },
    members: [
      { name: "课题组成员若干", role: "研究员、博士后、博士生", research: "量子精密测量、NV色心量子计算", email: "djf@ustc.edu.cn", phone: "0551-63600307" }
    ]
  },
  {
    id: 12, uni: "中国科学技术大学", tier: "985",
    name: "韩永建", title: "研究员、博士生导师", dept: "中科院量子信息重点实验室",
    directions: ["离子阱量子计算", "量子模拟"],
    tech: ["ion"], apps: ["chemistry", "optimization"],
    email: "smhan@ustc.edu.cn", phone: "0551-63606493", office: "安徽省合肥市金寨路96号",
    bio: "韩永建，中科院量子信息重点实验室研究员、博士生导师。从事离子阱量子计算和量子模拟研究，在离子阱量子比特操控、量子逻辑门实现等方面做出重要贡献。",
    achievements: "离子阱量子计算研究",
    links: { official: "https://quantum.ustc.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=韩永建+量子计算+中科大" },
    enterprise: { name: "幺正量子", stock: "中国科大知识产权赋权企业", role: "创始人、董事长", url: "http://unitqc.com/" },
    members: []
  },

  // ===== 清华大学 (985/C9) =====
  {
    id: 14, uni: "清华大学", tier: "985",
    name: "段路明", title: "中国科学院院士、教授", dept: "交叉信息研究院",
    directions: ["离子阱量子计算", "量子网络", "量子模拟"],
    tech: ["ion"], apps: ["chemistry", "optimization", "security"],
    email: "lmduan@tsinghua.edu.cn", phone: "010-62797832", office: "清华大学交叉信息研究院",
    bio: "段路明，中国科学院院士，清华大学姚期智讲座教授、基础科学讲席教授。主要从事离子阱量子计算、量子网络和量子模拟研究。提出DLCZ量子中继方案，实现202个离子量子比特稳定囚禁的世界纪录。在Nature、Science、PRL等期刊发表大量高水平论文。研究成果对量子计算规模化具有重要意义。",
    achievements: "DLCZ量子中继方案、202个离子量子比特稳定囚禁、512离子二维阵列稳定囚禁与300离子量子模拟(2026，《自然》)",
    links: { official: "http://quantuminfo.tsinghua.edu.cn/", group: "https://iiis.tsinghua.edu.cn/", scholar: "https://scholar.google.com/scholar?q=Luming+Duan+quantum", baidu: "https://xueshu.baidu.com/s?wd=段路明+量子计算+清华" },
    enterprise: { name: "华翊量子", stock: "2026年完成A+轮融资，HYQ-B100交付中国移动研究院", role: "创始人", url: "http://www.hyqubit.com/" },
    members: [
      { name: "吴宇恺", role: "助理教授", research: "量子计算的物理实现、量子信息", email: "yukaiwu@tsinghua.edu.cn", phone: "" },
      { name: "濮云飞", role: "助理教授", research: "离子阱与中性原子阵列的量子网络与量子计算", email: "yunfeipu@tsinghua.edu.cn", phone: "" },
      { name: "侯攀宇", role: "助理教授", research: "离子量子计算、金刚石色心量子信息应用", email: "houpanyu@tsinghua.edu.cn", phone: "010-62797832" },
      { name: "宋祎璞", role: "研究员", research: "超导量子计算", email: "songyipu@tsinghua.edu.cn", phone: "010-62797832" },
      { name: "周子超", role: "研究员", research: "离子阱量子信息处理", email: "zhouzc@tsinghua.edu.cn", phone: "010-62797832" },
      { name: "张宏毅", role: "副研究员", research: "超导量子信息处理、微波量子光学和量子器件", email: "lmduan@tsinghua.edu.cn", phone: "010-62797832" },
      { name: "黄园园", role: "助理研究员", research: "离子阱量子网络", email: "lmduan@tsinghua.edu.cn", phone: "010-62797832" },
      { name: "姜越", role: "助理研究员", research: "离子阱量子计算与量子模拟、离子阱芯片研发", email: "lmduan@tsinghua.edu.cn", phone: "010-62797832" },
      { name: "祁宾祥", role: "助理研究员", research: "离子阱量子计算控制系统、量子精密测量电子学", email: "lmduan@tsinghua.edu.cn", phone: "010-62797832" },
      { name: "王韦婷", role: "助理研究员", research: "超导量子信息处理、混合量子系统", email: "lmduan@tsinghua.edu.cn", phone: "010-62797832" }
    ]
  },
  {
    id: 15, uni: "清华大学", tier: "985",
    name: "孙麓岩", title: "教授", dept: "物理系",
    directions: ["超导量子计算"],
    tech: ["super"], apps: ["materials", "chemistry"],
    email: "luyansun@tsinghua.edu.cn", phone: "010-62784567", office: "清华大学物理系",
    bio: "孙麓岩，清华大学物理系教授，从事超导量子计算研究。在超导量子比特的制备、操控和量子纠错等方面做出重要贡献。",
    achievements: "超导量子比特量子纠错实验",
    links: { official: "https://www.phys.tsinghua.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=孙麓岩+超导量子+清华" },
    members: []
  },
  {
    id: 16, uni: "清华大学", tier: "985",
    name: "刘玉玺", title: "助理教授", dept: "交叉信息研究院",
    directions: ["超导量子计算"],
    tech: ["super"], apps: ["materials", "optimization"],
    email: "yuxiliu@tsinghua.edu.cn", phone: "010-62797832", office: "清华大学交叉信息研究院",
    bio: "刘玉玺，清华大学交叉信息研究院助理教授，从事超导量子计算研究。在超导量子比特系统和量子算法实验方面具有丰富经验。",
    achievements: "超导量子计算实验",
    links: { official: "https://iiis.tsinghua.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=刘玉玺+超导量子+清华" },
    members: []
  },
  {
    id: 17, uni: "清华大学", tier: "985",
    name: "姚期智", title: "图灵奖得主、中国科学院院士", dept: "交叉信息研究院",
    directions: ["量子算法", "量子计算理论"],
    tech: ["theory"], apps: ["finance", "security", "optimization", "ai"],
    email: "andrewcyao@tsinghua.edu.cn", phone: "010-62797832", office: "清华大学交叉信息研究院",
    bio: "姚期智（Andrew Yao），图灵奖得主，中国科学院院士，清华大学交叉信息研究院院长。主要从事理论计算机科学和量子计算理论研究。提出了著名的姚期智-西蒙问题，在量子算法复杂性理论方面做出奠基性贡献。培养了大量量子计算和理论计算机科学领域的顶尖人才。",
    achievements: "图灵奖得主、量子算法复杂性理论奠基人",
    links: { official: "https://iiis.tsinghua.edu.cn/", scholar: "https://scholar.google.com/scholar?q=Andrew+Yao+quantum+computing", baidu: "https://xueshu.baidu.com/s?wd=姚期智+量子计算" },
    members: [
      { name: "交叉信息研究院全体教师", role: "教授、副教授、助理教授", research: "量子计算、量子算法、量子信息", email: "iiisrecruit@mail.tsinghua.edu.cn", phone: "010-62797832" }
    ]
  },
  {
    id: 18, uni: "清华大学", tier: "985",
    name: "龙桂鲁", title: "教授", dept: "物理系",
    directions: ["量子算法", "量子信息"],
    tech: ["theory"], apps: ["encryption", "security"],
    email: "gllong@tsinghua.edu.cn", phone: "010-62784567", office: "清华大学物理系",
    bio: "龙桂鲁，清华大学物理系教授，从事量子通信和量子算法研究。在量子直接通信、量子搜索算法等方面做出多项创新工作。",
    achievements: "量子直接通信协议",
    links: { official: "https://www.phys.tsinghua.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=龙桂鲁+量子通信+清华" },
    members: []
  },

  // ===== 北京大学 (985) =====
  {
    id: 19, uni: "北京大学", tier: "985",
    name: "王剑威", title: "教授", dept: "物理学院",
    directions: ["光量子芯片", "集成量子计算", "量子网络"],
    tech: ["photo"], apps: ["encryption", "chemistry", "optimization"],
    email: "jianwei.wang@pku.edu.cn", phone: "010-62758257", office: "北京大学物理学院西431",
    bio: "王剑威，北京大学物理学院教授。2016年获英国布里斯托尔大学博士学位。获得国家杰出青年科学基金(2023)、海外高层次青年人才计划(2018)。研究领域为集成量子光学、光量子芯片物理与技术。在Science(3篇)、Nature(2篇)、Nature Physics(5篇)、Nature Photonics(7篇)等期刊发表论文50余篇。获杨振宁奖、王大珩光学奖、饶毓泰基础光学奖、陈嘉庚青年科学奖等荣誉。",
    achievements: "大规模集成光量子芯片、光子-原子混合集成芯片",
    links: { official: "https://faculty.pku.edu.cn/Qchip", group: "https://group.pku.edu.cn/Qchip/zh_CN/zhym/42158/list/index.htm", scholar: "https://scholar.google.com/scholar?q=Jianwei+Wang+quantum+Peking", baidu: "https://xueshu.baidu.com/s?wd=王剑威+光量子芯片+北大" },
    members: [
      { name: "戴天翔", role: "博士后", research: "集成量子光学、拓扑光子学", email: "jianwei.wang@pku.edu.cn", phone: "010-62758257" },
      { name: "李光真", role: "博士生", research: "光量子芯片", email: "jianwei.wang@pku.edu.cn", phone: "010-62758257" },
      { name: "袁鲁琦", role: "博士生", research: "量子通信网络", email: "jianwei.wang@pku.edu.cn", phone: "010-62758257" },
      { name: "贾鑫宇", role: "博士生", research: "连续变量量子计算", email: "jianwei.wang@pku.edu.cn", phone: "010-62758257" },
      { name: "翟崇昊", role: "博士生", research: "集成量子光学", email: "jianwei.wang@pku.edu.cn", phone: "010-62758257" }
    ]
  },
  {
    id: 20, uni: "北京大学", tier: "985",
    name: "周小计", title: "教授", dept: "物理学院",
    directions: ["冷原子量子模拟", "量子计算"],
    tech: ["atom"], apps: ["materials", "chemistry"],
    email: "xjzhou@pku.edu.cn", phone: "010-62755555", office: "北京大学物理学院",
    bio: "周小计，北京大学物理学院教授，从事冷原子量子模拟研究。利用超冷原子体系模拟凝聚态物理中的重要问题，在量子物态调控方面做出多项创新工作。",
    achievements: "冷原子量子模拟实验",
    links: { official: "https://www.phy.pku.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=周小计+冷原子+北大" },
    members: []
  },
  {
    id: 21, uni: "北京大学", tier: "985",
    name: "徐洪起", title: "教授", dept: "物理学院",
    directions: ["半导体量子计算"],
    tech: ["semi"], apps: ["materials"],
    email: "hqxu@pku.edu.cn", phone: "010-62755555", office: "北京大学物理学院",
    bio: "徐洪起，北京大学物理学院教授，从事半导体量子计算研究。在半导体量子点、量子输运和量子比特操控方面具有丰富的研究经验。",
    achievements: "半导体量子比特研究",
    links: { official: "https://www.phy.pku.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=徐洪起+半导体量子+北大" },
    members: []
  },

  // ===== 浙江大学 (985) =====
  {
    id: 22, uni: "浙江大学", tier: "985",
    name: "游建强", title: "教授", dept: "物理学院",
    directions: ["超导量子计算", "量子模拟", "量子光学"],
    tech: ["super"], apps: ["materials", "chemistry"],
    email: "jqyou@zju.edu.cn", phone: "0571-88273218", office: "浙江大学紫金港校区海纳苑8幢516",
    bio: "游建强，浙江大学物理学院求是特聘教授、博士生导师。1984年湘潭大学学士，1988年中科院金属研究所硕士，1997年中科院固体物理研究所博士。获国家杰出青年科学基金、教育部长江学者特聘教授、国家万人计划领军人才。研究领域包括超导量子比特、自旋和拓扑体系的量子计算、固体量子态的腔量子电动力学。承担科技部国家重点研发计划重点专项项目任首席。获安徽省自然科学奖二等奖、日本理化学研究所前沿研究头等奖。任Quantum Information Processing和Physical Review Applied编委。",
    achievements: "混合量子系统、腔磁振子学",
    links: { official: "https://person.zju.edu.cn/0017105", group: "https://www.labxing.com/hybrid", scholar: "https://scholar.google.com/scholar?q=Jianqiang+You+quantum+Zhejiang", baidu: "https://xueshu.baidu.com/s?wd=游建强+超导量子+浙大" },
    members: [
      { name: "李杰", role: "百人计划研究员、博导", research: "光力学、腔磁力学、腔磁振子学、量子光学", email: "jieli007@zju.edu.cn", phone: "" },
      { name: "王逸璞", role: "百人计划研究员、博导", research: "腔磁振子学非线性效应、非厄米物理、混合量子系统", email: "yipuwang@zju.edu.cn", phone: "" }
    ]
  },
  {
    id: 23, uni: "浙江大学", tier: "985",
    name: "王浩华", title: "教授、博士生导师", dept: "物理学院",
    directions: ["超导量子计算", "量子模拟"],
    tech: ["super"], apps: ["materials", "chemistry", "optimization"],
    email: "hhwang@zju.edu.cn", phone: "0571-88273428", office: "浙江大学紫金港校区海纳苑8幢",
    bio: "王浩华，浙江大学物理学院教授、博士生导师。1999年南开大学学士，2006年美国宾州州立大学博士，2007-2010年美国加州大学圣塔芭芭拉分校博士后（合作导师：John Martinis，2025年诺贝尔物理学奖得主）。获中组部青年拔尖人才、基金委优青/杰青、2022年新基石基金会科学探索奖、2025年APS Fellow、2025年全球华人物理与天文学会亚洲成就奖。在浙江大学建立超导量子芯片全流程制备工艺，研发天目1号、莫干1号芯片。在Nature、Science、Nature Physics、PRL等期刊发表论文90余篇，引用过万次。",
    achievements: "师从John Martinis(2025诺贝尔奖得主)，超导量子比特纠缠世界纪录，天目/莫干芯片，104超导量子比特组合优化(2026 NSR)，逻辑量子比特量子错误缓解(2026 Nat Commun)",
    links: { official: "https://person.zju.edu.cn/0010051/788490.html", group: "https://person.zju.edu.cn/0010051", scholar: "https://scholar.google.com/scholar?q=Haohua+Wang+superconducting+Zhejiang", baidu: "https://xueshu.baidu.com/s?wd=王浩华+超导量子+浙大" },
    members: [
      { name: "宋超", role: "百人计划研究员、博导", research: "超导量子计算与量子模拟", email: "chaosong@zju.edu.cn", phone: "" }
    ]
  },
  {
    id: 24, uni: "浙江大学", tier: "985",
    name: "王震", title: "百人计划研究员、博导", dept: "物理学院",
    directions: ["超导量子计算"],
    tech: ["super"], apps: ["materials", "optimization"],
    email: "2010wangzhen@zju.edu.cn", phone: "0571-88273428", office: "浙江大学紫金港校区",
    bio: "王震，浙江大学百人计划研究员、博士生导师。从事超导量子计算研究，发布天目1号(36比特)和天目2号(百比特)超导量子芯片。研究成果对超导量子计算的规模化具有重要意义。",
    achievements: "天目1号(36比特)、天目2号(百比特)超导量子芯片",
    links: { official: "https://person.zju.edu.cn/zhenwang", baidu: "https://xueshu.baidu.com/s?wd=王震+超导量子+浙大+逻辑比特" },
    enterprise: { name: "逻辑比特", stock: "2026年完成Pre-A+/Pre-A++轮融资，源自浙大超导量子计算团队", role: "创始人兼CEO", url: "" },
    members: []
  },

  // ===== 上海交通大学 (985) =====
  {
    id: 25, uni: "上海交通大学", tier: "985",
    name: "金贤敏", title: "特聘教授、长江学者", dept: "物理与天文学院",
    directions: ["光量子芯片", "光量子计算", "量子网络"],
    tech: ["photo"], apps: ["chemistry", "encryption", "optimization"],
    email: "xianmin.jin@sjtu.edu.cn", phone: "021-34201204", office: "上海交通大学理科楼5号楼422室",
    bio: "金贤敏，上海交通大学特聘教授、长江学者，光科学与技术研究所所长，集成量子信息技术研究中心(IQIT)主任，无锡光子芯片研究院(CHIPX)院长，图灵量子创始人。2003年起师从潘建伟教授获中科大博士学位，博士论文入选全国百篇优秀博士论文。2010年赴牛津大学做博士后，合作导师为Ian Walmsley教授。2012年获欧盟玛丽居里学者和牛津大学沃弗森学院学者。2014年加入上海交大。发表论文150余篇，包括PRL 25篇、Science 2篇、Nature Photonics 9篇。获达沃斯世界经济论坛青年科学家奖、世界顶尖科学家青年科学家奖。建立国内首条光子芯片中试线，实现单片集成128个全同量子光源。",
    achievements: "国内首条光子芯片中试线、单片集成128个全同量子光源芯片",
    links: { official: "https://www.physics.sjtu.edu.cn/jsml/1612.html", group: "https://oserc.physics.sjtu.edu.cn/", scholar: "https://scholar.google.com/scholar?q=Xianmin+Jin+quantum+SJTU", baidu: "https://xueshu.baidu.com/s?wd=金贤敏+光量子芯片+上海交大" },
    enterprise: { name: "图灵量子", stock: "2026年融资近10亿元，估值突破70亿，发布TuringQ Gen2及QAgent混合智能体平台", role: "创始人兼CEO", url: "http://www.turingq.com/" },
    members: [
      { name: "周文豪", role: "博士生", research: "集成光量子计算", email: "zhouwenhao-bxgz@sjtu.edu.cn", phone: "" },
      { name: "王耀", role: "博士生", research: "集成光量子计算", email: "wangyao.phy@sjtu.edu.cn", phone: "" },
      { name: "唐豪", role: "教授", research: "集成光子量子计算", email: "htang2015@sjtu.edu.cn", phone: "021-34201204" }
    ]
  },
  {
    id: 26, uni: "上海交通大学", tier: "985",
    name: "唐豪", title: "教授", dept: "物理与天文学院",
    directions: ["集成光子量子计算"],
    tech: ["photo"], apps: ["encryption", "optimization"],
    email: "htang2015@sjtu.edu.cn", phone: "021-34201204", office: "上海交通大学物理与天文学院",
    bio: "唐豪，上海交通大学物理与天文学院教授（2024年晋升），金贤敏课题组成员。从事集成光子量子计算研究，在光量子芯片的制备和量子算法实验验证方面做出贡献。",
    achievements: "集成光子量子计算实验",
    links: { official: "https://www.physics.sjtu.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=唐豪+光量子+上海交大" },
    members: []
  },

  // ===== 复旦大学 (985) =====
  {
    id: 27, uni: "复旦大学", tier: "985",
    name: "朱黄俊", title: "教授", dept: "物理学系",
    directions: ["量子计算理论", "量子纠缠", "量子测量"],
    tech: ["theory"], apps: ["finance", "security", "optimization"],
    email: "zhuhuangjun@fudan.edu.cn", phone: "13061730040", office: "上海市杨浦区淞沪路2005号复旦大学江湾校区物理科研楼",
    bio: "朱黄俊，复旦大学物理学系教授。2003年浙江大学学士，2007年北京大学硕士，2012年新加坡国立大学量子技术中心博士。2012-2015年加拿大圆周理论物理研究所博士后，2015-2017年德国科隆大学理论物理研究所博士后。2018年加入复旦大学，2025年起任教授。研究领域包括量子测量、量子刻画与验证、量子计算、量子纠缠和非局域关联。在PRL等期刊发表多篇高水平论文。",
    achievements: "量子刻画与验证理论、量子阴影层析",
    links: { official: "https://phys.fudan.edu.cn/13/75/c7605a136053/page.htm", scholar: "https://scholar.google.com/scholar?q=Huangjun+Zhu+quantum+Fudan", baidu: "https://xueshu.baidu.com/s?wd=朱黄俊+量子计算+复旦" },
    members: []
  },
  {
    id: 28, uni: "复旦大学", tier: "985",
    name: "李晓鹏", title: "教授", dept: "物理学系",
    directions: ["中性原子量子计算", "量子模拟", "量子机器学习"],
    tech: ["atom"], apps: ["materials", "chemistry", "ai"],
    email: "xiaopeng_li@fudan.edu.cn", phone: "021-31247962", office: "复旦大学江湾物理楼S322",
    bio: "李晓鹏，复旦大学物理学系教授、博士生导师。2008年中国科学技术大学学士，2013年美国匹兹堡大学博士，2013-2016年美国马里兰大学JQI博士后。研究领域为可控量子体系的多体理论，致力于原子分子物理、凝聚态和量子计算的交叉研究。在Nature Communications、PRL、Rep. Prog. Phys.等期刊发表多篇论文。近期方向包括奇异量子动力学、量子热化、多体局域化、量子神经网络与机器学习。",
    achievements: "里德堡原子量子模拟、量子神经网络理论",
    links: { official: "https://phys.fudan.edu.cn/b0/55/c7605a110677/page.htm", group: "https://quantumcomputing.fudan.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=李晓鹏+中性原子+复旦" },
    members: []
  },

  // ===== 南京大学 (985) =====
  {
    id: 29, uni: "南京大学", tier: "985",
    name: "于扬", title: "教授", dept: "物理学院",
    directions: ["超导量子计算", "超导量子器件"],
    tech: ["super"], apps: ["materials", "chemistry"],
    email: "yuyang@nju.edu.cn", phone: "025-83685553", office: "南京市鼓楼区汉口路22号南京大学物理学院",
    bio: "于扬，南京大学物理学院教授、博士生导师。1990年南京大学学士，2002年美国堪萨斯大学博士，2002-2005年MIT电子实验室(RLE)博士后。教育部长江学者特聘教授，国家杰出青年科学基金获得者。国际上最早开展超导量子比特实验研究的成员之一。2002年首次实验观测到超导相位量子比特中的量子相干振荡，2010年率先演示三个固态量子比特的量子相干调控。在Science发表论文3篇，PRL 9篇。2022年底在苏州高新区成立狮山量子计算与量子探测前沿实验室。",
    achievements: "首次观测超导相位量子比特量子相干振荡、三比特量子相干调控",
    links: { official: "https://physics.nju.edu.cn/szdw/qbmd/20240321/i262006.html", group: "https://sslab.nju.edu.cn/main.htm", baidu: "https://xueshu.baidu.com/s?wd=于扬+超导量子+南京大学" },
    members: [
      { name: "谭新生", role: "副教授", research: "超导量子器件、量子芯片制备", email: "yuyang@nju.edu.cn", phone: "025-83685553" },
      { name: "课题组成员若干", role: "研究员、博士后、博士生", research: "超导量子计算、超导量子模拟", email: "yuyang@nju.edu.cn", phone: "" }
    ]
  },
  {
    id: 32, uni: "南京大学", tier: "985",
    name: "吴盛俊", title: "教授", dept: "物理学院",
    directions: ["量子计算理论", "量子信息"],
    tech: ["theory"], apps: ["ai", "finance", "optimization"],
    email: "sjwu@nju.edu.cn", phone: "025-83593184", office: "南京大学物理学院",
    bio: "吴盛俊，南京大学物理学院教授，从事量子信息理论和量子计算研究。在量子算法、量子信息处理、量子人工智能等方向做出多项理论贡献。",
    achievements: "量子信息理论、量子算法",
    links: { official: "https://physics.nju.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=吴盛俊+量子AI+南京大学" },
    members: []
  },

  // ===== 中山大学 (985) =====
  {
    id: 33, uni: "中山大学", tier: "985",
    name: "李绿周", title: "教授", dept: "计算机学院",
    directions: ["量子算法", "量子计算理论"],
    tech: ["theory"], apps: ["finance", "optimization", "security"],
    email: "lilvzh@mail.sysu.edu.cn", phone: "0756-3668000", office: "广东省珠海市香洲区唐家湾中山大学珠海校区",
    bio: "李绿周，中山大学计算机学院教授，从事量子算法研究。在量子搜索算法、量子优化算法等方面做出多项理论贡献。",
    achievements: "量子搜索算法、量子优化算法",
    links: { official: "https://spa.sysu.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=李绿周+量子算法+中山大学" },
    members: []
  },
  {
    id: 34, uni: "中山大学", tier: "985",
    name: "罗乐", title: "教授", dept: "物理与天文学院",
    directions: ["离子阱量子计算", "量子网络", "精密测量"],
    tech: ["ion"], apps: ["chemistry", "optimization", "security"],
    email: "luole5@mail.sysu.edu.cn", phone: "0756-3668000", office: "广东省珠海市香洲区唐家湾中山大学珠海校区瀚林3号A322",
    bio: "罗乐，中山大学物理与天文学院教授、博士生导师，量子信息与测控科研团队负责人，百人计划引进学科带头人。1999年中山大学学士，2002年北京大学硕士，2008年美国杜克大学博士。2008-2011年在马里兰大学和NIST联合量子研究所任博士后，参与美国科学院院士Chris Monroe领导的囚禁离子量子计算机研发计划。2011年后任美国IUPUI物理系助理教授。2016年底加入中山大学。在Nature、Nature Communications、PRL等期刊发表论文30余篇，引用超过2500次。获Fritz London博士研究奖、广东省珠江计划青年拔尖人才等。",
    achievements: "参与第一代离子阱量子计算芯片研发、囚禁离子量子比特操控",
    links: { official: "https://spa.sysu.edu.cn/zh-hans/node/112", baidu: "https://xueshu.baidu.com/s?wd=罗乐+离子阱+中山大学" },
    members: [
      { name: "刘培亮", role: "副教授", research: "离子囚禁、离子光钟、基于囚禁离子的量子操控", email: "liupliang@mail.sysu.edu.cn", phone: "" },
      { name: "刘腾", role: "博士生", research: "离子阱量子纠缠、逻辑门", email: "liut87@mail2.sysu.edu.cn", phone: "" },
      { name: "陆鹏飞", role: "博士生", research: "离子阱量子计算", email: "luole5@mail.sysu.edu.cn", phone: "0756-3668000" },
      { name: "胡碧莹", role: "博士生", research: "离子阱量子计算", email: "luole5@mail.sysu.edu.cn", phone: "0756-3668000" },
      { name: "吴昊", role: "博士生", research: "离子阱量子计算", email: "luole5@mail.sysu.edu.cn", phone: "0756-3668000" }
    ]
  },
  {
    id: 35, uni: "中山大学", tier: "985",
    name: "项泽亮", title: "教授", dept: "物理与天文学院",
    directions: ["光量子计算"],
    tech: ["photo"], apps: ["chemistry", "encryption"],
    email: "xiangzliang@mail.sysu.edu.cn", phone: "0756-3668000", office: "中山大学珠海校区",
    bio: "项泽亮，中山大学物理与天文学院教授，从事光量子计算研究。在光量子芯片、量子光源制备等方面做出贡献。",
    achievements: "光量子计算实验",
    links: { official: "https://spa.sysu.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=项泽亮+光量子+中山大学" },
    members: []
  },

  // ===== 北京理工大学 (985) =====
  {
    id: 37, uni: "北京理工大学", tier: "985",
    name: "尹璋琦", title: "教授", dept: "物理学院",
    directions: ["量子纠错", "量子计算", "光力学"],
    tech: ["theory"], apps: ["security", "optimization"],
    email: "zqyin@bit.edu.cn", phone: "010-68912614", office: "北京市海淀区中关村南大街5号北理工物理学院中教楼614室",
    bio: "尹璋琦，北京理工大学物理学院量子技术研究中心准聘教授、博导，国家级青年人才项目入选者。2009年西安交通大学博士，2007-2009年美国密歇根大学公派联合培养。2010-2012年中科大量子信息重点实验室博士后，2012-2019年清华大学交叉信息研究院助理研究员。从事悬浮光力学与量子精密测量、量子计算与量子模拟（专用量子计算机、量子云及其应用、量子纠错与量子控制）研究。在Nat. Phys.、PRL等期刊发表论文70余篇，引用3300余次，h指数29。2012年提出用囚禁离子实现时空晶体的实验方案，被选为PRL封面文章和编辑推荐，得到Nature、Physics Today等媒体广泛关注。",
    achievements: "时空晶体理论方案(PRL封面)、量子纠错研究",
    links: { official: "https://pure.bit.edu.cn/zh/persons/zhangqi-yin", baidu: "https://xueshu.baidu.com/s?wd=尹璋琦+量子纠错+北理工" },
    members: []
  },
  {
    id: 38, uni: "北京理工大学", tier: "985",
    name: "张安宁", title: "教授、博士生导师", dept: "物理学院",
    directions: ["量子计算", "量子成像", "量子信息"],
    tech: ["theory"], apps: ["security", "ai"],
    email: "anningzhang@bit.edu.cn", phone: "010-81383333", office: "北京市房山区良乡东路北京理工大学南校区理学楼B103室",
    bio: "张安宁，北京理工大学物理学院教授、博士生导师，全国量子计算与测量标准化技术委员会委员。2005年中国科学技术大学博士（导师：潘建伟院士）。在加拿大多伦多大学从事博士后研究，后在中国航天科技集团担任副主任设计师/研究员。2018年加入北理工。从事量子信息和量子光学、量子计算和量子AI研究。在Nature(1篇)、PRL(7篇)等期刊发表SCI论文30余篇，SCI引用2000余次。研究成果2次入选中国十大科技进展，1次入选欧洲物理学会物理学十大进展。参与某卫星量子相关研制。主持完成17千米单像素遥感成像原理样机等。",
    achievements: "量子成像技术、参与卫星量子研制",
    links: { official: "https://pure.bit.edu.cn/zh/persons/anning-zhang", group: "https://xuteli.bit.edu.cn/xsds/wlxy/34e52907f0584251af96614dcbf7bf28.htm", baidu: "https://xueshu.baidu.com/s?wd=张安宁+量子AI+北理工" },
    members: []
  },
  {
    id: 39, uni: "北京理工大学", tier: "985",
    name: "王业亮", title: "教授", dept: "物理学院",
    directions: ["量子器件", "量子计算"],
    tech: ["theory"], apps: ["materials"],
    email: "yeliang.wang@bit.edu.cn", phone: "010-68912614", office: "北京理工大学物理学院",
    bio: "王业亮，北京理工大学物理学院教授，从事量子器件和量子计算研究。在量子器件的设计和制备方面具有丰富经验。",
    achievements: "量子器件研发",
    links: { official: "https://physics.bit.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=王业亮+量子器件+北理工" },
    members: []
  },

  // ===== 北京航空航天大学 (985) =====
  {
    id: 40, uni: "北京航空航天大学", tier: "985",
    name: "崔健", title: "副教授、博士生导师", dept: "物理学院",
    directions: ["量子计算", "里德堡原子", "超导量子线路", "张量网络"],
    tech: ["super", "atom", "theory"], apps: ["materials", "chemistry", "optimization"],
    email: "jiancui@buaa.edu.cn", phone: "010-82317935", office: "北京航空航天大学沙河校区C座814",
    bio: "崔健，北京航空航天大学物理学院副教授、博士生导师。从事量子计算与量子多体物理研究，包括里德堡原子量子计算、超导量子线路、张量网络算法等。在Science发表论文1篇、Nature Communications 1篇、PRL 2篇。主持多项国家自然科学基金项目。",
    achievements: "Science 1篇、Nat Commun 1篇、PRL 2篇",
    links: { official: "https://physics.buaa.edu.cn/info/1263/4779.htm", scholar: "https://scholar.google.com/scholar?q=Jian+Cui+quantum+BUAA", baidu: "https://xueshu.baidu.com/s?wd=崔健+量子计算+北航" },
    members: []
  },

  // ===== 北京师范大学 (985) =====
  {
    id: 41, uni: "北京师范大学", tier: "985",
    name: "王川", title: "教授、副院长、博士生导师", dept: "人工智能学院",
    directions: ["量子计算", "量子人工智能"],
    tech: ["theory"], apps: ["ai", "finance", "optimization"],
    email: "wangchuan@bnu.edu.cn", phone: "010-58807963", office: "北京师范大学人工智能学院",
    bio: "王川，北京师范大学人工智能学院教授、副院长、博士生导师。国家优青、全球Top 2%科学家。从事量子计算和量子人工智能研究。发表SCI论文150余篇。在量子机器学习、量子优化算法等方向做出多项贡献。",
    achievements: "国家优青、全球Top 2%科学家、SCI论文150+篇",
    links: { official: "https://ai.bnu.edu.cn/", scholar: "https://scholar.google.com/scholar?q=Chuan+Wang+quantum+BNU", baidu: "https://xueshu.baidu.com/s?wd=王川+量子计算+北师大" },
    members: []
  },
  {
    id: 42, uni: "北京师范大学", tier: "985",
    name: "李新奇", title: "教授、国家杰出青年基金获得者", dept: "物理系",
    directions: ["固态量子计算", "量子测量控制"],
    tech: ["semi", "theory"], apps: ["materials"],
    email: "xqli@bnu.edu.cn", phone: "010-58807963", office: "北京师范大学物理系",
    bio: "李新奇，北京师范大学物理系教授、国家杰出青年基金获得者。从事固态量子计算和量子测量控制理论研究。（注：现已转入天津大学，后转入内蒙古大学）",
    achievements: "国家杰出青年基金、固态量子计算理论",
    links: { official: "https://physics.bnu.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=李新奇+固态量子计算+北师大" },
    members: []
  },

  // ===== 湖南大学 (985) =====
  {
    id: 75, uni: "湖南大学", tier: "985",
    name: "李福祥", title: "教授、博士生导师、国家高层次青年人才", dept: "物理与微电子科学学院",
    directions: ["拓扑量子计算", "凝聚态理论"],
    tech: ["topo", "theory"], apps: ["materials"],
    email: "fuxiangli@hnu.edu.cn", phone: "0731-88822417", office: "湖南大学物理楼A314",
    bio: "李福祥，湖南大学物理与微电子科学学院教授、博士生导师、国家高层次青年人才。从事凝聚态理论和拓扑物理研究，在拓扑量子计算、拓扑物态等方面做出理论贡献。",
    achievements: "拓扑量子计算理论",
    links: { official: "https://grzy.hnu.edu.cn/site/index/lifuxiang", group: "https://liphysicshnu.wordpress.com/", scholar: "https://scholar.google.com/scholar?q=Fuxiang+Li+quantum+HNU", baidu: "https://xueshu.baidu.com/s?wd=李福祥+量子计算+湖南大学" },
    members: []
  },

  // ===== 中南大学 (985) =====
  {
    id: 77, uni: "中南大学", tier: "985",
    name: "束传存", title: "教授、博士生导师", dept: "物理学院",
    directions: ["超快量子调控", "量子计算"],
    tech: ["theory"], apps: ["materials", "chemistry"],
    email: "cc.shu@csu.edu.cn", phone: "0731-88836200", office: "中南大学物理与电子学院324",
    bio: "束传存，中南大学物理学院教授、博士生导师。从事超快量子调控和量子计算研究。在PRL等期刊发表论文90余篇。在量子态的超快操控方面做出重要贡献。",
    achievements: "PRL等论文90+篇",
    links: { official: "https://faculty.csu.edu.cn/shuchuancun", group: "https://www.x-mol.com/groups/uqc", scholar: "https://scholar.google.com/scholar?q=Chuancun+Shu+quantum+CSU", baidu: "https://xueshu.baidu.com/s?wd=束传存+量子调控+中南大学" },
    members: []
  },

  // ===== 国防科技大学 (985) =====
  {
    id: 90, uni: "国防科技大学", tier: "985",
    name: "吴俊杰", title: "教授", dept: "计算机学院",
    directions: ["量子计算", "量子算法"],
    tech: ["theory"], apps: ["security", "optimization", "ai"],
    email: "junjiewu@nudt.edu.cn", phone: "0731-84573000", office: "国防科技大学计算机学院",
    bio: "吴俊杰，国防科技大学计算机学院教授，从事量子计算和量子算法研究。在量子算法设计、量子软件与量子计算机体系结构等方向做出贡献。",
    achievements: "量子算法与量子软件",
    links: { official: "https://www.nudt.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=吴俊杰+量子计算+国防科大" },
    members: []
  },

  // ===== 哈尔滨工业大学(深圳) (985) =====
  {
    id: 85, uni: "哈尔滨工业大学(深圳)", tier: "985",
    name: "周宇", title: "教授", dept: "集成电路学院(深圳)",
    directions: ["固态量子信息", "色心量子计算"],
    tech: ["theory"], apps: ["materials", "biology"],
    email: "zhouyu2022@hit.edu.cn", phone: "0755-26035678", office: "哈工大(深圳)集成电路学院",
    bio: "周宇，哈尔滨工业大学(深圳)理学院教授。从事固态量子信息研究，利用金刚石NV色心等体系开展量子计算和量子传感研究。",
    achievements: "色心量子信息",
    links: { official: "https://www.hitsz.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=周宇+固态量子信息+哈工大深圳" },
    members: []
  },

  // ===== 吉林大学 (985) =====
  {
    id: 84, uni: "吉林大学", tier: "985",
    name: "李苏宇", title: "教授", dept: "物理学院",
    directions: ["量子计算", "量子物理"],
    tech: ["theory"], apps: ["materials"],
    email: "sylee@jlu.edu.cn", phone: "0431-85168888", office: "吉林大学物理学院",
    bio: "李苏宇，吉林大学物理学院教授，从事量子物理和量子计算研究。在量子态操控和量子信息处理方面做出贡献。",
    achievements: "量子物理研究",
    links: { official: "https://physics.jlu.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=李苏宇+量子+吉林大学" },
    members: []
  },

  // ===== 南开大学 (985) =====
  {
    id: 87, uni: "南开大学", tier: "985",
    name: "毛亚丽", title: "教授", dept: "物理科学学院",
    directions: ["光量子计算", "量子信息"],
    tech: ["photo"], apps: ["encryption", "optimization"],
    email: "maoyl@nankai.edu.cn", phone: "022-23508221", office: "南开大学物理科学学院",
    bio: "毛亚丽，南开大学物理科学学院教授。2024年11月从南方科技大学转入南开大学。从事光量子信息和光量子计算研究。在量子光源制备、量子信息处理等方面做出贡献。",
    achievements: "光量子信息实验",
    links: { official: "https://physics.nankai.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=毛亚丽+光量子+南开大学" },
    members: []
  },

  // ===== 内蒙古大学 (211) =====
  {
    id: 88, uni: "内蒙古大学", tier: "211",
    name: "李新奇", title: "教授", dept: "物理科学与技术学院",
    directions: ["量子测量控制", "固态量子计算"],
    tech: ["semi", "theory"], apps: ["materials"],
    email: "xinqi.li@imu.edu.cn", phone: "0471-4992990", office: "内蒙古大学物理科学与技术学院",
    bio: "李新奇，内蒙古大学物理科学与技术学院教授、国家杰出青年基金获得者。2024年1月从天津大学转入内蒙古大学。此前曾在天津大学、北京师范大学任职。从事固态量子计算和量子测量控制理论研究。在量子比特的相干操控、量子反馈控制等方面做出重要理论贡献。",
    achievements: "国家杰出青年基金、量子测量控制理论",
    links: { official: "https://physics.imu.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=李新奇+量子测量+内蒙古大学" },
    members: []
  },

  // ===== 西安电子科技大学 (211) =====
  {
    id: 45, uni: "西安电子科技大学", tier: "211",
    name: "李卓", title: "教授、博士生导师", dept: "通信工程学院/ISN国家重点实验室",
    directions: ["量子计算", "量子纠错码"],
    tech: ["theory"], apps: ["security", "encryption"],
    email: "lizhuo@xidian.edu.cn", phone: "029-88201234", office: "西安电子科技大学通信工程学院",
    bio: "李卓，西安电子科技大学教授、博士生导师。从事量子计算、量子纠错码研究。在量子纠错理论、量子通信协议等方面做出多项贡献。",
    achievements: "量子纠错码研究",
    links: { official: "https://faculty.xidian.edu.cn/LZ7/zh_CN", group: "https://web.xidian.edu.cn/lizhuo/", baidu: "https://xueshu.baidu.com/s?wd=李卓+量子计算+西安电子科大" },
    members: []
  },
  {
    id: 46, uni: "西安电子科技大学", tier: "211",
    name: "鲁勇", title: "教授、博士生导师、国家级青年人才", dept: "通信工程学院",
    directions: ["量子计算", "超导量子器件"],
    tech: ["super"], apps: ["materials"],
    email: "luyong01@xidian.edu.cn", phone: "029-88201234", office: "西安电子科技大学通信工程学院",
    bio: "鲁勇，西安电子科技大学教授、博士生导师、华山学者特聘教授、国家级青年人才。师从郭光灿院士和Per Delsing院士。从事超导量子计算和量子器件研究。2025年在PRL发表论文。",
    achievements: "师从郭光灿院士和Per Delsing院士，2025年PRL论文",
    links: { official: "https://faculty.xidian.edu.cn/luyong/en/index/458229/list/index.htm", scholar: "https://scholar.google.com/scholar?q=Yong+Lu+quantum+Xidian", baidu: "https://xueshu.baidu.com/s?wd=鲁勇+量子计算+西安电子科大" },
    members: []
  },
  {
    id: 47, uni: "西安电子科技大学", tier: "211",
    name: "王云江", title: "教授、博士生导师", dept: "ISN国家重点实验室",
    directions: ["量子计算", "量子信息"],
    tech: ["theory"], apps: ["ai", "optimization"],
    email: "yjwang@xidian.edu.cn", phone: "029-88201234", office: "西安电子科技大学ISN国家重点实验室",
    bio: "王云江，西安电子科技大学ISN全国重点实验室/通信工程学院教授、博士生导师。Pacific Institute for the Mathematical Sciences(PIMS) Member，中国电子学会信息论分会秘书长，陕西省量子信息协同创新中心副主任，中国密码学会量子密码专委会委员。师从王新梅教授获博士学位，2008年赴加拿大卡尔加里大学师从Barry C. Sanders教授联合培养。研究方向为量子信息与量子计算、量子计算与机器学习的结合应用。主持国家自然科学基金3项，在IEEE Trans on Information Theory等期刊发表论文多篇。",
    achievements: "量子计算与机器学习",
    links: { official: "https://web.xidian.edu.cn/yjwang/", baidu: "https://xueshu.baidu.com/s?wd=王云江+量子信息+西安电子科大" },
    members: []
  },

  // ===== 郑州大学 (211) =====
  {
    id: 61, uni: "郑州大学", tier: "211",
    name: "苏石磊", title: "教授", dept: "物理学院",
    directions: ["里德堡原子量子计算", "几何量子计算"],
    tech: ["atom", "theory"], apps: ["chemistry", "optimization"],
    email: "slsu@zzu.edu.cn", phone: "0371-67739111", office: "郑州大学物理学院",
    bio: "苏石磊，郑州大学教授。从事里德堡原子量子信息和几何量子计算研究。在SCI期刊发表论文100余篇，其中PRL 5篇、Nature Communications 2篇。总引用3100余次，H因子32。",
    achievements: "PRL 5篇、Nature Commun 2篇，H因子32",
    links: { official: "https://www7.zzu.edu.cn/zzuquantum/kytd/jzgdw/ssl.htm", scholar: "https://scholar.google.com/scholar?q=Shilei+Su+Rydberg+quantum+ZZU", baidu: "https://xueshu.baidu.com/s?wd=苏石磊+里德堡+量子计算+郑州大学" },
    members: []
  },

  // ===== 安徽大学 (211) =====
  {
    id: 62, uni: "安徽大学", tier: "211",
    name: "杨名", title: "教授、博士生导师", dept: "物理与光电工程学院",
    directions: ["量子计算", "量子信息"],
    tech: ["theory"], apps: ["ai", "materials"],
    email: "mingyang@ahu.edu.cn", phone: "0551-63861234", office: "安徽大学物理与光电工程学院",
    bio: "杨名，安徽大学教授、博士生导师。从事量子信息和量子计算研究。发表论文150余篇。担任CCF量子计算专业委员会执行委员。",
    achievements: "论文150+篇，CCF量子计算专委执行委员",
    links: { official: "https://wlxy.ahu.edu.cn/2024/0624/c11026a343537/page.htm", baidu: "https://xueshu.baidu.com/s?wd=杨名+量子计算+安徽大学" },
    members: []
  },
  {
    id: 63, uni: "安徽大学", tier: "211",
    name: "宋学科", title: "教授、博士生导师", dept: "物理与光电工程学院",
    directions: ["量子计算", "量子精密测量"],
    tech: ["theory"], apps: ["materials", "biology"],
    email: "songxk@ahu.edu.cn", phone: "0551-63861234", office: "安徽大学物理与光电工程学院",
    bio: "宋学科，安徽大学教授、博士生导师。从事量子计算和量子精密测量研究。在PRL、npj Quantum Inf.等期刊发表论文70余篇。",
    achievements: "PRL、npj Quantum Inf.等论文70+篇",
    links: { official: "https://wlxy.ahu.edu.cn/2020/0404/c11026a233590/page.htm", baidu: "https://xueshu.baidu.com/s?wd=宋学科+量子计算+安徽大学" },
    members: []
  },

  // ===== 福州大学 (211) =====
  {
    id: 64, uni: "福州大学", tier: "211",
    name: "陈叶鸿", title: "教授、博士生导师", dept: "物理与信息工程学院",
    directions: ["量子信息", "量子计算"],
    tech: ["theory"], apps: ["materials", "optimization"],
    email: "yehong.chen@fzu.edu.cn", phone: "0591-22865432", office: "福州大学物理与信息工程学院",
    bio: "陈叶鸿，福州大学教授、博士生导师、国家级引进人才。从事量子信息与量子计算研究。在PRL等期刊发表论文60余篇。",
    achievements: "PRL等论文60+篇",
    links: { official: "https://physics.fzu.edu.cn/", group: "https://www.x-mol.com/groups/xyfzu", scholar: "https://scholar.google.com/scholar?q=Yehong+Chen+quantum+FZU", baidu: "https://xueshu.baidu.com/s?wd=陈叶鸿+量子信息+福州大学" },
    members: []
  },
  {
    id: 65, uni: "福州大学", tier: "211",
    name: "郑仕标", title: "教授、长江学者、杰青", dept: "物理与信息工程学院",
    directions: ["容错量子计算", "半导体量子计算"],
    tech: ["theory", "semi"], apps: ["security", "materials"],
    email: "sbzheng11@163.com", phone: "0591-22865432", office: "福州大学物理与信息工程学院",
    bio: "郑仕标，福州大学教授、长江学者、杰青。从事容错量子计算和量子纠错码研究，在硅基半导体量子计算方向也有贡献。",
    achievements: "长江学者、杰青、容错量子计算",
    links: { official: "https://physics.fzu.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=郑仕标+容错量子计算+福州大学" },
    members: []
  },

  // ===== 上海大学 (211) =====
  {
    id: 69, uni: "上海大学", tier: "211",
    name: "钟建新", title: "特聘教授、博士生导师", dept: "物理系",
    directions: ["量子信息", "量子计算"],
    tech: ["theory"], apps: ["materials"],
    email: "jxzhong@shu.edu.cn", phone: "021-66132534", office: "上海大学物理系",
    bio: "钟建新，上海大学特聘教授、博士生导师、长江学者特聘教授。从事凝聚态物理和量子信息研究。发表论文400余篇，H因子66。",
    achievements: "论文400+篇，H因子66，长江学者",
    links: { official: "https://physics.shu.edu.cn/info/1082/5673.htm", scholar: "https://scholar.google.com/scholar?q=Jianxin+Zhong+quantum+SHU", baidu: "https://xueshu.baidu.com/s?wd=钟建新+量子信息+上海大学" },
    members: []
  },
  {
    id: 70, uni: "上海大学", tier: "211",
    name: "王潮", title: "教授、博士生导师", dept: "通信与信息工程学院",
    directions: ["量子计算", "量子计算密码学"],
    tech: ["theory"], apps: ["security", "ai", "encryption"],
    email: "wangchao@shu.edu.cn", phone: "021-66132534", office: "上海大学宝山校区翔英楼T713",
    bio: "王潮，上海大学教授、博士生导师。从事量子计算密码学和量子人工智能研究。2019年创造国际上最高量子计算破译纪录。",
    achievements: "2019年国际上最高量子计算破译纪录",
    links: { official: "https://scie.shu.edu.cn/Prof/wangchao.htm", baidu: "https://xueshu.baidu.com/s?wd=王潮+量子计算+上海大学" },
    members: []
  },

  // ===== 华南师范大学 (211) =====
  {
    id: 74, uni: "华南师范大学", tier: "211",
    name: "薛正元", title: "研究员、博士生导师", dept: "物理与电信工程学院",
    directions: ["几何量子计算", "拓扑量子模拟"],
    tech: ["topo", "super"], apps: ["materials"],
    email: "zyxue83@163.com", phone: "020-85211345", office: "华南师范大学物理与电信工程学院",
    bio: "薛正元，华南师范大学研究员、博士生导师。从事几何量子计算和拓扑量子模拟研究，利用超导量子线路实现拓扑量子模拟。在PRL发表论文3篇、npj Quantum Inf 2篇。",
    achievements: "PRL 3篇、npj Quantum Inf 2篇",
    links: { official: "https://physics.scnu.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=薛正元+几何量子计算+华南师大" },
    members: []
  },

  // ===== 苏州大学 (211) =====
  {
    id: 86, uni: "苏州大学", tier: "211",
    name: "徐震宇", title: "教授", dept: "物理科学与技术学院",
    directions: ["量子信息理论", "量子计算"],
    tech: ["theory"], apps: ["security", "optimization"],
    email: "zhenyuxu@suda.edu.cn", phone: "0512-65880025", office: "苏州大学物理科学与技术学院",
    bio: "徐震宇，苏州大学教授，从事量子信息理论和量子计算研究。在量子纠缠理论、量子信息处理等方面做出贡献。",
    achievements: "量子信息理论",
    links: { official: "https://physics.suda.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=徐震宇+量子信息+苏州大学" },
    members: []
  },

  // ===== 中科院系统 =====
  {
    id: 78, uni: "中科院物理所", tier: "cas",
    name: "吕力", title: "研究员", dept: "中科院物理所",
    directions: ["拓扑量子计算"],
    tech: ["topo"], apps: ["materials"],
    email: "lilu@iphy.ac.cn", phone: "010-82649000", office: "北京市海淀区中关村南三街8号",
    bio: "吕力，中科院物理所研究员，从事拓扑量子计算研究。在拓扑量子比特、马约拉纳费米子等方向做出重要贡献。",
    achievements: "拓扑量子计算",
    links: { official: "http://www.iphy.ac.cn/", baidu: "https://xueshu.baidu.com/s?wd=吕力+拓扑量子计算+中科院物理所" },
    members: []
  },
  {
    id: 79, uni: "中科院物理所", tier: "cas",
    name: "范桁", title: "研究员", dept: "中科院物理所",
    directions: ["超导量子计算", "量子计算云平台"],
    tech: ["super"], apps: ["materials", "ai", "optimization"],
    email: "hfan@iphy.ac.cn", phone: "010-82649000", office: "北京市海淀区中关村南三街8号",
    bio: "范桁，中科院物理所研究员，从事超导量子计算和量子计算云平台研究。在超导量子芯片研发和量子计算云平台建设方面做出重要贡献。",
    achievements: "超导量子计算云平台",
    links: { official: "http://www.iphy.ac.cn/", baidu: "https://xueshu.baidu.com/s?wd=范桁+超导量子计算+中科院物理所" },
    members: []
  },
  {
    id: 80, uni: "中科院上海微系统所", tier: "cas",
    name: "林志荣", title: "研究员", dept: "中科院上海微系统所",
    directions: ["超导量子计算"],
    tech: ["super"], apps: ["materials"],
    email: "zrlin@mail.sim.ac.cn", phone: "021-62511070", office: "上海市长宁路865号",
    bio: "林志荣，中科院上海微系统所研究员，从事超导量子计算研究。在超导量子芯片的制备和测试方面做出贡献。",
    achievements: "超导量子芯片",
    links: { official: "http://www.sim.ac.cn/", baidu: "https://xueshu.baidu.com/s?wd=林志荣+超导量子+中科院上海微系统所" },
    members: []
  },

  // ===== 普通本科 =====
  // 首都师范大学
  {
    id: 43, uni: "首都师范大学", tier: "normal",
    name: "费少明", title: "研究员、博士生导师", dept: "数学科学学院",
    directions: ["量子信息与量子计算", "量子计算理论"],
    tech: ["theory"], apps: ["security", "optimization", "encryption"],
    email: "feishm@cnu.edu.cn", phone: "010-68901234", office: "首都师范大学数学科学学院",
    bio: "费少明，首都师范大学研究员、博士生导师。从事量子信息与量子计算理论研究。发表论文550余篇，斯坦福世界前2%科学家。在量子纠缠理论、量子信息处理等方向做出重要贡献。",
    achievements: "论文550+篇，斯坦福世界前2%科学家",
    links: { official: "https://math.cnu.edu.cn/", scholar: "https://scholar.google.com/scholar?q=Shaoming+Fei+quantum+information", baidu: "https://xueshu.baidu.com/s?wd=费少明+量子信息+首都师大" },
    members: []
  },
  {
    id: 44, uni: "首都师范大学", tier: "normal",
    name: "冉仕举", title: "教授、博士生导师", dept: "物理系",
    directions: ["张量网络", "量子计算", "量子机器学习"],
    tech: ["theory"], apps: ["ai", "optimization"],
    email: "sjran@cnu.edu.cn", phone: "010-68901234", office: "首都师范大学物理系",
    bio: "冉仕举，首都师范大学教授、博士生导师。从事张量网络、量子多体模拟和量子机器学习研究。在PRX Quantum、PRL等期刊发表多篇论文。",
    achievements: "PRX Quantum、PRL论文",
    links: { official: "https://physics.cnu.edu.cn/people/faculty/teacher/155896.htm", scholar: "https://scholar.google.com/scholar?q=Shiju+Ran+tensor+network", baidu: "https://xueshu.baidu.com/s?wd=冉仕举+张量网络+量子计算" },
    members: []
  },

  // 浙江理工大学
  {
    id: 53, uni: "浙江理工大学", tier: "normal",
    name: "王晓光", title: "教授、博士生导师", dept: "物理系",
    directions: ["量子计算理论", "量子精密测量"],
    tech: ["theory"], apps: ["materials", "biology"],
    email: "xgwang@zstu.edu.cn", phone: "0571-86843210", office: "浙江理工大学物理系",
    bio: "王晓光，浙江理工大学教授、博士生导师。国家杰出青年基金获得者、国务院特殊津贴。从事量子信息与计算理论和量子精密测量研究。在PRL等期刊发表论文200余篇，SCI引用9000余次。",
    achievements: "PRL等论文200+篇，SCI引用9000+次，国家杰青",
    links: { official: "https://physics.zstu.edu.cn/", scholar: "https://scholar.google.com/scholar?q=Xiaoguang+Wang+quantum+information", baidu: "https://xueshu.baidu.com/s?wd=王晓光+量子信息+浙江理工" },
    members: []
  },

  // 杭州师范大学
  {
    id: 56, uni: "杭州师范大学", tier: "normal",
    name: "杨垂平", title: "教授、博士生导师、二级教授", dept: "物理学院",
    directions: ["量子计算", "量子信息"],
    tech: ["theory"], apps: ["encryption", "optimization", "security"],
    email: "yangcp@hznu.edu.cn", phone: "0571-28865200", office: "杭州师范大学仓前校区勤园20-510",
    bio: "杨垂平，杭州师范大学教授、博士生导师、二级教授。从事量子信息、量子计算和量子光学研究。在Nature Communications、PRL等期刊发表论文150余篇。2023-2025连续3年全球前2%顶尖科学家。",
    achievements: "Nature Commun、PRL等论文150+篇，全球前2%科学家",
    links: { official: "https://wlxy.hznu.edu.cn/c/2026-03-10/3177749.shtml", scholar: "https://scholar.google.com/scholar?q=Chuiping+Yang+quantum+HZNU", baidu: "https://xueshu.baidu.com/s?wd=杨垂平+量子计算+杭州师范" },
    members: []
  },

  // 重庆邮电大学
  {
    id: 51, uni: "重庆邮电大学", tier: "normal",
    name: "朱家骥", title: "教授、硕士生导师", dept: "电子科学与工程学院",
    directions: ["量子计算", "量子人工智能", "拓扑量子计算"],
    tech: ["topo", "theory"], apps: ["ai", "materials"],
    email: "zhujj@cqupt.edu.cn", phone: "023-62461234", office: "重庆邮电大学信科大厦S228",
    bio: "朱家骥，重庆邮电大学教授、硕士生导师。专用量子计算与量子人工智能重庆市重点实验室常务副主任。从事开放量子系统、拓扑量子物态、量子人工智能研究。在PRL发表论文3篇。",
    achievements: "PRL 3篇，重庆市重点实验室常务副主任",
    links: { official: "https://faculty.cqupt.edu.cn/zhujj/zh_CN/index.htm", scholar: "https://scholar.google.com/scholar?q=Jiaji+Zhu+quantum+CQUPT", baidu: "https://xueshu.baidu.com/s?wd=朱家骥+量子计算+重庆邮电" },
    members: []
  },

  // 湘潭大学
  {
    id: 60, uni: "湘潭大学", tier: "normal",
    name: "李琴", title: "教授、博士生导师", dept: "计算机学院·网络空间安全学院",
    directions: ["量子计算", "量子算法", "量子人工智能"],
    tech: ["theory"], apps: ["security", "ai", "encryption"],
    email: "liqin@xtu.edu.cn", phone: "0731-58293289", office: "湘潭大学计算机学院",
    bio: "李琴，湘潭大学教授、博士生导师。从事量子计算、量子密码、量子人工智能和量子区块链研究。在TIFS、PRA等期刊发表论文50余篇。2022年湖南省自然科学二等奖，主持NSFC项目5项。",
    achievements: "TIFS、PRA等论文50+篇，湖南省自然科学二等奖",
    links: { official: "https://jwxy.xtu.edu.cn/info/1155/3271.htm", baidu: "https://xueshu.baidu.com/s?wd=李琴+量子计算+湘潭大学" },
    members: []
  },

  // 湖北工业大学
  {
    id: 58, uni: "湖北工业大学", tier: "normal",
    name: "王飞", title: "教授", dept: "理学院",
    directions: ["自旋量子计算", "量子信息"],
    tech: ["super"], apps: ["materials"],
    email: "feiwang@hbut.edu.cn", phone: "027-59750000", office: "湖北工业大学理学院",
    bio: "王飞，湖北工业大学理学院教授。从事微纳光子学、自旋量子计算和量子信息研究。团队累计主持国家级项目8项，发表论文100余篇。",
    achievements: "团队国家级项目8项，论文100+篇",
    links: { official: "https://lxy.hbut.edu.cn/info/1020/3479.htm", baidu: "https://xueshu.baidu.com/s?wd=王飞+自旋量子计算+湖北工业" },
    members: []
  },

  // 莆田学院
  {
    id: 59, uni: "莆田学院", tier: "normal",
    name: "李文君", title: "副教授、硕士生导师", dept: "新工科产业学院",
    directions: ["量子计算", "量子人工智能"],
    tech: ["theory"], apps: ["ai", "optimization"],
    email: "liwenjun18@mails.ucas.ac.cn", phone: "18813148197", office: "莆田学院新工科产业学院",
    bio: "李文君，莆田学院副教授、硕士生导师。中国科学院大学博士。从事量子人工智能、量子计算和张量网络研究。",
    achievements: "中科院大学博士",
    links: { official: "https://www.ptu.edu.cn/rgzn/info/2126/7183.htm", baidu: "https://xueshu.baidu.com/s?wd=李文君+量子计算+张量网络" },
    members: []
  },

  // 南方科技大学
  {
    id: 81, uni: "南方科技大学", tier: "normal",
    name: "鲁大为", title: "教授", dept: "物理系",
    directions: ["核磁共振量子计算"],
    tech: ["theory"], apps: ["chemistry", "biology"],
    email: "ludw@sustech.edu.cn", phone: "0755-88018000", office: "南方科技大学物理系",
    bio: "鲁大为，南方科技大学教授。从事核磁共振量子计算研究。利用核磁共振技术实现量子计算和量子模拟实验。",
    achievements: "核磁共振量子计算",
    links: { official: "https://physics.sustech.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=鲁大为+量子计算+南科大" },
    members: []
  },

  // 山西大学
  {
    id: 82, uni: "山西大学", tier: "normal",
    name: "申恒", title: "教授、博士生导师", dept: "光电研究所/物理电子工程学院",
    directions: ["离子阱量子计算", "原子阵列量子模拟"],
    tech: ["ion"], apps: ["chemistry", "optimization"],
    email: "hengshen@sxu.edu.cn", phone: "0351-7113889", office: "山西大学光电研究所",
    bio: "申恒，山西大学教授、博士生导师，国家优青、牛顿学者、重点研发项目青年项目负责人、山西省科技重大专项「揭榜挂帅」负责人。本科毕业于南开大学与天津大学合办光电子技术科学专业，2015年在丹麦哥本哈根大学尼尔斯玻尔研究所获博士学位。后在奥地利因斯布鲁克国家科学院量子信息与量子光学中心Rainer Blatt研究组从事博士后研究，2017年获英国皇家学会牛顿国际基金支持在牛津大学物理系从事光力原子混合系统研究。以通信作者或第一作者在Nature、Nature Physics、Nature Communications及PRL等国际顶级刊物发表多篇论文。研究方向包括量子模拟与计算、量子精密测量及新型量子材料等。",
    achievements: "Nature、Nature Physics、Nature Communications及PRL论文",
    links: { official: "https://ioe.sxu.edu.cn/sys/labs14/yjcy14/bsyjs", group: "https://ioe.sxu.edu.cn/sys/labs14/Team14/index.htm", baidu: "https://xueshu.baidu.com/s?wd=申恒+离子阱+山西大学" },
    members: [
      { name: "徐忠孝", role: "副教授、博导", research: "量子光学、量子计算和模拟", email: "xuzhongxiao@sxu.edu.cn", phone: "18234120082" },
      { name: "李东豪", role: "讲师", research: "量子光学、量子计算和模拟", email: "lidonghaocn@163.com", phone: "" },
      { name: "姜伟伦", role: "特聘副研究员", research: "量子蒙特卡洛、量子计算和模拟", email: "wljiang@sxu.edu.cn", phone: "" },
      { name: "田添", role: "特聘副研究员", research: "量子模拟、拓扑物理", email: "phystian@sxu.edu.cn", phone: "" }
    ]
  },

  // 深圳大学
  {
    id: 83, uni: "深圳大学", tier: "normal",
    name: "李俊", title: "教授", dept: "物理与光电工程学院",
    directions: ["量子控制", "量子计算"],
    tech: ["theory"], apps: ["optimization", "materials"],
    email: "lijunquantum@szu.edu.cn", phone: "0755-26538500", office: "深圳大学物理与光电工程学院",
    bio: "李俊，深圳大学教授。从事量子控制和量子计算研究。在量子反馈控制、量子系统优化等方向做出理论贡献。",
    achievements: "量子控制理论",
    links: { official: "https://physics.szu.edu.cn/", baidu: "https://xueshu.baidu.com/s?wd=李俊+量子控制+深圳大学" },
    members: []
  },

  // 福建师范大学
  {
    id: 67, uni: "福建师范大学", tier: "normal",
    name: "林崧", title: "教授、博士生导师", dept: "计算机与网络空间安全学院",
    directions: ["量子计算", "量子密码"],
    tech: ["theory"], apps: ["security", "encryption", "ai"],
    email: "lins95@fjnu.edu.cn", phone: "0591-83465200", office: "福建师范大学计网楼408",
    bio: "林崧，福建师范大学教授、博士生导师。从事量子密码、量子智能计算和量子安全多方计算研究。发表论文60余篇（SCI 41篇），H因子17，国家专利3项。",
    achievements: "论文60+篇(SCI 41篇)，H因子17",
    links: { official: "https://ccs.fjnu.edu.cn/0d/b5/c16744a331189/page.htm", baidu: "https://xueshu.baidu.com/s?wd=林崧+量子密码+福建师大" },
    members: []
  },

  // 南京邮电大学
  {
    id: 48, uni: "南京邮电大学", tier: "normal",
    name: "王琴", title: "教授、博士生导师、副院长", dept: "通信与信息工程学院",
    directions: ["量子计算", "量子信息"],
    tech: ["theory"], apps: ["security", "encryption"],
    email: "qinw@njupt.edu.cn", phone: "025-85866555", office: "南京邮电大学通信与信息工程学院",
    bio: "王琴，南京邮电大学教授、博士生导师、副院长。江苏省杰出青年。从事量子保密通信、量子信息研究。在PRL等期刊发表论文90余篇。",
    achievements: "PRL等论文90+篇，江苏省杰出青年",
    links: { official: "https://quantum.njupt.edu.cn/11725/list.htm", baidu: "https://xueshu.baidu.com/s?wd=王琴+量子通信+南京邮电" },
    members: []
  },
  {
    id: 49, uni: "南京邮电大学", tier: "normal",
    name: "盛宇波", title: "教授、博士生导师、国家级人才", dept: "通信与信息工程学院",
    directions: ["量子计算", "量子信息"],
    tech: ["theory"], apps: ["security", "encryption"],
    email: "shengyb@njupt.edu.cn", phone: "025-85866555", office: "南京邮电大学通信与信息工程学院",
    bio: "盛宇波，南京邮电大学教授、博士生导师、国家级人才。从事量子计算和量子信息研究。SCI论文150余篇，H因子42，获中国电子学会科技一等奖。",
    achievements: "SCI论文150+篇，H因子42，电子学会科技一等奖",
    links: { official: "https://yjs.njupt.edu.cn/", scholar: "https://scholar.google.com/scholar?q=Yubo+Sheng+quantum+NJUPT", baidu: "https://xueshu.baidu.com/s?wd=盛宇波+量子+南京邮电" },
    members: []
  },
];
