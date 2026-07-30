const fallbackUrl = "https://mistfallhuntergg.wiki";

export const siteConfig = {
  name: "Mistfall Hunter Guide",
  shortName: "MFH Guide",
  gameName: "Mistfall Hunter",
  description:
    "Independent guides, classes, builds, fixes, and gameplay help for Mistfall Hunter.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/+$/, ""),
  officialGameUrl: "https://mistfallhunter.com/",
  defaultSocialImage: "/og.png",
  heroImage: "/mistfall-hunter-gyldenmist.jpg",
  author: "Mistfall Hunter GG Editorial Team",
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}
