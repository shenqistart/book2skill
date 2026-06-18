# 06 财务金融和法律 - Skill 分类与调用地图

> 这份文档用于回答：公司金融、金融经济学和创业法律类 skills 应该按什么顺序调用？它们之间是替代还是互补？

## 总判断

这组 skills 不是一套“估值工具箱”，而是一张资本决策地图。

- 达摩达兰问：这是投资、融资还是现金返还问题？
- 布雷利/迈尔斯/艾伦问：现金流、资本成本、资本结构和估值假设是否一致？
- 徐高问：这个金融模型的均衡、无套利或摩擦前提是否成立？
- 杨春宝/王成兵问：这个资本动作在中国公司法和创业法律环境中能不能落地？

真正的张力不在于“财务优先”还是“法律优先”，而在于：模型能解释价值，法律决定执行边界。

## 一级分类

| 分类 | 解决的问题 | 对应 skills | 典型输出 |
|---|---|---|---|
| 问题入口 | 当前问题属于哪类资本决策 | `finance-question-router` | 投资/融资/分配/估值/模型/法律入口 |
| 投资价值 | 项目是否创造价值 | `capital-budgeting-npv-discipline`, `risk-return-hurdle-rate` | 增量现金流、NPV、风险门槛 |
| 融资与估值 | 资本结构和估值假设是否一致 | `capital-structure-apv-check`, `valuation-assumption-triangulator` | WACC/APV 判断、估值假设审计 |
| 现金返还 | 分红、回购、留存是否合理 | `cash-distribution-policy` | 自由现金流和投资机会检查 |
| 模型边界 | 金融理论前提是否失效 | `financial-economics-friction-test` | 均衡/无套利/摩擦定位 |
| 法律落地 | 股权、章程、IP、投资协议风险 | `startup-legal-capital-map` | 法律风险地图和专业复核清单 |

## 推荐调用顺序

1. `finance-question-router`：把用户问题分流。
2. `capital-budgeting-npv-discipline`：若涉及项目，先看现金流和 NPV。
3. `risk-return-hurdle-rate`：为现金流匹配风险门槛。
4. `capital-structure-apv-check`：若融资方案会改变价值，检查 WACC/APV。
5. `valuation-assumption-triangulator`：若用户问估值，用一致性审计替代目标价。
6. `cash-distribution-policy`：若讨论现金去留，先问是否还有好项目。
7. `financial-economics-friction-test`：当模型和现实冲突时回查前提。
8. `startup-legal-capital-map`：融资、股权和治理方案落地前必须走法律边界检查。

## 按问题入口选择

| 你的问题 | 优先调用 | 可组合调用 |
|---|---|---|
| 不知道该用哪套财务框架 | `finance-question-router` | 其他所有 |
| 新项目、并购、设备投资是否值得做 | `capital-budgeting-npv-discipline` | `risk-return-hurdle-rate` |
| 折现率、资本成本或风险溢价怎么定 | `risk-return-hurdle-rate` | `financial-economics-friction-test` |
| 负债率、税盾、WACC 是否合理 | `capital-structure-apv-check` | `valuation-assumption-triangulator` |
| 融资 BP 或并购估值是否靠谱 | `valuation-assumption-triangulator` | `capital-budgeting-npv-discipline`, `risk-return-hurdle-rate` |
| 分红、回购、留存现金怎么判断 | `cash-distribution-policy` | `capital-budgeting-npv-discipline` |
| CAPM/无套利/风险中性模型不解释现实 | `financial-economics-friction-test` | `risk-return-hurdle-rate` |
| 创始人股权、章程、投资协议、IP 风险 | `startup-legal-capital-map` | `valuation-assumption-triangulator` |

## 主要张力与调和方式

| 张力 | 表面冲突 | 调和方式 |
|---|---|---|
| NPV vs 战略叙事 | 战略说要做，NPV 可能为负 | 先用 NPV 暴露现金流缺口，再把战略期权作为单独假设审计 |
| WACC vs APV | WACC 简洁，APV 繁琐 | 资本结构稳定用 WACC；融资副效应复杂用 APV |
| 估值模型 vs 市场倍数 | DCF 和倍数结果不同 | 用 `valuation-assumption-triangulator` 找出增长、风险和口径差异 |
| 金融模型 vs 现实摩擦 | 理论价格与市场价格不一致 | 用 `financial-economics-friction-test` 判断是套利受限、信息不对称还是模型不适用 |
| 财务效率 vs 法律合规 | 条款看似提升效率但可能无效 | 用 `startup-legal-capital-map` 先标记需要律师/税务/会计复核的点 |

## 不建议的混用方式

- 不要用估值 skill 输出买卖建议、目标价或收益承诺。
- 不要用法律 skill 直接判断合同条款有效或给诉讼建议。
- 不要在现金流缺失时强行跑 NPV 或 DCF。
- 不要在资本结构大变时机械沿用旧 WACC。
- 不要用金融理论模型掩盖数据不足、市场不可交易或法律限制。

## 最短决策树

```text
这是一个资本决策入口不明的问题吗？
  是 -> finance-question-router
  否 -> 继续

这是项目/投资是否值得做的问题吗？
  是 -> capital-budgeting-npv-discipline -> risk-return-hurdle-rate
  否 -> 继续

这是融资结构、负债率、税盾或 WACC 问题吗？
  是 -> capital-structure-apv-check
  否 -> 继续

这是估值、报价、融资 BP 或倍数比较问题吗？
  是 -> valuation-assumption-triangulator
  否 -> 继续

这是分红、回购或留存现金问题吗？
  是 -> cash-distribution-policy
  否 -> 继续

这是金融模型解释不了现实的问题吗？
  是 -> financial-economics-friction-test
  否 -> 继续

这是创业公司设立、股权、章程、IP 或投资协议问题吗？
  是 -> startup-legal-capital-map
```
