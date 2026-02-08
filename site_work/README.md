# Legacy Energies — Enterprise Website Scaffold (Next.js)

This is a multi-page, enterprise-style corporate site scaffold inspired by tier-1 energy company IA patterns (mega menu, newsroom, governance, document center, search overlay).

## Quick start
1) Install dependencies
- npm install

2) Run locally
- npm run dev
Then open http://localhost:3000

## Replace placeholder assets
- Put your real images in /public/images and update the image references in `lib/site.ts` and the hero sections.

## Consent / Cookiebot
- In `app/layout.tsx` there is a clearly marked placeholder in `<head>` where you can paste Cookiebot (Usercentrics) script so it loads early.

## Content editing
- Content is currently stored in `lib/site.ts` to keep this scaffold simple.
- You can migrate to a CMS (Sanity/Contentful) later without changing the UI components.


## Hydration warning in dev

If you see a hydration warning mentioning `data-gr-*` attributes, it is usually caused by a browser extension (for example grammar or translation tools) injecting attributes before React loads. This is harmless in production. You can test in an Incognito window or disable the extension for localhost.
