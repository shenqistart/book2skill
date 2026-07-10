# 05 增长和流量 — book2skill Goal Loop

> Goal: 将本地 `05_增长和流量` 文件夹中可用书籍蒸馏为可调用分类级 skill pack，并推送到 `shenqistart/book2skill`。

## 循环协议

每个分类按以下循环执行，未通过不得进入下一分类：

1. **Source Gate**：列出书目、去重、检查文本完整性，缺失文本必须记录。
2. **Stage 0**：生成分类级 `BOOK_OVERVIEW.md`，包括结构、术语、批判和应用潜力。
3. **Stage 1 / 1.5**：生成 candidates、verified、rejected，保留审计轨迹。
4. **Stage 2 / 3**：生成每个 `SKILL.md`、`INDEX.md`、skill 关系和书之间关系。
5. **Stage 4**：每个 skill 生成 `test-prompts.json`，包含应触发、不应触发和边界场景。
6. **Quality Gate**：运行结构、JSON、frontmatter、版权边界校验；通过后进入下一分类。
7. **Publish Gate**：仅提交本轮相关文件，推送到 `shenqistart/book2skill`。

## 进度

| 编号 | 小类 | 书 | 状态 | 输出 |
|---:|---|---|---|---|
| 61 | 流量的战略级理解 | 回头客战略 | 已蒸馏 | `repeat-customer-experience-loop` |
| 62 | 增长黑客 | 增长黑客 | 已蒸馏 | `growth-readiness-aha-gate`, `growth-experiment-operating-system` |
| 63 | 增长黑客 | 硅谷增长黑客实战笔记 | 已蒸馏 | `north-star-growth-model`, `growth-experiment-operating-system` |
| 64 | 未知 | 未发现对应文本 | 跳过 | Source Gate 记录 |
| 65 | 增长落地方法 | 精益数据分析 | 已蒸馏 | `omtm-lean-analytics-focus` |
| 66 | 增长落地方法 | 拉新 | 已蒸馏 | `bullseye-channel-selection` |
| 67 | 增长落地方法 | 关系飞轮 | 已蒸馏 | `relationship-flywheel-private-domain` |
| 68 | 增长落地方法 | 小群效应 | 已蒸馏 | `small-group-community-leverage` |
| 69 | 平台环境 | 直播电商的逻辑 | 已蒸馏 | `live-commerce-fit-map` |
| 70 | 平台环境 | 流媒体时代 | 已蒸馏 | `platform-power-shift-strategy` |

## 审核标准

- 每个分类必须有 `README.md`、`BOOK_OVERVIEW.md`、`INDEX.md`、`QUALITY_REVIEW.md`、`source/SOURCE.md`。
- 每个 skill 必须有 `SKILL.md` 和合法 `test-prompts.json`。
- 每个测试文件必须包含 `should_trigger`、`should_not_trigger`、`edge_case`。
- 必须整理书之间关系和 skill 调用顺序。
- 不提交原书全文、图片或大段原文。
- 源文本缺失或残缺必须明确记录，不强行蒸馏。

## 当前质量门

- `node scripts/validate-book2skill.js 05-growth-and-traffic-skills`：通过，10 skills。
- `64` 号书：本地主源目录缺失，已在 Source Gate 显式记录，未蒸馏。

更新时间：2026-06-18
