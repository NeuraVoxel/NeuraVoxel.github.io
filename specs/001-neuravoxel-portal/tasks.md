# Tasks: NeuraVoxel 产品门户站点

**Input**: Design documents from `/specs/001-neuravoxel-portal/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Not explicitly requested in spec — verification via `astro build` + quickstart.md manual checks. No TDD test tasks included.

**Organization**: Tasks grouped by user story (P1→P5) for independent delivery.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies on incomplete tasks)
- **[Story]**: Maps to spec user stories US1–US5

## Path Conventions

Single Astro project at repository root: `src/`, `public/`, `.github/workflows/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Astro static site and CI pipeline

- [x] T001 Create `package.json` with scripts (`dev`, `build`, `preview`, `check`) and Astro 5 dependencies in repository root
- [x] T002 Create `astro.config.mjs` with `output: 'static'`, `site: 'https://neuravoxel.cn'`, and Shiki syntax highlighting in repository root
- [x] T003 Create `tsconfig.json` extending Astro strict defaults in repository root
- [x] T004 [P] Copy domain config to `public/CNAME` with content `neuravoxel.cn`
- [x] T005 [P] Create `.github/workflows/deploy.yml` for GitHub Pages build and deploy from `dist/`
- [x] T006 Remove obsolete placeholder `index.html` at repository root (superseded by Astro `src/pages/`)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 Create `src/content.config.ts` with Zod schemas for `modules` and `docs` collections per `specs/001-neuravoxel-portal/contracts/module-frontmatter.schema.json` and `doc-frontmatter.schema.json`
- [x] T008 [P] Implement `src/lib/i18n.ts` with dot-path `t(key)` lookup for `zh` and `en`
- [x] T009 [P] Implement `src/lib/locale.ts` with `prefix`, `localizePath()`, and `alternateLocalePath()` helpers
- [x] T010 [P] Implement `src/lib/content.ts` with `getSortedModules(locale)` and `getDocTree(locale)` helpers
- [x] T011 [P] Create `src/i18n/zh.json` with all keys from `specs/001-neuravoxel-portal/contracts/i18n-keys.md`
- [x] T012 [P] Create `src/i18n/en.json` with identical key structure to `src/i18n/zh.json`
- [x] T013 Create `src/layouts/BaseLayout.astro` importing `src/styles/tokens.css` and `src/styles/global.css` with `<slot />` for page content
- [x] T014 [P] Create `src/components/SiteHeader.astro` with nav links and skip-link anchor per `design/preview.html`
- [x] T015 [P] Create `src/components/SiteFooter.astro` with about/contact/copyright placeholders per spec FR-006
- [x] T016 [P] Create `src/styles/prose.css` for Markdown typography (headings, code, tables)
- [x] T017 Wire `SiteHeader` and `SiteFooter` into `src/layouts/BaseLayout.astro`

**Checkpoint**: Foundation ready — user story implementation can begin

---

## Phase 3: User Story 1 — 产业客户理解数据闭环价值 (Priority: P1) 🎯 MVP

**Goal**: Chinese homepage with DMP-centric loop narrative, industry scenes, and module/doc entry points

**Independent Test**: Open `http://localhost:4321/` — within 2 minutes answer what DMP is, ring capabilities, and data return flow without external links

### Implementation for User Story 1

- [x] T018 [P] [US1] Create `src/data/scenes.zh.json` with `autonomous-driving` and `embodied-ai` entries per `specs/001-neuravoxel-portal/data-model.md`
- [x] T019 [P] [US1] Migrate home page styles from `design/preview.css` to `src/styles/pages/home.css`
- [x] T020 [P] [US1] Extract SVG loop diagram into `src/components/LoopDiagram.astro` from `design/preview.html` with linkable module/doc nodes
- [x] T021 [P] [US1] Create `src/components/Hero.astro` with brand, claim, CTAs, and `LoopDiagram` per preview §1
- [x] T022 [P] [US1] Create `src/components/LoopSection.astro` with DMP hub, ring steps, and download/API/DDS channel summary
- [x] T023 [P] [US1] Create `src/components/SceneGrid.astro` reading from `src/data/scenes.zh.json`
- [x] T024 [P] [US1] Create `src/components/EntryCards.astro` linking to `/modules` and `/docs`
- [x] T025 [P] [US1] Create `src/components/ModuleStrip.astro` showing DMP + three bridge chips with status badges
- [x] T026 [US1] Compose `src/pages/index.astro` using `BaseLayout` and all home components (Hero, LoopSection, SceneGrid, EntryCards, ModuleStrip)
- [x] T027 [US1] Import `src/styles/pages/home.css` in `src/pages/index.astro`

**Checkpoint**: Homepage fully narrates DMP loop — MVP deployable

---

## Phase 4: User Story 2 — 技术读者发现模块与获取资源 (Priority: P2)

**Goal**: Module list and detail pages with 4 zh modules, DMP pinned as core

**Independent Test**: Navigate `/modules` → `/modules/dmp` — see core badge, integrations, downloads/links

### Implementation for User Story 2

- [x] T028 [P] [US2] Create `src/content/modules/zh/dmp.md` with full frontmatter (`role: core`, integrations, downloads, links) per data-model inventory
- [x] T029 [P] [US2] Create `src/content/modules/zh/annotation-bridge.md` with `role: ring`, `status: preview`
- [x] T030 [P] [US2] Create `src/content/modules/zh/training-bridge.md` with `role: ring`, `status: preview`
- [x] T031 [P] [US2] Create `src/content/modules/zh/simulation-bridge.md` with `role: ring`, `status: planned`
- [x] T032 [P] [US2] Create `src/components/ModuleCard.astro` displaying title, summary, role, status badges
- [x] T033 [US2] Create `src/layouts/ModuleLayout.astro` rendering downloads, links, integrations, and Markdown body
- [x] T034 [US2] Create `src/pages/modules/index.astro` listing modules via `getSortedModules('zh')` with DMP first
- [x] T035 [US2] Create `src/pages/modules/[slug].astro` with static paths for 4 module slugs and 404 for unknown slugs
- [x] T036 [US2] Add doc cross-links from module pages using `docAnchor` frontmatter field in `src/layouts/ModuleLayout.astro`

**Checkpoint**: All 4 zh modules browsable; DMP detail complete

---

## Phase 5: User Story 3 — 技术读者查阅文档与版本说明 (Priority: P3)

**Goal**: Docs index and Markdown pages with sidebar, code blocks, tables, and cross-links

**Independent Test**: Open `/docs/concepts/data-loop` — rendered MD with code/table; link to `/modules/dmp` works

### Implementation for User Story 3

- [x] T037 [P] [US3] Create `src/content/docs/zh/getting-started/overview.md`
- [x] T038 [P] [US3] Create `src/content/docs/zh/concepts/data-loop.md` with module cross-link to DMP
- [x] T039 [P] [US3] Create `src/content/docs/zh/concepts/dmp-hub.md`
- [x] T040 [P] [US3] Create `src/content/docs/zh/dmp/interactions.md` covering download, API, DDS
- [x] T041 [P] [US3] Create `src/content/docs/zh/releases/changelog.md` with initial v1 release notes
- [x] T042 [P] [US3] Create `src/components/DocSidebar.astro` grouped by section (getting-started, concepts, dmp, integrations, releases)
- [x] T043 [P] [US3] Create `src/components/Prose.astro` wrapping rendered Markdown with `src/styles/prose.css`
- [x] T044 [US3] Create `src/layouts/DocLayout.astro` with sidebar and Prose content area
- [x] T045 [US3] Create `src/pages/docs/index.astro` showing doc tree from `getDocTree('zh')`
- [x] T046 [US3] Create `src/pages/docs/[...slug].astro` with static path generation and Shiki-highlighted code blocks

**Checkpoint**: ≥5 zh docs render; releases/changelog accessible

---

## Phase 6: User Story 4 — 中英文访客切换语言 (Priority: P4)

**Goal**: `/en` mirror routes, language switch, missing-translation fallback

**Independent Test**: Toggle language on `/modules/dmp` → `/en/modules/dmp`; untranslated doc shows fallback with link to Chinese

### Implementation for User Story 4

- [x] T047 [P] [US4] Create `src/data/scenes.en.json` mirroring structure of `src/data/scenes.zh.json`
- [x] T048 [P] [US4] Create `src/content/modules/en/dmp.md` (English module content)
- [x] T049 [P] [US4] Create partial English docs in `src/content/docs/en/getting-started/overview.md` (at least one; leave others for fallback test)
- [x] T050 [US4] Create `src/components/LanguageSwitch.astro` using `src/lib/locale.ts` path mapping
- [x] T051 [US4] Create `src/components/MissingTranslation.astro` with i18n copy and link to Chinese equivalent
- [x] T052 [US4] Integrate `LanguageSwitch` into `src/components/SiteHeader.astro`
- [x] T053 [US4] Create `src/pages/en/index.astro` mirroring `src/pages/index.astro` with `locale='en'` and English data
- [x] T054 [US4] Create `src/pages/en/modules/index.astro` and `src/pages/en/modules/[slug].astro` with EN fallback via `MissingTranslation.astro`
- [x] T055 [US4] Create `src/pages/en/docs/index.astro` and `src/pages/en/docs/[...slug].astro` with missing-doc fallback

**Checkpoint**: Language toggle works on home, modules, docs; fallback tested

---

## Phase 7: User Story 5 — 移动端访客浏览门户 (Priority: P5)

**Goal**: Responsive layouts for home, modules, and docs at ≤768px without horizontal scroll

**Independent Test**: DevTools 375px — home, `/modules`, `/docs/concepts/data-loop` readable and navigable

### Implementation for User Story 5

- [x] T056 [P] [US5] Add mobile breakpoints and stacked hero layout in `src/styles/pages/home.css`
- [x] T057 [P] [US5] Add responsive module grid styles in `src/styles/pages/modules.css` (create file)
- [x] T058 [P] [US5] Add collapsible or stacked sidebar styles for docs in `src/styles/prose.css`
- [x] T059 [US5] Add mobile nav pattern (hamburger or condensed nav) in `src/components/SiteHeader.astro` and `src/styles/global.css`

**Checkpoint**: All primary pages pass mobile independent test

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Error pages, a11y, build verification, documentation

- [x] T060 Create `src/pages/404.astro` with localized nav links to `/`, `/modules`, `/docs` per `specs/001-neuravoxel-portal/contracts/routes.md`
- [x] T061 [P] Create `src/pages/en/404.astro` mirroring Chinese 404 with English i18n strings
- [x] T062 [P] Create `src/pages/about.astro` and `src/pages/en/about.astro` with brief about/contact content
- [x] T063 Ensure skip-link, focus styles, and `prefers-reduced-motion` support in `src/layouts/BaseLayout.astro` and `src/styles/global.css`
- [x] T064 Ensure external links use `rel="noopener noreferrer"` in `src/layouts/ModuleLayout.astro` and shared link component if any
- [x] T065 Update `README.md` with dev/build/deploy instructions from `specs/001-neuravoxel-portal/quickstart.md`
- [x] T066 Run `npm run check && npm run build` and fix all schema/route errors until clean build
- [x] T067 Validate all quickstart scenarios V1–V7 in `specs/001-neuravoxel-portal/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 — **BLOCKS all user stories**
- **US1 (Phase 3)**: Depends on Phase 2 — MVP, no other story required
- **US2 (Phase 4)**: Depends on Phase 2 — independently testable (home links optional)
- **US3 (Phase 5)**: Depends on Phase 2 — independently testable
- **US4 (Phase 6)**: Depends on Phase 2; **soft dependency** on US1–US3 for meaningful mirror content
- **US5 (Phase 7)**: Depends on US1–US3 pages existing for responsive testing
- **Polish (Phase 8)**: Depends on desired user stories being complete

### User Story Dependencies

| Story | Depends on | Independent? |
|-------|------------|--------------|
| US1 (P1) | Foundational only | ✅ Yes |
| US2 (P2) | Foundational only | ✅ Yes |
| US3 (P3) | Foundational only | ✅ Yes |
| US4 (P4) | Foundational; content richer after US1–US3 | ⚠️ Partial |
| US5 (P5) | US1–US3 pages for full test | ⚠️ Partial |

### Within Each User Story

- Content files `[P]` can be written in parallel
- Components `[P]` can be built in parallel before page composition
- Page routes depend on layouts + components + content for that story

### Parallel Opportunities

**Phase 1**: T004, T005 parallel after T001–T003  
**Phase 2**: T008–T012, T014–T016 parallel after T007  
**US1**: T018–T025 all parallel until T026 composition  
**US2**: T028–T031 parallel; T032 parallel with content  
**US3**: T037–T043 parallel; T045–T046 sequential after layouts  
**US4**: T047–T049 parallel; T053–T055 parallel after T050–T051  
**US5**: T056–T058 parallel  
**Polish**: T061–T062 parallel  

---

## Parallel Example: User Story 1

```bash
# Launch all US1 components together:
T018: src/data/scenes.zh.json
T019: src/styles/pages/home.css
T020: src/components/LoopDiagram.astro
T021: src/components/Hero.astro
T022: src/components/LoopSection.astro
T023: src/components/SceneGrid.astro
T024: src/components/EntryCards.astro
T025: src/components/ModuleStrip.astro

# Then compose:
T026: src/pages/index.astro
T027: import home.css
```

## Parallel Example: User Story 2

```bash
# All 4 module markdown files in parallel:
T028–T031: src/content/modules/zh/*.md

# Then pages:
T034: src/pages/modules/index.astro
T035: src/pages/modules/[slug].astro
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T006)
2. Complete Phase 2: Foundational (T007–T017)
3. Complete Phase 3: User Story 1 (T018–T027)
4. **STOP and VALIDATE**: Homepage independent test
5. Optional early deploy to verify GitHub Pages pipeline (T005)

### Incremental Delivery

1. Setup + Foundational → foundation ready
2. US1 → MVP homepage → deploy/demo
3. US2 → modules channel → deploy
4. US3 → docs channel → deploy
5. US4 → bilingual → deploy
6. US5 + Polish → production-ready v1

### Parallel Team Strategy

With 3 developers after Foundational:

- **Dev A**: US1 (home) → US5 home responsive
- **Dev B**: US2 (modules)
- **Dev C**: US3 (docs) → US4 (i18n mirrors)

---

## Notes

- Visual reference: always compare against `design/preview.html` — do not introduce generic template styling
- Content schemas are source of truth in `src/content.config.ts`; keep aligned with `specs/001-neuravoxel-portal/contracts/`
- Do not implement login, API routes, or `/journal` — out of v1 scope per spec FR-001/FR-002
- Commit after each phase checkpoint
- `[P]` tasks = different files; avoid two agents editing same `.astro` file simultaneously
