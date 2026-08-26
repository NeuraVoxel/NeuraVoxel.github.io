---
title: 仿真平台对接
summary: 向仿真环境分发场景包，回收评估结果与难例回流 DMP。
role: ring
status: planned
order: 3
industries:
  - autonomous-driving
  - embodied-ai
docAnchor: integrations/simulation
links:
  - label: 对接说明（筹备中）
    url: /docs/integrations/simulation
    external: false
---

## 概述

Simulation Bridge 将 DMP 中的场景包、传感器配置与评价指标模板分发至仿真平台，运行后将评估报告、回放片段与难例索引回流 DMP，闭合「训练 — 仿真 — 数据」环路。

## 规划能力

- 场景包版本与 DMP 数据集双向引用
- 批量仿真任务队列与结果聚合
- 与 Training Bridge 共享 manifest 契约

## 状态

当前为 **Planned**：架构与接口已在文档频道说明，产品连接器后续发布。
