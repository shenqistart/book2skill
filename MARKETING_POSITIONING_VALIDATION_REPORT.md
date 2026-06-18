# 04 营销和定位 — Validation Report

验证时间：2026-06-18

## 范围

本次验证覆盖本地 `04_营销和定位` 专题中通过 Source Gate 的营销和定位书籍。

| 项目 | 结果 |
|---|---:|
| 专题书目 | 13 |
| 分类级 skill pack | 1 |
| 分类级 skills | 11 |
| 源文本残缺并跳过 | 0 |
| 源文本替代来源 | 2 |

## 通过的书

- 46《定位》
- 47《21世纪的定位》
- 48《升级定位》
- 49《参与感》
- 50《超级符号就是超级创意》
- 51《如何让他买》
- 52《影响力》
- 54《疯传》
- 55《引爆点》
- 56《很久很久以前》
- 57《如何让品牌直击人心》
- 58《文化战略》
- 59《第四消费时代》

## 来源异常

- 56《很久很久以前》：`markitdown` 文件损坏，改用 `extracted_texts`。
- 58《文化战略》：源文本开头有外部广告和错题名污染，已记录并只采用有效正文。
- 59《第四消费时代》：专题 wiki 列入本分类，但 `markitdown` 目录缺失，改用 `extracted_texts`。

## 质量门

- [x] pack 有 `README.md`
- [x] pack 有 `BOOK_OVERVIEW.md`
- [x] pack 有 `INDEX.md`
- [x] pack 有 `QUALITY_REVIEW.md`
- [x] pack 有 `source/SOURCE.md`
- [x] pack 有 candidates / verified / rejected 审计轨迹
- [x] 每个 skill 有 `SKILL.md`
- [x] 每个 skill 有合法 `test-prompts.json`
- [x] 每个测试文件包含 `should_trigger`、`should_not_trigger`、`edge_case`
- [x] 根目录 `README.md` 已列出 04 专题入口
- [x] 未提交原书全文或大体量源文件
- [x] 无占位或临时标记

## 本地验证命令

```bash
node scripts/validate-book2skill.js 04-marketing-positioning-skills
```

结果：

```text
Validation passed: 04-marketing-positioning-skills (11 skills)
```

## 结论

本次 `04_营销和定位` book2skill 蒸馏结果通过结构完整性、测试 JSON、审计轨迹、来源完整性和版权边界校验，可提交发布。
