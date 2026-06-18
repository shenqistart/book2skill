# 02_创业思维来源质量门

处理时间：2026-06-18

## 结论

- **状态**：通过
- **主题目录**：`/Users/yuewang/Work/行者/source_text_cache/markitdown/02_创业思维`
- **规范源文件项**：22 个
- **可蒸馏源文件项**：22 个
- **替代源**：`22.1` 至 `22.5` 和 `30` 的 markitdown 版本正文残缺，已改用 `/Users/yuewang/Work/行者/source_text_cache/extracted_texts` 下的本地 OCR/parsed chunks 正文
- **版权边界**：仓库不保存原书全文，只保存来源说明、短引文、方法论重写和审计轨迹

## 书目覆盖

| 范围 | 处理 |
|---|---|
| 15-21 | markitdown 正文可用，进入 skill 蒸馏 |
| 22.1-22.5 | markitdown 约 2K 字且多为元数据，改用 extracted_texts 正文 |
| 23-29 | markitdown 正文可用，进入 skill 蒸馏 |
| 30 | markitdown 仅约 1.3K 字且主要为元数据，改用 extracted_texts 正文 |
| 31.32 | 合并文件覆盖《大败局 I + II》，作为失败案例组合源 |
| 33 | markitdown 正文可用，进入 skill 蒸馏 |

## 完整性验证

本轮 skill pack 位于 [02-entrepreneurship-thinking-skills](../02-entrepreneurship-thinking-skills/)，包含：

- 分类级说明：`README.md`、`BOOK_OVERVIEW.md`、`INDEX.md`
- 来源记录：`source/SOURCE.md`
- 审计轨迹：`candidates/`、`verified.md`、`rejected/rejected-units.md`
- 可调用 skills：10 个 `SKILL.md`
- 测试 prompts：10 个 `test-prompts.json`

确定性校验命令：

```bash
node scripts/validate-book2skill.js 02-entrepreneurship-thinking-skills
```

## 风险备注

- `22.1` 至 `22.5` 与 `30` 的替代源来自本地 OCR/parsed chunks，存在 OCR 噪声；本轮只提取高层经营原则和失败机制，不依赖逐字精确引文。
- `31.32` 是合并文件，INDEX 中按失败案例组合源处理，未拆成两个独立单书 pack。
- 本轮是分类级蒸馏；如后续需要单书级深挖，应以 `source/SOURCE.md` 中规范书目为入口逐本扩展。
