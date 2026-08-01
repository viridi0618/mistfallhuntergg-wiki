import type { MetadataRoute } from "next";
import { pages } from "@/data/pages";
import { localizedPages } from "@/data/localized-pages";
import { hreflangPaths } from "@/i18n/routes";
import { absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

function alternates(path: string) {
  const translations = hreflangPaths(path);
  const languages = Object.fromEntries(Object.entries(translations).map(([locale, route]) => [locale, absoluteUrl(route!)]));
  languages["x-default"] = absoluteUrl(translations.en ?? path);
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-31T00:00:00.000Z");
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "daily", priority: 1, alternates: alternates("/") },
    ...pages.map((page) => ({
      url: absoluteUrl(`/${page.path}/`),
      lastModified: new Date(`${page.updated}T00:00:00.000Z`),
      changeFrequency: page.category === "Updates" ? "daily" as const : "weekly" as const,
      priority: page.category === "Site" ? 0.4 : 0.75,
      alternates: alternates(`/${page.path}/`),
    })),
    ...localizedPages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: new Date(`${page.updated}T00:00:00.000Z`),
      changeFrequency: "weekly" as const,
      priority: page.pageType === "website" ? 0.9 : 0.7,
      alternates: alternates(page.path),
    })),
  ];
}
