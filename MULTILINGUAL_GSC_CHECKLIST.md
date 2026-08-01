# Multilingual Google Search Console Checklist

Use this checklist after production deployment. It does not require changing existing English titles, descriptions, H1s or URLs.

## Deployment verification

- [ ] Confirm the deployed commit matches the delivered remote SHA.
- [ ] Open `/`, `/es/` and `/de/` and verify the visible language and language switcher.
- [ ] View source, not only the rendered DOM, and confirm `html lang="en"`, `html lang="es"` and `html lang="de"`.
- [ ] Confirm every localized page returns HTTP 200 and has a self-canonical.
- [ ] Confirm `/en/`, `/es/guia/` and `/ar/` return no public duplicate page.
- [ ] Confirm the production sitemap contains 67 public content URLs: 49 English and 18 localized.

## Search Console

- [ ] Resubmit `https://mistfallhuntergg.wiki/sitemap.xml` in the existing domain property.
- [ ] Inspect `/es/` and `/de/` and request indexing after the deployment is visible.
- [ ] Inspect one reciprocal group with three languages: `/servers/`, `/es/servidores/`, `/de/server/`.
- [ ] Inspect one Spanish-only group: `/best-class/` and `/es/mejor-clase/`.
- [ ] Inspect one German-only group: `/best-settings/` and `/de/einstellungen/`.
- [ ] Verify Google-selected canonical matches the user-declared self-canonical for each inspected URL.
- [ ] Watch Page indexing, Duplicate without user-selected canonical, Crawled currently not indexed, and alternate-page reports.
- [ ] Check that no `/en/` URL appears in indexed or discovered pages.

## Priority indexing queue

1. `/es/`
2. `/es/guia-principiantes/`
3. `/es/clases/`
4. `/de/`
5. `/de/einstellungen/`

## Two-week review

- [ ] Compare impressions and queries by page and country; do not rewrite English TDH as part of the localization review.
- [ ] Review Spanish terms that users actually search for while preserving official names.
- [ ] Review German technical queries for Ruckler, Absturz, Einstellungen, Server and Region Lock.
- [ ] Check whether any source-sensitive answer changed after a patch or official announcement.
- [ ] Update a page only with a direct source and retain its last-checked date.
