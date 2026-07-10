---
name: finance-question-router
description: |
  当用户的问题混合了投资、融资、估值、分红、股权或法律风险，尚不清楚该调用哪类财务金融 skill 时使用。它负责先分流问题、列出缺失事实和后续 skill 路线，不直接给估值、投资建议或法律意见。
source_book: 《应用公司理财》阿斯瓦斯·达摩达兰；《创业投资法律手册》杨春宝、王成兵
source_chapter: 公司理财总论；创业投资法律总论
tags: [finance, corporate-finance, routing, legal-boundary]
related_skills:
  - slug: capital-budgeting-npv-discipline
    relation: dispatches-to
  - slug: risk-return-hurdle-rate
    relation: dispatches-to
  - slug: capital-structure-apv-check
    relation: dispatches-to
  - slug: valuation-assumption-triangulator
    relation: dispatches-to
  - slug: cash-distribution-policy
    relation: dispatches-to
  - slug: financial-economics-friction-test
    relation: dispatches-to
  - slug: startup-legal-capital-map
    relation: dispatches-to
---

# 财务金融法律问题分流器

## R — 原文 (Reading)

> “这三个主要问题是：1.我们要将资源投到哪里？2.我们如何为这些投资项目筹集资金？3.我们能够、应该返还多少现金给所有者？”
>
> 来源：达摩达兰《应用公司理财》公司理财总论。

## I — 方法论骨架 (Interpretation)

这个 skill 把用户混在一起的资本问题，先拆成可处理的入口。

第一，投资问题问“资源投到哪里、是否创造价值”，应进入现金流、NPV 和最低可接受收益率。
第二，融资问题问“如何筹钱、资本结构是否改变价值和风险”，应进入 WACC、APV、税盾和融资副效应。
第三，现金返还问题问“是否还有足够好的项目，现金应留存、分红还是回购”。
第四，估值问题问“现金流、增长、风险、再投资和融资假设是否一致”，不能直接跳到目标价。
第五，创业公司问题还要问“财务动作能否被章程、股权、合同、知识产权和合规文件承接”。

它的产出不是答案，而是调用路线和事实清单。

## A1 — 书中的应用 (Past Application)

### 案例 1：公司理财三问

- **问题**：经营者面对项目、融资和股利决策。
- **方法论的使用**：先把问题分到投资、融资、现金返还三类。
- **结论**：不同问题需要不同事实和指标，不能用一个估值倍数覆盖所有决策。
- **结果**：agent 可以先选路，再调用具体 skill。

### 案例 2：融资 BP 中的估值与股权

- **问题**：创业者问“这轮估值是否合理、股权给多少”。
- **方法论的使用**：先拆为业务现金流、风险门槛、融资条款、控制权和法律文件。
- **结论**：估值不是单独问题，股权安排和投资协议会改变实际经济结果。
- **结果**：后续应组合估值、资本结构和法律地图。

### 案例 3：账上现金很多是否应回购

- **问题**：公司现金充裕，股东要求返还。
- **方法论的使用**：先判断是分配问题，而不是单纯盈利或融资问题。
- **结论**：应检查好项目、自由现金流、债务约束和控制权影响。
- **结果**：转入现金返还 skill，而不是直接建议回购。

## A2 — 触发场景 (Future Trigger)

### 用户会在什么情境下需要这个 skill?

1. 用户的问题同时出现项目、融资、估值、股权、分红、合同等多个关键词。
2. 用户要求“帮我判断这个资本方案行不行”，但没有说明判断维度。
3. 用户把法律风险、财务模型和融资谈判混在一个问题里。
4. agent 不确定应调用公司金融、金融经济学还是创业法律 skill。

### 语言信号

- “这个融资方案整体靠谱吗？”
- “估值、股权、投资协议要一起怎么看？”
- “这件事是财务问题还是法律问题？”
- “我们该投、该融，还是该把现金留着？”

### 与相邻 skill 的区分

- 与 `capital-budgeting-npv-discipline` 的区别：本 skill 只分流，不计算 NPV。
- 与 `valuation-assumption-triangulator` 的区别：本 skill 判断是否进入估值审计，不审计具体假设。
- 与 `startup-legal-capital-map` 的区别：本 skill 识别法律入口，法律清单由后者展开。

## E — 可执行步骤 (Execution)

当 skill 被激活后，agent 应按以下步骤执行：

1. **复述用户问题并拆分对象**
   - 完成标准：列出项目、公司、融资、现金、股权、合同、监管等对象。

2. **归类到资本决策入口**
   - 完成标准：给出投资、融资、现金返还、估值、金融模型、法律契约中的主入口和次入口。

3. **标记缺失事实**
   - 完成标准：分别列出现金流、风险、资本结构、市场可比、法律文件、实时法规/税务数据的缺口。

4. **输出调用路线**
   - 完成标准：按 1-4 个后续 skills 排序，说明每一步为什么需要。

5. **声明边界**
   - 完成标准：明确不提供证券买卖建议、估值结论、税务筹划结论或法律意见。

## B — 边界 (Boundary)

### 不要在以下情况使用此 skill

- 用户已经明确要求某个单一 skill，例如只问 WACC 是否适用。
- 用户只是查询概念定义、历史事实或实时法律条文。
- 用户要求直接起草合同、出具法律意见、给股票目标价或收益承诺。

### 作者在书中警告的失败模式

- 把投资、融资和现金返还混成一个“好不好”的主观判断。
- 忽略股权、章程、协议和合规文件对资本动作的约束。
- 在事实不足时直接给估值或交易建议。

### 作者的盲点 / 时代局限

- 公司理财教材多以成熟资本市场为背景，早期创业公司的信息不透明和谈判权力差异更强。
- 法律手册的具体法条环境可能已经变化，实时法律问题必须另行核验。

### 容易混淆的邻近方法论

- “商业尽调清单”：本 skill 只做资本决策入口，不覆盖全部商业尽调。
- “法律风险排查”：本 skill 只标记法律入口，不替代律师审查。

## 相关 skills

- dispatches-to: `capital-budgeting-npv-discipline`
- dispatches-to: `risk-return-hurdle-rate`
- dispatches-to: `capital-structure-apv-check`
- dispatches-to: `valuation-assumption-triangulator`
- dispatches-to: `cash-distribution-policy`
- dispatches-to: `financial-economics-friction-test`
- dispatches-to: `startup-legal-capital-map`

## 审计信息

- **验证通过**：V1 ✓ / V2 ✓ / V3 ✓
- **测试通过率**：本地 validator 通过
- **蒸馏时间**：2026-06-18
