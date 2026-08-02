export type SourceLevel = "Official" | "Media" | "Community";

export type GuideSource = {
  label: string;
  url: string;
  level: SourceLevel;
};

export type GuideTable = {
  headers: string[];
  rows: string[][];
};

export type ContentVideo = {
  id: string;
  title: string;
  channel: string;
  duration: string;
  published: string;
  description: string;
  watchFor: string[];
  thumbnail: string;
  thumbnailAlt: string;
  youtubeUrl: string;
  placementAfterHeading: string;
  gameVersion?: string;
};

export type GuidePathStep = {
  step: number;
  label: string;
  href: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  question: string;
};

export type BuildHubCard = {
  name: string;
  routes: string;
  bestFor: string;
  difficulty: string;
  href: string;
};

export type GuideSubsection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: GuideTable;
  note?: string;
};

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: GuideTable;
  note?: string;
  subsections?: GuideSubsection[];
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
  contentVideos?: ContentVideo[];
  guidePath?: GuidePathStep[];
  buildCards?: BuildHubCard[];
  pickerCta?: string;
  tool?: "class-picker";
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
  patchChanges?: string[];
  updated?: string;
  combatRange: "Close" | "Close to mid" | "Mid to long" | "Long";
  execution: "easy" | "moderate" | "high";
  soloFit: number;
  trioFit: number;
  tendencies: {
    survival: number;
    burst: number;
    sustain: number;
    control: number;
    support: number;
    mobility: number;
  };
  startingRoute: string;
  alternateRoute: string;
  classPath: string;
  buildPath: string;
};
