    # 《Little Black Stretchy Pants》Skills for AI Agents

    > 用 lululemon 的产品、门店、社群和文化系统，把运动服饰做成可复购、可传播、可扩张的生活方式品牌。

    [![Built with cangjie-skill](https://img.shields.io/badge/Built%20with-cangjie--skill-green.svg)](https://github.com/kangarooking/cangjie-skill)

    ## 来源说明

    - 原书: 《Little Black Stretchy Pants》，Chip Wilson。
    - 本仓库不收录原书全文，仅保留方法论蒸馏与来源说明。
    - 详见: [source/SOURCE.md](source/SOURCE.md)

    ## 这套 Skills 能解决什么问题？

    | 使用场景 | 调用 Skill |
    |---|---|
    | 当用户想把门店或客服从销售点变成产品体验和用户教育场时调用。 | [`educator-led-retail-experience`](educator-led-retail-experience/SKILL.md) |
| 当品牌需要决定是否直营、如何缩短从顾客反馈到产品改进的链路时调用。 | [`vertical-retail-feedback-loop`](vertical-retail-feedback-loop/SKILL.md) |
| 当产品出现质量问题、投诉或召回风险，需要在诚信、品牌信任和库存损失之间决策时调用。 | [`quality-integrity-recall-loop`](quality-integrity-recall-loop/SKILL.md) |
| 当品牌想让文化成为可复制的组织能力，而不是墙上价值观时调用。 | [`culture-goal-development-system`](culture-goal-development-system/SKILL.md) |
| 当品牌想从小众运动或生活方式扩展成新品类，同时保持社群真实感时调用。 | [`grassroots-category-expansion`](grassroots-category-expansion/SKILL.md) |

    ## 仓库结构

    ```text
    little-black-stretchy-pants-skill/
    ├── README.md
    ├── BOOK_OVERVIEW.md
    ├── INDEX.md
    ├── QUALITY_REVIEW.md
    ├── source/
    ├── candidates/
    ├── rejected/
    ├── educator-led-retail-experience/
├── vertical-retail-feedback-loop/
├── quality-integrity-recall-loop/
├── culture-goal-development-system/
├── grassroots-category-expansion/
    ```

    ## 边界

    - 不替代原书阅读、真实用户研究、数据实验、法律合规或财务审查。
    - 不提交原书全文、图片或大段译文。
    - 所有 skill 都有触发条件、执行步骤、边界和测试用例。
