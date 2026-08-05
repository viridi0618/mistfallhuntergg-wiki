import fs from "node:fs";
import path from "node:path";
import { routeTranslations } from "../src/i18n/routes.ts";

const root = process.cwd();
const outRoot = path.join(root, "out");
const domain = "https://mistfallhuntergg.wiki";
const groups = routeTranslations;
const localized = groups.flatMap((group) => Object.entries(group).filter(([locale]) => locale !== "en").map(([locale, route]) => ({ locale, route, group })));
const excludedOutlineIds = new Set(["page-faq", "page-related", "page-sources"]);
const outlineLabels = { es: "En esta página", de: "Auf dieser Seite" };

function fileFor(route) { return route === "/" ? path.join(outRoot, "index.html") : path.join(outRoot, route.replace(/^\/|\/$/g, ""), "index.html"); }
function absolute(route) { return `${domain}${route}`; }
function tagAttr(html, pattern, name) { return html.match(pattern)?.[0]?.match(new RegExp(`${name}="([^"]*)"`, "i"))?.[1]; }
function classBlock(html, tag, className) { return html.match(new RegExp(`<${tag}\\b[^>]*class="[^"]*\\b${className}\\b[^"]*"[^>]*>[\\s\\S]*?<\\/${tag}>`))?.[0] ?? ""; }

function inspectLocalizedOutline(html, route, locale, errors) {
  const article = html.match(/<article\b[^>]*class="[^"]*\barticle\b[^"]*"[^>]*>[\s\S]*?<\/article>/)?.[0] ?? "";
  const headings = [...article.matchAll(/<(h[23])\b([^>]*)>/g)].map((match) => ({ level: Number(match[1].slice(1)), id: match[2].match(/\bid="([^"]+)"/)?.[1] ?? "" })).filter((heading) => heading.level === 2 || heading.id);
  const subsectionCount = (article.match(/class="article-subsection"/g) ?? []).length;
  const outlinedH3Count = headings.filter((heading) => heading.level === 3).length;
  if (subsectionCount !== outlinedH3Count) errors.push(`${route} has an article subsection without an identified H3.`);
  for (const heading of headings) if (!heading.id) errors.push(`${route} has an H${heading.level} without an ID.`);
  const ids = headings.map((heading) => heading.id).filter(Boolean);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) errors.push(`${route} has duplicate H2/H3 IDs: ${[...new Set(duplicateIds)].join(", ")}.`);
  let parentH2 = "";
  for (const heading of headings) {
    if (heading.level === 2) parentH2 = excludedOutlineIds.has(heading.id) ? "" : heading.id;
    if (heading.level === 3 && !parentH2) errors.push(`${route} has H3 #${heading.id} without a content H2 parent.`);
  }

  const outlineHeadings = headings.filter((heading) => !excludedOutlineIds.has(heading.id));
  const outlineIds = outlineHeadings.map((heading) => heading.id);
  const shouldShow = outlineHeadings.filter((heading) => heading.level === 2).length >= 3 || outlineHeadings.some((heading) => heading.level === 3);
  const mobileToc = classBlock(html, "details", "on-this-page");
  const desktopToc = classBlock(html, "nav", "wiki-outline");
  if (shouldShow && (!mobileToc || !desktopToc)) errors.push(`${route} is missing its mobile or desktop localized outline.`);
  if (!shouldShow && (mobileToc || desktopToc)) errors.push(`${route} unexpectedly renders an outline on a short page.`);
  for (const [kind, toc] of [["mobile", mobileToc], ["desktop", desktopToc]]) {
    if (!toc) continue;
    if (!toc.includes(`aria-label="${outlineLabels[locale]}"`)) errors.push(`${route} has the wrong ${kind} localized outline label.`);
    if (/<h1\b|<h4\b/i.test(toc)) errors.push(`${route} ${kind} outline contains H1 or H4.`);
    const targets = [...toc.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
    const duplicateTargets = targets.filter((target, index) => targets.indexOf(target) !== index);
    if (duplicateTargets.length) errors.push(`${route} has duplicate ${kind} TOC targets: ${[...new Set(duplicateTargets)].join(", ")}.`);
    for (const target of targets) {
      if (!ids.includes(target)) errors.push(`${route} ${kind} TOC target does not exist: #${target}.`);
      if (excludedOutlineIds.has(target)) errors.push(`${route} ${kind} TOC incorrectly includes #${target}.`);
    }
    if (targets.join("|") !== outlineIds.join("|")) errors.push(`${route} ${kind} TOC does not match the H2/H3 article order.`);
  }
}

const errors = [];
const titles = new Set();
const descriptions = new Set();
if (!fs.existsSync(outRoot)) errors.push("Missing out/. Run npm run build first.");
for (const { locale, route, group } of localized) {
  const file = fileFor(route);
  if (!fs.existsSync(file)) { errors.push(`Missing localized route: ${route}`); continue; }
  const html = fs.readFileSync(file, "utf8");
  if (!html.startsWith(`<!DOCTYPE html><html lang="${locale}"`)) errors.push(`${route} does not render static html lang=${locale}.`);
  if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${route} must have exactly one H1.`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${route} is missing a title.`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${route} is missing a description.`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = tagAttr(html, /<meta\b[^>]*name="description"[^>]*>/i, "content");
  if (title && titles.has(title)) errors.push(`${route} has a duplicate localized title.`); else if (title) titles.add(title);
  if (description && descriptions.has(description)) errors.push(`${route} has a duplicate localized description.`); else if (description) descriptions.add(description);
  if (tagAttr(html, /<link\b[^>]*rel="canonical"[^>]*>/i, "href") !== absolute(route)) errors.push(`${route} is not self-canonical.`);
  if (/name="robots" content="[^"]*noindex/i.test(html)) errors.push(`${route} is noindex.`);
  const alternates = Object.fromEntries([...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)].map((match) => [match[1], match[2]]));
  for (const [lang, target] of Object.entries(group)) if (alternates[lang] !== absolute(target)) errors.push(`${route} has wrong or missing ${lang} hreflang.`);
  if (alternates["x-default"] !== absolute(group.en)) errors.push(`${route} has wrong x-default.`);
  const unexpected = Object.keys(alternates).filter((lang) => ![...Object.keys(group), "x-default"].includes(lang));
  if (unexpected.length) errors.push(`${route} has fake hreflang entries: ${unexpected.join(", ")}.`);
  if (!html.includes('class="language-switcher"')) errors.push(`${route} is missing the language switcher.`);
  const expectedOg = ["/es/", "/de/", "/es/clases/", "/es/builds/", "/es/armas/", "/es/recompensas/"].includes(route) ? "website" : "article";
  if (tagAttr(html, /<meta\b[^>]*property="og:type"[^>]*>/i, "content") !== expectedOg) errors.push(`${route} has wrong og:type.`);
  if (!html.includes(`\"inLanguage\":\"${locale}\"`)) errors.push(`${route} JSON-LD is missing inLanguage=${locale}.`);

  inspectLocalizedOutline(html, route, locale, errors);
}

for (const group of groups) {
  for (const route of Object.values(group)) {
    const html = fs.readFileSync(fileFor(route), "utf8");
    for (const [lang, target] of Object.entries(group)) if (!html.includes(`hrefLang="${lang}" href="${absolute(target)}"`)) errors.push(`${route} lacks reciprocal ${lang} alternate.`);
  }
}

const baseline = JSON.parse(fs.readFileSync(path.join(root, "ENGLISH_SEO_BASELINE.json"), "utf8"));
for (const page of baseline.pages) {
  const html = fs.readFileSync(fileFor(page.path), "utf8");
  const switcher = html.match(/<nav class="language-switcher"[\s\S]*?<\/nav>/)?.[0] ?? "";
  if (!switcher) { errors.push(`${page.path} is missing the language switcher.`); continue; }
  const group = groups.find((entry) => entry.en === page.path);
  const esTarget = group?.es ?? "/es/";
  const deTarget = group?.de ?? "/de/";
  if (!switcher.includes(`href="${esTarget}"`)) errors.push(`${page.path} has wrong Spanish switcher target.`);
  if (!switcher.includes(`href="${deTarget}"`)) errors.push(`${page.path} has wrong German switcher target.`);
}

if (fs.existsSync(path.join(outRoot, "en"))) errors.push("Forbidden /en/ route exists.");
const sitemap = fs.existsSync(path.join(outRoot, "sitemap.xml")) ? fs.readFileSync(path.join(outRoot, "sitemap.xml"), "utf8") : "";
for (const { route } of localized) if (!sitemap.includes(`<loc>${absolute(route)}</loc>`)) errors.push(`Sitemap is missing ${route}.`);
if (errors.length) { console.error([...new Set(errors)].join("\n")); process.exit(1); }
console.log(`I18n check passed: ${localized.length} localized routes, static lang attributes, self-canonicals, reciprocal hreflang, switchers, schema, and sitemap entries.`);
