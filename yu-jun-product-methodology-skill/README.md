    # 《俞军产品方法论》Skills for AI Agents

    > 用用户模型、交易模型、效用、成本和决策权衡，把产品经理训练成能持续创造用户价值与企业价值的人。

    [![Built with cangjie-skill](https://img.shields.io/badge/Built%20with-cangjie--skill-green.svg)](https://github.com/kangarooking/cangjie-skill)

    ## 来源说明

    - 原书: 《俞军产品方法论》，俞军。
    - 本仓库不收录原书全文，仅保留方法论蒸馏与来源说明。
    - 详见: [source/SOURCE.md](source/SOURCE.md)

    ## 这套 Skills 能解决什么问题？

    | 使用场景 | 调用 Skill |
    |---|---|
    | 当用户想从行为和需求集合理解用户，而不是停留在人群标签、画像或调研原话时调用。 | [`user-model-builder`](user-model-builder/SKILL.md) |
| 当用户需要判断一个产品如何在用户和企业之间发生价值交换、交易成本在哪里、交换是否可持续时调用。 | [`transaction-model-designer`](transaction-model-designer/SKILL.md) |
| 当用户要判断一个新产品、新功能或改版是否值得用户替换旧方案时调用，重点比较新体验、旧体验和替换成本。 | [`user-value-formula`](user-value-formula/SKILL.md) |
| 当用户需要用效用、边际效用、边际成本、边际利润和交易成本审计一个产品方案是否值得做时调用。 | [`utility-cost-margin-audit`](utility-cost-margin-audit/SKILL.md) |
| 当团队要做产品取舍、上线、改版或资源投入决策，并担心数据、逻辑、主观判断或认知偏误影响判断时调用。 | [`decision-bias-check`](decision-bias-check/SKILL.md) |

    ## 仓库结构

    ```text
    yu-jun-product-methodology-skill/
    ├── README.md
    ├── BOOK_OVERVIEW.md
    ├── INDEX.md
    ├── QUALITY_REVIEW.md
    ├── source/
    ├── candidates/
    ├── rejected/
    ├── user-model-builder/
├── transaction-model-designer/
├── user-value-formula/
├── utility-cost-margin-audit/
├── decision-bias-check/
    ```

    ## 边界

    - 不替代原书阅读、真实用户研究、数据实验、法律合规或财务审查。
    - 不提交原书全文、图片或大段译文。
    - 所有 skill 都有触发条件、执行步骤、边界和测试用例。
