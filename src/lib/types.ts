export type SourceLevel = "Official" | "Media" | "Community";

export type GuideSource = {
  label: string;
  url: string;
  level: SourceLevel;
};

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  note?: string;
};

export type ContentImage = {
  src: string;
  alt: string;
  caption: string;
  sourceLabel: string;
  sourceUrl: string;
  width: number;
  height: number;
  placementAfterHeading?: string;
};

export type GuidePageData = {
  path: string;
  category: string;
  eyebrow: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  updated: string;
  published: string;
  version: string;
  platforms: string;
  informationType: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  related: string[];
  sources: GuideSource[];
  image?: string;
  imageAlt?: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroImageCaption?: string;
  heroImageSourceUrl?: string;
  heroImageWidth?: number;
  heroImageHeight?: number;
  contentImages?: ContentImage[];
  breadcrumbLabel?: string;
  categoryPath?: string;
  pageType?: "article" | "category" | "policy" | "about" | "contact";
  warning?: string;
};

export type ClassProfile = {
  slug: string;
  name: string;
  role: string;
  weapons: string;
  strengths: string[];
  weaknesses: string[];
  solo: string;
  team: string;
  difficulty: string;
  setup: string;
  patch: string;
};
