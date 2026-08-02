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
  "builds", "builds/mercenary", "builds/sorcerer", "builds/blackarrow",
  "builds/shadowstrix", "builds/seer", "builds/withered-knight",
  "class-picker", "game-pass", "battle-pass",
  "solo-mode", "pve-only", "gameplay", "crossplay", "servers",
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
const buildRoutes = new Set([
  "builds/mercenary", "builds/sorcerer", "builds/blackarrow",
  "builds/shadowstrix", "builds/seer", "builds/withered-knight",
]);
const excludedOutlineIds = new Set([
  "guide-path-title", "build-class-grid-title", "page-faq", "page-related", "page-sources",
]);

function classBlock(html, tag, className) {
  return html.match(new RegExp(`<${tag}\\b[^>]*class="[^"]*\\b${className}\\b[^"]*"[^>]*>[\\s\\S]*?<\\/${tag}>`))?.[0] ?? "";
}

function inspectArticleOutline(html, route, errors) {
  const article = html.match(/<article\b[^>]*class="[^"]*\barticle\b[^"]*"[^>]*>[\s\S]*?<\/article>/)?.[0] ?? "";
  const headings = [...article.matchAll(/<(h[23])\b([^>]*)>/g)].map((match) => ({
    level: Number(match[1].slice(1)),
    id: match[2].match(/\bid="([^"]+)"/)?.[1] ?? "",
  })).filter((heading) => heading.level === 2 || heading.id);
  const subsectionCount = (article.match(/class="article-subsection"/g) ?? []).length;
  const outlinedH3Count = headings.filter((heading) => heading.level === 3).length;
  if (subsectionCount !== outlinedH3Count) errors.push(`Page /${route} has an article subsection without an identified H3.`);
  for (const heading of headings) if (!heading.id) errors.push(`Page /${route} has an H${heading.level} without an ID.`);
  const ids = headings.map((heading) => heading.id).filter(Boolean);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) errors.push(`Duplicate H2/H3 ID on /${route}: ${[...new Set(duplicates)].join(", ")}.`);

  let parentH2 = "";
  for (const heading of headings) {
    if (heading.level === 2) parentH2 = excludedOutlineIds.has(heading.id) ? "" : heading.id;
    if (heading.level === 3 && !parentH2) errors.push(`H3 #${heading.id} on /${route} does not belong to a content H2.`);
  }

  const outlineHeadings = headings.filter((heading) => !excludedOutlineIds.has(heading.id));
  const outlineIds = outlineHeadings.map((heading) => heading.id);
  const h2Count = outlineHeadings.filter((heading) => heading.level === 2).length;
  const h3Count = outlineHeadings.filter((heading) => heading.level === 3).length;
  const shouldShow = h2Count >= 3 || h3Count > 0;
  const mobileToc = classBlock(html, "details", "on-this-page");
  const desktopToc = classBlock(html, "nav", "wiki-outline");
  if (shouldShow && (!mobileToc || !desktopToc)) errors.push(`Page /${route} is missing its mobile or desktop article outline.`);
  if (!shouldShow && (mobileToc || desktopToc)) errors.push(`Short page /${route} unexpectedly renders an article outline.`);

  for (const [kind, toc] of [["mobile", mobileToc], ["desktop", desktopToc]]) {
    if (!toc) continue;
    if (/<h1\b|<h4\b/i.test(toc)) errors.push(`${kind} TOC on /${route} contains a forbidden H1 or H4.`);
    const targets = [...toc.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
    const duplicateTargets = targets.filter((target, index) => targets.indexOf(target) !== index);
    if (duplicateTargets.length) errors.push(`Duplicate ${kind} TOC target on /${route}: ${[...new Set(duplicateTargets)].join(", ")}.`);
    for (const target of targets) {
      if (!ids.includes(target)) errors.push(`Missing ${kind} TOC target on /${route}: #${target}.`);
      if (excludedOutlineIds.has(target)) errors.push(`${kind} TOC on /${route} incorrectly includes #${target}.`);
    }
    if (targets.join("|") !== outlineIds.join("|")) errors.push(`${kind} TOC on /${route} does not match the H2/H3 article order.`);
  }
}

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
for (const eventName of [
  "class_picker_open", "class_picker_start", "class_picker_answer", "class_picker_complete",
  "class_picker_result", "class_picker_build_click", "class_picker_class_click",
  "class_picker_restart", "class_picker_close",
]) {
  if (!sourceText.includes(eventName)) errors.push(`Class Picker analytics event is missing: ${eventName}.`);
}
if (!sourceText.includes('dynamic(() => import("./ClassPickerDrawer"), { ssr: false })')) errors.push("Class Picker drawer is not lazy-loaded.");
if (!sourceText.includes('mistfall-class-picker-v1')) errors.push("Class Picker session progress key is missing.");
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
    if (buildRoutes.has(route)) {
      if (contentFigureCount < 2) errors.push(`Build page /${route} needs at least two content figures; found ${contentFigureCount}.`);
      if ((html.match(/class="article-video"/g) || []).length !== 1) errors.push(`Build page /${route} must render exactly one article video.`);
      if (html.includes("<iframe")) errors.push(`Build page /${route} must not render a YouTube iframe before a click.`);
      if (!html.includes("Watch on YouTube")) errors.push(`Build page /${route} is missing its external YouTube fallback link.`);
    }
    const figures = [...html.matchAll(/<figure\b[\s\S]*?<\/figure>/g)].map((match) => match[0]);
    for (const figure of figures) {
      const caption = figure.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/)?.[1]
        ?.replace(/<[^>]+>/g, "")
        .trim();
      if (!caption) errors.push(`A figure on /${route} is missing a non-empty caption.`);
    }

    inspectArticleOutline(html, route, errors);

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
    if (route === "class-picker") {
      if (!html.includes('class="class-picker-inline"')) errors.push("Standalone Class Picker is missing its inline tool.");
      if (html.includes('class="class-picker-launcher"')) errors.push("Standalone Class Picker must not duplicate the global launcher.");
      if (!html.includes('"@type":"WebPage"')) errors.push("Standalone Class Picker must use WebPage schema.");
      if (html.includes('"@type":"FAQPage"')) errors.push("Standalone Class Picker must not emit FAQ schema without visible FAQ content.");
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
  const esHomeHtml = fs.readFileSync(path.join(outRoot, "es", "index.html"), "utf8");
  const deHomeHtml = fs.readFileSync(path.join(outRoot, "de", "index.html"), "utf8");
  if (!homeHtml.includes("Open the Mistfall Hunter Class Picker")) errors.push("English global Class Picker launcher is missing.");
  if (!esHomeHtml.includes("Abrir el selector de clase de Mistfall Hunter")) errors.push("Spanish global Class Picker launcher is missing.");
  if (!deHomeHtml.includes("Mistfall Hunter Klassenauswahl öffnen")) errors.push("German global Class Picker launcher is missing.");
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
