# Multilingual Routes

English remains on the root URL structure. There is no `/en/` route, redirect or duplicate. Spanish uses `/es/`; German uses `/de/`.

| English | Spanish | German |
| --- | --- | --- |
| `/` | `/es/` | `/de/` |
| `/beginner-guide/` | `/es/guia-principiantes/` | — |
| `/how-to-extract/` | `/es/como-extraer/` | — |
| `/classes/` | `/es/clases/` | — |
| `/best-class/` | `/es/mejor-clase/` | — |
| `/best-solo-class/` | `/es/mejor-clase-solo/` | — |
| `/class-tier-list/` | `/es/tier-list-clases/` | — |
| `/builds/` | `/es/builds/` | — |
| `/solo-mode/` | `/es/jugar-solo/` | — |
| `/servers/` | `/es/servidores/` | `/de/server/` |
| `/region-lock/` | `/es/bloqueo-regional/` | `/de/region-lock/` |
| `/codes/` | `/es/codigos/` | — |
| `/best-settings/` | — | `/de/einstellungen/` |
| `/stuttering-fix/` | — | `/de/ruckler-beheben/` |
| `/crashing-fix/` | — | `/de/absturz-beheben/` |

## hreflang behavior

- Each translation group is reciprocal.
- `x-default` always points to the English URL.
- A language is emitted only when that page exists.
- Locale homes publish `en`, `es`, `de` and `x-default`.
- Spanish-only translations publish `en`, `es` and `x-default`; German-only translations publish `en`, `de` and `x-default`.
- Canonicals are self-referencing in every language.

## Switcher fallback behavior

The header switcher opens the matching translation when one exists. If the current page has no equivalent in the requested language, it opens that locale home. This navigation fallback does not create an hreflang relation.

Examples:

- `/best-class/` → ES `/es/mejor-clase/`; DE `/de/`.
- `/de/einstellungen/` → EN `/best-settings/`; ES `/es/`.
- `/es/servidores/` → EN `/servers/`; DE `/de/server/`.

The first release intentionally does not add `/es/guia/`, `/ar/` or any runtime translation API.
