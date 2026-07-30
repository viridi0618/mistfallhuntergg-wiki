import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "src");
const outRoot = path.join(root, "out");
const expectedRoutes = [
  "",
  "beginner-guide", "how-to-extract", "character-creation",
  "classes", "best-class", "best-solo-class", "class-tier-list",
  "classes/mercenary", "classes/sorcerer", "classes/blackarrow",
  "classes/shadowstrix", "classes/seer", "classes/withered-knight",
  "builds", "solo-mode", "pve-only", "gameplay", "crossplay", "servers",
  "region-lock", "play-with-friends", "fov", "best-settings",
  "controller-guide", "fatal-error-fix", "stuttering-fix", "crashing-fix",
  "connection-fix", "codes", "twitch-drops", "launch-rewards", "skins",
  "known-issues", "patch-notes", "price", "platforms", "review",
  "system-requirements", "about", "editorial-policy", "privacy-policy",
  "disclaimer", "contact",
];
const domain = "https://mistfallhuntergg.wiki";

function filesUnder(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(full) : [full];
  });
}

const sourceText = filesUnder(sourceRoot)
  .filter((file) => /\.(ts|tsx|css)$/.test(file))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

const errors = [];

if (!sourceText.includes(domain)) errors.push("Production domain is missing from source.");
if (!fs.existsSync(path.join(root, "public", "mistfall-hunter-gyldenmist.jpg"))) errors.push("Local hero image is missing.");
if (!fs.existsSync(path.join(root, "public", "og.png"))) errors.push("Social preview image is missing.");
if (!fs.existsSync(path.join(root, "CONTENT_REVIEW.md"))) errors.push("CONTENT_REVIEW.md is missing.");

if (fs.existsSync(outRoot)) {
  const titles = new Set();
  const descriptions = new Set();
  for (const route of expectedRoutes) {
    const file = route ? path.join(outRoot, route, "index.html") : path.join(outRoot, "index.html");
    if (!fs.existsSync(file)) {
      errors.push(`Missing exported route: /${route}`);
      continue;
    }
    const html = fs.readFileSync(file, "utf8");
    const h1Count = (html.match(/<h1\b/g) || []).length;
    if (h1Count !== 1) errors.push(`Expected one H1 on /${route}; found ${h1Count}.`);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    if (!title) errors.push(`Missing title on /${route}.`);
    else if (titles.has(title)) errors.push(`Duplicate title on /${route}: ${title}`);
    else titles.add(title);
    if (!description) errors.push(`Missing meta description on /${route}.`);
    else if (descriptions.has(description)) errors.push(`Duplicate description on /${route}.`);
    else descriptions.add(description);
    if (!html.includes(`rel="canonical" href="${domain}`)) errors.push(`Invalid canonical on /${route}.`);

    const localLinks = [...html.matchAll(/href="(\/[^"#?]*)"/g)]
      .map((match) => match[1])
      .filter((href) => !href.startsWith("/_next/"));
    for (const href of localLinks) {
      const clean = href.replace(/^\/|\/$/g, "");
      if (!expectedRoutes.includes(clean) && !fs.existsSync(path.join(outRoot, clean))) {
        errors.push(`Broken internal link on /${route}: ${href}`);
      }
    }
  }
  const outputText = filesUnder(outRoot)
    .filter((file) => /\.(html|xml|txt)$/.test(file))
    .map((file) => fs.readFileSync(file, "utf8"))
    .join("\n");
  if (!outputText.includes(domain)) errors.push("Static export does not contain the production domain.");
  const robots = fs.readFileSync(path.join(outRoot, "robots.txt"), "utf8");
  if (!robots.includes(`${domain}/sitemap.xml`)) errors.push("robots.txt has the wrong sitemap URL.");
  const sitemap = fs.readFileSync(path.join(outRoot, "sitemap.xml"), "utf8");
  if (expectedRoutes.some((route) => !sitemap.includes(route ? `${domain}/${route}/` : `<loc>${domain}</loc>`))) {
    errors.push("sitemap.xml is missing one or more public pages.");
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Site check passed: ${expectedRoutes.length} public pages, production URLs, local imagery, and review file are present.`);
