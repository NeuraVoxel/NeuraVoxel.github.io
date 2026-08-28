# Token 计价器 · 日常办公入口设计

**日期:** 2026-08-28  
**状态:** 已确认  
**范围:** 工坊「日常办公」新增外链作品 + 首页场景卡同步

## 目标

在日常办公场景下新增「Token 计价器」入口，指向已有线上工具，并让首页作品数量与描述与工坊一致。

## 方案

最小改动：只更新工坊数据与首页文案，不新建页面、不改组件与类型。

## 工坊数据

文件：`src/data/workshop.zh.json` → `scenes` 中 `id: "office"`。

### 场景级

| 字段 | 变更 |
|------|------|
| `countLabel` | `"1 项作品"` → `"2 项作品"` |

### 新增产品

| 字段 | 值 |
|------|-----|
| `id` | `token-calculator` |
| `name` | Token 计价器 |
| `summary` | 多模型 Token 计价与成本对比工具。选模型、估用量、算费用，支撑办公场景的成本复盘。 |
| `status` | `available` |
| `tags` | `{ label: "规划", stage: "plan" }` · `{ label: "复盘", stage: "review" }` · `{ label: "优化", stage: "optimize" }` |
| `openUrl` | `https://www.neuravoxel.cn/token-calculator/` |
| `docUrl` | 不设 |

与现有 `task-agent` 并列，顺序：先 Task Agent，后 Token 计价器。

## 首页场景卡

文件：`src/pages/index.astro` → 链接 `/workshop/#office` 的场景卡。

| 字段 | 值 |
|------|-----|
| `scene-card__desc` | 规划→执行→复盘→优化的办公闭环。Task Agent 推进工作项，Token 计价器让 AI 成本可控。 |
| `scene-card__meta` | `2 项作品 →` |

## 非目标

- 本站不自建 `/token-calculator/` 页面或计价逻辑
- 不新增英文工坊数据或 i18n 文案
- 不同步 `design/zeyo/` 静态稿
- 不重构首页为从 `workshop.zh.json` 推导
- 不改 `workshop.types.ts` 或工坊渲染组件

## 验收

1. `/workshop/#office` 可见「Token 计价器」卡片，简介与标签正确，打开链接为 `https://www.neuravoxel.cn/token-calculator/`。
2. 日常办公 `countLabel` / 首页 meta 均为「2 项作品」。
3. 首页日常办公描述同时点到 Task Agent 与 Token 计价器。
4. 其他场景与作品无回归。
