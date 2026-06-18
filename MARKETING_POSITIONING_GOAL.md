# 04 营销和定位 — book2skill Goal Loop

> Goal: 将本地 `04_营销和定位` 文件夹中可用书籍蒸馏为可调用 skill pack，整理书之间关系与调用分类，并推送到 `shenqistart/book2skill`。

## 循环协议

每个专题按以下循环执行，未通过不得发布：

1. **Source Gate**：检查专题 wiki、markitdown、extracted_texts 和替代缓存，确认书目完整、文本可读、异常源有记录。
2. **Stage 0**：生成 `BOOK_OVERVIEW.md`，包括结构、术语、批判和应用潜力。
3. **Stage 1 / 1.5**：生成 candidates、verified、rejected，保留审计轨迹。
4. **Stage 2 / 3**：生成每个 `SKILL.md`、`INDEX.md`、关系图和书间调用分类。
5. **Stage 4**：每个 skill 生成 `test-prompts.json`，包含应触发、不应触发和边界场景。
6. **Quality Gate**：运行结构、JSON、frontmatter、版权边界校验；通过后进入发布。
7. **Publish Gate**：统一 commit、push。

## 进度

| 编号 | 书名 | 状态 | 主要输出 |
|---:|---|---|---|
| 46 | 定位 | 已蒸馏 | `mind-ladder-positioning` |
| 47 | 21世纪的定位 | 已蒸馏 | `category-entry-design` |
| 48 | 升级定位 | 已蒸馏 | `brand-proof-fit-system` |
| 49 | 参与感 | 已蒸馏 | `participation-word-of-mouth-loop` |
| 50 | 超级符号就是超级创意 | 已蒸馏 | `super-symbol-memory-anchor` |
| 51 | 如何让他买 | 已蒸馏 | `behavior-change-lever-stack` |
| 52 | 影响力 | 已蒸馏 | `influence-defense-screen` |
| 54 | 疯传 | 已蒸馏 | `contagious-trigger-design` |
| 55 | 引爆点 | 已蒸馏 | `diffusion-tipping-diagnosis` |
| 56 | 很久很久以前 | 已蒸馏 | `archetype-meaning-system`，使用 extracted_texts |
| 57 | 如何让品牌直击人心 | 已蒸馏 | `archetype-meaning-system` |
| 58 | 文化战略 | 已蒸馏 | `cultural-era-opportunity-map` |
| 59 | 第四消费时代 | 已蒸馏 | `cultural-era-opportunity-map`，使用 extracted_texts |

## 审核标准

- 每个专题 pack 必须有 `README.md`、`BOOK_OVERVIEW.md`、`INDEX.md`、`QUALITY_REVIEW.md`、`source/SOURCE.md`。
- 每个 skill 必须有 `SKILL.md` 和合法 `test-prompts.json`。
- 每个测试文件必须包含 `should_trigger`、`should_not_trigger`、`edge_case`。
- 不提交原书全文、图片或大段原文。
- 源文本残缺或污染必须明确记录，不强行掩盖。

更新时间：2026-06-18
