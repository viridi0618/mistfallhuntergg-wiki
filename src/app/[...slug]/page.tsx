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
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      type: "article",
      siteName: siteConfig.name,
      images: [{ url: siteConfig.defaultSocialImage, alt: `${page.h1} — Mistfall Hunter Guide` }],
      publishedTime: page.published,
      modifiedTime: page.updated,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [siteConfig.defaultSocialImage],
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
