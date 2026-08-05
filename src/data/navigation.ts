import { classProfiles } from "./class-profiles.ts";

export type NavigationLocale = "en" | "es" | "de";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  emphasis?: "tool";
};

export type NavSection = {
  label?: string;
  items: NavItem[];
};

export type NavGroup = {
  id: string;
  label: string;
  href: string;
  panelLabel?: string;
  items?: NavItem[];
  sections?: NavSection[];
  footerLink?: NavItem;
  layout?: "single" | "two-column" | "grouped";
  align?: "left" | "right";
  activePaths?: string[];
};

const classItems: NavItem[] = classProfiles.map((profile) => ({
  label: profile.name,
  href: profile.classPath,
}));

const buildItems: NavItem[] = classProfiles.map((profile) => ({
  label: `${profile.name} Build`,
  href: profile.buildPath,
}));

export const englishNavigation: NavGroup[] = [
  {
    id: "guides",
    label: "Guides",
    href: "/guides/",
    panelLabel: "Start Here",
    items: [
      { label: "Beginner Guide", href: "/beginner-guide/", description: "Prepare for your first runs" },
      { label: "How to Extract", href: "/how-to-extract/", description: "Learn the return process" },
      { label: "Class Picker", href: "/class-picker/", description: "Match a class to your playstyle" },
      { label: "Best Class", href: "/best-class/", description: "Compare roles without a fixed ranking" },
      { label: "Best Solo Class", href: "/best-solo-class/", description: "Choose for independent runs" },
    ],
    footerLink: { label: "View all guides", href: "/guides/" },
    activePaths: ["/guides/", "/beginner-guide/", "/how-to-extract/", "/character-creation/", "/best-class/", "/best-solo-class/", "/class-tier-list/"],
  },
  {
    id: "classes",
    label: "Classes",
    href: "/classes/",
    panelLabel: "Choose a Class",
    items: [
      { label: "Try Class Picker", href: "/class-picker/", description: "Not sure which class fits?", emphasis: "tool" },
      ...classItems,
    ],
    footerLink: { label: "View all classes", href: "/classes/" },
    layout: "two-column",
    activePaths: ["/classes/*", "/class-picker/"],
  },
  {
    id: "builds",
    label: "Builds",
    href: "/builds/",
    panelLabel: "Builds by Class",
    items: buildItems,
    footerLink: { label: "View all builds", href: "/builds/" },
    layout: "two-column",
    activePaths: ["/builds/*"],
  },
  {
    id: "gameplay",
    label: "Gameplay",
    href: "/gameplay/",
    panelLabel: "Core Gameplay",
    sections: [
      {
        label: "Modes",
        items: [
          { label: "Gameplay Overview", href: "/gameplay/" },
          { label: "Solo Mode", href: "/solo-mode/" },
          { label: "PvE Only", href: "/pve-only/" },
          { label: "Multiplayer", href: "/multiplayer/" },
        ],
      },
      {
        label: "Online Play",
        items: [
          { label: "Crossplay", href: "/crossplay/" },
          { label: "Servers", href: "/servers/" },
          { label: "Play With Friends", href: "/play-with-friends/" },
        ],
      },
    ],
    footerLink: { label: "View gameplay guides", href: "/gameplay/" },
    layout: "grouped",
    activePaths: ["/gameplay/", "/solo-mode/", "/pve-only/", "/multiplayer/", "/crossplay/", "/servers/", "/region-lock/", "/play-with-friends/"],
  },
  {
    id: "settings-fixes",
    label: "Settings & Fixes",
    href: "/settings-fixes/",
    sections: [
      {
        label: "Settings",
        items: [
          { label: "Best Settings", href: "/best-settings/" },
          { label: "Controller Guide", href: "/controller-guide/" },
          { label: "FOV", href: "/fov/" },
        ],
      },
      {
        label: "Fixes",
        items: [
          { label: "Crashing Fix", href: "/crashing-fix/" },
          { label: "Stuttering Fix", href: "/stuttering-fix/" },
          { label: "Fatal Error Fix", href: "/fatal-error-fix/" },
          { label: "Connection Fix", href: "/connection-fix/" },
        ],
      },
    ],
    footerLink: { label: "View all fixes", href: "/settings-fixes/" },
    layout: "grouped",
    align: "right",
    activePaths: ["/settings-fixes/", "/best-settings/", "/controller-guide/", "/fov/", "/crashing-fix/", "/stuttering-fix/", "/fatal-error-fix/", "/connection-fix/", "/system-requirements/"],
  },
  {
    id: "rewards",
    label: "Rewards",
    href: "/rewards/",
    panelLabel: "Rewards & Cosmetics",
    items: [
      { label: "Codes", href: "/codes/" },
      { label: "Skins & Cosmetics", href: "/skins/" },
      { label: "Battle Pass", href: "/battle-pass/" },
      { label: "Launch Rewards", href: "/launch-rewards/" },
      { label: "Twitch Drops", href: "/twitch-drops/" },
    ],
    footerLink: { label: "View all rewards", href: "/rewards/" },
    align: "right",
    activePaths: ["/rewards/", "/codes/", "/skins/", "/battle-pass/", "/launch-rewards/", "/twitch-drops/"],
  },
  {
    id: "updates",
    label: "Updates",
    href: "/updates/",
    activePaths: ["/updates/", "/patch-notes/", "/known-issues/"],
  },
];

export const spanishNavigation: NavGroup[] = [
  {
    id: "guides",
    label: "Guías",
    href: "/es/",
    panelLabel: "Empieza aquí",
    items: [
      { label: "Guía para principiantes", href: "/es/guia-principiantes/" },
      { label: "Cómo extraer", href: "/es/como-extraer/" },
    ],
    footerLink: { label: "Ver todas las guías", href: "/es/" },
    activePaths: ["/es/", "/es/guia-principiantes/", "/es/como-extraer/"],
  },
  {
    id: "classes",
    label: "Clases",
    href: "/es/clases/",
    panelLabel: "Elegir una clase",
    items: [
      { label: "Mejor clase", href: "/es/mejor-clase/" },
      { label: "Mejor clase en solitario", href: "/es/mejor-clase-solo/" },
      { label: "Tier list de clases", href: "/es/tier-list-clases/" },
    ],
    footerLink: { label: "Ver todas las clases", href: "/es/clases/" },
    activePaths: ["/es/clases/", "/es/mejor-clase/", "/es/mejor-clase-solo/", "/es/tier-list-clases/"],
  },
  { id: "builds", label: "Builds", href: "/es/builds/", activePaths: ["/es/builds/"] },
  {
    id: "gameplay",
    label: "Jugabilidad",
    href: "/es/jugar-solo/",
    panelLabel: "Juego y conexión",
    items: [
      { label: "Juego en solitario", href: "/es/jugar-solo/" },
      { label: "Armas", href: "/es/armas/" },
      { label: "Servidores", href: "/es/servidores/" },
      { label: "Bloqueo regional", href: "/es/bloqueo-regional/" },
    ],
    footerLink: { label: "Ver juego en solitario", href: "/es/jugar-solo/" },
    activePaths: ["/es/jugar-solo/", "/es/armas/", "/es/servidores/", "/es/bloqueo-regional/"],
  },
  {
    id: "recompensas",
    label: "Recompensas",
    href: "/es/recompensas/",
    panelLabel: "Códigos y recompensas",
    items: [
      { label: "Recompensas", href: "/es/recompensas/" },
      { label: "Códigos", href: "/es/codigos/" },
    ],
    footerLink: { label: "Ver recompensas", href: "/es/recompensas/" },
    activePaths: ["/es/recompensas/", "/es/codigos/"],
  },
];

export const germanNavigation: NavGroup[] = [
  {
    id: "settings",
    label: "Einstellungen",
    href: "/de/einstellungen/",
    panelLabel: "Einstellungen & Fehlerbehebung",
    items: [
      { label: "Einstellungen", href: "/de/einstellungen/" },
      { label: "Ruckler beheben", href: "/de/ruckler-beheben/" },
      { label: "Abstürze beheben", href: "/de/absturz-beheben/" },
    ],
    footerLink: { label: "Alle Einstellungen", href: "/de/einstellungen/" },
    activePaths: ["/de/einstellungen/", "/de/ruckler-beheben/", "/de/absturz-beheben/"],
  },
  {
    id: "online",
    label: "Online",
    href: "/de/server/",
    panelLabel: "Online spielen",
    items: [
      { label: "Server", href: "/de/server/" },
      { label: "Region Lock", href: "/de/region-lock/" },
    ],
    footerLink: { label: "Server-Leitfaden", href: "/de/server/" },
    activePaths: ["/de/server/", "/de/region-lock/"],
  },
];

export const navigationByLocale: Record<NavigationLocale, NavGroup[]> = {
  en: englishNavigation,
  es: spanishNavigation,
  de: germanNavigation,
};

export function navItems(group: NavGroup) {
  return group.items ?? group.sections?.flatMap((section) => section.items) ?? [];
}
