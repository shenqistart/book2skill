    # 《真需求》Skill 索引

    > 本书由 book2skill / cangjie-skill 蒸馏，产出 **5** 个 skills。处理时间：2026-06-18

    ## 关于这本书

    - **作者**: 梁宁
    - **出版年**: 未知；本地文本元数据日期异常
    - **一句话主旨**: 从价值、共识、模式和求真四层识别真需求，并把需求转成能成立的产品与商业系统。
    - **整书理解**: [BOOK_OVERVIEW.md](BOOK_OVERVIEW.md)

    ## Skill 列表

    | Skill | 中文名 | 什么时候用 |
    |---|---|---|
    | [`value-combination-diagnosis`](value-combination-diagnosis/SKILL.md) | 价值组合诊断 | 当用户想判断一个产品到底满足功能需求、情绪需求、资产需求还是品牌需求，或想重新组合产品价值以避免只卷功能时调用。 |
| [`consensus-gap-mapping`](consensus-gap-mapping/SKILL.md) | 共识缺口映射 | 当团队、用户、市场对产品是什么、为谁用、何时用、为什么有利存在分歧时调用，用来定位共识缺口。 |
| [`scene-fit-test`](scene-fit-test/SKILL.md) | 场景匹配测试 | 当用户想判断一个产品是否真的贴合目标人群和使用场景，或发现需求在不同场景里表现完全不同时调用。 |
| [`business-model-viability-check`](business-model-viability-check/SKILL.md) | 模式成立性检查 | 当用户已经看到需求或产品机会，但不确定能力系统、拿谁的钱、变现逻辑和分配机制能否闭环时调用。 |
| [`first-principles-truth-check`](first-principles-truth-check/SKILL.md) | 第一性原理求真检查 | 当团队被行业共识、流行概念、用户口头需求或创始人愿望牵着走，需要区分应然与实然、回到事实重新推导时调用。 |

    ## 引用图

    ```mermaid
    graph TD
  value_combination_diagnosis["价值组合诊断"]
  consensus_gap_mapping["共识缺口映射"]
  scene_fit_test["场景匹配测试"]
  business_model_viability_check["模式成立性检查"]
  first_principles_truth_check["第一性原理求真检查"]
  value_combination_diagnosis ==>|composes-with| consensus_gap_mapping
  value_combination_diagnosis ==>|composes-with| business_model_viability_check
  consensus_gap_mapping -->|depends-on| value_combination_diagnosis
  consensus_gap_mapping ==>|composes-with| scene_fit_test
  scene_fit_test -->|depends-on| value_combination_diagnosis
  scene_fit_test ==>|composes-with| consensus_gap_mapping
  business_model_viability_check -->|depends-on| value_combination_diagnosis
  business_model_viability_check ==>|composes-with| first_principles_truth_check
  first_principles_truth_check ==>|composes-with| business_model_viability_check
  first_principles_truth_check -.->|contrasts-with| consensus_gap_mapping
    ```

    ## 推荐调用顺序

    1. `value-combination-diagnosis` — 价值组合诊断
2. `consensus-gap-mapping` — 共识缺口映射
3. `scene-fit-test` — 场景匹配测试
4. `business-model-viability-check` — 模式成立性检查
5. `first-principles-truth-check` — 第一性原理求真检查

    ## 审计轨迹

    - 候选单元池: [candidates/](candidates/)
    - 被淘汰候选: [rejected/rejected-units.md](rejected/rejected-units.md)
    - 质量审核: [QUALITY_REVIEW.md](QUALITY_REVIEW.md)
    - 来源说明: [source/SOURCE.md](source/SOURCE.md)
