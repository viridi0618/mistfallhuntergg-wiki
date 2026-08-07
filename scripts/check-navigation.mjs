import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { navigationByLocale, navItems } from "../src/data/navigation.ts";
import { isNavigationGroupActive, isNavigationPathCurrent } from "../src/lib/navigation.ts";

const root = process.cwd();
const outRoot = path.join(root, "out");
const componentSource = fs.readFileSync(path.join(root, "src", "components", "SiteNavigation.tsx"), "utf8");
const globalStyles = fs.readFileSync(path.join(root, "src", "app", "globals.css"), "utf8");
const pickerLauncherSource = fs.readFileSync(path.join(root, "src", "components", "ClassPickerLauncher.tsx"), "utf8");
const pagesSource = fs.readFileSync(path.join(root, "src", "data", "pages.ts"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

function groupHrefs(group) {
  return new Set([group.href, ...navItems(group).map((item) => item.href), ...(group.footerLink ? [group.footerLink.href] : [])]);
}

function routeFile(href) {
  const clean = href.replace(/^\/+|\/+$/g, "");
  return clean ? path.join(outRoot, clean, "index.html") : path.join(outRoot, "index.html");
}

function headerHtml(href) {
  const html = fs.readFileSync(routeFile(href), "utf8");
  return html.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? "";
}

assert.deepEqual(navigationByLocale.en.map((group) => group.label), [
  "Guides", "Classes", "Builds", "Gameplay", "Settings & Fixes", "Rewards", "Updates",
]);
assert.equal(navigationByLocale.en.some((group) => group.label === "Multiplayer"), false, "Multiplayer must not remain a top-level English item");

const required = {
  classes: ["/classes/", "/class-picker/", "/classes/mercenary/", "/classes/sorcerer/", "/classes/blackarrow/", "/classes/shadowstrix/", "/classes/seer/", "/classes/withered-knight/"],
  builds: ["/builds/", "/builds/mercenary/", "/builds/sorcerer/", "/builds/blackarrow/", "/builds/shadowstrix/", "/builds/seer/", "/builds/withered-knight/"],
  rewards: ["/rewards/", "/codes/", "/skins/", "/battle-pass/", "/launch-rewards/", "/twitch-drops/"],
  gameplay: ["/gameplay/", "/weapons/"],
};

for (const [id, hrefs] of Object.entries(required)) {
  const group = navigationByLocale.en.find((candidate) => candidate.id === id);
  assert.ok(group, `Missing English ${id} navigation group`);
  const actual = groupHrefs(group);
  for (const href of hrefs) assert.ok(actual.has(href), `Missing ${href} from ${id} navigation`);
}

for (const [locale, groups] of Object.entries(navigationByLocale)) {
  const ids = groups.map((group) => group.id);
  assert.equal(new Set(ids).size, ids.length, `Duplicate ${locale} navigation group ID`);
  for (const group of groups) {
    for (const href of groupHrefs(group)) {
      assert.notEqual(href, "#", `${locale} navigation contains href="#"`);
      assert.ok(href.startsWith("/") && href.endsWith("/"), `Navigation URL must use the existing trailing-slash rule: ${href}`);
      assert.ok(fs.existsSync(routeFile(href)), `Navigation target does not exist: ${href}`);
      if (locale !== "en") assert.ok(href === `/${locale}/` || href.startsWith(`/${locale}/`), `${locale} navigation points outside its locale: ${href}`);
    }
  }
}

assert.equal(navigationByLocale.es.flatMap((group) => [...groupHrefs(group)]).some((href) => /^\/es\/builds\/[^/]+\/$/.test(href)), false, "Spanish navigation must not invent localized class build URLs");
assert.equal(navigationByLocale.de.flatMap((group) => [...groupHrefs(group)]).some((href) => href.startsWith("/de/classes/") || href.startsWith("/de/builds/")), false, "German navigation must not invent class or build URLs");

assert.equal(isNavigationGroupActive("/builds/sorcerer/", navigationByLocale.en.find((group) => group.id === "builds")), true);
assert.equal(isNavigationGroupActive("/classes/seer/", navigationByLocale.en.find((group) => group.id === "classes")), true);
assert.equal(isNavigationGroupActive("/codes/", navigationByLocale.en.find((group) => group.id === "rewards")), true);
assert.equal(isNavigationGroupActive("/weapons/", navigationByLocale.en.find((group) => group.id === "gameplay")), true);
assert.equal(isNavigationGroupActive("/patch-notes/", navigationByLocale.en.find((group) => group.id === "updates")), true);
assert.equal(isNavigationPathCurrent("/builds/mercenary", "/builds/mercenary/"), true);

const esRequired = {
  gameplay: ["/es/armas/"],
  recompensas: ["/es/recompensas/", "/es/codigos/"],
};
for (const [id, hrefs] of Object.entries(esRequired)) {
  const group = navigationByLocale.es.find((candidate) => candidate.id === id);
  assert.ok(group, `Missing Spanish ${id} navigation group`);
  const actual = groupHrefs(group);
  for (const href of hrefs) assert.ok(actual.has(href), `Missing ${href} from Spanish ${id} navigation`);
}
assert.equal(isNavigationGroupActive("/es/armas/", navigationByLocale.es.find((group) => group.id === "gameplay")), true);
assert.equal(isNavigationGroupActive("/es/recompensas/", navigationByLocale.es.find((group) => group.id === "recompensas")), true);
assert.equal(isNavigationGroupActive("/es/codigos/", navigationByLocale.es.find((group) => group.id === "recompensas")), true);

assert.ok(componentSource.includes("groups.map"), "Desktop and mobile navigation must render from the shared groups prop");
assert.ok(!pagesSource.includes("primaryNav"), "Legacy duplicate primary navigation data must be removed");
assert.ok(componentSource.includes('aria-expanded={desktopOpen === group.id}') && componentSource.includes('aria-controls={panelId}'), "Desktop disclosures need aria-expanded and aria-controls");
assert.ok(componentSource.includes('aria-expanded={mobileGroup === group.id}') && componentSource.includes('aria-controls={panelId}'), "Mobile disclosures need aria-expanded and aria-controls");
assert.ok(!componentSource.includes('role="menu"'), "Disclosure navigation must not use role=menu");
for (const eventName of ["nav_menu_open", "nav_menu_close", "nav_item_click"]) assert.ok(componentSource.includes(eventName), `Missing navigation analytics event: ${eventName}`);
for (const parameter of ["locale", "source_path", "menu_id", "item_label", "destination_path", "device_type"]) assert.ok(componentSource.includes(parameter), `Missing navigation analytics parameter: ${parameter}`);
assert.ok(componentSource.includes('window.addEventListener("class-picker:open"'), "Navigation must close when the Class Picker opens");
assert.ok(componentSource.includes('window.matchMedia("(max-width: 820px)")'), "Navigation must observe the desktop/mobile breakpoint");
assert.ok(componentSource.includes('media.addEventListener("change", handleBreakpointChange)') && componentSource.includes("closeAll(false)"), "Breakpoint changes must clear stale navigation state");
assert.ok(componentSource.includes('window.matchMedia("(hover: hover) and (pointer: fine)")'), "Desktop hover menus must only run for precise hover-capable pointers");
assert.ok(componentSource.includes("onPointerEnter={() => openDesktopFromHover(group.id)}") && componentSource.includes("onPointerLeave={() => closeDesktopFromHover(group.id)}"), "The complete desktop navigation group must own pointer enter and leave behavior");
assert.ok(componentSource.includes("hoverOpenTimerRef") && componentSource.includes("hoverCloseTimerRef"), "Desktop hover intent requires separate opening and closing timers");
assert.ok(componentSource.includes("}, 80)") && componentSource.includes("}, 220)"), "Desktop hover intent must use short open and forgiving close delays");
assert.ok(componentSource.includes("return () => {") && componentSource.includes("clearHoverTimers();"), "Hover timers must be cleared during effect cleanup");
assert.ok(/clearHoverTimers\(\);\s+closeDesktop/.test(componentSource) && componentSource.includes("closeAll(false)"), "Clicks, route changes, Class Picker events, and breakpoint changes must clear hover state");
assert.ok(componentSource.includes('<Link className="nav-top-link" href={group.href}') && componentSource.includes("openDesktop(group.id)"), "Hover support must preserve normal Hub links and disclosure-button clicks");
for (const key of ["ArrowDown", "ArrowUp", "Home", "End", "Escape"]) assert.ok(componentSource.includes(key), `Hover support must preserve the ${key} keyboard behavior`);
assert.ok(componentSource.includes("group.footerLink?.label ?? `${labels.all} ${group.label}`"), "Mobile Hub links must prefer localized footer labels");
assert.ok(pickerLauncherSource.includes('window.addEventListener("site-navigation:open"') && pickerLauncherSource.includes('window.dispatchEvent(new CustomEvent("site-navigation:close"'), "Class Picker must coordinate with site navigation");
assert.ok(packageJson.scripts.verify.includes("check:navigation"), "npm run verify must include check:navigation");

const mobileMediaStart = globalStyles.indexOf("@media (max-width: 820px)");
const bodyLockStart = globalStyles.indexOf('body:has(.mobile-navigation-panel[data-open="true"])');
assert.ok(mobileMediaStart >= 0 && bodyLockStart > mobileMediaStart, "Mobile navigation body lock must be scoped to the mobile breakpoint");

const sitemap = fs.readFileSync(path.join(outRoot, "sitemap.xml"), "utf8");
assert.equal((sitemap.match(/<url>/g) ?? []).length, 80, "Sitemap public URL count changed");

for (const href of ["/", "/codes/", "/classes/", "/classes/mercenary/", "/builds/", "/builds/mercenary/", "/rewards/"]) {
  const header = headerHtml(href);
  assert.ok(header, `Missing generated Header on ${href}`);
  assert.ok(!header.includes('href="#"'), `Generated Header contains href="#" on ${href}`);
  assert.ok(!header.includes('rel="nofollow"'), `Generated Header contains nofollow on ${href}`);
  assert.ok(!header.includes('target="_blank"'), `Generated Header opens an internal link in a new tab on ${href}`);
  const ids = [...header.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, `Generated Header contains duplicate IDs on ${href}`);
  const controlTargets = [...header.matchAll(/aria-controls="([^"]+)"/g)].map((match) => match[1]);
  for (const target of controlTargets) assert.ok(ids.includes(target), `aria-controls target #${target} is missing on ${href}`);
}

const englishHeader = headerHtml("/");
for (const href of [
  "/class-picker/", "/codes/", "/skins/", "/battle-pass/",
  ...required.classes.filter((href) => href !== "/classes/" && href !== "/class-picker/"),
  ...required.builds.filter((href) => href !== "/builds/"),
]) assert.ok(englishHeader.includes(`href="${href}"`), `English Header is missing ${href}`);

const buildHeader = headerHtml("/builds/sorcerer/");
assert.ok(buildHeader.includes('<div class="desktop-nav-group" data-active="true"><a class="nav-top-link" href="/builds/">'), "Build child pages must mark the Builds group active without marking the Hub link current");
assert.ok(buildHeader.includes('<a aria-current="page" href="/builds/sorcerer/">'), "The exact Build child link must use aria-current=page");

for (const href of ["/es/", "/de/"]) {
  const header = headerHtml(href);
  const locale = href.slice(1, 3);
  const links = [...header.matchAll(/href="(\/[^"]+)"/g)].map((match) => match[1]).filter((link) => !["/", "/es/", "/de/"].includes(link));
  for (const link of links) {
    if (link.startsWith("/_next/")) continue;
    assert.ok(link.startsWith(`/${locale}/`), `${locale.toUpperCase()} Header contains an unrelated route: ${link}`);
    assert.ok(fs.existsSync(routeFile(link)), `${locale.toUpperCase()} Header target does not exist: ${link}`);
  }
}

console.log("Navigation checks passed: shared locale data, precise-pointer hover intent, responsive state safety, valid disclosures, 80 public URLs, and no invented localized routes.");
