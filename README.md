# CheriPic — Landing Page

React + Vite conversion of the finalized CheriPic landing page. Same visual
design as the original single-file build, restructured into reusable
components with a token-driven stylesheet and four responsive breakpoints.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## Project structure

```
src/
├── main.jsx                  entry point
├── App.jsx                   hash router — picks the page for the route
├── data/
│   ├── content.js            ALL landing-page copy, links and list data
│   └── legal.js              Master User Agreement clauses
├── styles/
│   ├── variables.css         design tokens (colour, type, spacing, motion)
│   └── base.css              reset, typography, focus, reduced-motion
├── hooks/
│   ├── useScrollReveal.js    IntersectionObserver reveal-on-scroll
│   ├── useScrolled.js        rAF-throttled scroll threshold
│   ├── useLockBodyScroll.js  background scroll lock for the modal
│   └── useHashRoute.js       tiny `#/route` reader (ignores plain anchors)
├── utils/
│   └── cx.js                 class-name joiner
├── components/
│   ├── ui/                   primitives — Button, Eyebrow, Icon, Logo,
│   │                         Reveal, SectionHeading, VideoModal
│   ├── layout/               shell — Container, Section, Header, Footer,
│   │                         StickyCta
│   └── sections/             page sections — Hero, VideoShowcase, Pain,
│                             HowItWorks, Perks, CheriAi, FinalCta
├── pages/
│   ├── Home/                 landing page — section order lives here
│   └── Legal/                Master User Agreement page + sticky contents
└── assets/                   images, video posters
```

Every component folder holds `Component.jsx`, `Component.module.css` and an
`index.js` barrel, so imports stay short: `import { Button } from '@components/ui'`.

## Path aliases

Configured in `vite.config.js`:

| Alias | Resolves to |
|---|---|
| `@` | `src` |
| `@components` | `src/components` |
| `@hooks` | `src/hooks` |
| `@pages` | `src/pages` |
| `@data` | `src/data` |
| `@styles` | `src/styles` |

## Editing content

Nothing is hard-coded in components. Headlines, bullet lists, CTA labels and
URLs all live in `src/data/content.js`. Adding a perk is one object in the
`perks.items` array; the grid picks it up automatically.

To enable the explainer video, set `video.src` in that same file to an MP4 or
an embed URL — `VideoModal` detects which and renders `<video>` or `<iframe>`.
Until then the poster opens a placeholder state rather than a dead link.

## Routing

Routes live in the URL hash so the build stays a static bundle — no server
rewrite rules, no router dependency. `useHashRoute` only treats a hash as a
route when it starts with `#/`, so in-page anchors (`#top`, `#main`) still work.

| Route | Page |
|---|---|
| `#/` or anything unmatched | `Home` |
| `#/legal` | Master User Agreement, from the top |
| `#/legal/<section-id>` | Agreement, scrolled to that clause |
| `#/privacy`, `#/terms` | shortcuts into the same page |
| `#/legal/acceptable-use` | Acceptable Use Policy |
| `#/legal/community-guidelines` (also `#/community-guidelines`) | Community Guidelines |
| `#/legal/law-enforcement` (also `#/law-enforcement`) | Law Enforcement Guidelines |
| `#/legal/subscriptions-refunds` (also `#/pricing`) | Membership plans, then Subscriptions, Cancellation & Refunds |
| `#/safety` | Safety & Child Protection |
| `#/service-availability` | Service Availability |
| `#/contact` | Contact Us |
| `#/delete-account` | Account deletion instructions and request form |

Standalone policy pages share one component (`pages/Policy`) and take their
copy from `src/data/policies.js`. Clean paths (`/safety`) are folded into the
hash route on load, which works wherever the host serves `index.html` for
unknown paths.

Clause ids come from `legal.js`: a section with `id: 'privacy'` is linkable as
`#/legal/privacy`; unnamed ones fall back to `#/legal/s7` (the clause number).

## Styling

Colours, type scale, spacing, radii and motion are CSS custom properties in
`variables.css`. Components reference tokens only, never raw hex, so a palette
change is a single-file edit. Component styles are CSS Modules, so class names
are locally scoped and can't collide across sections.

## Responsive behaviour

Breakpoints: **1024px**, **860px**, **640px**, **480px**.

- Fluid type via `clamp()` — headings and section padding scale continuously
  between breakpoints instead of jumping.
- Perks grid: 3 columns → 2 → 1. Pain list and trust checklist collapse to a
  single column. How-it-works drops its connector line when stacked.
- Video poster switches from 16:9 to 4:3 under 480px so the caption stays
  readable, and its CTA goes full-width.
- Sticky bottom CTA appears under 860px, respects `env(safe-area-inset-bottom)`,
  and is removed from the tab order while hidden. The footer reserves space for it.
- "Sign In" stays visible on mobile (the original hid it) so returning users
  still have a way in.

## Accessibility

- Skip link to `#main`.
- The video poster is a real `<button>`, keyboard-operable with a visible focus ring.
- The modal traps Escape, restores body scroll, and focuses its close button.
- `prefers-reduced-motion` disables reveals, transitions and smooth scrolling.
- Card groups are marked up as lists; the how-it-works steps as an ordered list.
