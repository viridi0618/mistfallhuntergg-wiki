import type { GuideSection } from "./types";

export type OutlineItem = {
  id: string;
  label: string;
  level: 2 | 3;
  children?: OutlineItem[];
};

export type ArticleOutlineModel = {
  items: OutlineItem[];
  flatItems: OutlineItem[];
};

export function headingSlug(heading: string) {
  return heading
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "section";
}

export function buildArticleOutline(sections: GuideSection[]): ArticleOutlineModel {
  const seen = new Map<string, number>();
  const uniqueId = (label: string) => {
    const base = headingSlug(label);
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  };

  const items = sections.map((section): OutlineItem => ({
    id: uniqueId(section.heading),
    label: section.heading,
    level: 2,
    children: section.subsections?.map((subsection): OutlineItem => ({
      id: uniqueId(subsection.heading),
      label: subsection.heading,
      level: 3,
    })),
  }));
  const flatItems = items.flatMap((item) => [item, ...(item.children ?? [])]);
  return { items, flatItems };
}

export function outlineIsVisible(outline: ArticleOutlineModel) {
  return outline.items.length >= 3 || outline.items.some((item) => (item.children?.length ?? 0) > 0);
}
