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

### 方式 1：先读取某本书的索引

```text
请先读取 chanlun-skills/INDEX.md，了解这套 skills 的调用顺序。
然后根据我的问题，选择合适的 skill 进行分析。
```

### 方式 2：指定具体 skill

```text
请读取 chanlun-skills/chanlun-buy-sell-points/SKILL.md，
帮我判断这个位置更像二买还是三买。
要求：只输出结构条件、成立条件、失效条件，不给买卖建议。
```

### 方式 3：让 AI 学习整个仓库

```text
请学习这个 book2skill 仓库。
每本书先读对应的 README.md 和 INDEX.md。
当我的问题适合某个 skill 时，主动调用并说明调用理由。
```

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
