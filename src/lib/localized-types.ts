import type { ContentImage, GuideSection, GuideSource } from "./types";
import type { Locale } from "@/i18n/routes";

export type LocalizedPageData = {
  locale: Exclude<Locale, "en">;
  path: string;
  englishPath: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  answer: string;
  updated: string;
  published: string;
  version: string;
  platforms: string;
  informationType: string;
  pageType: "article" | "collection" | "website";
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  related: string[];
  sources: GuideSource[];
  heroImage: string;
  heroImageAlt: string;
  heroImageCaption: string;
  heroImageSourceUrl: string;
  contentImages: ContentImage[];
  warning?: string;
};
