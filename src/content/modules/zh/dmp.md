---
title: DMP 数据管理平台
summary: 产业数据闭环的数据中枢——组织、版本、权限、分发与回流。
role: core
status: available
order: 0
integrations:
  - dataset_download
  - service_api
  - dds
industries:
  - autonomous-driving
  - embodied-ai
docAnchor: dmp/interactions
downloads:
  - label: DMP CLI (Linux x64)
    url: https://github.com/NeuraVoxel/dmp/releases/latest
    type: installer
links:
  - label: 概念文档 — DMP 中枢
    url: /docs/concepts/dmp-hub
    external: false
  - label: 交互方式说明
    url: /docs/dmp/interactions
    external: false
---

## 概述

DMP（Data Management Platform）是 NeuraVoxel 产业数据闭环的**数据中枢**。环上的标注、训练/微调、仿真等能力通过 DMP 获取版本化数据集、回写元数据，而非各自维护孤立的数据副本。

## 核心能力

- **数据集组织**：按产业场景、采集批次与传感器类型分层管理
- **版本与清单**：不可变版本号 + manifest 校验，支撑训练/仿真复现
- **权限与审计**：面向团队与产线的访问控制与操作留痕
- **分发与回流**：经下载、API、DDS 等通道向环上模块供给数据，并登记回流结果

## 下一步

详细交互说明见 [DMP 交互方式](/docs/dmp/interactions) 与 [版本发布](/docs/releases/changelog)。
