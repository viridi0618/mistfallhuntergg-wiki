import type { MetadataRoute } from "next";
import { pages } from "@/data/pages";
import { absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-31T00:00:00.000Z");
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "daily", priority: 1 },
    ...pages.map((page) => ({
      url: absoluteUrl(`/${page.path}/`),
      lastModified: new Date(`${page.updated}T00:00:00.000Z`),
      changeFrequency: page.category === "Updates" ? "daily" as const : "weekly" as const,
      priority: page.category === "Site" ? 0.4 : 0.75,
    })),
  ];
}
