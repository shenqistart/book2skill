# 03 如何做产品 — book2skill Goal Loop

> Goal: 将本地 `03_如何做产品` 文件夹中可用书籍蒸馏为可调用 skill packs，并推送到 `shenqistart/book2skill`。

## 循环协议

每本书按以下循环执行，未通过不得进入下一本：

1. **Source Gate**: 检查本地文本是否完整、可读、具备目录和章节内容。
2. **Stage 0**: 生成 `BOOK_OVERVIEW.md`，包括结构、术语、批判和应用潜力。
3. **Stage 1 / 1.5**: 生成 candidates、verified、rejected，保留审计轨迹。
4. **Stage 2 / 3**: 生成每个 `SKILL.md`、`INDEX.md` 和关系图。
5. **Stage 4**: 每个 skill 生成 `test-prompts.json`，包含应触发、不应触发和边界场景。
6. **Quality Gate**: 运行结构、JSON、frontmatter、版权边界校验；通过后进入下一本。
7. **Publish Gate**: 全部通过后统一 commit、push。

## 进度

| 编号 | 书名 | 状态 | 输出目录 | 说明 |
|---|---|---|---|---|
| 34 | 微信背后的产品观 | 已复核 | `wechat-product-philosophy-skill` | 仓库已有 6 skills，已补齐质量审计 |
| 36 | 真需求 | 已蒸馏 | `true-demand-skill` | 5 skills |
| 37 | 俞军产品方法论 | 已蒸馏 | `yu-jun-product-methodology-skill` | 5 skills |
| 38 | 鞋狗 | 已蒸馏 | `shoe-dog-product-building-skill` | 5 skills |
| 39 | Little Black Stretchy Pants | 已蒸馏 | `little-black-stretchy-pants-skill` | 5 skills |
| 40 | 上瘾 | 已蒸馏 | `hooked-habit-product-skill` | 6 skills |
| 41 | 任天堂的体验设计 | 已蒸馏 | `nintendo-experience-design-skill` | 4 skills |
| 42 | 启示录 | 已蒸馏 | `inspired-product-management-skill` | 5 skills |
| 43 | 用户体验要素 | 已蒸馏 | `elements-of-user-experience-skill` | 6 skills |
| 44 | 用户体验度量 | 未蒸馏 | 无 | 源文本仅约 1935 字，转写残缺，未通过 Source Gate |
| 45 | 简约至上 | 已蒸馏 | `simple-and-usable-skill` | 6 skills |

## 审核标准

- 每本书必须有 `README.md`、`BOOK_OVERVIEW.md`、`INDEX.md`、`QUALITY_REVIEW.md`、`source/SOURCE.md`。
- 每个 skill 必须有 `SKILL.md` 和合法 `test-prompts.json`。
- 每个测试文件必须包含 `should_trigger`、`should_not_trigger`、`edge_case`。
- 不提交原书全文、图片或大段原文。
- 源文本残缺的书必须明确记录，不强行蒸馏。

更新时间：2026-06-18
