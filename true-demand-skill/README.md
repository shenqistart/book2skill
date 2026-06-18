    # 《真需求》Skills for AI Agents

    > 从价值、共识、模式和求真四层识别真需求，并把需求转成能成立的产品与商业系统。

    [![Built with cangjie-skill](https://img.shields.io/badge/Built%20with-cangjie--skill-green.svg)](https://github.com/kangarooking/cangjie-skill)

    ## 来源说明

    - 原书: 《真需求》，梁宁。
    - 本仓库不收录原书全文，仅保留方法论蒸馏与来源说明。
    - 详见: [source/SOURCE.md](source/SOURCE.md)

    ## 这套 Skills 能解决什么问题？

    | 使用场景 | 调用 Skill |
    |---|---|
    | 当用户想判断一个产品到底满足功能需求、情绪需求、资产需求还是品牌需求，或想重新组合产品价值以避免只卷功能时调用。 | [`value-combination-diagnosis`](value-combination-diagnosis/SKILL.md) |
| 当团队、用户、市场对产品是什么、为谁用、何时用、为什么有利存在分歧时调用，用来定位共识缺口。 | [`consensus-gap-mapping`](consensus-gap-mapping/SKILL.md) |
| 当用户想判断一个产品是否真的贴合目标人群和使用场景，或发现需求在不同场景里表现完全不同时调用。 | [`scene-fit-test`](scene-fit-test/SKILL.md) |
| 当用户已经看到需求或产品机会，但不确定能力系统、拿谁的钱、变现逻辑和分配机制能否闭环时调用。 | [`business-model-viability-check`](business-model-viability-check/SKILL.md) |
| 当团队被行业共识、流行概念、用户口头需求或创始人愿望牵着走，需要区分应然与实然、回到事实重新推导时调用。 | [`first-principles-truth-check`](first-principles-truth-check/SKILL.md) |

    ## 仓库结构

    ```text
    true-demand-skill/
    ├── README.md
    ├── BOOK_OVERVIEW.md
    ├── INDEX.md
    ├── QUALITY_REVIEW.md
    ├── source/
    ├── candidates/
    ├── rejected/
    ├── value-combination-diagnosis/
├── consensus-gap-mapping/
├── scene-fit-test/
├── business-model-viability-check/
├── first-principles-truth-check/
    ```

    ## 边界

    - 不替代原书阅读、真实用户研究、数据实验、法律合规或财务审查。
    - 不提交原书全文、图片或大段译文。
    - 所有 skill 都有触发条件、执行步骤、边界和测试用例。
