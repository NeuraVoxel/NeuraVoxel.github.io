# Implementation Plan: NeuraVoxel 产品门户站点

**Branch**: `001-neuravoxel-portal` | **Date**: 2026-08-26 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-neuravoxel-portal/spec.md`

## Summary

建设 NeuraVoxel 静态产品门户：中文默认、英文 `/en` 镜像；首页呈现 DMP 中枢闭环叙事（视觉以 `design/preview.html` 为准）；模块与文档频道由 Markdown Content Collections 驱动；部署至 GitHub Pages（neuravoxel.cn）。

**Technical approach**: Astro 5 静态站点 + Zod Content Collections + Shiki 高亮 + 现有 CSS tokens；从 preview 迁移 Hero/Loop/Scenes 组件；GitHub Actions 发布。

## Technical Context

**Language/Version**: TypeScript 5.x / Node.js 20+  
**Primary Dependencies**: Astro 5.x, @astrojs/mdx (optional), Zod (via astro:content), Shiki  
**Storage**: N/A（Git 管理的 Markdown + JSON i18n）  
**Testing**: `astro check` + `astro build`；推荐 Playwright smoke（首页/模块/文档/404/语言切换）  
**Target Platform**: GitHub Pages 静态托管；现代浏览器 + 移动端  
**Project Type**: Static marketing + documentation site  
**Performance Goals**: 首屏 3s 内可交互阅读（常见宽带）；Lighthouse Performance ≥ 85  
**Constraints**: 无 SSR/后端/API/登录；无重型 UI 库；尊重 `prefers-reduced-motion`  
**Scale/Scope**: ~10 页面模板、4 模块、≥5 中文文档、2 产业场景、2 语言

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

> `.specify/memory/constitution.md` 尚未 ratify；以下采用本项目 interim gates（源自 spec + 设计文档）。

| Gate | Pre-Phase 0 | Post-Phase 1 | Notes |
|------|-------------|--------------|-------|
| Spec-first | ✅ PASS | ✅ PASS | spec.md + checklist 已完成 |
| Static-only | ✅ PASS | ✅ PASS | 无后端/API 设计 |
| Scope bounded (v1) | ✅ PASS | ✅ PASS | 4 模块、2 场景、无 journal |
| Content-as-code | ✅ PASS | ✅ PASS | Collections + i18n 分离 |
| Visual fidelity | ✅ PASS | ✅ PASS | preview.html + tokens 为参考 |
| i18n contract | ✅ PASS | ✅ PASS | routes + i18n-keys 已定义 |

**Gate Status**: ✅ All gates passed. Phase 0/1 complete.

## Project Structure

### Documentation (this feature)

```text
specs/001-neuravoxel-portal/
├── plan.md              # This file
├── research.md          # Phase 0 — technology decisions
├── data-model.md        # Phase 1 — entities & validation
├── quickstart.md        # Phase 1 — dev/deploy verification
├── contracts/           # Phase 1 — routes, schemas, i18n
│   ├── routes.md
│   ├── module-frontmatter.schema.json
│   ├── doc-frontmatter.schema.json
│   └── i18n-keys.md
├── checklists/
│   └── requirements.md
└── tasks.md             # Phase 2 (/speckit-tasks — not yet created)
```

### Source Code (repository root)

```text
.github/workflows/
└── deploy.yml                 # GitHub Pages CI

public/
├── CNAME                      # neuravoxel.cn
└── favicon.svg                # (optional)

src/
├── content.config.ts          # Zod schemas for collections
├── content/
│   ├── modules/
│   │   ├── zh/*.md            # dmp, *-bridge (4 files)
│   │   └── en/*.md            # partial OK
│   └── docs/
│       ├── zh/**/*.md         # ≥5 pages
│       └── en/**/*.md         # partial OK
├── data/
│   └── scenes.{zh,en}.json    # industry scenes (home)
├── i18n/
│   ├── zh.json
│   └── en.json
├── lib/
│   ├── i18n.ts                # t(), key lookup
│   ├── locale.ts              # prefix, path switching
│   └── content.ts             # sorted modules, doc tree
├── layouts/
│   ├── BaseLayout.astro
│   ├── DocLayout.astro
│   └── ModuleLayout.astro
├── components/
│   ├── SiteHeader.astro
│   ├── SiteFooter.astro
│   ├── LanguageSwitch.astro
│   ├── Hero.astro
│   ├── LoopDiagram.astro      # SVG from preview
│   ├── LoopSection.astro
│   ├── SceneGrid.astro
│   ├── EntryCards.astro
│   ├── ModuleCard.astro
│   ├── ModuleStrip.astro
│   ├── DocSidebar.astro
│   ├── Prose.astro            # MD typography
│   └── MissingTranslation.astro
├── pages/
│   ├── index.astro            # Home (zh)
│   ├── 404.astro
│   ├── about.astro
│   ├── modules/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── docs/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   └── en/                    # Mirror of above
│       ├── index.astro
│       ├── 404.astro
│       ├── about.astro
│       ├── modules/...
│       └── docs/...
└── styles/
    ├── tokens.css             # existing
    ├── global.css             # existing
    ├── prose.css
    └── pages/
        └── home.css           # migrated from design/preview.css

design/                        # Reference only (keep)
├── preview.html
└── preview.css

astro.config.mjs
package.json
tsconfig.json
```

**Structure Decision**: 单 Astro 项目；中文页面在 `pages/` 根，英文在 `pages/en/` 镜像；内容与 UI 文案分离；保留 `design/` 作为只读视觉参考，不直接用于生产构建。

## Phase 0: Research ✅

See [research.md](./research.md). All Technical Context unknowns resolved.

## Phase 1: Design & Contracts ✅

| Artifact | Path |
|----------|------|
| Data model | [data-model.md](./data-model.md) |
| Route contract | [contracts/routes.md](./contracts/routes.md) |
| Module schema | [contracts/module-frontmatter.schema.json](./contracts/module-frontmatter.schema.json) |
| Doc schema | [contracts/doc-frontmatter.schema.json](./contracts/doc-frontmatter.schema.json) |
| i18n contract | [contracts/i18n-keys.md](./contracts/i18n-keys.md) |
| Quickstart | [quickstart.md](./quickstart.md) |

### Implementation mapping (Zod)

`src/content.config.ts` implements schemas equivalent to JSON contracts:

```typescript
// modules collection
const moduleSchema = z.object({
  title: z.string(),
  summary: z.string(),
  role: z.enum(['core', 'ring']),
  status: z.enum(['available', 'preview', 'planned']),
  order: z.number().optional(),
  downloads: z.array(downloadItemSchema).optional(),
  links: z.array(linkSchema).optional(),
  integrations: z.array(z.enum(['dataset_download', 'service_api', 'dds'])).optional(),
  industries: z.array(z.string()).optional(),
  docAnchor: z.string().optional(),
});
```

## Phase 2: Implementation Outline (for /speckit-tasks)

Recommended task order aligned with user story priorities:

| Phase | Scope | Stories |
|-------|-------|---------|
| **A. Scaffold** | Astro init, layouts, i18n lib, CI workflow | — |
| **B. Home** | Hero, LoopDiagram, Scenes, Entries; migrate preview CSS | P1, P5 |
| **C. Modules** | Collection, 4 zh modules, list + detail pages | P2 |
| **D. Docs** | Collection, ≥5 zh docs, sidebar, Shiki | P3 |
| **E. i18n** | `/en` mirror, LanguageSwitch, MissingTranslation | P4 |
| **F. Polish** | 404, about/contact, a11y, build verify | Edge cases |

## Complexity Tracking

> No constitution violations requiring justification.

| Item | Decision | Simpler alternative rejected |
|------|----------|------------------------------|
| Dual page trees (`/` + `/en`) | Explicit mirror routes | Single dynamic `[locale]` — Astro 默认 locale 无前缀时配置更绕 |
| SVG loop diagram | Accessible inline SVG | PNG hero — 无法链接节点、缩放差 |
| JSON Schema + Zod | Build-time safety | 无 schema — 内容错误迟至运行时 |

## Post-Design Constitution Re-check

| Gate | Status |
|------|--------|
| No backend introduced | ✅ |
| Contracts match spec FR-* | ✅ |
| Data model covers all Key Entities | ✅ |
| quickstart covers SC-* verification | ✅ |

**Ready for**: `/speckit-tasks` → `/speckit-implement`
