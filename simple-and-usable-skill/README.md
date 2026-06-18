    # 《简约至上》Skills for AI Agents

    > 用愿景、主流用户和删除、组织、隐藏、转移四策略，把复杂交互变成真正简单而不是冒充简单。

    [![Built with cangjie-skill](https://img.shields.io/badge/Built%20with-cangjie--skill-green.svg)](https://github.com/kangarooking/cangjie-skill)

    ## 来源说明

    - 原书: 《简约至上》，Giles Colborne。
    - 本仓库不收录原书全文，仅保留方法论蒸馏与来源说明。
    - 详见: [source/SOURCE.md](source/SOURCE.md)

    ## 这套 Skills 能解决什么问题？

    | 使用场景 | 调用 Skill |
    |---|---|
    | 当团队想简化产品但不知道核心用户、品牌特征和体验愿景是什么时调用。 | [`simplicity-vision-blueprint`](simplicity-vision-blueprint/SKILL.md) |
| 当界面、流程或产品被非必要功能、文字、选项和错误负担拖慢，需要判断能删什么时调用。 | [`delete-strategy`](delete-strategy/SKILL.md) |
| 当信息或功能不能删除，但需要通过分块、行为、层级、位置和模式降低认知负担时调用。 | [`organize-strategy`](organize-strategy/SKILL.md) |
| 当功能不常用但不能删除，需要决定何时、何处、如何渐进展示时调用。 | [`hide-strategy`](hide-strategy/SKILL.md) |
| 当复杂性无法删除、组织或隐藏，需要转移到设备、系统、用户、开放体验或可信机制中时调用。 | [`transfer-strategy`](transfer-strategy/SKILL.md) |
| 当专家用户、高声量用户或内部人员要求增加复杂功能，团队需要回到主流用户体验时调用。 | [`mainstream-user-focus`](mainstream-user-focus/SKILL.md) |

    ## 仓库结构

    ```text
    simple-and-usable-skill/
    ├── README.md
    ├── BOOK_OVERVIEW.md
    ├── INDEX.md
    ├── QUALITY_REVIEW.md
    ├── source/
    ├── candidates/
    ├── rejected/
    ├── simplicity-vision-blueprint/
├── delete-strategy/
├── organize-strategy/
├── hide-strategy/
├── transfer-strategy/
├── mainstream-user-focus/
    ```

    ## 边界

    - 不替代原书阅读、真实用户研究、数据实验、法律合规或财务审查。
    - 不提交原书全文、图片或大段译文。
    - 所有 skill 都有触发条件、执行步骤、边界和测试用例。
