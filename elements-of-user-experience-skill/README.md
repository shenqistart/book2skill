    # 《用户体验要素》Skills for AI Agents

    > 用战略、范围、结构、框架、表现五个层面，把用户体验从抽象感受拆成可诊断的产品设计系统。

    [![Built with cangjie-skill](https://img.shields.io/badge/Built%20with-cangjie--skill-green.svg)](https://github.com/kangarooking/cangjie-skill)

    ## 来源说明

    - 原书: 《用户体验要素》，Jesse James Garrett。
    - 本仓库不收录原书全文，仅保留方法论蒸馏与来源说明。
    - 详见: [source/SOURCE.md](source/SOURCE.md)

    ## 这套 Skills 能解决什么问题？

    | 使用场景 | 调用 Skill |
    |---|---|
    | 当用户面对一个模糊的体验问题，不知道是战略、范围、结构、框架还是表现层出错时调用。 | [`five-plane-ux-map`](five-plane-ux-map/SKILL.md) |
| 当团队对产品目标和用户需求不清，却急着列功能或设计页面时调用。 | [`strategy-plane-clarifier`](strategy-plane-clarifier/SKILL.md) |
| 当需求列表膨胀、功能规格不具体、内容需求和功能需求混乱时调用。 | [`scope-requirements-boundary`](scope-requirements-boundary/SKILL.md) |
| 当产品功能和内容已有，但流程、分类、路径或信息组织让用户迷失时调用。 | [`structure-interaction-ia-design`](structure-interaction-ia-design/SKILL.md) |
| 当页面元素、导航、按钮和信息呈现已经成形，需要检查是否支撑用户任务时调用。 | [`skeleton-interface-navigation-audit`](skeleton-interface-navigation-audit/SKILL.md) |
| 当产品已经有结构和框架，需要检查视觉、听觉、触感等感知设计是否一致表达体验时调用。 | [`surface-sensory-consistency`](surface-sensory-consistency/SKILL.md) |

    ## 仓库结构

    ```text
    elements-of-user-experience-skill/
    ├── README.md
    ├── BOOK_OVERVIEW.md
    ├── INDEX.md
    ├── QUALITY_REVIEW.md
    ├── source/
    ├── candidates/
    ├── rejected/
    ├── five-plane-ux-map/
├── strategy-plane-clarifier/
├── scope-requirements-boundary/
├── structure-interaction-ia-design/
├── skeleton-interface-navigation-audit/
├── surface-sensory-consistency/
    ```

    ## 边界

    - 不替代原书阅读、真实用户研究、数据实验、法律合规或财务审查。
    - 不提交原书全文、图片或大段译文。
    - 所有 skill 都有触发条件、执行步骤、边界和测试用例。
