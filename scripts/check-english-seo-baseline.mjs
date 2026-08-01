import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baselinePath = path.join(root, "ENGLISH_SEO_BASELINE.json");
const outRoot = path.join(root, "out");
const mainSchemaTypes = new Set(["WebSite", "Article", "CollectionPage", "WebPage", "AboutPage", "ContactPage"]);

function decode(value = "") {
  const named = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: '"' };
  return value.replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (entity, name) => named[name.toLowerCase()] ?? entity);
}

function fileFor(route) {
  return route === "/" ? path.join(outRoot, "index.html") : path.join(outRoot, route.replace(/^\/|\/$/g, ""), "index.html");
}

function attr(html, tagPattern, attribute) {
  const tag = html.match(tagPattern)?.[0];
  return tag?.match(new RegExp(`${attribute}="([^"]*)"`, "i"))?.[1];
}

function schemaTypes(html) {
  const result = [];
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const parsed = JSON.parse(decode(match[1]));
    const schemas = Array.isArray(parsed) ? parsed : [parsed];
    for (const schema of schemas) {
      const type = schema?.["@type"];
      if (mainSchemaTypes.has(type) && !result.includes(type)) result.push(type);
    }
  }
  return result;
}

function snapshot(html) {
  const robots = attr(html, /<meta\b[^>]*name="robots"[^>]*>/i, "content") ?? "index, follow";
  return {
    title: decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? ""),
    description: decode(attr(html, /<meta\b[^>]*name="description"[^>]*>/i, "content") ?? ""),
    h1: decode((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "").replace(/<[^>]+>/g, "")),
    canonical: decode(attr(html, /<link\b[^>]*rel="canonical"[^>]*>/i, "href") ?? ""),
    robots: { index: !/noindex/i.test(robots), follow: !/nofollow/i.test(robots) },
    ogTitle: decode(attr(html, /<meta\b[^>]*property="og:title"[^>]*>/i, "content") ?? ""),
    ogDescription: decode(attr(html, /<meta\b[^>]*property="og:description"[^>]*>/i, "content") ?? ""),
    ogType: decode(attr(html, /<meta\b[^>]*property="og:type"[^>]*>/i, "content") ?? ""),
    schemaTypes: schemaTypes(html),
  };
}

if (!fs.existsSync(baselinePath) || !fs.existsSync(outRoot)) {
  console.error("Missing ENGLISH_SEO_BASELINE.json or out/. Run the build, but do not regenerate the baseline.");
  process.exit(1);
}

const baseline = JSON.parse(fs.readFileSync(baselinePath, "utf8"));
const errors = [];
if (baseline.publicPageCount !== baseline.pages.length) errors.push("Baseline page count does not match its page list.");

for (const expected of baseline.pages) {
  const file = fileFor(expected.path);
  if (!fs.existsSync(file)) { errors.push(`Missing English public URL: ${expected.path}`); continue; }
  const actual = snapshot(fs.readFileSync(file, "utf8"));
  for (const field of ["title", "description", "h1", "canonical", "ogTitle", "ogDescription", "ogType"]) {
    if (actual[field] !== expected[field]) errors.push(`${expected.path} ${field} changed. Expected ${JSON.stringify(expected[field])}; got ${JSON.stringify(actual[field])}.`);
  }
  if (!actual.robots.index || !actual.robots.follow) errors.push(`${expected.path} changed to noindex or nofollow.`);
  if (JSON.stringify(actual.schemaTypes) !== JSON.stringify(expected.schemaTypes)) errors.push(`${expected.path} main JSON-LD type changed: ${actual.schemaTypes.join(", ")}.`);
}

if (fs.existsSync(path.join(outRoot, "en"))) errors.push("Forbidden duplicate English /en/ route exists.");
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`English SEO baseline passed: ${baseline.publicPageCount} URLs; TDH, canonical, robots, Open Graph, and schema types unchanged.`);
