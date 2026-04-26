# book2skill — 缠论 AI-Agent Skills

> 将《缠论》核心结构分析方法蒸馏为可调用的 AI-Agent Skills，用于走势复盘、技术分析训练和交易计划检查。

[![Built with cangjie-skill](https://img.shields.io/badge/Built%20with-cangjie--skill-green.svg)](https://github.com/kangarooking/cangjie-skill)
[![Skill Pack](https://img.shields.io/badge/Skill%20Pack-Chanlun-blue.svg)](./work/chanlun/)

---

## 项目简介

**book2skill** 当前收录一个基于 [cangjie-skill](https://github.com/kangarooking/cangjie-skill) / book2skill 方法论生成的《缠论》技能包。

它不是《缠论》原文合集，也不是荐股工具，而是把《缠论》中可复用的结构分析方法拆成 AI Agent 可以调用的 skill：

1. **先拆结构** — 处理分型、笔、线段，避免凭感觉看图。
2. **再定中枢** — 判断盘整、趋势、延伸和级别扩张。
3. **再查背驰** — 按 A-B-C 段与级别关系检查力度衰竭。
4. **最后做预案** — 判断候选买卖点类型、成立条件和失效条件。

核心原则：**只输出结构判断和观察条件，不输出买入/卖出指令。**

---

## 这套 Skills 能解决什么问题？

| 你的问题是... | 推荐使用 |
|---|---|
| 这段走势该怎么按缠论画分型、笔、线段？ | [`chanlun-structure-parser`](./work/chanlun/chanlun-structure-parser/SKILL.md) |
| 这里是中枢延伸、新中枢，还是级别扩张？ | [`chanlun-zhongshu-mapper`](./work/chanlun/chanlun-zhongshu-mapper/SKILL.md) |
| MACD 柱缩短，这算不算背驰？ | [`chanlun-divergence-diagnosis`](./work/chanlun/chanlun-divergence-diagnosis/SKILL.md) |
| 这里更像二买还是三买？ | [`chanlun-buy-sell-points`](./work/chanlun/chanlun-buy-sell-points/SKILL.md) |
| 小级别背驰和大级别中枢冲突，后面怎么做预案？ | [`chanlun-multi-level-scenario`](./work/chanlun/chanlun-multi-level-scenario/SKILL.md) |

---

## Skill Pack 一览

### 《缠论》Skills（5 个核心模块）

**来源**：《缠中说禅教你炒股票》公开章节。

**解决问题**：走势结构标注、中枢定位、背驰诊断、三类买卖点识别、多级别情景推演。

**特色**：把复杂的缠论术语拆成可执行步骤，并显式保留“不确认、不建议、需补数据”的边界。

```text
work/chanlun/
├── BOOK_OVERVIEW.md
├── INDEX.md
├── README.md
├── 使用介绍页.md
├── candidates/
├── rejected/
├── chanlun-structure-parser/
├── chanlun-zhongshu-mapper/
├── chanlun-divergence-diagnosis/
├── chanlun-buy-sell-points/
└── chanlun-multi-level-scenario/
```

进入 skill 包：[work/chanlun](./work/chanlun/)

---

## 如何使用

### 方式 1：直接让 AI 读取索引

```text
请先读取 work/chanlun/INDEX.md，了解《缠论》skill 的调用顺序。
然后根据我的走势描述，选择合适的 skill 做结构分析。
```

### 方式 2：指定具体 Skill

```text
请读取 work/chanlun/chanlun-buy-sell-points/SKILL.md，
帮我判断这个位置更像二买还是三买。
要求：只输出结构条件、成立条件、失效条件，不给买卖建议。
```

### 方式 3：按固定格式输出

```text
请使用《缠论》skill，按以下格式输出：
1. 分析级别
2. 已确认结构
3. 未确认结构
4. 中枢区间
5. 可能买卖点类型
6. 成立条件
7. 失效条件
8. 需要补充的数据
9. 风险提示
```

更多示例见：[work/chanlun/使用介绍页.md](./work/chanlun/%E4%BD%BF%E7%94%A8%E4%BB%8B%E7%BB%8D%E9%A1%B5.md)

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

每个 skill 都包含：

- 触发场景：什么时候应该调用
- 执行步骤：调用后怎么分析
- 边界条件：什么时候不能硬判
- 测试用例：应调用、不应调用、边界模糊场景

---

## 重要边界

- 本仓库仅用于技术分析学习、走势复盘和交易计划检查。
- 不提供荐股、喊单、收益承诺或具体买卖指令。
- 对真实交易，必须结合仓位、止损、交易成本、流动性和个人风险承受能力。
- 如果数据不足，正确输出应是“无法确认”，而不是强行给结论。

## License

本仓库生成内容按 MIT 风格开源使用；原始《缠论》文本版权归原作者及相关权利方所有。本仓库只保留方法论结构化重写和必要来源线索，不替代原文阅读。
