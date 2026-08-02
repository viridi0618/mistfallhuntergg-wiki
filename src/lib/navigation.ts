import type { NavGroup } from "@/data/navigation";

export function normalizeNavigationPath(pathname: string) {
  if (pathname === "/") return pathname;
  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
}

export function isNavigationPathCurrent(pathname: string, href: string) {
  return normalizeNavigationPath(pathname) === normalizeNavigationPath(href);
}

function matchesPattern(pathname: string, pattern: string) {
  const normalizedPath = normalizeNavigationPath(pathname);
  if (pattern.endsWith("/*")) {
    return normalizedPath.startsWith(normalizeNavigationPath(pattern.slice(0, -2)));
  }
  return normalizedPath === normalizeNavigationPath(pattern);
}

export function isNavigationGroupActive(pathname: string, group: NavGroup) {
  const patterns = group.activePaths ?? [group.href];
  return patterns.some((pattern) => matchesPattern(pathname, pattern));
}
