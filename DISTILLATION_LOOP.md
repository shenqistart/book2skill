# book2skill 持久蒸馏循环

本文档记录本仓库后续批量蒸馏的固定循环。当前 goal 已建立，按产品主题分类逐批蒸馏；当前轮次为 `06_财务金融和法律`。

## 完成标准

一个分类可以提交和推送，必须同时满足：

1. 已完成书目去重，能说明每本书的来源文件和所属小类。
2. 已产出分类级 `BOOK_OVERVIEW.md`、`INDEX.md`、`README.md`、`source/SOURCE.md`。
3. 每个 skill 都包含 R / I / A1 / A2 / E / B 六段，并有明确 trigger 与边界。
4. 每个 skill 都有 `test-prompts.json`，且包含 `should_trigger`、`should_not_trigger`、`edge_case` 三类测试。
5. `candidates/`、`verified.md`、`rejected/` 保留审计轨迹。
6. 本地确定性校验通过：`node scripts/validate-book2skill.js <skill-pack-dir>`。
7. README 有入口，git 只提交本轮相关文件，随后推送到 `shenqistart/book2skill` 对应远端分支。

## 循环

1. **发现与去重**
   - 从产品主题目录、source cache 和 wiki 中列出书目。
   - 合并同书不同文件名、不同转换版本，选择最完整文本作为主源。
   - 对缺页、OCR 异常、只有 5 行目录的文件标记风险。

2. **阶段 0: 分类/整书理解**
   - 对单书做书级骨架；对多书分类做知识栈骨架。
   - 明确小类、书之间关系、能 skill 化与不能 skill 化的内容。
   - 记录批判与时代局限，作为每个 skill 的边界来源。

3. **阶段 1: 候选提取**
   - 分别提取框架、原则、案例、反例、术语。
   - 候选只进入 `candidates/`，不直接变成 skill。

4. **阶段 1.5: 三重验证**
   - V1: 是否有至少两个独立语境支撑。
   - V2: 是否能外推到书里没有直接讨论的新问题。
   - V3: 是否不是普通常识。
   - 未通过者写入 `rejected/`，通过者写入 `verified.md`。

5. **阶段 2: RIA++ 构造**
   - 每个 skill 只做一个方法论单元。
   - 原文引用保持短句，避免复刻原书。
   - A2 trigger 要能帮助 agent 准确调用。

6. **阶段 3: 关系与调用归类**
   - 写清 `depends-on`、`contrasts-with`、`composes-with`。
   - `INDEX.md` 必须提供按用户问题选择 skill 的路线。

7. **阶段 4: 压力测试与机械校验**
   - 写 `test-prompts.json`。
   - 跑校验脚本。
   - 失败时回炉，不做表面修补。

8. **提交、推送、继续**
   - 审核通过后提交并推送。
   - 读取下一个未完成主题分类，重复本循环。

## 当前队列

- `01_经济学和大势`: 已完成本地结构校验，已推送到 `codex/economics-trends-skills`，PR #3 处于 draft/open 且 mergeable。
- `02_创业思维`: 本轮已完成 22 个源文件项的来源质量门、10 个分类级 skills、书籍关系图、测试 prompts 和本地结构校验。
- `04_营销和定位`: 本轮执行中，已完成 13 本源文件项的来源质量门、11 个分类级 skills、书籍关系图、测试 prompts 和本地结构校验；待提交和推送。
- `06_财务金融和法律`: 本轮执行中，目标产出 8 个分类级 skills、书籍关系图、测试 prompts 和本地结构校验；`78.什么是金融` 需重新 OCR 后才能进入 quote-level 单书蒸馏。
- 下一批主题: `06_财务金融和法律` 审核通过后，从本地产品主题目录继续读取下一个未完成分类并重复本循环。
