# 07 股权分配和融资 Skills

本目录把行者创业系统 `07_股权分配和融资` 下的 7 本书, 蒸馏成一组可被 agent 调用的股权与融资判断 skills。

它不是法律意见、税务意见、投资建议或融资承诺。它的用途是: 当用户在创始人分股、员工激励、融资准备、投资人选择、估值稀释、Term Sheet 或股权冲突上遇到问题时, 先选对检查框架, 再列出需要专业人士复核的关键点。

## 覆盖书目

- 《穿越寒冬: 创业者的融资策略与独角兽思维》
- 《超级天使投资: 捕捉未来商业机会的行动指南》
- 《风险投资交易: 条款清单全揭秘 第2版》
- 《创业之初你不可不知的融资知识: 寻找风险投资全揭秘》
- 《给你一个亿你能干什么》
- 《一本书看透股权架构》
- 《股权战争》

## 推荐调用方式

1. 先读 [INDEX.md](./INDEX.md), 按用户问题选择 skill。
2. 如果问题是创始人、合伙人、员工之间如何分股, 优先从 `founder-control-threshold-map` 和 `control-without-ownership-design` 开始。
3. 如果问题是该不该融资、融多少钱、找谁投, 优先用 `financing-readiness-runway` 和 `investor-fit-signal-filter`。
4. 如果已经收到条款或在谈估值, 先用 `valuation-dilution-clarifier`, 再用 `term-sheet-economics-control-audit`。
5. 如果是个人想做天使投资, 使用 `angel-portfolio-discipline`。
6. 如果已经出现股东冲突或准备签重大协议, 用 `equity-conflict-pre-mortem` 做事前预演。

## 重要边界

- 不替代律师、税务师、投行、审计师或持牌投资顾问。
- 不提供证券买卖建议、项目估值结论、融资成功率承诺或具体条款可签/不可签的最终判断。
- 涉及公司法、证券监管、外汇、税务、VIE、境内外上市或股权激励规则时, 必须核验当前法规。
- 不把美国天使投资数据直接套到中国个人投资或非合格投资人场景。

## 审计入口

- 来源与去重: [source/SOURCE.md](./source/SOURCE.md)
- 分类理解: [BOOK_OVERVIEW.md](./BOOK_OVERVIEW.md)
- 候选池: [candidates/](./candidates/)
- 通过单元: [verified.md](./verified.md)
- 淘汰单元: [rejected/rejected-units.md](./rejected/rejected-units.md)
- 质量复核: [QUALITY_REVIEW.md](./QUALITY_REVIEW.md)
