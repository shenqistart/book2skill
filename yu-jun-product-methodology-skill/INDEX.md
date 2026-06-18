    # 《俞军产品方法论》Skill 索引

    > 本书由 book2skill / cangjie-skill 蒸馏，产出 **5** 个 skills。处理时间：2026-06-18

    ## 关于这本书

    - **作者**: 俞军
    - **出版年**: 2019
    - **一句话主旨**: 用用户模型、交易模型、效用、成本和决策权衡，把产品经理训练成能持续创造用户价值与企业价值的人。
    - **整书理解**: [BOOK_OVERVIEW.md](BOOK_OVERVIEW.md)

    ## Skill 列表

    | Skill | 中文名 | 什么时候用 |
    |---|---|---|
    | [`user-model-builder`](user-model-builder/SKILL.md) | 用户模型构建 | 当用户想从行为和需求集合理解用户，而不是停留在人群标签、画像或调研原话时调用。 |
| [`transaction-model-designer`](transaction-model-designer/SKILL.md) | 交易模型设计 | 当用户需要判断一个产品如何在用户和企业之间发生价值交换、交易成本在哪里、交换是否可持续时调用。 |
| [`user-value-formula`](user-value-formula/SKILL.md) | 用户价值公式判断 | 当用户要判断一个新产品、新功能或改版是否值得用户替换旧方案时调用，重点比较新体验、旧体验和替换成本。 |
| [`utility-cost-margin-audit`](utility-cost-margin-audit/SKILL.md) | 效用成本边际审计 | 当用户需要用效用、边际效用、边际成本、边际利润和交易成本审计一个产品方案是否值得做时调用。 |
| [`decision-bias-check`](decision-bias-check/SKILL.md) | 产品决策偏误检查 | 当团队要做产品取舍、上线、改版或资源投入决策，并担心数据、逻辑、主观判断或认知偏误影响判断时调用。 |

    ## 引用图

    ```mermaid
    graph TD
  user_model_builder["用户模型构建"]
  transaction_model_designer["交易模型设计"]
  user_value_formula["用户价值公式判断"]
  utility_cost_margin_audit["效用成本边际审计"]
  decision_bias_check["产品决策偏误检查"]
  user_model_builder ==>|composes-with| transaction_model_designer
  user_model_builder ==>|composes-with| user_value_formula
  transaction_model_designer -->|depends-on| user_model_builder
  transaction_model_designer ==>|composes-with| utility_cost_margin_audit
  user_value_formula -->|depends-on| user_model_builder
  user_value_formula ==>|composes-with| decision_bias_check
  utility_cost_margin_audit -->|depends-on| transaction_model_designer
  utility_cost_margin_audit ==>|composes-with| user_value_formula
  decision_bias_check -->|depends-on| user_value_formula
    ```

    ## 推荐调用顺序

    1. `user-model-builder` — 用户模型构建
2. `transaction-model-designer` — 交易模型设计
3. `user-value-formula` — 用户价值公式判断
4. `utility-cost-margin-audit` — 效用成本边际审计
5. `decision-bias-check` — 产品决策偏误检查

    ## 审计轨迹

    - 候选单元池: [candidates/](candidates/)
    - 被淘汰候选: [rejected/rejected-units.md](rejected/rejected-units.md)
    - 质量审核: [QUALITY_REVIEW.md](QUALITY_REVIEW.md)
    - 来源说明: [source/SOURCE.md](source/SOURCE.md)
