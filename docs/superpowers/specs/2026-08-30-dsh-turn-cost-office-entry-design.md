# DSH Turn Cost · AI办公入口设计

**日期:** 2026-08-30  
**状态:** 已确认  
**范围:** 工坊「AI办公」新增外链插件作品 + 首页场景卡同步

## 目标

在 AI办公场景下新增「DSH Turn Cost」入口，指向 GitHub 仓库，并让首页作品数量与描述与工坊一致。

## 方案

最小改动：只更新工坊数据与首页文案，不新建页面、不改组件与类型。

## 工坊数据

文件：`src/data/workshop.zh.json` → `scenes` 中 `id: "office"`。

### 场景级

| 字段 | 变更 |
|------|------|
| `countLabel` | `"2 项作品"` → `"3 项作品"` |

### 新增产品

| 字段 | 值 |
|------|-----|
| `id` | `dsh-turn-cost` |
| `name` | DSH Turn Cost |
| `summary` | DeepSeek Harness 插件，在每轮对话完成后展示预估人民币费用，支撑 AI 办公成本复盘。 |
| `status` | `available` |
| `tags` | inbox → turn/step → LLM → 工具 → session log → Cost |
| `openUrl` | `https://github.com/NeuraVoxel/dsh-plugin-turn-cost` |
| `docUrl` | 不设 |

顺序：Task Agent → Token 计价器 → DSH Turn Cost。场景级 `loopSteps` 不改。

## 首页场景卡

文件：`src/pages/index.astro` → 链接 `/workshop/#office` 的场景卡。

| 字段 | 值 |
|------|-----|
| `scene-card__desc` | 规划→执行→复盘→优化的办公闭环。Task Agent 推进工作项，Token 计价器与 DSH Turn Cost 让 AI 成本可控。 |
| `scene-card__meta` | `3 项作品 →` |

## 非目标

- 本站不自建插件页或安装逻辑
- 不新增英文工坊数据或 i18n 文案
- 不同步 `design/zeyo/` 静态稿
- 不改 `workshop.types.ts` 或工坊渲染组件

## 验收

1. `/workshop/#office` 可见「DSH Turn Cost」卡片，简介与标签正确，打开链接为 GitHub 仓库。
2. AI办公 `countLabel` / 首页 meta 均为「3 项作品」。
3. 首页 AI办公描述点到 Task Agent、Token 计价器与 DSH Turn Cost。
4. 其他场景与作品无回归。
