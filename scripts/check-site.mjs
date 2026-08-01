import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "src");
const outRoot = path.join(root, "out");
const expectedRoutes = [
  "",
  "guides", "multiplayer", "settings-fixes", "rewards", "updates",
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
  "es", "es/guia-principiantes", "es/como-extraer", "es/clases",
  "es/mejor-clase", "es/mejor-clase-solo", "es/tier-list-clases", "es/builds",
  "es/jugar-solo", "es/servidores", "es/bloqueo-regional", "es/codigos",
  "de", "de/einstellungen", "de/ruckler-beheben", "de/absturz-beheben",
  "de/server", "de/region-lock",
];
const domain = "https://mistfallhuntergg.wiki";
const siteRoutes = new Set(["about", "editorial-policy", "privacy-policy", "disclaimer", "contact"]);
const categoryRoutes = new Set(["guides", "multiplayer", "settings-fixes", "rewards", "updates", "classes", "builds", "gameplay"]);
const compactImageRoutes = new Set([
  "best-settings", "fov", "controller-guide", "fatal-error-fix", "stuttering-fix",
  "crashing-fix", "connection-fix", "servers", "region-lock", "crossplay",
  "known-issues", "patch-notes", "review", "solo-mode", "pve-only",
]);
const coreImageRoutes = new Set([
  "guides", "multiplayer", "settings-fixes", "rewards", "updates",
  "beginner-guide", "how-to-extract", "classes", "best-class", "best-solo-class",
  "class-tier-list", "builds", "gameplay", "solo-mode", "pve-only", "crossplay",
  "servers", "region-lock", "play-with-friends", "best-settings", "controller-guide",
  "fatal-error-fix", "stuttering-fix", "crashing-fix", "connection-fix",
  "known-issues", "patch-notes", "review",
]);
const classRoutes = new Set([
  "classes/mercenary", "classes/sorcerer", "classes/blackarrow",
  "classes/shadowstrix", "classes/seer", "classes/withered-knight",
]);

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
if (!fs.existsSync(path.join(root, "COMPETITOR_CONTENT_GAPS.md"))) errors.push("COMPETITOR_CONTENT_GAPS.md is missing.");
if (!fs.existsSync(path.join(root, "VIDEO_SELECTION.md"))) errors.push("VIDEO_SELECTION.md is missing.");
for (const icon of [
  "src/app/favicon.ico",
  "src/app/icon.png",
  "src/app/apple-icon.png",
  "public/favicon-16x16.png",
  "public/favicon-32x32.png",
  "public/android-chrome-192x192.png",
  "public/android-chrome-512x512.png",
  "public/site.webmanifest",
]) {
  if (!fs.existsSync(path.join(root, icon))) errors.push(`Missing icon or manifest: ${icon}`);
}

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
    else if (title.includes("Mistfall Hunter Guide | Mistfall Hunter Guide")) {
      errors.push(`Duplicated site name in title on /${route}: ${title}`);
    }
    else if (titles.has(title)) errors.push(`Duplicate title on /${route}: ${title}`);
    else titles.add(title);
    if (!description) errors.push(`Missing meta description on /${route}.`);
    else if (descriptions.has(description)) errors.push(`Duplicate description on /${route}.`);
    else descriptions.add(description);
    if (!html.includes(`rel="canonical" href="${domain}`)) errors.push(`Invalid canonical on /${route}.`);
    const imageSources = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]);
    const imageTags = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
    for (const imageTag of imageTags) {
      const alt = imageTag.match(/\balt="([^"]*)"/)?.[1]?.trim();
      if (!alt) errors.push(`Image with empty or missing alt text on /${route}.`);
    }
    for (const imageSource of imageSources) {
      if (imageSource.startsWith("/")) {
        const imagePath = imageSource.split("?")[0];
        if (!fs.existsSync(path.join(outRoot, imagePath))) {
          errors.push(`Broken local image on /${route}: ${imagePath}`);
        }
      }
    }

    const localLinks = [...html.matchAll(/href="(\/[^"#?]*)"/g)]
      .map((match) => match[1])
      .filter((href) => !href.startsWith("/_next/"));
    for (const href of localLinks) {
      const clean = href.replace(/^\/|\/$/g, "");
      if (!expectedRoutes.includes(clean) && !fs.existsSync(path.join(outRoot, clean))) {
        errors.push(`Broken internal link on /${route}: ${href}`);
      }
    }

    if (route && !siteRoutes.has(route)) {
      if (!html.includes('class="page-hero-media"')) errors.push(`Missing page hero on /${route}.`);
      const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
      if (!ogImage?.startsWith(`${domain}/images/`)) errors.push(`Missing page-level Open Graph image on /${route}.`);
    }

    const contentFigureCount = (html.match(/class="content-figure"/g) || []).length;
    if (compactImageRoutes.has(route) && contentFigureCount < 1) {
      errors.push(`Relevance-mapped page /${route} needs at least one content figure; found ${contentFigureCount}.`);
    } else if (coreImageRoutes.has(route) && !compactImageRoutes.has(route) && contentFigureCount < 3) {
      errors.push(`Core page /${route} needs at least three content figures; found ${contentFigureCount}.`);
    }
    if (classRoutes.has(route) && contentFigureCount < 2) {
      errors.push(`Class page /${route} needs at least two content figures; found ${contentFigureCount}.`);
    }
    const figures = [...html.matchAll(/<figure\b[\s\S]*?<\/figure>/g)].map((match) => match[0]);
    for (const figure of figures) {
      const caption = figure.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/)?.[1]
        ?.replace(/<[^>]+>/g, "")
        .trim();
      if (!caption) errors.push(`A figure on /${route} is missing a non-empty caption.`);
    }

    const h2Ids = [...html.matchAll(/<h2\b[^>]*\bid="([^"]+)"[^>]*>/g)].map((match) => match[1]);
    const duplicateH2Ids = h2Ids.filter((id, index) => h2Ids.indexOf(id) !== index);
    if (duplicateH2Ids.length) {
      errors.push(`Duplicate H2 ID on /${route}: ${[...new Set(duplicateH2Ids)].join(", ")}.`);
    }
    const tocHtml = html.match(/<details\b[^>]*class="on-this-page"[^>]*>[\s\S]*?<\/details>/)?.[0];
    if (route && h2Ids.length >= 3 && !tocHtml) {
      errors.push(`Page /${route} has ${h2Ids.length} content H2 headings but no table of contents.`);
    }
    if (tocHtml) {
      const tocTargets = [...tocHtml.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
      const duplicateTargets = tocTargets.filter((target, index) => tocTargets.indexOf(target) !== index);
      if (duplicateTargets.length) {
        errors.push(`Duplicate TOC target on /${route}: ${[...new Set(duplicateTargets)].join(", ")}.`);
      }
      for (const target of tocTargets) {
        if (!h2Ids.includes(target)) errors.push(`Missing TOC target on /${route}: #${target}.`);
      }
    }

    const breadcrumbHtml = html.match(/<nav class="breadcrumbs"[\s\S]*?<\/nav>/)?.[0];
    if (route && !breadcrumbHtml) {
      errors.push(`Missing visible breadcrumb on /${route}.`);
    } else if (breadcrumbHtml) {
      const breadcrumbLinks = [...breadcrumbHtml.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
      if (new Set(breadcrumbLinks).size !== breadcrumbLinks.length) {
        errors.push(`Duplicate breadcrumb URL on /${route}.`);
      }
      const currentPath = route ? `/${route}/` : "/";
      if (breadcrumbLinks.includes(currentPath)) {
        errors.push(`Breadcrumb current page is also linked on /${route}.`);
      }
      if (categoryRoutes.has(route)) {
        const breadcrumbLabels = [...breadcrumbHtml.matchAll(/<(?:a|span)[^>]*>([^<>]+)<\/(?:a|span)>/g)]
          .map((match) => match[1].trim())
          .filter((label) => label && label !== "/");
        const repeatedLabels = breadcrumbLabels.filter((label, index) => breadcrumbLabels.indexOf(label) !== index);
        if (repeatedLabels.length) errors.push(`Category breadcrumb repeats a label on /${route}.`);
      }
    }

    if (route) {
      const ogType = html.match(/<meta property="og:type" content="([^"]+)"/)?.[1];
      if (categoryRoutes.has(route) && ogType === "article") {
        errors.push(`Category /${route} must not use article Open Graph type.`);
      }
      const jsonLdText = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
      const jsonLd = jsonLdText ? JSON.parse(jsonLdText) : [];
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      const pageSchema = schemas.find((schema) =>
        ["WebSite", "Article", "CollectionPage", "WebPage", "AboutPage", "ContactPage"].includes(schema?.["@type"])
      );
      if (!pageSchema) {
        errors.push(`Missing page schema on /${route}.`);
      } else if (pageSchema["@type"] === "Article") {
        if (!pageSchema.datePublished || !pageSchema.dateModified) {
          errors.push(`Article schema on /${route} needs datePublished and dateModified.`);
        }
      } else if ("datePublished" in pageSchema || "dateModified" in pageSchema) {
        errors.push(`Non-article schema on /${route} must not include Article time fields.`);
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
  const homeHtml = fs.readFileSync(path.join(outRoot, "index.html"), "utf8");
  if ((homeHtml.match(/<article class="video-card/g) || []).length !== 3) errors.push("Home must render exactly three featured video cards.");
  if (homeHtml.includes("<iframe")) errors.push("Home must not render YouTube iframes before a click.");
  if (!homeHtml.includes("See Mistfall Hunter in Action")) errors.push("Featured video section is missing.");
  if (!sourceText.includes("youtube-nocookie.com/embed/")) errors.push("Privacy-enhanced YouTube embed URLs are missing.");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Site check passed: ${expectedRoutes.length} public pages, production URLs, local imagery, and review file are present.`);
