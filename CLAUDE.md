# Evium Charging — Website Redesign

## Project
Full website redesign for Evium Charging (https://eviumcharging.com), a turnkey EV charging infrastructure company. Built in Astro + Tailwind, deployed to Vercel via GitHub.

## Quality Standard — NON-NEGOTIABLE
**This site must look premium, expensive, and professional at all times.**
Never ship anything that looks cheap, rough, or unfinished. Every animation, image, shadow, blend, spacing, and interaction must feel intentional and polished. If an asset, effect, or layout doesn't meet that bar, fix it before moving on — do not leave visible artifacts, clipped images, white halos, mis-aligned elements, or janky transitions.

## Stack
- **Framework:** Astro (static site, no SSR unless needed)
- **Styling:** Tailwind CSS v4 (`@theme` in global.css, no tailwind.config.js)
- **Language:** TypeScript (strict)
- **Deployment:** Vercel, auto-deploy on push to main

## Brand
- **Primary green:** `#2DC856` — use for CTAs, highlights, accents
- **Dark teal:** `#1A2F3A` — backgrounds, dark sections
- **Font:** Maven Pro (loaded via @font-face in global.css, files in `public/fonts/`)
- **Tone:** Bold, forward-thinking, action-oriented. See `context/project_evium_brand.md`

## Key Context Files
All detailed Evium business context lives in `context/`:
- `project_evium_overview.md` — company, mission, stats
- `project_evium_business_model.md` — revenue models, NEVI, referral program
- `project_evium_products_services.md` — charger lineup, software, tech specs
- `project_evium_brand.md` — full brand voice, copy examples, visual identity
- `project_evium_market.md` — target segments, testimonials, page suggestions
- `reference_evium_assets.md` — where to find all logos, images, fonts, decks

## Conventions
- Components in `src/components/`
- All pages use `src/layouts/Layout.astro`
- Tailwind custom values defined via `@theme` in `src/styles/global.css` — do not create tailwind.config.js
- Use semantic HTML and accessible markup
- No inline styles — use Tailwind classes only
- Keep components focused and small

## Source Materials (local only, not in git)
- Logos, charger images: `ExistingEviumContextMedia/`
- LinkedIn copy, decks, cut sheets: `CopyOfZippedEviumDataFromGoogleToInspect/`
