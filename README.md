# book2skill — 经典书籍 AI-Agent Skills 工具箱

> 从经典书籍中蒸馏 AI-Agent 可调用的 Skills，让知识从“读过”变成“遇到问题时能用”。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Built with cangjie-skill](https://img.shields.io/badge/Built%20with-cangjie--skill-green.svg)](https://github.com/kangarooking/cangjie-skill)

---

## 项目简介

**book2skill** 是一个面向多本书的 AI-Agent Skills 集合仓库。

它参考 [cangjie-skill](https://github.com/kangarooking/cangjie-skill) 的 book2skill / RIA-TV++ 方法论，把书中的方法论、框架、原则、概念体系和使用边界拆成可调用的 skill pack。

核心理念：

1. **不是书摘** — 不把整本书压缩成摘要，而是提炼可执行方法。
2. **不是角色扮演** — 不模仿作者语气，而是复用书中的方法论。
3. **不是一次性阅读** — 每个 skill 都有触发场景、执行步骤、边界和测试用例。

---

## 现有 Skills 一览

### 《缠论》Skills（5 个核心模块）

**来源**：《缠论》/《缠中说禅教你炒股票》公开章节。

**解决问题**：走势结构标注、中枢定位、背驰诊断、三类买卖点识别、多级别情景推演。

**特色**：把复杂的缠论术语拆成可执行步骤，并显式保留“不确认、不建议、需补数据”的边界。

| 你的问题是... | 推荐使用 |
|---|---|
| 这段走势该怎么按缠论画分型、笔、线段？ | [`chanlun-structure-parser`](./chanlun-skills/chanlun-structure-parser/SKILL.md) |
| 这里是中枢延伸、新中枢，还是级别扩张？ | [`chanlun-zhongshu-mapper`](./chanlun-skills/chanlun-zhongshu-mapper/SKILL.md) |
| MACD 柱缩短，这算不算背驰？ | [`chanlun-divergence-diagnosis`](./chanlun-skills/chanlun-divergence-diagnosis/SKILL.md) |
| 这里更像二买还是三买？ | [`chanlun-buy-sell-points`](./chanlun-skills/chanlun-buy-sell-points/SKILL.md) |
| 小级别背驰和大级别中枢冲突，后面怎么做预案？ | [`chanlun-multi-level-scenario`](./chanlun-skills/chanlun-multi-level-scenario/SKILL.md) |

进入 skill pack：[chanlun-skills](./chanlun-skills/)

### 《茶经》Skills（6 个核心模块）

**来源**：陆羽《茶经》公版文本，源文件保留于 [chajing-skill/source/chajing.md](./chajing-skill/source/chajing.md)。

**解决问题**：茶叶品质判断、制茶流程检查、器具配置、水火煮茶法、品饮场景安排、场景化简化取舍。

**特色**：把《茶经》从古籍文本转成可调用的茶事方法论，同时保留源文件和来源说明，方便审计。

| 你的问题是... | 推荐使用 |
|---|---|
| 这段茶样描述按《茶经》怎么看？ | [`tea-quality-diagnosis`](./chajing-skill/tea-quality-diagnosis/SKILL.md) |
| 采、蒸、捣、拍、焙、穿、封流程怎么检查？ | [`tea-processing-workflow`](./chajing-skill/tea-processing-workflow/SKILL.md) |
| 《茶经》里的器具如何按功能配置？ | [`tool-vessel-system`](./chajing-skill/tool-vessel-system/SKILL.md) |
| 如何按水、火、沸候、投茶设计煮茶流程？ | [`water-fire-brewing-method`](./chajing-skill/water-fire-brewing-method/SKILL.md) |
| 几人品饮、几盏、如何分茶？ | [`serving-tasting-context`](./chajing-skill/serving-tasting-context/SKILL.md) |
| 户外或课堂演示时哪些器具/步骤可以省？ | [`contextual-simplification`](./chajing-skill/contextual-simplification/SKILL.md) |

进入 skill pack：[chajing-skill](./chajing-skill/)

### `01_经济学和大势` Skills（8 个分类级模块）

**来源**：行者创业系统读书产品中 `01_经济学和大势` 分类，覆盖曼昆、徐高、黄奇帆、沃尔克/行天丰雄、伯南克、布林德、格林斯潘/伍尔德里奇、Joe Studwell、吴晓波等书。

**解决问题**：基础经济学取舍、市场政策归宿、中国宏观约束、货币制度、金融危机复盘、产业政策纪律、中国改革路径、长期经济活力判断。

**特色**：这是一个多书分类级 skill pack，不替代单书阅读；重点整理书之间关系，帮助 agent 按问题选择合适的经济学和大势分析框架。

| 你的问题是... | 推荐使用 |
|---|---|
| 这个选择、政策或资源投入值不值？ | [`scarcity-incentive-lens`](./01-economics-and-trends-skills/scarcity-incentive-lens/SKILL.md) |
| 限价、税、补贴、抽佣最后影响谁？ | [`market-policy-incidence`](./01-economics-and-trends-skills/market-policy-incidence/SKILL.md) |
| 中国宏观问题该先看哪些约束？ | [`macro-constraint-map`](./01-economics-and-trends-skills/macro-constraint-map/SKILL.md) |
| 央行、通胀、QE、汇率制度如何理解？ | [`monetary-regime-map`](./01-economics-and-trends-skills/monetary-regime-map/SKILL.md) |
| 泡沫、杠杆、监管会不会形成危机链条？ | [`financial-crisis-forensics`](./01-economics-and-trends-skills/financial-crisis-forensics/SKILL.md) |
| 产业政策是不是有真实纪律和退出机制？ | [`industrial-policy-discipline`](./01-economics-and-trends-skills/industrial-policy-discipline/SKILL.md) |
| 中国政策或企业变化处在哪条改革路径上？ | [`china-reform-path`](./01-economics-and-trends-skills/china-reform-path/SKILL.md) |
| 一个行业或经济体是真有长期活力吗？ | [`creative-destruction-vitality`](./01-economics-and-trends-skills/creative-destruction-vitality/SKILL.md) |

进入 skill pack：[01-economics-and-trends-skills](./01-economics-and-trends-skills/)

### `08_团队建设` Skills（7 本 / 8 个分类级模块）

**来源**：行者创业系统读书产品中 `08_团队建设` 分类，覆盖《穷查理宝典》《高效能人士的七个习惯》《金字塔原理》《创造时间》、两本 OKR 书和《奈飞文化手册》。

**解决问题**：团队重大决策防错、信任协作、每日重点执行、结构化沟通、OKR 设计与运行、自由责任文化、人才密度和角色适配。

**分类导航**：这些团队建设 skills 的书籍关系、组合方式和推荐调用边界见 [TEAM_BUILDING_SKILL_TAXONOMY.md](./TEAM_BUILDING_SKILL_TAXONOMY.md)。

| 你的问题是... | 推荐使用 |
|---|---|
| 这个团队决策会不会有盲区或失败路径？ | [`decision-checklist-lattice`](./08-team-building-skills/decision-checklist-lattice/SKILL.md) |
| 团队互相甩锅、不信任，怎么转成行动？ | [`inside-out-trust-shift`](./08-team-building-skills/inside-out-trust-shift/SKILL.md) |
| 大家很忙但重要事没人推进，今天该抓什么？ | [`daily-highlight-focus-loop`](./08-team-building-skills/daily-highlight-focus-loop/SKILL.md) |
| 战略、复盘或 OKR 材料讲不清楚？ | [`pyramid-communication-logic`](./08-team-building-skills/pyramid-communication-logic/SKILL.md) |
| OKR 像任务清单、KPI 或口号，怎么改？ | [`okr-quality-design`](./08-team-building-skills/okr-quality-design/SKILL.md) |
| OKR 定了但缺少对齐、追踪和复盘？ | [`okr-alignment-review-cadence`](./08-team-building-skills/okr-alignment-review-cadence/SKILL.md) |
| 流程太多，如何用自由、责任和坦诚替代控制？ | [`freedom-responsibility-culture`](./08-team-building-skills/freedom-responsibility-culture/SKILL.md) |
| 团队能力、岗位和未来任务不匹配怎么办？ | [`talent-density-role-fit`](./08-team-building-skills/talent-density-role-fit/SKILL.md) |

进入 skill pack：[08-team-building-skills](./08-team-building-skills/)

### 《微信背后的产品观》Skills（6 个核心模块）

**来源**：张小龙《微信背后的产品观》。原书为 2021 年出版物，本仓库不收录原文全文，仅保留方法论蒸馏与来源说明。

**解决问题**：用户与群体洞察、需求心理挖掘、场景边界设计、产品结构演化、自然增长判断、产品气质与 UI 表达。

**特色**：把微信产品观从“金句/案例”转成可调用的产品判断流程，重点保留边界：不机械套用微信、不用气质掩盖可用性、不用反 KPI 变成反数据。

| 你的问题是... | 推荐使用 |
|---|---|
| 这个产品判断真的理解用户和群体吗？ | [`human-group-sensing`](./wechat-product-philosophy-skill/human-group-sensing/SKILL.md) |
| 用户说要这个功能，背后的心理诉求是什么？ | [`demand-psychology-mining`](./wechat-product-philosophy-skill/demand-psychology-mining/SKILL.md) |
| 这个功能该做成主入口、隐藏、插件，还是不做？ | [`scenario-boundary-design`](./wechat-product-philosophy-skill/scenario-boundary-design/SKILL.md) |
| 产品是不是被功能堆砌拖垮了？ | [`product-structure-evolution`](./wechat-product-philosophy-skill/product-structure-evolution/SKILL.md) |
| 现在该推广、导流、整合或追 KPI 吗？ | [`natural-growth-judgment`](./wechat-product-philosophy-skill/natural-growth-judgment/SKILL.md) |
| 产品文案、UI 和欢迎页是否有统一气质？ | [`product-spirit-expression`](./wechat-product-philosophy-skill/product-spirit-expression/SKILL.md) |

进入 skill pack：[wechat-product-philosophy-skill](./wechat-product-philosophy-skill/)

### 03 如何做产品专题 Skills（10 本 / 53 个核心模块）

**来源**：本地 `03_如何做产品` 主题文件夹。源文本完整性记录见 [source-quality-reports/03-product-books-source-gate.md](./source-quality-reports/03-product-books-source-gate.md)，执行循环见 [PRODUCT_BOOKS_GOAL.md](./PRODUCT_BOOKS_GOAL.md)。

**解决问题**：产品定位、真需求判断、用户模型、行为习惯、体验结构、产品管理、品牌社区、零售体验、简约设计和创业产品化。

**分类导航**：这些产品类 skills 的差异、互补关系和推荐调用顺序见 [PRODUCT_SKILL_TAXONOMY.md](./PRODUCT_SKILL_TAXONOMY.md)。

**专题边界**：44《用户体验度量》本地转写残缺，未强行蒸馏；其余 10 本均保留 candidates、verified、rejected、QUALITY_REVIEW 和测试 prompts。

| 书 | Skill Pack | Skills | 适合问题 |
|---|---|---:|---|
| 《微信背后的产品观》 | [`wechat-product-philosophy-skill`](./wechat-product-philosophy-skill/) | 6 | 人性洞察、场景边界、产品结构、自然增长和产品气质 |
| 《真需求》 | [`true-demand-skill`](./true-demand-skill/) | 5 | 真需求、价值组合、共识缺口、场景匹配和商业可行性 |
| 《俞军产品方法论》 | [`yu-jun-product-methodology-skill`](./yu-jun-product-methodology-skill/) | 5 | 用户模型、用户价值公式、效用成本、交易模型和决策偏差 |
| 《鞋狗》 | [`shoe-dog-product-building-skill`](./shoe-dog-product-building-skill/) | 5 | 一线验证、运动员反馈、品牌运动、现金流纪律和供应风险 |
| 《Little Black Stretchy Pants》 | [`little-black-stretchy-pants-skill`](./little-black-stretchy-pants-skill/) | 5 | 社区扩张、垂直零售、教育型门店、质量召回和文化系统 |
| 《上瘾》 | [`hooked-habit-product-skill`](./hooked-habit-product-skill/) | 6 | 触发、行动、奖励、投入、习惯区和操纵伦理 |
| 《任天堂的体验设计》 | [`nintendo-experience-design-skill`](./nintendo-experience-design-skill/) | 4 | 直觉体验、惊喜与疲劳、故事成长和体验方法选择 |
| 《启示录》 | [`inspired-product-management-skill`](./inspired-product-management-skill/) | 5 | 机会评估、产品原则、高保真测试、特约用户和敏捷产品化 |
| 《用户体验要素》 | [`elements-of-user-experience-skill`](./elements-of-user-experience-skill/) | 6 | 五层 UX、战略、范围、结构、框架和表现层一致性 |
| 《简约至上》 | [`simple-and-usable-skill`](./simple-and-usable-skill/) | 6 | 删除、组织、隐藏、转移、主流用户和简约愿景 |

---

## 仓库目录规范

未来每本书使用一个顶层目录。当前仓库已有 `chanlun-skills/` 和 `chajing-skill/` 两种历史命名；新增书目前先确认命名，建议在 `<book-slug>-skill/` 与 `<book-slug>-skills/` 中保持项目内一致。

```text
<book-slug>-skill(s)/
```

例如：

```text
book2skill/
├── README.md
├── LICENSE
├── chanlun-skills/
│   ├── README.md
│   ├── BOOK_OVERVIEW.md
│   ├── INDEX.md
│   ├── candidates/
│   ├── rejected/
│   └── <skill-slug>/
│       ├── SKILL.md
│       └── test-prompts.json
├── chajing-skill/
│   ├── README.md
│   ├── BOOK_OVERVIEW.md
│   ├── INDEX.md
│   ├── source/
│   │   ├── chajing.md
│   │   └── SOURCE.md
│   ├── candidates/
│   ├── rejected/
│   └── <skill-slug>/
│       ├── SKILL.md
│       └── test-prompts.json
├── wechat-product-philosophy-skill/
│   ├── README.md
│   ├── BOOK_OVERVIEW.md
│   ├── INDEX.md
│   ├── source/
│   ├── candidates/
│   ├── rejected/
│   └── <skill-slug>/
│       ├── SKILL.md
│       └── test-prompts.json
└── future-book-skills/
    └── ...
```

每个单书 skill pack 应包含：

- `README.md`：面向使用者的介绍页
- `BOOK_OVERVIEW.md`：整书理解、术语、批判和应用潜力
- `INDEX.md`：skill 列表、调用顺序和关系图
- `source/`：需要保留源文本时存放原始材料与来源说明
- `candidates/`：候选方法论单元
- `rejected/`：被淘汰单元和原因
- `<skill-slug>/SKILL.md`：单个可调用 skill
- `<skill-slug>/test-prompts.json`：触发、诱饵和边界测试

---

## 如何使用

### 方式 1：直接在 GitHub 上使用

适合只是想试用，不想先 clone 仓库的用户。

1. 打开本仓库首页，先在“现有 Skills 一览”里选择一本书。
2. 进入对应的单书目录，例如 [chanlun-skills](./chanlun-skills/) 或 [chajing-skill](./chajing-skill/)。
3. 先读该书的 `README.md`，判断这套 skill pack 是否适合你的问题。
4. 再读该书的 `INDEX.md`，按推荐调用顺序选择一个或多个 skills。
5. 把具体 `SKILL.md` 链接发给 AI，并说明你的任务、输入材料和输出要求。

可直接复制这个提示词：

```text
请打开并遵循这个 GitHub skill：
https://github.com/shenqistart/book2skill/blob/main/chajing-skill/water-fire-brewing-method/SKILL.md

我的任务是：设计一次《茶经》煮茶演示。
请按 skill 的步骤输出，不要超出 skill 的边界。
```

### 方式 2：clone 到本地后使用

适合长期使用、二次修改或希望让 AI 一次读取多个文件的用户。

```bash
git clone https://github.com/shenqistart/book2skill.git
cd book2skill
```

然后在 AI 工具中让它读取本地文件：

```text
请先读取 README.md，了解这个 book2skill 仓库。
然后读取 chajing-skill/INDEX.md，根据我的问题选择合适的 skill。
如果需要多个 skills，请说明调用顺序，再分别执行。
```

### 方式 3：先读取某本书的索引

```text
请先读取 chanlun-skills/INDEX.md，了解这套 skills 的调用顺序。
然后根据我的问题，选择合适的 skill 进行分析。
```

### 方式 4：指定具体 skill

```text
请读取 chanlun-skills/chanlun-buy-sell-points/SKILL.md，
帮我判断这个位置更像二买还是三买。
要求：只输出结构条件、成立条件、失效条件，不给买卖建议。
```

### 方式 5：让 AI 学习整个仓库

```text
请学习这个 book2skill 仓库。
每本书先读对应的 README.md 和 INDEX.md。
当我的问题适合某个 skill 时，主动调用并说明调用理由。
```

### 多个 skills 如何组合使用

当问题跨越多个环节时，不要一次把所有 `SKILL.md` 都塞给 AI。推荐先读单书 `INDEX.md`，再按任务链路调用 2-4 个相关 skills。

例如，《茶经》茶事演示可以这样调用：

```text
请读取 chajing-skill/INDEX.md。
我的目标是做一次 20 分钟的《茶经》茶事演示。
请按顺序调用：
1. tool-vessel-system：列出必须器具和可替代器具。
2. water-fire-brewing-method：设计水、火、沸候、投茶流程。
3. contextual-simplification：判断课堂场景中哪些步骤可以省略。
4. serving-tasting-context：安排几人、几盏、如何分饮。

每一步都要标注依据来自哪个 skill，并说明不确定或不能现代化硬套的地方。
```

例如，《缠论》走势分析可以这样调用：

```text
请读取 chanlun-skills/INDEX.md。
我会提供一段走势数据，请按顺序调用：
1. chanlun-structure-parser：先标注分型、笔、线段。
2. chanlun-zhongshu-mapper：再定位中枢和级别关系。
3. chanlun-divergence-diagnosis：最后检查是否存在背驰条件。

只做结构分析，不输出荐股、喊单、收益承诺或具体买卖指令。
```

使用原则：

- **先选书，再选 skill**：不要跨书混用，除非你明确要做比较分析。
- **先读 `INDEX.md`，再读 `SKILL.md`**：`INDEX.md` 负责路线图，`SKILL.md` 负责执行细则。
- **一次调用少量相关 skills**：通常 1 个 skill 解决单点问题，2-4 个 skills 解决流程型问题。
- **把边界写进提示词**：金融类不做买卖建议，古籍类不直接替代现代检测、医学或商业结论。

---

## 这些 Skills 是怎么生成的？

本仓库参考 [cangjie-skill](https://github.com/kangarooking/cangjie-skill) 的 RIA-TV++ 流水线：

```text
阶段 0：整书理解        → BOOK_OVERVIEW.md
阶段 1：候选单元提取    → candidates/
阶段 1.5：三重验证筛选 → rejected/ + 通过单元
阶段 2：RIA++ 构造     → 每个 SKILL.md
阶段 3：关系链接        → INDEX.md
阶段 4：压力测试        → test-prompts.json
```

每个 skill 都应包含：

- 触发场景：什么时候应该调用
- 执行步骤：调用后怎么分析
- 边界条件：什么时候不能硬判
- 测试用例：应调用、不应调用、边界模糊场景

---

## 重要边界

- 本仓库只做方法论蒸馏和 AI-Agent skill 化，不替代原书阅读。
- 不大段复刻受版权保护的原文。
- 金融、投资、交易相关 skill 只用于分析训练和计划检查，不提供荐股、喊单、收益承诺或具体买卖指令。

## License

本仓库生成内容按 MIT License 开源使用；原始书籍、课程或材料版权归原作者及相关权利方所有。
