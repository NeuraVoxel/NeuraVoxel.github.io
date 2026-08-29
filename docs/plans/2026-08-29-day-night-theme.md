# Day/Night Theme Toggle Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a persisted dark/light theme toggle to the NeuraVoxel main site (`ZeyoLayout`), defaulting to dark, with a header icon control and no FOUC.

**Architecture:** Theme lives on `html[data-theme="dark"|"light"]`. Shared `--ww-*` CSS variables define dark in `:root` and light overrides under `[data-theme="light"]`. An inline `<head>` script reads `localStorage["nv-theme"]` before paint; a header button flips theme and writes storage.

**Tech Stack:** Astro static site, vanilla CSS custom properties, small inline/client JS (no new dependencies). Spec: `docs/superpowers/specs/2026-08-29-day-night-theme-design.md`.

**Testing note:** Repo has no unit-test runner (`astro check` + manual browser checks). Each task uses check/build and explicit manual verification instead of Jest/Vitest.

---

### Task 1: Extend CSS tokens for dual theme

**Files:**
- Modify: `src/styles/zeyo/shared.css` (top `:root` block ~lines 6–40, plus hardcoded color sites)

**Step 1: Add dark-default extras and light override block**

In `:root`, keep existing tokens and add:

```css
  --ww-header-bg: rgba(8, 12, 18, 0.85);
  --ww-signal-hover: #5ed4cc;
  --ww-shadow: rgba(0, 0, 0, 0.45);
  --ww-assistant-bird-bg: #0c1820;
```

Immediately after the `:root { ... }` block, add:

```css
html {
  color-scheme: dark;
}

html[data-theme="light"] {
  color-scheme: light;

  --ww-void: #f2f5f8;
  --ww-surface: #ffffff;
  --ww-elevated: #e8eef4;
  --ww-rule: #c8d2dc;
  --ww-paper: #121820;
  --ww-mist: #4a5a6a;
  --ww-dim: #6a7a8a;

  --ww-signal: #1a8a82;
  --ww-signal-dim: #147068;
  --ww-signal-glow: rgba(26, 138, 130, 0.14);
  --ww-header-bg: rgba(242, 245, 248, 0.88);
  --ww-signal-hover: #147068;
  --ww-shadow: rgba(18, 24, 32, 0.12);
  --ww-assistant-bird-bg: #dce8e6;
}
```

Do **not** override scene/status colors (`--ww-perceive`, `--ww-ok`, etc.).

**Step 2: Replace hardcoded colors with tokens**

In the same file:

| Selector / site | Change to |
|-----------------|-----------|
| `a:hover` `color: #5ed4cc` | `color: var(--ww-signal-hover)` |
| `.site-header` `background: rgba(8, 12, 18, 0.85)` | `background: var(--ww-header-bg)` |
| `.btn--primary:hover` `background: #5ed4cc` | `background: var(--ww-signal-hover)` |
| `.assistant__send:hover` `background: #5ed4cc` | `background: var(--ww-signal-hover)` |
| `.assistant__panel` `box-shadow: ... rgba(0,0,0,0.45)` | use `var(--ww-shadow)` |
| `.assistant__launcher` `box-shadow: ... rgba(0,0,0,0.35)` | `0 8px 24px var(--ww-shadow)` |
| `.assistant__bird-wrap` / similar `background-color: #0c1820` | `background-color: var(--ww-assistant-bird-bg)` |

Leave stage-tag rgba mixes tied to fixed scene hues unless contrast fails in manual check (Task 5).

**Step 3: Fix contact page hover**

**Files:**
- Modify: `src/styles/zeyo/contact.css` (~line 132)

Replace `color: #5ed4cc` with `color: var(--ww-signal-hover)`.

**Step 4: Verify CSS still builds**

Run: `npm run check`

Expected: no errors related to these CSS files (Astro check may not lint CSS deeply; ensure command exits 0 or only pre-existing issues).

**Step 5: Commit**

```bash
git add src/styles/zeyo/shared.css src/styles/zeyo/contact.css
git commit -m "$(cat <<'EOF'
feat(theme): add light CSS tokens and replace hardcoded colors

EOF
)"
```

---

### Task 2: FOUC-prevention script in layout

**Files:**
- Modify: `src/layouts/ZeyoLayout.astro`

**Step 1: Set default attribute and inline boot script**

On `<html>`, set `lang="zh-CN"` and `data-theme="dark"` (default before script runs).

Inside `<head>`, **before** font/stylesheet links, insert:

```html
<script is:inline>
  (function () {
    try {
      var t = localStorage.getItem("nv-theme");
      if (t !== "light" && t !== "dark") t = "dark";
      document.documentElement.setAttribute("data-theme", t);
    } catch (e) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  })();
</script>
```

`is:inline` is required so Astro does not bundle/defer this and FOUC is avoided.

**Step 2: Manual smoke (optional if dev server already running)**

Run: `npm run dev`

Open `/`, DevTools → Elements: `<html data-theme="dark">` on first load.

In console: `localStorage.setItem("nv-theme","light"); location.reload()` → `data-theme="light"` before paint (no long flash of dark if light tokens exist).

**Step 3: Commit**

```bash
git add src/layouts/ZeyoLayout.astro
git commit -m "$(cat <<'EOF'
feat(theme): apply stored theme before paint in ZeyoLayout

EOF
)"
```

---

### Task 3: Header theme toggle button + script

**Files:**
- Modify: `src/components/zeyo/ZeyoHeader.astro`
- Modify: `src/styles/zeyo/shared.css` (toggle button styles)

**Step 1: Add button markup after nav links**

Inside `.site-nav`, after the mapped links, add:

```html
<button
  type="button"
  class="theme-toggle"
  id="theme-toggle"
  aria-label="切换到白天模式"
  data-theme-toggle
>
  <svg class="theme-toggle__icon theme-toggle__icon--moon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M21 14.3A9 9 0 0 1 9.7 3 7 7 0 1 0 21 14.3z"/>
  </svg>
  <svg class="theme-toggle__icon theme-toggle__icon--sun" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" hidden>
    <path fill="currentColor" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-16v2m0 16v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M2 12h2m16 0h2M4.2 19.8l1.4-1.4m12.8-12.8 1.4-1.4"/>
  </svg>
</button>
```

Prefer simple filled moon + sun paths that render clearly at 18px. If the sun path above is stroke-oriented and looks wrong, use a filled sun (circle + short rays) instead — visual QA in Task 5.

**Step 2: Add toggle styles in `shared.css`**

```css
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 2px;
  background: transparent;
  color: var(--ww-mist);
  cursor: pointer;
  transition: color var(--ww-dur) var(--ww-ease);
}

.theme-toggle:hover {
  color: var(--ww-signal);
}

html[data-theme="light"] .theme-toggle__icon--moon {
  display: none;
}

html[data-theme="light"] .theme-toggle__icon--sun {
  display: block;
}

html[data-theme="dark"] .theme-toggle__icon--sun,
html:not([data-theme]) .theme-toggle__icon--sun {
  display: none;
}

html[data-theme="dark"] .theme-toggle__icon--moon,
html:not([data-theme]) .theme-toggle__icon--moon {
  display: block;
}
```

Remove the `hidden` attribute approach if CSS display switching is used exclusively — pick **one** mechanism (CSS preferred) so SSR and hydrated state stay in sync with `data-theme`.

**Step 3: Add client script at bottom of `ZeyoHeader.astro`**

```html
<script>
  function syncThemeToggle(btn: HTMLButtonElement) {
    const theme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    btn.setAttribute(
      "aria-label",
      theme === "dark" ? "切换到白天模式" : "切换到晚上模式",
    );
  }

  function setTheme(next: "light" | "dark") {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("nv-theme", next);
    } catch {
      /* ignore quota / private mode */
    }
  }

  const btn = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
  if (btn) {
    syncThemeToggle(btn);
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = current === "dark" ? "light" : "dark";
      setTheme(next);
      syncThemeToggle(btn);
    });
  }
</script>
```

Astro will process this as a module script; that is fine for click handlers. Do **not** put the FOUC reader here.

**Step 4: Run check**

Run: `npm run check`

Expected: exit 0 (or no new errors in `ZeyoHeader.astro`).

**Step 5: Commit**

```bash
git add src/components/zeyo/ZeyoHeader.astro src/styles/zeyo/shared.css
git commit -m "$(cat <<'EOF'
feat(theme): add header day/night toggle control

EOF
)"
```

---

### Task 4: Build verification across main routes

**Files:** none (verification only)

**Step 1: Production build**

Run: `npm run build`

Expected: success; static pages for `/`, `/workshop/`, `/articles/`, `/contact/` emit without errors.

**Step 2: Preview + acceptance checklist**

Run: `npm run preview`

Manually verify against the design spec §7:

1. Cold load `/` with cleared `localStorage` → dark, no light flash
2. Click toggle → light surfaces/text; moon→sun (or icon swap per design)
3. Navigate to `/workshop/`, `/articles/`, `/contact/` → stays light
4. Refresh → stays light
5. Toggle back → dark persisted
6. Tab to button → visible focus ring; `aria-label` matches current theme
7. Feifei assistant launcher/panel readable in both themes

**Step 3: Fix any contrast issues found**

If a specific component fails contrast (e.g. assistant shadow, stage tags), add minimal token overrides or `html[data-theme="light"]` rules in `shared.css` / page CSS only for those selectors. Re-run preview.

**Step 4: Commit fixes if any**

```bash
git add -u src/styles/zeyo/
git commit -m "$(cat <<'EOF'
fix(theme): improve light-mode contrast on chrome and assistant

EOF
)"
```

Skip this commit if no fixes were needed.

---

### Task 5: Final acceptance pass + design doc status (optional)

**Files:**
- Optional modify: `docs/superpowers/specs/2026-08-29-day-night-theme-design.md` — set status to「已实现」only if you want docs in sync

**Step 1: Re-run checklist from Task 4 on a clean browser profile or cleared storage**

**Step 2: Commit doc status if updated**

```bash
git add docs/superpowers/specs/2026-08-29-day-night-theme-design.md
git commit -m "$(cat <<'EOF'
docs(design): mark day/night theme design as implemented

EOF
)"
```

---

## Execution notes

- Do not change `BaseLayout` / docs / modules themes.
- Do not add `prefers-color-scheme` auto switching.
- Prefer token overrides over duplicating entire page CSS for light mode.
- Keep commits small and message-focused as above.
