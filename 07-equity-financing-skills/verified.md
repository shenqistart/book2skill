# Verified Units

## V01 founder-control-threshold-map

```yaml
id: F01
title: 创始人控制权阈值地图
type: framework
V1_cross_domain:
  passed: true
  evidence:
    - 《一本书看透股权架构》第1章: 34%、51%、67%、10% 等阈值
    - 《股权战争》序言和案例: 控制权旁落、董事会制约、股东战争
V2_predictive_power:
  passed: true
  novel_question: "三人合伙 40/35/25, 后续融资 20%, 哪些重大事项会有僵局?"
  derived_answer: "先按融资后表决权重算阈值, 再检查章程和董事会席位是否形成否决点。"
V3_exclusivity:
  passed: true
  why_not_common: "不是简单说大股东更强, 而是把法律阈值、公司类型和控制工具合并检查。"
```

## V02 control-without-ownership-design

```yaml
id: F02
title: 分股不分权设计
type: framework
V1_cross_domain:
  passed: true
  evidence:
    - 《一本书看透股权架构》第2章: 7 种控制权设计工具
    - 海康威视、天地数码、欧派家居案例: 员工直接持股与平台持股差异
V2_predictive_power:
  passed: true
  novel_question: "要给 30 名核心员工股权激励, 但不想每次重大事项都逐一签字, 怎么设计?"
  derived_answer: "优先评估持股平台、委托投票或章程约束, 同时检查税负和退出。"
V3_exclusivity:
  passed: true
  why_not_common: "普通建议会说给期权; 本单元关注经济权益和治理权的分离。"
```

## V03 financing-readiness-runway

```yaml
id: F03
title: 融资准备度与 runway
type: framework
V1_cross_domain:
  passed: true
  evidence:
    - 《穿越寒冬》: 客户承诺、预订单、数据和融资路演
    - 《给你一个亿你能干什么》: 财务预测、融资计划和 CEO 主导融资
    - 《创业之初你不可不知的融资知识》: 商业计划书与融资流程
V2_predictive_power:
  passed: true
  novel_question: "公司还有 2 个月现金, BP 没有客户数据, 现在该启动融资吗?"
  derived_answer: "先做最低融资材料和客户证据补强, 同步延长 runway, 不把融资外包给 FA。"
V3_exclusivity:
  passed: true
  why_not_common: "它不是鼓励融资, 而是把融资当作 runway、证据和流程的准备度检查。"
```

## V04 investor-fit-signal-filter

```yaml
id: F04
title: 投资人匹配信号过滤器
type: framework
V1_cross_domain:
  passed: true
  evidence:
    - 《穿越寒冬》: 天使、种子、A 轮前、大型 VC、企业投资人差异
    - 《超级天使投资》: 天使投资人的风险、组合和参与方式
    - 《创业之初你不可不知的融资知识》: VC 对退出、行业和条款的关注
V2_predictive_power:
  passed: true
  novel_question: "企业投资人给高估值, 但它是潜在客户的竞争对手, 要不要拿?"
  derived_answer: "高战略冲突优先降级, 因为资金会限制客户和合作路径。"
V3_exclusivity:
  passed: true
  why_not_common: "不是谁给钱多选谁, 而是按资金结构和后续约束过滤。"
```

## V05 valuation-dilution-clarifier

```yaml
id: F05
title: 估值稀释澄清
type: framework
V1_cross_domain:
  passed: true
  evidence:
    - 《风险投资交易》第4章: 投资前/投资后估值、完全稀释、期权池
    - 《创业之初你不可不知的融资知识》第5章: 估值及投资协议
    - 《给你一个亿你能干什么》: 创业者财务预测能力
V2_predictive_power:
  passed: true
  novel_question: "投资人说估值 2000 万、投 500 万、融资前扩 15% 期权池, 创始人真实稀释多少?"
  derived_answer: "先确认 pre/post, 再把期权池计入完全稀释, 输出融资前后 cap table。"
V3_exclusivity:
  passed: true
  why_not_common: "普通建议只比较估值高低; 本单元追踪真实股份口径和期权池归属。"
```

## V06 term-sheet-economics-control-audit

```yaml
id: F06
title: Term Sheet 经济/控制条款审计
type: framework
V1_cross_domain:
  passed: true
  evidence:
    - 《风险投资交易》第3-6章: 经济因素和控制因素
    - 《创业之初你不可不知的融资知识》: Term Sheet 不是最终拿钱
    - 《股权战争》: 董事会、对赌、防稀释等条款导致被动
V2_predictive_power:
  passed: true
  novel_question: "条款清单估值高, 但有 2x 清算优先、全棘轮防稀释和投资人董事多数, 是否可接受?"
  derived_answer: "分别审经济代价和控制权代价, 再列出必须谈判或换投资人的红线。"
V3_exclusivity:
  passed: true
  why_not_common: "把条款按收益和控制拆解, 能识别烟幕条款和真正风险。"
```

## V07 angel-portfolio-discipline

```yaml
id: F07
title: 天使投资组合纪律
type: framework
V1_cross_domain:
  passed: true
  evidence:
    - 《超级天使投资》第1章: 20-80 家组合、大数法则、失败率
    - 《穿越寒冬》: 天使、种子、VC 的阶段差异
V2_predictive_power:
  passed: true
  novel_question: "用户想把 30% 可投资资产投给朋友的一家初创公司, 应如何判断?"
  derived_answer: "按组合、单笔上限、合格性、尽调和损失承受力先降风险。"
V3_exclusivity:
  passed: true
  why_not_common: "反直觉点是早期投资要先承认单个项目不可预测, 再谈好项目。"
```

## V08 equity-conflict-pre-mortem

```yaml
id: F08
title: 股权战争预演
type: framework
V1_cross_domain:
  passed: true
  evidence:
    - 《股权战争》: 资本局、控制战、夫妻劫三类案例
    - 《一本书看透股权架构》: 股东僵局和持股比例救济
    - 《风险投资交易》: 董事会和保护性条款
V2_predictive_power:
  passed: true
  novel_question: "夫妻共同创业、投资人有董事席位、核心资产在关联公司, 哪些地方可能爆雷?"
  derived_answer: "预演婚变、董事会罢免、资产转移、控制协议和补偿安排。"
V3_exclusivity:
  passed: true
  why_not_common: "不是泛泛提醒合伙要谨慎, 而是把典型战争剧本提前跑一遍。"
```
