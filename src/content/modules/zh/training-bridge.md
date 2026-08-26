---
title: 训练 / 微调对接
summary: 从 DMP 拉取版本化训练集，登记模型产物与实验元数据。
role: ring
status: preview
order: 2
industries:
  - autonomous-driving
  - embodied-ai
docAnchor: integrations/training
links:
  - label: 对接说明
    url: /docs/integrations/training
    external: false
---

## 概述

Training Bridge 面向训练与微调流水线：按 DMP manifest 拉取数据集，训练结束后将模型 checkpoint、指标与数据版本关联写回 DMP。

## 交互方式

| 方式 | 用途 |
|------|------|
| 数据集下载 | 离线批量训练、大规模 checkpoint 场景 |
| 服务化 API | 在线拉取 shard、回写 experiment metadata |
| DDS | 近实时特征流（机器人/车端联调） |

## 状态

当前为 **Preview**：SDK 与示例流水线文档筹备中。
