# Quickstart: NeuraVoxel 产品门户站点

**Date**: 2026-08-26  
**Feature**: 001-neuravoxel-portal

## Prerequisites

- Node.js 20+
- npm 10+ (or pnpm/yarn)
- Git

## Initial Setup (implementation phase)

```bash
cd /home/jeff/Documents/NeuraVoxel/NeuraVoxel.github.io

# Scaffold Astro (when implementing)
npm create astro@latest . -- --template minimal --typescript strict --install false
# Then merge with existing src/styles, design/preview assets per plan.md

npm install
```

> **Note**: Astro scaffold 将在 `/speckit-implement` 阶段执行；当前仓库含 design tokens 与 preview，尚未初始化 `package.json`。

## Development

```bash
# Start dev server
npm run dev
# → http://localhost:4321

# Type/content check
npm run check   # astro check

# Production build
npm run build
npm run preview # preview dist/
```

## Key Paths

| Path | Purpose |
|------|---------|
| `src/pages/` | 中文路由 |
| `src/pages/en/` | 英文镜像路由 |
| `src/content/modules/{zh,en}/` | 模块 Markdown |
| `src/content/docs/{zh,en}/` | 文档 Markdown |
| `src/i18n/` | UI 文案 JSON |
| `src/styles/tokens.css` | 设计令牌 |
| `design/preview.html` | 视觉参考（只读） |
| `public/CNAME` | 域名 `neuravoxel.cn` |

## Verification Scenarios

### V1: 首页闭环叙事 (P1)

```bash
npm run dev
# Open http://localhost:4321/
```

- [ ] 可见 NeuraVoxel 品牌与 DMP 英雄区
- [ ] 「了解闭环」锚点跳转至 `#loop`
- [ ] 闭环节含 DMP 中枢 + 下载/API/DDS 摘要
- [ ] 两个产业场景卡片可读

### V2: 模块频道 (P2)

```
http://localhost:4321/modules
http://localhost:4321/modules/dmp
```

- [ ] 列表 4 模块，DMP 置顶且标记 Core
- [ ] DMP 页含 integrations、downloads/links

### V3: 文档频道 (P3)

```
http://localhost:4321/docs
http://localhost:4321/docs/releases/changelog
```

- [ ] 目录含 5 大 section
- [ ] 代码块与表格正确渲染

### V4: 双语 (P4)

```
http://localhost:4321/en
```

- [ ] 导航语言切换 `/` ↔ `/en`
- [ ] 缺译页显示「暂无英文」+ 中文链接

### V5: 移动端 (P5)

DevTools → 375px width

- [ ] 首页无横向滚动
- [ ] 模块/文档页导航可用

### V6: 404

```
http://localhost:4321/does-not-exist
```

- [ ] 本地化 404 + 回首页/模块/文档链接

### V7: 构建与部署

```bash
npm run build
# dist/ contains index.html, CNAME, all routes
```

- [ ] `astro build` 零错误
- [ ] `dist/CNAME` 内容为 `neuravoxel.cn`

## CI / Deploy

Push to `main` triggers `.github/workflows/deploy.yml`:

1. `npm ci`
2. `npm run build`
3. Deploy `dist/` to GitHub Pages

Production URL: https://neuravoxel.cn

## Troubleshooting

### 构建失败：Content Collection schema

检查 module/doc frontmatter 是否符合 `specs/001-neuravoxel-portal/contracts/*.schema.json`。

### 英文页 404 而非 fallback

确认 `src/pages/en/modules/[slug].astro` 实现了缺译检测逻辑。

### 样式与 preview 不一致

对照 `design/preview.css`，确认 tokens 与组件 class 已迁移至 `src/styles/`。

### GitHub Pages 404

确认 `astro.config.mjs` 中 `site: 'https://neuravoxel.cn'` 且 workflow 上传的是 `dist/` 根目录。
