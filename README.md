# CheriPic Landing Page

## Quick Overview

CheriPic is a premium landing page for a Relationship Intelligence platform focused on one idea:

**Clarity before connection.**

This site communicates the product story in a clean narrative flow, from identifying relationship patterns to taking intentional action through early access.

### Highlights

- Story-driven, single-page experience
- Smooth reveal-on-scroll interactions
- Strong visual identity with editorial typography
- Mobile-responsive layout
- Fast static deployment via Vite

### Live Messaging Focus

- Avoid repeating relationship patterns
- Improve compatibility awareness
- Use insight-led decisions before emotional attachment

### Quick Start

```bash
npm install
npm run dev
```

For full setup and developer documentation, continue below.

---

A premium, single-page marketing site for CheriPic, built with React + Vite.

The page presents CheriPic as a Relationship Intelligence platform with a narrative flow from awareness to action:

- Hero and value proposition
- Relationship insights
- Product pillars and journey
- CheriAI feature highlights
- Experience ecosystem preview
- Audience fit and standards
- Early-access and final call-to-action

## Tech Stack

- React 19
- Vite 8
- Plain CSS (single global stylesheet)
- ESLint

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
cheripic-landing/
	public/
		favicon.svg
	src/
		assets/               # image assets (logo, founder, experience visuals)
		components/           # page sections + shared UI
		data/
			content.js          # central content/config source
		hooks/
			useScrolled.js      # navbar scroll state
			useScrollReveal.js  # intersection-based reveal animation
		styles/
			global.css          # global styles and section styling
		App.jsx               # page composition
		main.jsx              # React entrypoint
	index.html
	vite.config.js
	eslint.config.js
```

## How The Page Is Composed

`App.jsx` renders sections in this order:

1. `Navbar`
2. `Hero`
3. `Insights`
4. `NotADatingApp`
5. `HowItWorks`
6. `CheriAI`
7. `Experiences`
8. `WhoFor`
9. `EarlyAccess`
10. `Standard`
11. `FinalCta`
12. `Footer`

## Content Management

Most editable text/content lives in `src/data/content.js`.

Update these exports to change page content without touching section components:

- `INSIGHTS`
- `PILLARS`
- `STEPS`
- `AI_FEATURES`
- `EXPERIENCES`
- `WHO_FOR`
- `STANDARDS`
- `LINKS` (Instagram, email, early-access mailto link)

## Images and Assets

Use one of these approaches consistently:

1. Preferred for React components/data files: import from `src/assets`.
2. Alternative: put files in `public` and reference with root paths (example: `/my-image.png`).

Current implementation uses imported images in components like `Navbar`, `Hero`, and `Footer`.

Important: file names are case-sensitive in many deployment environments. Keep import names and file names exactly matched.

## Styling and Motion

- All styling lives in `src/styles/global.css`.
- Visual system is built with CSS variables in `:root`.
- Section spacing utilities: `.sec`, `.sec-sm`.
- Reveal effects are handled by `Reveal.jsx` + `useScrollReveal.js`.
- Navbar background/compact transition is handled by `useScrolled.js`.

Accessibility note: reveal animations respect `prefers-reduced-motion` and become static for users who disable motion.

## Scripts Reference

- `npm run dev` - start local development server
- `npm run build` - create production bundle in `dist/`
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks

## Deployment

You can deploy the built `dist/` output to platforms like:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages (with appropriate Vite base-path configuration if needed)

Recommended workflow:

1. Run `npm run lint`
2. Run `npm run build`
3. Deploy `dist/`

## Future Improvements

- Add SEO and social metadata (Open Graph + Twitter tags)
- Add a small CMS or JSON-driven admin flow for content editing
- Add analytics/event tracking for CTA clicks
- Add unit tests for hooks and smoke tests for rendering key sections

