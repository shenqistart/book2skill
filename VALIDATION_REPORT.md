# 03 如何做产品 — Validation Report

验证时间：2026-06-18

## 范围

本次验证覆盖本地 `03_如何做产品` 文件夹中通过 Source Gate 的产品书 skill packs。

| 项目 | 结果 |
|---|---:|
| 产品主题 skill packs | 10 |
| 产品主题 skills | 53 |
| 源文本残缺并跳过 | 1 |

## 通过的书

- `wechat-product-philosophy-skill`: 6 skills
- `true-demand-skill`: 5 skills
- `yu-jun-product-methodology-skill`: 5 skills
- `shoe-dog-product-building-skill`: 5 skills
- `little-black-stretchy-pants-skill`: 5 skills
- `hooked-habit-product-skill`: 6 skills
- `nintendo-experience-design-skill`: 4 skills
- `inspired-product-management-skill`: 5 skills
- `elements-of-user-experience-skill`: 6 skills
- `simple-and-usable-skill`: 6 skills

## 未蒸馏的书

- 44《用户体验度量》：本地 markitdown 文件只有约 1935 字，主要是来源元数据和压缩包信息，不具备可读章节正文。已记录于 [source-quality-reports/03-product-books-source-gate.md](source-quality-reports/03-product-books-source-gate.md)。

## 质量门

- [x] 每个通过的 pack 有 `README.md`
- [x] 每个通过的 pack 有 `BOOK_OVERVIEW.md`
- [x] 每个通过的 pack 有 `INDEX.md`
- [x] 每个通过的 pack 有 `QUALITY_REVIEW.md`
- [x] 每个通过的 pack 有 `source/SOURCE.md`
- [x] 每个通过的 pack 有 candidates / verified / rejected 审计轨迹
- [x] 每个 skill 有 `SKILL.md`
- [x] 每个 skill 有合法 `test-prompts.json`
- [x] 每个测试文件包含 `should_trigger`、`should_not_trigger`、`edge_case`
- [x] 根目录 `README.md` 已列出所有产品主题 skill packs
- [x] 未提交原书全文或大体量源文件
- [x] 未发现 TODO、占位词或待补标记

## 结论

本次 `03_如何做产品` 可用源文本的 book2skill 蒸馏结果通过结构完整性、测试 JSON、审计轨迹和版权边界校验，可提交发布。
