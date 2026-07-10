# 08 团队建设质量复核

处理日期：2026-06-18

## 完整性检查

- 7 本可用源文本均已登记在 `source/SOURCE.md`。
- 8 个 skill 均来自已验证候选单元，并覆盖决策、信任、执行、沟通、目标、文化、人才七类团队建设问题。
- 每个 skill 均包含 `SKILL.md` 与 `test-prompts.json`。
- `INDEX.md` 与根目录 `TEAM_BUILDING_SKILL_TAXONOMY.md` 均整理了书之间关系和调用归类。

## Source Gate

- 可蒸馏：`《穷查理宝典》`、`《高效能人士的七个习惯》`、`《金字塔原理》`、`《创造时间》`、`《OKR：源于英特尔和谷歌的目标管理利器》`、`《这就是OKR》`、`《奈飞文化手册》`。
- 未蒸馏：`《学会提问》`、`《不拘一格》`、`《黄霑创意思维课》`，原因是本轮 source cache 中没有对应源文本。

## 审核结论

本分类通过结构审核：来源可追溯、候选/验证/淘汰链条完整、skill 触发边界明确。机械校验结果以本地命令为准：

```bash
node scripts/validate-book2skill.js 08-team-building-skills
```
