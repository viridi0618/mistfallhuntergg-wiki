import Image from "next/image";
import Link from "next/link";
import FAQ from "./FAQ";
import JsonLd from "./JsonLd";
import { absoluteUrl } from "@/lib/site-config";
import type { ContentImage, GuideSection } from "@/lib/types";
import type { LocalizedPageData } from "@/lib/localized-types";

const ui = {
  es: {
    home: "Inicio", updated: "Última actualización", version: "Versión del juego",
    platforms: "Plataformas cubiertas", type: "Tipo de información", toc: "En esta página",
    faqLabel: "Respuestas rápidas", faq: "Preguntas frecuentes", relatedLabel: "Sigue leyendo",
    related: "Guías relacionadas", evidence: "Fuentes", sources: "Fuentes y lecturas adicionales",
    checked: "Estas fuentes se usaron para verificar la guía. Los datos sensibles a cambios se revisaron el",
    current: "Estado actual", snapshot: "Lanzamiento / Temporada 1",
  },
  de: {
    home: "Startseite", updated: "Zuletzt aktualisiert", version: "Spielversion",
    platforms: "Berücksichtigte Plattformen", type: "Informationsart", toc: "Auf dieser Seite",
    faqLabel: "Kurzantworten", faq: "Häufig gestellte Fragen", relatedLabel: "Weiterlesen",
    related: "Verwandte Ratgeber", evidence: "Belege", sources: "Quellen und weiterführende Hinweise",
    checked: "Diese Quellen wurden für den Ratgeber geprüft. Zeitabhängige Angaben wurden zuletzt geprüft am",
    current: "Aktueller Stand", snapshot: "Launch / Season 1",
  },
} as const;

function headingSlug(heading: string, index: number) {
  const slug = heading.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/ß/g, "ss").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return slug || `section-${index + 1}`;
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="table-wrap"><table><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
    <tbody>{rows.map((row, index) => <tr key={`${row[0]}-${index}`}>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function Figure({ image }: { image: ContentImage }) {
  return <figure className="content-figure"><a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">
    <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 820px) 100vw, 790px" />
  </a><figcaption>{image.caption} <span>Source: {image.sourceLabel}.</span></figcaption></figure>;
}

function Section({ section, id, images }: { section: GuideSection; id: string; images: ContentImage[] }) {
  return <section><h2 id={id}>{section.heading}</h2>
    {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
    {section.table && <Table headers={section.table.headers} rows={section.table.rows} />}
    {section.note && <aside className="note">{section.note}</aside>}
    {images.map((image) => <Figure key={`${image.src}-${id}`} image={image} />)}
  </section>;
}

export default function LocalizedGuidePage({ page, pagesByPath }: { page: LocalizedPageData; pagesByPath: Map<string, LocalizedPageData> }) {
  const t = ui[page.locale];
  const url = absoluteUrl(page.path);
  const homePath = `/${page.locale}/`;
  const home = pagesByPath.get(homePath);
  const headings = page.sections.map((section, index) => ({ section, id: headingSlug(section.heading, index) }));
  const related = page.related.map((path) => pagesByPath.get(path)).filter((item): item is LocalizedPageData => Boolean(item));
  const schemaType = page.pageType === "article" ? "Article" : page.pageType === "collection" ? "CollectionPage" : "WebSite";
  const pageSchema = {
    "@context": "https://schema.org", "@type": schemaType, inLanguage: page.locale,
    headline: page.h1, name: page.h1, description: page.description, url,
    image: absoluteUrl(page.heroImage),
    author: { "@type": "Organization", name: "Mistfall Hunter GG Editorial Team" },
    publisher: { "@type": "Organization", name: "Mistfall Hunter Guide", url: absoluteUrl("/") },
    ...(page.pageType === "article" ? { datePublished: page.published, dateModified: page.updated } : {}),
  };
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.home, item: absoluteUrl(homePath) },
      ...(page.path === homePath ? [] : [{ "@type": "ListItem", position: 2, name: page.h1, item: url }]),
    ],
  };
  const faqSchema = page.faqs.length ? {
    "@context": "https://schema.org", "@type": "FAQPage", inLanguage: page.locale,
    mainEntity: page.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  } : null;

  return <>
    <JsonLd data={faqSchema ? [pageSchema, breadcrumb, faqSchema] : [pageSchema, breadcrumb]} />
    <section className="page-hero">
      <figure className="page-hero-media"><Image src={page.heroImage} alt={page.heroImageAlt} width={1600} height={900} priority sizes="100vw" />
        <figcaption>{page.heroImageCaption} <a href={page.heroImageSourceUrl} target="_blank" rel="noopener noreferrer">Official source</a></figcaption>
      </figure>
      <div className="page-hero-shade" />
      <div className="page-hero-inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><span className="breadcrumb-item">
          {page.path === homePath ? <span aria-current="page">{t.home}</span> : <><Link href={homePath}>{t.home}</Link><span aria-hidden="true">/</span><span aria-current="page">{page.h1}</span></>}
        </span></nav>
        <p className="eyebrow">{page.eyebrow}</p><h1>{page.h1}</h1><p className="direct-answer">{page.answer}</p>
        {page.warning && <p className="warning">{page.warning}</p>}
      </div>
    </section>
    <main className="article-layout"><article className="article">
      <dl className="page-facts"><div><dt>{t.updated}</dt><dd>{page.updated}</dd></div><div><dt>{t.version}</dt><dd>{page.version}</dd></div>
        <div><dt>{t.platforms}</dt><dd>{page.platforms}</dd></div><div><dt>{t.type}</dt><dd>{page.informationType}</dd></div></dl>
      {headings.length >= 3 && <details className="on-this-page" open><summary>{t.toc}</summary><nav aria-label={t.toc}>{headings.map(({ section, id }) => <a key={id} href={`#${id}`}>{section.heading}</a>)}</nav></details>}
      {headings.map(({ section, id }) => <Section key={id} section={section} id={id} images={page.contentImages.filter((image) => image.placementAfterHeading === section.heading)} />)}
      {page.faqs.length > 0 && <section><p className="section-label">{t.faqLabel}</p><h2>{t.faq}</h2><FAQ items={page.faqs} /></section>}
      {related.length > 0 && <section className="related-guides"><p className="section-label">{t.relatedLabel}</p><h2>{t.related}</h2><div className="related-grid">
        {related.map((item) => <Link className="localized-related-card" href={item.path} key={item.path}><span>{item.eyebrow}</span><strong>{item.h1}</strong><small>{item.answer}</small></Link>)}
      </div></section>}
      <section className="sources"><p className="section-label">{t.evidence}</p><h2>{t.sources}</h2><p>{t.checked} {page.updated}.</p><ul>{page.sources.map((source) => <li key={source.url}><span>{source.level}</span><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul></section>
    </article><aside className="article-rail"><div><span className="rail-label">{t.current}</span><strong>{t.snapshot}</strong><p>{page.informationType}</p></div>
      <nav aria-label={t.related}>{home && <Link href={home.path}>{home.h1}</Link>}{related.slice(0, 4).map((item) => <Link href={item.path} key={item.path}>{item.h1}</Link>)}</nav></aside></main>
  </>;
}
