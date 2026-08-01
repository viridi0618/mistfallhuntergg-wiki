import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outRoot = path.join(root, "out");
const domain = "https://mistfallhuntergg.wiki";
const groups = [
  { en: "/", es: "/es/", de: "/de/" },
  { en: "/beginner-guide/", es: "/es/guia-principiantes/" }, { en: "/how-to-extract/", es: "/es/como-extraer/" },
  { en: "/classes/", es: "/es/clases/" }, { en: "/best-class/", es: "/es/mejor-clase/" },
  { en: "/best-solo-class/", es: "/es/mejor-clase-solo/" }, { en: "/class-tier-list/", es: "/es/tier-list-clases/" },
  { en: "/builds/", es: "/es/builds/" }, { en: "/solo-mode/", es: "/es/jugar-solo/" },
  { en: "/servers/", es: "/es/servidores/", de: "/de/server/" },
  { en: "/region-lock/", es: "/es/bloqueo-regional/", de: "/de/region-lock/" },
  { en: "/codes/", es: "/es/codigos/" }, { en: "/best-settings/", de: "/de/einstellungen/" },
  { en: "/stuttering-fix/", de: "/de/ruckler-beheben/" }, { en: "/crashing-fix/", de: "/de/absturz-beheben/" },
];
const localized = groups.flatMap((group) => Object.entries(group).filter(([locale]) => locale !== "en").map(([locale, route]) => ({ locale, route, group })));

function fileFor(route) { return route === "/" ? path.join(outRoot, "index.html") : path.join(outRoot, route.replace(/^\/|\/$/g, ""), "index.html"); }
function absolute(route) { return `${domain}${route}`; }
function tagAttr(html, pattern, name) { return html.match(pattern)?.[0]?.match(new RegExp(`${name}="([^"]*)"`, "i"))?.[1]; }

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
  const expectedOg = ["/es/", "/de/", "/es/clases/", "/es/builds/"].includes(route) ? "website" : "article";
  if (tagAttr(html, /<meta\b[^>]*property="og:type"[^>]*>/i, "content") !== expectedOg) errors.push(`${route} has wrong og:type.`);
  if (!html.includes(`\"inLanguage\":\"${locale}\"`)) errors.push(`${route} JSON-LD is missing inLanguage=${locale}.`);
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
