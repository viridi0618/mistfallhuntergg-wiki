import { classGuidePages } from "./classes";
import { gameplayPages } from "./gameplay";
import { rewardUpdatePages } from "./rewards-updates";
import { settingsFixPages } from "./settings-fixes";
import { commercePolicyPages } from "./site-pages";
import { categoryPages } from "./category-pages";
import { enhancePage } from "./page-enhancements";

const basePages = [
  ...categoryPages,
  ...gameplayPages,
  ...classGuidePages,
  ...settingsFixPages,
  ...rewardUpdatePages,
  ...commercePolicyPages,
];

export const pages = basePages.map(enhancePage);

export const pageMap = new Map(pages.map((page) => [page.path, page]));

export function getPage(path: string) {
  return pageMap.get(path);
}

export const categoryLanding: Record<string, string> = {
  Guides: "guides",
  Classes: "classes",
  Builds: "builds",
  Gameplay: "gameplay",
  Multiplayer: "multiplayer",
  "Settings & Fixes": "settings-fixes",
  Rewards: "rewards",
  Updates: "updates",
  Site: "",
};

export const primaryNav = [
  { label: "Guides", href: "/guides/" },
  { label: "Classes", href: "/classes/" },
  { label: "Builds", href: "/builds/" },
  { label: "Gameplay", href: "/gameplay/" },
  { label: "Multiplayer", href: "/multiplayer/" },
  { label: "Settings & Fixes", href: "/settings-fixes/" },
  { label: "Rewards", href: "/rewards/" },
  { label: "Updates", href: "/updates/" },
];
