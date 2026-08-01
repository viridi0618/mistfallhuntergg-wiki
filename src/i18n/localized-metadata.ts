import type { Metadata } from "next";
import { hreflangPaths } from "./routes";
import { siteConfig } from "@/lib/site-config";
import type { LocalizedPageData } from "@/lib/localized-types";

export function localizedMetadata(page: LocalizedPageData): Metadata {
  const translations = hreflangPaths(page.path);
  const languages = { ...translations, "x-default": translations.en ?? page.englishPath };
  const isArticle = page.pageType === "article";
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path, languages },
    robots: { index: true, follow: true },
    openGraph: isArticle ? {
      title: page.title, description: page.description, url: page.path, type: "article",
      locale: page.locale === "es" ? "es_ES" : "de_DE", siteName: siteConfig.name,
      images: [{ url: page.heroImage, alt: page.heroImageAlt }],
      publishedTime: page.published, modifiedTime: page.updated,
    } : {
      title: page.title, description: page.description, url: page.path, type: "website",
      locale: page.locale === "es" ? "es_ES" : "de_DE", siteName: siteConfig.name,
      images: [{ url: page.heroImage, alt: page.heroImageAlt }],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [page.heroImage] },
  };
}
