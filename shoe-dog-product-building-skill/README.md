    # 《鞋狗》Skills for AI Agents

    > 从耐克早期创业史中提炼产品、供应、现金流、团队和品牌运动的创业判断。

    [![Built with cangjie-skill](https://img.shields.io/badge/Built%20with-cangjie--skill-green.svg)](https://github.com/kangarooking/cangjie-skill)

    ## 来源说明

    - 原书: 《鞋狗》，菲尔·奈特。
    - 本仓库不收录原书全文，仅保留方法论蒸馏与来源说明。
    - 详见: [source/SOURCE.md](source/SOURCE.md)

    ## 这套 Skills 能解决什么问题？

    | 使用场景 | 调用 Skill |
    |---|---|
    | 当用户有一个产品想法但还停在桌面推演，需要到真实使用场地验证需求、销售和反馈时调用。 | [`field-market-validation`](field-market-validation/SKILL.md) |
| 当产品强依赖真实高强度使用体验，需要把专业用户、试穿、材料实验和快速改进连成循环时调用。 | [`athlete-feedback-product-loop`](athlete-feedback-product-loop/SKILL.md) |
| 当产品业务依赖单一供应商、渠道、平台或授权方，且对方可能改变条件时调用。 | [`supplier-dependence-risk`](supplier-dependence-risk/SKILL.md) |
| 当业务销售增长很快但现金、库存、银行信用和供应账期紧绷时调用。 | [`cashflow-growth-discipline`](cashflow-growth-discipline/SKILL.md) |
| 当用户想把产品从商品做成一种运动、态度或社群身份，而不是只做广告时调用。 | [`brand-movement-building`](brand-movement-building/SKILL.md) |

    ## 仓库结构

    ```text
    shoe-dog-product-building-skill/
    ├── README.md
    ├── BOOK_OVERVIEW.md
    ├── INDEX.md
    ├── QUALITY_REVIEW.md
    ├── source/
    ├── candidates/
    ├── rejected/
    ├── field-market-validation/
├── athlete-feedback-product-loop/
├── supplier-dependence-risk/
├── cashflow-growth-discipline/
├── brand-movement-building/
    ```

    ## 边界

    - 不替代原书阅读、真实用户研究、数据实验、法律合规或财务审查。
    - 不提交原书全文、图片或大段译文。
    - 所有 skill 都有触发条件、执行步骤、边界和测试用例。
