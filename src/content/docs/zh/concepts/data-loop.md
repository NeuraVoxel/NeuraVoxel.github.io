---
title: 产业数据闭环
description: 以 DMP 为中枢的数据环
section: concepts
order: 1
---

产业数据闭环描述数据如何在 **DMP** 与环上模块之间流转，而非一次性导出文件。

## 环上能力

| 步骤 | 模块 | 说明 |
|------|------|------|
| 1 | [标注对接](/modules/annotation-bridge) | 任务下发与结果回流 |
| 2 | [训练/微调](/modules/training-bridge) | 版本化数据集消费 |
| 3 | [仿真验证](/modules/simulation-bridge) | 场景评估与难例回流 |
| 4 | DMP | 元数据登记，启动下一轮 |

## DMP 的角色

DMP **不是**环上与标注/训练并列的一步，而是驱动各模块的**中枢**。详见 [DMP 中枢](/docs/concepts/dmp-hub)。

```bash
# 示例：通过 CLI 查看数据集版本清单
dmp dataset describe --name urban-drive --version 2026.08.1
```
