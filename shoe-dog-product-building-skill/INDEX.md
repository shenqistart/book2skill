    # 《鞋狗》Skill 索引

    > 本书由 book2skill / cangjie-skill 蒸馏，产出 **5** 个 skills。处理时间：2026-06-18

    ## 关于这本书

    - **作者**: 菲尔·奈特
    - **出版年**: 2016
    - **一句话主旨**: 从耐克早期创业史中提炼产品、供应、现金流、团队和品牌运动的创业判断。
    - **整书理解**: [BOOK_OVERVIEW.md](BOOK_OVERVIEW.md)

    ## Skill 列表

    | Skill | 中文名 | 什么时候用 |
    |---|---|---|
    | [`field-market-validation`](field-market-validation/SKILL.md) | 真实场地市场验证 | 当用户有一个产品想法但还停在桌面推演，需要到真实使用场地验证需求、销售和反馈时调用。 |
| [`athlete-feedback-product-loop`](athlete-feedback-product-loop/SKILL.md) | 运动员反馈产品循环 | 当产品强依赖真实高强度使用体验，需要把专业用户、试穿、材料实验和快速改进连成循环时调用。 |
| [`supplier-dependence-risk`](supplier-dependence-risk/SKILL.md) | 供应依赖风险拆解 | 当产品业务依赖单一供应商、渠道、平台或授权方，且对方可能改变条件时调用。 |
| [`cashflow-growth-discipline`](cashflow-growth-discipline/SKILL.md) | 增长现金流纪律 | 当业务销售增长很快但现金、库存、银行信用和供应账期紧绷时调用。 |
| [`brand-movement-building`](brand-movement-building/SKILL.md) | 品牌运动构建 | 当用户想把产品从商品做成一种运动、态度或社群身份，而不是只做广告时调用。 |

    ## 引用图

    ```mermaid
    graph TD
  field_market_validation["真实场地市场验证"]
  athlete_feedback_product_loop["运动员反馈产品循环"]
  supplier_dependence_risk["供应依赖风险拆解"]
  cashflow_growth_discipline["增长现金流纪律"]
  brand_movement_building["品牌运动构建"]
  field_market_validation ==>|composes-with| athlete_feedback_product_loop
  athlete_feedback_product_loop -->|depends-on| field_market_validation
  athlete_feedback_product_loop ==>|composes-with| brand_movement_building
  supplier_dependence_risk ==>|composes-with| cashflow_growth_discipline
  cashflow_growth_discipline ==>|composes-with| supplier_dependence_risk
  brand_movement_building -->|depends-on| athlete_feedback_product_loop
    ```

    ## 推荐调用顺序

    1. `field-market-validation` — 真实场地市场验证
2. `athlete-feedback-product-loop` — 运动员反馈产品循环
3. `supplier-dependence-risk` — 供应依赖风险拆解
4. `cashflow-growth-discipline` — 增长现金流纪律
5. `brand-movement-building` — 品牌运动构建

    ## 审计轨迹

    - 候选单元池: [candidates/](candidates/)
    - 被淘汰候选: [rejected/rejected-units.md](rejected/rejected-units.md)
    - 质量审核: [QUALITY_REVIEW.md](QUALITY_REVIEW.md)
    - 来源说明: [source/SOURCE.md](source/SOURCE.md)
