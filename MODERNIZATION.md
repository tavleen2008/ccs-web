# CCS Website — Modernization & Cleanup Report

> **Status:** Audit complete. Baseline verified (type-check ✓, ESLint ✓, build pending).
> **Golden rule for this effort:** the site must look and behave exactly the same. Nothing here changes design, copy, layout, routing, or animations unless explicitly called out and approved.

This project (`ccs-web/`) is a **Create React App + TypeScript** site adapted from Hack the North's 2023 website. It still carries a large amount of HackNorth branding, infrastructure wiring, and dead code from that origin.

---

## 1. Project Structure

| Area | Details |
|---|---|
| **Build system** | Create React App (`react-scripts` 5.0.1). No CRACO / eject / custom webpack. Runs with `NODE_OPTIONS=--openssl-legacy-provider` (needed for OpenSSL 3 / Node ≥17). |
| **Entry points** | `src/index.js` (renders `<App/>`, injects `ThemeProvider`, global fonts + reset via `createGlobalStyle`) → `src/App.tsx` (router). |
| **Routing** | `react-router-dom` v6 `BrowserRouter`. Routes in `src/constants/route.ts`: `/`, `/privacy`, `/code-of-conduct`, `/terms-and-conditions`, `/travel-guidelines`, `*`→404. |
| **Pages** | `src/pages/{index, privacy, code-of-conduct, terms, travel-guidelines, not-found}`. Home lazy-loads 4 sections. |
| **Sections** | `src/sections/{Hero, History, Showcase, Footer}` — the home page composition. |
| **Components** | `src/components/*` (feature components) and `src/components/base/*` (design-system primitives). Barrel files `components/index.ts` and `components/base/index.ts` re-export via `export *`. |
| **Hooks / utils** | `src/utils/hooks/*`, `src/utils/functions/*`, `src/utils/responsive.ts`, `src/utils/env.ts`. |
| **Constants / copy** | `src/constants/*` (routes, sections, social, breakpoints), `src/copy/*` (page text/data). |
| **Assets** | `src/assets/{img,icons}` with barrel `index.ts` exports; plus static files in `public/`. |
| **Styling** | styled-components + twin.macro + TailwindCSS v2. Fonts: Castledown, Satoshi (+ a broken Schoolbell reference). |
| **Config** | `tsconfig.json`, `tailwind.config.js`, `.eslintrc`, `.prettierrc`, `.husky/`, `.env.*`, `netlify.toml`, `.buildkite/`, `.ci/`, `lighthouserc.js`, `.github/`. |
| **Scripts** | `start`, `build`, `analyze`, `type-check`, `lint`, `optimize:images` (`src/scripts/minimizeImages.js`). |

**Baseline health (this machine):** `node_modules` was not installed. Install requires `--legacy-peer-deps` because `@hackthenorth/analytics@0.0.4` demands React 17 while the project pins React 16. `.nvmrc` pins Node 16.9.1 (system has Node 22). Type-check and ESLint pass with **zero errors**.

---

## 2. Dependency Audit (runtime)

| Dependency | Current | Used? | Remove? | Notes / recommendation |
|---|---|---|---|---|
| @hackthenorth/analytics | ^0.0.4 | ❌ No | ✅ **Remove** | Legacy HTN private pkg; forces the React 17 peer conflict. Never imported. |
| @headlessui/react | ^1.6.1 | ❌ No | ✅ **Remove** | Never imported. |
| gsap | ^3.6.1 | ❌ No | ✅ **Remove** | Never imported. |
| jquery | ^1.12.0 | ❌ No | ✅ **Remove** | Never imported. Ancient (1.x). |
| js-cookie | ^2.2.1 | ❌ No | ✅ **Remove** | Never imported (+ drop `@types/js-cookie`). |
| react-animated-css | ^1.2.1 | ❌ No | ✅ **Remove** | Never imported. |
| react-hotjar | ^2.2.1 | ❌ No | ✅ **Remove** | Never imported (only named in privacy copy text). |
| react-spring | ^9.2.1 | ❌ No | ✅ **Remove** | Never imported. |
| axios | ^0.27.2 | ⚠️ QA only | ⚠️ w/ QA | Only used by the dead QA/BugNub subtree. Removable once QA is removed. |
| ua-parser-js | ^0.7.31 | ⚠️ QA only | ⚠️ w/ QA | Only used by dead QA/BugNub. |
| @juggle/resize-observer | ^3.3.1 | ⚠️ Carousel | ⚠️ w/ carousel | Only used by unused `InfiniteCarousel`. |
| react-cool-dimensions | ^2.0.6 | ⚠️ Carousel | ⚠️ w/ carousel | Only used by unused `InfiniteCarousel`. |
| cross-env | ^10.1.0 | ✅ Yes | Keep | Used in npm scripts. |
| fathom-client | ^3.4.1 | ✅ Yes | ⚠️ decision | `trackGoal` called in 10 files. **Reports to HackNorth's Fathom** (see §Security). |
| framer-motion | ^4.1.16 | ✅ Yes | Keep | Navbar animations. Outdated (latest 11.x) — see upgrades. |
| lodash.debounce | ^4.0.8 | ✅ Yes | Keep | |
| lottie-react | ^2.4.1 | ⚠️ Animation | ⚠️ | Only used by the never-rendered `Animation` component. |
| react / react-dom | ^16.9.0 | ✅ Yes | Keep | React 16 → major upgrade candidate (see §High risk). |
| react-intersection-observer | ^8.34.0 | ✅ Yes | Keep | |
| react-markdown | ^5.0.3 | ✅ Yes | Keep | Outdated (latest 9.x). |
| react-modal | ^3.13.1 | ✅ Yes | Keep | Recap video modal. |
| react-router-dom | ^6.3.0 | ✅ Yes | Keep | |
| react-router-hash-link | ^2.4.3 | ✅ Yes | Keep | Navbar anchor links. |
| react-scripts | ^5.0.1 | ✅ Yes | Keep | |
| react-scrollama | ^2.3.2 | ✅ Yes | Keep | Hero full-page scroller. |
| react-scrollspy | ^3.4.3 | ✅ Yes | Keep | InfoPage side nav. |
| react-text-loop | ^2.3.0 | ✅ Yes | Keep | Hero rotating text. |
| styled-components | ^5.3.0 | ✅ Yes | Keep | Latest 6.x — major upgrade candidate. |

**Definitely-removable runtime deps (unused, zero risk):** `@hackthenorth/analytics`, `@headlessui/react`, `gsap`, `jquery`, `js-cookie`, `react-animated-css`, `react-hotjar`, `react-spring`. Removing `@hackthenorth/analytics` also eliminates the React-17 peer conflict, so future installs won't need `--legacy-peer-deps`.

---

## 3. Dev-Dependency Audit

| Dev dependency | Used? | Remove? | Notes |
|---|---|---|---|
| @svgr/webpack | ❌ No | ✅ Remove | No webpack override to activate it (plain CRA). |
| babel-plugin-inline-react-svg | ❌ No | ✅ Remove | No babel config activates it. |
| eslint-import-resolver-typescript | ❌ No | ✅ Remove | `.eslintrc` has no `import/resolver` setting. |
| @types/js-cookie | ❌ No | ✅ Remove | Pairs with unused js-cookie. |
| @babel/core | ⚠️ transitive | Keep | Only a transitive peer; harmless. |
| babel-plugin-macros | ✅ Yes | Keep | Required by twin.macro. |
| twin.macro / tailwindcss | ✅ Yes | Keep | Tailwind v2 → v3 is a medium-risk upgrade. |
| eslint + all plugins | ✅ Yes | Keep | ESLint 7 / typescript-eslint 4 are old (see upgrades). |
| prettier | ✅ Yes | Keep | v2 → v3 minor risk (formatting churn). |
| husky | ✅ Yes | Keep | v5; latest is 9. |
| glob, imagemin* | ✅ Yes | Keep | Used by `minimizeImages.js`. |
| typescript | ✅ Yes | Keep | 4.2 → 5.x upgrade candidate. |
| All other @types/* | ✅ Yes | Keep | Back real deps. |

---

## 4. Dead Code (zero live importers — verified by reachability trace)

**Rendered app = App → IndexPage → {Navbar, Layout, Hero, History, Showcase, Footer} + InfoPage pages.** Everything below is never reached from that tree.

### Whole subtrees / components
- **`src/components/base/QA/**` (entire subtree)** — imported in `App.tsx` but **never rendered** (no `<QA/>` in JSX). Includes OrganizerTools, Nubs, BugNub, ImageUpload, ImagePasteUploader, and utils (buildDescription, submitIssue, uploadImages, useFormState). **⚠️ Contains a hardcoded GitHub token — see Security.**
- `src/components/InfiniteCarousel/` — no consumer.
- `src/components/base/ButtonLink/`, `CarouselNav/`, `GradientBar/`, `Detail/`, `UnderlinedText/` — no live consumer.
- `src/components/base/RadioButton/` + `RadioButtonGroup/` (+ `RadioContext`, `useRadioContext`) — entirely unreferenced.
- `src/components/base/GradientText/` (+ `constants.ts`), `Spacer/`, `Glow/`, `TexturedImage/`, `AccordionGroup/`, `Accordion/` (+ `Arrow`), `Flex/` — barrel-only re-exports with no real consumer.

### Effectively-dead (module loaded but component never rendered)
- `src/components/base/Animation/` — only its `FlickerAnimationKeyframes` export is used (by Hero/Heading); the `Animation` component is never rendered. `useReducedMotion` and `useHoverEvents` hooks are used only inside it (and dead InfiniteCarousel). **Handle carefully** — the keyframes export IS live.

### Unused data / copy / hooks
- `src/copy/FAQ.ts`, `Note.ts`, `projects.ts`, `stats.ts` — no importer.
- `src/copy/terms.ts` — only a commented import in the terms page.
- `src/pages/privacy/copy.ts` — duplicate of `src/copy/privacy.ts`; the page imports the latter.
- `src/utils/functions/randomize.ts` — zero call sites.

### Commented-out dead imports (safe to delete)
- `App.tsx:9` — `OrganizerApps` (dir doesn't exist).
- `pages/index/index.tsx:2-3` — two `Banner` imports (dir doesn't exist).
- `pages/terms/index.tsx:2-11` — orphaned content/sections block.
- `Navbar/mobileMenu.tsx:12`, `Showcase/index.tsx:3`, and a block of non-existent icon names in `base/Icon/index.tsx`.

### Unused assets
- `src/assets/img/hero/connection.jpeg`, `dreaming.jpeg`, `friendship.jpg` — exported, no consumer.
- `src/assets/img/showcase/YTVideo.png` — no consumer.
- `src/assets/img/organizers/cat.jpeg` — not even exported.
- `src/assets/icons/base/chevron.svg` (`ChevronIcon`) — exported, never imported.

---

## 5. Duplicate Code

- **Two near-identical typography components** and a **third parallel system**: styled `Heading1/2/3`, `Body*` (styles/index.ts) vs `TWText` twin.macro ramp vs inline styles. `BodyBold` has duplicated `margin/padding`.
- **`CopyrightText` ≈ `BottomText`** in `Footer` (identical rules).
- **12 near-identical `*Rect` styled components** in `Footer` (only position differs) + ~20 hand-written rainbow `linear-gradient` stops that could be data-driven.
- **Two mailing-list components** (`MailingListSignup`, `MailingListSignupHero`) with near-duplicate gradient blocks and logic.
- **Four "glow" implementations** (`Glow`, `GlowText`, Hero glows, Stats `BgGlow`).
- **Hardcoded `font-family:"Satoshi"`** repeated in several components instead of reusing typography components.

---

## 6–7. Folder & Configuration Cleanup

- **Two disjoint color systems**: styled-components `theme` (neon palette) vs `tailwind.config.js` (fully-ejected, different palette incl. HTN blues). They don't match.
- **Four breakpoint definitions**, two of which disagree (`largeMobile` = 425 in `constants/deviceBreakpoints.ts` and Tailwind, but **430** in `utils/responsive.ts`).
- `tailwind.config.js` (725 lines) redefines the whole theme (not `extend`) and pastes stock Tailwind v2 defaults verbatim (grid/inset/rotate tables) — heavy bloat.
- `font-note`/**Schoolbell** is declared in Tailwind + referenced in `TWText.note` but has **no `@font-face`** — broken/dead.
- `src/index.js:70-73` global reset targets `div#__next` (**Next.js selector**) — dead in a CRA app whose root is `#root`.
- **`.gitignore`** has stale Next.js/Vercel/pnp entries.
- **`.nvmrc` (16.9.1) vs `.buildkite` (Node 14)** mismatch.
- **`.prettierrc` `{}` and `package.json` `"prettier": {}`** — redundant duplicate.
- Dead theme exports in `styles/index.ts`: `TWGradient`, `TWAnimation`, `TWFade`, `TWTransition`, and most of `TWShared`.
- `src/utils/env.ts:5` — stray **`console.log(APP_ENV)`** ships to production.

---

## 8–13. React / Performance / A11y / CSS / Types / Imports (opportunities)

- **Footer** uses imperative DOM (`querySelectorAll` + `addEventListener`) instead of React state; its cleanup removes a `"mouseenter"` listener it never added (added `"mouseover"`) → **listener leak bug**.
- Inline `style={{}}` used for static styling in 14 files (Hero, Heading, Detail, Navbar menu) — candidates for `tw`/styled.
- Sections already lazy-loaded + `loading="lazy"` on images (good). Some large JPEGs in `assets/img` are optimization candidates (see build report).
- A11y: mostly good (alt text present, aria-labels on nav). Minor: heading hierarchy and a few decorative images could use `alt=""`.
- Type safety: `@typescript-eslint/no-explicit-any` is disabled; `any` appears in Footer event handlers and a few utils — narrow where safe.
- Imports: `.eslintrc` already enforces `import/order`; the `src/`-absolute alias (via `baseUrl`) is used inconsistently with relative imports.

---

## 19. Legacy HackNorth Remnants

**Infrastructure / config:** `package.json` name `hackthenorth.com`; README fully HTN-branded; `netlify.toml` + `_redirects`; `.buildkite/pipeline.yml` + `.ci/release.sh`; `.github/CODEOWNERS` `@hackathon/frontend`; both `.github/workflows/*` fully commented out; `.typo-ci.yml` excludes `hackthenorth`.

**Public/meta (visible SEO/social):** `public/index.html` `<title>Hack the North</title>`, description "Canada's biggest hackathon… September 15-17, 2023", `og:*`/`twitter:*` → `@hackthenorth` / `hackthenorth.com` / `preview_img.png`; `site.webmanifest` name "Hack the North"; HTN-branded favicons; Fathom scripts (HTN site IDs); external `animate.css` from cdnjs.

**Public assets (unused clutter):** `hack_the_north_2022_bg.png`, `..._2023_warp_bg.png`, `warp_theme_installer_2022/2023.sh` (curl hackthenorth.com), event PDFs, and 6 monthly newsletter HTML files.

**In-app copy (VISIBLE — treat as content, not auto-change):** "Hack the North" throughout `src/copy/*` and sections; emails `hello@`, `travel@`, `sponsorship@hackthenorth.com`; TikTok `@hackthenorth`; Footer "Copyright © Techyon, 2023" and "Made with 💙 in Waterloo".

---

## ⚠️ Security / Ownership issues (flagged for decision)

1. **Hardcoded GitHub token** in `src/components/base/QA/index.tsx:13` (`token: "9RQYZyziWGRIfGFZEkLNhlpskAt9T24D"`, repo `hackthenorth.com`). It ships in the bundle. The QA subtree is dead code — **removing the subtree removes the token**. Regardless, this token should be **revoked** by whoever owns it.
2. **Analytics report to HackNorth.** `public/index.html` loads Fathom with HTN site IDs (`XGONDGWA`, self-hosted `privacy.hackthenorth.com/COQTOLNH`), and `trackGoal` fires in 10 components with hardcoded HTN event codes. CCS traffic is currently logged to HackNorth's account. Needs a product decision (remove, or swap to CCS's own).

---

## Modernization Plan — categorized by risk

### 🟢 Safe (no effect on rendered site; verifiable via type-check + lint + build)
1. Remove stray `console.log(APP_ENV)`.
2. Delete commented-out dead imports/blocks (App, index page banners, terms, mobileMenu, Icon, Showcase).
3. Remove the 8 unused runtime deps + 4 unused dev deps from `package.json`.
4. Remove dead theme exports (`TWGradient`, `TWAnimation`, `TWFade`, `TWTransition`, unused `TWShared` members).
5. Remove the dead `div#__next` reset rules.
6. Delete the QA subtree (removes the hardcoded token) + its now-unused deps `axios`, `ua-parser-js`. *(Medium-adjacent because it's a large deletion, but it's provably unrendered — verified by build.)*
7. Delete other zero-importer dead files (RadioButton*, GradientBar, ButtonLink, CarouselNav, Detail, UnderlinedText, GradientText, Spacer, Glow, TexturedImage, Accordion*, Flex, InfiniteCarousel) and dead copy/data files — **each batch verified by a green build before continuing.**
8. Remove unused asset files (3 hero jpegs, YTVideo.png, cat.jpeg, chevron.svg).
9. Fix the `largeMobile` 425/430 breakpoint disagreement (align to 425).

### 🟡 Medium risk (behavior-preserving refactors; verify visually)
10. Deduplicate Footer `*Rect` components / rainbow gradients; extract shared typography; consolidate the 4 breakpoint sources to one.
11. Refactor Footer imperative DOM → React state (also fixes the listener-leak bug).
12. Tailwind config slim-down (remove pasted stock defaults; `extend` instead of full override) — carefully, since twin.macro reads it.
13. Dependency minor/patch upgrades (framer-motion within v4, prettier 2→3, typescript 4→5, ESLint stack) — incrementally, one group at a time.
14. `.gitignore`, `.nvmrc`/CI alignment, README rewrite for CCS.

### 🔴 High risk (explicit approval required; not behavior-neutral)
15. **React 16 → 18** (StrictMode double-invoke, `ReactDOM.render` → `createRoot`, ecosystem peer bumps).
16. **styled-components 5 → 6**, **Tailwind 2 → 3**, **react-markdown 5 → 9** (breaking APIs).
17. **Branding migration** (Hack the North → CCS) in visible copy, `public/index.html` meta, manifest, favicons — this **changes the site's content** and is a product decision, not a neutral refactor.
18. **Analytics decision** (Fathom → remove or re-point to CCS).
19. Infra rewiring (Netlify/Buildkite → CCS's actual deploy target).

---

## Deliverables tracker

### ✅ Safe Batch 1 — APPLIED & VERIFIED (type-check ✓ / lint ✓ / build ✓)
**Removed 12 unused packages** from `package.json`:
- runtime (8): `@hackthenorth/analytics`, `@headlessui/react`, `gsap`, `jquery`, `js-cookie`, `react-animated-css`, `react-hotjar`, `react-spring`
- dev (4): `@svgr/webpack`, `babel-plugin-inline-react-svg`, `eslint-import-resolver-typescript`, `@types/js-cookie`

**Removed dead code:**
- `console.log(APP_ENV)` in `src/utils/env.ts`
- commented-out dead imports in `App.tsx`, `pages/index`, `pages/terms`, `Navbar/mobileMenu.tsx`, `sections/Showcase`

**Result:** Clean `npm install` now works **without** `--legacy-peer-deps` (React-17 peer conflict gone); `node_modules` shrank by 39 packages. `main.js` bundle unchanged at 1,146,453 B (these deps were never bundled — removal is provably safe). Baseline preserved: type-check ✓, ESLint ✓, build ✓.

### ✅ Safe Batch 2 — APPLIED & VERIFIED (type-check ✓ / lint ✓ / build ✓)
**Deleted the dead QA/BugNub subtree** (`src/components/base/QA/**`) — was imported in `App.tsx` but never rendered. This also removed the **hardcoded GitHub token** from the shipped bundle. *(The token itself should still be revoked on GitHub by its owner.)*

**Deleted 15 more dead directories/files** (zero live importers, confirmed by grep + green build):
- base components: `ButtonLink`, `CarouselNav`, `GradientBar`, `Detail`, `UnderlinedText`, `RadioButton`, `RadioButtonGroup`, `GradientText`, `Spacer`, `Glow`, `TexturedImage`, `AccordionGroup`, `Accordion`, `Flex`
- feature component: `InfiniteCarousel`
- copy/data: `copy/FAQ.ts`, `copy/Note.ts`, `copy/projects.ts`, `copy/stats.ts`, `copy/terms.ts`, `pages/privacy/copy.ts`
- util: `utils/functions/randomize.ts` (+ removed empty `functions/` dir)
- assets: `hero/{connection,dreaming,friendship}`, `showcase/YTVideo.png`, `organizers/cat.jpeg`, `icons/base/chevron.svg`

**Removed 3 more now-orphaned packages:** `axios`, `ua-parser-js` (QA-only), `@types/ua-parser-js`; and `@juggle/resize-observer`, `react-cool-dimensions` (InfiniteCarousel-only). Updated barrels (`components/index.ts`, `base/index.ts`, `utils/index.ts`, asset indexes) and `App.tsx`.

**Result:** `main.js` **1,146,453 → 1,102,052 B (−44,401 B, −3.9%)**. Site output otherwise identical.

### ✅ Safe Batch 3 — APPLIED & VERIFIED (type-check ✓ / lint ✓ / build ✓)
Behavior-neutral config & dead-code cleanups:
- Removed 4 dead theme exports (`TWGradient`, `TWTransition`, `TWAnimation`, `TWFade`) from `src/styles/index.ts` (zero importers).
- Removed the dead Next.js `div#__next` rules from the global reset in `src/index.js` — kept the one selector that actually matched (`body > div:first-of-type` = `#root`), so layout is unchanged (I deliberately did **not** repoint to `#root > div`, which would have activated a previously-dead rule).
- `.gitignore`: removed stale Next.js (`/.next/`, `/out/`) and Vercel (`.vercel`) entries irrelevant to this CRA app.
- Removed redundant empty `"prettier": {}` from `package.json` (`.prettierrc` is the single source).

### Upgraded
_(pending — scope: safe minor/patch only, per decision)_

### Refactored
_(pending)_

### Metrics
| Metric | Baseline | After Batch 2 |
|---|---|---|
| `main.js` (uncompressed) | 1,146,453 B | **1,102,052 B (−3.9%)** |
| Runtime deps | 29 | **16** |
| Dev deps | 35 | **31** |
| Dead files | ~30 | **0 known** |
| `npm install` | needed `--legacy-peer-deps` | **clean** |
| type-check / lint / build | ✓ / ✓ / ✓ | ✓ / ✓ / ✓ |

---

## Decisions (from product owner)
1. **Branding:** Full migration Hack the North → CCS **now**. → *needs CCS domain, contact emails, social handles/URLs, and favicon/logo assets.*
2. **Analytics:** **Leave as-is** (Fathom stays wired as-is — not touching it).
3. **Upgrades:** **Safe minor/patch only** — no framework majors (React 16, styled-components 5, Tailwind 2, TS 4 stay).
4. **QA subtree:** **Deleted** (done in Batch 2).
