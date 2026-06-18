# Counter-Example Candidates

- id: ce01
  title: 漏水桶式获客
  type: counter-example
  source_chapter: 《增长黑客》第二章；《硅谷增长黑客实战笔记》第五章
  source_quote: |
    "流失很可能被新用户增长数据掩盖。"
  failure_mode: |
    用户留存差却继续拉新，表面增长掩盖价值不足。
  mechanism: |
    新用户流入让总量指标好看，但同期群和留存曲线持续恶化。
  warning_signs:
    - 新增上涨但活跃、复购或付费没有改善
    - 用户没体验到关键行为就离开
    - 团队用投放预算掩盖留存问题
  bound_to:
    - 啊哈与不可或缺性门禁
  tags: [counter-example, retention]

- id: ce02
  title: 虚荣指标自我麻醉
  type: counter-example
  source_chapter: 《精益数据分析》第二章
  source_quote: |
    "总注册用户数其实就是一个虚荣指标。"
  failure_mode: |
    团队追逐注册数、PV、累计用户等好看数字，却无法据此改变产品或商业模式。
  mechanism: |
    单调递增指标让团队感觉进步，却不揭示用户行为、价值或因果关系。
  warning_signs:
    - 指标上涨但没人知道下一步做什么
    - 没有同期群或细分对比
    - 指标不随产品改动产生可解释变化
  bound_to:
    - OMTM 精益数据聚焦
    - 北极星指标与增长模型
  tags: [counter-example, vanity-metric]

- id: ce03
  title: 渠道舒适区偏见
  type: counter-example
  source_chapter: 《拉新》第三、五章
  source_quote: |
    "创业者会忽略有可能带来利润的拉新渠道。"
  failure_mode: |
    团队只做自己熟悉或同行都在做的渠道，错过低竞争、高杠杆渠道。
  mechanism: |
    经验偏见和职能惯性让渠道测试范围过窄，导致获客成本越来越高。
  warning_signs:
    - 没有完整渠道清单
    - 没有低成本中环测试
    - 以“我们行业都这么做”替代数据
  bound_to:
    - 靶心渠道选择
  tags: [counter-example, channel-bias]

- id: ce04
  title: 私域骚扰与信任透支
  type: counter-example
  source_chapter: 《关系飞轮》第三、四章
  source_quote: |
    "用户愿意被我触达，你相信我是来服务你的。"
  failure_mode: |
    把私域当成低成本群发通道，短期促销提升转化，长期损坏信任。
  mechanism: |
    用户允许触达的前提是关系和服务。一旦触达变成打扰，私域资产转为负债。
  warning_signs:
    - 群发频率高于服务频率
    - 用户退群、屏蔽、投诉上升
    - 只谈转化，不谈用户获得什么
  bound_to:
    - 私域关系飞轮
  tags: [counter-example, private-domain, trust]

- id: ce05
  title: 大群灌水式社群
  type: counter-example
  source_chapter: 《小群效应》第一章
  source_quote: |
    "人数越多，噪声越大，对用户的骚扰就越大。"
  failure_mode: |
    只追求建群数量和群人数，忽略成员关系密度，最后大群沉默或退群。
  mechanism: |
    噪声降低信任，用户关闭提醒，互动减少，转化和留存随之下降。
  warning_signs:
    - 新人不认识老用户
    - 群内广告和无关信息多
    - 活跃集中在少数管理员
  bound_to:
    - 小群社群杠杆
  tags: [counter-example, community]

- id: ce06
  title: 直播头部化幻觉
  type: counter-example
  source_chapter: 《直播电商的逻辑》第二、六章
  source_quote: |
    "一个高度头部化的市场难以成为一个有效的市场。"
  failure_mode: |
    品牌只看到头部主播 GMV，忽略佣金、退货、价格体系、供应链和平台流量分配风险。
  mechanism: |
    头部主播通过流量和供应优势进一步提高转化，普通商家被迫降价或依赖平台。
  warning_signs:
    - 只看单场 GMV 不看毛利和退货
    - 价格体系被直播间打穿
    - 自有用户资产没有沉淀
  bound_to:
    - 直播电商适配地图
  tags: [counter-example, live-commerce]

- id: ce07
  title: 平台撤出导致用户转盗版
  type: counter-example
  source_chapter: 《流媒体时代》第八章
  source_quote: |
    "大部分消费者转向了盗版，而不是去其他合法渠道。"
  failure_mode: |
    内容方高估自己对平台的控制力，撤出平台后用户没有回流自有渠道，而是转向替代或盗版。
  mechanism: |
    数字环境下用户迁移成本低，平台习惯和盗版学习一旦形成，很难完全逆转。
  warning_signs:
    - 自有渠道体验明显弱于平台
    - 用户购买路径被突然切断
    - 没有替代分发与迁移计划
  bound_to:
    - 平台权力迁移策略
  tags: [counter-example, platform]
