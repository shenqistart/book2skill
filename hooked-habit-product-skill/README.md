    # 《上瘾》Skills for AI Agents

    > 用触发、行动、多变酬赏和投入四步检查产品是否能形成健康、可持续且合乎伦理的使用习惯。

    [![Built with cangjie-skill](https://img.shields.io/badge/Built%20with-cangjie--skill-green.svg)](https://github.com/kangarooking/cangjie-skill)

    ## 来源说明

    - 原书: 《上瘾》，尼尔·埃亚尔、瑞安·胡佛。
    - 本仓库不收录原书全文，仅保留方法论蒸馏与来源说明。
    - 详见: [source/SOURCE.md](source/SOURCE.md)

    ## 这套 Skills 能解决什么问题？

    | 使用场景 | 调用 Skill |
    |---|---|
    | 当用户想判断一个产品是否适合做成习惯型产品，或只是低频工具、一次性服务时调用。 | [`habit-zone-assessment`](habit-zone-assessment/SKILL.md) |
| 当用户需要设计外部触发并连接用户内部情绪触发时调用。 | [`trigger-design-map`](trigger-design-map/SKILL.md) |
| 当用户希望提高某个关键行为发生率，需要降低时间、金钱、体力、脑力、社会偏差或非常规性成本时调用。 | [`action-ability-simplifier`](action-ability-simplifier/SKILL.md) |
| 当用户想设计能持续吸引用戶的回报机制，需要区分社交、猎物和自我酬赏时调用。 | [`variable-reward-selector`](variable-reward-selector/SKILL.md) |
| 当用户想让产品随着用户使用而更有价值，并把一次使用连接到下一次触发时调用。 | [`investment-value-loop`](investment-value-loop/SKILL.md) |
| 当团队使用习惯设计但担心产品会变成操控、剥削或伤害用户时调用。 | [`manipulation-ethics-screen`](manipulation-ethics-screen/SKILL.md) |

    ## 仓库结构

    ```text
    hooked-habit-product-skill/
    ├── README.md
    ├── BOOK_OVERVIEW.md
    ├── INDEX.md
    ├── QUALITY_REVIEW.md
    ├── source/
    ├── candidates/
    ├── rejected/
    ├── habit-zone-assessment/
├── trigger-design-map/
├── action-ability-simplifier/
├── variable-reward-selector/
├── investment-value-loop/
├── manipulation-ethics-screen/
    ```

    ## 边界

    - 不替代原书阅读、真实用户研究、数据实验、法律合规或财务审查。
    - 不提交原书全文、图片或大段译文。
    - 所有 skill 都有触发条件、执行步骤、边界和测试用例。
