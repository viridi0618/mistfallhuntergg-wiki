import fs from "node:fs";
import path from "node:path";
import { keywordFamilies } from "../src/data/keyword-families.ts";

const root = process.cwd();
const outRoot = path.join(root, "out");
const outputFile = path.join(root, "KEYWORD_REPORT.md");

function routeFile(route) {
  return route === "/"
    ? path.join(outRoot, "index.html")
    : path.join(outRoot, route.replace(/^\/|\/$/g, ""), "index.html");
}

function decodeEntities(value) {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (entity, name) => named[name.toLowerCase()] ?? entity);
}

function mainContent(html, route) {
  const className = route === "/" ? "home-main" : "article";
  const tag = route === "/" ? "main" : "article";
  const match = html.match(new RegExp(`<${tag}\\b[^>]*class="${className}"[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  if (!match) throw new Error(`Could not find ${tag}.${className} on ${route}`);

  return match[1]
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
    .replace(/<details\b[^>]*class="on-this-page"[^>]*>[\s\S]*?<\/details>/gi, " ")
    .replace(/<section\b[^>]*class="related-guides"[^>]*>[\s\S]*?<\/section>/gi, " ")
    .replace(/<section\b[^>]*class="sources"[^>]*>[\s\S]*?<\/section>/gi, " ")
    .replace(/<p\b[^>]*class="return-home"[^>]*>[\s\S]*?<\/p>/gi, " ")
    .replace(/<([a-z][\w-]*)\b[^>]*(?:\shidden(?:\s|=|>)|aria-hidden="true")[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ");
}

function visibleText(html, route) {
  return decodeEntities(mainContent(html, route))
    .replace(/[’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(text) {
  return text.match(/[a-z0-9]+(?:'[a-z0-9]+)?/gi)?.length ?? 0;
}

function phraseCount(text, phrase) {
  const normalizedText = ` ${text.toLowerCase().replace(/[^a-z0-9']+/g, " ").trim()} `;
  const normalizedPhrase = phrase.toLowerCase().replace(/[^a-z0-9']+/g, " ").trim();
  if (!normalizedPhrase) return 0;
  const escaped = normalizedPhrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return normalizedText.match(new RegExp(`(?=\\b${escaped}\\b)`, "g"))?.length ?? 0;
}

function exactStatus(density) {
  if (density < 0.5) return "Low";
  if (density <= 1.3) return "Natural";
  if (density <= 1.8) return "Review";
  return "Possible stuffing";
}

function percent(count, words) {
  return words ? (count / words) * 100 : 0;
}

function md(value) {
  return String(value).replace(/\|/g, "\\|");
}

if (!fs.existsSync(outRoot)) {
  console.error("Missing out directory. Run npm run build before report:keywords.");
  process.exit(1);
}

const rows = [];
for (const [route, family] of Object.entries(keywordFamilies)) {
  if (family.variants.length < 4 || family.variants.length > 10) {
    console.error(`Keyword family for ${route} must contain 4-10 variants.`);
    process.exit(1);
  }
  const file = routeFile(route);
  if (!fs.existsSync(file)) {
    console.error(`Missing built page for keyword report: ${route}`);
    process.exit(1);
  }
  const text = visibleText(fs.readFileSync(file, "utf8"), route);
  const words = wordCount(text);
  const exact = phraseCount(text, family.primary);
  const phrases = [...new Set([family.primary, ...family.variants])];
  const familyCount = phrases.reduce((sum, phrase) => sum + phraseCount(text, phrase), 0);
  const exactDensity = percent(exact, words);
  const familyDensity = percent(familyCount, words);
  rows.push({
    route,
    primary: family.primary,
    words,
    exact,
    exactDensity,
    familyCount,
    familyDensity,
    status: exactStatus(exactDensity),
  });
}

const byExact = [...rows].sort((a, b) => a.exactDensity - b.exactDensity || a.route.localeCompare(b.route));
const suspected = rows.filter((row) => row.status === "Possible stuffing");
const hold = rows.filter((row) => row.status !== "Low" || row.familyDensity > 3.2);
const semantic = rows
  .filter((row) => row.exactDensity < 0.5 && row.familyDensity < 2)
  .sort((a, b) => a.familyDensity - b.familyDensity || a.route.localeCompare(b.route))
  .slice(0, 10);
const table = (items) => items.map((row) =>
  `| ${md(row.route)} | ${md(row.primary)} | ${row.words} | ${row.exact} | ${row.exactDensity.toFixed(2)}% | ${row.familyCount} | ${row.familyDensity.toFixed(2)}% | ${row.status} |`
).join("\n");
const routeList = (items) => items.length ? items.map((row) => `\`${row.route}\``).join(", ") : "None.";

const report = `# Keyword Report

Generated from the built static export in \`out\`. Policy pages are excluded. Counts use visible text from \`article.article\` or \`main.home-main\`; navigation, the table of contents, related-guide blocks, source blocks, scripts, styles, hidden content, URLs, image paths, and markup attributes are removed.

Exact-density status: below 0.5% = Low; 0.5–1.3% = Natural; 1.3–1.8% = Review; above 1.8% = Possible stuffing. Keyword-family density has a soft review range of 2.0–3.2%. This report never changes page copy and density results do not make the command fail.

| URL | Primary keyword | Visible words | Exact count | Exact density | Family count | Family density | Status |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
${table(rows)}

## Lowest five exact densities

| URL | Primary keyword | Visible words | Exact count | Exact density | Family count | Family density | Status |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
${table(byExact.slice(0, 5))}

## Highest five exact densities

| URL | Primary keyword | Visible words | Exact count | Exact density | Family count | Family density | Status |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
${table(byExact.slice(-5).reverse())}

## Review queues

- Suspected exact-match stuffing: ${routeList(suspected)}
- Do not add more keyword repetitions without a manual readability review: ${routeList(hold)}
- Could add specific semantic terms later if they fit a useful sentence: ${routeList(semantic)}
`;

fs.writeFileSync(outputFile, report, "utf8");
console.log(`Keyword report written: ${rows.length} content pages, ${suspected.length} possible-stuffing flags.`);
