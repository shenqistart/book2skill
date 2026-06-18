    # 《任天堂的体验设计》Skill 索引

    > 本书由 book2skill / cangjie-skill 蒸馏，产出 **4** 个 skills。处理时间：2026-06-18

    ## 关于这本书

    - **作者**: 玉树真一郎
    - **出版年**: 2021
    - **一句话主旨**: 用直觉、惊喜和故事三类体验设计，让用户在不由自主中理解、行动、持续和成长。
    - **整书理解**: [BOOK_OVERVIEW.md](BOOK_OVERVIEW.md)

    ## Skill 列表

    | Skill | 中文名 | 什么时候用 |
    |---|---|---|
    | [`intuitive-experience-loop`](intuitive-experience-loop/SKILL.md) | 直觉体验循环 | 当用户想让人不用说明也自然理解下一步、愿意尝试并获得确认时调用。 |
| [`surprise-fatigue-reset`](surprise-fatigue-reset/SKILL.md) | 惊喜疲劳重置 | 当体验连续正确但用户开始疲劳、厌倦，需要用有意图的反转恢复注意力时调用。 |
| [`story-growth-arc`](story-growth-arc/SKILL.md) | 故事成长弧 | 当产品、课程、游戏或活动需要让用户持续投入并感到自己成长时调用。 |
| [`experience-method-selector`](experience-method-selector/SKILL.md) | 体验方法选择器 | 当用户不知道该用直觉、惊喜还是故事来解决体验问题时调用，先诊断问题类型再选方法。 |

    ## 引用图

    ```mermaid
    graph TD
  intuitive_experience_loop["直觉体验循环"]
  surprise_fatigue_reset["惊喜疲劳重置"]
  story_growth_arc["故事成长弧"]
  experience_method_selector["体验方法选择器"]
    ```

    ## 推荐调用顺序

    1. `intuitive-experience-loop` — 直觉体验循环
2. `surprise-fatigue-reset` — 惊喜疲劳重置
3. `story-growth-arc` — 故事成长弧
4. `experience-method-selector` — 体验方法选择器

    ## 审计轨迹

    - 候选单元池: [candidates/](candidates/)
    - 被淘汰候选: [rejected/rejected-units.md](rejected/rejected-units.md)
    - 质量审核: [QUALITY_REVIEW.md](QUALITY_REVIEW.md)
    - 来源说明: [source/SOURCE.md](source/SOURCE.md)
