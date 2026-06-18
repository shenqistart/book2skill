# 06 财务金融和法律 Skills

本目录把行者创业系统读书产品中 `06_财务金融和法律` 分类，蒸馏成一组可被 agent 调用的分析 skills。

它不是投资建议、法律意见、估值结论或合同审查服务。它的用途是：当用户面对公司财务、融资、估值、现金分配、金融理论边界或创业法律风险问题时，先选对分析框架，再把假设、现金流、风险、契约和合规边界拆清楚。

## 推荐调用方式

1. 先读 [INDEX.md](./INDEX.md)，按用户问题选择 skill。
2. 不确定问题属于投资、融资、分配、估值还是法律风险时，先用 `finance-question-router`。
3. 涉及项目是否值得做，使用 `capital-budgeting-npv-discipline`。
4. 涉及折现率、风险溢价、项目 beta、资本成本，使用 `risk-return-hurdle-rate`。
5. 涉及负债率、WACC、税盾或融资副效应，使用 `capital-structure-apv-check`。
6. 涉及公司估值、股权估值、倍数和 DCF 假设，使用 `valuation-assumption-triangulator`。
7. 涉及分红、回购、留存现金，使用 `cash-distribution-policy`。
8. 涉及资产定价、无套利、CAPM、金融摩擦和模型失效，使用 `financial-economics-friction-test`。
9. 涉及公司设立、股权、章程、知识产权、投资协议和治理风险，使用 `startup-legal-capital-map`。

## 重要边界

- 不提供证券买卖建议、收益承诺、估值结论、税务筹划结论或法律意见。
- 不把教材公式机械套到缺少现金流、市场价格、合同条款或监管事实的问题上。
- 不把海外公司金融理论直接替代中国现行法律、监管口径或司法实践。
- 涉及实时法律、税务、会计准则、证券监管和市场数据时，必须另行查证并交由专业人士复核。
- 本轮 `78.什么是金融` 本地 PDF/OCR 文本未通过 quote-level Source Gate，仅作为主题书目背景记录，未作为 skill 原文引用来源。

## 审计入口

- 来源与去重：[source/SOURCE.md](./source/SOURCE.md)
- 分类理解：[BOOK_OVERVIEW.md](./BOOK_OVERVIEW.md)
- 候选池：[candidates/](./candidates/)
- 通过单元：[verified.md](./verified.md)
- 淘汰单元：[rejected/rejected-units.md](./rejected/rejected-units.md)
- 质量复核：[QUALITY_REVIEW.md](./QUALITY_REVIEW.md)
