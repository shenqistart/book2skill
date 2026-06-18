    # 《任天堂的体验设计》Skills for AI Agents

    > 用直觉、惊喜和故事三类体验设计，让用户在不由自主中理解、行动、持续和成长。

    [![Built with cangjie-skill](https://img.shields.io/badge/Built%20with-cangjie--skill-green.svg)](https://github.com/kangarooking/cangjie-skill)

    ## 来源说明

    - 原书: 《任天堂的体验设计》，玉树真一郎。
    - 本仓库不收录原书全文，仅保留方法论蒸馏与来源说明。
    - 详见: [source/SOURCE.md](source/SOURCE.md)

    ## 这套 Skills 能解决什么问题？

    | 使用场景 | 调用 Skill |
    |---|---|
    | 当用户想让人不用说明也自然理解下一步、愿意尝试并获得确认时调用。 | [`intuitive-experience-loop`](intuitive-experience-loop/SKILL.md) |
| 当体验连续正确但用户开始疲劳、厌倦，需要用有意图的反转恢复注意力时调用。 | [`surprise-fatigue-reset`](surprise-fatigue-reset/SKILL.md) |
| 当产品、课程、游戏或活动需要让用户持续投入并感到自己成长时调用。 | [`story-growth-arc`](story-growth-arc/SKILL.md) |
| 当用户不知道该用直觉、惊喜还是故事来解决体验问题时调用，先诊断问题类型再选方法。 | [`experience-method-selector`](experience-method-selector/SKILL.md) |

    ## 仓库结构

    ```text
    nintendo-experience-design-skill/
    ├── README.md
    ├── BOOK_OVERVIEW.md
    ├── INDEX.md
    ├── QUALITY_REVIEW.md
    ├── source/
    ├── candidates/
    ├── rejected/
    ├── intuitive-experience-loop/
├── surprise-fatigue-reset/
├── story-growth-arc/
├── experience-method-selector/
    ```

    ## 边界

    - 不替代原书阅读、真实用户研究、数据实验、法律合规或财务审查。
    - 不提交原书全文、图片或大段译文。
    - 所有 skill 都有触发条件、执行步骤、边界和测试用例。
