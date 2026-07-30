import { classGuidePages } from "./classes";
import { gameplayPages } from "./gameplay";
import { rewardUpdatePages } from "./rewards-updates";
import { settingsFixPages } from "./settings-fixes";
import { commercePolicyPages } from "./site-pages";

export const pages = [
  ...gameplayPages,
  ...classGuidePages,
  ...settingsFixPages,
  ...rewardUpdatePages,
  ...commercePolicyPages,
];

export const pageMap = new Map(pages.map((page) => [page.path, page]));

export function getPage(path: string) {
  return pageMap.get(path);
}

export const categoryLanding: Record<string, string> = {
  Guides: "beginner-guide",
  Classes: "classes",
  Builds: "builds",
  Gameplay: "gameplay",
  Multiplayer: "crossplay",
  "Settings & Fixes": "best-settings",
  Rewards: "launch-rewards",
  Updates: "known-issues",
  Site: "about",
};

export const primaryNav = [
  { label: "Guides", href: "/beginner-guide/" },
  { label: "Classes", href: "/classes/" },
  { label: "Builds", href: "/builds/" },
  { label: "Gameplay", href: "/gameplay/" },
  { label: "Multiplayer", href: "/crossplay/" },
  { label: "Settings & Fixes", href: "/best-settings/" },
  { label: "Rewards", href: "/launch-rewards/" },
  { label: "Updates", href: "/known-issues/" },
];
