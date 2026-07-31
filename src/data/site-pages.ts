import type { GuidePageData } from "@/lib/types";
import { GAMESRADAR, PCGAMER, STEAM, STEAM_NEWS, XBOX } from "./sources";

const checked = "2026-07-31";
const common = {
  updated: checked,
  published: "2026-07-31",
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
};

const price: GuidePageData = {
  path: "price",
  category: "Guides",
  eyebrow: "Purchase guide",
  keyword: "mistfall hunter price",
  title: "Mistfall Hunter Price, Editions & Discount",
  description: "Mistfall Hunter price explained: official Standard and Deluxe US pricing, upgrade cost, launch discount window, regional pricing, and edition contents.",
  h1: "Mistfall Hunter Price",
  answer: "The official US launch prices are $24.99 for Standard, $39.99 for Deluxe, and $15 for the Deluxe upgrade. A 10% introductory discount runs through August 12, 2026 at 17:00 UTC.",
  ...common,
  informationType: "Official price snapshot",
  sections: [
    {
      heading: "Official launch prices",
      table: {
        headers: ["Edition", "US list price", "Includes"],
        rows: [
          ["Standard", "$24.99", "Base game"],
          ["Deluxe", "$39.99", "Base game, cosmetic bundle, 2,500 Fate Coins"],
          ["Deluxe upgrade", "$15.00", "Upgrade from Standard"],
        ],
      },
      note: "Prices are the official US launch figures and can differ by region, currency, tax, platform, or later sale.",
    },
    {
      heading: "Launch discount",
      paragraphs: [
        "The official launch FAQ states that the 10% introductory discount runs from July 30, 2026 at 01:00 UTC to August 12, 2026 at 17:00 UTC.",
        "The discount window is temporary. Check the relevant storefront before purchase because regional time display, tax, and platform promotion handling can differ.",
      ],
    },
    {
      heading: "What is in the Deluxe Edition?",
      paragraphs: [
        "Steam lists the Forsaken Skeleton outfit, Shipwreck Coast background, Web of Fate earrings, Justice standing pose, Pip's Daily Life emotes, Dew avatar, Light Feather avatar frame, and 2,500 Fate Coins.",
        "Fate Coins are described as currency for cosmetic items. Xbox official copy also says the game has no paid stat boosts.",
      ],
    },
    {
      heading: "Regional pricing and purchase checks",
      bullets: [
        "Use your platform's official store and account region.",
        "Compare the actual local price, tax, and discount shown at checkout.",
        "Confirm platform, edition, and account before purchase.",
        "Avoid third-party accounts and suspiciously cheap keys.",
        "Read refund rules before launching or redeeming content.",
        "Remember that North American account registration affects server access.",
      ],
    },
  ],
  faqs: [
    { question: "How much is Mistfall Hunter?", answer: "$24.99 Standard or $39.99 Deluxe at US launch." },
    { question: "Can I upgrade later?", answer: "Yes. The official US upgrade price is $15." },
    { question: "When does the launch discount end?", answer: "August 12, 2026 at 17:00 UTC." },
  ],
  related: ["platforms", "system-requirements", "skins", "review"],
  sources: [STEAM_NEWS, STEAM, XBOX],
};

const platforms: GuidePageData = {
  path: "platforms",
  category: "Guides",
  eyebrow: "Availability",
  keyword: "mistfall hunter platforms",
  title: "Mistfall Hunter Platforms: PC, PS5 & Xbox",
  description: "Mistfall Hunter platforms confirmed for launch: Windows PC, PlayStation 5, and Xbox Series X|S, plus crossplay, Game Pass, controller, and console notes.",
  h1: "Mistfall Hunter Platforms",
  answer: "Mistfall Hunter is available on Windows PC, PlayStation 5, and Xbox Series X|S. Official launch information confirms cross-platform matchmaking.",
  ...common,
  informationType: "Official platform availability",
  sections: [
    {
      heading: "Supported Mistfall Hunter platforms",
      table: {
        headers: ["Platform", "Status", "Key official detail"],
        rows: [
          ["Windows PC / Steam", "Available", "Online PvP and co-op; Bellring Anti-Cheat"],
          ["Xbox Series X|S", "Available", "Optimized, Play Anywhere, cross-platform co-op and multiplayer"],
          ["Xbox PC", "Available", "Xbox Play Anywhere ecosystem"],
          ["PlayStation 5", "Available", "Simultaneous launch confirmed by Bellring Games"],
          ["PS4 / Xbox One / Nintendo Switch", "No confirmed launch version", "No official support found"],
        ],
      },
    },
    {
      heading: "Crossplay and online requirements",
      paragraphs: [
        "The official launch FAQ confirms cross-platform matchmaking. Xbox lists cross-platform co-op and multiplayer, online co-op for two to three, and broader online matches for two to fifteen players.",
        "Xbox console play requires an online multiplayer subscription. Other console and platform requirements should be checked on their official store pages.",
      ],
    },
    {
      heading: "Xbox capabilities",
      paragraphs: [
        "The official Xbox store lists Xbox Play Anywhere, 4K Ultra HD, HDR10, variable refresh rate, ray tracing, 60 fps+, spatial sound, achievements, and Series X|S optimization.",
        "Capability listings do not mean every visual mode runs every feature simultaneously. Display hardware and current game settings still matter.",
      ],
    },
    {
      heading: "PC and controller support",
      paragraphs: [
        "Steam lists Windows 10 64-bit, DirectX 12, 45 GB storage, broadband internet, and an SSD recommendation. The official launch FAQ confirms both PS5 and Xbox controller support.",
        "No macOS or Linux support is claimed. Steam's anti-cheat listing should be considered before assuming compatibility through an unsupported operating system.",
      ],
    },
  ],
  faqs: [
    { question: "Is Mistfall Hunter on PS5?", answer: "Yes." },
    { question: "Is Mistfall Hunter on Xbox?", answer: "Yes, on Xbox Series X|S and Xbox PC." },
    { question: "Is Mistfall Hunter on Switch?", answer: "No confirmed Switch version is available in the official sources reviewed here." },
  ],
  related: ["crossplay", "system-requirements", "price", "controller-guide"],
  sources: [STEAM, XBOX, STEAM_NEWS],
};

const review: GuidePageData = {
  path: "review",
  category: "Guides",
  eyebrow: "Review roundup",
  keyword: "mistfall hunter review",
  title: "Mistfall Hunter Review Roundup & Feedback",
  description: "A Mistfall Hunter review roundup based on public media impressions and launch player feedback, covering combat, extraction, solo play, performance, and fit.",
  h1: "Mistfall Hunter Review Roundup and Player Feedback",
  answer: "Early public feedback finds a compelling fantasy extraction concept and class combat, while launch reviews also raise performance, server, balance, and polish concerns. This is a sourced roundup, not our long-term hands-on review.",
  ...common,
  informationType: "Public review and player-feedback synthesis",
  sections: [
    {
      heading: "What Mistfall Hunter is trying to do",
      paragraphs: [
        "Mistfall Hunter replaces modern firearms with shields, heavy weapons, bows, stealth weapons, and magic inside a high-risk extraction loop. Media impressions highlighted its deliberate positioning, class tools, loot pressure, and the tension between fighting monsters and watching for players.",
        "The structure is more specific than a general action RPG: losing carried spoils, preparing a new kit, and deciding when to extract are central to the experience.",
      ],
    },
    {
      heading: "Commonly praised elements",
      bullets: [
        "Distinct dark-fantasy setting for the extraction genre.",
        "Six classes with meaningfully different weapons and combat roles.",
        "Tension created by PvE threats, rival players, and extraction timing.",
        "Build depth through skills, talents, equipment, and Affix Gems.",
        "Solo and three-player squad options.",
        "Strong first impression when positioning and class rhythm click.",
      ],
    },
    {
      heading: "Common concerns at launch",
      bullets: [
        "Stuttering, crashes, and performance consistency across hardware.",
        "Server routing, account regions, and launch connection quality.",
        "Crowd-control chains and live class balance.",
        "The high cost of losing gear while learning.",
        "No confirmed full PvE-only mode for players who dislike PvP.",
        "Rough edges in controller, inventory, and console interfaces addressed by early patches.",
      ],
      note: "These are recurring public themes and official issue areas, not claims that every player experiences every problem.",
    },
    {
      heading: "Launch player-review signal",
      paragraphs: [
        "Steam displayed a Mixed overall result with 67% of 1,716 counted user reviews positive when checked on July 31, 2026. This launch-week snapshot is volatile and should not be treated as a permanent score.",
        "The official team published known issues and an immediate update. Revisit recent reviews after major patches rather than relying only on the first 24 hours.",
      ],
    },
    {
      heading: "Who may enjoy it",
      table: {
        headers: ["Good fit", "Poor fit"],
        rows: [
          ["Players who want fantasy melee and magic in an extraction format", "Players seeking a private PvE campaign"],
          ["Groups that enjoy role coordination and loot risk", "Players who strongly dislike losing carried loot"],
          ["Solo players comfortable avoiding unfavorable fights", "Players expecting a traditional story-first RPG"],
          ["Players willing to follow live balance and patch updates", "Players needing launch-day technical polish on every device"],
        ],
      },
    },
  ],
  faqs: [
    { question: "Is this a personally tested review?", answer: "No. It is based on public media impressions, official information, and launch player-review trends." },
    { question: "Are Steam reviews positive?", answer: "Steam showed a Mixed result with 67% positive in the snapshot checked July 31, 2026." },
    { question: "Is it good for solo players?", answer: "Solo is supported, but it remains PvPvE and demands cautious routing and extraction decisions." },
  ],
  related: ["gameplay", "solo-mode", "known-issues", "price", "system-requirements"],
  sources: [STEAM, STEAM_NEWS, GAMESRADAR, PCGAMER],
};

const requirements: GuidePageData = {
  path: "system-requirements",
  category: "Settings & Fixes",
  eyebrow: "PC specifications",
  keyword: "mistfall hunter system requirements",
  title: "Mistfall Hunter System Requirements for PC",
  description: "Official Mistfall Hunter system requirements: minimum and recommended CPU, GPU, RAM, DirectX, Windows, storage, broadband, and SSD guidance.",
  h1: "Mistfall Hunter System Requirements",
  answer: "Mistfall Hunter requires Windows 10 64-bit, DirectX 12, broadband internet, and 45 GB free space. Minimum memory is 12 GB; recommended memory is 16 GB. An SSD is strongly recommended.",
  ...common,
  informationType: "Official PC requirements",
  sections: [
    {
      heading: "Minimum and recommended specifications",
      table: {
        headers: ["Component", "Minimum", "Recommended"],
        rows: [
          ["OS", "Windows 10 64-bit", "Windows 10 64-bit"],
          ["CPU", "Intel Core i7-4770 / AMD Ryzen 5 1400", "Intel Core i7-9700 / AMD Ryzen 5 3600"],
          ["Memory", "12 GB RAM", "16 GB RAM"],
          ["GPU", "NVIDIA GTX 1060 / AMD RX 580", "NVIDIA RTX 2070 / AMD RX 5700 XT"],
          ["DirectX", "Version 12", "Version 12"],
          ["Network", "Broadband internet", "Broadband internet"],
          ["Storage", "45 GB available", "45 GB available"],
          ["Drive", "SSD strongly recommended", "SSD strongly recommended"],
        ],
      },
    },
    {
      heading: "What minimum and recommended mean",
      paragraphs: [
        "Minimum requirements describe a supported baseline, not a guaranteed frame rate, resolution, or graphics preset. Recommended hardware gives more headroom but still does not promise identical performance in every combat scene.",
        "The official team says launch optimization included device presets, shader precompilation, asset loading, low-end PCs, consoles, and memory use. Real results still depend on drivers, thermals, storage, background processes, and display target.",
      ],
    },
    {
      heading: "Before buying on PC",
      bullets: [
        "Confirm Windows is 64-bit and DirectX 12 is supported.",
        "Check the exact GPU model, not just the brand name.",
        "Leave extra storage beyond the listed 45 GB for updates.",
        "Use an SSD where possible.",
        "Update through the GPU vendor and Windows official channels.",
        "Confirm broadband stability and the eligible server region.",
      ],
    },
    {
      heading: "Laptop and unsupported-platform caution",
      paragraphs: [
        "Laptop GPU names can perform differently from desktop parts. Compare the specific power-limited model and cooling rather than assuming the same number means the same result.",
        "Steam lists Bellring Anti-Cheat. No Linux, SteamOS, or macOS support is claimed by this page. Compatibility through unofficial layers should not be presented as supported.",
      ],
    },
  ],
  faqs: [
    { question: "How much RAM does Mistfall Hunter need?", answer: "12 GB minimum and 16 GB recommended." },
    { question: "How much storage is required?", answer: "45 GB available space, with extra room advisable for updates." },
    { question: "Is an SSD required?", answer: "The store says strongly recommended rather than strictly required." },
  ],
  related: ["best-settings", "stuttering-fix", "crashing-fix", "platforms", "price"],
  sources: [STEAM, STEAM_NEWS],
};

function policyPage(
  path: string,
  h1: string,
  title: string,
  description: string,
  answer: string,
  sections: GuidePageData["sections"],
): GuidePageData {
  return {
    path,
    category: "Site",
    eyebrow: "Site information",
    keyword: h1.toLowerCase(),
    title,
    description,
    h1,
    answer,
    ...common,
    platforms: "Website",
    version: "Policy version 1.0",
    informationType: "Site policy",
    sections,
    faqs: [],
    related: ["about", "editorial-policy", "privacy-policy", "disclaimer", "contact"].filter((item) => item !== path),
    sources: [],
  };
}

const about = policyPage(
  "about",
  "About Mistfall Hunter Guide",
  "About Mistfall Hunter Guide",
  "Learn what Mistfall Hunter Guide covers, who edits it, how it uses sources, and its independent fan-made relationship to Bellring Games.",
  "Mistfall Hunter Guide is an independent English-language fan resource for beginner help, classes, builds, gameplay, multiplayer, settings, fixes, rewards, and updates.",
  [
    {
      heading: "What this site covers",
      paragraphs: [
        "We organize practical answers around the questions players ask before purchase, during their first extractions, while choosing a class, and when a technical problem interrupts play.",
        "This is a broad guide site, not a full equipment, skill, quest, or drop-rate database. We prefer maintainable explanations and source-aware comparisons over unsupported numerical completeness.",
      ],
    },
    {
      heading: "How the site is produced",
      paragraphs: [
        "The Mistfall Hunter GG Editorial Team reviews official store pages, Bellring Games announcements, patch notes, and the official website first. Reliable media and clearly labeled community reports can supplement that foundation.",
        "Pages show a last-checked date, game version, platforms, information type, and sources. Build advice is editorial and is never represented as an official best setup.",
      ],
    },
    {
      heading: "Independent fan-site status",
      paragraphs: [
        "Mistfall Hunter Guide is an independent fan-made website and is not affiliated with Bellring Games or the official Mistfall Hunter team.",
        "Game names, images, and trademarks belong to their respective owners. Official screenshots are used for editorial reference and are not presented as original site artwork.",
      ],
    },
  ],
);

const editorial = policyPage(
  "editorial-policy",
  "Editorial Policy",
  "Editorial Policy | Mistfall Hunter Guide",
  "How Mistfall Hunter Guide verifies official facts, labels community information, handles builds, corrects errors, and updates version-sensitive content.",
  "We prioritize official sources, label uncertainty, avoid invented data, and update version-sensitive pages when credible new evidence changes an answer.",
  [
    {
      heading: "Source priority",
      paragraphs: [
        "Official Bellring Games pages, Steam announcements, patch notes, and platform stores are primary. Reliable media can support hands-on context. Community discussions help discover problems but do not establish a fact by themselves.",
        "When an official source and an older beta impression conflict, the current official launch source wins.",
      ],
    },
    {
      heading: "Handling community information",
      paragraphs: [
        "Community material is marked with language such as 'some players report' or 'this has not been officially confirmed.' We do not convert one player's claim into a universal conclusion.",
        "High-risk pages—codes, rewards, servers, region rules, modes, builds, fixes, issues, and patches—receive extra source and date checks.",
      ],
    },
    {
      heading: "Builds, tiers, and unknown facts",
      paragraphs: [
        "Builds and tier frameworks are curated recommendations based on official mechanics, current patch notes, public gameplay context, and clearly stated evidence limits. They are not official builds and do not claim guaranteed DPS or wins.",
        "We do not invent codes, drop rates, skill names, server locations, error codes, damage values, or future plans. An honest 'not officially confirmed' is better than a plausible guess.",
      ],
    },
    {
      heading: "Corrections and updates",
      paragraphs: [
        "When a source changes a material answer, we revise the page, date it, update related links, and note high-risk sections in the internal content review file.",
        "Readers can submit a correction through the Contact page. Include the page, disputed sentence, and a primary source where possible.",
      ],
    },
  ],
);

const privacy = policyPage(
  "privacy-policy",
  "Privacy Policy",
  "Privacy Policy | Mistfall Hunter Guide",
  "Privacy information for Mistfall Hunter Guide, including optional analytics and advertising, external links, email contact, cookies, and data choices.",
  "The site is designed as a static guide and does not require an account, profile, comment, or database to read.",
  [
    {
      heading: "Information this site handles",
      paragraphs: [
        "We do not offer user accounts, comments, saved online builds, or a server-side contact form. If you email us, the email provider processes the address and message you choose to send.",
        "Basic web-server logs may be handled by the hosting provider for security and reliability.",
      ],
    },
    {
      heading: "Optional analytics and advertising",
      paragraphs: [
        "Google Analytics, Microsoft Clarity, or AdSense scripts load only when their corresponding deployment environment values are configured. These services may use cookies or similar technologies under their own policies.",
        "The first release does not include a fabricated publisher identifier or ads.txt entry.",
      ],
    },
    {
      heading: "External links and choices",
      paragraphs: [
        "Source links lead to third-party sites such as Steam, Xbox, PlayStation, media outlets, and community pages. Their privacy practices apply after you leave this site.",
        "Browser controls, consent tools supplied by configured services, and privacy extensions can limit optional storage. Contact us for a site-specific privacy question.",
      ],
    },
  ],
);

const disclaimer = policyPage(
  "disclaimer",
  "Disclaimer",
  "Disclaimer | Mistfall Hunter Guide",
  "Independent fan-site, accuracy, trademarks, gameplay recommendation, technical troubleshooting, purchase, and external-link disclaimers.",
  "Mistfall Hunter Guide is an independent fan-made website and is not affiliated with Bellring Games or the official Mistfall Hunter team.",
  [
    {
      heading: "Accuracy and game updates",
      paragraphs: [
        "Mistfall Hunter is a live game. Balance, modes, rewards, prices, servers, issues, and platform features can change after a page is checked. Use the linked official source for time-sensitive decisions.",
        "We correct errors in good faith but do not warrant that every page remains complete or current at all times.",
      ],
    },
    {
      heading: "Recommendations and troubleshooting",
      paragraphs: [
        "Builds, tier frameworks, settings, and strategy are editorial recommendations, not guarantees. Technical steps are conservative troubleshooting suggestions and may not solve every hardware, network, or account problem.",
        "Do not bypass security, anti-cheat, platform rules, or account-region restrictions based on any third-party guide.",
      ],
    },
    {
      heading: "Ownership and purchases",
      paragraphs: [
        "Game names, images, and trademarks belong to their respective owners. Official images are used for editorial identification and discussion.",
        "Prices, discounts, editions, and refund rules are controlled by the official storefronts. Confirm the final checkout information before buying.",
      ],
    },
  ],
);

const contact = policyPage(
  "contact",
  "Contact Mistfall Hunter Guide",
  "Contact Mistfall Hunter Guide",
  "Contact Mistfall Hunter Guide to report a correction, broken source, outdated patch fact, accessibility issue, or site problem.",
  "Send corrections and site feedback to editor@mistfallhuntergg.wiki. Do not send passwords, account tokens, purchase keys, or private logs.",
  [
    {
      heading: "What to include",
      bullets: [
        "The full page URL.",
        "The sentence or section that needs review.",
        "A current official source when available.",
        "The game version, platform, and date for a technical issue.",
        "A concise accessibility or broken-link description.",
      ],
    },
    {
      heading: "Contact method",
      paragraphs: [
        "Email: editor@mistfallhuntergg.wiki",
        "This static site does not use a contact-form backend. Email delivery and retention are handled by the chosen email provider.",
      ],
    },
    {
      heading: "Account and game support",
      paragraphs: [
        "We cannot restore game accounts, grant rewards, change regions, review bans, or fix official servers. Use Bellring Games in-game support and official community channels for account-specific help.",
      ],
    },
  ],
);

export const commercePolicyPages: GuidePageData[] = [
  price,
  platforms,
  review,
  requirements,
  about,
  editorial,
  privacy,
  disclaimer,
  contact,
];
