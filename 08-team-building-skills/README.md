# 08 团队建设 Skills

这个分类级 skill pack 来自行者创业系统读书产品中的 `08_团队建设`，覆盖 7 本本地可用源文本。

它不把团队建设理解为单一领导力技巧，而是拆成 8 个可调用能力：决策防错、信任协作、每日重点、结构化沟通、OKR 设计、OKR 运行、自由责任文化、人才密度与角色适配。

## 快速选择

| 你正在处理的问题 | 推荐 skill |
|---|---|
| 重大团队决策、战略取舍、方案风险 | [`decision-checklist-lattice`](./decision-checklist-lattice/SKILL.md) |
| 责任不清、互相甩锅、跨团队信任低 | [`inside-out-trust-shift`](./inside-out-trust-shift/SKILL.md) |
| 很忙但重要事项没有推进 | [`daily-highlight-focus-loop`](./daily-highlight-focus-loop/SKILL.md) |
| memo、复盘、目标说明讲不清楚 | [`pyramid-communication-logic`](./pyramid-communication-logic/SKILL.md) |
| OKR 像任务清单、KPI 或口号 | [`okr-quality-design`](./okr-quality-design/SKILL.md) |
| OKR 定了但缺少对齐、追踪和复盘 | [`okr-alignment-review-cadence`](./okr-alignment-review-cadence/SKILL.md) |
| 想减少审批流程、提高自治和坦诚 | [`freedom-responsibility-culture`](./freedom-responsibility-culture/SKILL.md) |
| 团队能力、岗位、人才密度不匹配 | [`talent-density-role-fit`](./talent-density-role-fit/SKILL.md) |

## 推荐组合

- **目标混乱**：先用 `okr-quality-design` 重写目标，再用 `pyramid-communication-logic` 写清楚为什么，最后用 `okr-alignment-review-cadence` 建立检查节奏。
- **执行疲劳**：先用 `daily-highlight-focus-loop` 保护每日重点，再用 `inside-out-trust-shift` 处理影响圈外的抱怨和依赖。
- **文化低信任**：先用 `inside-out-trust-shift` 找到可行动边界，再用 `freedom-responsibility-culture` 检查上下文、责任和坦诚机制。
- **人才问题**：先用 `talent-density-role-fit` 判断未来角色需求，再用 `decision-checklist-lattice` 审计偏见和误判风险。

## 文件导航

- [BOOK_OVERVIEW.md](./BOOK_OVERVIEW.md)：分类总览和书之间关系。
- [INDEX.md](./INDEX.md)：skill 调用顺序、关系图和审计入口。
- [source/SOURCE.md](./source/SOURCE.md)：源文本登记、去重和缺口说明。
- [verified.md](./verified.md)：通过三重验证的 skill 单元。
- [QUALITY_REVIEW.md](./QUALITY_REVIEW.md)：本轮审核记录。

## 验证

```bash
node scripts/validate-book2skill.js 08-team-building-skills
```
