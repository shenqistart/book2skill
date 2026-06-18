# 来源与书目去重

处理时间：2026-06-18

## 分类来源

- 产品主题：`/Users/yuewang/Work/行者/understand_wiki/Topics/财务金融和法律.md`
- 小类：
  - 公司金融类
  - 法律类

## 规范书目

| 序号 | 规范书名 | 作者 | 小类 | 主源文件 | 状态 |
|---:|---|---|---|---|---|
| 77 | 创业投资法律手册：那些你在创业时应该知道的公司法知识 | 杨春宝、王成兵 | 法律类 | `/Users/yuewang/Work/行者/source_text_cache/markitdown/06_财务金融和法律/77.创业投资法律手册：那些你在创业时应该知道的公司法知识_(杨春宝，王成兵_著)-1b26f72f6a.markitdown.md` | 可用 |
| 78 | 什么是金融：哈佛商学院金融课 | 米希尔·德赛 | 公司金融类 | `/Users/yuewang/Work/行者/source_text_cache/markitdown/06_财务金融和法律/78.什么是金融：哈佛商学院金融课_((美)_米希尔•德赛)-11e681a946.markitdown.md` | 弱可用，OCR/抽取乱码，未用于原文引用 |
| 79 | 公司金融（原书第12版基础篇） | 理查德 A. 布雷利、斯图尔特 C. 迈尔斯、弗兰克林·艾伦 | 公司金融类 | `/Users/yuewang/Work/行者/source_text_cache/extracted_texts/79._公司金融_基础篇原书第12版__英_理查德A.布雷利_2017.md` | 可用 |
| 80 | 金融经济学二十五讲 | 徐高 | 公司金融类 | `/Users/yuewang/Work/行者/source_text_cache/extracted_texts/80.金融经济学二十五讲_徐高.md` | 可用 |
| 81 | 应用公司理财 | 阿斯瓦斯·达摩达兰 | 公司金融类 | `/Users/yuewang/Work/行者/source_text_cache/extracted_texts/81.应用公司理财_美_阿斯瓦斯_达摩达兰.md` | 可用；markitdown 版本为 0 行，改用 extracted_texts |

## Source Gate 说明

- `77` EPUB 的 markitdown 版本章节和问答结构清晰，作为创业法律、股权、章程和合规边界的主源。
- `79` PDF 的 extracted_texts 版本保留章节、页码和大量可读正文，作为 NPV、WACC、APV、资本结构和公司金融原则主源。
- `80` PDF 的 extracted_texts 版本保留前言和目录结构，作为均衡资产定价、无套利定价和金融摩擦的理论主源。
- `81` 的 `source_text_cache/markitdown/06_财务金融和法律/81...markitdown.md` 为 0 行，不能使用；改用 `extracted_texts/81...md`，其正文和目录可读。
- `78` 的 PDF 元数据显示 418 页，但 `pdfplumber` 抽样页仍为乱码；本轮只把它作为产品主题书目背景，不从中抽取 quote-level evidence，也不生成单独 skill。

## 去重说明

- `77`、`78` 同时存在 `manual_sources`、`obsidian_vault/Sources` 和 `markitdown` promoted 版本。`77` 选章节结构最完整的 markitdown；`78` 所有本地文本抽样均乱码，标为弱可用。
- `79`、`80`、`81` 同时存在 raw PDF、parsed chunks、understand wiki 和 extracted_texts。优先使用 extracted_texts，因为它保留更完整页码和上下文。

## 版权边界

仓库不保存原书全文。skill 中只保留短引文、章节线索和方法论重写，避免替代原书阅读。
