export type Locale = "en" | "es" | "de";

export type RouteTranslations = Partial<Record<Locale, string>>;

export const routeTranslations: RouteTranslations[] = [
  { en: "/", es: "/es/", de: "/de/" },
  { en: "/beginner-guide/", es: "/es/guia-principiantes/" },
  { en: "/how-to-extract/", es: "/es/como-extraer/" },
  { en: "/classes/", es: "/es/clases/" },
  { en: "/best-class/", es: "/es/mejor-clase/" },
  { en: "/best-solo-class/", es: "/es/mejor-clase-solo/" },
  { en: "/class-tier-list/", es: "/es/tier-list-clases/" },
  { en: "/builds/", es: "/es/builds/" },
  { en: "/solo-mode/", es: "/es/jugar-solo/" },
  { en: "/servers/", es: "/es/servidores/", de: "/de/server/" },
  { en: "/region-lock/", es: "/es/bloqueo-regional/", de: "/de/region-lock/" },
  { en: "/codes/", es: "/es/codigos/" },
  { en: "/rewards/", es: "/es/recompensas/" },
  { en: "/weapons/", es: "/es/armas/" },
  { en: "/best-settings/", de: "/de/einstellungen/" },
  { en: "/stuttering-fix/", de: "/de/ruckler-beheben/" },
  { en: "/crashing-fix/", de: "/de/absturz-beheben/" },
];

export const localeHomes: Record<Locale, string> = {
  en: "/",
  es: "/es/",
  de: "/de/",
};

function normalizePath(pathname: string) {
  if (pathname === "/") return pathname;
  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
}

export function translationsForPath(pathname: string): RouteTranslations | undefined {
  const normalized = normalizePath(pathname);
  return routeTranslations.find((entry) => Object.values(entry).includes(normalized));
}

export function localeForPath(pathname: string): Locale {
  const normalized = normalizePath(pathname);
  if (normalized.startsWith("/es/")) return "es";
  if (normalized.startsWith("/de/")) return "de";
  return "en";
}

export function switchTarget(pathname: string, locale: Locale) {
  return translationsForPath(pathname)?.[locale] ?? localeHomes[locale];
}

export function hreflangPaths(pathname: string): RouteTranslations {
  return translationsForPath(pathname) ?? { en: normalizePath(pathname) };
}
