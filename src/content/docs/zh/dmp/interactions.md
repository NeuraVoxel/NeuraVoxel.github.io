---
title: DMP 交互方式
description: 下载、API 与 DDS 通道
section: dmp
order: 1
---

DMP 通过三种主要通道与训练、标注、仿真及端侧系统交互。

## 数据集下载

版本化 tar/zip 包 + manifest JSON。适用于离线训练与大规模批量拷贝。

## 服务化 API

REST/HTTP 接口供环上模块：

- 按 manifest 拉取 shard 列表
- 回写 experiment / annotation metadata
- 查询版本 lineage

## DDS 通信

近实时流式通道，用于车端、机器人或仿真侧连续数据回传。

| 通道 | 延迟 | 典型场景 |
|------|------|----------|
| 下载 | 批处理 | 训练集群预热 |
| API | 秒级 | 标注任务同步 |
| DDS | 毫秒—秒级 | 路测/真机联调 |

相关模块：[DMP](/modules/dmp)
