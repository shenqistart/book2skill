# 04 营销和定位 Source Gate

处理时间：2026-06-18

## 结论

`04_营销和定位` 专题可蒸馏。专题 wiki 共列出 13 本规范书目；其中 56 号 markitdown 转换失败、59 号不在 markitdown 目录，但均找到可用 `extracted_texts` 替代来源。

## 书目检查

| 编号 | 书名 | 主源 | 行数/质量 | Source Gate |
|---:|---|---|---|---|
| 46 | 定位 | markitdown | 5746 行 | 通过 |
| 47 | 21世纪的定位 | markitdown | 4807 行 | 通过 |
| 48 | 升级定位 | markitdown | 2397 行 | 通过 |
| 49 | 参与感 | markitdown | 2528 行 | 通过 |
| 50 | 超级符号就是超级创意 | markitdown | 4384 行 | 通过 |
| 51 | 如何让他买 | markitdown | 3829 行 | 通过 |
| 52 | 影响力 | markitdown | 2563 行 | 通过 |
| 54 | 疯传 | markitdown | 2606 行 | 通过 |
| 55 | 引爆点 | markitdown | 1423 行 | 通过 |
| 56 | 很久很久以前 | extracted_texts | 11639 行 | 通过，markitdown 损坏 |
| 57 | 如何让品牌直击人心 | markitdown | 9995 行 | 通过 |
| 58 | 文化战略 | markitdown | 3880 行 | 通过，有开头污染 |
| 59 | 第四消费时代 | extracted_texts | 8663 行 | 通过，markitdown 缺失 |

## 异常处理

- 56 号 markitdown 只有 9 行且主体为空白控制符；使用 `/Users/yuewang/Work/行者/source_text_cache/extracted_texts/56.很久很久以前_以神话原型打造深植人心的品牌_美_玛格丽特_马克.md`。
- 59 号属于专题 wiki 的“如何做符合大势的品牌”小类，但不在 markitdown 目录；使用 `/Users/yuewang/Work/行者/source_text_cache/extracted_texts/59.第4消费时代_三浦展_马奈.md`。
- 58 号源文本开头混入外部书单广告和错误书名；蒸馏时只采用《文化战略》有效正文和 wiki 结构。

## 版权边界

- 仓库不保存原书全文。
- 每个 skill 仅保留短引文和章节线索。
- 方法论解释、执行步骤、边界和测试均为重写。
