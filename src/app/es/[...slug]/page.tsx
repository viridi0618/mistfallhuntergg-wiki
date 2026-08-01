import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedRoutePage from "@/components/LocalizedRoutePage";
import { getLocalizedPage, localizedPages } from "@/data/localized-pages";
import { localizedMetadata } from "@/i18n/localized-metadata";

export const dynamicParams = false;
export function generateStaticParams() { return localizedPages.filter((page) => page.locale === "es" && page.path !== "/es/").map((page) => ({ slug: page.path.replace(/^\/es\/|\/$/g, "").split("/") })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params; const page = getLocalizedPage(`/es/${slug.join("/")}/`); if (!page) return {}; return localizedMetadata(page);
}
export default async function SpanishPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params; const path = `/es/${slug.join("/")}/`; if (!getLocalizedPage(path)) notFound(); return <LocalizedRoutePage path={path} />;
}
