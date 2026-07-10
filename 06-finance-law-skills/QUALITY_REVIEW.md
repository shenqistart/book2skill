# 06 财务金融和法律质量复核

复核时间：2026-06-18

## 范围

本次复核覆盖 `06-finance-law-skills` 分类级 skill pack。

| 项目 | 结果 |
|---|---:|
| 规范书目 | 5 |
| quote-level 可用源 | 4 |
| OCR/抽取弱可用 | 1 |
| 分类级 skills | 8 |

## Source Gate

- `77.创业投资法律手册`：通过，markitdown 文本可读。
- `79.公司金融`：通过，extracted_texts 文本可读。
- `80.金融经济学二十五讲`：通过，extracted_texts 文本可读。
- `81.应用公司理财`：通过，markitdown 为 0 行，改用 extracted_texts。
- `78.什么是金融`：未通过 quote-level gate，抽样乱码，未作为 skill 原文引用来源。

## 质量门

- [x] pack 有 `README.md`
- [x] pack 有 `BOOK_OVERVIEW.md`
- [x] pack 有 `INDEX.md`
- [x] pack 有 `source/SOURCE.md`
- [x] pack 有 candidates / verified / rejected 审计轨迹
- [x] 每个 skill 有 `SKILL.md`
- [x] 每个 skill 有合法 `test-prompts.json`
- [x] 每个测试文件包含 `should_trigger`、`should_not_trigger`、`edge_case`
- [x] 每个 skill 有 R / I / A1 / A2 / E / B / 相关 skills / 审计信息
- [x] 不保存原书全文
- [x] 不输出投资建议、法律意见或实时监管判断

## 需后续处理

- `78.什么是金融` 需要重新 OCR 或人工校文本后，才能进入单书级 book2skill 蒸馏。
- 如果用户要更细颗粒度，可把 `77` 单独拆成创业法律 pack，把 `79/81` 单独拆成公司金融/公司理财 pack。

## 结论

`06-finance-law-skills` 的分类级蒸馏结果通过结构完整性、测试 JSON、审计轨迹和版权边界校验；但 `78.什么是金融` 因源文本质量问题未完成 quote-level 蒸馏，已显式记录。

## 本地验证

已运行：

```bash
node scripts/validate-book2skill.js 06-finance-law-skills
```

结果：`Validation passed: 06-finance-law-skills (8 skills)`。
