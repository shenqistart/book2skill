# 质量复核

处理时间：2026-06-18

## 结构完整性

- [x] `README.md`
- [x] `BOOK_OVERVIEW.md`
- [x] `INDEX.md`
- [x] `source/SOURCE.md`
- [x] `candidates/frameworks.md`
- [x] `candidates/principles.md`
- [x] `candidates/cases.md`
- [x] `candidates/counter-examples.md`
- [x] `candidates/glossary.md`
- [x] `verified.md`
- [x] `rejected/rejected-units.md`
- [x] 11 个 skill 目录均包含 `SKILL.md` 与 `test-prompts.json`

## 书目完整性

| 范围 | 结果 |
|---|---|
| 专题 wiki 书目 | 46、47、48、49、50、51、52、54、55、56、57、58、59，共 13 本 |
| markitdown 目录 | 缺 59，56 转换失败 |
| 替代来源 | 56 使用 `extracted_texts`，59 使用 `extracted_texts` |
| 未蒸馏书 | 无 |

## Skill 覆盖

| 书 | 覆盖 skill |
|---|---|
| 46《定位》 | `mind-ladder-positioning` |
| 47《21世纪的定位》 | `mind-ladder-positioning`, `category-entry-design` |
| 48《升级定位》 | `mind-ladder-positioning`, `category-entry-design`, `brand-proof-fit-system` |
| 49《参与感》 | `participation-word-of-mouth-loop` |
| 50《超级符号就是超级创意》 | `super-symbol-memory-anchor` |
| 51《如何让他买》 | `behavior-change-lever-stack` |
| 52《影响力》 | `behavior-change-lever-stack`, `influence-defense-screen` |
| 54《疯传》 | `contagious-trigger-design` |
| 55《引爆点》 | `diffusion-tipping-diagnosis` |
| 56《很久很久以前》 | `archetype-meaning-system` |
| 57《如何让品牌直击人心》 | `archetype-meaning-system` |
| 58《文化战略》 | `cultural-era-opportunity-map` |
| 59《第四消费时代》 | `cultural-era-opportunity-map` |

## RIA-TV++ 检查

- [x] 每个 skill 有 R / I / A1 / A2 / E / B 六段。
- [x] 每个 skill 有明确触发条件和不要调用的边界。
- [x] 每个 skill 有相关 skills 关系。
- [x] 每个 `test-prompts.json` 至少包含 3 条 `should_trigger`、2 条 `should_not_trigger`、1 条 `edge_case`。
- [x] 候选池、通过池、拒绝池均保留审计轨迹。
- [x] 引文均为短引文，不保存原书全文。

## 风险记录

- 56 号 `markitdown` 文件损坏，本轮已改用更完整的 `extracted_texts`。
- 58 号源文本开头有外部广告和错题名污染，下游方法论只采用有效正文和专题 wiki 线索。
- 分类级 pack 不是逐本完整单书 pack；它优先服务“书之间关系”和“调用归类”。如后续需要，可按 `source/SOURCE.md` 拆成 13 个单书 pack。

## 本地验证

已通过：

```bash
node scripts/validate-book2skill.js 04-marketing-positioning-skills
```

结果：`Validation passed: 04-marketing-positioning-skills (11 skills)`。
