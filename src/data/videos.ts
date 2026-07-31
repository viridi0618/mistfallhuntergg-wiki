export type FeaturedVideo = {
  id: string;
  title: string;
  channel: string;
  duration: string;
  category: "Hands-on" | "Official Trailer" | "Gameplay Showcase" | "Class Guide";
  description: string;
  watchFor: string[];
  thumbnail: string;
  thumbnailAlt: string;
  youtubeUrl: string;
  relatedGuides: {
    label: string;
    href: string;
  }[];
};

export const featuredVideos: FeaturedVideo[] = [
  {
    id: "pbZacRF8CfU",
    title: "Mistfall Hunter Gameplay and Impressions...",
    channel: "jackfrags",
    duration: "34:49",
    category: "Hands-on",
    description:
      "This extended launch-period session provides the clearest long-form view of a real hunt. It shows the pace between exploration and combat, how PvE pressure consumes resources, what rival-player risk does to routing, and why loot decisions matter before extraction. Watch it as practical context rather than a source for permanent balance rankings.",
    watchFor: [
      "How the player moves between PvE encounters and uncertain sightlines",
      "When loot value starts changing the risk of the run",
      "How class range and available resources shape each engagement",
      "The moments when continuing becomes less valuable than leaving",
    ],
    thumbnail: "/images/videos/mistfall-hunter-gameplay-impressions.webp",
    thumbnailAlt: "Gameplay scene from jackfrags' Mistfall Hunter impressions video",
    youtubeUrl: "https://www.youtube.com/watch?v=pbZacRF8CfU",
    relatedGuides: [
      { label: "Beginner Guide", href: "/beginner-guide/" },
      { label: "Gameplay", href: "/gameplay/" },
      { label: "How to Extract", href: "/how-to-extract/" },
    ],
  },
  {
    id: "NpN_GUZXu3g",
    title: "Mistfall Hunter - Official Launch Gameplay Trailer",
    channel: "XBOX",
    duration: "2:27",
    category: "Official Trailer",
    description:
      "Xbox's official launch gameplay trailer is the fastest introduction to the release version. It presents the dark-fantasy world, the mixture of monsters and rival Gyldhunters, multiple class styles, squad combat, and the high-risk return loop without requiring a long viewing session. Use it to understand the game's overall promise before choosing a detailed guide.",
    watchFor: [
      "The difference between melee, ranged, and magical class pressure",
      "How squad abilities overlap during larger fights",
      "The visual language used for loot, danger, and extraction",
    ],
    thumbnail: "/images/videos/mistfall-hunter-launch-gameplay-trailer.webp",
    thumbnailAlt: "Official Xbox launch gameplay trailer thumbnail for Mistfall Hunter",
    youtubeUrl: "https://www.youtube.com/watch?v=NpN_GUZXu3g",
    relatedGuides: [
      { label: "All Classes", href: "/classes/" },
      { label: "Platforms", href: "/platforms/" },
      { label: "Beginner Guide", href: "/beginner-guide/" },
    ],
  },
  {
    id: "wOn15Cr8INE",
    title: "Mistfall Hunter - Official Gameplay Showcase",
    channel: "Mistfall Hunter",
    duration: "4:51",
    category: "Gameplay Showcase",
    description:
      "The official gameplay showcase gives a more focused look at weapon switching, class abilities, close-range reactions, ranged pressure, monsters, and coordinated fights. It is useful when you already understand the premise but want to see how different combat roles look in motion before opening the class comparison or committing to a build direction.",
    watchFor: [
      "How weapon stance changes alter reach and commitment",
      "The contrast between frontline, ranged, mobility, and support roles",
      "How abilities create openings for allied follow-up",
    ],
    thumbnail: "/images/videos/mistfall-hunter-gameplay-showcase.webp",
    thumbnailAlt: "Official Mistfall Hunter gameplay showcase thumbnail",
    youtubeUrl: "https://www.youtube.com/watch?v=wOn15Cr8INE",
    relatedGuides: [
      { label: "Classes", href: "/classes/" },
      { label: "Builds", href: "/builds/" },
      { label: "Best Class", href: "/best-class/" },
    ],
  },
];
