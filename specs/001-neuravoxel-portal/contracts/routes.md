# Route Contract: NeuraVoxel Portal

**Version**: 1.0.0  
**Date**: 2026-08-26  
**Feature**: 001-neuravoxel-portal

## Base URL

| Environment | Base |
|-------------|------|
| Production | `https://neuravoxel.cn` |
| Local dev | `http://localhost:4321` |

## Locale Rules

| Locale | URL prefix | Default |
|--------|------------|---------|
| `zh` | _(none)_ | Yes |
| `en` | `/en` | No |

**Language switch**: Same path suffix, toggle prefix.

| Chinese | English |
|---------|---------|
| `/` | `/en` |
| `/modules` | `/en/modules` |
| `/modules/dmp` | `/en/modules/dmp` |
| `/docs/concepts/data-loop` | `/en/docs/concepts/data-loop` |

---

## Routes

### Public pages

| Method | Path pattern | Page | Auth |
|--------|--------------|------|------|
| GET | `/` | Home (zh) | None |
| GET | `/en` | Home (en) | None |
| GET | `/modules` | Module list (zh) | None |
| GET | `/en/modules` | Module list (en) | None |
| GET | `/modules/:slug` | Module detail (zh) | None |
| GET | `/en/modules/:slug` | Module detail (en) | None |
| GET | `/docs` | Docs index (zh) | None |
| GET | `/en/docs` | Docs index (en) | None |
| GET | `/docs/*` | Doc page (zh) | None |
| GET | `/en/docs/*` | Doc page (en) | None |
| GET | `/about` | About (zh) | None |
| GET | `/en/about` | About (en) | None |

### Valid `:slug` values (modules, v1)

`dmp` | `annotation-bridge` | `training-bridge` | `simulation-bridge`

### Error pages

| Condition | Response |
|-----------|----------|
| Unknown path | 404 localized page with nav to `/`, `/modules`, `/docs` |
| EN content missing | 200 fallback page with `missingTranslation` copy + link to zh equivalent |

---

## Anchor routes (home page)

| Anchor | Section |
|--------|---------|
| `#loop` | DMP hub loop |
| `#scenes` | Industry scenes |
| `#entries` | Module/doc entries |

---

## Contract Tests

### T1: Default locale

```
GET /
Expect: 200, HTML lang=zh-CN, contains hero brand
```

### T2: English mirror

```
GET /en/modules/dmp
Expect: 200 OR missing-translation fallback (if en content absent)
```

### T3: Module ordering

```
GET /modules
Expect: first module card is DMP with core badge
```

### T4: 404

```
GET /nonexistent-path
Expect: 404, links to home/modules/docs
```

### T5: Language toggle consistency

```
From /docs/concepts/data-loop switch to EN
Expect: navigates to /en/docs/concepts/data-loop
```

---

## Non-goals (v1)

- No `/api/*` routes
- No `/journal`
- No authenticated routes
