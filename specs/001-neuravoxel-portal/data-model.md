# Data Model: NeuraVoxel 产品门户站点

**Date**: 2026-08-26  
**Feature**: 001-neuravoxel-portal

## Overview

v1 为纯静态内容站点，无数据库。所有实体以 Markdown frontmatter + JSON i18n 文件持久化，经 Astro Content Collections 在构建期校验与查询。

---

## Entities

### Module（模块）

代表 NeuraVoxel 产品能力单元（DMP 与三个 Bridge）。

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| slug | string | Yes | URL 标识；由文件名推导（如 `dmp.md` → `dmp`） |
| locale | enum | Yes | `zh` \| `en`；由目录路径推导 |
| title | string | Yes | 显示名称 |
| summary | string | Yes | 一句话介绍 |
| role | enum | Yes | `core` \| `ring` |
| status | enum | Yes | `available` \| `preview` \| `planned` |
| order | number | No | 环上模块排序；`core` 始终置顶 |
| downloads | DownloadItem[] | No | 下载资源列表 |
| links | ExternalLink[] | No | 控制台、仓库、文档等外链 |
| integrations | enum[] | No | `dataset_download` \| `service_api` \| `dds`；**DMP 必填** |
| industries | string[] | No | 如 `autonomous-driving`、`embodied-ai` |
| docAnchor | string | No | 关联文档路径（如 `dmp/overview`） |
| body | markdown | Yes | 产品介绍正文 |

**Validation Rules**:
- v1 必须存在 slug：`dmp`、`annotation-bridge`、`training-bridge`、`simulation-bridge`
- 有且仅有一个 `role: core`（DMP）
- DMP 的 `integrations` 必须包含全部三项
- `downloads[].url` 与 `links[].url` 必须为有效 URL 或站内相对路径
- 中文 locale 下四个 slug 均 MUST 存在；英文 MAY 部分缺失

**Sort Order** (列表页):
1. `role === 'core'` 优先
2. 同 role 按 `order` 升序，缺省按 slug 字母序

**Relationships**:
- Module → Document（via `docAnchor` / links）
- Module → Industry Scene（via `industries`）

---

### Document（文档）

代表一篇帮助/概念/版本文档。

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| slug | string[] | Yes | 路径段（如 `concepts/data-loop`） |
| locale | enum | Yes | `zh` \| `en` |
| title | string | Yes | 页面标题 |
| description | string | No | 摘要 / SEO |
| section | enum | Yes | `getting-started` \| `concepts` \| `dmp` \| `integrations` \| `releases` |
| order | number | No | 目录内排序 |
| draft | boolean | No | 默认 false；true 时不生成页面 |
| body | markdown | Yes | 正文 |

**Validation Rules**:
- 中文 v1 至少 5 篇独立页面，覆盖 `concepts`、`dmp`、`releases`
- `section` 必须与文件路径首段一致
- 内链至模块使用约定语法或相对路径，构建期解析为 `/modules/[slug]`

**Relationships**:
- Document → Module（正文内链接）
- Document → Document（目录树 / 内链）

---

### DownloadItem（下载项）

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| label | string | Yes | 显示标签 |
| url | string | Yes | 下载 URL |
| type | string | No | 如 `installer`、`sdk`、`docs` |

---

### ExternalLink（外链）

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| label | string | Yes | 显示标签 |
| url | string | Yes | 目标 URL |
| external | boolean | No | 默认 true；渲染 `target="_blank" rel="noopener noreferrer"` |

---

### IndustryScene（产业场景）

首页展示用；v1 可存于 i18n JSON 或 `src/data/scenes.{locale}.json`（非 collection）。

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | `autonomous-driving` \| `embodied-ai` |
| title | string | Yes | 场景名称 |
| pain | string | Yes | 痛点一句 |
| narrative | string | Yes | 数据进 DMP、环上消费与回流 |
| moduleSlugs | string[] | No | 相关模块 slug |
| docPath | string | No | 相关文档路径 |

**Validation Rules**: v1 固定 2 条记录。

---

### UiCopy（界面文案）

`src/i18n/zh.json` / `en.json` 键值对。

| Namespace | Examples |
|-----------|----------|
| nav | `home`, `modules`, `docs`, `loop`, `scenes` |
| cta | `learnLoop`, `viewModules`, `readDocs` |
| footer | `about`, `contact`, `copyright` |
| status | `available`, `preview`, `planned`, `core` |
| errors | `notFound`, `missingTranslation` |
| meta | `siteTitle`, `siteDescription` |

**Validation Rules**: 中英文 key 集合 MUST 一致；值可阶段性不同。

---

### LocaleContext（运行时）

非持久化；每个 Astro 页面携带。

| Field | Type | Description |
|-------|------|-------------|
| locale | `zh` \| `en` | 当前语言 |
| prefix | string | `''` 或 `'/en'` |
| t(key) | function | 取 i18n 字符串 |
| localizePath(path) | function | 切换语言的路径映射 |

---

## State Transitions

### Module.status（内容维护）

```
planned → preview → available
```

站内仅展示状态徽章，无自动流转；由内容作者更新 frontmatter。

---

## Build-Time vs Runtime

| Concern | When |
|---------|------|
| Schema validation | `astro build` / `astro sync` |
| Missing EN module/doc | Runtime fallback page |
| Unknown route | Static 404.html |
| Broken internal link | Prefer build-time warning |

---

## v1 Content Inventory (minimum)

### Modules (zh required, en optional)

| slug | role | status (initial) |
|------|------|------------------|
| dmp | core | available |
| annotation-bridge | ring | preview |
| training-bridge | ring | preview |
| simulation-bridge | ring | planned |

### Documents (zh, minimum 5)

| path | section |
|------|---------|
| getting-started/overview | getting-started |
| concepts/data-loop | concepts |
| concepts/dmp-hub | concepts |
| dmp/interactions | dmp |
| releases/changelog | releases |
