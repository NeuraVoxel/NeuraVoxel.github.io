# NeuraVoxel Portal

Product portal for [neuravoxel.cn](https://neuravoxel.cn): DMP-centric data loop narrative, modules, and documentation.

Built with **Astro 5** (static output), bilingual **zh** (default) + **en** (`/en` prefix).

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # astro check
npm run build    # dist/
npm run preview  # preview production build
```

## Structure

- `src/pages/` — Chinese routes
- `src/pages/en/` — English mirror
- `src/content/modules/` — Module markdown (zh/en)
- `src/content/docs/` — Documentation markdown
- `src/i18n/` — UI strings
- `design/preview.html` — Visual reference (approved)

## Deploy

Push to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`) to publish `dist/` to GitHub Pages.

Ensure repository Settings → Pages uses **GitHub Actions** as the source.

## Specs

Feature spec and tasks: `specs/001-neuravoxel-portal/`
