---
title: 标注平台对接
summary: 连接外部标注平台，实现任务下发与标注结果回流 DMP。
role: ring
status: preview
order: 1
industries:
  - autonomous-driving
docAnchor: integrations/annotation
links:
  - label: 对接说明
    url: /docs/integrations/annotation
    external: false
---

## 概述

Annotation Bridge 将第三方标注平台与 DMP 连接：从 DMP 拉取待标数据包，在标注平台完成任务编排，并将标注结果与质检元数据写回 DMP。

## 典型流程

1. 在 DMP 中选取版本化数据集并生成标注任务包
2. Bridge 通过 API 将任务同步至标注平台
3. 标注完成后，结果经 manifest 校验回流 DMP
4. 训练/微调模块按新版本清单消费标注数据

## 状态

当前为 **Preview**：介绍与对接架构已就绪，生产环境连接器按需部署。
