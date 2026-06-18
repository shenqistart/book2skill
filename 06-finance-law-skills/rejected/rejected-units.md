# 被淘汰候选单元

## R01 `how-finance-works-intuition`

- **候选来源**：78《什么是金融：哈佛商学院金融课》
- **淘汰原因**：本地 PDF、markitdown、pdfplumber 抽样均出现大量乱码，未通过 quote-level Source Gate。
- **处理**：保留为书目背景和后续 OCR 任务，不进入独立 skill。

## R02 `mechanical-wacc-calculator`

- **淘汰原因**：容易变成公式计算器，忽略 WACC 的资本结构稳定和再平衡假设。
- **处理**：合并进 `capital-structure-apv-check`，强调先检查适用条件。

## R03 `stock-price-target-estimator`

- **淘汰原因**：可能被误用为证券目标价或买卖建议，越过金融风险边界。
- **处理**：只保留估值假设审查，进入 `valuation-assumption-triangulator`。

## R04 `legal-answer-generator`

- **淘汰原因**：会诱导 agent 直接给法律结论；法律、税务、证券监管和司法实践均具有时效性。
- **处理**：改为 `startup-legal-capital-map`，只做风险定位和待核问题清单。

## R05 `finance-theory-history-summary`

- **淘汰原因**：偏历史综述，不是独立可执行方法论。
- **处理**：作为 `financial-economics-friction-test` 的背景材料。

## R06 `dividend-clientele-theory-detail`

- **淘汰原因**：过窄，容易脱离分类级使用场景。
- **处理**：并入 `cash-distribution-policy` 的边界和案例。
