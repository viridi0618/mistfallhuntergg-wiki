# Mistfall Hunter Guide

An independent, English-language Mistfall Hunter guide site covering beginner help, all six classes, builds, extraction, solo and squad play, crossplay, servers, settings, safe fixes, rewards, known issues, and current patch summaries.

Production domain: `https://mistfallhuntergg.wiki`

## Project shape

- Next.js App Router, React, TypeScript, and Tailwind CSS
- Static export through `output: "export"`
- Local TypeScript content; no database, CMS, account system, or runtime API
- Centralized page metadata, navigation, related guides, sources, and schemas
- 49 public pages, including real Guides, Multiplayer, Settings & Fixes, Rewards, and Updates hubs
- Page-level official hero images, captioned article figures, local favicons, and a web app manifest
- Three manually selected YouTube videos with local thumbnails and click-to-load privacy-enhanced embeds
- Optional analytics and advertising scripts controlled by environment values

## Local development

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js.

## Validation and build

```bash
npm run lint
npm run typecheck
npm run build
npm run check:site
```

The deployable static site is generated in `out/`.

## Environment

Copy `.env.example` to `.env.local` when local overrides are needed.

```text
NEXT_PUBLIC_SITE_URL=https://mistfallhuntergg.wiki
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_CLARITY_ID=
NEXT_PUBLIC_ADSENSE_CLIENT=
```

The site URL is used by canonical links, sitemap, robots, Open Graph, X cards, breadcrumbs, and JSON-LD. Optional third-party scripts are omitted when their values are empty.

## Content and sourcing

Primary sources used across the first release:

- Mistfall Hunter official website
- Official Steam store page
- Official Mistfall Hunter Steam announcements and launch FAQ
- Official Xbox store page
- Official PlayStation store listing

Reliable hands-on media is used only for clearly identified review context. `CONTENT_REVIEW.md` lists version-sensitive, editorial, and human-review areas. `COMPETITOR_CONTENT_GAPS.md` records search-intent research without reproducing competitor copy, and `VIDEO_SELECTION.md` records the three homepage video choices.

Article imagery is stored locally from the official Mistfall Hunter website, Steam store, and Xbox store. The social card is original site artwork and does not use an official game logo.

## Deployment

Any static host can serve the `out/` directory. Configure the production project to use:

```text
Install command: npm ci
Build command: npm run build
Output directory: out
```

Set `NEXT_PUBLIC_SITE_URL` to the HTTPS production domain. Configure the custom domain so both the apex and preferred host resolve to the same deployment, with one canonical HTTPS origin.

Mistfall Hunter Guide is an independent fan-made website and is not affiliated with Bellring Games or the official Mistfall Hunter team. Game names, images, and trademarks belong to their respective owners.
