# Research: NeuraVoxel 产品门户站点

**Date**: 2026-08-26  
**Feature**: 001-neuravoxel-portal

## Decisions

### 1. 框架：Astro 静态站点

**Decision**: Astro 5.x，`output: 'static'`，无 SSR / 无服务端 adapter。

**Rationale**: 已批准设计文档明确选定 Astro，以平衡营销首页、模块页与 Markdown 文档；Content Collections 原生支持 frontmatter 校验；静态产物可直接部署 GitHub Pages。

**Alternatives considered**:
- **VitePress / Docusaurus**: 文档体验强，门户首页与自定义视觉灵活度弱
- **Next.js static export**: 能力过剩，构建与依赖更重
- **纯 HTML/CSS**: 双语与大量 MD 内容维护成本高

---

### 2. 内容：Content Collections + 按语言分目录

**Decision**: 两个 collection（`modules`、`docs`），物理路径 `src/content/{collection}/{locale}/**`，Zod schema 校验 frontmatter；slug 由文件名/路径推导。

**Rationale**: 设计文档 §2.2 已约定落盘结构；locale 子目录比单文件 `lang` 字段更清晰，便于缺译检测（英文文件不存在即 fallback）。

**Alternatives considered**:
- **单 collection + `locale` 字段**: 查询复杂，同 slug 多语言不易对齐
- **JSON/YAML 数据文件**: 模块正文 Markdown 优势丢失

**Implementation pattern**:
- `modules/zh/dmp.md` → `/modules/dmp`
- `modules/en/dmp.md` → `/en/modules/dmp`（缺文件则 fallback 页）
- `docs/zh/concepts/data-loop.md` → `/docs/concepts/data-loop`

---

### 3. 双语路由：中文无前缀 + `/en` 镜像

**Decision**: 中文页面位于 `src/pages/` 根下；英文镜像位于 `src/pages/en/`；共享 `src/lib/locale.ts` 与 i18n JSON；语言切换通过路径映射（strip/add `/en` 前缀）。

**Rationale**: 符合 FR-004/FR-005 与已批准 IA；Astro 文件路由直观，无需额外 i18n 插件。

**Alternatives considered**:
- **astro-i18next 等插件**: 增加抽象层；本站点路由表固定、规模小
- **query param `?lang=en`**: SEO 与可分享 URL 较差

**Fallback**: 英文模块/文档缺失时渲染 `MissingTranslation.astro`，文案来自 i18n，链回中文同路径。

---

### 4. Markdown 渲染与代码高亮：Shiki

**Decision**: Astro 内置 MDX/Markdown pipeline + Shiki（`theme: 'github-dark-dimmed'` 或自定义接近 void/signal 的 theme）。

**Rationale**: 设计文档指定 Shiki；零运行时依赖，构建期高亮。

**Alternatives considered**:
- **Prism.js**: 需额外客户端脚本
- **无高亮**: 不满足文档频道 FR-017

---

### 5. 样式：现有 design tokens + 从 preview 迁移组件 CSS

**Decision**: 保留 `src/styles/tokens.css`、`global.css`；将 `design/preview.css` 中页面级样式迁移至 `src/styles/pages/home.css` 等；组件化 Hero / LoopDiagram / SceneCard；不引入 Tailwind 或重型 UI 库。

**Rationale**: `design/preview.html` 为已批准视觉参考；tokens 已存在；FR-010 要求独特工业视觉。

**Alternatives considered**:
- **Tailwind**: 快速但易落入通用模板审美
- **CSS-in-JS**: 静态站点无必要

---

### 6. 部署：GitHub Actions → GitHub Pages + CNAME

**Decision**: `.github/workflows/deploy.yml`：`npm ci` → `npm run build` → upload `dist/`；`public/CNAME` 含 `neuravoxel.cn`；`astro.config.mjs` 中 `site: 'https://neuravoxel.cn'`。

**Rationale**: 仓库已是 `NeuraVoxel.github.io` + 根 `CNAME`；Assumptions 指定 GitHub Pages。

**Alternatives considered**:
- **Cloudflare Pages / Netlify**: 未在范围；可后续迁移
- **gh-pages 分支手动推送**: Actions 更可重复

---

### 7. 测试策略：构建校验 + 轻量 E2E

**Decision**:
- **构建门禁**: `astro build` 必须成功；Content Collection schema 在构建期校验
- **链接检查**: `astro check` + 可选 `markdown-link-check` on CI（v1 可选手动）
- **E2E（可选 v1）**: Playwright smoke——首页、模块列表、文档页、404、语言切换

**Rationale**: 静态站点无 API；主要风险为坏链、缺路由、schema 违规；Playwright 可验证 SC-006/SC-007。

**Alternatives considered**:
- **仅人工 QA**: 不满足可重复发布
- **完整视觉回归**: v1 范围外

---

### 8. 首页闭环图：内联 SVG 组件

**Decision**: 将 `design/preview.html` 中 `loop-diagram` SVG 提取为 `LoopDiagram.astro`（或 `.svg` + 部分 CSS 动画类）；节点包裹 `<a>` 指向模块/文档。

**Rationale**: 设计已批准该示意图；SVG 可访问、可缩放、动效用 CSS `stroke-dashoffset` 与 `prefers-reduced-motion` 降级。

**Alternatives considered**:
- **Canvas/WebGL**: 过重，a11y 差
- **静态 PNG**: 缩放与链接热区差

---

## Resolved Unknowns

| Unknown | Resolution |
|---------|------------|
| 技术栈 | Astro static + Content Collections |
| i18n 路由模式 | 中文根路径 + `/en` 前缀镜像 |
| 缺译行为 | 专用 fallback 页 + i18n 文案 |
| 样式来源 | tokens.css + preview.css 迁移 |
| 部署目标 | GitHub Actions → Pages + CNAME |
| 测试 | build + astro check；Playwright smoke 推荐 |

## Summary

所有 Technical Context 项已解析，无遗留 NEEDS CLARIFICATION。实现路径：在现有 design tokens 与 preview 基础上搭建 Astro 项目骨架，按 P1→P5 用户故事增量交付页面与内容。
