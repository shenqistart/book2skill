    # 《用户体验要素》Skill 索引

    > 本书由 book2skill / cangjie-skill 蒸馏，产出 **6** 个 skills。处理时间：2026-06-18

    ## 关于这本书

    - **作者**: Jesse James Garrett
    - **出版年**: 2011
    - **一句话主旨**: 用战略、范围、结构、框架、表现五个层面，把用户体验从抽象感受拆成可诊断的产品设计系统。
    - **整书理解**: [BOOK_OVERVIEW.md](BOOK_OVERVIEW.md)

    ## Skill 列表

    | Skill | 中文名 | 什么时候用 |
    |---|---|---|
    | [`five-plane-ux-map`](five-plane-ux-map/SKILL.md) | 五层体验地图 | 当用户面对一个模糊的体验问题，不知道是战略、范围、结构、框架还是表现层出错时调用。 |
| [`strategy-plane-clarifier`](strategy-plane-clarifier/SKILL.md) | 战略层澄清 | 当团队对产品目标和用户需求不清，却急着列功能或设计页面时调用。 |
| [`scope-requirements-boundary`](scope-requirements-boundary/SKILL.md) | 范围层边界 | 当需求列表膨胀、功能规格不具体、内容需求和功能需求混乱时调用。 |
| [`structure-interaction-ia-design`](structure-interaction-ia-design/SKILL.md) | 结构层交互与信息架构 | 当产品功能和内容已有，但流程、分类、路径或信息组织让用户迷失时调用。 |
| [`skeleton-interface-navigation-audit`](skeleton-interface-navigation-audit/SKILL.md) | 框架层界面导航审计 | 当页面元素、导航、按钮和信息呈现已经成形，需要检查是否支撑用户任务时调用。 |
| [`surface-sensory-consistency`](surface-sensory-consistency/SKILL.md) | 表现层感知一致性 | 当产品已经有结构和框架，需要检查视觉、听觉、触感等感知设计是否一致表达体验时调用。 |

    ## 引用图

    ```mermaid
    graph TD
  five_plane_ux_map["五层体验地图"]
  strategy_plane_clarifier["战略层澄清"]
  scope_requirements_boundary["范围层边界"]
  structure_interaction_ia_design["结构层交互与信息架构"]
  skeleton_interface_navigation_audit["框架层界面导航审计"]
  surface_sensory_consistency["表现层感知一致性"]
    ```

    ## 推荐调用顺序

    1. `five-plane-ux-map` — 五层体验地图
2. `strategy-plane-clarifier` — 战略层澄清
3. `scope-requirements-boundary` — 范围层边界
4. `structure-interaction-ia-design` — 结构层交互与信息架构
5. `skeleton-interface-navigation-audit` — 框架层界面导航审计
6. `surface-sensory-consistency` — 表现层感知一致性

    ## 审计轨迹

    - 候选单元池: [candidates/](candidates/)
    - 被淘汰候选: [rejected/rejected-units.md](rejected/rejected-units.md)
    - 质量审核: [QUALITY_REVIEW.md](QUALITY_REVIEW.md)
    - 来源说明: [source/SOURCE.md](source/SOURCE.md)
