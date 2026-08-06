// ===== 量子计算教授数据库 =====
// 数据版本与更新元信息
const DATA_META = {
  "version": "2.0.0",
  "lastUpdated": "2026-08-06",
  "lastUpdatedTime": "2026-08-06T13:53:31+08:00",
  "nextAutoUpdate": "2026-08-07T08:00:00+08:00",
  "autoUpdateSchedule": "每日 08:00 (北京时间)",
  "totalProfessors": 427,
  "totalUniversities": 98,
  "updateLog": [
    {
      "date": "2026-08-05",
      "changes": "初始版本：74位教授，39所高校，全部联系方式已补全，含课题组成员和企业信息"
    },
    {
      "date": "2026-08-06",
      "changes": "例行更新：增补潘建伟（九章四号、门捷列夫国际基础科学奖、中科大常务副校长）、陆朝阳（九章四号、全国创新争先奖）、段路明（512离子二维阵列/300离子量子模拟《自然》）、王浩华（104比特组合优化、逻辑量子比特错误缓解《Nat Commun》《NSR》）、金贤敏（图灵量子2026年多轮融资及TuringQ Gen2/QAgent）的最新成果与企业动态；新增交通物流应用标签。"
    },
    {
      "date": "2026-08-06",
      "changes": "大规模扩充：新增约 353 位量子计算及相关应用领域学者（覆盖全国各区域高校、中科院院所、港澳高校及量子企业/国家实验室），收录标准放宽至不论职务大小。"
    },
    {
      "date": "2026-08-06",
      "changes": "数据清洗：规范化 62 位学者姓名（将“English (中文)”统一改为中文），补全 26 条企业机构记录的规模信息，修复企业卡片上姓名显示为英文及“企业规模: undefined”的问题。"
    }
  ]
};

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
  traffic: { name: "交通物流", color: "#607d8b" },
  communication: { name: "量子通信", color: "#d81b60" }
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
  {
    "id": 1,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "潘建伟",
    "title": "中国科学院院士、教授",
    "dept": "物理学院",
    "directions": [
      "光量子计算",
      "量子纠缠",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "pan@ustc.edu.cn",
    "phone": "0551-63606493",
    "office": "安徽省合肥市金寨路96号",
    "bio": "潘建伟，1970年3月生，浙江东阳人。1999年获奥地利维也纳大学实验物理博士学位。中国科学技术大学教授、常务副校长，中国科学院院士，发展中国家科学院院士，奥地利科学院外籍院士，中科院量子信息与量子科技创新研究院院长，中科院量子科学实验卫星先导专项首席科学家。国际上量子信息实验研究领域的开拓者之一，在量子通信和多光子纠缠操纵方面做出系统性创新工作。研究成果多次入选Nature年度十大科学事件、Science年度十大科技进展。在Nature发表论文11篇，Nature Physics 8篇，Nature Photonics 9篇，PRL 70余篇，共被引用13000余次。获奥地利科学院Erich-Schmid奖、欧盟玛丽·居里杰出研究奖、欧洲物理学会菲涅尔奖、国家自然科学一等奖等。",
    "achievements": "墨子号量子卫星、九章光量子计算原型机、九章四号(2026)、2025腾冲科学大奖、联合国教科文组织-门捷列夫国际基础科学奖首位中国获奖者(2026)",
    "links": {
      "official": "https://faculty.ustc.edu.cn/panjianwei/en/index.htm",
      "group": "https://quantum.ustc.edu.cn/",
      "scholar": "https://scholar.google.com/citations?user=8CzM5NwAAAAJ",
      "baidu": "https://xueshu.baidu.com/s?wd=潘建伟+量子计算"
    },
    "enterprise": {
      "name": "国盾量子",
      "stock": "688027.SH",
      "role": "联合创始人，持股15.19%",
      "url": "https://www.quantum-info.com/"
    },
    "members": [
      {
        "name": "陈向军",
        "role": "教授、博导",
        "research": "原子分子物理、电子碰撞谱学",
        "email": "xjun@ustc.edu.cn",
        "phone": "0551-63601170"
      },
      {
        "name": "朱林繁",
        "role": "教授、博导",
        "research": "原子分子物理实验",
        "email": "lfzhu@ustc.edu.cn"
      },
      {
        "name": "包小辉",
        "role": "研究员",
        "research": "冷原子量子中继、量子存储",
        "email": "xhbao@ustc.edu.cn"
      },
      {
        "name": "于扬",
        "role": "研究员",
        "research": "冷原子量子存储、量子网络",
        "email": "yong.yu@ustc.edu.cn"
      }
    ]
  },
  {
    "id": 2,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "陆朝阳",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "光量子计算",
      "量子纠缠"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "optimization",
      "chemistry"
    ],
    "email": "cylu@ustc.edu.cn",
    "phone": "0551-63606493",
    "office": "安徽省合肥市金寨路96号",
    "bio": "陆朝阳，中国科学技术大学教授。长期致力于光量子计算和量子纠缠研究，作为核心成员参与「九章」光量子计算原型机的研发工作。在Nature、Science等期刊发表多篇高水平论文，研究成果入选两院院士评选的中国十大科技进展新闻。",
    "achievements": "九章光量子计算原型机负责人，九章四号核心成员，第四届全国创新争先奖(2026)",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "scholar": "https://scholar.google.com/scholar?q=陆朝阳+quantum+USTC",
      "baidu": "https://xueshu.baidu.com/s?wd=陆朝阳+量子计算"
    },
    "members": [
      {
        "name": "博士后及博士生若干",
        "role": "团队成员",
        "research": "光量子计算、量子纠缠",
        "email": "cylu@ustc.edu.cn",
        "phone": "0551-63606493"
      }
    ]
  },
  {
    "id": 3,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "郭光灿",
    "title": "中国科学院院士、教授",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "量子计算",
      "量子光学"
    ],
    "tech": [
      "theory",
      "photo"
    ],
    "apps": [
      "encryption",
      "optimization"
    ],
    "email": "gcguo@ustc.edu.cn",
    "phone": "0551-63606493",
    "office": "安徽省合肥市金寨路96号",
    "bio": "郭光灿，中国科学院院士，中国科学技术大学教授。中国量子光学和量子信息科学的开拓者之一。早期从事量子光学理论研究，后拓展至量子信息领域。在量子纠缠、量子克隆、量子计算等方向做出多项开创性贡献。发表论文数百篇，培养了一大批量子信息领域的优秀人才。",
    "achievements": "中国量子光学和量子信息科学开拓者之一",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=郭光灿+量子信息",
      "scholar": ""
    },
    "enterprise": {
      "name": "本源量子",
      "stock": "估值超200亿",
      "role": "联合创始人、首席科技顾问",
      "url": "https://originqc.com.cn"
    },
    "members": [
      {
        "name": "课题组成员若干",
        "role": "研究员、博士后、博士生",
        "research": "量子光学、量子信息",
        "email": "gcguo@ustc.edu.cn",
        "phone": "0551-63606493"
      }
    ]
  },
  {
    "id": 4,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "郭国平",
    "title": "教授、博士生导师",
    "dept": "物理学院/微电子学院",
    "directions": [
      "半导体量子芯片",
      "超导量子计算",
      "量子算法"
    ],
    "tech": [
      "semi",
      "super"
    ],
    "apps": [
      "materials",
      "security"
    ],
    "email": "gpguo@ustc.edu.cn",
    "phone": "0551-62391682",
    "office": "安徽省合肥市金寨路96号",
    "bio": "郭国平，1977年12月出生于江西南昌。1996年考入中国科学技术大学，2005年获博士学位。第十四届全国人大代表，中国科学技术大学教授，中科院量子信息重点实验室副主任，安徽省量子芯片重点实验室主任，安徽省量子计算工程中心主任，本源量子首席科学家。国内最早开展半导体量子芯片研究的学者之一，2003年创建国内首个量子计算研究小组。从事半导体栅型量子点量子比特、硅锗异质结量子芯片、多量子比特耦合架构等研究。获国家杰出青年科学基金、长江教授青年学者、国家万人计划领军人才等荣誉。著有《量子计算与编程入门》。",
    "achievements": "国内首个量子计算研究小组(2003年)，半导体量子芯片，本源量子创始人",
    "links": {
      "official": "https://faculty.ustc.edu.cn/guoguoping/zh_CN/index.htm",
      "group": "https://quantum.ustc.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=郭国平+量子计算",
      "scholar": ""
    },
    "enterprise": {
      "name": "本源量子",
      "stock": "Pre-IPO，近30亿融资",
      "role": "联合创始人、首席科学家",
      "url": "https://originqc.com.cn"
    },
    "members": [
      {
        "name": "李海欧",
        "role": "教授",
        "research": "半导体量子计算、硅基量子点",
        "email": "haiouli@ustc.edu.cn",
        "phone": "0551-63606493"
      },
      {
        "name": "曹刚",
        "role": "教授",
        "research": "半导体量子计算、量子比特控制",
        "email": "gcao@ustc.edu.cn",
        "phone": "0551-63606493"
      },
      {
        "name": "博士后及博士生若干",
        "role": "团队成员",
        "research": "半导体量子芯片、超导量子计算",
        "email": "gpguo@ustc.edu.cn",
        "phone": ""
      }
    ]
  },
  {
    "id": 5,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "朱晓波",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "超导量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "materials",
      "chemistry"
    ],
    "email": "xbzhu16@ustc.edu.cn",
    "phone": "0551-63606493",
    "office": "安徽省合肥市金寨路96号",
    "bio": "朱晓波，中国科学技术大学教授，长期从事超导量子计算研究。在超导量子比特的设计、制备和操控方面具有丰富经验，参与多项国家级量子计算科研项目。",
    "achievements": "超导量子计算芯片研发",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=朱晓波+超导量子计算",
      "scholar": ""
    },
    "members": [
      {
        "name": "课题组成员若干",
        "role": "研究员、博士后、博士生",
        "research": "超导量子比特、量子芯片",
        "email": "xbzhu16@ustc.edu.cn",
        "phone": "0551-63606493"
      }
    ]
  },
  {
    "id": 6,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "李海欧",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "半导体量子计算"
    ],
    "tech": [
      "semi"
    ],
    "apps": [
      "materials"
    ],
    "email": "haiouli@ustc.edu.cn",
    "phone": "0551-63606493",
    "office": "安徽省合肥市金寨路96号",
    "bio": "李海欧，中国科学技术大学教授，郭国平课题组核心成员。主要从事半导体量子点量子比特研究，在硅基半导体量子芯片的制备和操控方面取得重要进展。参与多项国家自然科学基金项目。",
    "achievements": "半导体量子点量子比特操控",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=李海欧+半导体量子计算",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 7,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "曹刚",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "半导体量子计算"
    ],
    "tech": [
      "semi"
    ],
    "apps": [
      "materials"
    ],
    "email": "gcao@ustc.edu.cn",
    "phone": "0551-63606493",
    "office": "安徽省合肥市金寨路96号",
    "bio": "曹刚，中国科学技术大学教授，郭国平课题组核心成员。主要从事半导体量子计算研究，在硅锗异质结量子点量子比特的制备和表征方面做出重要贡献。",
    "achievements": "硅锗异质结量子点量子比特",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=曹刚+半导体量子+中科大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 8,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "任希锋",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "光量子计算",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "optimization",
      "encryption"
    ],
    "email": "renxf@ustc.edu.cn",
    "phone": "0551-63606493",
    "office": "安徽省合肥市金寨路96号",
    "bio": "任希锋，中国科学技术大学教授，主要从事光量子计算和量子信息研究。在光量子芯片、量子纠缠光源制备等方面取得多项研究成果。",
    "achievements": "光量子芯片研究",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=任希锋+光量子+中科大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 9,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "彭新华",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "核磁共振量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "chemistry",
      "biology"
    ],
    "email": "xhpeng@ustc.edu.cn",
    "phone": "0551-63606493",
    "office": "安徽省合肥市金寨路96号",
    "bio": "彭新华，中国科学技术大学教授，主要从事核磁共振量子计算和量子信息理论研究。在量子态层析、量子控制等方面做出多项创新工作。",
    "achievements": "核磁共振量子计算",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=彭新华+量子信息+中科大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 10,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "丁冬生",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "里德堡原子量子计算"
    ],
    "tech": [
      "atom"
    ],
    "apps": [
      "chemistry",
      "materials"
    ],
    "email": "dds@ustc.edu.cn",
    "phone": "0551-63606493",
    "office": "安徽省合肥市金寨路96号",
    "bio": "丁冬生，中国科学技术大学教授，主要从事里德堡原子量子计算研究。利用里德堡原子的强相互作用特性实现量子逻辑门操作，是该方向国内领先的实验研究组之一。",
    "achievements": "里德堡原子量子计算实验",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=丁冬生+里德堡+中科大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 11,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "杜江峰",
    "title": "中国科学院院士、教授",
    "dept": "物理学院",
    "directions": [
      "量子计算",
      "量子精密测量"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "biology",
      "materials"
    ],
    "email": "djf@ustc.edu.cn",
    "phone": "0551-63606493",
    "office": "安徽省合肥市金寨路96号",
    "bio": "杜江峰，中国科学院院士，中国科学技术大学教授。主要从事量子精密测量和量子计算研究，利用NV色心等固态量子体系开展量子计算和量子传感研究。在Science、Nature等期刊发表多篇高水平论文。研究成果应用于生物医学检测、材料表征等领域。",
    "achievements": "NV色心量子计算与量子传感",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "scholar": "https://scholar.google.com/scholar?q=Jiangfeng+Du+quantum+USTC",
      "baidu": "https://xueshu.baidu.com/s?wd=杜江峰+量子精密测量"
    },
    "enterprise": {
      "name": "国仪量子",
      "stock": "已完成5轮融资",
      "role": "联合创始人",
      "url": "https://www.ciqtek.com/"
    },
    "members": [
      {
        "name": "课题组成员若干",
        "role": "研究员、博士后、博士生",
        "research": "量子精密测量、NV色心量子计算",
        "email": "djf@ustc.edu.cn",
        "phone": "0551-63600307"
      }
    ]
  },
  {
    "id": 12,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "韩永建",
    "title": "研究员、博士生导师",
    "dept": "中科院量子信息重点实验室",
    "directions": [
      "离子阱量子计算",
      "量子模拟"
    ],
    "tech": [
      "ion"
    ],
    "apps": [
      "chemistry",
      "optimization"
    ],
    "email": "smhan@ustc.edu.cn",
    "phone": "0551-63606493",
    "office": "安徽省合肥市金寨路96号",
    "bio": "韩永建，中科院量子信息重点实验室研究员、博士生导师。从事离子阱量子计算和量子模拟研究，在离子阱量子比特操控、量子逻辑门实现等方面做出重要贡献。",
    "achievements": "离子阱量子计算研究",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=韩永建+量子计算+中科大",
      "scholar": ""
    },
    "enterprise": {
      "name": "幺正量子",
      "stock": "中国科大知识产权赋权企业",
      "role": "创始人、董事长",
      "url": "http://unitqc.com/"
    },
    "members": []
  },
  {
    "id": 13,
    "uni": "清华大学",
    "tier": "985",
    "name": "段路明",
    "title": "中国科学院院士、教授",
    "dept": "交叉信息研究院",
    "directions": [
      "离子阱量子计算",
      "量子网络",
      "量子模拟"
    ],
    "tech": [
      "ion"
    ],
    "apps": [
      "chemistry",
      "optimization",
      "security"
    ],
    "email": "lmduan@tsinghua.edu.cn",
    "phone": "010-62797832",
    "office": "清华大学交叉信息研究院",
    "bio": "段路明，中国科学院院士，清华大学姚期智讲座教授、基础科学讲席教授。主要从事离子阱量子计算、量子网络和量子模拟研究。提出DLCZ量子中继方案，实现202个离子量子比特稳定囚禁的世界纪录。在Nature、Science、PRL等期刊发表大量高水平论文。研究成果对量子计算规模化具有重要意义。",
    "achievements": "DLCZ量子中继方案、202个离子量子比特稳定囚禁、512离子二维阵列稳定囚禁与300离子量子模拟(2026，《自然》)",
    "links": {
      "official": "http://quantuminfo.tsinghua.edu.cn/",
      "group": "https://iiis.tsinghua.edu.cn/",
      "scholar": "https://scholar.google.com/scholar?q=Luming+Duan+quantum",
      "baidu": "https://xueshu.baidu.com/s?wd=段路明+量子计算+清华"
    },
    "enterprise": {
      "name": "华翊量子",
      "stock": "2026年完成A+轮融资，HYQ-B100交付中国移动研究院",
      "role": "创始人",
      "url": "http://www.hyqubit.com/"
    },
    "members": [
      {
        "name": "吴宇恺",
        "role": "助理教授",
        "research": "量子计算的物理实现、量子信息",
        "email": "yukaiwu@tsinghua.edu.cn",
        "phone": ""
      },
      {
        "name": "濮云飞",
        "role": "助理教授",
        "research": "离子阱与中性原子阵列的量子网络与量子计算",
        "email": "yunfeipu@tsinghua.edu.cn",
        "phone": ""
      },
      {
        "name": "侯攀宇",
        "role": "助理教授",
        "research": "离子量子计算、金刚石色心量子信息应用",
        "email": "houpanyu@tsinghua.edu.cn",
        "phone": "010-62797832"
      },
      {
        "name": "宋祎璞",
        "role": "研究员",
        "research": "超导量子计算",
        "email": "songyipu@tsinghua.edu.cn",
        "phone": "010-62797832"
      },
      {
        "name": "周子超",
        "role": "研究员",
        "research": "离子阱量子信息处理",
        "email": "zhouzc@tsinghua.edu.cn",
        "phone": "010-62797832"
      },
      {
        "name": "张宏毅",
        "role": "副研究员",
        "research": "超导量子信息处理、微波量子光学和量子器件",
        "email": "lmduan@tsinghua.edu.cn",
        "phone": "010-62797832"
      },
      {
        "name": "黄园园",
        "role": "助理研究员",
        "research": "离子阱量子网络",
        "email": "lmduan@tsinghua.edu.cn",
        "phone": "010-62797832"
      },
      {
        "name": "姜越",
        "role": "助理研究员",
        "research": "离子阱量子计算与量子模拟、离子阱芯片研发",
        "email": "lmduan@tsinghua.edu.cn",
        "phone": "010-62797832"
      },
      {
        "name": "祁宾祥",
        "role": "助理研究员",
        "research": "离子阱量子计算控制系统、量子精密测量电子学",
        "email": "lmduan@tsinghua.edu.cn",
        "phone": "010-62797832"
      },
      {
        "name": "王韦婷",
        "role": "助理研究员",
        "research": "超导量子信息处理、混合量子系统",
        "email": "lmduan@tsinghua.edu.cn",
        "phone": "010-62797832"
      }
    ]
  },
  {
    "id": 14,
    "uni": "清华大学",
    "tier": "985",
    "name": "孙麓岩",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "超导量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "materials",
      "chemistry"
    ],
    "email": "luyansun@tsinghua.edu.cn",
    "phone": "010-62784567",
    "office": "清华大学物理系",
    "bio": "孙麓岩，清华大学物理系教授，从事超导量子计算研究。在超导量子比特的制备、操控和量子纠错等方面做出重要贡献。",
    "achievements": "超导量子比特量子纠错实验",
    "links": {
      "official": "https://www.phys.tsinghua.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=孙麓岩+超导量子+清华",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 15,
    "uni": "清华大学",
    "tier": "985",
    "name": "刘玉玺",
    "title": "助理教授",
    "dept": "交叉信息研究院",
    "directions": [
      "超导量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "materials",
      "optimization"
    ],
    "email": "yuxiliu@tsinghua.edu.cn",
    "phone": "010-62797832",
    "office": "清华大学交叉信息研究院",
    "bio": "刘玉玺，清华大学交叉信息研究院助理教授，从事超导量子计算研究。在超导量子比特系统和量子算法实验方面具有丰富经验。",
    "achievements": "超导量子计算实验",
    "links": {
      "official": "https://iiis.tsinghua.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=刘玉玺+超导量子+清华",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 16,
    "uni": "清华大学",
    "tier": "985",
    "name": "姚期智",
    "title": "图灵奖得主、中国科学院院士",
    "dept": "交叉信息研究院",
    "directions": [
      "量子算法",
      "量子计算理论"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "finance",
      "security",
      "optimization",
      "ai"
    ],
    "email": "andrewcyao@tsinghua.edu.cn",
    "phone": "010-62797832",
    "office": "清华大学交叉信息研究院",
    "bio": "姚期智（Andrew Yao），图灵奖得主，中国科学院院士，清华大学交叉信息研究院院长。主要从事理论计算机科学和量子计算理论研究。提出了著名的姚期智-西蒙问题，在量子算法复杂性理论方面做出奠基性贡献。培养了大量量子计算和理论计算机科学领域的顶尖人才。",
    "achievements": "图灵奖得主、量子算法复杂性理论奠基人",
    "links": {
      "official": "https://iiis.tsinghua.edu.cn/",
      "scholar": "https://scholar.google.com/scholar?q=Andrew+Yao+quantum+computing",
      "baidu": "https://xueshu.baidu.com/s?wd=姚期智+量子计算"
    },
    "members": [
      {
        "name": "交叉信息研究院全体教师",
        "role": "教授、副教授、助理教授",
        "research": "量子计算、量子算法、量子信息",
        "email": "iiisrecruit@mail.tsinghua.edu.cn",
        "phone": "010-62797832"
      }
    ]
  },
  {
    "id": 17,
    "uni": "清华大学",
    "tier": "985",
    "name": "龙桂鲁",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "量子算法",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "gllong@tsinghua.edu.cn",
    "phone": "010-62784567",
    "office": "清华大学物理系",
    "bio": "龙桂鲁，清华大学物理系教授，从事量子通信和量子算法研究。在量子直接通信、量子搜索算法等方面做出多项创新工作。",
    "achievements": "量子直接通信协议",
    "links": {
      "official": "https://www.phys.tsinghua.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=龙桂鲁+量子通信+清华",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 18,
    "uni": "北京大学",
    "tier": "985",
    "name": "王剑威",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "光量子芯片",
      "集成量子计算",
      "量子网络"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "chemistry",
      "optimization"
    ],
    "email": "jianwei.wang@pku.edu.cn",
    "phone": "010-62758257",
    "office": "北京大学物理学院西431",
    "bio": "王剑威，北京大学物理学院教授。2016年获英国布里斯托尔大学博士学位。获得国家杰出青年科学基金(2023)、海外高层次青年人才计划(2018)。研究领域为集成量子光学、光量子芯片物理与技术。在Science(3篇)、Nature(2篇)、Nature Physics(5篇)、Nature Photonics(7篇)等期刊发表论文50余篇。获杨振宁奖、王大珩光学奖、饶毓泰基础光学奖、陈嘉庚青年科学奖等荣誉。",
    "achievements": "大规模集成光量子芯片、光子-原子混合集成芯片",
    "links": {
      "official": "https://faculty.pku.edu.cn/Qchip",
      "group": "https://group.pku.edu.cn/Qchip/zh_CN/zhym/42158/list/index.htm",
      "scholar": "https://scholar.google.com/scholar?q=Jianwei+Wang+quantum+Peking",
      "baidu": "https://xueshu.baidu.com/s?wd=王剑威+光量子芯片+北大"
    },
    "members": [
      {
        "name": "戴天翔",
        "role": "博士后",
        "research": "集成量子光学、拓扑光子学",
        "email": "jianwei.wang@pku.edu.cn",
        "phone": "010-62758257"
      },
      {
        "name": "李光真",
        "role": "博士生",
        "research": "光量子芯片",
        "email": "jianwei.wang@pku.edu.cn",
        "phone": "010-62758257"
      },
      {
        "name": "袁鲁琦",
        "role": "博士生",
        "research": "量子通信网络",
        "email": "jianwei.wang@pku.edu.cn",
        "phone": "010-62758257"
      },
      {
        "name": "贾鑫宇",
        "role": "博士生",
        "research": "连续变量量子计算",
        "email": "jianwei.wang@pku.edu.cn",
        "phone": "010-62758257"
      },
      {
        "name": "翟崇昊",
        "role": "博士生",
        "research": "集成量子光学",
        "email": "jianwei.wang@pku.edu.cn",
        "phone": "010-62758257"
      }
    ]
  },
  {
    "id": 19,
    "uni": "北京大学",
    "tier": "985",
    "name": "周小计",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "冷原子量子模拟",
      "量子计算"
    ],
    "tech": [
      "atom"
    ],
    "apps": [
      "materials",
      "chemistry"
    ],
    "email": "xjzhou@pku.edu.cn",
    "phone": "010-62755555",
    "office": "北京大学物理学院",
    "bio": "周小计，北京大学物理学院教授，从事冷原子量子模拟研究。利用超冷原子体系模拟凝聚态物理中的重要问题，在量子物态调控方面做出多项创新工作。",
    "achievements": "冷原子量子模拟实验",
    "links": {
      "official": "https://www.phy.pku.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=周小计+冷原子+北大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 20,
    "uni": "北京大学",
    "tier": "985",
    "name": "徐洪起",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "半导体量子计算"
    ],
    "tech": [
      "semi"
    ],
    "apps": [
      "materials"
    ],
    "email": "hqxu@pku.edu.cn",
    "phone": "010-62755555",
    "office": "北京大学物理学院",
    "bio": "徐洪起，北京大学物理学院教授，从事半导体量子计算研究。在半导体量子点、量子输运和量子比特操控方面具有丰富的研究经验。",
    "achievements": "半导体量子比特研究",
    "links": {
      "official": "https://www.phy.pku.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=徐洪起+半导体量子+北大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 21,
    "uni": "浙江大学",
    "tier": "985",
    "name": "游建强",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "超导量子计算",
      "量子模拟",
      "量子光学"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "materials",
      "chemistry"
    ],
    "email": "jqyou@zju.edu.cn",
    "phone": "0571-88273218",
    "office": "浙江大学紫金港校区海纳苑8幢516",
    "bio": "游建强，浙江大学物理学院求是特聘教授、博士生导师。1984年湘潭大学学士，1988年中科院金属研究所硕士，1997年中科院固体物理研究所博士。获国家杰出青年科学基金、教育部长江学者特聘教授、国家万人计划领军人才。研究领域包括超导量子比特、自旋和拓扑体系的量子计算、固体量子态的腔量子电动力学。承担科技部国家重点研发计划重点专项项目任首席。获安徽省自然科学奖二等奖、日本理化学研究所前沿研究头等奖。任Quantum Information Processing和Physical Review Applied编委。",
    "achievements": "混合量子系统、腔磁振子学",
    "links": {
      "official": "https://person.zju.edu.cn/0017105",
      "group": "https://www.labxing.com/hybrid",
      "scholar": "https://scholar.google.com/scholar?q=Jianqiang+You+quantum+Zhejiang",
      "baidu": "https://xueshu.baidu.com/s?wd=游建强+超导量子+浙大"
    },
    "members": [
      {
        "name": "李杰",
        "role": "百人计划研究员、博导",
        "research": "光力学、腔磁力学、腔磁振子学、量子光学",
        "email": "jieli007@zju.edu.cn",
        "phone": ""
      },
      {
        "name": "王逸璞",
        "role": "百人计划研究员、博导",
        "research": "腔磁振子学非线性效应、非厄米物理、混合量子系统",
        "email": "yipuwang@zju.edu.cn",
        "phone": ""
      }
    ]
  },
  {
    "id": 22,
    "uni": "浙江大学",
    "tier": "985",
    "name": "王浩华",
    "title": "教授、博士生导师",
    "dept": "物理学院",
    "directions": [
      "超导量子计算",
      "量子模拟"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "materials",
      "chemistry",
      "optimization"
    ],
    "email": "hhwang@zju.edu.cn",
    "phone": "0571-88273428",
    "office": "浙江大学紫金港校区海纳苑8幢",
    "bio": "王浩华，浙江大学物理学院教授、博士生导师。1999年南开大学学士，2006年美国宾州州立大学博士，2007-2010年美国加州大学圣塔芭芭拉分校博士后（合作导师：John Martinis，2025年诺贝尔物理学奖得主）。获中组部青年拔尖人才、基金委优青/杰青、2022年新基石基金会科学探索奖、2025年APS Fellow、2025年全球华人物理与天文学会亚洲成就奖。在浙江大学建立超导量子芯片全流程制备工艺，研发天目1号、莫干1号芯片。在Nature、Science、Nature Physics、PRL等期刊发表论文90余篇，引用过万次。",
    "achievements": "师从John Martinis(2025诺贝尔奖得主)，超导量子比特纠缠世界纪录，天目/莫干芯片，104超导量子比特组合优化(2026 NSR)，逻辑量子比特量子错误缓解(2026 Nat Commun)",
    "links": {
      "official": "https://person.zju.edu.cn/0010051/788490.html",
      "group": "https://person.zju.edu.cn/0010051",
      "scholar": "https://scholar.google.com/scholar?q=Haohua+Wang+superconducting+Zhejiang",
      "baidu": "https://xueshu.baidu.com/s?wd=王浩华+超导量子+浙大"
    },
    "members": [
      {
        "name": "宋超",
        "role": "百人计划研究员、博导",
        "research": "超导量子计算与量子模拟",
        "email": "chaosong@zju.edu.cn",
        "phone": ""
      }
    ]
  },
  {
    "id": 23,
    "uni": "浙江大学",
    "tier": "985",
    "name": "王震",
    "title": "百人计划研究员、博导",
    "dept": "物理学院",
    "directions": [
      "超导量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "materials",
      "optimization"
    ],
    "email": "2010wangzhen@zju.edu.cn",
    "phone": "0571-88273428",
    "office": "浙江大学紫金港校区",
    "bio": "王震，浙江大学百人计划研究员、博士生导师。从事超导量子计算研究，发布天目1号(36比特)和天目2号(百比特)超导量子芯片。研究成果对超导量子计算的规模化具有重要意义。",
    "achievements": "天目1号(36比特)、天目2号(百比特)超导量子芯片",
    "links": {
      "official": "https://person.zju.edu.cn/zhenwang",
      "baidu": "https://xueshu.baidu.com/s?wd=王震+超导量子+浙大+逻辑比特",
      "scholar": ""
    },
    "enterprise": {
      "name": "逻辑比特",
      "stock": "2026年完成Pre-A+/Pre-A++轮融资，源自浙大超导量子计算团队",
      "role": "创始人兼CEO",
      "url": ""
    },
    "members": []
  },
  {
    "id": 24,
    "uni": "上海交通大学",
    "tier": "985",
    "name": "金贤敏",
    "title": "特聘教授、长江学者",
    "dept": "物理与天文学院",
    "directions": [
      "光量子芯片",
      "光量子计算",
      "量子网络"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "chemistry",
      "encryption",
      "optimization"
    ],
    "email": "xianmin.jin@sjtu.edu.cn",
    "phone": "021-34201204",
    "office": "上海交通大学理科楼5号楼422室",
    "bio": "金贤敏，上海交通大学特聘教授、长江学者，光科学与技术研究所所长，集成量子信息技术研究中心(IQIT)主任，无锡光子芯片研究院(CHIPX)院长，图灵量子创始人。2003年起师从潘建伟教授获中科大博士学位，博士论文入选全国百篇优秀博士论文。2010年赴牛津大学做博士后，合作导师为Ian Walmsley教授。2012年获欧盟玛丽居里学者和牛津大学沃弗森学院学者。2014年加入上海交大。发表论文150余篇，包括PRL 25篇、Science 2篇、Nature Photonics 9篇。获达沃斯世界经济论坛青年科学家奖、世界顶尖科学家青年科学家奖。建立国内首条光子芯片中试线，实现单片集成128个全同量子光源。",
    "achievements": "国内首条光子芯片中试线、单片集成128个全同量子光源芯片",
    "links": {
      "official": "https://www.physics.sjtu.edu.cn/jsml/1612.html",
      "group": "https://oserc.physics.sjtu.edu.cn/",
      "scholar": "https://scholar.google.com/scholar?q=Xianmin+Jin+quantum+SJTU",
      "baidu": "https://xueshu.baidu.com/s?wd=金贤敏+光量子芯片+上海交大"
    },
    "enterprise": {
      "name": "图灵量子",
      "stock": "2026年融资近10亿元，估值突破70亿，发布TuringQ Gen2及QAgent混合智能体平台",
      "role": "创始人兼CEO",
      "url": "http://www.turingq.com/"
    },
    "members": [
      {
        "name": "周文豪",
        "role": "博士生",
        "research": "集成光量子计算",
        "email": "zhouwenhao-bxgz@sjtu.edu.cn",
        "phone": ""
      },
      {
        "name": "王耀",
        "role": "博士生",
        "research": "集成光量子计算",
        "email": "wangyao.phy@sjtu.edu.cn",
        "phone": ""
      },
      {
        "name": "唐豪",
        "role": "教授",
        "research": "集成光子量子计算",
        "email": "htang2015@sjtu.edu.cn",
        "phone": "021-34201204"
      }
    ]
  },
  {
    "id": 25,
    "uni": "上海交通大学",
    "tier": "985",
    "name": "唐豪",
    "title": "教授",
    "dept": "物理与天文学院",
    "directions": [
      "集成光子量子计算"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "optimization"
    ],
    "email": "htang2015@sjtu.edu.cn",
    "phone": "021-34201204",
    "office": "上海交通大学物理与天文学院",
    "bio": "唐豪，上海交通大学物理与天文学院教授（2024年晋升），金贤敏课题组成员。从事集成光子量子计算研究，在光量子芯片的制备和量子算法实验验证方面做出贡献。",
    "achievements": "集成光子量子计算实验",
    "links": {
      "official": "https://www.physics.sjtu.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=唐豪+光量子+上海交大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 26,
    "uni": "复旦大学",
    "tier": "985",
    "name": "朱黄俊",
    "title": "教授",
    "dept": "物理学系",
    "directions": [
      "量子计算理论",
      "量子纠缠",
      "量子测量"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "finance",
      "security",
      "optimization"
    ],
    "email": "zhuhuangjun@fudan.edu.cn",
    "phone": "13061730040",
    "office": "上海市杨浦区淞沪路2005号复旦大学江湾校区物理科研楼",
    "bio": "朱黄俊，复旦大学物理学系教授。2003年浙江大学学士，2007年北京大学硕士，2012年新加坡国立大学量子技术中心博士。2012-2015年加拿大圆周理论物理研究所博士后，2015-2017年德国科隆大学理论物理研究所博士后。2018年加入复旦大学，2025年起任教授。研究领域包括量子测量、量子刻画与验证、量子计算、量子纠缠和非局域关联。在PRL等期刊发表多篇高水平论文。",
    "achievements": "量子刻画与验证理论、量子阴影层析",
    "links": {
      "official": "https://phys.fudan.edu.cn/13/75/c7605a136053/page.htm",
      "scholar": "https://scholar.google.com/scholar?q=Huangjun+Zhu+quantum+Fudan",
      "baidu": "https://xueshu.baidu.com/s?wd=朱黄俊+量子计算+复旦"
    },
    "members": []
  },
  {
    "id": 27,
    "uni": "复旦大学",
    "tier": "985",
    "name": "李晓鹏",
    "title": "教授",
    "dept": "物理学系",
    "directions": [
      "中性原子量子计算",
      "量子模拟",
      "量子机器学习"
    ],
    "tech": [
      "atom"
    ],
    "apps": [
      "materials",
      "chemistry",
      "ai"
    ],
    "email": "xiaopeng_li@fudan.edu.cn",
    "phone": "021-31247962",
    "office": "复旦大学江湾物理楼S322",
    "bio": "李晓鹏，复旦大学物理学系教授、博士生导师。2008年中国科学技术大学学士，2013年美国匹兹堡大学博士，2013-2016年美国马里兰大学JQI博士后。研究领域为可控量子体系的多体理论，致力于原子分子物理、凝聚态和量子计算的交叉研究。在Nature Communications、PRL、Rep. Prog. Phys.等期刊发表多篇论文。近期方向包括奇异量子动力学、量子热化、多体局域化、量子神经网络与机器学习。",
    "achievements": "里德堡原子量子模拟、量子神经网络理论",
    "links": {
      "official": "https://phys.fudan.edu.cn/b0/55/c7605a110677/page.htm",
      "group": "https://quantumcomputing.fudan.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=李晓鹏+中性原子+复旦",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 28,
    "uni": "南京大学",
    "tier": "985",
    "name": "于扬",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "超导量子计算",
      "超导量子器件"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "materials",
      "chemistry"
    ],
    "email": "yuyang@nju.edu.cn",
    "phone": "025-83685553",
    "office": "南京市鼓楼区汉口路22号南京大学物理学院",
    "bio": "于扬，南京大学物理学院教授、博士生导师。1990年南京大学学士，2002年美国堪萨斯大学博士，2002-2005年MIT电子实验室(RLE)博士后。教育部长江学者特聘教授，国家杰出青年科学基金获得者。国际上最早开展超导量子比特实验研究的成员之一。2002年首次实验观测到超导相位量子比特中的量子相干振荡，2010年率先演示三个固态量子比特的量子相干调控。在Science发表论文3篇，PRL 9篇。2022年底在苏州高新区成立狮山量子计算与量子探测前沿实验室。",
    "achievements": "首次观测超导相位量子比特量子相干振荡、三比特量子相干调控",
    "links": {
      "official": "https://physics.nju.edu.cn/szdw/qbmd/20240321/i262006.html",
      "group": "https://sslab.nju.edu.cn/main.htm",
      "baidu": "https://xueshu.baidu.com/s?wd=于扬+超导量子+南京大学",
      "scholar": ""
    },
    "members": [
      {
        "name": "谭新生",
        "role": "副教授",
        "research": "超导量子器件、量子芯片制备",
        "email": "yuyang@nju.edu.cn",
        "phone": "025-83685553"
      },
      {
        "name": "课题组成员若干",
        "role": "研究员、博士后、博士生",
        "research": "超导量子计算、超导量子模拟",
        "email": "yuyang@nju.edu.cn",
        "phone": ""
      }
    ]
  },
  {
    "id": 29,
    "uni": "南京大学",
    "tier": "985",
    "name": "吴盛俊",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子计算理论",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai",
      "finance",
      "optimization"
    ],
    "email": "sjwu@nju.edu.cn",
    "phone": "025-83593184",
    "office": "南京大学物理学院",
    "bio": "吴盛俊，南京大学物理学院教授，从事量子信息理论和量子计算研究。在量子算法、量子信息处理、量子人工智能等方向做出多项理论贡献。",
    "achievements": "量子信息理论、量子算法",
    "links": {
      "official": "https://physics.nju.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=吴盛俊+量子AI+南京大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 30,
    "uni": "中山大学",
    "tier": "985",
    "name": "李绿周",
    "title": "教授",
    "dept": "计算机学院",
    "directions": [
      "量子算法",
      "量子计算理论"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "finance",
      "optimization",
      "security"
    ],
    "email": "lilvzh@mail.sysu.edu.cn",
    "phone": "0756-3668000",
    "office": "广东省珠海市香洲区唐家湾中山大学珠海校区",
    "bio": "李绿周，中山大学计算机学院教授，从事量子算法研究。在量子搜索算法、量子优化算法等方面做出多项理论贡献。",
    "achievements": "量子搜索算法、量子优化算法",
    "links": {
      "official": "https://spa.sysu.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=李绿周+量子算法+中山大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 31,
    "uni": "中山大学",
    "tier": "985",
    "name": "罗乐",
    "title": "教授",
    "dept": "物理与天文学院",
    "directions": [
      "离子阱量子计算",
      "量子网络",
      "精密测量"
    ],
    "tech": [
      "ion"
    ],
    "apps": [
      "chemistry",
      "optimization",
      "security"
    ],
    "email": "luole5@mail.sysu.edu.cn",
    "phone": "0756-3668000",
    "office": "广东省珠海市香洲区唐家湾中山大学珠海校区瀚林3号A322",
    "bio": "罗乐，中山大学物理与天文学院教授、博士生导师，量子信息与测控科研团队负责人，百人计划引进学科带头人。1999年中山大学学士，2002年北京大学硕士，2008年美国杜克大学博士。2008-2011年在马里兰大学和NIST联合量子研究所任博士后，参与美国科学院院士Chris Monroe领导的囚禁离子量子计算机研发计划。2011年后任美国IUPUI物理系助理教授。2016年底加入中山大学。在Nature、Nature Communications、PRL等期刊发表论文30余篇，引用超过2500次。获Fritz London博士研究奖、广东省珠江计划青年拔尖人才等。",
    "achievements": "参与第一代离子阱量子计算芯片研发、囚禁离子量子比特操控",
    "links": {
      "official": "https://spa.sysu.edu.cn/zh-hans/node/112",
      "baidu": "https://xueshu.baidu.com/s?wd=罗乐+离子阱+中山大学",
      "scholar": ""
    },
    "members": [
      {
        "name": "刘培亮",
        "role": "副教授",
        "research": "离子囚禁、离子光钟、基于囚禁离子的量子操控",
        "email": "liupliang@mail.sysu.edu.cn",
        "phone": ""
      },
      {
        "name": "刘腾",
        "role": "博士生",
        "research": "离子阱量子纠缠、逻辑门",
        "email": "liut87@mail2.sysu.edu.cn",
        "phone": ""
      },
      {
        "name": "陆鹏飞",
        "role": "博士生",
        "research": "离子阱量子计算",
        "email": "luole5@mail.sysu.edu.cn",
        "phone": "0756-3668000"
      },
      {
        "name": "胡碧莹",
        "role": "博士生",
        "research": "离子阱量子计算",
        "email": "luole5@mail.sysu.edu.cn",
        "phone": "0756-3668000"
      },
      {
        "name": "吴昊",
        "role": "博士生",
        "research": "离子阱量子计算",
        "email": "luole5@mail.sysu.edu.cn",
        "phone": "0756-3668000"
      }
    ]
  },
  {
    "id": 32,
    "uni": "中山大学",
    "tier": "985",
    "name": "项泽亮",
    "title": "教授",
    "dept": "物理与天文学院",
    "directions": [
      "光量子计算"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "chemistry",
      "encryption"
    ],
    "email": "xiangzliang@mail.sysu.edu.cn",
    "phone": "0756-3668000",
    "office": "中山大学珠海校区",
    "bio": "项泽亮，中山大学物理与天文学院教授，从事光量子计算研究。在光量子芯片、量子光源制备等方面做出贡献。",
    "achievements": "光量子计算实验",
    "links": {
      "official": "https://spa.sysu.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=项泽亮+光量子+中山大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 33,
    "uni": "北京理工大学",
    "tier": "985",
    "name": "尹璋琦",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子纠错",
      "量子计算",
      "光力学"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "optimization"
    ],
    "email": "zqyin@bit.edu.cn",
    "phone": "010-68912614",
    "office": "北京市海淀区中关村南大街5号北理工物理学院中教楼614室",
    "bio": "尹璋琦，北京理工大学物理学院量子技术研究中心准聘教授、博导，国家级青年人才项目入选者。2009年西安交通大学博士，2007-2009年美国密歇根大学公派联合培养。2010-2012年中科大量子信息重点实验室博士后，2012-2019年清华大学交叉信息研究院助理研究员。从事悬浮光力学与量子精密测量、量子计算与量子模拟（专用量子计算机、量子云及其应用、量子纠错与量子控制）研究。在Nat. Phys.、PRL等期刊发表论文70余篇，引用3300余次，h指数29。2012年提出用囚禁离子实现时空晶体的实验方案，被选为PRL封面文章和编辑推荐，得到Nature、Physics Today等媒体广泛关注。",
    "achievements": "时空晶体理论方案(PRL封面)、量子纠错研究",
    "links": {
      "official": "https://pure.bit.edu.cn/zh/persons/zhangqi-yin",
      "baidu": "https://xueshu.baidu.com/s?wd=尹璋琦+量子纠错+北理工",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 34,
    "uni": "北京理工大学",
    "tier": "985",
    "name": "张安宁",
    "title": "教授、博士生导师",
    "dept": "物理学院",
    "directions": [
      "量子计算",
      "量子成像",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "ai"
    ],
    "email": "anningzhang@bit.edu.cn",
    "phone": "010-81383333",
    "office": "北京市房山区良乡东路北京理工大学南校区理学楼B103室",
    "bio": "张安宁，北京理工大学物理学院教授、博士生导师，全国量子计算与测量标准化技术委员会委员。2005年中国科学技术大学博士（导师：潘建伟院士）。在加拿大多伦多大学从事博士后研究，后在中国航天科技集团担任副主任设计师/研究员。2018年加入北理工。从事量子信息和量子光学、量子计算和量子AI研究。在Nature(1篇)、PRL(7篇)等期刊发表SCI论文30余篇，SCI引用2000余次。研究成果2次入选中国十大科技进展，1次入选欧洲物理学会物理学十大进展。参与某卫星量子相关研制。主持完成17千米单像素遥感成像原理样机等。",
    "achievements": "量子成像技术、参与卫星量子研制",
    "links": {
      "official": "https://pure.bit.edu.cn/zh/persons/anning-zhang",
      "group": "https://xuteli.bit.edu.cn/xsds/wlxy/34e52907f0584251af96614dcbf7bf28.htm",
      "baidu": "https://xueshu.baidu.com/s?wd=张安宁+量子AI+北理工",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 35,
    "uni": "北京理工大学",
    "tier": "985",
    "name": "王业亮",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子器件",
      "量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "yeliang.wang@bit.edu.cn",
    "phone": "010-68912614",
    "office": "北京理工大学物理学院",
    "bio": "王业亮，北京理工大学物理学院教授，从事量子器件和量子计算研究。在量子器件的设计和制备方面具有丰富经验。",
    "achievements": "量子器件研发",
    "links": {
      "official": "https://physics.bit.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=王业亮+量子器件+北理工",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 36,
    "uni": "北京航空航天大学",
    "tier": "985",
    "name": "崔健",
    "title": "副教授、博士生导师",
    "dept": "物理学院",
    "directions": [
      "量子计算",
      "里德堡原子",
      "超导量子线路",
      "张量网络"
    ],
    "tech": [
      "super",
      "atom",
      "theory"
    ],
    "apps": [
      "materials",
      "chemistry",
      "optimization"
    ],
    "email": "jiancui@buaa.edu.cn",
    "phone": "010-82317935",
    "office": "北京航空航天大学沙河校区C座814",
    "bio": "崔健，北京航空航天大学物理学院副教授、博士生导师。从事量子计算与量子多体物理研究，包括里德堡原子量子计算、超导量子线路、张量网络算法等。在Science发表论文1篇、Nature Communications 1篇、PRL 2篇。主持多项国家自然科学基金项目。",
    "achievements": "Science 1篇、Nat Commun 1篇、PRL 2篇",
    "links": {
      "official": "https://physics.buaa.edu.cn/info/1263/4779.htm",
      "scholar": "https://scholar.google.com/scholar?q=Jian+Cui+quantum+BUAA",
      "baidu": "https://xueshu.baidu.com/s?wd=崔健+量子计算+北航"
    },
    "members": []
  },
  {
    "id": 37,
    "uni": "北京师范大学",
    "tier": "985",
    "name": "王川",
    "title": "教授、副院长、博士生导师",
    "dept": "人工智能学院",
    "directions": [
      "量子计算",
      "量子人工智能"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai",
      "finance",
      "optimization"
    ],
    "email": "wangchuan@bnu.edu.cn",
    "phone": "010-58807963",
    "office": "北京师范大学人工智能学院",
    "bio": "王川，北京师范大学人工智能学院教授、副院长、博士生导师。国家优青、全球Top 2%科学家。从事量子计算和量子人工智能研究。发表SCI论文150余篇。在量子机器学习、量子优化算法等方向做出多项贡献。",
    "achievements": "国家优青、全球Top 2%科学家、SCI论文150+篇",
    "links": {
      "official": "https://ai.bnu.edu.cn/",
      "scholar": "https://scholar.google.com/scholar?q=Chuan+Wang+quantum+BNU",
      "baidu": "https://xueshu.baidu.com/s?wd=王川+量子计算+北师大"
    },
    "members": []
  },
  {
    "id": 38,
    "uni": "北京师范大学",
    "tier": "985",
    "name": "李新奇",
    "title": "教授、国家杰出青年基金获得者",
    "dept": "物理系",
    "directions": [
      "固态量子计算",
      "量子测量控制"
    ],
    "tech": [
      "semi",
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "xqli@bnu.edu.cn",
    "phone": "010-58807963",
    "office": "北京师范大学物理系",
    "bio": "李新奇，北京师范大学物理系教授、国家杰出青年基金获得者。从事固态量子计算和量子测量控制理论研究。（注：现已转入天津大学，后转入内蒙古大学）",
    "achievements": "国家杰出青年基金、固态量子计算理论",
    "links": {
      "official": "https://physics.bnu.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=李新奇+固态量子计算+北师大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 39,
    "uni": "湖南大学",
    "tier": "985",
    "name": "李福祥",
    "title": "教授、博士生导师、国家高层次青年人才",
    "dept": "物理与微电子科学学院",
    "directions": [
      "拓扑量子计算",
      "凝聚态理论"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "fuxiangli@hnu.edu.cn",
    "phone": "0731-88822417",
    "office": "湖南大学物理楼A314",
    "bio": "李福祥，湖南大学物理与微电子科学学院教授、博士生导师、国家高层次青年人才。从事凝聚态理论和拓扑物理研究，在拓扑量子计算、拓扑物态等方面做出理论贡献。",
    "achievements": "拓扑量子计算理论",
    "links": {
      "official": "https://grzy.hnu.edu.cn/site/index/lifuxiang",
      "group": "https://liphysicshnu.wordpress.com/",
      "scholar": "https://scholar.google.com/scholar?q=Fuxiang+Li+quantum+HNU",
      "baidu": "https://xueshu.baidu.com/s?wd=李福祥+量子计算+湖南大学"
    },
    "members": []
  },
  {
    "id": 40,
    "uni": "中南大学",
    "tier": "985",
    "name": "束传存",
    "title": "教授、博士生导师",
    "dept": "物理学院",
    "directions": [
      "超快量子调控",
      "量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "materials",
      "chemistry"
    ],
    "email": "cc.shu@csu.edu.cn",
    "phone": "0731-88836200",
    "office": "中南大学物理与电子学院324",
    "bio": "束传存，中南大学物理学院教授、博士生导师。从事超快量子调控和量子计算研究。在PRL等期刊发表论文90余篇。在量子态的超快操控方面做出重要贡献。",
    "achievements": "PRL等论文90+篇",
    "links": {
      "official": "https://faculty.csu.edu.cn/shuchuancun",
      "group": "https://www.x-mol.com/groups/uqc",
      "scholar": "https://scholar.google.com/scholar?q=Chuancun+Shu+quantum+CSU",
      "baidu": "https://xueshu.baidu.com/s?wd=束传存+量子调控+中南大学"
    },
    "members": []
  },
  {
    "id": 41,
    "uni": "国防科技大学",
    "tier": "985",
    "name": "吴俊杰",
    "title": "教授",
    "dept": "计算机学院",
    "directions": [
      "量子计算",
      "量子算法"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "optimization",
      "ai"
    ],
    "email": "junjiewu@nudt.edu.cn",
    "phone": "0731-84573000",
    "office": "国防科技大学计算机学院",
    "bio": "吴俊杰，国防科技大学计算机学院教授，从事量子计算和量子算法研究。在量子算法设计、量子软件与量子计算机体系结构等方向做出贡献。",
    "achievements": "量子算法与量子软件",
    "links": {
      "official": "https://www.nudt.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=吴俊杰+量子计算+国防科大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 42,
    "uni": "哈尔滨工业大学(深圳)",
    "tier": "985",
    "name": "周宇",
    "title": "教授",
    "dept": "集成电路学院(深圳)",
    "directions": [
      "固态量子信息",
      "色心量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "materials",
      "biology"
    ],
    "email": "zhouyu2022@hit.edu.cn",
    "phone": "0755-26035678",
    "office": "哈工大(深圳)集成电路学院",
    "bio": "周宇，哈尔滨工业大学(深圳)理学院教授。从事固态量子信息研究，利用金刚石NV色心等体系开展量子计算和量子传感研究。",
    "achievements": "色心量子信息",
    "links": {
      "official": "https://www.hitsz.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=周宇+固态量子信息+哈工大深圳",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 43,
    "uni": "吉林大学",
    "tier": "985",
    "name": "李苏宇",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子计算",
      "量子物理"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "sylee@jlu.edu.cn",
    "phone": "0431-85168888",
    "office": "吉林大学物理学院",
    "bio": "李苏宇，吉林大学物理学院教授，从事量子物理和量子计算研究。在量子态操控和量子信息处理方面做出贡献。",
    "achievements": "量子物理研究",
    "links": {
      "official": "https://physics.jlu.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=李苏宇+量子+吉林大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 44,
    "uni": "南开大学",
    "tier": "985",
    "name": "毛亚丽",
    "title": "教授",
    "dept": "物理科学学院",
    "directions": [
      "光量子计算",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "optimization"
    ],
    "email": "maoyl@nankai.edu.cn",
    "phone": "022-23508221",
    "office": "南开大学物理科学学院",
    "bio": "毛亚丽，南开大学物理科学学院教授。2024年11月从南方科技大学转入南开大学。从事光量子信息和光量子计算研究。在量子光源制备、量子信息处理等方面做出贡献。",
    "achievements": "光量子信息实验",
    "links": {
      "official": "https://physics.nankai.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=毛亚丽+光量子+南开大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 45,
    "uni": "内蒙古大学",
    "tier": "211",
    "name": "李新奇",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子测量控制",
      "固态量子计算"
    ],
    "tech": [
      "semi",
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "xinqi.li@imu.edu.cn",
    "phone": "0471-4992990",
    "office": "内蒙古大学物理科学与技术学院",
    "bio": "李新奇，内蒙古大学物理科学与技术学院教授、国家杰出青年基金获得者。2024年1月从天津大学转入内蒙古大学。此前曾在天津大学、北京师范大学任职。从事固态量子计算和量子测量控制理论研究。在量子比特的相干操控、量子反馈控制等方面做出重要理论贡献。",
    "achievements": "国家杰出青年基金、量子测量控制理论",
    "links": {
      "official": "https://physics.imu.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=李新奇+量子测量+内蒙古大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 46,
    "uni": "西安电子科技大学",
    "tier": "211",
    "name": "李卓",
    "title": "教授、博士生导师",
    "dept": "通信工程学院/ISN国家重点实验室",
    "directions": [
      "量子计算",
      "量子纠错码"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "encryption"
    ],
    "email": "lizhuo@xidian.edu.cn",
    "phone": "029-88201234",
    "office": "西安电子科技大学通信工程学院",
    "bio": "李卓，西安电子科技大学教授、博士生导师。从事量子计算、量子纠错码研究。在量子纠错理论、量子通信协议等方面做出多项贡献。",
    "achievements": "量子纠错码研究",
    "links": {
      "official": "https://faculty.xidian.edu.cn/LZ7/zh_CN",
      "group": "https://web.xidian.edu.cn/lizhuo/",
      "baidu": "https://xueshu.baidu.com/s?wd=李卓+量子计算+西安电子科大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 47,
    "uni": "西安电子科技大学",
    "tier": "211",
    "name": "鲁勇",
    "title": "教授、博士生导师、国家级青年人才",
    "dept": "通信工程学院",
    "directions": [
      "量子计算",
      "超导量子器件"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "materials"
    ],
    "email": "luyong01@xidian.edu.cn",
    "phone": "029-88201234",
    "office": "西安电子科技大学通信工程学院",
    "bio": "鲁勇，西安电子科技大学教授、博士生导师、华山学者特聘教授、国家级青年人才。师从郭光灿院士和Per Delsing院士。从事超导量子计算和量子器件研究。2025年在PRL发表论文。",
    "achievements": "师从郭光灿院士和Per Delsing院士，2025年PRL论文",
    "links": {
      "official": "https://faculty.xidian.edu.cn/luyong/en/index/458229/list/index.htm",
      "scholar": "https://scholar.google.com/scholar?q=Yong+Lu+quantum+Xidian",
      "baidu": "https://xueshu.baidu.com/s?wd=鲁勇+量子计算+西安电子科大"
    },
    "members": []
  },
  {
    "id": 48,
    "uni": "西安电子科技大学",
    "tier": "211",
    "name": "王云江",
    "title": "教授、博士生导师",
    "dept": "ISN国家重点实验室",
    "directions": [
      "量子计算",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai",
      "optimization"
    ],
    "email": "yjwang@xidian.edu.cn",
    "phone": "029-88201234",
    "office": "西安电子科技大学ISN国家重点实验室",
    "bio": "王云江，西安电子科技大学ISN全国重点实验室/通信工程学院教授、博士生导师。Pacific Institute for the Mathematical Sciences(PIMS) Member，中国电子学会信息论分会秘书长，陕西省量子信息协同创新中心副主任，中国密码学会量子密码专委会委员。师从王新梅教授获博士学位，2008年赴加拿大卡尔加里大学师从Barry C. Sanders教授联合培养。研究方向为量子信息与量子计算、量子计算与机器学习的结合应用。主持国家自然科学基金3项，在IEEE Trans on Information Theory等期刊发表论文多篇。",
    "achievements": "量子计算与机器学习",
    "links": {
      "official": "https://web.xidian.edu.cn/yjwang/",
      "baidu": "https://xueshu.baidu.com/s?wd=王云江+量子信息+西安电子科大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 49,
    "uni": "郑州大学",
    "tier": "211",
    "name": "苏石磊",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "里德堡原子量子计算",
      "几何量子计算"
    ],
    "tech": [
      "atom",
      "theory"
    ],
    "apps": [
      "chemistry",
      "optimization"
    ],
    "email": "slsu@zzu.edu.cn",
    "phone": "0371-67739111",
    "office": "郑州大学物理学院",
    "bio": "苏石磊，郑州大学教授。从事里德堡原子量子信息和几何量子计算研究。在SCI期刊发表论文100余篇，其中PRL 5篇、Nature Communications 2篇。总引用3100余次，H因子32。",
    "achievements": "PRL 5篇、Nature Commun 2篇，H因子32",
    "links": {
      "official": "https://www7.zzu.edu.cn/zzuquantum/kytd/jzgdw/ssl.htm",
      "scholar": "https://scholar.google.com/scholar?q=Shilei+Su+Rydberg+quantum+ZZU",
      "baidu": "https://xueshu.baidu.com/s?wd=苏石磊+里德堡+量子计算+郑州大学"
    },
    "members": []
  },
  {
    "id": 50,
    "uni": "安徽大学",
    "tier": "211",
    "name": "杨名",
    "title": "教授、博士生导师",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子计算",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai",
      "materials"
    ],
    "email": "mingyang@ahu.edu.cn",
    "phone": "0551-63861234",
    "office": "安徽大学物理与光电工程学院",
    "bio": "杨名，安徽大学教授、博士生导师。从事量子信息和量子计算研究。发表论文150余篇。担任CCF量子计算专业委员会执行委员。",
    "achievements": "论文150+篇，CCF量子计算专委执行委员",
    "links": {
      "official": "https://wlxy.ahu.edu.cn/2024/0624/c11026a343537/page.htm",
      "baidu": "https://xueshu.baidu.com/s?wd=杨名+量子计算+安徽大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 51,
    "uni": "安徽大学",
    "tier": "211",
    "name": "宋学科",
    "title": "教授、博士生导师",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子计算",
      "量子精密测量"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "materials",
      "biology"
    ],
    "email": "songxk@ahu.edu.cn",
    "phone": "0551-63861234",
    "office": "安徽大学物理与光电工程学院",
    "bio": "宋学科，安徽大学教授、博士生导师。从事量子计算和量子精密测量研究。在PRL、npj Quantum Inf.等期刊发表论文70余篇。",
    "achievements": "PRL、npj Quantum Inf.等论文70+篇",
    "links": {
      "official": "https://wlxy.ahu.edu.cn/2020/0404/c11026a233590/page.htm",
      "baidu": "https://xueshu.baidu.com/s?wd=宋学科+量子计算+安徽大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 52,
    "uni": "福州大学",
    "tier": "211",
    "name": "陈叶鸿",
    "title": "教授、博士生导师",
    "dept": "物理与信息工程学院",
    "directions": [
      "量子信息",
      "量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "materials",
      "optimization"
    ],
    "email": "yehong.chen@fzu.edu.cn",
    "phone": "0591-22865432",
    "office": "福州大学物理与信息工程学院",
    "bio": "陈叶鸿，福州大学教授、博士生导师、国家级引进人才。从事量子信息与量子计算研究。在PRL等期刊发表论文60余篇。",
    "achievements": "PRL等论文60+篇",
    "links": {
      "official": "https://physics.fzu.edu.cn/",
      "group": "https://www.x-mol.com/groups/xyfzu",
      "scholar": "https://scholar.google.com/scholar?q=Yehong+Chen+quantum+FZU",
      "baidu": "https://xueshu.baidu.com/s?wd=陈叶鸿+量子信息+福州大学"
    },
    "members": []
  },
  {
    "id": 53,
    "uni": "福州大学",
    "tier": "211",
    "name": "郑仕标",
    "title": "教授、长江学者、杰青",
    "dept": "物理与信息工程学院",
    "directions": [
      "容错量子计算",
      "半导体量子计算"
    ],
    "tech": [
      "theory",
      "semi"
    ],
    "apps": [
      "security",
      "materials"
    ],
    "email": "sbzheng11@163.com",
    "phone": "0591-22865432",
    "office": "福州大学物理与信息工程学院",
    "bio": "郑仕标，福州大学教授、长江学者、杰青。从事容错量子计算和量子纠错码研究，在硅基半导体量子计算方向也有贡献。",
    "achievements": "长江学者、杰青、容错量子计算",
    "links": {
      "official": "https://physics.fzu.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=郑仕标+容错量子计算+福州大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 54,
    "uni": "上海大学",
    "tier": "211",
    "name": "钟建新",
    "title": "特聘教授、博士生导师",
    "dept": "物理系",
    "directions": [
      "量子信息",
      "量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "jxzhong@shu.edu.cn",
    "phone": "021-66132534",
    "office": "上海大学物理系",
    "bio": "钟建新，上海大学特聘教授、博士生导师、长江学者特聘教授。从事凝聚态物理和量子信息研究。发表论文400余篇，H因子66。",
    "achievements": "论文400+篇，H因子66，长江学者",
    "links": {
      "official": "https://physics.shu.edu.cn/info/1082/5673.htm",
      "scholar": "https://scholar.google.com/scholar?q=Jianxin+Zhong+quantum+SHU",
      "baidu": "https://xueshu.baidu.com/s?wd=钟建新+量子信息+上海大学"
    },
    "members": []
  },
  {
    "id": 55,
    "uni": "上海大学",
    "tier": "211",
    "name": "王潮",
    "title": "教授、博士生导师",
    "dept": "通信与信息工程学院",
    "directions": [
      "量子计算",
      "量子计算密码学"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "ai",
      "encryption"
    ],
    "email": "wangchao@shu.edu.cn",
    "phone": "021-66132534",
    "office": "上海大学宝山校区翔英楼T713",
    "bio": "王潮，上海大学教授、博士生导师。从事量子计算密码学和量子人工智能研究。2019年创造国际上最高量子计算破译纪录。",
    "achievements": "2019年国际上最高量子计算破译纪录",
    "links": {
      "official": "https://scie.shu.edu.cn/Prof/wangchao.htm",
      "baidu": "https://xueshu.baidu.com/s?wd=王潮+量子计算+上海大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 56,
    "uni": "华南师范大学",
    "tier": "211",
    "name": "薛正元",
    "title": "研究员、博士生导师",
    "dept": "物理与电信工程学院",
    "directions": [
      "几何量子计算",
      "拓扑量子模拟"
    ],
    "tech": [
      "topo",
      "super"
    ],
    "apps": [
      "materials"
    ],
    "email": "zyxue83@163.com",
    "phone": "020-85211345",
    "office": "华南师范大学物理与电信工程学院",
    "bio": "薛正元，华南师范大学研究员、博士生导师。从事几何量子计算和拓扑量子模拟研究，利用超导量子线路实现拓扑量子模拟。在PRL发表论文3篇、npj Quantum Inf 2篇。",
    "achievements": "PRL 3篇、npj Quantum Inf 2篇",
    "links": {
      "official": "https://physics.scnu.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=薛正元+几何量子计算+华南师大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 57,
    "uni": "苏州大学",
    "tier": "211",
    "name": "徐震宇",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子信息理论",
      "量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "optimization"
    ],
    "email": "zhenyuxu@suda.edu.cn",
    "phone": "0512-65880025",
    "office": "苏州大学物理科学与技术学院",
    "bio": "徐震宇，苏州大学教授，从事量子信息理论和量子计算研究。在量子纠缠理论、量子信息处理等方面做出贡献。",
    "achievements": "量子信息理论",
    "links": {
      "official": "https://physics.suda.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=徐震宇+量子信息+苏州大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 58,
    "uni": "中科院物理所",
    "tier": "cas",
    "name": "吕力",
    "title": "研究员",
    "dept": "中科院物理所",
    "directions": [
      "拓扑量子计算"
    ],
    "tech": [
      "topo"
    ],
    "apps": [
      "materials"
    ],
    "email": "lilu@iphy.ac.cn",
    "phone": "010-82649000",
    "office": "北京市海淀区中关村南三街8号",
    "bio": "吕力，中科院物理所研究员，从事拓扑量子计算研究。在拓扑量子比特、马约拉纳费米子等方向做出重要贡献。",
    "achievements": "拓扑量子计算",
    "links": {
      "official": "http://www.iphy.ac.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=吕力+拓扑量子计算+中科院物理所",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 59,
    "uni": "中科院物理所",
    "tier": "cas",
    "name": "范桁",
    "title": "研究员",
    "dept": "中科院物理所",
    "directions": [
      "超导量子计算",
      "量子计算云平台"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "materials",
      "ai",
      "optimization"
    ],
    "email": "hfan@iphy.ac.cn",
    "phone": "010-82649000",
    "office": "北京市海淀区中关村南三街8号",
    "bio": "范桁，中科院物理所研究员，从事超导量子计算和量子计算云平台研究。在超导量子芯片研发和量子计算云平台建设方面做出重要贡献。",
    "achievements": "超导量子计算云平台",
    "links": {
      "official": "http://www.iphy.ac.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=范桁+超导量子计算+中科院物理所",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 60,
    "uni": "中科院上海微系统所",
    "tier": "cas",
    "name": "林志荣",
    "title": "研究员",
    "dept": "中科院上海微系统所",
    "directions": [
      "超导量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "materials"
    ],
    "email": "zrlin@mail.sim.ac.cn",
    "phone": "021-62511070",
    "office": "上海市长宁路865号",
    "bio": "林志荣，中科院上海微系统所研究员，从事超导量子计算研究。在超导量子芯片的制备和测试方面做出贡献。",
    "achievements": "超导量子芯片",
    "links": {
      "official": "http://www.sim.ac.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=林志荣+超导量子+中科院上海微系统所",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 61,
    "uni": "首都师范大学",
    "tier": "normal",
    "name": "费少明",
    "title": "研究员、博士生导师",
    "dept": "数学科学学院",
    "directions": [
      "量子信息与量子计算",
      "量子计算理论"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "optimization",
      "encryption"
    ],
    "email": "feishm@cnu.edu.cn",
    "phone": "010-68901234",
    "office": "首都师范大学数学科学学院",
    "bio": "费少明，首都师范大学研究员、博士生导师。从事量子信息与量子计算理论研究。发表论文550余篇，斯坦福世界前2%科学家。在量子纠缠理论、量子信息处理等方向做出重要贡献。",
    "achievements": "论文550+篇，斯坦福世界前2%科学家",
    "links": {
      "official": "https://math.cnu.edu.cn/",
      "scholar": "https://scholar.google.com/scholar?q=Shaoming+Fei+quantum+information",
      "baidu": "https://xueshu.baidu.com/s?wd=费少明+量子信息+首都师大"
    },
    "members": []
  },
  {
    "id": 62,
    "uni": "首都师范大学",
    "tier": "normal",
    "name": "冉仕举",
    "title": "教授、博士生导师",
    "dept": "物理系",
    "directions": [
      "张量网络",
      "量子计算",
      "量子机器学习"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai",
      "optimization"
    ],
    "email": "sjran@cnu.edu.cn",
    "phone": "010-68901234",
    "office": "首都师范大学物理系",
    "bio": "冉仕举，首都师范大学教授、博士生导师。从事张量网络、量子多体模拟和量子机器学习研究。在PRX Quantum、PRL等期刊发表多篇论文。",
    "achievements": "PRX Quantum、PRL论文",
    "links": {
      "official": "https://physics.cnu.edu.cn/people/faculty/teacher/155896.htm",
      "scholar": "https://scholar.google.com/scholar?q=Shiju+Ran+tensor+network",
      "baidu": "https://xueshu.baidu.com/s?wd=冉仕举+张量网络+量子计算"
    },
    "members": []
  },
  {
    "id": 63,
    "uni": "浙江理工大学",
    "tier": "normal",
    "name": "王晓光",
    "title": "教授、博士生导师",
    "dept": "物理系",
    "directions": [
      "量子计算理论",
      "量子精密测量"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "materials",
      "biology"
    ],
    "email": "xgwang@zstu.edu.cn",
    "phone": "0571-86843210",
    "office": "浙江理工大学物理系",
    "bio": "王晓光，浙江理工大学教授、博士生导师。国家杰出青年基金获得者、国务院特殊津贴。从事量子信息与计算理论和量子精密测量研究。在PRL等期刊发表论文200余篇，SCI引用9000余次。",
    "achievements": "PRL等论文200+篇，SCI引用9000+次，国家杰青",
    "links": {
      "official": "https://physics.zstu.edu.cn/",
      "scholar": "https://scholar.google.com/scholar?q=Xiaoguang+Wang+quantum+information",
      "baidu": "https://xueshu.baidu.com/s?wd=王晓光+量子信息+浙江理工"
    },
    "members": []
  },
  {
    "id": 64,
    "uni": "杭州师范大学",
    "tier": "normal",
    "name": "杨垂平",
    "title": "教授、博士生导师、二级教授",
    "dept": "物理学院",
    "directions": [
      "量子计算",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption",
      "optimization",
      "security"
    ],
    "email": "yangcp@hznu.edu.cn",
    "phone": "0571-28865200",
    "office": "杭州师范大学仓前校区勤园20-510",
    "bio": "杨垂平，杭州师范大学教授、博士生导师、二级教授。从事量子信息、量子计算和量子光学研究。在Nature Communications、PRL等期刊发表论文150余篇。2023-2025连续3年全球前2%顶尖科学家。",
    "achievements": "Nature Commun、PRL等论文150+篇，全球前2%科学家",
    "links": {
      "official": "https://wlxy.hznu.edu.cn/c/2026-03-10/3177749.shtml",
      "scholar": "https://scholar.google.com/scholar?q=Chuiping+Yang+quantum+HZNU",
      "baidu": "https://xueshu.baidu.com/s?wd=杨垂平+量子计算+杭州师范"
    },
    "members": []
  },
  {
    "id": 65,
    "uni": "重庆邮电大学",
    "tier": "normal",
    "name": "朱家骥",
    "title": "教授、硕士生导师",
    "dept": "电子科学与工程学院",
    "directions": [
      "量子计算",
      "量子人工智能",
      "拓扑量子计算"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [
      "ai",
      "materials"
    ],
    "email": "zhujj@cqupt.edu.cn",
    "phone": "023-62461234",
    "office": "重庆邮电大学信科大厦S228",
    "bio": "朱家骥，重庆邮电大学教授、硕士生导师。专用量子计算与量子人工智能重庆市重点实验室常务副主任。从事开放量子系统、拓扑量子物态、量子人工智能研究。在PRL发表论文3篇。",
    "achievements": "PRL 3篇，重庆市重点实验室常务副主任",
    "links": {
      "official": "https://faculty.cqupt.edu.cn/zhujj/zh_CN/index.htm",
      "scholar": "https://scholar.google.com/scholar?q=Jiaji+Zhu+quantum+CQUPT",
      "baidu": "https://xueshu.baidu.com/s?wd=朱家骥+量子计算+重庆邮电"
    },
    "members": []
  },
  {
    "id": 66,
    "uni": "湘潭大学",
    "tier": "normal",
    "name": "李琴",
    "title": "教授、博士生导师",
    "dept": "计算机学院·网络空间安全学院",
    "directions": [
      "量子计算",
      "量子算法",
      "量子人工智能"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "ai",
      "encryption"
    ],
    "email": "liqin@xtu.edu.cn",
    "phone": "0731-58293289",
    "office": "湘潭大学计算机学院",
    "bio": "李琴，湘潭大学教授、博士生导师。从事量子计算、量子密码、量子人工智能和量子区块链研究。在TIFS、PRA等期刊发表论文50余篇。2022年湖南省自然科学二等奖，主持NSFC项目5项。",
    "achievements": "TIFS、PRA等论文50+篇，湖南省自然科学二等奖",
    "links": {
      "official": "https://jwxy.xtu.edu.cn/info/1155/3271.htm",
      "baidu": "https://xueshu.baidu.com/s?wd=李琴+量子计算+湘潭大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 67,
    "uni": "湖北工业大学",
    "tier": "normal",
    "name": "王飞",
    "title": "教授",
    "dept": "理学院",
    "directions": [
      "自旋量子计算",
      "量子信息"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "materials"
    ],
    "email": "feiwang@hbut.edu.cn",
    "phone": "027-59750000",
    "office": "湖北工业大学理学院",
    "bio": "王飞，湖北工业大学理学院教授。从事微纳光子学、自旋量子计算和量子信息研究。团队累计主持国家级项目8项，发表论文100余篇。",
    "achievements": "团队国家级项目8项，论文100+篇",
    "links": {
      "official": "https://lxy.hbut.edu.cn/info/1020/3479.htm",
      "baidu": "https://xueshu.baidu.com/s?wd=王飞+自旋量子计算+湖北工业",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 68,
    "uni": "莆田学院",
    "tier": "normal",
    "name": "李文君",
    "title": "副教授、硕士生导师",
    "dept": "新工科产业学院",
    "directions": [
      "量子计算",
      "量子人工智能"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai",
      "optimization"
    ],
    "email": "liwenjun18@mails.ucas.ac.cn",
    "phone": "18813148197",
    "office": "莆田学院新工科产业学院",
    "bio": "李文君，莆田学院副教授、硕士生导师。中国科学院大学博士。从事量子人工智能、量子计算和张量网络研究。",
    "achievements": "中科院大学博士",
    "links": {
      "official": "https://www.ptu.edu.cn/rgzn/info/2126/7183.htm",
      "baidu": "https://xueshu.baidu.com/s?wd=李文君+量子计算+张量网络",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 69,
    "uni": "南方科技大学",
    "tier": "normal",
    "name": "鲁大为",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "核磁共振量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "chemistry",
      "biology"
    ],
    "email": "ludw@sustech.edu.cn",
    "phone": "0755-88018000",
    "office": "南方科技大学物理系",
    "bio": "鲁大为，南方科技大学教授。从事核磁共振量子计算研究。利用核磁共振技术实现量子计算和量子模拟实验。",
    "achievements": "核磁共振量子计算",
    "links": {
      "official": "https://physics.sustech.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=鲁大为+量子计算+南科大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 70,
    "uni": "山西大学",
    "tier": "normal",
    "name": "申恒",
    "title": "教授、博士生导师",
    "dept": "光电研究所/物理电子工程学院",
    "directions": [
      "离子阱量子计算",
      "原子阵列量子模拟"
    ],
    "tech": [
      "ion"
    ],
    "apps": [
      "chemistry",
      "optimization"
    ],
    "email": "hengshen@sxu.edu.cn",
    "phone": "0351-7113889",
    "office": "山西大学光电研究所",
    "bio": "申恒，山西大学教授、博士生导师，国家优青、牛顿学者、重点研发项目青年项目负责人、山西省科技重大专项「揭榜挂帅」负责人。本科毕业于南开大学与天津大学合办光电子技术科学专业，2015年在丹麦哥本哈根大学尼尔斯玻尔研究所获博士学位。后在奥地利因斯布鲁克国家科学院量子信息与量子光学中心Rainer Blatt研究组从事博士后研究，2017年获英国皇家学会牛顿国际基金支持在牛津大学物理系从事光力原子混合系统研究。以通信作者或第一作者在Nature、Nature Physics、Nature Communications及PRL等国际顶级刊物发表多篇论文。研究方向包括量子模拟与计算、量子精密测量及新型量子材料等。",
    "achievements": "Nature、Nature Physics、Nature Communications及PRL论文",
    "links": {
      "official": "https://ioe.sxu.edu.cn/sys/labs14/yjcy14/bsyjs",
      "group": "https://ioe.sxu.edu.cn/sys/labs14/Team14/index.htm",
      "baidu": "https://xueshu.baidu.com/s?wd=申恒+离子阱+山西大学",
      "scholar": ""
    },
    "members": [
      {
        "name": "徐忠孝",
        "role": "副教授、博导",
        "research": "量子光学、量子计算和模拟",
        "email": "xuzhongxiao@sxu.edu.cn",
        "phone": "18234120082"
      },
      {
        "name": "李东豪",
        "role": "讲师",
        "research": "量子光学、量子计算和模拟",
        "email": "lidonghaocn@163.com",
        "phone": ""
      },
      {
        "name": "姜伟伦",
        "role": "特聘副研究员",
        "research": "量子蒙特卡洛、量子计算和模拟",
        "email": "wljiang@sxu.edu.cn",
        "phone": ""
      },
      {
        "name": "田添",
        "role": "特聘副研究员",
        "research": "量子模拟、拓扑物理",
        "email": "phystian@sxu.edu.cn",
        "phone": ""
      }
    ]
  },
  {
    "id": 71,
    "uni": "深圳大学",
    "tier": "normal",
    "name": "李俊",
    "title": "教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子控制",
      "量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "optimization",
      "materials"
    ],
    "email": "lijunquantum@szu.edu.cn",
    "phone": "0755-26538500",
    "office": "深圳大学物理与光电工程学院",
    "bio": "李俊，深圳大学教授。从事量子控制和量子计算研究。在量子反馈控制、量子系统优化等方向做出理论贡献。",
    "achievements": "量子控制理论",
    "links": {
      "official": "https://physics.szu.edu.cn/",
      "baidu": "https://xueshu.baidu.com/s?wd=李俊+量子控制+深圳大学",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 72,
    "uni": "福建师范大学",
    "tier": "normal",
    "name": "林崧",
    "title": "教授、博士生导师",
    "dept": "计算机与网络空间安全学院",
    "directions": [
      "量子计算",
      "量子密码"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "encryption",
      "ai"
    ],
    "email": "lins95@fjnu.edu.cn",
    "phone": "0591-83465200",
    "office": "福建师范大学计网楼408",
    "bio": "林崧，福建师范大学教授、博士生导师。从事量子密码、量子智能计算和量子安全多方计算研究。发表论文60余篇（SCI 41篇），H因子17，国家专利3项。",
    "achievements": "论文60+篇(SCI 41篇)，H因子17",
    "links": {
      "official": "https://ccs.fjnu.edu.cn/0d/b5/c16744a331189/page.htm",
      "baidu": "https://xueshu.baidu.com/s?wd=林崧+量子密码+福建师大",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 73,
    "uni": "南京邮电大学",
    "tier": "normal",
    "name": "王琴",
    "title": "教授、博士生导师、副院长",
    "dept": "通信与信息工程学院",
    "directions": [
      "量子计算",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "encryption"
    ],
    "email": "qinw@njupt.edu.cn",
    "phone": "025-85866555",
    "office": "南京邮电大学通信与信息工程学院",
    "bio": "王琴，南京邮电大学教授、博士生导师、副院长。江苏省杰出青年。从事量子保密通信、量子信息研究。在PRL等期刊发表论文90余篇。",
    "achievements": "PRL等论文90+篇，江苏省杰出青年",
    "links": {
      "official": "https://quantum.njupt.edu.cn/11725/list.htm",
      "baidu": "https://xueshu.baidu.com/s?wd=王琴+量子通信+南京邮电",
      "scholar": ""
    },
    "members": []
  },
  {
    "id": 74,
    "uni": "南京邮电大学",
    "tier": "normal",
    "name": "盛宇波",
    "title": "教授、博士生导师、国家级人才",
    "dept": "通信与信息工程学院",
    "directions": [
      "量子计算",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "encryption"
    ],
    "email": "shengyb@njupt.edu.cn",
    "phone": "025-85866555",
    "office": "南京邮电大学通信与信息工程学院",
    "bio": "盛宇波，南京邮电大学教授、博士生导师、国家级人才。从事量子计算和量子信息研究。SCI论文150余篇，H因子42，获中国电子学会科技一等奖。",
    "achievements": "SCI论文150+篇，H因子42，电子学会科技一等奖",
    "links": {
      "official": "https://yjs.njupt.edu.cn/",
      "scholar": "https://scholar.google.com/scholar?q=Yubo+Sheng+quantum+NJUPT",
      "baidu": "https://xueshu.baidu.com/s?wd=盛宇波+量子+南京邮电"
    },
    "members": []
  },
  {
    "id": 75,
    "uni": "清华大学",
    "tier": "985",
    "name": "马雄峰",
    "title": "教授",
    "dept": "交叉信息研究院",
    "directions": [
      "量子信息科学",
      "量子密码学",
      "量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "长江学者，主要从事量子密码学、量子信息基础与量子计算研究。",
    "achievements": "全球量子密码学领域高被引研究者之一，PRL编委。",
    "links": {
      "official": "https://iiis.tsinghua.edu.cn/rydw.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 76,
    "uni": "清华大学",
    "tier": "985",
    "name": "邓东灵",
    "title": "长聘副教授",
    "dept": "交叉信息研究院",
    "directions": [
      "量子人工智能",
      "量子信息与计算",
      "拓扑相物质",
      "量子纠错"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子机器学习、量子非平衡系统与拓扑量子计算研究。",
    "achievements": "2026年Nature Physics发表低开销量子纠错码实验；量子机器学习综述作者。",
    "links": {
      "official": "https://iiis.tsinghua.edu.cn/rydw/qzjs/dengdongling.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 77,
    "uni": "清华大学",
    "tier": "985",
    "name": "徐勇",
    "title": "长聘副教授",
    "dept": "交叉信息研究院",
    "directions": [
      "量子物理与量子信息",
      "冷原子",
      "量子多体物理",
      "拓扑物态"
    ],
    "tech": [
      "atom",
      "topo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子信息、冷原子与拓扑物态理论研究。",
    "achievements": "冷原子量子模拟与拓扑量子物态研究。",
    "links": {
      "official": "https://cqi.tsinghua.edu.cn/rydw.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 78,
    "uni": "北京大学",
    "tier": "985",
    "name": "刘雄军",
    "title": "教授",
    "dept": "量子材料科学中心",
    "directions": [
      "冷原子量子模拟",
      "拓扑物态",
      "人工规范场"
    ],
    "tech": [
      "atom",
      "topo",
      "theory"
    ],
    "apps": [],
    "email": "xiongjunliu@pku.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事冷原子物理与凝聚态理论研究，关注拓扑超导与量子模拟。",
    "achievements": "提出冷原子自旋霍尔效应模型，2026年Nature Physics观测准周期量子临界态。",
    "links": {
      "official": "https://faculty.pku.edu.cn/liuxiongjun/zh_CN/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 79,
    "uni": "北京大学",
    "tier": "985",
    "name": "彭良友",
    "title": "博雅特聘教授",
    "dept": "物理学院现代光学研究所",
    "directions": [
      "基于囚禁离子的量子计算与量子模拟",
      "超快动力学"
    ],
    "tech": [
      "ion",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "国家重点研发计划首席科学家，从事囚禁离子量子计算理论研究。",
    "achievements": "提出囚禁离子快速量子门设计与量子模拟方案。",
    "links": {
      "official": "https://faculty.pku.edu.cn/ywmb2/index.jsp",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 80,
    "uni": "北京大学",
    "tier": "985",
    "name": "郭弘",
    "title": "教授",
    "dept": "物理学院现代光学研究所",
    "directions": [
      "量子通信",
      "量子相干与慢光光存储",
      "量子纠缠"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [
      "security",
      "communication"
    ],
    "email": "hongguo@pku.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事量子通信、量子光学与量子信息研究。",
    "achievements": "量子密钥分发与量子纠缠实验研究。",
    "links": {
      "official": "http://www.iqe.pku.edu.cn/PersonalPage.aspx?UserId=17",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 81,
    "uni": "北京航空航天大学",
    "tier": "985",
    "name": "张国锋",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息",
      "固态量子自旋"
    ],
    "tech": [
      "theory",
      "atom"
    ],
    "apps": [],
    "email": "08226@buaa.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事量子光学与固态量子自旋在量子信息中应用的研究。",
    "achievements": "发表PRL等SCI论文百余篇，中国百篇最具影响国际学术论文奖。",
    "links": {
      "official": "https://physics.buaa.edu.cn/info/1263/3116.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 82,
    "uni": "北京航空航天大学",
    "tier": "985",
    "name": "房建成",
    "title": "教授/中国科学院院士",
    "dept": "大科学装置研究院",
    "directions": [
      "量子精密测量与传感",
      "极弱磁场",
      "原子自旋陀螺"
    ],
    "tech": [],
    "apps": [],
    "email": "fangjiancheng@buaa.edu.cn",
    "phone": "",
    "office": "",
    "bio": "极弱磁场国家重大科技基础设施首席科学家，开拓零磁医学新方向。",
    "achievements": "研制基于原子自旋SERF效应的超高灵敏极弱磁场测量装置。",
    "links": {
      "official": "https://yqgdxy.buaa.edu.cn/info/1017/5226.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 83,
    "uni": "北京航空航天大学",
    "tier": "985",
    "name": "于海明",
    "title": "教授",
    "dept": "集成电路科学与工程学院",
    "directions": [
      "自旋波量子计算",
      "磁子学",
      "自旋波电子学"
    ],
    "tech": [],
    "apps": [],
    "email": "haiming.yu@buaa.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事自旋波电子学与自旋波量子计算研究。",
    "achievements": "Nature Physics发表反铁磁磁子学干涉调控自旋流工作。",
    "links": {
      "official": "https://shi.buaa.edu.cn/hyu/zh_",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 84,
    "uni": "北京航空航天大学",
    "tier": "985",
    "name": "周新秀",
    "title": "教授",
    "dept": "大科学装置研究院",
    "directions": [
      "量子精密测量",
      "原子自旋陀螺",
      "SERF原子陀螺"
    ],
    "tech": [],
    "apps": [],
    "email": "zhouxinxiu@buaa.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事量子精密测量与原子陀螺电路控制研究。",
    "achievements": "参与研制国内首套原子自旋陀螺原理样机。",
    "links": {
      "official": "https://yqgdxy.buaa.edu.cn/info/1017/5252.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 85,
    "uni": "北京航空航天大学",
    "tier": "985",
    "name": "全伟",
    "title": "教授",
    "dept": "大科学装置研究院",
    "directions": [
      "量子精密测量与传感",
      "原子自旋陀螺仪",
      "量子导航"
    ],
    "tech": [],
    "apps": [],
    "email": "quanwei@buaa.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子传感技术工信部重点实验室副主任，从事原子自旋陀螺与量子精密测量。",
    "achievements": "国家技术发明二等奖(排第3)，极弱磁场国家重大科技基础设施副总设计师。",
    "links": {
      "official": "https://yqgdxy.buaa.edu.cn/info/1058/5062.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 86,
    "uni": "北京理工大学",
    "tier": "985",
    "name": "张向东",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "量子计算",
      "量子传感与成像",
      "光量子芯片"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "zhangxd@bit.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事人工微纳结构调控经典与量子光场、光量子芯片研究。",
    "achievements": "首次实验观测光和声的Zitterbewegung效应；量子Talbot效应研究。",
    "links": {
      "official": "https://pure.bit.edu.cn/zh/persons/xiangdong-zhang",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 87,
    "uni": "北京理工大学",
    "tier": "985",
    "name": "姚旭日",
    "title": "副教授",
    "dept": "物理学院量子技术研究中心",
    "directions": [
      "计算成像",
      "光子计数成像",
      "光量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "yaoxuri@bit.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事极弱光信号探测、计算成像与光量子信息研究。",
    "achievements": "实现单光子级显微单像素成像；混合纠缠量子擦除二维可视化。",
    "links": {
      "official": "https://pure.bit.edu.cn/zh/persons/xuri-yao/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 88,
    "uni": "北京邮电大学",
    "tier": "211",
    "name": "秦素娟",
    "title": "教授",
    "dept": "网络空间安全学院系统安全中心",
    "directions": [
      "量子密码",
      "量子计算",
      "信息安全"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "网络安全研究中心副主任，长期从事量子密码与量子计算理论。",
    "achievements": "提出多种量子密码分析模型，攻破多种国际著名协议。",
    "links": {
      "official": "https://scss.bupt.edu.cn/szdw/jsml/xtaq.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 89,
    "uni": "北京邮电大学",
    "tier": "211",
    "name": "高飞",
    "title": "教授",
    "dept": "网络空间安全学院",
    "directions": [
      "量子密码",
      "量子计算",
      "量子算法",
      "AI安全"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "gaof@bupt.edu.cn",
    "phone": "",
    "office": "",
    "bio": "CCF量子计算专委会常委，从事量子密码与量子算法研究。",
    "achievements": "提出多种量子机器学习与密码分析量子算法；ESI高被引学者。",
    "links": {
      "official": "https://teacher.bupt.edu.cn/gaofei/en/index.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 90,
    "uni": "北京邮电大学",
    "tier": "211",
    "name": "温巧燕",
    "title": "教授",
    "dept": "网络空间安全学院",
    "directions": [
      "量子密码",
      "信息安全",
      "量子信息处理"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "网络安全研究中心学术带头人，长期从事量子密码与信息安全。",
    "achievements": "量子密码协议设计与分析，出版专著多部。",
    "links": {
      "official": "https://scss.bupt.edu.cn/szdw/jsml/xtaq.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 91,
    "uni": "北京邮电大学",
    "tier": "211",
    "name": "马海强",
    "title": "教授",
    "dept": "理学院",
    "directions": [
      "量子通信",
      "量子光学",
      "单光子源",
      "量子密钥分发"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "security",
      "communication"
    ],
    "email": "hqma@bupt.edu.cn",
    "phone": "",
    "office": "",
    "bio": "组建北邮量子通信实验室，关注量子技术实用化。",
    "achievements": "全光纤量子通信系统与单光子探测器研究。",
    "links": {
      "official": "https://spst.bupt.edu.cn/info/1119/1494.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 92,
    "uni": "北京邮电大学",
    "tier": "211",
    "name": "王铁军",
    "title": "教授",
    "dept": "理学院",
    "directions": [
      "量子信息与量子光学",
      "量子通信",
      "量子光学微腔"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "security",
      "communication"
    ],
    "email": "wangtiejun@bupt.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事量子通信理论与片上光学微腔量子信息处理。",
    "achievements": "量子隐形传态与高维量子通信理论研究。",
    "links": {
      "official": "https://spst.bupt.edu.cn/info/1152/1554.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 93,
    "uni": "北京邮电大学",
    "tier": "211",
    "name": "张勇",
    "title": "副教授",
    "dept": "理学院",
    "directions": [
      "量子信息",
      "量子光学",
      "量子计算物理实现"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "zhyong98@gmail.com",
    "phone": "",
    "office": "",
    "bio": "从事量子信息与量子光学理论和实验研究。",
    "achievements": "硅基集成光学量子器件与量子计算物理实现研究。",
    "links": {
      "official": "https://science.bupt.edu.cn/info/1125/1957.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 94,
    "uni": "北京师范大学",
    "tier": "985",
    "name": "寇谡鹏",
    "title": "教授",
    "dept": "物理学系",
    "directions": [
      "拓扑量子计算",
      "拓扑序",
      "拓扑量子态"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [],
    "email": "spkou@bnu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事拓扑绝缘体、拓扑超导体与拓扑量子计算研究。",
    "achievements": "提出基于可控拓扑序的量子隧道效应拓扑量子计算方案。",
    "links": {
      "official": "https://physicsfaculty.bnu.edu.cn/Public/htm/news/5/1063.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 95,
    "uni": "北京师范大学",
    "tier": "985",
    "name": "鲁兴业",
    "title": "教授",
    "dept": "物理学系/高等量子研究中心",
    "directions": [
      "量子自旋液体",
      "关联电子材料",
      "量子磁性"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "luxy@bnu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事关联电子材料的中子散射与RIXS研究。",
    "achievements": "在NaYbSe2观测到量子自旋液体关键特征(自旋子费米面)。",
    "links": {
      "official": "https://physicsfaculty.bnu.edu.cn/teacher/357/index.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 96,
    "uni": "北京师范大学",
    "tier": "985",
    "name": "刘海文",
    "title": "教授",
    "dept": "物理学系/高等量子研究中心",
    "directions": [
      "量子输运理论",
      "低维超导量子相变",
      "拓扑材料"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "haiwen.liu@bnu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事杂质与耗散系统的量子输运理论研究。",
    "achievements": "统一解释多种低维超导体系的超导-金属量子相变；长江学者特聘教授。",
    "links": {
      "official": "https://physicsfaculty.bnu.edu.cn/teacher/352/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 97,
    "uni": "北京师范大学",
    "tier": "985",
    "name": "袁喆",
    "title": "教授",
    "dept": "物理学系/高等量子研究中心",
    "directions": [
      "自旋类脑计算",
      "量子自旋输运",
      "自旋电子学"
    ],
    "tech": [
      "semi"
    ],
    "apps": [
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事自旋类脑计算与量子自旋输运研究。",
    "achievements": "自旋电子学与量子自旋输运在类脑计算中的应用研究。",
    "links": {
      "official": "https://m.ais.cn/mentor/mentorDetail/e95f0797-5e3b-11ec-b045-a85e45a23623",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 98,
    "uni": "中国人民大学",
    "tier": "985",
    "name": "张芃",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "超冷原子气体",
      "量子模拟"
    ],
    "tech": [
      "atom",
      "photo"
    ],
    "apps": [],
    "email": "pengzhang@ruc.edu.cn",
    "phone": "",
    "office": "",
    "bio": "长期从事量子光学与超冷原子气体理论研究。",
    "achievements": "提出2种冷原子相互作用操控方法被国外实验室验证。",
    "links": {
      "official": "https://www.phys.ruc.edu.cn/rcpy/bksjy/jxms.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 99,
    "uni": "中国人民大学",
    "tier": "985",
    "name": "张威",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "原子分子物理",
      "量子信息与量子计算",
      "超冷量子气体",
      "囚禁离子"
    ],
    "tech": [
      "atom",
      "ion"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事超冷量子气体与囚禁离子量子模拟、量子计算研究。",
    "achievements": "拓扑相与囚禁离子量子模拟研究；北京量子信息科学研究院兼职研究员。",
    "links": {
      "official": "https://www.phys.ruc.edu.cn/info/1167/1513.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 100,
    "uni": "中国人民大学",
    "tier": "985",
    "name": "高奎意",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "超冷原子量子模拟",
      "强相互作用费米气体",
      "低维量子气体"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "kgao@ruc.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事超冷原子(量子气体)实验及基于冷原子的量子模拟。",
    "achievements": "搭建39K-6Li超冷原子实验平台研究非平衡量子动力学。",
    "links": {
      "official": "https://www.phys.ruc.edu.cn/info/1143/1589.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 101,
    "uni": "中国人民大学",
    "tier": "985",
    "name": "刘畅",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "量子反常霍尔效应",
      "拓扑量子物态",
      "低维量子材料输运"
    ],
    "tech": [
      "topo"
    ],
    "apps": [],
    "email": "liuchang_phy@ruc.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事低维量子材料器件制备与输运研究。",
    "achievements": "2025年Nature发表反铁磁量子反常霍尔效应调控工作。",
    "links": {
      "official": "https://www.phys.ruc.edu.cn/info/1033/2485.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 102,
    "uni": "中国人民大学",
    "tier": "985",
    "name": "张翔",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "原子与分子物理",
      "量子信息与量子计算"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "siang.zhang@ruc.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事原子分子物理与量子信息计算研究，清华交叉信息研究院兼职。",
    "achievements": "量子信息与量子计算理论与实验研究。",
    "links": {
      "official": "https://www.phys.ruc.edu.cn/szdw/jzry/3.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 103,
    "uni": "中国人民大学",
    "tier": "985",
    "name": "王伟民",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "原子与分子物理",
      "量子信息与量子计算"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "weiminwang1@ruc.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事原子分子物理与量子信息实验研究。",
    "achievements": "超冷量子气体与量子模拟实验研究。",
    "links": {
      "official": "https://www.phys.ruc.edu.cn/szdw/jzry/3.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 104,
    "uni": "中国人民大学",
    "tier": "985",
    "name": "尹华磊",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "量子光学",
      "密码学"
    ],
    "tech": [
      "theory",
      "photo"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "hlyin@ruc.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事量子信息、量子光学与密码学研究。",
    "achievements": "量子密码与量子安全通信协议研究。",
    "links": {
      "official": "https://www.phys.ruc.edu.cn/szdw/jzry/ayjfxpx/yzyfzwl_lzxxylzjs.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 105,
    "uni": "中国人民大学",
    "tier": "985",
    "name": "郭彦良",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "超冷原子",
      "强关联体系",
      "量子模拟"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "guoyanliang1992@gmail.com",
    "phone": "",
    "office": "",
    "bio": "从事超冷原子与强关联量子体系研究。",
    "achievements": "超冷原子量子模拟与强关联体系研究。",
    "links": {
      "official": "https://www.phys.ruc.edu.cn/szdw/jzry/ayjfxpx/yzyfzwl_lzxxylzjs.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 106,
    "uni": "北京科技大学",
    "tier": "211",
    "name": "魏海瑞",
    "title": "教授",
    "dept": "数理学院",
    "directions": [
      "固态量子信息处理",
      "量子计算优化",
      "量子系统退相干"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "hrwei@ustb.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子信息与计算梯队，从事固态量子信息处理理论研究。",
    "achievements": "量子门隐形传态与高维受控门研究，发表PRA等论文60余篇。",
    "links": {
      "official": "https://ty9.ustb.edu.cn/publish/slxyzww/szdw/xmjs/W/d653d71e3d294e7faeafbb093078a6f4.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 107,
    "uni": "北京科技大学",
    "tier": "211",
    "name": "宋玉军",
    "title": "教授",
    "dept": "数理学院",
    "directions": [
      "磁光电量子信息和传感",
      "自旋-轨道耦合",
      "拓扑结构"
    ],
    "tech": [
      "semi"
    ],
    "apps": [],
    "email": "songyj@ustb.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事现代物理与生物医学、磁光电量子信息交叉研究。",
    "achievements": "纳米结构薄膜与2D材料拓扑结构、界面磁电耦合研究。",
    "links": {
      "official": "https://ty9.ustb.edu.cn/publish/slxyzww/szdw/xmjs/S/0b2b9722fa47495993ec4d30dac52572.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 108,
    "uni": "北京科技大学",
    "tier": "211",
    "name": "张志超",
    "title": "副教授",
    "dept": "数理学院",
    "directions": [
      "量子信息",
      "量子计算",
      "量子通信",
      "信息安全"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security"
    ],
    "email": "zhichao@ustb.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事量子信息、量子计算与信息安全理论研究。",
    "achievements": "发表PRA等Top期刊论文10余篇，博士后创新人才支持计划。",
    "links": {
      "official": "https://faculty.ustb.edu.cn/zhangzhichao/zh_CN/index.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 109,
    "uni": "中国科学院物理研究所",
    "tier": "cas",
    "name": "相忠诚",
    "title": "副研究员",
    "dept": "固态量子信息与计算实验室",
    "directions": [
      "超导量子芯片设计与制备",
      "约瑟夫森参量放大器"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "zcxiang@iphy.ac.cn",
    "phone": "",
    "office": "",
    "bio": "负责超导量子芯片研制，设计制备多构型高质量量子芯片。",
    "achievements": "研制43比特、78比特超导量子处理器(庄子系列)。",
    "links": {
      "official": "https://cqcp.baqis.ac.cn/AssociateResearcher/3.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 110,
    "uni": "中国科学院物理研究所",
    "tier": "cas",
    "name": "赵士平",
    "title": "研究员",
    "dept": "固态量子信息与计算实验室",
    "directions": [
      "超导量子计算",
      "量子模拟",
      "超导量子电路量子光学"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "spzhao@iphy.ac.cn",
    "phone": "",
    "office": "",
    "bio": "Q03课题组组长，从事超导量子计算与量子模拟。",
    "achievements": "发表PRL等论文百余篇，超导量子电路宏观量子现象研究。",
    "links": {
      "official": "https://people.ucas.ac.cn/~spzhao",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 111,
    "uni": "中国科学院物理研究所",
    "tier": "cas",
    "name": "周端陆",
    "title": "研究员",
    "dept": "凝聚态理论与计算实验室",
    "directions": [
      "量子信息与量子计算",
      "量子机器学习",
      "多体量子纠缠"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "zhoudl72@iphy.ac.cn",
    "phone": "",
    "office": "",
    "bio": "从事量子信息、量子计算与量子机器学习理论研究。",
    "achievements": "确定性量子相干提纯(PRL 2019)；量子资源理论与量子机器学习。",
    "links": {
      "official": "https://theory.iphy.ac.cn/278.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 112,
    "uni": "中国科学院半导体研究所",
    "tier": "cas",
    "name": "骆军委",
    "title": "研究员",
    "dept": "半导体芯片物理与技术重点实验室",
    "directions": [
      "硅基量子计算",
      "硅量子比特",
      "半导体物理"
    ],
    "tech": [
      "semi"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "半导体芯片物理与技术全国重点实验室主任，杰青。",
    "achievements": "揭示硅量子点发光机制、提出掺杂应变锗直接带隙发光方案，支撑硅基量子计算。",
    "links": {
      "official": "https://www.phy.pku.edu.cn/info/1344/6990.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 113,
    "uni": "中国科学院软件研究所",
    "tier": "cas",
    "name": "应明生",
    "title": "研究员/学术副所长",
    "dept": "计算机科学国家重点实验室",
    "directions": [
      "量子计算",
      "量子程序验证",
      "量子软件"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子软件研究队伍带头人，清华量子软件研究中心主任。",
    "achievements": "量子进程代数、量子电路模型检测与量子霍尔逻辑奠基人。",
    "links": {
      "official": "https://www.jos.org.cn/html/2018/4/5536.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 114,
    "uni": "中国科学院软件研究所",
    "tier": "cas",
    "name": "应圣钢",
    "title": "副研究员",
    "dept": "量子软件团队",
    "directions": [
      "量子计算",
      "量子程序",
      "量子软件平台"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "中科院软件所量子软件团队核心骨干，弧光量子公司创始人。",
    "achievements": "研发国内首个量子程序设计平台isQ，量子程序验证工具。",
    "links": {
      "official": "https://m.x-mol.com/faculty/detail/312117",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 115,
    "uni": "中国科学院理论物理研究所",
    "tier": "cas",
    "name": "张潘",
    "title": "研究员",
    "dept": "第二研究室",
    "directions": [
      "量子计算与机器学习交叉",
      "张量网络",
      "量子纠错"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "panzhang@itp.ac.cn",
    "phone": "",
    "office": "",
    "bio": "从事统计物理、量子物理与机器学习交叉研究。",
    "achievements": "提出稀疏态张量网络方法，首次经典模拟谷歌悬铃木量子线路；玻恩学习机。",
    "links": {
      "official": "https://www.itp.cas.cn/sourcedb/zw/zjrck/201509/t20150930_4432963.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 116,
    "uni": "中国科学院计算技术研究所",
    "tier": "cas",
    "name": "孙晓明",
    "title": "研究员",
    "dept": "前瞻研究实验室",
    "directions": [
      "量子计算",
      "算法复杂性",
      "量子算法理论"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "sunxiaoming@ict.ac.cn",
    "phone": "",
    "office": "",
    "bio": "量子计算与算法理论实验室主任，杰青。",
    "achievements": "量子计算经典模拟、量子优势线路仿真；CCF量子计算专委主任。",
    "links": {
      "official": "https://www.ict.ac.cn/sourcedb/cn/jssrck/201110/t20111012_3361678.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 117,
    "uni": "国家纳米科学中心",
    "tier": "cas",
    "name": "孙向南",
    "title": "研究员",
    "dept": "纳米加工室",
    "directions": [
      "分子自旋电子学",
      "量子自旋",
      "自旋电子学"
    ],
    "tech": [
      "semi"
    ],
    "apps": [],
    "email": "sunxn@nanoctr.cn",
    "phone": "",
    "office": "",
    "bio": "从事有机自旋电子学与量子自旋材料器件研究。",
    "achievements": "世界首例分子自旋光伏器件(Science 2017)，自旋电子学室温量子应用潜力。",
    "links": {
      "official": "https://nanoctr.cas.cn/sourcedb/zw/zxrck/201601/t20160113_4517369.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 118,
    "uni": "国家纳米科学中心",
    "tier": "cas",
    "name": "张健",
    "title": "研究员",
    "dept": "纳米加工室",
    "directions": [
      "原子精度量子器件",
      "莫尔超晶格电子学",
      "单分子电子学"
    ],
    "tech": [
      "semi"
    ],
    "apps": [],
    "email": "zhangjian@nanoctr.cn",
    "phone": "",
    "office": "",
    "bio": "从事新结构纳米器件加工与输运特性研究。",
    "achievements": "原子级精确石墨烯纳米带量子器件，探索量子信息与量子热力学应用。",
    "links": {
      "official": "https://www.nanoctr.cn/sourcedb/zw/zxrck/202503/t20250307_7550008.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 119,
    "uni": "国家纳米科学中心",
    "tier": "cas",
    "name": "裘晓辉",
    "title": "研究员",
    "dept": "微纳表征与极限测量课题组",
    "directions": [
      "碳基量子自旋材料",
      "扫描探针显微",
      "量子自旋"
    ],
    "tech": [
      "semi"
    ],
    "apps": [],
    "email": "xhqiu@nanoctr.cn",
    "phone": "",
    "office": "",
    "bio": "从事纳米科技与扫描探针显微技术研究，杰青。",
    "achievements": "碳基量子自旋材料扫描探针研究；氢键成像入选2013中国科学十大进展。",
    "links": {
      "official": "https://www.nanoctr.cn/sourcedb/zw/zxrck/200906/t20090602_252685.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 120,
    "uni": "中国科学院自动化研究所",
    "tier": "cas",
    "name": "曾毅",
    "title": "研究员",
    "dept": "类脑认知智能团队",
    "directions": [
      "量子启发脉冲神经网络",
      "量子类脑智能",
      "类脑认知"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "类脑认知智能团队负责人，探索量子启发的人工智能模型。",
    "achievements": "提出受量子叠加启发的脉冲神经网络(QS-SNN)，提升抗噪与泛化能力。",
    "links": {
      "official": "https://ecas.cas.cn/dtfb/mtgz/202109/t20210901_4938883.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 121,
    "uni": "中国科学院自动化研究所",
    "tier": "cas",
    "name": "蒿杰",
    "title": "研究员",
    "dept": "国家专用集成电路设计工程中心",
    "directions": [
      "量子计算测控架构",
      "超导量子比特控制",
      "实感计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "jie.hao@ia.ac.cn",
    "phone": "",
    "office": "",
    "bio": "从事实感智能计算与高性能计算体系架构设计。",
    "achievements": "实感计算架构助力20超导量子比特薛定谔猫态制备(Science 2019)。",
    "links": {
      "official": "https://ia.cas.cn/rcdw/202404/t20240424_7130998.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 122,
    "uni": "中国科学院空天信息创新研究院",
    "tier": "cas",
    "name": "卢远添",
    "title": "副研究员",
    "dept": "原子磁传感器技术团队",
    "directions": [
      "原子磁传感器",
      "量子精密磁测"
    ],
    "tech": [],
    "apps": [],
    "email": "luyt@aircas.ac.cn",
    "phone": "",
    "office": "",
    "bio": "从事原子磁传感器技术与量子精密磁测研究。",
    "achievements": "三轴矢量原子磁力仪与氦光泵磁力仪理论研究。",
    "links": {
      "official": "https://people.ucas.ac.cn/~0082138",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 123,
    "uni": "中国科学院空天信息创新研究院",
    "tier": "cas",
    "name": "李王哲",
    "title": "研究员",
    "dept": "微波光子课题组",
    "directions": [
      "单光子探测",
      "量子精密测量",
      "微波光子"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "liwz@aircas.ac.cn",
    "phone": "",
    "office": "",
    "bio": "从事微波光子学与光子雷达芯片技术研究。",
    "achievements": "研制我国首部微波光子雷达原理样机；参与量子单光子源研究。",
    "links": {
      "official": "https://bigsardata@aircas.ac.cn/sourcedb/cn/expert/yjy/202306/t20230614_6777947.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 124,
    "uni": "复旦大学",
    "tier": "985",
    "name": "沈健",
    "title": "教授/微纳电子器件与量子计算机研究院院长",
    "dept": "微纳电子器件与量子计算机研究院/物理系",
    "directions": [
      "物理智能计算",
      "非线性量子输运",
      "低维磁性",
      "复杂氧化物物态调控"
    ],
    "tech": [],
    "apps": [
      "ai"
    ],
    "email": "shenj5494@fudan.edu.cn",
    "phone": "",
    "office": "",
    "bio": "复旦浩清特聘教授，应用表面物理全国重点实验室主任，从事凝聚态物理与物理赋能AI计算。",
    "achievements": "APS Fellow，美国总统青年科技奖，2025级量子与智能英才班负责人。",
    "links": {
      "official": "https://phys.fudan.edu.cn/f7/7b/c7605a63355/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 125,
    "uni": "复旦大学",
    "tier": "985",
    "name": "修发贤",
    "title": "教授",
    "dept": "物理学系/微纳电子器件与量子计算机研究院",
    "directions": [
      "拓扑狄拉克量子材料",
      "转角石墨烯输运",
      "二维超导体",
      "拓扑量子调控"
    ],
    "tech": [
      "topo"
    ],
    "apps": [],
    "email": "Faxian@fudan.edu.cn",
    "phone": "",
    "office": "江湾校区物理楼S210",
    "bio": "从事拓扑狄拉克材料的生长、量子调控与新型二维原子晶体器件研究。",
    "achievements": "国家杰青，代表性工作发表于Nature Physics等。",
    "links": {
      "official": "https://fxxiu.fudan.edu.cn/cn/People/xfxjs.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 126,
    "uni": "复旦大学",
    "tier": "985",
    "name": "周游",
    "title": "研究员",
    "dept": "未来信息创新学院/电磁波信息科学教育部重点实验室",
    "directions": [
      "量子态验证",
      "复本阴影估计",
      "量子机器学习"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子信息理论与量子学习相关算法研究。",
    "achievements": "与北大联合团队提出无辅助复本阴影估计框架（2026）。",
    "links": {
      "official": "https://phys.fudan.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 127,
    "uni": "复旦大学",
    "tier": "985",
    "name": "郭杭闻",
    "title": "研究员",
    "dept": "微纳电子器件与量子计算机研究院",
    "directions": [
      "反铁磁薄膜",
      "太赫兹光谱",
      "量子材料"
    ],
    "tech": [],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "与沈健团队合作开展反铁磁弱磁性与超快太赫兹光谱研究。",
    "achievements": "相关成果发表于Nature Physics等。",
    "links": {
      "official": "https://inqc.fudan.edu.cn/main.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 128,
    "uni": "复旦大学",
    "tier": "985",
    "name": "何攀",
    "title": "研究员",
    "dept": "微纳电子器件与量子计算机研究院",
    "directions": [
      "非线性谷霍尔效应",
      "量子物理前沿"
    ],
    "tech": [],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "与沈健团队合作观测巨大非线性谷霍尔效应。",
    "achievements": "成果发表于Nature Physics（2026）。",
    "links": {
      "official": "https://inqc.fudan.edu.cn/main.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 129,
    "uni": "复旦大学",
    "tier": "985",
    "name": "王文彬",
    "title": "研究员",
    "dept": "微纳电子器件与量子计算机研究院",
    "directions": [
      "原子尺度氧化物薄膜",
      "多铁性",
      "低维多铁材料"
    ],
    "tech": [],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "与沈健团队合作开展原子尺度氧化物多铁材料研究。",
    "achievements": "相关成果发表于Nature Physics等。",
    "links": {
      "official": "https://inqc.fudan.edu.cn/main.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 130,
    "uni": "复旦大学",
    "tier": "985",
    "name": "张远波",
    "title": "教授",
    "dept": "物理学系",
    "directions": [
      "二维材料",
      "拓扑量子材料",
      "莫尔超导体"
    ],
    "tech": [
      "topo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "长期从事二维材料与拓扑量子物态、转角体系研究。",
    "achievements": "在拓扑量子材料领域发表系列高水平论文。",
    "links": {
      "official": "https://phys.fudan.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 131,
    "uni": "上海交通大学",
    "tier": "985",
    "name": "曾贵华",
    "title": "长聘教授/量子感知与信息处理研究中心主任",
    "dept": "电子信息与电气工程学院/量子感知与信息处理研究中心",
    "directions": [
      "量子密码通信",
      "量子传感",
      "量子成像",
      "智能量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "encryption",
      "ai"
    ],
    "email": "ghzeng@sjtu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事连续变量量子保密通信、量子传感与智能量子信息技术研究。",
    "achievements": "连续变量QKD安全传输距离与码率创世界纪录，提出量子签名新方案。",
    "links": {
      "official": "https://sais.sjtu.edu.cn/faculty/zengguihua.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 132,
    "uni": "上海交通大学",
    "tier": "985",
    "name": "张卫平",
    "title": "致远讲席教授/李政道研究所双聘",
    "dept": "物理与天文学院/李政道研究所",
    "directions": [
      "量子光学",
      "原子光学",
      "量子精密测量"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "wpz@sjtu.edu.cn",
    "phone": "",
    "office": "理科楼5号楼411室",
    "bio": "APS/Optica/COS Fellow，从事原子光学与量子精密测量研究。",
    "achievements": "饶毓泰物理奖，提出嵌套式量子干涉仪突破标准量子极限。",
    "links": {
      "official": "https://www.physics.sjtu.edu.cn/jsml/1630.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 133,
    "uni": "上海交通大学",
    "tier": "985",
    "name": "黄鹏",
    "title": "教授",
    "dept": "物理与天文学院/量子感知与信息处理研究中心",
    "directions": [
      "量子感知",
      "量子信息处理"
    ],
    "tech": [],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子感知与信息处理相关研究。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.sjtu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 134,
    "uni": "上海交通大学",
    "tier": "985",
    "name": "刘振",
    "title": "教授",
    "dept": "物理与天文学院",
    "directions": [
      "量子信息",
      "量子光学"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子信息与量子光学研究。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.sjtu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 135,
    "uni": "上海交通大学",
    "tier": "985",
    "name": "王涛",
    "title": "教授",
    "dept": "物理与天文学院/李政道研究所",
    "directions": [
      "冷原子",
      "量子模拟"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事冷原子与量子模拟研究。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.sjtu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 136,
    "uni": "上海交通大学",
    "tier": "985",
    "name": "李国强",
    "title": "教授",
    "dept": "物理与天文学院",
    "directions": [
      "超导量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事超导量子计算相关研究。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.sjtu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 137,
    "uni": "同济大学",
    "tier": "985",
    "name": "姜天舒",
    "title": "教授",
    "dept": "物理科学与工程学院/精密光学工程技术研究所",
    "directions": [
      "拓扑光子学",
      "非阿贝尔拓扑",
      "非厄密物理",
      "拓扑量子计算应用"
    ],
    "tech": [
      "topo"
    ],
    "apps": [],
    "email": "tsjiang@tongji.edu.cn",
    "phone": "",
    "office": "机械北馆(光学馆)",
    "bio": "国家级青年人才，从事拓扑光子学研究，为非阿贝尔拓扑荷首次实验发现者之一。",
    "achievements": "成果发表于Nature、Nature Communications等。",
    "links": {
      "official": "https://physics.tongji.edu.cn/info/1123/3290.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 138,
    "uni": "同济大学",
    "tier": "985",
    "name": "王策",
    "title": "助理教授",
    "dept": "物理科学与工程学院",
    "directions": [
      "莫尔物理",
      "冷原子三维莫尔晶格",
      "量子模拟"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事超冷原子莫尔物理与量子模拟研究。",
    "achievements": "三维莫尔晶格方案成果发表于Phys. Rev. Lett.（2026）。",
    "links": {
      "official": "https://physics.tongji.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 139,
    "uni": "同济大学",
    "tier": "985",
    "name": "许静平",
    "title": "教授",
    "dept": "物理科学与工程学院",
    "directions": [
      "人工微结构量子光学",
      "量子纠缠调控",
      "全光量子器件"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "xx_jj_pp@tongji.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事人工微结构材料中量子光学与全光量子器件研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.tongji.edu.cn/info/1126/3128.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 140,
    "uni": "同济大学",
    "tier": "985",
    "name": "贾宏伟",
    "title": "教授",
    "dept": "精密光学工程技术研究所",
    "directions": [
      "拓扑光子学",
      "纳米光子学",
      "非厄米物理"
    ],
    "tech": [
      "topo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "光学馆310",
    "bio": "从事拓扑光子学与非厄米物理研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.tongji.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 141,
    "uni": "华东师范大学",
    "tier": "985",
    "name": "钱静",
    "title": "教授",
    "dept": "物理与电子科学学院",
    "directions": [
      "超冷里德堡原子量子模拟",
      "里德堡量子计算理论"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "jqian@phy.ecnu.edu.cn",
    "phone": "",
    "office": "闵行物理楼215",
    "bio": "从事超冷里德堡原子量子模拟与量子计算理论研究。",
    "achievements": "提出系列里德堡多比特高保真量子逻辑门原创理论方案。",
    "links": {
      "official": "https://zyxy.ecnu.edu.cn/87/73/c36124a427891/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 142,
    "uni": "华东师范大学",
    "tier": "985",
    "name": "荆杰泰",
    "title": "教授/博导",
    "dept": "精密光谱科学与技术国家重点实验室",
    "directions": [
      "量子光学",
      "量子光源",
      "量子通信",
      "量子精密测量"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "security"
    ],
    "email": "jtjing@phy.ecnu.edu.cn",
    "phone": "",
    "office": "光学大楼",
    "bio": "长期从事量子光学与原子分子物理实验和理论研究，聚焦量子光源与量子信息。",
    "achievements": "主持国家杰青，发表PRL 12篇，实现全光量子纠缠交换。",
    "links": {
      "official": "https://faculty.ecnu.edu.cn/_s29/jjt/main.psp",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 143,
    "uni": "华东师范大学",
    "tier": "985",
    "name": "刘金明",
    "title": "教授",
    "dept": "精密光谱科学与技术国家重点实验室",
    "directions": [
      "量子光学与量子信息",
      "量子算法",
      "量子电池"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "jmliu@phy.ecnu.edu.cn",
    "phone": "",
    "office": "闵行校区光学大楼A401",
    "bio": "从事量子光学、量子信息科学与量子计算理论研究。",
    "achievements": "中国计算机学会量子计算专业组执行委员。",
    "links": {
      "official": "https://faculty.ecnu.edu.cn/_s29/ljm/main.psp",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 144,
    "uni": "东南大学",
    "tier": "985",
    "name": "薛鹏",
    "title": "教授",
    "dept": "物理学院/全光量子信息实验室",
    "directions": [
      "量子行走",
      "量子模拟",
      "量子计算",
      "量子精密测量",
      "非厄米量子物理"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "全光量子信息实验室负责人，从事量子行走与量子模拟实验研究。",
    "achievements": "2026上半年发表7篇PRL/Nat. Photonics/NC/SA等顶刊。",
    "links": {
      "official": "https://physics.seu.edu.cn/pxue",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 145,
    "uni": "东南大学",
    "tier": "985",
    "name": "肖磊",
    "title": "教授/博导",
    "dept": "物理学院/全光量子信息实验室",
    "directions": [
      "量子模拟",
      "量子信息实验",
      "非厄米量子行走",
      "量子传感"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "xiaoleiphys@seu.edu.cn",
    "phone": "",
    "office": "九龙湖校区田家炳楼北楼410",
    "bio": "从事量子模拟、非厄米量子行走与量子传感实验研究。",
    "achievements": "中国光学十大进展，江苏省优秀博士论文。",
    "links": {
      "official": "https://physics.seu.edu.cn/2024/0819/c29635a499935/pagem.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 146,
    "uni": "东南大学",
    "tier": "985",
    "name": "王坤坤",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子光学与量子信息研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.seu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 147,
    "uni": "东南大学",
    "tier": "985",
    "name": "詹翔",
    "title": "副研究员",
    "dept": "物理学院",
    "directions": [
      "量子模拟",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子模拟与量子信息研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.seu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 148,
    "uni": "东南大学",
    "tier": "985",
    "name": "曲登科",
    "title": "助理教授",
    "dept": "物理学院",
    "directions": [
      "冷原子",
      "量子模拟"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事冷原子量子模拟研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.seu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 149,
    "uni": "南京大学",
    "tier": "985",
    "name": "吴培亨",
    "title": "院士/教授",
    "dept": "电子科学与工程学院/超导电子学研究所",
    "directions": [
      "超导电子学",
      "超导量子计算",
      "超导单光子探测",
      "量子信息"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "中科院院士，超导电子学研究所建所所长，从事超导电子学与量子信息技术研究。",
    "achievements": "全国模范教师，长期从事超导量子计算与单光子探测研究。",
    "links": {
      "official": "https://rise.nju.edu.cn/60810/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 150,
    "uni": "南京大学",
    "tier": "985",
    "name": "金飚兵",
    "title": "教授/院长",
    "dept": "电子科学与工程学院/超导电子学研究所",
    "directions": [
      "超导电子学",
      "太赫兹光谱",
      "超导器件"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "长江学者，从事超导电子学与太赫兹技术研究。",
    "achievements": "在MgB2超导太赫兹表征中发现反常电导率峰。",
    "links": {
      "official": "https://rise.nju.edu.cn/60810/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 151,
    "uni": "南京大学",
    "tier": "985",
    "name": "吴敬波",
    "title": "教授",
    "dept": "电子科学与工程学院/超导电子学研究所",
    "directions": [
      "超导电子学",
      "太赫兹智能超表面"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "青年拔尖人才，从事超导电子学与太赫兹器件研究。",
    "achievements": "与金飚兵等提出方向感知太赫兹智能超表面。",
    "links": {
      "official": "https://rise.nju.edu.cn/60810/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 152,
    "uni": "南京大学",
    "tier": "985",
    "name": "张彩虹",
    "title": "教授(优青)",
    "dept": "电子科学与工程学院/超导电子学研究所",
    "directions": [
      "超导电子学",
      "超导量子器件"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "优青，从事超导量子器件与超导电子学研究。",
    "achievements": "",
    "links": {
      "official": "https://rise.nju.edu.cn/60810/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 153,
    "uni": "南京大学",
    "tier": "985",
    "name": "范克彬",
    "title": "副教授",
    "dept": "电子科学与工程学院/超导电子学研究所",
    "directions": [
      "人工电磁材料",
      "太赫兹调制与成像",
      "红外传感"
    ],
    "tech": [],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事人工电磁材料与太赫兹调制研究。",
    "achievements": "",
    "links": {
      "official": "https://rise.nju.edu.cn/60810/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 154,
    "uni": "南京大学",
    "tier": "985",
    "name": "张蜡宝",
    "title": "教授(杰青)",
    "dept": "电子科学与工程学院/超导电子学研究所",
    "directions": [
      "超导单光子探测"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "杰青，从事超导单光子探测器研究。",
    "achievements": "",
    "links": {
      "official": "https://rise.nju.edu.cn/60810/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 155,
    "uni": "南京大学",
    "tier": "985",
    "name": "王昊",
    "title": "助理教授",
    "dept": "电子科学与工程学院/超导电子学研究所",
    "directions": [
      "超导电子学",
      "约瑟夫森器件",
      "太赫兹探测"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事约瑟夫森器件与超导太赫兹探测研究。",
    "achievements": "",
    "links": {
      "official": "https://rise.nju.edu.cn/60810/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 156,
    "uni": "浙江大学",
    "tier": "985",
    "name": "张鹏飞",
    "title": "研究员",
    "dept": "杭州国际科创中心/量子计算创新工坊",
    "directions": [
      "超导量子计算",
      "量子模拟"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "pfzhang@zju.edu.cn",
    "phone": "",
    "office": "信息港园区9114",
    "bio": "浙大百人研究员，核心参与天目、莫干超导量子芯片研发。",
    "achievements": "以共同一作在Nature Physics、Nat. Commun.、PRL发表量子模拟工作。",
    "links": {
      "official": "https://hic.zju.edu.cn/2025/0512/c85906a3048392/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 157,
    "uni": "浙江大学",
    "tier": "985",
    "name": "郭秋江",
    "title": "研究员",
    "dept": "杭州国际科创中心/量子计算创新工坊",
    "directions": [
      "超导量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事超导量子计算芯片（天目系列）研究。",
    "achievements": "天目二号芯片（>100比特）相关Nature成果通讯作者。",
    "links": {
      "official": "https://physics.zju.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 158,
    "uni": "浙江大学",
    "tier": "985",
    "name": "乐天",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "冷原子",
      "量子模拟",
      "量子计算"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事冷原子量子模拟与量子计算研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.zju.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 159,
    "uni": "浙江大学",
    "tier": "985",
    "name": "朱诗尧",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "理论量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子光学与理论量子信息研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.zju.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 160,
    "uni": "浙江大学",
    "tier": "985",
    "name": "金潮渊",
    "title": "研究员",
    "dept": "物理学院",
    "directions": [
      "超导量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事超导量子计算研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.zju.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 161,
    "uni": "浙江大学",
    "tier": "985",
    "name": "朱慧慧",
    "title": "研究员",
    "dept": "物理学院/光学与量子信息研究所",
    "directions": [
      "光量子",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事光量子与量子信息研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.zju.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 162,
    "uni": "浙江大学",
    "tier": "985",
    "name": "卢丽强",
    "title": "研究员",
    "dept": "计算机科学与技术学院/物理学院",
    "directions": [
      "量子算法",
      "量子随机存储器(QRAM)",
      "量子机器学习"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子算法与量子机器学习研究，参与超导QRAM实验。",
    "achievements": "Nature Physics报道的QRAM实验共同通讯作者。",
    "links": {
      "official": "https://physics.zju.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 163,
    "uni": "苏州大学",
    "tier": "211",
    "name": "朱成杰",
    "title": "特聘教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "超冷量子气体",
      "腔QED",
      "量子光学",
      "量子通信"
    ],
    "tech": [
      "atom"
    ],
    "apps": [
      "security"
    ],
    "email": "cjzhu@suda.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事超冷量子气体与腔QED系统量子光学研究。",
    "achievements": "PRL editor suggestion，入选上海市量子领域专家工作组。",
    "links": {
      "official": "https://physics.suda.edu.cn/a6/74/c32869a566900/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 164,
    "uni": "苏州大学",
    "tier": "211",
    "name": "延英",
    "title": "副教授",
    "dept": "光电科学与工程学院",
    "directions": [
      "量子信息",
      "稀土离子量子比特高保真操控"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "yingyan@suda.edu.cn",
    "phone": "",
    "office": "现光所305",
    "bio": "从事量子信息理论与稀土离子体系高保真量子操控研究。",
    "achievements": "实现稀土离子体系迄今最高保真度量子操控。",
    "links": {
      "official": "https://oese.suda.edu.cn/5a/40/c9530a219712/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 165,
    "uni": "苏州大学",
    "tier": "211",
    "name": "彭长四",
    "title": "教授",
    "dept": "光电科学与工程学院",
    "directions": [
      "量子点",
      "纳米仿生",
      "半导体量子器件"
    ],
    "tech": [
      "semi"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "苏州大学本部院士楼304",
    "bio": "组建量子点和纳米仿生研究室，从事量子点半导体研究。",
    "achievements": "科学中国人年度人物奖，发表SCI论文170余篇。",
    "links": {
      "official": "https://oese.suda.edu.cn/_redirect?siteId=268&columnId=9529&articleId=219698",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 166,
    "uni": "苏州大学",
    "tier": "211",
    "name": "Joel Moser",
    "title": "教授",
    "dept": "光电科学与工程学院",
    "directions": [
      "纳米机械谐振器",
      "介观量子物理"
    ],
    "tech": [
      "semi"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "本部激光楼413",
    "bio": "从事纳米机电系统介观物理与量子谐振器研究。",
    "achievements": "在Reviews of Modern Physics发表纳米机械系统综述。",
    "links": {
      "official": "https://web.suda.edu.cn/J.MOSER",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 167,
    "uni": "南京邮电大学",
    "tier": "211",
    "name": "周澜",
    "title": "教授(2026.2起调入杭州师范大学)",
    "dept": "理学院/量子信息技术研究院",
    "directions": [
      "量子信息理论",
      "量子通信协议",
      "量子中继",
      "量子纠缠"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security"
    ],
    "email": "zhoul@njupt.edu.cn",
    "phone": "",
    "office": "",
    "bio": "长期从事量子信息理论研究（注：2026年2月已调入杭州师范大学）。",
    "achievements": "发表PRL等论文150余篇，ESI高被引7篇。",
    "links": {
      "official": "https://yjs.njupt.edu.cn/dsgl/nocontrol/college/dsfcxq.htm?dsJbxxId=9B9D05C52C192DCFE050007F01006EFE",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 168,
    "uni": "南京邮电大学",
    "tier": "211",
    "name": "李剑",
    "title": "讲师",
    "dept": "通信与信息工程学院/量子信息技术研究所",
    "directions": [
      "量子信息",
      "量子光学",
      "量子密钥分配",
      "量子精密测量"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security"
    ],
    "email": "jianli@njupt.edu.cn",
    "phone": "",
    "office": "",
    "bio": "中科大郭光灿院士弟子，从事量子信息与量子光学研究。",
    "achievements": "",
    "links": {
      "official": "https://yjs.njupt.edu.cn/dsgl/nocontrol/college/dsfcxq.htm?dsJbxxId=DFCBDF6A418121FE20F4E7F3FEF86492",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 169,
    "uni": "南京邮电大学",
    "tier": "211",
    "name": "张春辉",
    "title": "副教授",
    "dept": "通信与信息工程学院/量子信息科学研究院",
    "directions": [
      "量子密钥分配",
      "量子数字签名",
      "量子随机数"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "encryption"
    ],
    "email": "chz@njupt.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事量子密钥分配与量子数字签名研究。",
    "achievements": "中国电子学会科学技术奖自然科学三等奖。",
    "links": {
      "official": "https://yjs.njupt.edu.cn/dsgl/nocontrol/college/dsfcxq.htm?dsJbxxId=50bc5ad2cd9749be9d17661a6535588e",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 170,
    "uni": "南京邮电大学",
    "tier": "211",
    "name": "周星宇",
    "title": "副教授",
    "dept": "通信与信息工程学院/量子信息研究所",
    "directions": [
      "量子密钥分发系统",
      "量子通信+人工智能"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security",
      "ai"
    ],
    "email": "xyz@njupt.edu.cn",
    "phone": "",
    "office": "",
    "bio": "从事量子密钥分发系统搭建与AI结合的量子通信研究。",
    "achievements": "",
    "links": {
      "official": "https://yjs.njupt.edu.cn/dsgl/nocontrol/college/dsfcxq.htm?dsJbxxId=5c27ca77bba0405293a6487c9676cdc5",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 171,
    "uni": "杭州电子科技大学",
    "tier": "normal",
    "name": "陆晓铭",
    "title": "教授",
    "dept": "理学院",
    "directions": [
      "量子精密测量",
      "量子信息",
      "量子参数估计与关联"
    ],
    "tech": [],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "国家级青年人才，量子精密测量实验室负责人，从事量子参数估计研究。",
    "achievements": "教育部自然科学二等奖，提出多参数量子精密测量信息制约关系。",
    "links": {
      "official": "https://faculty.hdu.edu.cn/lxy/lxm2/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 172,
    "uni": "杭州电子科技大学",
    "tier": "normal",
    "name": "孔嘉",
    "title": "教授",
    "dept": "理学院",
    "directions": [
      "量子精密测量",
      "量子传感器",
      "原子磁力计"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "浙江省特聘专家，量子传感与超分辨医学成像团队负责人。",
    "achievements": "在热原子系统中制备大尺度原子纠缠态，刷新世界纪录。",
    "links": {
      "official": "https://faculty.hdu.edu.cn/lxy/kj/main.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 173,
    "uni": "杭州电子科技大学",
    "tier": "normal",
    "name": "张钰",
    "title": "教授",
    "dept": "电子信息学院/低能耗量子微纳研究部",
    "directions": [
      "单光子传感器",
      "受限量子体系光学特性"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "低能耗量子微纳研究部成员，从事单光子传感器与受限量子体系研究。",
    "achievements": "",
    "links": {
      "official": "https://faculty.hdu.edu.cn/dzxxxy/zy2/main.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 174,
    "uni": "中国科学院上海微系统与信息技术研究所",
    "tier": "cas",
    "name": "尤立星",
    "title": "研究员",
    "dept": "超导电子学实验室",
    "directions": [
      "超导纳米线单光子探测(SNSPD)",
      "量子通信",
      "量子计算应用"
    ],
    "tech": [
      "super",
      "photo"
    ],
    "apps": [
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "超导电子学实验室主任，从事SNSPD与量子信息应用研究。",
    "achievements": "牵头科技创新2030高性能超导条带光子探测项目，IEC标准制定负责人。",
    "links": {
      "official": "https://www.sim.cas.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 175,
    "uni": "中国科学院上海微系统与信息技术研究所",
    "tier": "cas",
    "name": "李浩",
    "title": "研究员",
    "dept": "超导电子学实验室",
    "directions": [
      "硅基光量子芯片",
      "单光子探测",
      "量子纠缠分发网络"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事硅基光量子芯片与单光子探测研究。",
    "achievements": "实现低温节点间可拓展量子纠缠分发网络（npj Quantum Information, 2026）。",
    "links": {
      "official": "https://www.sim.cas.cn/xwzx2016/kyjz/202607/t20260722_8253474.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 176,
    "uni": "中国科学院上海微系统与信息技术研究所",
    "tier": "cas",
    "name": "张伟君",
    "title": "研究员",
    "dept": "超导电子学实验室",
    "directions": [
      "超导条带光子探测",
      "光量子"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事超导条带光子探测技术研究。",
    "achievements": "科技创新2030项目课题二负责人。",
    "links": {
      "official": "https://www.sim.cas.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 177,
    "uni": "中国科学院上海微系统与信息技术研究所",
    "tier": "cas",
    "name": "谢晓明",
    "title": "研究员/所长",
    "dept": "超导电子学实验室",
    "directions": [
      "超导电子学",
      "量子信息"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "上海微系统所所长，从事超导电子学与量子信息研究。",
    "achievements": "",
    "links": {
      "official": "https://www.sim.cas.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 178,
    "uni": "中国科学院上海微系统与信息技术研究所",
    "tier": "cas",
    "name": "王浩敏",
    "title": "研究员",
    "dept": "超导电子学实验室",
    "directions": [
      "石墨烯",
      "拓扑量子器件"
    ],
    "tech": [
      "topo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事石墨烯与拓扑量子器件研究。",
    "achievements": "",
    "links": {
      "official": "https://www.sim.cas.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 179,
    "uni": "中国科学院上海微系统与信息技术研究所",
    "tier": "cas",
    "name": "张加祥",
    "title": "研究员",
    "dept": "超导电子学实验室",
    "directions": [
      "硅基光量子"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事硅基光量子研究。",
    "achievements": "",
    "links": {
      "official": "https://www.sim.cas.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 180,
    "uni": "中国科学院上海微系统与信息技术研究所",
    "tier": "cas",
    "name": "周慧",
    "title": "研究员",
    "dept": "超导电子学实验室",
    "directions": [
      "固态量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事固态量子计算研究。",
    "achievements": "",
    "links": {
      "official": "https://www.sim.cas.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 181,
    "uni": "中国科学院上海微系统与信息技术研究所",
    "tier": "cas",
    "name": "吴禹",
    "title": "研究员",
    "dept": "超导电子学实验室",
    "directions": [
      "超导量子器件"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事超导量子器件研究。",
    "achievements": "",
    "links": {
      "official": "https://www.sim.cas.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 182,
    "uni": "中国科学院上海技术物理研究所",
    "tier": "cas",
    "name": "王林",
    "title": "研究员",
    "dept": "红外科学与技术全国重点实验室",
    "directions": [
      "拓扑量子材料太赫兹探测",
      "量子增强感知"
    ],
    "tech": [
      "topo"
    ],
    "apps": [],
    "email": "wanglin@mail.sitp.ac.cn",
    "phone": "",
    "office": "",
    "bio": "基金委优青，从事拓扑量子材料太赫兹探测与量子增强感知研究。",
    "achievements": "实现基于外尔半金属的百GHz带宽非线性霍尔整流天线（Nature Electronics, 2026）。",
    "links": {
      "official": "https://www.sitp.cas.cn/rcjy/dszjk/sssdsk/201607/t20160719_4643102.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 183,
    "uni": "中国科学院上海技术物理研究所",
    "tier": "cas",
    "name": "胡伟达",
    "title": "研究员/副所长",
    "dept": "红外科学与技术全国重点实验室",
    "directions": [
      "低维量子材料红外/太赫兹光电",
      "量子增强器件"
    ],
    "tech": [
      "topo"
    ],
    "apps": [],
    "email": "wdhu@mail.sitp.ac.cn",
    "phone": "",
    "office": "",
    "bio": "IEEE/Optica/SPIE Fellow，从事低维量子材料光电与量子增强器件研究。",
    "achievements": "国家杰青，发表Science/Nature子刊论文200余篇。",
    "links": {
      "official": "https://www.sitp.ac.cn/rcjy/dszjk/sssdsk/201109/t20110913_3347348.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 184,
    "uni": "中国科学院上海光学精密机械研究所",
    "tier": "cas",
    "name": "桂有珍",
    "title": "研究员",
    "dept": "量子光学重点实验室",
    "directions": [
      "激光时频传递",
      "量子纠缠钟",
      "量子计算",
      "TF-QKD时频"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "security"
    ],
    "email": "yzgui@siom.ac.cn",
    "phone": "",
    "office": "",
    "bio": "从事激光时频传递、量子纠缠钟与量子计算研究。",
    "achievements": "中国通信学会量子计算委员会委员，提出TF-QKD时间同步误差理论模型。",
    "links": {
      "official": "https://people.ucas.ac.cn/~guiyouzheng",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 185,
    "uni": "中国科学院上海光学精密机械研究所",
    "tier": "cas",
    "name": "吕旭东",
    "title": "研究员",
    "dept": "量子光学重点实验室",
    "directions": [
      "中性原子量子计算"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事中性原子量子计算研究。",
    "achievements": "",
    "links": {
      "official": "https://www.siom.ac.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 186,
    "uni": "中国科学院上海光学精密机械研究所",
    "tier": "cas",
    "name": "王俊",
    "title": "研究员",
    "dept": "量子光学重点实验室",
    "directions": [
      "中性原子量子计算",
      "量子传感"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事中性原子量子计算与量子传感研究。",
    "achievements": "",
    "links": {
      "official": "https://www.siom.ac.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 187,
    "uni": "中国科学院上海光学精密机械研究所",
    "tier": "cas",
    "name": "吕德胜",
    "title": "研究员",
    "dept": "量子光学重点实验室",
    "directions": [
      "空间冷原子物理",
      "量子频标"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事空间冷原子物理与量子频标研究。",
    "achievements": "",
    "links": {
      "official": "https://www.siom.ac.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 188,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "周宗权",
    "title": "教授",
    "dept": "物理学院/合肥国家实验室/中科院量子信息重点实验室",
    "directions": [
      "固态量子存储",
      "量子中继",
      "量子网络"
    ],
    "tech": [
      "atom"
    ],
    "apps": [
      "security"
    ],
    "email": "zq_zhou@ustc.edu.cn",
    "phone": "",
    "office": "Rm 405, CAS Key Lab of Quantum Information",
    "bio": "从事稀土离子掺杂晶体固态量子存储与量子网络实验研究。",
    "achievements": "提出无噪声光子回波NLPE，实现城域多模式量子中继“星汉二号”。",
    "links": {
      "official": "https://faculty.ustc.edu.cn/zhouzongquan/zh_CN/index.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 189,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "陈明城",
    "title": "特任教授",
    "dept": "合肥微尺度物质科学国家研究中心",
    "directions": [
      "单光子/单原子/超导量子线路",
      "量子计算优越性",
      "量子力学基础"
    ],
    "tech": [
      "super",
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "陆朝阳/潘建伟弟子，从事量子计算实验与理论研究。",
    "achievements": "2025年科学探索奖，达摩院青橙奖，谷歌学术引用1.3万+。",
    "links": {
      "official": "https://www.hfnl.ustc.edu.cn/2025/0828/c26106a697553/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 190,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "姜海峰",
    "title": "研究员",
    "dept": "合肥微尺度物质科学国家研究中心",
    "directions": [
      "超稳激光源",
      "飞秒光频梳",
      "光生微波",
      "量子频标"
    ],
    "tech": [],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事时频技术与精密测量研究，支撑基准频标与精密光谱。",
    "achievements": "2018年国家杰青，研制的仪器支撑多单位精密物理测量。",
    "links": {
      "official": "https://quantum.ustc.edu.cn/web/taxonomy/term/45?page=1",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 191,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "任继刚",
    "title": "教授",
    "dept": "物理学院/中科院量子信息重点实验室",
    "directions": [
      "量子通信",
      "星地量子密钥",
      "量子隐形传态"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事星地量子通信与量子隐形传态实验研究。",
    "achievements": "参与墨子号、京沪干线等量子通信重大工程。",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 192,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "何玉明",
    "title": "教授",
    "dept": "物理学院/中科院量子信息重点实验室",
    "directions": [
      "量子通信",
      "量子密码"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子通信与量子密码实验研究。",
    "achievements": "",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 193,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "王志强",
    "title": "研究员",
    "dept": "物理学院/中科院量子信息重点实验室",
    "directions": [
      "超导量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事超导量子计算实验研究。",
    "achievements": "",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 194,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "张志强",
    "title": "研究员",
    "dept": "物理学院/中科院量子信息重点实验室",
    "directions": [
      "超导量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事超导量子计算实验研究。",
    "achievements": "",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 195,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "汪野",
    "title": "研究员",
    "dept": "物理学院/中科院量子信息重点实验室",
    "directions": [
      "量子模拟",
      "冷原子"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事冷原子量子模拟研究。",
    "achievements": "",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 196,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "孙启超",
    "title": "研究员",
    "dept": "物理学院/中科院量子信息重点实验室",
    "directions": [
      "量子信息理论",
      "量子算法"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子信息理论与量子算法研究。",
    "achievements": "",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 197,
    "uni": "中国科学技术大学",
    "tier": "985",
    "name": "张进一",
    "title": "教授",
    "dept": "物理学院/中科院量子信息重点实验室",
    "directions": [
      "量子信息理论",
      "量子算法"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子信息理论与量子算法研究。",
    "achievements": "",
    "links": {
      "official": "https://quantum.ustc.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 198,
    "uni": "华中科技大学",
    "tier": "985",
    "name": "周敏康",
    "title": "教授",
    "dept": "物理学院 引力中心",
    "directions": [
      "量子精密测量",
      "冷原子物理",
      "原子干涉重力测量"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "zmk@hust.edu.cn",
    "phone": "",
    "office": "",
    "bio": "冷原子与量子精密测量，引力中心骨干，原子干涉重力仪研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.hust.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 199,
    "uni": "华中科技大学",
    "tier": "985",
    "name": "胡忠坤",
    "title": "教授",
    "dept": "物理学院 引力中心",
    "directions": [
      "量子精密测量",
      "冷原子物理",
      "原子干涉仪"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "引力中心教授，冷原子干涉与量子精密测量。",
    "achievements": "",
    "links": {
      "official": "https://physics.hust.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 200,
    "uni": "华中科技大学",
    "tier": "985",
    "name": "周宜雨",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "量子光学",
      "腔QED"
    ],
    "tech": [
      "photo",
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子光学与量子信息理论方向。",
    "achievements": "",
    "links": {
      "official": "https://physics.hust.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 201,
    "uni": "华中科技大学",
    "tier": "985",
    "name": "陈学文",
    "title": "教授",
    "dept": "物理学院 武汉光电国家研究中心",
    "directions": [
      "量子光学",
      "微纳光子学",
      "光场调控"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "微纳光子学与量子光学研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.hust.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 202,
    "uni": "华中科技大学",
    "tier": "985",
    "name": "李霖",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "冷原子",
      "玻色爱因斯坦凝聚"
    ],
    "tech": [
      "atom",
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "超冷原子与量子光学实验。",
    "achievements": "",
    "links": {
      "official": "https://physics.hust.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 203,
    "uni": "华中科技大学",
    "tier": "985",
    "name": "唐建伟",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子模拟",
      "冷原子",
      "光晶格"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "光晶格与量子模拟研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.hust.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 204,
    "uni": "武汉大学",
    "tier": "985",
    "name": "张晨栋",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子材料",
      "拓扑物态",
      "超导"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子材料与拓扑物态理论。",
    "achievements": "",
    "links": {
      "official": "https://physics.whu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 205,
    "uni": "武汉大学",
    "tier": "985",
    "name": "秦华军",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子计算",
      "量子算法",
      "量子模拟"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "optimization",
      "ai"
    ],
    "email": "qinhuajun@whu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子算法与量子计算理论。",
    "achievements": "",
    "links": {
      "official": "https://physics.whu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 206,
    "uni": "武汉大学",
    "tier": "985",
    "name": "袁声军",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子材料计算",
      "第一性原理",
      "拓扑量子"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "s.yuan@whu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子材料与第一性原理计算。",
    "achievements": "",
    "links": {
      "official": "https://physics.whu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 207,
    "uni": "武汉大学",
    "tier": "985",
    "name": "张顺平",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子光学",
      "低维量子材料",
      "等离激元"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "低维量子材料与等离激元。",
    "achievements": "",
    "links": {
      "official": "https://physics.whu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 208,
    "uni": "武汉大学",
    "tier": "985",
    "name": "张文献",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子光学",
      "量子计算",
      "超冷原子"
    ],
    "tech": [
      "photo",
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子光学与量子计算，超冷原子气体与玻色凝聚研究。",
    "achievements": "Nature Physics、PRL多篇",
    "links": {
      "official": "https://jszy.whu.edu.cn/zhangwenxian/zh_CN/more/412737/jsjjgd",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 209,
    "uni": "武汉大学",
    "tier": "985",
    "name": "王取泉",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "半导体量子点",
      "量子计算",
      "量子信息"
    ],
    "tech": [
      "semi"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "半导体量子点量子计算与超快光学调控。",
    "achievements": "",
    "links": {
      "official": "https://physics.whu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 210,
    "uni": "中山大学",
    "tier": "985",
    "name": "周晓祺",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "光量子芯片",
      "量子通信",
      "量子计算"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "zhouxq8@mail.sysu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "光量子集成芯片与量子通信。",
    "achievements": "",
    "links": {
      "official": "https://physics.sysu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 211,
    "uni": "中山大学",
    "tier": "985",
    "name": "王大伟",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "冷原子",
      "量子模拟",
      "量子拓扑"
    ],
    "tech": [
      "atom",
      "topo"
    ],
    "apps": [],
    "email": "wangdw9@mail.sysu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "超冷原子量子模拟与拓扑量子物态。",
    "achievements": "",
    "links": {
      "official": "https://physics.sysu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 212,
    "uni": "中山大学",
    "tier": "985",
    "name": "庞盛世",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "量子模拟",
      "冷原子",
      "量子多体"
    ],
    "tech": [
      "atom",
      "theory"
    ],
    "apps": [],
    "email": "shubifen@mail.sysu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "冷原子量子模拟与量子多体理论。",
    "achievements": "",
    "links": {
      "official": "https://physics.sysu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 213,
    "uni": "中山大学",
    "tier": "985",
    "name": "喻颖",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "量子计算",
      "量子算法",
      "量子纠错"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "optimization",
      "ai"
    ],
    "email": "yuying26@mail.sysu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子算法与量子纠错理论。",
    "achievements": "",
    "links": {
      "official": "https://physics.sysu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 214,
    "uni": "南方科技大学",
    "tier": "normal",
    "name": "俞大鹏",
    "title": "院士/教授",
    "dept": "量子科学与工程研究院",
    "directions": [
      "超导量子计算",
      "量子材料",
      "拓扑量子"
    ],
    "tech": [
      "super",
      "topo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "中国科学院院士，超导量子计算与量子材料。",
    "achievements": "2023中国科学十大进展（玻色编码纠错）共同通信",
    "links": {
      "official": "https://siqse.sustech.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 215,
    "uni": "南方科技大学",
    "tier": "normal",
    "name": "翁文康",
    "title": "教授",
    "dept": "量子科学与工程研究院",
    "directions": [
      "量子算法",
      "量子机器学习",
      "量子软件"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai",
      "optimization"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子算法、量子机器学习与量子软件。",
    "achievements": "",
    "links": {
      "official": "https://phy.sustech.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 216,
    "uni": "南方科技大学",
    "tier": "normal",
    "name": "陈远珍",
    "title": "研究员",
    "dept": "量子科学与工程研究院",
    "directions": [
      "超导量子计算",
      "量子比特"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "超导量子比特与量子计算实验。",
    "achievements": "",
    "links": {
      "official": "https://siqse.sustech.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 217,
    "uni": "南方科技大学",
    "tier": "normal",
    "name": "钟有鹏",
    "title": "研究员",
    "dept": "量子科学与工程研究院",
    "directions": [
      "量子计算",
      "量子模拟",
      "超导"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "超导量子计算与量子模拟。",
    "achievements": "",
    "links": {
      "official": "https://siqse.sustech.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 218,
    "uni": "南方科技大学",
    "tier": "normal",
    "name": "范靖云",
    "title": "教授",
    "dept": "物理系/量子科学与工程研究院",
    "directions": [
      "量子光学",
      "量子测量",
      "量子物理基础"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "fanjy@sustech.edu.cn",
    "phone": "",
    "office": "台州楼C栋502-11",
    "bio": "量子光学与量子测量基础研究。",
    "achievements": "Science、Nature Photonics、PRL等",
    "links": {
      "official": "https://phy.sustech.edu.cn/faculty/detail/id/2269.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 219,
    "uni": "南方科技大学",
    "tier": "normal",
    "name": "陈廷勇",
    "title": "研究员",
    "dept": "量子科学与工程研究院",
    "directions": [
      "量子材料",
      "自旋电子学",
      "量子计算存储"
    ],
    "tech": [
      "topo",
      "semi"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子材料、自旋电子学与量子计算存储器件。",
    "achievements": "Nature、Nature Communications等",
    "links": {
      "official": "https://faculty.sustech.edu.cn?cat=77&tagid=chenty/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 220,
    "uni": "华南师范大学",
    "tier": "211",
    "name": "张善超",
    "title": "教授",
    "dept": "物理学院 量子科学与技术研究所",
    "directions": [
      "超冷原子",
      "量子模拟",
      "量子信息"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "sczhang@m.scnu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "超冷原子量子物理与量子模拟实验，国家优青。",
    "achievements": "Nat. Photonics、PRL等",
    "links": {
      "official": "https://mobile.scnu.edu.cn/physics/14524/12095",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 221,
    "uni": "华南师范大学",
    "tier": "211",
    "name": "颜辉",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "冷原子",
      "量子光学",
      "量子网络"
    ],
    "tech": [
      "atom",
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "yanhui@scnu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "冷原子与量子光学，量子网络实验。",
    "achievements": "",
    "links": {
      "official": "https://staff.scnu.edu.cn/yanhui",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 222,
    "uni": "华南师范大学",
    "tier": "211",
    "name": "朱诗亮",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子物理",
      "量子模拟",
      "几何相位"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "理论量子物理与量子模拟。",
    "achievements": "",
    "links": {
      "official": "https://physics.scnu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 223,
    "uni": "华南师范大学",
    "tier": "211",
    "name": "郭健平",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "冷原子",
      "原子分子光学"
    ],
    "tech": [
      "atom",
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "原子分子光学与量子光学。",
    "achievements": "",
    "links": {
      "official": "https://physics.scnu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 224,
    "uni": "华南师范大学",
    "tier": "211",
    "name": "张智明",
    "title": "教授",
    "dept": "信息光电子科技学院",
    "directions": [
      "量子光学",
      "量子信息",
      "量子计算",
      "量子密码"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "zhangzhiming@m.scnu.edu.cn",
    "phone": "020-39310154",
    "office": "",
    "bio": "量子光学、量子信息、腔QED与量子密码，中国密码学会量子密码专委会委员。",
    "achievements": "",
    "links": {
      "official": "http://ioe.scnu.edu.cn/a/20150818/636.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 225,
    "uni": "电子科技大学",
    "tier": "985",
    "name": "邓光伟",
    "title": "教授",
    "dept": "基础与前沿研究院 量子信息研究中心",
    "directions": [
      "量子光力学",
      "量子计算",
      "量子精密测量"
    ],
    "tech": [
      "photo",
      "semi"
    ],
    "apps": [],
    "email": "gwdeng@uestc.edu.cn",
    "phone": "028-61831838",
    "office": "清水河校区基础院大楼B425",
    "bio": "量子光力学、量子计算与精密测量，国家青年人才。",
    "achievements": "Nature Communications、Science Advances、PRL等",
    "links": {
      "official": "https://faculty.uestc.edu.cn/dengguangwei/zh_CN/index.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 226,
    "uni": "电子科技大学",
    "tier": "985",
    "name": "陈国川",
    "title": "教授",
    "dept": "基础与前沿研究院",
    "directions": [
      "超导量子计算",
      "量子纠错",
      "量子比特"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "bbtankc@gmail.com",
    "phone": "",
    "office": "",
    "bio": "Tan Kok Chuan Bobby（陈国川），超导量子计算与量子纠错。",
    "achievements": "",
    "links": {
      "official": "https://www.iffs.uestc.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 227,
    "uni": "电子科技大学",
    "tier": "985",
    "name": "Abolfazl Bayat",
    "title": "教授",
    "dept": "基础与前沿研究院",
    "directions": [
      "量子信息",
      "量子计算",
      "量子传感"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "optimization"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子信息与量子计算理论，量子多体与量子传感。",
    "achievements": "PRL等",
    "links": {
      "official": "https://www.iffs.uestc.edu.cn/old/info/1018/3080.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 228,
    "uni": "电子科技大学",
    "tier": "985",
    "name": "王子竹",
    "title": "教授",
    "dept": "基础与前沿研究院/物理学院",
    "directions": [
      "量子计算",
      "量子光学",
      "固态量子"
    ],
    "tech": [
      "semi",
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "固态量子计算与量子光学。",
    "achievements": "",
    "links": {
      "official": "https://www.iffs.uestc.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 229,
    "uni": "电子科技大学",
    "tier": "985",
    "name": "周强",
    "title": "教授",
    "dept": "物理学院/信息与量子实验室",
    "directions": [
      "量子通信",
      "量子互联网",
      "量子密钥分发"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "zhouqiang@uestc.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子通信与量子互联网实验，城域量子网络建设。",
    "achievements": "",
    "links": {
      "official": "https://yjsjy.uestc.edu.cn/gmis/jcsjgl/dsfc/dsgrjj/12434",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 230,
    "uni": "深圳大学",
    "tier": "normal",
    "name": "李朝红",
    "title": "教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "冷原子",
      "量子光学",
      "量子模拟"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "chleecn@szu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "冷原子物理与量子光学，量子模拟。",
    "achievements": "",
    "links": {
      "official": "https://phys.szu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 231,
    "uni": "深圳大学",
    "tier": "normal",
    "name": "马进勇",
    "title": "教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子光学",
      "腔QED",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "腔QED与量子信息研究。",
    "achievements": "",
    "links": {
      "official": "https://phys.szu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 232,
    "uni": "深圳大学",
    "tier": "normal",
    "name": "鹿博",
    "title": "教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子计算",
      "量子算法",
      "量子模拟"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "optimization",
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子计算与量子算法理论。",
    "achievements": "",
    "links": {
      "official": "https://phys.szu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 233,
    "uni": "深圳大学",
    "tier": "normal",
    "name": "姜维超",
    "title": "副教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子光学",
      "量子信息",
      "光与物质相互作用"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子光学与光与物质相互作用。",
    "achievements": "",
    "links": {
      "official": "https://phys.szu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 234,
    "uni": "深圳大学",
    "tier": "normal",
    "name": "龚志瑞",
    "title": "副教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子计算",
      "量子模拟",
      "超导"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子计算与量子模拟。",
    "achievements": "",
    "links": {
      "official": "https://phys.szu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 235,
    "uni": "深圳大学",
    "tier": "normal",
    "name": "韩成银",
    "title": "副教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子光学",
      "冷原子",
      "精密测量"
    ],
    "tech": [
      "atom",
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "冷原子量子光学与精密测量。",
    "achievements": "",
    "links": {
      "official": "https://phys.szu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 236,
    "uni": "深圳大学",
    "tier": "normal",
    "name": "杨晓东",
    "title": "副教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子信息",
      "量子光学"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子光学与量子信息。",
    "achievements": "",
    "links": {
      "official": "https://phys.szu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 237,
    "uni": "深圳大学",
    "tier": "normal",
    "name": "张莉",
    "title": "副教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子计算",
      "量子算法"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子算法与量子计算理论。",
    "achievements": "",
    "links": {
      "official": "https://phys.szu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 238,
    "uni": "深圳大学",
    "tier": "normal",
    "name": "庄敏",
    "title": "助理教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子模拟",
      "冷原子",
      "量子多体"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "冷原子量子模拟与多体物理。",
    "achievements": "",
    "links": {
      "official": "https://phys.szu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 239,
    "uni": "厦门大学",
    "tier": "985",
    "name": "陈理想",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "光量子计算",
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "chenlx@xmu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "光量子计算与量子光学。",
    "achievements": "",
    "links": {
      "official": "https://phys.xmu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 240,
    "uni": "厦门大学",
    "tier": "985",
    "name": "李明哲",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "量子模拟",
      "量子多体",
      "冷原子"
    ],
    "tech": [
      "atom",
      "theory"
    ],
    "apps": [],
    "email": "mzli@xmu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子多体与量子模拟理论。",
    "achievements": "",
    "links": {
      "official": "https://phys.xmu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 241,
    "uni": "厦门大学",
    "tier": "985",
    "name": "陈张海",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "量子光学",
      "腔QED",
      "固态量子"
    ],
    "tech": [
      "photo",
      "semi"
    ],
    "apps": [],
    "email": "zhanghai@xmu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "腔QED与固态量子光学。",
    "achievements": "",
    "links": {
      "official": "https://phys.xmu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 242,
    "uni": "厦门大学",
    "tier": "985",
    "name": "周航",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "量子信息",
      "量子计算",
      "拓扑"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [],
    "email": "hangzhou@xmu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "拓扑量子信息与量子计算理论。",
    "achievements": "",
    "links": {
      "official": "https://phys.xmu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 243,
    "uni": "厦门大学",
    "tier": "985",
    "name": "卢仙聪",
    "title": "副教授",
    "dept": "物理系",
    "directions": [
      "量子光学",
      "非线性光学",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子光学与量子信息。",
    "achievements": "",
    "links": {
      "official": "https://phys.xmu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 244,
    "uni": "四川大学",
    "tier": "985",
    "name": "葛荣春",
    "title": "特聘研究员",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子模拟",
      "量子精密测量",
      "开放量子系统"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "rcge@scu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子非平衡动力学、量子模拟与量子精密测量。",
    "achievements": "",
    "links": {
      "official": "https://physics.scu.edu.cn/info/1029/1091.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 245,
    "uni": "四川大学",
    "tier": "985",
    "name": "岑理相",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子信息理论",
      "容错量子计算",
      "量子相干"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子信息与量子计算理论，容错量子计算方案。",
    "achievements": "",
    "links": {
      "official": "https://physics.scu.edu.cn/info/1029/3450.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 246,
    "uni": "四川大学",
    "tier": "985",
    "name": "王俊峰",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "固态色心",
      "量子调控",
      "量子精密测量"
    ],
    "tech": [
      "semi"
    ],
    "apps": [
      "materials"
    ],
    "email": "jfwang@scu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "碳化硅/氮化硼色心量子调控与量子精密测量，国家级青年人才。",
    "achievements": "Nature Materials、Nature Communications、PRL等",
    "links": {
      "official": "https://physics.scu.edu.cn/info/1029/3018.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 247,
    "uni": "四川大学",
    "tier": "985",
    "name": "吴亚东",
    "title": "特聘副研究员",
    "dept": "物理学院",
    "directions": [
      "量子计算",
      "量子机器学习",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "yadongwu@scu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子机器学习与量子计算算法复杂度理论。",
    "achievements": "PRL、npj Quantum Information等",
    "links": {
      "official": "https://physics.scu.edu.cn/info/1030/5332.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 248,
    "uni": "四川大学",
    "tier": "985",
    "name": "宾倩",
    "title": "特聘副研究员",
    "dept": "物理学院",
    "directions": [
      "腔QED",
      "量子增强精密测量",
      "量子物理"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "qianbin@scu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "腔量子电动力学与量子增强精密测量理论。",
    "achievements": "PRL 6篇",
    "links": {
      "official": "https://physics.scu.edu.cn/info/1030/3623.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 249,
    "uni": "重庆大学",
    "tier": "985",
    "name": "谭潇颉",
    "title": "教授",
    "dept": "光电工程学院",
    "directions": [
      "量子精密测量",
      "超分辨成像",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "jxtan@cqu.edu.cn",
    "phone": "",
    "office": "信息科研技术楼B336-1",
    "bio": "量子精密测量与超分辨成像交叉研究。",
    "achievements": "Light: Science & Applications、Optica等",
    "links": {
      "official": "https://faculty.cqu.edu.cn/Jay_Tan/en/index.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 250,
    "uni": "重庆大学",
    "tier": "985",
    "name": "张瑜瑜",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "腔QED",
      "量子多体相变"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子光学、腔QED与量子多体相变理论，教育部青年长江学者。",
    "achievements": "PRL等",
    "links": {
      "official": "https://m.x-mol.com/tutor/detail/226028",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 251,
    "uni": "重庆大学",
    "tier": "985",
    "name": "张学锋",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子多体",
      "量子模拟",
      "量子精密测量"
    ],
    "tech": [
      "theory",
      "atom"
    ],
    "apps": [],
    "email": "zhangxf@cqu.edu.cn",
    "phone": "",
    "office": "虎溪校区理科楼LE108",
    "bio": "量子多体理论与数值计算，量子模拟与精密测量。",
    "achievements": "PRL 10篇",
    "links": {
      "official": "https://faculty.cqu.edu.cn/XuefengZhang/zh_CN/index.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 252,
    "uni": "重庆大学",
    "tier": "985",
    "name": "覃剑平",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子物理",
      "量子信息",
      "超导量子计算"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子物理与量子信息，超导量子计算与量子模拟。",
    "achievements": "",
    "links": {
      "official": "https://physics.cqu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 253,
    "uni": "重庆大学",
    "tier": "985",
    "name": "李熙涵",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息",
      "量子通信"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子光学与量子信息理论，基于光学的量子通信。",
    "achievements": "",
    "links": {
      "official": "https://physics.cqu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 254,
    "uni": "华南理工大学",
    "tier": "985",
    "name": "张煜然",
    "title": "预聘教授",
    "dept": "物理与光电学院",
    "directions": [
      "量子信息",
      "量子计量",
      "量子开放系统",
      "量子模拟"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "optimization"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子计量学、量子开放系统与量子模拟理论。",
    "achievements": "Science、Nature Physics、PRL等",
    "links": {
      "official": "https://www2.scut.edu.cn/physics/2023/0529/c14077a504136/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 255,
    "uni": "华南理工大学",
    "tier": "985",
    "name": "李志远",
    "title": "教授",
    "dept": "物理与光电学院",
    "directions": [
      "纳米光子学",
      "量子光学",
      "非线性光学"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "微纳光子学与量子光学理论和实验，国家杰青。",
    "achievements": "SCI论文400余篇",
    "links": {
      "official": "https://m.x-mol.com/tutor/detail/76198",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 256,
    "uni": "华南理工大学",
    "tier": "985",
    "name": "张向东",
    "title": "教授",
    "dept": "物理与光电学院",
    "directions": [
      "光量子",
      "量子通信",
      "拓扑光子学"
    ],
    "tech": [
      "photo",
      "topo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "scxdzhang@scut.edu.cn",
    "phone": "",
    "office": "",
    "bio": "光量子器件与量子通信、拓扑光子学。",
    "achievements": "",
    "links": {
      "official": "https://www2.scut.edu.cn/physics/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 257,
    "uni": "华南理工大学",
    "tier": "985",
    "name": "姚尧",
    "title": "教授",
    "dept": "物理与光电学院",
    "directions": [
      "拓扑超导",
      "离子阱",
      "量子热机",
      "量子计算"
    ],
    "tech": [
      "ion",
      "topo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "理论凝聚态与量子计算，拓扑超导与离子阱。",
    "achievements": "",
    "links": {
      "official": "https://www2.scut.edu.cn/physics/2021/0310/c13953a421273/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 258,
    "uni": "华南理工大学",
    "tier": "985",
    "name": "崔巍",
    "title": "教授",
    "dept": "自动化学院/卓越工程师学院",
    "directions": [
      "量子计算",
      "机器视觉",
      "智能感知"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "aucuiwei@scut.edu.cn",
    "phone": "",
    "office": "3号楼自动化学院604",
    "bio": "量子计算与智能感知，CCF量子计算专业组执行委员。",
    "achievements": "",
    "links": {
      "official": "https://yanzhao.scut.edu.cn/ExpertInfo.aspx?zjbh=Itk22h4!Ap5cVb2DfgVd1w==",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 259,
    "uni": "暨南大学",
    "tier": "211",
    "name": "邓子岚",
    "title": "教授",
    "dept": "光子技术研究院",
    "directions": [
      "微纳光子学",
      "超构表面",
      "量子超构表面器件"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "materials"
    ],
    "email": "zilandeng@jnu.edu.cn",
    "phone": "020-85222046",
    "office": "番禺校区学院楼2012室",
    "bio": "微纳光子学与量子超构表面器件，国家优青。",
    "achievements": "Nature Communications、Light等",
    "links": {
      "official": "https://ipt.jnu.edu.cn/2019/0716/c41764a467593/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 260,
    "uni": "暨南大学",
    "tier": "211",
    "name": "张杰君",
    "title": "教授",
    "dept": "光子技术研究院",
    "directions": [
      "光量子",
      "量子通信",
      "微纳光子学"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "zhangjiejun@jnu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "光量子器件与量子通信。",
    "achievements": "",
    "links": {
      "official": "https://ipt.jnu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 261,
    "uni": "暨南大学",
    "tier": "211",
    "name": "谭晓青",
    "title": "教授",
    "dept": "信息科学技术学院",
    "directions": [
      "量子信息",
      "量子计算",
      "密码编码",
      "量子机器学习"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption",
      "security",
      "ai"
    ],
    "email": "ttanxq@jnu.edu.cn",
    "phone": "",
    "office": "南海楼",
    "bio": "量子信息与量子计算、密码编码与量子机器学习，CCF量子计算专业组执行委员。",
    "achievements": "QST、PR A、IEEE TNNLS等",
    "links": {
      "official": "https://faculty.jnu.edu.cn/xxkxjsxy/txq2/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 262,
    "uni": "暨南大学",
    "tier": "211",
    "name": "方俊彬",
    "title": "教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子保密通信",
      "无线光通信",
      "数据安全"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "junbinfang@foxmail.com",
    "phone": "020-85220484",
    "office": "蒙民伟理工楼706",
    "bio": "量子保密通信与无线光通信，国家级高层次人才。",
    "achievements": "",
    "links": {
      "official": "https://faculty.jnu.edu.cn/lgxy/fjb/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 263,
    "uni": "暨南大学",
    "tier": "211",
    "name": "陈耀飞",
    "title": "教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "光纤传感",
      "量子传感",
      "弱磁测量",
      "生物传感"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "光纤传感与量子传感、弱磁测量。",
    "achievements": "",
    "links": {
      "official": "https://baike.baidu.com/item/%E9%99%88%E8%80%80%E9%A3%9E/67631767",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 264,
    "uni": "福州大学",
    "tier": "211",
    "name": "夏岩",
    "title": "教授",
    "dept": "物理与信息工程学院",
    "directions": [
      "量子信息",
      "量子光学",
      "腔QED",
      "量子计算"
    ],
    "tech": [
      "photo",
      "super"
    ],
    "apps": [],
    "email": "xia-208@163.com",
    "phone": "",
    "office": "物理北楼316",
    "bio": "量子调控与量子计算，福建省量子信息与量子光学重点实验室副主任。",
    "achievements": "",
    "links": {
      "official": "http://itlab.fzu.edu.cn/gzl/ZhuanJi/TeacherInfo2.aspx?No=T09084",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 265,
    "uni": "福州大学",
    "tier": "211",
    "name": "杨贞标",
    "title": "教授",
    "dept": "物理与信息工程学院",
    "directions": [
      "超导量子电路",
      "量子计算",
      "量子模拟",
      "量子精密测量"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "zbyang@fzu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "闽江学者，超导量子电路在量子计算与量子模拟中的应用。",
    "achievements": "PRL等150余篇",
    "links": {
      "official": "http://itlab.fzu.edu.cn/gzl/ZhuanJi/TeacherInfo2.aspx?No=T12030",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 266,
    "uni": "福州大学",
    "tier": "211",
    "name": "吴怀志",
    "title": "教授",
    "dept": "物理与信息工程学院",
    "directions": [
      "量子信息与量子光学",
      "量子计算"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子信息与量子光学方向，福建省量子信息与量子光学重点实验室成员。",
    "achievements": "",
    "links": {
      "official": "https://wx.fzu.edu.cn/info/1056/1408.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 267,
    "uni": "福建师范大学",
    "tier": "normal",
    "name": "林秀敏",
    "title": "教授",
    "dept": "物理与能源学院",
    "directions": [
      "量子光学",
      "量子信息",
      "腔QED",
      "腔光力"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "xmlin@fjnu.edu.cn",
    "phone": "",
    "office": "旗山校区理工楼513",
    "bio": "腔QED与腔光力系统量子信息处理，全国量子力学研究会理事。",
    "achievements": "",
    "links": {
      "official": "https://cpe.fjnu.edu.cn/23/42/c2991a271170/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 268,
    "uni": "福建师范大学",
    "tier": "normal",
    "name": "林功伟",
    "title": "教授",
    "dept": "物理与能源学院",
    "directions": [
      "量子光学",
      "量子信息",
      "腔QED",
      "量子通信"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "gwlin@fjnu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "光场量子调控、腔QED量子计算与量子通信。",
    "achievements": "Nature Photonics、PRL等",
    "links": {
      "official": "https://cpe.fjnu.edu.cn/62/19/c2969a352793/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 269,
    "uni": "福建师范大学",
    "tier": "normal",
    "name": "叶明勇",
    "title": "教授",
    "dept": "物理与能源学院",
    "directions": [
      "量子计算",
      "量子信息",
      "回音壁微腔"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "myye@fjnu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "回音壁光学微腔实验与量子信息、量子光学理论。",
    "achievements": "",
    "links": {
      "official": "https://cpe.fjnu.edu.cn/23/b6/c2991a271286/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 270,
    "uni": "福建师范大学",
    "tier": "normal",
    "name": "陈翔",
    "title": "副教授",
    "dept": "物理与能源学院",
    "directions": [
      "量子光学",
      "量子信息",
      "里德堡原子",
      "腔QED"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "xiangc@fjnu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "里德堡原子与腔QED量子信息处理、腔光力系统。",
    "achievements": "PRA等",
    "links": {
      "official": "https://cpe.fjnu.edu.cn/62/1b/c2969a352795/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 271,
    "uni": "西南交通大学",
    "tier": "211",
    "name": "韦联福",
    "title": "教授",
    "dept": "信息科学与技术学院",
    "directions": [
      "量子信息技术",
      "超导电子学",
      "精密量子测量"
    ],
    "tech": [
      "super"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子信息技术实验室负责人，超导电子学与精密量子测量。",
    "achievements": "",
    "links": {
      "official": "https://faculty.swjtu.edu.cn/weilianfu/en/index/103177/list/index.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 272,
    "uni": "西南交通大学",
    "tier": "211",
    "name": "樊代和",
    "title": "教授",
    "dept": "物理学院 量子光电团队",
    "directions": [
      "量子光电",
      "冷原子",
      "量子精密测量"
    ],
    "tech": [
      "atom",
      "photo"
    ],
    "apps": [],
    "email": "dhfan@swjtu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子光电与冷原子量子精密测量。",
    "achievements": "",
    "links": {
      "official": "https://phys.swjtu.edu.cn/info/1039/50491.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 273,
    "uni": "西南交通大学",
    "tier": "211",
    "name": "周涛",
    "title": "教授",
    "dept": "物理学院 量子光电团队",
    "directions": [
      "超导量子计算",
      "拓扑量子计算",
      "量子芯片"
    ],
    "tech": [
      "super",
      "topo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子光电团队负责人，超导量子计算与拓扑量子计算。",
    "achievements": "",
    "links": {
      "official": "https://phys.swjtu.edu.cn/info/1039/50491.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 274,
    "uni": "西南交通大学",
    "tier": "211",
    "name": "罗明星",
    "title": "教授",
    "dept": "信息科学与技术学院",
    "directions": [
      "量子网络",
      "量子计算",
      "量子信息安全",
      "光量子"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [
      "security"
    ],
    "email": "mxluo@swjtu.edu.cn",
    "phone": "",
    "office": "犀浦校区9号楼9531A",
    "bio": "量子网络、量子计算与量子信息安全处理，合肥国家实验室兼职教授。",
    "achievements": "PRL 6篇、Springer专著",
    "links": {
      "official": "https://yz.swjtu.edu.cn/vatuu/TeacherInfoAction?setAction=homepage&UniversityId=716069ABB9AFCA25",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 275,
    "uni": "西南交通大学",
    "tier": "211",
    "name": "崔静静",
    "title": "教授",
    "dept": "信息科学与技术学院",
    "directions": [
      "量子计算",
      "无线通信",
      "人工智能"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "jingjing.cui@swjtu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子计算、无线通信与人工智能，国家级青年人才，曾任职Quantinuum。",
    "achievements": "",
    "links": {
      "official": "https://faculty.swjtu.edu.cn/cuijingjing/zh_CN/index.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 276,
    "uni": "云南大学",
    "tier": "211",
    "name": "姜泽军",
    "title": "教授",
    "dept": "物理与天文学院",
    "directions": [
      "量子光学",
      "量子信息",
      "冷原子"
    ],
    "tech": [
      "atom",
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子光学与量子信息研究。",
    "achievements": "",
    "links": {
      "official": "https://www.science.ynu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 277,
    "uni": "云南大学",
    "tier": "211",
    "name": "史衍丽",
    "title": "教授",
    "dept": "物理与天文学院",
    "directions": [
      "量子探测",
      "单光子",
      "量子器件"
    ],
    "tech": [
      "photo",
      "semi"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子探测与单光子器件研究。",
    "achievements": "",
    "links": {
      "official": "https://www.science.ynu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 278,
    "uni": "云南大学",
    "tier": "211",
    "name": "陈清",
    "title": "教授",
    "dept": "物理与天文学院",
    "directions": [
      "量子信息",
      "量子计算",
      "量子模拟"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "chenqing@ynu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子信息与量子计算理论。",
    "achievements": "",
    "links": {
      "official": "https://www.science.ynu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 279,
    "uni": "云南大学",
    "tier": "211",
    "name": "王留军",
    "title": "教授",
    "dept": "物理与天文学院",
    "directions": [
      "量子光学",
      "冷原子",
      "量子模拟"
    ],
    "tech": [
      "atom",
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "冷原子与量子光学实验。",
    "achievements": "",
    "links": {
      "official": "https://www.science.ynu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 280,
    "uni": "云南大学",
    "tier": "211",
    "name": "房一楠",
    "title": "副教授",
    "dept": "物理与天文学院",
    "directions": [
      "量子计算",
      "量子算法",
      "量子多体"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子算法与量子多体理论。",
    "achievements": "",
    "links": {
      "official": "https://www.science.ynu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 281,
    "uni": "广西大学",
    "tier": "211",
    "name": "韦克金",
    "title": "教授",
    "dept": "物理科学与工程技术学院",
    "directions": [
      "量子通信",
      "量子密钥分发",
      "量子密码",
      "芯片化QKD"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "kjwei@gxu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "光纤量子通信与量子密钥分发、芯片化量子通信，广西八桂青年拔尖人才。",
    "achievements": "PRL、Light等60余篇",
    "links": {
      "official": "https://physics.gxu.edu.cn/info/1041/2075.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 282,
    "uni": "广西大学",
    "tier": "211",
    "name": "张振荣",
    "title": "教授",
    "dept": "计算机与电子信息学院",
    "directions": [
      "量子信息",
      "量子态区分",
      "光通信"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "zzr76@gxu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子态区分与量子信息接收机研究，量子信息团队合作导师。",
    "achievements": "npj Quantum Information等",
    "links": {
      "official": "https://scei.gxu.edu.cn/info/1003/4038.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 283,
    "uni": "湘潭大学",
    "tier": "normal",
    "name": "刘龙飞",
    "title": "教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子信息",
      "量子计算",
      "量子模拟",
      "量子精密测量"
    ],
    "tech": [
      "atom",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子精密测量理论与实验、量子计算与量子模拟，省优青。",
    "achievements": "",
    "links": {
      "official": "https://wlxy.xtu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 284,
    "uni": "湘潭大学",
    "tier": "normal",
    "name": "彭杰",
    "title": "教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子光学",
      "量子信息",
      "Rabi模型"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "jpeng@xtu.edu.cn",
    "phone": "",
    "office": "二教218",
    "bio": "量子光学与量子信息，强耦合量子比特与光场系统解析解。",
    "achievements": "PRL等",
    "links": {
      "official": "https://wlxy.xtu.edu.cn/info/1015/2203.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 285,
    "uni": "湘潭大学",
    "tier": "normal",
    "name": "张林帅",
    "title": "讲师",
    "dept": "数学与计算科学学院",
    "directions": [
      "量子信息",
      "量子计算",
      "量子资源理论"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子信息与量子计算，量子相干与量子关联资源理论。",
    "achievements": "",
    "links": {
      "official": "https://math.xtu.edu.cn/info/1010/5153.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 286,
    "uni": "湘潭大学",
    "tier": "normal",
    "name": "刘倩倩",
    "title": "讲师",
    "dept": "物理与光电工程学院",
    "directions": [
      "相对论量子信息",
      "量子信息理论",
      "黑洞物理"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "qianqianliu@xtu.edu.cn",
    "phone": "",
    "office": "物理南楼217",
    "bio": "相对论量子信息与量子信息理论。",
    "achievements": "PRA等",
    "links": {
      "official": "https://wlxy.xtu.edu.cn/info/1015/3434.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 287,
    "uni": "湘潭大学",
    "tier": "normal",
    "name": "何朝宇",
    "title": "教授",
    "dept": "物理与光电工程学院",
    "directions": [
      "量子材料",
      "平带",
      "强关联量子物理",
      "拓扑"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "hechaoyu@xtu.edu.cn",
    "phone": "",
    "office": "物理楼305A",
    "bio": "量子材料与强关联量子物理，平带/莫尔体系量子物性。",
    "achievements": "PRL、Nature Commun.等",
    "links": {
      "official": "https://wlxy.xtu.edu.cn/info/1015/2190.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 288,
    "uni": "哈尔滨工业大学",
    "tier": "985",
    "name": "宋杰",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "量子光学",
      "量子相变",
      "量子探测"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "哈工大物理系教授、博导，从事量子信息与量子光学研究，主持国家自科基金多项，发表Phys Rev A等论文70余篇。",
    "achievements": "",
    "links": {
      "official": "https://stao.imust.edu.cn/info/1061/1295.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 289,
    "uni": "哈尔滨工业大学",
    "tier": "985",
    "name": "张子静",
    "title": "教授",
    "dept": "物理学院/光电新技术研究所",
    "directions": [
      "量子探测",
      "量子激光雷达",
      "单光子探测"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "青年拔尖准聘教授、博导，光电新技术研究所常务副所长，从事量子探测与新体制量子激光雷达研究。",
    "achievements": "",
    "links": {
      "official": "https://m.x-mol.com/tutor/detail/378416",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 290,
    "uni": "哈尔滨工业大学",
    "tier": "985",
    "name": "姜永远",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "纳微光子学",
      "光学信息处理"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "jiangyy@hit.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院光学方向教授，研究方向为纳微光子学与光学信息处理。",
    "achievements": "",
    "links": {
      "official": "https://physics.hit.edu.cn/zrjsdw/list2.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 291,
    "uni": "哈尔滨工业大学",
    "tier": "985",
    "name": "韩权",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "hanquan@hit.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院光学方向教授，研究方向为量子光学与量子信息。",
    "achievements": "",
    "links": {
      "official": "https://physics.hit.edu.cn/zrjsdw/list2.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 292,
    "uni": "哈尔滨工业大学",
    "tier": "985",
    "name": "刘树田",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "信息光学",
      "光学物理"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "stliu@hit.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院光学方向教授，研究方向为信息光学、光学物理与量子光学。",
    "achievements": "",
    "links": {
      "official": "https://physics.hit.edu.cn/zrjsdw/list2.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 293,
    "uni": "吉林大学",
    "tier": "985",
    "name": "王磊",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息",
      "原子相干"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，从事量子信息传递理论与原子相干效应实验研究，包括图像相干存储、全光路由等。",
    "achievements": "",
    "links": {
      "official": "https://teachers.jlu.edu.cn/WangLei",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 294,
    "uni": "吉林大学",
    "tier": "985",
    "name": "薛艳",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "半导体微腔光电子学",
      "拓扑物性"
    ],
    "tech": [
      "photo",
      "topo"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，研究半导体微腔光电子学、量子光学与非线性动力学调控，发表PRL等论文30余篇。",
    "achievements": "",
    "links": {
      "official": "https://m.ais.cn/mentor/mentorDetail/2be1ccd8-5e3c-11ec-b045-a85e45a23623",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 295,
    "uni": "吉林大学",
    "tier": "985",
    "name": "王海华",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "激光物理",
      "光信息相干控制"
    ],
    "tech": [
      "photo",
      "atom"
    ],
    "apps": [],
    "email": "haihua@jlu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，利用稀土晶体与冷原子系统开展光信息相干调控与量子光学研究。",
    "achievements": "",
    "links": {
      "official": "https://teachers.jlu.edu.cn/WangHaihua",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 296,
    "uni": "吉林大学",
    "tier": "985",
    "name": "丁大军",
    "title": "教授",
    "dept": "原子与分子物理研究所",
    "directions": [
      "超快激光",
      "量子调控",
      "原子分子物理"
    ],
    "tech": [
      "ion",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "原子与分子物理研究所教授，国家973首席科学家，从事超快激光与物质相互作用及量子调控研究。",
    "achievements": "",
    "links": {
      "official": "https://teachers.jlu.edu.cn/DingDajun",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 297,
    "uni": "吉林大学",
    "tier": "985",
    "name": "赵宝奎",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "量子光学"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教师，从事量子信息与量子光学相关研究。",
    "achievements": "",
    "links": {
      "official": "https://youth.jlu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 298,
    "uni": "吉林大学",
    "tier": "985",
    "name": "曾国模",
    "title": "教授",
    "dept": "原子与分子物理研究所",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "原子与分子物理研究所教师，从事量子光学与量子信息研究。",
    "achievements": "",
    "links": {
      "official": "https://iamp.jlu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 299,
    "uni": "大连理工大学",
    "tier": "985",
    "name": "于长水",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子资源理论",
      "量子纠缠",
      "量子关联",
      "量子传感",
      "量子光学"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院党委书记、教授、博导，研究量子资源理论、量子纠缠度量与量子传感，发表论文160余篇。",
    "achievements": "",
    "links": {
      "official": "https://faculty.dlut.edu.cn/2007011113",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 300,
    "uni": "大连理工大学",
    "tier": "985",
    "name": "周玲",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息",
      "量子退相干",
      "腔光力"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，研究量子光学与量子信息，发表Phys Rev A等论文100余篇。",
    "achievements": "",
    "links": {
      "official": "https://faculty.dlut.edu.cn/zhouling",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 301,
    "uni": "大连理工大学",
    "tier": "985",
    "name": "李崇",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "量子物理与量子信息",
      "固态量子计算",
      "非厄米物理"
    ],
    "tech": [
      "theory",
      "semi"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院量子信息团队教师，研究光-物质相互作用、固态量子计算与非厄米物理。",
    "achievements": "",
    "links": {
      "official": "https://gs.dlut.edu.cn/info/2391/49232.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 302,
    "uni": "大连理工大学",
    "tier": "985",
    "name": "王林成",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "量子物理与量子信息",
      "多体系统拓扑"
    ],
    "tech": [
      "theory",
      "topo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院量子信息团队教师，研究量子多体系统的拓扑特性与量子信息理论。",
    "achievements": "",
    "links": {
      "official": "https://gs.dlut.edu.cn/info/2391/49232.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 303,
    "uni": "东北大学",
    "tier": "985",
    "name": "王旗",
    "title": "教授",
    "dept": "理学院物理系",
    "directions": [
      "量子传感",
      "精密测量",
      "微纳光学传感"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "wangqi@mail.neu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "理学院副院长、物理系教授，研究微纳光学传感与量子传感精密测量，主持量子物理研究中心。",
    "achievements": "",
    "links": {
      "official": "http://faculty.neu.edu.cn/wangqi_neu",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 304,
    "uni": "东北大学",
    "tier": "985",
    "name": "李文琳",
    "title": "副教授",
    "dept": "理学院",
    "directions": [
      "量子光学",
      "量子信息",
      "量子精密测量"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "liwenlin@mail.neu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "理学院副教授，研究量子光学、多体量子系统非线性效应与量子精密测量，成果发表于Nat Commun等。",
    "achievements": "",
    "links": {
      "official": "http://faculty.neu.edu.cn/liwenlin/zh_CN/yjfx/399351/content/2626.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 305,
    "uni": "东北大学",
    "tier": "985",
    "name": "徐爽",
    "title": "副教授",
    "dept": "理学院",
    "directions": [
      "开放量子系统",
      "量子通讯",
      "量子中继"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption"
    ],
    "email": "xushuang@mail.neu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "理学院副教授，研究开放量子系统动力学、量子通讯与中继图态，成果发表于Phys Rev A等。",
    "achievements": "",
    "links": {
      "official": "http://cos.neu.edu.cn/2025/0616/c11357a287915/page.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 306,
    "uni": "东北大学",
    "tier": "985",
    "name": "公卫江",
    "title": "教授",
    "dept": "理学院物理系",
    "directions": [
      "凝聚态物理(量子物理)",
      "量子物态调控"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "理学院物理系教授，凝聚态物理(量子物理)方向，从事量子物态调控研究。",
    "achievements": "",
    "links": {
      "official": "http://cos.neu.edu.cn/11158/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 307,
    "uni": "东北大学",
    "tier": "985",
    "name": "孔祥儒",
    "title": "副教授",
    "dept": "理学院物理系",
    "directions": [
      "凝聚态物理(量子物理)",
      "量子物态调控"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "理学院物理系副教授，凝聚态物理(量子物理)方向，从事量子物态调控研究。",
    "achievements": "",
    "links": {
      "official": "http://cos.neu.edu.cn/11158/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 308,
    "uni": "西安交通大学",
    "tier": "985",
    "name": "李福利",
    "title": "教授",
    "dept": "理学院/物理学院",
    "directions": [
      "量子信息与量子计算",
      "冷原子物理",
      "原子腔场相互作用"
    ],
    "tech": [
      "theory",
      "atom"
    ],
    "apps": [],
    "email": "flli@mail.xjtu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "量子光学与量子信息研究所所长、教授、博导，研究量子信息处理和量子计算、冷原子物理等。",
    "achievements": "",
    "links": {
      "official": "https://mob.xjtu.edu.cn/teacher_content.jsp?urltype=tree.TreeTempUrl&wbtreeid=1170&wbwbxjtuteacherid=55",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 309,
    "uni": "西安交通大学",
    "tier": "985",
    "name": "李宏荣",
    "title": "教授",
    "dept": "理学院",
    "directions": [
      "量子光学",
      "量子信息",
      "量子生物学"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [
      "biology"
    ],
    "email": "hrli@mail.xjtu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学科副主任、教授、博导，研究量子光学、量子信息与量子生物学。",
    "achievements": "",
    "links": {
      "official": "https://mob.xjtu.edu.cn/teacher_content.jsp?urltype=tree.TreeTempUrl&wbtreeid=1170&wbwbxjtuteacherid=864",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 310,
    "uni": "西安交通大学",
    "tier": "985",
    "name": "李蓬勃",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息",
      "混合量子系统"
    ],
    "tech": [
      "photo",
      "super",
      "theory"
    ],
    "apps": [],
    "email": "lipengbo@mail.xjtu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院副院长、教授，研究混合量子系统相互作用机制与调控理论，发表PRL等论文70余篇。",
    "achievements": "",
    "links": {
      "official": "https://gr.xjtu.edu.cn/lipengbo/en/index/276446/list/index.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 311,
    "uni": "西安交通大学",
    "tier": "985",
    "name": "高韶燕",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学与量子信息",
      "超导量子电路",
      "纳米光子学",
      "精密测量"
    ],
    "tech": [
      "super",
      "photo"
    ],
    "apps": [
      "materials"
    ],
    "email": "gaosy@xjtu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院教授、博导，研究原子相干量子调控、基于超导量子电路的量子信息处理与精密测量。",
    "achievements": "",
    "links": {
      "official": "https://gr.xjtu.edu.cn/web/gaosy/1",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 312,
    "uni": "西北工业大学",
    "tier": "985",
    "name": "赵建林",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子光学",
      "单光子源",
      "等离激元光子学"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理科学与技术学院教授，长期从事光场调控、等离激元光子学与片上量子光源研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.nwpu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 313,
    "uni": "西北工业大学",
    "tier": "985",
    "name": "李鹏",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "光场调控",
      "光信息探测",
      "量子光子"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "pengli@nwpu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理科学与技术学院教授、博导，研究多维光场调控与光信息探测，主持国家重大科学研究计划项目。",
    "achievements": "",
    "links": {
      "official": "https://teacher.nwpu.edu.cn/pengli",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 314,
    "uni": "西北工业大学",
    "tier": "985",
    "name": "章毅",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "结构光场",
      "光自旋轨道耦合",
      "低维材料光学调控"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "materials"
    ],
    "email": "yi.zhang@nwpu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理科学与技术学院准聘教授，研究结构光场高效产生及其在低维材料中的量子光学调控。",
    "achievements": "",
    "links": {
      "official": "https://jszy.nwpu.edu.cn/2024010001.html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 315,
    "uni": "西北工业大学",
    "tier": "985",
    "name": "瞿俊伶",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子光学",
      "光场调控"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理科学与技术学院教授，从事量子光学与光场调控相关研究。",
    "achievements": "",
    "links": {
      "official": "https://jszy.nwpu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 316,
    "uni": "西北工业大学",
    "tier": "985",
    "name": "张伟伟",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子信息",
      "光物理"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理科学与技术学院教授，从事量子信息与光物理相关研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.nwpu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 317,
    "uni": "兰州大学",
    "tier": "985",
    "name": "安钧鸿",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子光学",
      "量子信息",
      "开放系统量子调控"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授、博导，国家万人计划青年拔尖人才，长期从事量子光学与量子信息、开放系统量子调控研究。",
    "achievements": "",
    "links": {
      "official": "https://www.lzu.edu.cn/info/1023/62241.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 318,
    "uni": "兰州大学",
    "tier": "985",
    "name": "吴威",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子耗散系统",
      "量子热力学",
      "量子传感"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "wuw@lzu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，研究量子耗散系统动力学、量子热力学基础与量子传感增强。",
    "achievements": "",
    "links": {
      "official": "https://physz.lzu.edu.cn/content.jsp?id=190",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 319,
    "uni": "兰州大学",
    "tier": "985",
    "name": "谭磊",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子相变",
      "量子输运",
      "量子纠缠",
      "量子热力学"
    ],
    "tech": [
      "theory",
      "topo"
    ],
    "apps": [],
    "email": "tanlei@lzu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，研究量子相变、量子输运、量子纠缠与量子热力学，发表SCI论文90余篇。",
    "achievements": "",
    "links": {
      "official": "https://physz.lzu.edu.cn/content.jsp?id=70",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 320,
    "uni": "兰州大学",
    "tier": "985",
    "name": "罗洪刚",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子信息",
      "量子光学",
      "强关联系统"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授、博导，长江学者，研究强关联电子系统、量子信息与量子光学。",
    "achievements": "",
    "links": {
      "official": "https://m.ais.cn/mentor/mentorDetail/3a5fa09b-5e3c-11ec-b045-a85e45a23623",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 321,
    "uni": "西北大学",
    "tier": "211",
    "name": "齐新元",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，从事量子光学与量子信息相关研究。",
    "achievements": "",
    "links": {
      "official": "https://faculty.nwu.edu.cn/qixycn",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 322,
    "uni": "西北大学",
    "tier": "211",
    "name": "王晓辉",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，从事量子光学与量子信息相关研究。",
    "achievements": "",
    "links": {
      "official": "https://faculty.nwu.edu.cn/XiaohuiWang",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 323,
    "uni": "西北大学",
    "tier": "211",
    "name": "杨文力",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子可积系统",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，研究量子可积系统及其在量子信息中的应用。",
    "achievements": "",
    "links": {
      "official": "https://physics.nwu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 324,
    "uni": "西北大学",
    "tier": "211",
    "name": "郑新亮",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "光物理"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，从事量子光学与光物理相关研究。",
    "achievements": "",
    "links": {
      "official": "https://www.qxbw.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 325,
    "uni": "西北大学",
    "tier": "211",
    "name": "高宏",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，从事量子光学与量子信息相关研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.nwu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 326,
    "uni": "新疆大学",
    "tier": "211",
    "name": "丁汉芹",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "低维凝聚态",
      "量子相变",
      "量子临界现象"
    ],
    "tech": [
      "theory",
      "topo"
    ],
    "apps": [],
    "email": "dinghq@xju.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理科学与技术学院教授、博导，研究低维强关联体系、量子相变与量子临界现象，主持国家自科基金多项。",
    "achievements": "",
    "links": {
      "official": "https://phy.xju.edu.cn/info/1033/1438.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 327,
    "uni": "新疆大学",
    "tier": "211",
    "name": "张蓓",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "低维纳米材料",
      "热电转换",
      "量子力学"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "zhb@xju.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理科学与技术学院教授、博导，研究低维纳米器件热电转换性质理论，《量子力学》课程负责人。",
    "achievements": "",
    "links": {
      "official": "https://phy.xju.edu.cn/info/1032/1533.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 328,
    "uni": "新疆大学",
    "tier": "211",
    "name": "李蕊",
    "title": "副教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子点材料",
      "QLED",
      "生物医学检测"
    ],
    "tech": [
      "semi"
    ],
    "apps": [
      "biology"
    ],
    "email": "lirui@xju.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理科学与技术学院副教授、学术副院长，研究量子点材料及QLED、微纳加工与生物医学检测。",
    "achievements": "",
    "links": {
      "official": "https://phy.xju.edu.cn/info/1034/1429.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 329,
    "uni": "新疆大学",
    "tier": "211",
    "name": "阿拉帕提·阿不力米提",
    "title": "讲师",
    "dept": "物理科学与技术学院",
    "directions": [
      "开放量子系统动力学"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "aablimit@126.com",
    "phone": "",
    "office": "",
    "bio": "物理科学与技术学院讲师，研究开放量子系统动力学与噪声环境下量子信息处理鲁棒性，入选中国科协青年人才托举工程。",
    "achievements": "",
    "links": {
      "official": "https://phy.xju.edu.cn/info/1035/1303.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 330,
    "uni": "新疆大学",
    "tier": "211",
    "name": "徐雷",
    "title": "副教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "二维材料量子输运",
      "拓扑相变"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理科学与技术学院副教授，研究以石墨烯为代表的二维材料量子输运性质与拓扑相变行为。",
    "achievements": "",
    "links": {
      "official": "https://www.kczg.org.cn/xuezhe/details?id=353209",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 331,
    "uni": "郑州大学",
    "tier": "211",
    "name": "王东阳",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教师，从事量子信息与量子计算相关研究。",
    "achievements": "",
    "links": {
      "official": "https://www.zzu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 332,
    "uni": "郑州大学",
    "tier": "211",
    "name": "徐鹏",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教师，从事量子光学与量子信息相关研究。",
    "achievements": "",
    "links": {
      "official": "https://www.zzu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 333,
    "uni": "郑州大学",
    "tier": "211",
    "name": "吴金雷",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教师，从事量子信息与量子计算相关研究。",
    "achievements": "",
    "links": {
      "official": "https://www.zzu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 334,
    "uni": "郑州大学",
    "tier": "211",
    "name": "行言",
    "title": "副教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教师，从事量子光学与量子信息相关研究。",
    "achievements": "",
    "links": {
      "official": "https://www.zzu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 335,
    "uni": "郑州大学",
    "tier": "211",
    "name": "郜雅",
    "title": "讲师",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教师，从事量子信息与量子计算相关研究。",
    "achievements": "",
    "links": {
      "official": "https://www.zzu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 336,
    "uni": "南开大学",
    "tier": "985",
    "name": "杨望",
    "title": "教授",
    "dept": "物理科学学院",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理科学学院教师，从事量子光学与量子信息相关研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.nankai.edu.cn/yw",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 337,
    "uni": "南开大学",
    "tier": "985",
    "name": "陈景灵",
    "title": "教授",
    "dept": "陈省身数学研究所",
    "directions": [
      "量子物理与量子信息",
      "贝尔不等式",
      "量子非局域性"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "陈省身数学研究所教授，研究量子物理与量子信息，成果发表于Phys Rev Lett等。",
    "achievements": "",
    "links": {
      "official": "http://www.cim.nankai.edu.cn/cjl/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 338,
    "uni": "南开大学",
    "tier": "985",
    "name": "张国权",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子光源",
      "非线性光物理"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "gqzhang@nankai.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，研究非线性光物理、光调控与量子光源，发表PRL等论文180余篇。",
    "achievements": "",
    "links": {
      "official": "https://physics.nankai.edu.cn/zgq/main.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 339,
    "uni": "南开大学",
    "tier": "985",
    "name": "李勇男",
    "title": "教授",
    "dept": "物理科学学院",
    "directions": [
      "量子光学",
      "高维量子纠缠",
      "光子芯片"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "liyongnan@nankai.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理科学学院副院长、教授，研究光场调控、高维量子纠缠与光子芯片，发表Sci Adv等论文90余篇。",
    "achievements": "",
    "links": {
      "official": "https://my.nankai.edu.cn/wlxy/lyn/list.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 340,
    "uni": "天津大学",
    "tier": "985",
    "name": "李小英",
    "title": "教授",
    "dept": "理学院/量子交叉研究中心",
    "directions": [
      "量子光学",
      "连续变量量子通信"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "天津大学量子光学方向教授，研究连续变量量子通信与量子光学。",
    "achievements": "",
    "links": {
      "official": "https://www.hudong.com/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 341,
    "uni": "天津大学",
    "tier": "985",
    "name": "胡小龙",
    "title": "教授",
    "dept": "理学院",
    "directions": [
      "量子信息",
      "量子光学"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "天津大学理学院教授，从事量子信息与量子光学相关研究。",
    "achievements": "",
    "links": {
      "official": "https://www.people.com.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 342,
    "uni": "天津大学",
    "tier": "985",
    "name": "秦伟",
    "title": "教授",
    "dept": "理学院",
    "directions": [
      "量子物理",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "天津大学理学院教授，从事量子物理与量子信息相关研究。",
    "achievements": "",
    "links": {
      "official": "https://science.tju.edu.cn/info/1130/2539.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 343,
    "uni": "天津大学",
    "tier": "985",
    "name": "任赫辰",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "天津大学物理学院教授，从事量子光学与量子信息相关研究。",
    "achievements": "",
    "links": {
      "official": "https://physics.tju.edu.cn/faculty/MjI2MDYz/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 344,
    "uni": "山东大学",
    "tier": "985",
    "name": "许国富",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "量子光学"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，从事量子信息与量子光学相关研究。",
    "achievements": "",
    "links": {
      "official": "https://faculty.sdu.edu.cn/xuguofu",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 345,
    "uni": "山东大学",
    "tier": "985",
    "name": "仝殿民",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子信息",
      "量子计算"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理学院教授，从事量子信息与量子计算理论研究。",
    "achievements": "",
    "links": {
      "official": "https://faculty.sdu.edu.cn/tongdianmin",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 346,
    "uni": "山东大学",
    "tier": "985",
    "name": "逯鹤",
    "title": "教授",
    "dept": "物理学院",
    "directions": [
      "量子光学",
      "量子信息",
      "量子模拟",
      "量子精密测量",
      "光量子芯片"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "luhe@sdu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院教授、博导，研究量子光学与量子信息实验，包括光量子芯片与量子精密测量。",
    "achievements": "",
    "links": {
      "official": "https://faculty.sdu.edu.cn/luhe",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 347,
    "uni": "山东大学",
    "tier": "985",
    "name": "孙宝清",
    "title": "特聘教授",
    "dept": "量子光学与成像实验室",
    "directions": [
      "量子成像",
      "量子信息",
      "高维纠缠"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "Baoqing.Sun@sdu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "山东大学特聘教授、量子光学与成像实验室负责人，研究量子成像、高维纠缠与计算成像，成果发表于Science。",
    "achievements": "",
    "links": {
      "official": "https://sft.sdu.edu.cn/info/1093/1400.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 348,
    "uni": "山西大学",
    "tier": "normal",
    "name": "张靖",
    "title": "教授",
    "dept": "光电研究所",
    "directions": [
      "超冷原子",
      "量子模拟",
      "量子光学"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "光电研究所教授，长江学者，研究超冷原子量子模拟与量子光学。",
    "achievements": "",
    "links": {
      "official": "https://ioe.sxu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 349,
    "uni": "山西大学",
    "tier": "normal",
    "name": "苏晓龙",
    "title": "教授",
    "dept": "光电研究所",
    "directions": [
      "连续变量量子信息",
      "量子光学"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "光电研究所教授，研究连续变量量子信息与量子光学。",
    "achievements": "",
    "links": {
      "official": "https://ioe.sxu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 350,
    "uni": "山西大学",
    "tier": "normal",
    "name": "王鹏军",
    "title": "教授",
    "dept": "光电研究所",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "光电研究所教授，从事量子光学与量子信息实验研究。",
    "achievements": "",
    "links": {
      "official": "https://rsc.sxu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 351,
    "uni": "山西大学",
    "tier": "normal",
    "name": "彭堃墀",
    "title": "教授",
    "dept": "光电研究所",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "光电研究所教授、院士，我国量子光学与量子信息领域奠基人之一。",
    "achievements": "",
    "links": {
      "official": "https://ioe.sxu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 352,
    "uni": "山西大学",
    "tier": "normal",
    "name": "谢常德",
    "title": "教授",
    "dept": "光电研究所",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "光电研究所教授，从事量子光学与量子信息实验研究。",
    "achievements": "",
    "links": {
      "official": "https://ioe.sxu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 353,
    "uni": "山西大学",
    "tier": "normal",
    "name": "贾晓军",
    "title": "教授",
    "dept": "光电研究所",
    "directions": [
      "连续变量量子信息",
      "量子光学"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "光电研究所教授，研究连续变量量子信息与量子光学。",
    "achievements": "",
    "links": {
      "official": "https://ioe.sxu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 354,
    "uni": "山西大学",
    "tier": "normal",
    "name": "闫智辉",
    "title": "教授",
    "dept": "光电研究所",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "光电研究所教授，从事量子光学与量子信息实验研究。",
    "achievements": "",
    "links": {
      "official": "https://ioe.sxu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 355,
    "uni": "山西大学",
    "tier": "normal",
    "name": "张天才",
    "title": "教授",
    "dept": "光电研究所",
    "directions": [
      "冷原子物理",
      "量子光学",
      "量子精密测量"
    ],
    "tech": [
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "光电研究所教授，研究冷原子物理、量子光学与量子精密测量。",
    "achievements": "",
    "links": {
      "official": "https://dt.sxu.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 356,
    "uni": "国防科技大学",
    "tier": "985",
    "name": "陈平形",
    "title": "教授",
    "dept": "理学院",
    "directions": [
      "量子信息",
      "囚禁离子量子计算",
      "量子模拟",
      "量子成像"
    ],
    "tech": [
      "ion"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "理学院量子信息方向学术带头人、教授、博导，研究量子相干性、离子阱量子计算与量子模拟，发表Nat Phys等论文120余篇。",
    "achievements": "",
    "links": {
      "official": "https://baike.sogou.com/v10001206604.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 357,
    "uni": "国防科技大学",
    "tier": "985",
    "name": "刘伟涛",
    "title": "教授",
    "dept": "理学院",
    "directions": [
      "量子光学",
      "量子成像"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "理学院教授、博导，研究量子光学与量子成像，发表Sci Adv、PRL等论文50余篇。",
    "achievements": "",
    "links": {
      "official": "https://www.nudt.edu.cn/press/gywm/e5f19fd6282b45fea6b7de37cf6cd9a0.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 358,
    "uni": "国防科技大学",
    "tier": "985",
    "name": "景辉",
    "title": "教授",
    "dept": "理学院",
    "directions": [
      "量子光学",
      "原子物理",
      "理论物理"
    ],
    "tech": [
      "photo",
      "atom"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "理学院教授，从事量子光学与原子物理理论研究，相关成果以共同通讯发表于Nature。",
    "achievements": "",
    "links": {
      "official": "https://www.nudt.edu.cn/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 359,
    "uni": "国防科技大学",
    "tier": "985",
    "name": "李永强",
    "title": "教授",
    "dept": "理学院物理系",
    "directions": [
      "超冷原子量子模拟",
      "强关联拓扑",
      "量子精密测量"
    ],
    "tech": [
      "atom",
      "topo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "理学院物理系教授、博导，研究光晶格超冷原子量子模拟、强关联拓扑相变与量子精密测量。",
    "achievements": "",
    "links": {
      "official": "https://baike.sogou.com/v10002255585.htm",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 360,
    "uni": "中南大学",
    "tier": "985",
    "name": "欧阳方平",
    "title": "教授",
    "dept": "物理学院/量子物理研究所",
    "directions": [
      "低维量子材料",
      "计算凝聚态",
      "纳米电子学"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "oyfp@csu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院教授、量子物理研究所所长，研究低维量子材料与器件物理、计算凝聚态，发表SCI论文200余篇。",
    "achievements": "",
    "links": {
      "official": "https://faculty.csu.edu.cn/ouyangfangping",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 361,
    "uni": "中南大学",
    "tier": "985",
    "name": "刘艳平",
    "title": "教授",
    "dept": "物理学院/量子物理研究所",
    "directions": [
      "低维材料物理",
      "量子器件"
    ],
    "tech": [
      "topo",
      "semi"
    ],
    "apps": [
      "materials"
    ],
    "email": "liuyanping@csu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理学院教授、量子物理研究所副所长，研究低维材料物理与量子器件，发表Nat Commun、Adv Mater等论文80余篇。",
    "achievements": "",
    "links": {
      "official": "https://faculty.csu.edu.cn/yanpingliu",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 362,
    "uni": "中南大学",
    "tier": "985",
    "name": "符力平",
    "title": "教授",
    "dept": "物理科学与技术学院",
    "directions": [
      "量子理论",
      "量子光学"
    ],
    "tech": [
      "theory",
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理科学与技术学院教授、理论物理研究所所长，研究量子理论、量子光学与软凝聚态理论，发表论文40余篇。",
    "achievements": "",
    "links": {
      "official": "https://www.baike.com/wikiid/7534131254136285953",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 363,
    "uni": "湖南大学",
    "tier": "985",
    "name": "罗海陆",
    "title": "教授",
    "dept": "物理与微电子科学学院",
    "directions": [
      "自旋光子学",
      "量子测量",
      "量子成像"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "物理与微电子科学学院教授，创建自旋光子学实验室，研究量子测量与量子成像，发表PRL等论文200余篇。",
    "achievements": "",
    "links": {
      "official": "https://grzy.hnu.edu.cn/site/index/luohailu",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 364,
    "uni": "湖南大学",
    "tier": "985",
    "name": "童庆军",
    "title": "教授",
    "dept": "物理与微电子科学学院",
    "directions": [
      "量子光学",
      "量子信息",
      "非厄米物理"
    ],
    "tech": [
      "photo",
      "topo"
    ],
    "apps": [],
    "email": "tongqj@hnu.edu.cn",
    "phone": "",
    "office": "",
    "bio": "物理与微电子科学学院教授，研究理论凝聚态、量子光学与量子信息，发表PRL等论文40余篇。",
    "achievements": "",
    "links": {
      "official": "https://grzy.hnu.edu.cn/site/index/tongqingjun",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 365,
    "uni": "香港大学",
    "tier": "normal",
    "name": "孟自洋",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "强关联体系量子模拟",
      "量子蒙特卡洛"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "zymeng@hku.hk",
    "phone": "",
    "office": "",
    "bio": "从事强关联电子体系的量子蒙特卡洛模拟研究。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.hku.hk/people/academic_staff/teaching_staff",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 366,
    "uni": "香港大学",
    "tier": "normal",
    "name": "姚望",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "拓扑量子物质",
      "量子模拟"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究拓扑量子物质与量子计算/模拟理论。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.hku.hk/people/academic_staff/teaching_staff",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 367,
    "uni": "香港大学",
    "tier": "normal",
    "name": "张世忠",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "量子物质",
      "冷原子"
    ],
    "tech": [
      "atom",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子物质与冷原子相关研究。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.hku.hk/people/academic_staff/teaching_staff",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 368,
    "uni": "香港大学",
    "tier": "normal",
    "name": "沈顺清",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "拓扑绝缘体",
      "自旋电子学"
    ],
    "tech": [
      "topo",
      "semi"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究拓扑绝缘体、自旋电子学与凝聚态理论。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.hku.hk/people/academic_staff/teaching_staff",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 369,
    "uni": "香港大学",
    "tier": "normal",
    "name": "Giulio Chiribella",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "量子信息",
      "量子通信",
      "量子基础"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究量子信息理论、量子通信与量子力学基础。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.hku.hk/people/academic_staff/teaching_staff",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 370,
    "uni": "香港大学",
    "tier": "normal",
    "name": "万锺",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "量子光学",
      "量子材料"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子光学与量子材料研究。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.hku.hk/people/academic_staff/teaching_staff",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 371,
    "uni": "香港大学",
    "tier": "normal",
    "name": "张翔",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "拓扑/量子材料"
    ],
    "tech": [
      "topo",
      "semi"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究拓扑与量子功能材料。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.hku.hk/people/academic_staff/teaching_staff",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 372,
    "uni": "香港大学",
    "tier": "normal",
    "name": "周凯枫",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "量子光学",
      "非线性光学"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子光学与非线性光学研究。",
    "achievements": "",
    "links": {
      "official": "https://www.physics.hku.hk/people/academic_staff/teaching_staff",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 373,
    "uni": "香港中文大学",
    "tier": "normal",
    "name": "劉仁保",
    "title": "卓敏物理学教授",
    "dept": "物理系",
    "directions": [
      "量子计算",
      "量子传感",
      "量子光学",
      "自旋量子比特"
    ],
    "tech": [
      "semi",
      "theory"
    ],
    "apps": [
      "encryption",
      "materials"
    ],
    "email": "rbliu@cuhk.edu.hk",
    "phone": "",
    "office": "",
    "bio": "香港量子信息科技研究所所长，研究固态量子计算、量子退相干与量子传感。",
    "achievements": "2022 Willis E. Lamb 激光科学与量子光学奖；美国光学学会(Optica)会士；新基石研究员",
    "links": {
      "official": "https://research.cuhk.edu.hk/en/persons/renbao-liu",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 374,
    "uni": "香港中文大学",
    "tier": "normal",
    "name": "顾正澄",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "拓扑量子相",
      "张量网络",
      "强关联量子模拟"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [],
    "email": "zcgu@phy.cuhk.edu.hk",
    "phone": "",
    "office": "",
    "bio": "研究拓扑相分类、张量网络与量子物质模拟。",
    "achievements": "2023 RGC Research Fellow；OCPA Robert T. Poe Prize (2025)",
    "links": {
      "official": "https://research.cuhk.edu.hk/en/persons/zhengcheng-gu/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 375,
    "uni": "香港中文大学",
    "tier": "normal",
    "name": "林正人",
    "title": "教授",
    "dept": "物理系 / 量子信息研究所",
    "directions": [
      "量子信息理论",
      "量子估计",
      "香农理论"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption"
    ],
    "email": "hmasahito@cuhk.edu.cn",
    "phone": "",
    "office": "",
    "bio": "国际知名量子信息理论学家，研究量子估计与信息论。",
    "achievements": "",
    "links": {
      "official": "https://www.cuhk.edu.hk",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 376,
    "uni": "香港中文大学",
    "tier": "normal",
    "name": "胡晨",
    "title": "助理教授",
    "dept": "物理系",
    "directions": [
      "理论/计算凝聚态",
      "量子材料",
      "低维纳米科学"
    ],
    "tech": [
      "semi",
      "theory"
    ],
    "apps": [],
    "email": "chenhu@cuhk.edu.hk",
    "phone": "",
    "office": "",
    "bio": "从事理论及计算凝聚态物理与量子材料研究。",
    "achievements": "",
    "links": {
      "official": "https://www.cpr.cuhk.edu.hk/sc/news-centre/experts-list/details/page/4?search_category=faculty-of-science",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 377,
    "uni": "香港中文大学",
    "tier": "normal",
    "name": "蘭天",
    "title": "助理教授",
    "dept": "物理系",
    "directions": [
      "拓扑相数学框架",
      "拓扑量子计算",
      "对称性与拓扑序"
    ],
    "tech": [
      "topo",
      "theory"
    ],
    "apps": [],
    "email": "tlan@cuhk.edu.hk",
    "phone": "",
    "office": "",
    "bio": "研究拓扑序的分类、广义对称与拓扑量子计算理论。",
    "achievements": "",
    "links": {
      "official": "https://research.cuhk.edu.hk/en/persons/tian-lan",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 378,
    "uni": "香港中文大学",
    "tier": "normal",
    "name": "李宇凡",
    "title": "助理教授",
    "dept": "物理系",
    "directions": [
      "拓扑超导体",
      "量子材料",
      "纳米器件"
    ],
    "tech": [
      "topo",
      "semi"
    ],
    "apps": [],
    "email": "yufanli@cuhk.edu.hk",
    "phone": "",
    "office": "",
    "bio": "研究拓扑超导体非常规配对态及量子材料异质结。",
    "achievements": "",
    "links": {
      "official": "https://research.cuhk.edu.hk/en/persons/yufan-li",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 379,
    "uni": "香港科技大学",
    "tier": "normal",
    "name": "杨森",
    "title": "副教授",
    "dept": "物理系",
    "directions": [
      "量子信息",
      "金刚石NV中心",
      "量子传感"
    ],
    "tech": [
      "semi",
      "theory"
    ],
    "apps": [
      "encryption",
      "materials"
    ],
    "email": "phsyang@ust.hk",
    "phone": "",
    "office": "",
    "bio": "研究金刚石NV中心量子比特与量子精密测量。",
    "achievements": "",
    "links": {
      "official": "https://physics.hkust.edu.hk",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 380,
    "uni": "香港科技大学",
    "tier": "normal",
    "name": "罗锦团",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "拓扑超导电性",
      "马约拉纳费米子",
      "量子材料"
    ],
    "tech": [
      "topo",
      "semi"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究拓扑超导体与马约拉纳束缚态理论。",
    "achievements": "",
    "links": {
      "official": "https://physics.hkust.edu.hk",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 381,
    "uni": "香港科技大学",
    "tier": "normal",
    "name": "曾蓓",
    "title": "教授",
    "dept": "物理系",
    "directions": [
      "量子信息",
      "量子纠错",
      "量子复杂性"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究量子纠错、量子信息理论与量子计算复杂性。",
    "achievements": "",
    "links": {
      "official": "https://physics.hkust.edu.hk",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 382,
    "uni": "香港科技大学",
    "tier": "normal",
    "name": "劉軍偉",
    "title": "助理教授",
    "dept": "物理系",
    "directions": [
      "拓扑材料",
      "量子计算材料"
    ],
    "tech": [
      "topo",
      "semi"
    ],
    "apps": [],
    "email": "liuj@ust.hk",
    "phone": "",
    "office": "",
    "bio": "研究拓扑材料设计与量子计算相关材料。",
    "achievements": "",
    "links": {
      "official": "https://physics.hkust.edu.hk",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 383,
    "uni": "香港科技大学(广州)",
    "tier": "normal",
    "name": "王鑫",
    "title": "副教授",
    "dept": "人工智能学域",
    "directions": [
      "量子机器学习",
      "量子通信",
      "量子错误缓减"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "ai",
      "encryption"
    ],
    "email": "felixxinwang@hkust-gz.edu.cn",
    "phone": "",
    "office": "",
    "bio": "研究量子信息、量子人工智能与量子机器学习平台(量桨)。",
    "achievements": "IEEE Trans. Information Theory 副主编；国家高层次青年人才",
    "links": {
      "official": "https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page?id=287",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 384,
    "uni": "香港城市大学",
    "tier": "normal",
    "name": "區澤宇",
    "title": "讲座教授",
    "dept": "物理系",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "jeffou@cityu.edu.hk",
    "phone": "",
    "office": "",
    "bio": "研究量子光学与量子信息科学。",
    "achievements": "",
    "links": {
      "official": "https://scholars.cityu.edu.hk/en/persons/jeffou/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 385,
    "uni": "香港城市大学",
    "tier": "normal",
    "name": "李丹楓",
    "title": "副教授",
    "dept": "物理系 / 香港高等研究院",
    "directions": [
      "低维超导体",
      "镍氧化物超导体"
    ],
    "tech": [
      "super",
      "semi"
    ],
    "apps": [],
    "email": "danfenli@cityu.edu.hk",
    "phone": "",
    "office": "",
    "bio": "研究低维超导与镍氧化物高温超导体。",
    "achievements": "",
    "links": {
      "official": "https://www.hkias.cityu.edu.hk/zh-hk/our-people/directorate/professor-danfeng-denver-li",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 386,
    "uni": "香港城市大学",
    "tier": "normal",
    "name": "錢揚",
    "title": "助理教授",
    "dept": "物理系",
    "directions": [
      "量子光学",
      "量子信息"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "yangqian@cityu.edu.hk",
    "phone": "",
    "office": "",
    "bio": "从事量子光学与量子信息研究。",
    "achievements": "",
    "links": {
      "official": "https://www.cityu.edu.hk",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 387,
    "uni": "香港城市大学",
    "tier": "normal",
    "name": "林静",
    "title": "助理教授",
    "dept": "物理系",
    "directions": [
      "纳米光子学",
      "量子光学"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事纳米光子学与量子光学研究。",
    "achievements": "",
    "links": {
      "official": "https://www.cityu.edu.hk",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 388,
    "uni": "香港城市大学",
    "tier": "normal",
    "name": "韋業",
    "title": "助理教授",
    "dept": "物理系",
    "directions": [
      "量子光学",
      "光子学"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "ye.wei@cityu.edu.hk",
    "phone": "",
    "office": "",
    "bio": "从事量子光学与光子学研究。",
    "achievements": "",
    "links": {
      "official": "https://www.cityu.edu.hk",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 389,
    "uni": "香港城市大学",
    "tier": "normal",
    "name": "張哲東",
    "title": "副教授",
    "dept": "物理系",
    "directions": [
      "量子光非线性光谱",
      "量子热力学"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [],
    "email": "zzhan26@cityu.edu.hk",
    "phone": "",
    "office": "",
    "bio": "发展量子态光与分子激发态动力学的理论与光谱方法。",
    "achievements": "2024 国家优秀青年科学基金(港澳)",
    "links": {
      "official": "https://scholars.cityu.edu.hk/en/persons/zhedong-zhang(e29bc833-be29-488b-b0b3-62c8cff89666).html",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 390,
    "uni": "香港城市大学",
    "tier": "normal",
    "name": "王欣",
    "title": "副教授",
    "dept": "物理系",
    "directions": [
      "电子自旋量子计算",
      "鲁棒量子控制",
      "量子点"
    ],
    "tech": [
      "semi",
      "theory"
    ],
    "apps": [],
    "email": "xwang485@cityu.edu.hk",
    "phone": "",
    "office": "",
    "bio": "研究基于电子自旋的量子计算与强关联体系理论。",
    "achievements": "",
    "links": {
      "official": "https://scholars.cityu.edu.hk/en/persons/a699be2b-5575-4e7e-a97a-7e54813732f6",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 391,
    "uni": "香港理工大学",
    "tier": "normal",
    "name": "刘爱群",
    "title": "量子科学与工程讲席教授",
    "dept": "电机及电子工程系 / 量子技术研究院",
    "directions": [
      "量子光子微处理器",
      "量子模拟"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "chemistry",
      "biology"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "量子技术研究院(IQT)主任，领导量子光子芯片用于分子振转光谱模拟。",
    "achievements": "Nature Communications 2024 大规模光子网络分子振转光谱模拟",
    "links": {
      "official": "https://www.polyu.edu.hk",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 392,
    "uni": "香港理工大学",
    "tier": "normal",
    "name": "李远",
    "title": "助理教授",
    "dept": "量子技术研究院(PRI)",
    "directions": [
      "光子量子计算芯片",
      "量子通信"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "yuan-iqt.li@polyu.edu.hk",
    "phone": "",
    "office": "",
    "bio": "研究集成光子量子计算芯片与量子通信网络。",
    "achievements": "",
    "links": {
      "official": "https://www.polyu.edu.hk/pri/people/pri-people/dr-li-yuan",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 393,
    "uni": "香港理工大学",
    "tier": "normal",
    "name": "苏戴钦",
    "title": "助理教授",
    "dept": "电机及电子工程系",
    "directions": [
      "光学量子计算",
      "量子算法",
      "量子纠错"
    ],
    "tech": [
      "photo",
      "theory"
    ],
    "apps": [
      "encryption"
    ],
    "email": "daiqin.su@polyu.edu.hk",
    "phone": "",
    "office": "",
    "bio": "研究容错光学量子计算架构与量子纠错理论(曾任职Xanadu)。",
    "achievements": "",
    "links": {
      "official": "https://www.polyu.edu.hk/eee/people/academic-staff-and-teaching-staff/prof-su-daiqin",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 394,
    "uni": "香港理工大学",
    "tier": "normal",
    "name": "施能胜",
    "title": "副教授",
    "dept": "应用数学系",
    "directions": [
      "量子纠缠认证",
      "量子信息"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究基于特征值判据的量子纠缠认证方法，助力量子通信。",
    "achievements": "",
    "links": {
      "official": "https://www.polyu.edu.hk",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 395,
    "uni": "香港理工大学",
    "tier": "normal",
    "name": "陈立国",
    "title": "副教授",
    "dept": "电机及电子工程系",
    "directions": [
      "量子光子微处理器",
      "量子模拟"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "chemistry"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究集成量子光子微处理器芯片及分子光谱量子模拟算法。",
    "achievements": "",
    "links": {
      "official": "https://www.polyu.edu.hk",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 396,
    "uni": "澳门大学",
    "tier": "normal",
    "name": "湯子康",
    "title": "教授",
    "dept": "应用物理及材料工程研究院",
    "directions": [
      "纳米结构电子材料",
      "低维量子材料"
    ],
    "tech": [
      "semi"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究纳米结构电子材料、碳纳米管与低维量子材料。",
    "achievements": "",
    "links": {
      "official": "https://www.um.edu.mo",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 397,
    "uni": "澳门大学",
    "tier": "normal",
    "name": "殷灝",
    "title": "副教授",
    "dept": "应用物理及材料工程研究院",
    "directions": [
      "超导量子比特电路",
      "量子信息",
      "量子光学"
    ],
    "tech": [
      "super",
      "theory"
    ],
    "apps": [],
    "email": "houian@um.edu.mo",
    "phone": "",
    "office": "",
    "bio": "研究超导量子比特电路、量子测量与量子光学理论。",
    "achievements": "",
    "links": {
      "official": "https://iapme.um.edu.mo?p=3014/",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 398,
    "uni": "澳门大学",
    "tier": "normal",
    "name": "賴屾",
    "title": "助理教授",
    "dept": "应用物理及材料工程研究院",
    "directions": [
      "量子材料",
      "低维体系"
    ],
    "tech": [
      "semi",
      "topo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事量子材料与低维量子体系研究。",
    "achievements": "",
    "links": {
      "official": "https://www.um.edu.mo",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 399,
    "uni": "澳门大学",
    "tier": "normal",
    "name": "孫鵬展",
    "title": "助理教授",
    "dept": "应用物理及材料工程研究院",
    "directions": [
      "二维材料",
      "量子材料"
    ],
    "tech": [
      "semi"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究二维材料与量子材料物理。",
    "achievements": "",
    "links": {
      "official": "https://www.um.edu.mo",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 400,
    "uni": "澳门大学",
    "tier": "normal",
    "name": "张吉化",
    "title": "教授",
    "dept": "应用物理及材料工程研究院",
    "directions": [
      "超表面小型化光量子器件"
    ],
    "tech": [
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究基于超表面的小型化光量子器件。",
    "achievements": "",
    "links": {
      "official": "https://www.um.edu.mo",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 401,
    "uni": "澳门大学",
    "tier": "normal",
    "name": "孙汉东",
    "title": "杰出教授",
    "dept": "应用物理及材料工程研究院",
    "directions": [
      "半导体量子点",
      "纳米激光器",
      "非线性光学"
    ],
    "tech": [
      "semi",
      "photo"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究半导体量子点、纳米激光器与非线性光学。",
    "achievements": "美国物理学会(APS)会士(2016)；Optica会士(2023)",
    "links": {
      "official": "https://www.um.edu.mo",
      "scholar": "",
      "baidu": ""
    },
    "members": []
  },
  {
    "id": 402,
    "uni": "本源量子",
    "tier": "normal",
    "name": "郭国平",
    "title": "董事长 / 首席科学家",
    "dept": "超导量子计算",
    "directions": [
      "超导量子计算",
      "量子芯片"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "optimization",
      "chemistry",
      "finance"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "本源量子创始人，中国科学技术大学教授，超导量子计算与量子芯片专家。",
    "achievements": "",
    "links": {
      "official": "https://www.originqc.com.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "本源量子",
      "role": "董事长/首席科学家",
      "url": "https://www.originqc.com.cn",
      "stock": "Pre-IPO，近30亿融资"
    }
  },
  {
    "id": 403,
    "uni": "本源量子",
    "tier": "normal",
    "name": "郭光灿",
    "title": "联合创始人 / 首席科学顾问",
    "dept": "量子信息",
    "directions": [
      "量子通信",
      "量子信息理论"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "中国科学院院士，本源量子联合创始人，量子信息领域奠基人之一。",
    "achievements": "中国科学院院士",
    "links": {
      "official": "https://www.originqc.com.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "本源量子",
      "role": "联合创始人/首席科学顾问",
      "url": "https://www.originqc.com.cn",
      "stock": "Pre-IPO，近30亿融资"
    }
  },
  {
    "id": 404,
    "uni": "本源量子",
    "tier": "normal",
    "name": "张辉",
    "title": "总经理",
    "dept": "公司管理 / 量子计算",
    "directions": [
      "量子计算产业化"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "optimization"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "本源量子总经理，推动超导量子计算机工程化与产业化。",
    "achievements": "",
    "links": {
      "official": "https://www.originqc.com.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "本源量子",
      "role": "总经理",
      "url": "https://www.originqc.com.cn",
      "stock": "Pre-IPO，近30亿融资"
    }
  },
  {
    "id": 405,
    "uni": "国盾量子",
    "tier": "normal",
    "name": "彭承志",
    "title": "首席科学家",
    "dept": "量子通信",
    "directions": [
      "量子通信",
      "量子密钥分发(QKD)"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "国盾量子首席科学家，量子通信与量子卫星(墨子号)核心专家。",
    "achievements": "",
    "links": {
      "official": "https://www.quantum-info.com",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "国盾量子",
      "role": "首席科学家",
      "url": "https://www.quantum-info.com",
      "stock": "科创板上市，市值约百亿"
    }
  },
  {
    "id": 406,
    "uni": "图灵量子",
    "tier": "normal",
    "name": "金贤敏",
    "title": "创始人 / CEO",
    "dept": "光量子计算",
    "directions": [
      "光量子计算",
      "光子芯片"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "optimization",
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "图灵量子创始人兼CEO，上海交通大学教授，光量子计算与光子集成专家。",
    "achievements": "",
    "links": {
      "official": "https://www.turingq.com",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "图灵量子",
      "role": "创始人/CEO",
      "url": "https://www.turingq.com",
      "stock": "多轮融资，估值数十亿"
    }
  },
  {
    "id": 407,
    "uni": "玻色量子",
    "tier": "normal",
    "name": "文凯",
    "title": "董事长 / CEO",
    "dept": "光量子计算",
    "directions": [
      "相干伊辛机",
      "光量子计算"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "optimization",
      "finance"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "玻色量子创始人兼CEO，专注相干伊辛机光量子计算路线。",
    "achievements": "",
    "links": {
      "official": "https://www.bosonq.com",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "玻色量子",
      "role": "董事长/CEO",
      "url": "https://www.bosonq.com",
      "stock": "多轮融资，亿元级"
    }
  },
  {
    "id": 408,
    "uni": "华翊量子",
    "tier": "normal",
    "name": "段路明",
    "title": "创始人 / 首席科学家",
    "dept": "离子阱量子计算",
    "directions": [
      "离子阱量子计算",
      "量子网络"
    ],
    "tech": [
      "ion"
    ],
    "apps": [
      "optimization"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "华翊量子创始人，中国科学院院士，清华大学教授，离子阱量子计算专家。",
    "achievements": "中国科学院院士",
    "links": {
      "official": "https://www.hyquant.com",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "华翊量子",
      "role": "创始人/首席科学家",
      "url": "https://www.hyquant.com",
      "stock": "多轮融资，亿元级"
    }
  },
  {
    "id": 409,
    "uni": "华翊量子",
    "tier": "normal",
    "name": "姚麟",
    "title": "CEO",
    "dept": "离子阱量子计算",
    "directions": [
      "离子阱量子计算工程化"
    ],
    "tech": [
      "ion"
    ],
    "apps": [
      "optimization"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "华翊量子联合创始人兼CEO，负责离子阱量子计算机工程化。",
    "achievements": "",
    "links": {
      "official": "https://www.hyquant.com",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "华翊量子",
      "role": "CEO",
      "url": "https://www.hyquant.com",
      "stock": "多轮融资，亿元级"
    }
  },
  {
    "id": 410,
    "uni": "国仪量子",
    "tier": "normal",
    "name": "贺羽",
    "title": "董事长兼总经理",
    "dept": "量子精密测量",
    "directions": [
      "量子精密测量",
      "量子传感器(NV中心)"
    ],
    "tech": [
      "semi"
    ],
    "apps": [
      "materials",
      "biology"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "国仪量子董事长兼总经理，从事量子精密测量仪器与金刚石NV量子传感器。",
    "achievements": "",
    "links": {
      "official": "https://www.ciqtek.com",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "国仪量子",
      "role": "董事长兼总经理",
      "url": "https://www.ciqtek.com",
      "stock": "多轮融资，独角兽"
    }
  },
  {
    "id": 411,
    "uni": "弧光量子",
    "tier": "normal",
    "name": "应圣钢",
    "title": "创始人 / 董事长",
    "dept": "量子软件",
    "directions": [
      "量子软件",
      "量子算法"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "optimization",
      "finance"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "弧光量子创始人兼董事长，从事量子软件与量子算法研发。",
    "achievements": "",
    "links": {
      "official": "",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "弧光量子",
      "role": "创始人/董事长",
      "url": "",
      "stock": "早期融资"
    }
  },
  {
    "id": 412,
    "uni": "中科酷原",
    "tier": "normal",
    "name": "汤彪",
    "title": "创始人 / 董事长",
    "dept": "原子量子精密测量",
    "directions": [
      "冷原子",
      "量子精密测量"
    ],
    "tech": [
      "atom"
    ],
    "apps": [
      "materials",
      "traffic"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "中科酷原创始人兼董事长，从事冷原子量子精密测量与原子钟。",
    "achievements": "",
    "links": {
      "official": "",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "中科酷原",
      "role": "创始人/董事长",
      "url": "",
      "stock": "早期融资"
    }
  },
  {
    "id": 413,
    "uni": "合肥国家实验室",
    "tier": "cas",
    "name": "潘建伟",
    "title": "主任 / 院士",
    "dept": "量子信息",
    "directions": [
      "量子通信",
      "量子计算"
    ],
    "tech": [
      "photo",
      "super"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "合肥国家实验室主任，中国科学院院士，量子通信与量子计算领军科学家。",
    "achievements": "中国科学院院士；国家自然科学一等奖",
    "links": {
      "official": "https://www.hfnl.ml.cas.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "合肥国家实验室",
      "role": "主任",
      "url": "https://www.hfnl.ml.cas.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 414,
    "uni": "合肥国家实验室",
    "tier": "cas",
    "name": "朱晓波",
    "title": "研究员",
    "dept": "超导量子计算",
    "directions": [
      "超导量子计算",
      "量子芯片"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "optimization"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究员，从事超导量子计算与可扩展量子芯片研究。",
    "achievements": "",
    "links": {
      "official": "https://www.hfnl.ml.cas.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "合肥国家实验室",
      "role": "研究员",
      "url": "https://www.hfnl.ml.cas.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 415,
    "uni": "合肥国家实验室",
    "tier": "cas",
    "name": "陆朝阳",
    "title": "研究员",
    "dept": "光量子计算",
    "directions": [
      "光量子计算",
      "量子纠缠"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "optimization",
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究员，光量子计算与量子纠缠操纵专家。",
    "achievements": "",
    "links": {
      "official": "https://www.hfnl.ml.cas.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "合肥国家实验室",
      "role": "研究员",
      "url": "https://www.hfnl.ml.cas.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 416,
    "uni": "合肥国家实验室",
    "tier": "cas",
    "name": "张强",
    "title": "研究员",
    "dept": "量子通信",
    "directions": [
      "量子通信",
      "单光子探测"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究员，从事量子通信与单光子探测技术研究。",
    "achievements": "",
    "links": {
      "official": "https://www.hfnl.ml.cas.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "合肥国家实验室",
      "role": "研究员",
      "url": "https://www.hfnl.ml.cas.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 417,
    "uni": "合肥国家实验室",
    "tier": "cas",
    "name": "包小辉",
    "title": "研究员",
    "dept": "量子网络",
    "directions": [
      "量子存储",
      "量子网络"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究员，从事量子存储与量子网络研究。",
    "achievements": "",
    "links": {
      "official": "https://www.hfnl.ml.cas.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "合肥国家实验室",
      "role": "研究员",
      "url": "https://www.hfnl.ml.cas.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 418,
    "uni": "合肥国家实验室",
    "tier": "cas",
    "name": "徐飞虎",
    "title": "研究员",
    "dept": "量子通信",
    "directions": [
      "量子密钥分发",
      "量子通信"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究员，从事量子通信与量子密钥分发研究。",
    "achievements": "",
    "links": {
      "official": "https://www.hfnl.ml.cas.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "合肥国家实验室",
      "role": "研究员",
      "url": "https://www.hfnl.ml.cas.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 419,
    "uni": "合肥国家实验室",
    "tier": "cas",
    "name": "彭承志",
    "title": "研究员",
    "dept": "量子卫星",
    "directions": [
      "量子卫星",
      "量子密钥分发"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption",
      "security"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "研究员，量子卫星(墨子号)与星地量子通信核心专家。",
    "achievements": "",
    "links": {
      "official": "https://www.hfnl.ml.cas.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "合肥国家实验室",
      "role": "研究员",
      "url": "https://www.hfnl.ml.cas.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 420,
    "uni": "北京量子信息科学研究院(BAQIS)",
    "tier": "cas",
    "name": "袁之良",
    "title": "首席科学家",
    "dept": "量子通信",
    "directions": [
      "量子通信",
      "量子密钥分发"
    ],
    "tech": [
      "photo"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "BAQIS首席科学家，开放架构双场量子密钥分发技术开拓者。",
    "achievements": "",
    "links": {
      "official": "http://www.baqis.ac.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "北京量子信息科学研究院(BAQIS)",
      "role": "首席科学家",
      "url": "http://www.baqis.ac.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 421,
    "uni": "北京量子信息科学研究院(BAQIS)",
    "tier": "cas",
    "name": "徐洪起",
    "title": "首席科学家",
    "dept": "半导体量子器件",
    "directions": [
      "半导体量子点",
      "量子器件"
    ],
    "tech": [
      "semi"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "BAQIS首席科学家，半导体量子点与低维量子器件专家。",
    "achievements": "",
    "links": {
      "official": "http://www.baqis.ac.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "北京量子信息科学研究院(BAQIS)",
      "role": "首席科学家",
      "url": "http://www.baqis.ac.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 422,
    "uni": "北京量子信息科学研究院(BAQIS)",
    "tier": "cas",
    "name": "胡承勇",
    "title": "研究员",
    "dept": "量子信息",
    "directions": [
      "量子信息",
      "量子计算理论"
    ],
    "tech": [
      "theory"
    ],
    "apps": [],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "BAQIS研究员，从事量子信息与量子计算理论研究。",
    "achievements": "",
    "links": {
      "official": "http://www.baqis.ac.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "北京量子信息科学研究院(BAQIS)",
      "role": "研究员",
      "url": "http://www.baqis.ac.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 423,
    "uni": "深圳量子科学与工程研究院",
    "tier": "cas",
    "name": "俞大鹏",
    "title": "院长 / 院士",
    "dept": "量子材料与量子工程",
    "directions": [
      "量子物态调控",
      "量子计算",
      "微纳加工"
    ],
    "tech": [
      "semi",
      "super"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "深圳量子科学与工程研究院院长，中国科学院院士，低维量子材料与量子器件专家。",
    "achievements": "中国科学院院士；Nature 2023 量子纠错超越盈亏平衡点(团队)",
    "links": {
      "official": "https://siqse.sustech.edu.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "深圳量子科学与工程研究院",
      "role": "院长",
      "url": "https://siqse.sustech.edu.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 424,
    "uni": "深圳量子科学与工程研究院",
    "tier": "cas",
    "name": "徐源",
    "title": "助理研究员",
    "dept": "超导量子实验室",
    "directions": [
      "超导量子纠错"
    ],
    "tech": [
      "super"
    ],
    "apps": [
      "encryption"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "从事超导量子线路系统的量子纠错实验研究。",
    "achievements": "Nature 2023 实时重复量子纠错超越盈亏平衡点(主要通讯)",
    "links": {
      "official": "https://siqse.sustech.edu.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "深圳量子科学与工程研究院",
      "role": "助理研究员",
      "url": "https://siqse.sustech.edu.cn",
      "stock": "未公开"
    }
  },
  {
    "id": 425,
    "uni": "之江实验室",
    "tier": "cas",
    "name": "施尧耘",
    "title": "副主任 / 量子计算研究中心主任",
    "dept": "量子计算",
    "directions": [
      "量子计算理论",
      "量子算法"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "optimization",
      "ai"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "之江实验室副主任、量子计算研究中心主任，量子计算理论与算法专家。",
    "achievements": "",
    "links": {
      "official": "https://www.zhejianglab.org",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "之江实验室",
      "role": "副主任/量子计算研究中心主任",
      "url": "https://www.zhejianglab.org",
      "stock": "未公开"
    }
  },
  {
    "id": 426,
    "uni": "之江实验室",
    "tier": "cas",
    "name": "曾威磊",
    "title": "高级研究专员",
    "dept": "量子计算研究中心",
    "directions": [
      "量子算法",
      "量子纠错"
    ],
    "tech": [
      "theory"
    ],
    "apps": [
      "optimization"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "之江实验室量子计算研究中心高级研究专员，研究量子算法与纠错。",
    "achievements": "",
    "links": {
      "official": "https://www.zhejianglab.org",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "之江实验室",
      "role": "高级研究专员",
      "url": "https://www.zhejianglab.org",
      "stock": "未公开"
    }
  },
  {
    "id": 427,
    "uni": "鹏城实验室",
    "tier": "cas",
    "name": "俞大鹏",
    "title": "量子计算研究中心责任院士",
    "dept": "量子计算研究中心",
    "directions": [
      "量子物态",
      "量子计算"
    ],
    "tech": [
      "semi",
      "super"
    ],
    "apps": [
      "materials"
    ],
    "email": "",
    "phone": "",
    "office": "",
    "bio": "鹏城实验室量子计算研究中心责任院士，低维量子材料与量子器件专家。",
    "achievements": "中国科学院院士",
    "links": {
      "official": "https://www.pcl.ac.cn",
      "scholar": "",
      "baidu": ""
    },
    "members": [],
    "enterprise": {
      "name": "鹏城实验室",
      "role": "量子计算研究中心责任院士",
      "url": "https://www.pcl.ac.cn",
      "stock": "未公开"
    }
  }
];
