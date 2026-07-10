# 06 财务金融和法律 Source Gate

检查时间：2026-06-18

## 结论

`06_财务金融和法律` 共有 5 本规范书目。`77`、`79`、`80`、`81` 可用于分类级蒸馏；`78` 本地文本抽取乱码，不作为原文引用来源。

## 书目检查

| 序号 | 书名 | 检查结果 | 处理 |
|---:|---|---|---|
| 77 | 创业投资法律手册 | EPUB markitdown 可读，章节完整 | 纳入 |
| 78 | 什么是金融 | PDF 418 页，但 markitdown/pdfplumber 抽样乱码 | 记录，不引用，不生成独立 skill |
| 79 | 公司金融 | extracted_texts 可读，章节和页码可追溯 | 纳入 |
| 80 | 金融经济学二十五讲 | extracted_texts 可读，前言和目录清晰 | 纳入 |
| 81 | 应用公司理财 | markitdown 为 0 行，extracted_texts 可读 | 使用 extracted_texts 纳入 |

## `78` 抽取失败记录

- 原始文件：`/Users/yuewang/Work/行者/raw_files/78.什么是金融：哈佛商学院金融课 ((美) 米希尔•德赛).pdf`
- PDF 元数据：418 页，来源元数据包含 `Internet Archive`
- 已尝试：
  - 读取 markitdown promoted 文本：大量乱码
  - 读取 extracted_texts：大量乱码
  - 使用 bundled `pdfinfo` 检查 PDF：可读取元数据
  - 使用 bundled Python `pdfplumber` 抽样第 11、12、71、72、73、81、121、201、301 页：均为乱码
- 本轮处理：不从 `78` 抽取候选 skill，不使用其原文引文；保留在书目关系图中，并标记为后续 OCR 任务。
