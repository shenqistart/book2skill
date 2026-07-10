# 来源与书目去重

处理时间: 2026-06-18

## 分类来源

- 产品主题: `/Users/yuewang/Work/行者/understand_wiki/Topics/股权分配和融资.md`
- 小类:
  - 内部分股
  - 外部融资
  - 股权失败案例

## 规范书目

| 序号 | 规范书名 | 作者 | 小类 | 主源文件 | 状态 |
|---:|---|---|---|---|---|
| 82 | 穿越寒冬: 创业者的融资策略与独角兽思维 | 史蒂文·霍夫曼 | 外部融资 | `/Users/yuewang/Work/行者/source_text_cache/markitdown/07_股权分配和融资/82.穿越寒冬：创业者的融资策略与独角兽思维(《让大象飞》作者的全新破冰力作)_(史蒂文·霍夫曼)-9187438050.markitdown.md` | 可用 |
| 83 | 超级天使投资: 捕捉未来商业机会的行动指南 | David S. Rose | 外部融资 | `/Users/yuewang/Work/行者/source_text_cache/markitdown/07_股权分配和融资/83.超级天使投资：捕捉未来商业机会的行动指南_(（美）罗斯（Rose,D.）)-bdfa8d0617.markitdown.md` | 可用 |
| 84 | 风险投资交易: 条款清单全揭秘 第2版 | Brad Feld, Jason Mendelson | 外部融资 | `/Users/yuewang/Work/行者/source_text_cache/extracted_texts/84.风险投资交易_条款清单全揭秘_第2版_--_美_布拉德_菲尔德_BradFeld_美_杰森_门德尔松_JasonMendelson_著.md` | markitdown 缺失, 使用 extracted_texts |
| 86 | 创业之初你不可不知的融资知识: 寻找风险投资全揭秘 | 桂曙光 | 外部融资 | `/Users/yuewang/Work/行者/source_text_cache/extracted_texts/86.创业之初你不可不知的融资知识_寻找风险投资全揭秘_桂曙光.md` | markitdown 缺失, 使用 extracted_texts |
| 87 | 给你一个亿你能干什么 | 查立 | 外部融资 | `/Users/yuewang/Work/行者/source_text_cache/markitdown/07_股权分配和融资/87.给你一个亿你能干什么_(查立)-84100207b5.markitdown.md` | 可用 |
| 88 | 一本书看透股权架构 | 李利威 | 内部分股 | `/Users/yuewang/Work/行者/source_text_cache/markitdown/07_股权分配和融资/88.一本书看透股权架构_(李利威_[李利威])-bf86712db7.markitdown.md` | 可用, 章节标题非 markdown 规范 |
| 90 | 股权战争 | 苏龙飞 | 股权失败案例 | `/Users/yuewang/Work/行者/source_text_cache/markitdown/07_股权分配和融资/90.股权战争_(苏龙飞)-f65f82fa95.markitdown.md` | 可用 |

## 未纳入说明

- `79.公司金融`、`80.金融经济学二十五讲`、`81.应用公司理财` 在本地 source cache 中存在, 但未出现在 `股权分配和融资.md` 主题页书目下。本轮为控制 scope, 不纳入 07 分类。
- 本轮输出为分类级 skill pack, 不逐本生成完整单书 pack。原因是 `07` 的用户任务重点是整理书之间关系与调用归类, 且既有 `01_经济学和大势` 已采用分类级 pack 模式。

## 去重与主源选择

- 82、83、87、88、90 有 `markitdown/07_股权分配和融资` 版本, 行数和章节结构均可用于蒸馏。
- 84、86 的 `markitdown` 目录缺失, 但 `extracted_texts` 与 `generated_ocr` 内容接近且行数充足; 选择 `extracted_texts` 作为主源。
- 84、86 的 `parsed_chunks` 版本只有数百行摘要块, 不作为主源。

## 执行偏差记录

- `book2skill` 原 SOP 要求阶段 1 使用 5 个 sub-agent 并行 extractor。当前多 agent 工具约束为只有用户明确要求 sub-agent 时才可派生, 因此本轮未派生 sub-agent。
- 为保留审计轨迹, 仍按 framework / principle / case / counter-example / glossary 五类生成候选池, 并逐条执行 V1 / V2 / V3。

## 版权边界

仓库不保存原书全文、图片或大段原文。skill 中仅保留短引文、章节线索和方法论重写, 用于私有知识库的可调用能力索引, 不替代原书阅读。
