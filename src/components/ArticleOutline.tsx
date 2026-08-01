"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ArticleOutlineModel } from "@/lib/article-outline";
import type { Locale } from "@/i18n/routes";

type RelatedLink = { href: string; label: string };

const labels = {
  en: { toc: "On this page", related: "Related guides", gameVersion: "Current game version" },
  es: { toc: "En esta página", related: "Guías relacionadas", gameVersion: "Versión actual del juego" },
  de: { toc: "Auf dieser Seite", related: "Verwandte Ratgeber", gameVersion: "Aktuelle Spielversion" },
} as const;

export default function ArticleOutline({
  outline, locale, version, related,
}: {
  outline: ArticleOutlineModel;
  locale: Locale;
  version: string;
  related: RelatedLink[];
}) {
  const t = labels[locale];
  const ids = useMemo(() => outline.flatItems.map((item) => item.id), [outline.flatItems]);
  const parentByChild = useMemo(() => new Map(outline.items.flatMap((item) => (item.children ?? []).map((child) => [child.id, item.id]))), [outline.items]);
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) return;
    const elements = ids.map((id) => document.getElementById(id)).filter((element): element is HTMLElement => Boolean(element));
    if (!elements.length) return;
    const findReadingSection = () => {
      const readingLine = 120;
      let current = elements[0].id;
      for (const element of elements) {
        if (element.getBoundingClientRect().top > readingLine) break;
        current = element.id;
      }
      return current;
    };
    const visible = new Map<string, IntersectionObserverEntry>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.set(entry.target.id, entry);
        else visible.delete(entry.target.id);
      }
      const inReadingZone = [...visible.values()].sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      setActiveId(inReadingZone?.target.id ?? findReadingSection());
    }, { rootMargin: "-112px 0px -65% 0px", threshold: [0, 1] });
    elements.forEach((element) => observer.observe(element));
    const syncHash = () => { const id = window.location.hash.slice(1); if (ids.includes(id)) setActiveId(id); };
    const initialFrame = window.requestAnimationFrame(() => {
      const id = window.location.hash.slice(1);
      setActiveId(ids.includes(id) ? id : findReadingSection());
    });
    window.addEventListener("hashchange", syncHash);
    return () => { window.cancelAnimationFrame(initialFrame); observer.disconnect(); window.removeEventListener("hashchange", syncHash); };
  }, [ids]);

  const activeParent = parentByChild.get(activeId) ?? activeId;
  const hasOutline = outline.items.length >= 3 || outline.items.some((item) => item.children?.length);

  return <aside className="article-rail desktop-article-outline">
    {hasOutline && <nav className="wiki-outline" aria-label={t.toc}>
      <span className="rail-label">{t.toc}</span>
      <div className="wiki-outline-list">
        {outline.items.map((item) => <div className="wiki-outline-group" key={item.id}>
          <a href={`#${item.id}`} className="wiki-outline-h2" aria-current={activeParent === item.id ? "location" : undefined} onClick={() => setActiveId(item.id)}>{item.label}</a>
          {item.children?.map((child) => <a href={`#${child.id}`} className="wiki-outline-h3" key={child.id} aria-current={activeId === child.id ? "location" : undefined} onClick={() => setActiveId(child.id)}>{child.label}</a>)}
        </div>)}
      </div>
    </nav>}
    {related.length > 0 && <nav className="wiki-related" aria-label={t.related}><span className="rail-label">{t.related}</span>
      {related.slice(0, 4).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
    </nav>}
    <div className="wiki-version">
      <span className="rail-label">{t.gameVersion}</span>
      <strong>{version}</strong>
    </div>
  </aside>;
}
