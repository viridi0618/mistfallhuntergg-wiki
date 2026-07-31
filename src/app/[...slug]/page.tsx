import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuidePage from "@/components/GuidePage";
import { getPage, pages } from "@/data/pages";
import { siteConfig } from "@/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.path.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) return {};
  const canonical = `/${page.path}/`;
  const socialImage = page.heroImage ?? page.image ?? siteConfig.defaultSocialImage;
  const isArticle = page.pageType === "article";
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical },
    openGraph: isArticle ? {
      title: page.title,
      description: page.description,
      url: canonical,
      type: "article",
      siteName: siteConfig.name,
      images: [{ url: socialImage, alt: page.heroImageAlt ?? page.imageAlt ?? page.h1 }],
      publishedTime: page.published,
      modifiedTime: page.updated,
    } : {
      title: page.title,
      description: page.description,
      url: canonical,
      type: "website",
      siteName: siteConfig.name,
      images: [{ url: socialImage, alt: page.heroImageAlt ?? page.imageAlt ?? page.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [socialImage],
    },
  };
}

export default async function DynamicGuidePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) notFound();
  return <GuidePage page={page} />;
}
