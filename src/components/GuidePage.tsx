import Image from "next/image";
import Link from "next/link";
import FAQ from "./FAQ";
import GuideCard from "./GuideCard";
import JsonLd from "./JsonLd";
import ArticleOutline from "./ArticleOutline";
import ArticleVideo from "./ArticleVideo";
import GuidePath from "./GuidePath";
import BuildClassGrid from "./BuildClassGrid";
import PickerCta from "./PickerCta";
import ClassPickerInline from "./ClassPickerInline";
import { absoluteUrl } from "@/lib/site-config";
import { getPage } from "@/data/pages";
import { buildArticleOutline, outlineIsVisible, type OutlineItem } from "@/lib/article-outline";
import type { ContentImage, ContentVideo, GuidePageData, GuideSection, GuideSubsection } from "@/lib/types";

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

function ContentFigure({ image }: { image: ContentImage }) {
  return (
    <figure className="content-figure">
      <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 820px) 100vw, 790px"
        />
      </a>
      <figcaption>{image.caption} <span>Source: {image.sourceLabel}.</span></figcaption>
    </figure>
  );
}

function ArticleSection({
  section,
  outlineItem,
  images,
  videos,
}: {
  section: GuideSection;
  outlineItem: OutlineItem;
  images: ContentImage[];
  videos: ContentVideo[];
}) {
  return (
    <section>
      <h2 id={outlineItem.id}>{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
      {section.table && <Table headers={section.table.headers} rows={section.table.rows} />}
      {section.note && <aside className="note">{section.note}</aside>}
      {section.subsections?.map((subsection, index) => (
        <ArticleSubsection key={outlineItem.children?.[index]?.id ?? subsection.heading} subsection={subsection} id={outlineItem.children?.[index]?.id ?? `subsection-${index + 1}`} />
      ))}
      {images.map((image) => <ContentFigure key={image.src} image={image} />)}
      {videos.map((video) => <ArticleVideo key={video.id} video={video} />)}
    </section>
  );
}

function ArticleSubsection({ subsection, id }: { subsection: GuideSubsection; id: string }) {
  return <div className="article-subsection">
    <h3 id={id}>{subsection.heading}</h3>
    {subsection.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    {subsection.bullets && <ul>{subsection.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
    {subsection.table && <Table headers={subsection.table.headers} rows={subsection.table.rows} />}
    {subsection.note && <aside className="note">{subsection.note}</aside>}
  </div>;
}

export default function GuidePage({ page }: { page: GuidePageData }) {
  const url = absoluteUrl(`/${page.path}/`);
  const label = page.breadcrumbLabel ?? page.h1;
  const related = page.related.map(getPage).filter((item): item is GuidePageData => Boolean(item));
  const category = page.categoryPath ? getPage(page.categoryPath) : undefined;
  const heroImage = page.heroImage ?? page.image;
  const heroImageUrl = heroImage ? absoluteUrl(heroImage) : undefined;
  const outline = buildArticleOutline(page.sections);
  const showOutline = outlineIsVisible(outline);
  const breadcrumbItems = [
    { name: "Home", url: absoluteUrl("/") },
    ...(category ? [{ name: category.breadcrumbLabel ?? category.h1, url: absoluteUrl(`/${category.path}/`) }] : []),
    { name: label, url },
  ];
  const schemaType = {
    article: "Article",
    category: "CollectionPage",
    policy: "WebPage",
    about: "AboutPage",
    contact: "ContactPage",
    webpage: "WebPage",
  }[page.pageType ?? "article"];
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    headline: page.h1,
    name: page.h1,
    description: page.description,
    mainEntityOfPage: url,
    image: heroImageUrl,
    author: { "@type": "Organization", name: "Mistfall Hunter GG Editorial Team", url: absoluteUrl("/editorial-policy/") },
    publisher: { "@type": "Organization", name: "Mistfall Hunter Guide", url: absoluteUrl("/") },
    ...(page.pageType === "article"
      ? { datePublished: page.published, dateModified: page.updated }
      : {}),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
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
      <JsonLd data={faq ? [pageSchema, breadcrumb, faq] : [pageSchema, breadcrumb]} />
      <section className="page-hero">
        {heroImage && (
          <figure className="page-hero-media">
            <Image
              src={heroImage}
              alt={page.heroImageAlt ?? page.imageAlt ?? page.h1}
              width={page.heroImageWidth ?? 1600}
              height={page.heroImageHeight ?? 900}
              priority
              sizes="100vw"
            />
            {page.heroImageCaption && (
              <figcaption>
                {page.heroImageCaption}{" "}
                {page.heroImageSourceUrl && <a href={page.heroImageSourceUrl} target="_blank" rel="noopener noreferrer">Official source</a>}
              </figcaption>
            )}
          </figure>
        )}
        <div className="page-hero-shade" />
        <div className="page-hero-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            {breadcrumbItems.map((item, index) => (
              <span className="breadcrumb-item" key={item.url}>
                {index < breadcrumbItems.length - 1
                  ? <Link href={new URL(item.url).pathname}>{item.name}</Link>
                  : <span aria-current="page">{item.name}</span>}
                {index < breadcrumbItems.length - 1 && <span aria-hidden="true">/</span>}
              </span>
            ))}
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

          {page.pickerCta && <PickerCta label={page.pickerCta} entryType={page.path === "guides" ? "guides_hub" : page.path === "classes" ? "classes_hub" : page.path === "builds" ? "builds_hub" : "build_page"} />}
          {page.tool === "class-picker" && <ClassPickerInline />}
          {page.guidePath && <GuidePath steps={page.guidePath} />}
          {page.buildCards && <BuildClassGrid cards={page.buildCards} />}

          {showOutline && (
            <details className="on-this-page mobile-article-outline">
              <summary>On this page</summary>
              <nav aria-label="On this page">
                {outline.items.map((item) => <span className="mobile-outline-group" key={item.id}>
                  <a className="mobile-outline-h2" href={`#${item.id}`}>{item.label}</a>
                  {item.children?.map((child) => <a className="mobile-outline-h3" key={child.id} href={`#${child.id}`}>{child.label}</a>)}
                </span>)}
              </nav>
            </details>
          )}

          {page.sections.map((section, index) => (
            <ArticleSection
              key={outline.items[index].id}
              section={section}
              outlineItem={outline.items[index]}
              images={(page.contentImages ?? []).filter((image) => image.placementAfterHeading === section.heading)}
              videos={(page.contentVideos ?? []).filter((video) => video.placementAfterHeading === section.heading)}
            />
          ))}

          {page.faqs.length > 0 && (
            <section>
              <p className="section-label">Quick answers</p>
              <h2 id="page-faq">Frequently asked questions</h2>
              <FAQ items={page.faqs} />
            </section>
          )}

          {related.length > 0 && (
            <section className="related-guides">
              <p className="section-label">Continue reading</p>
              <h2 id="page-related">Related guides</h2>
              <div className="related-grid">{related.map((relatedPage) => <GuideCard key={relatedPage.path} page={relatedPage} />)}</div>
            </section>
          )}

          {page.sources.length > 0 && (
            <section className="sources">
              <p className="section-label">Evidence</p>
              <h2 id="page-sources">Sources and further reading</h2>
              <p>These are the pages used to verify this guide. Time-sensitive facts were last checked on {page.updated}.</p>
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
          <p className="return-home">
            {category
              ? <>Continue with the <Link href={`/${category.path}/`}>{category.breadcrumbLabel ?? category.h1} hub</Link> or browse all <Link href="/">Mistfall Hunter help</Link>.</>
              : <>Browse the <Link href="/">Mistfall Hunter Guide home</Link> for classes, builds, multiplayer, fixes, rewards, and updates.</>}
          </p>
        </article>
        <ArticleOutline
          outline={outline}
          locale="en"
          version={page.version}
          related={related.slice(0, 4).map((item) => ({ href: `/${item.path}/`, label: item.breadcrumbLabel ?? item.h1 }))}
        />
      </main>
    </>
  );
}
