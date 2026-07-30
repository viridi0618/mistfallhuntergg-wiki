import Link from "next/link";
import FAQ from "./FAQ";
import GuideCard from "./GuideCard";
import JsonLd from "./JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { categoryLanding, getPage } from "@/data/pages";
import type { GuidePageData } from "@/lib/types";

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
        <tbody>{rows.map((row, index) => <tr key={`${row[0]}-${index}`}>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export default function GuidePage({ page }: { page: GuidePageData }) {
  const url = absoluteUrl(`/${page.path}/`);
  const categoryHref = categoryLanding[page.category] ?? "beginner-guide";
  const related = page.related.map(getPage).filter((item): item is GuidePageData => Boolean(item));
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    datePublished: page.published,
    dateModified: page.updated,
    mainEntityOfPage: url,
    image: absoluteUrl(page.image ?? siteConfig.defaultSocialImage),
    author: { "@type": "Organization", name: siteConfig.author, url: absoluteUrl("/editorial-policy/") },
    publisher: { "@type": "Organization", name: siteConfig.name, url: absoluteUrl("/") },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: page.category, item: absoluteUrl(`/${categoryHref}/`) },
      { "@type": "ListItem", position: 3, name: page.h1, item: url },
    ],
  };
  const faq = page.faqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  } : null;

  return (
    <>
      <JsonLd data={faq ? [article, breadcrumb, faq] : [article, breadcrumb]} />
      <section className="page-hero">
        <div className="hero-image" role="img" aria-label={page.imageAlt ?? "Gyldhunter exploring the mist-shrouded world of Mistfall Hunter"} />
        <div className="page-hero-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href={`/${categoryHref}/`}>{page.category}</Link><span>/</span>
            <span aria-current="page">{page.h1}</span>
          </nav>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.h1}</h1>
          <p className="direct-answer">{page.answer}</p>
          {page.warning && <p className="warning">{page.warning}</p>}
        </div>
      </section>

      <main className="article-layout">
        <article className="article">
          <dl className="page-facts">
            <div><dt>Last updated</dt><dd>{page.updated}</dd></div>
            <div><dt>Game version</dt><dd>{page.version}</dd></div>
            <div><dt>Platforms covered</dt><dd>{page.platforms}</dd></div>
            <div><dt>Information type</dt><dd>{page.informationType}</dd></div>
          </dl>

          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.table && <Table headers={section.table.headers} rows={section.table.rows} />}
              {section.note && <aside className="note">{section.note}</aside>}
            </section>
          ))}

          {page.faqs.length > 0 && (
            <section>
              <p className="section-label">Quick answers</p>
              <h2>Frequently asked questions</h2>
              <FAQ items={page.faqs} />
            </section>
          )}

          {related.length > 0 && (
            <section>
              <p className="section-label">Continue reading</p>
              <h2>Related guides</h2>
              <div className="related-grid">{related.map((relatedPage) => <GuideCard key={relatedPage.path} page={relatedPage} />)}</div>
            </section>
          )}

          {page.sources.length > 0 && (
            <section className="sources">
              <p className="section-label">Evidence</p>
              <h2>Sources and further reading</h2>
              <p>These are the primary pages used to verify this guide. Time-sensitive facts were last checked on {page.updated}.</p>
              <ul>
                {page.sources.map((source) => (
                  <li key={source.url}>
                    <span>{source.level}</span>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <p className="return-home">Browse the complete <Link href="/">Mistfall Hunter guide</Link> for current classes, builds, fixes, rewards, and gameplay help.</p>
        </article>
        <aside className="article-rail">
          <div>
            <span className="rail-label">Current snapshot</span>
            <strong>Launch / Season 1</strong>
            <p>Verified against official launch material and immediate post-launch updates.</p>
          </div>
          <nav aria-label="Useful guide links">
            <Link href="/beginner-guide/">Beginner guide</Link>
            <Link href="/classes/">All six classes</Link>
            <Link href="/known-issues/">Known issues</Link>
            <Link href="/patch-notes/">Patch notes</Link>
          </nav>
        </aside>
      </main>
    </>
  );
}
