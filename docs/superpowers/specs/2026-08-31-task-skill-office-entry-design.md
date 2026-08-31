# Task Skill · AI办公入口设计

**日期:** 2026-08-31  
**状态:** 已确认  
**范围:** 工坊「AI办公」新增外链 Skill 作品 + 首页场景卡同步

## 目标

在 AI办公场景下新增「Task Skill」入口，指向 GitHub 仓库 `https://github.com/NeuraVoxel/task-skill`，并让首页作品数量与描述与工坊一致。

## 方案

最小改动：只更新工坊数据与首页文案，不新建页面、不改组件与类型。场景级 `loopSteps`（规划 / 执行 / 复盘 / 优化）不变。

## 工坊数据

文件：`src/data/workshop.zh.json` → `scenes` 中 `id: "office"`。

### 场景级

| 字段 | 变更 |
|------|------|
| `countLabel` | `"3 项作品"` → `"4 项作品"` |

### 新增产品

| 字段 | 值 |
|------|-----|
| `id` | `task-skill` |
| `name` | Task Skill |
| `summary` | 一组 Cursor Agent Skill：把仓库根目录的 TODO.md 变成「认领 → 开发 → 完成 → 合并」工作流。账本只在 primary（主工作区）上改；并行开发用 git worktree。 |
| `status` | `available` |
| `tags` | 认领(`plan`) → 开发(`execute`) → 完成(`review`) → 合并(`optimize`) |
| `openUrl` | `https://github.com/NeuraVoxel/task-skill` |
| `docUrl` | 不设 |

顺序：Task Agent → Token 计价器 → DSH Turn Cost → Task Skill。

## 首页场景卡

文件：`src/pages/index.astro` → 链接 `/workshop/#office` 的场景卡。

| 字段 | 值 |
|------|-----|
| `scene-card__desc` | 规划→执行→复盘→优化的办公闭环。Task Agent 与 Task Skill 推进任务协作，Token 计价器与 DSH Turn Cost 让 AI 成本可控。 |
| `scene-card__meta` | `4 项作品 →` |

## 非目标

- 本站不自建 Skill 安装页或文档页
- 不新增英文工坊数据或 i18n 文案
- 不同步 `design/zeyo/` 静态稿
- 不改 `workshop.types.ts` 或工坊渲染组件
- 不改场景级 `loopSteps`
- 不改 `tools.zh.json` / 联系页 / 文章

## 验收

1. `/workshop/#office` 可见「Task Skill」卡片，简介与四标签（认领 / 开发 / 完成 / 合并）正确，打开链接为 GitHub 仓库。
2. AI办公 `countLabel` / 首页 meta 均为「4 项作品」。
3. 首页 AI办公描述点到 Task Agent、Task Skill、Token 计价器与 DSH Turn Cost。
4. 其他场景与作品无回归。
