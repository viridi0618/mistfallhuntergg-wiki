import type { GuidePageData } from "@/lib/types";
import { OFFICIAL_SITE, STEAM, STEAM_NEWS } from "./sources";

const checked = "2026-07-31";
const common = {
  updated: checked,
  published: "2026-07-31",
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
};

const codes: GuidePageData = {
  path: "codes",
  category: "Rewards",
  eyebrow: "Verified reward status",
  keyword: "mistfall hunter codes",
  title: "Mistfall Hunter Codes: Verified Status",
  description: "Check the Mistfall Hunter codes status and learn how redeem codes differ from launch rewards, Twitch Drops, giveaways, build share codes, and activation keys.",
  h1: "Mistfall Hunter Codes",
  answer: "There are currently no confirmed public Mistfall Hunter redeem codes in the official sources checked on July 31, 2026. This page distinguishes redeem codes from other reward and key types.",
  ...common,
  informationType: "Official-source verification",
  sections: [
    {
      heading: "Current Mistfall Hunter codes status",
      table: {
        headers: ["Type", "Status", "What it means"],
        rows: [
          ["Public redeem code", "No confirmed information currently available", "No active string is published here"],
          ["Build share code", "Official system feature", "Imports a player loadout; it is not a reward code"],
          ["Game activation key", "Store purchase credential", "Not an in-game reward"],
          ["Launch or event reward", "Eligibility-based", "Delivered by event, login, account, or mail rules"],
        ],
      },
    },
    {
      heading: "How we verify a code",
      bullets: [
        "Find the code in an official Bellring Games announcement or channel.",
        "Confirm the exact characters, eligible platforms, regions, and accounts.",
        "Record the published start and expiry time.",
        "Confirm the official redemption location.",
        "Remove or mark the entry expired when the window closes.",
        "Never infer a code from an image filename, giveaway key, or player post.",
      ],
    },
    {
      heading: "Redeem code versus build share code",
      paragraphs: [
        "Official developer notes describe Loadout share codes. These reproduce an equipment and gem configuration inside the Loadout System; they do not grant currency, cosmetics, or a copy of the game.",
        "Do not paste unknown strings into account websites. Use only the game's documented redemption or loadout interface and official domains.",
      ],
    },
    {
      heading: "Avoid fake code lists",
      paragraphs: [
        "A page that lists plausible-looking launch codes without an official source can put accounts at risk and create false expectations. We publish an honest empty status instead of inventing a reward.",
        "Giveaway activation keys, beta access, Deluxe entitlements, Twitch Drops, and event mail are separate systems. Their existence does not prove a public redeem code.",
      ],
    },
  ],
  faqs: [
    { question: "Are there active Mistfall Hunter codes?", answer: "No confirmed public redeem codes were found in the official sources checked on July 31, 2026." },
    { question: "Is a build share code a reward code?", answer: "No. It imports a loadout configuration." },
    { question: "Where will verified codes come from?", answer: "Official Bellring Games announcements, the game client, or other official channels." },
  ],
  related: ["twitch-drops", "launch-rewards", "skins", "patch-notes"],
  sources: [STEAM_NEWS, STEAM],
};

const twitch: GuidePageData = {
  path: "twitch-drops",
  category: "Rewards",
  eyebrow: "Campaign status",
  keyword: "mistfall hunter twitch drops",
  title: "Mistfall Hunter Twitch Drops: Campaign Status",
  description: "Check Mistfall Hunter Twitch Drops status, how to verify a campaign, link accounts safely, claim rewards, and separate Drops from livestream reveals.",
  h1: "Mistfall Hunter Twitch Drops",
  answer: "No currently active official Twitch Drops campaign with verified dates and rewards was found in the official sources checked on July 31, 2026. An official Twitch livestream mention does not itself confirm Drops.",
  ...common,
  informationType: "Official-source campaign verification",
  sections: [
    {
      heading: "Current Twitch Drops status",
      paragraphs: [
        "Bellring Games promoted an official pre-launch Twitch livestream with a named creator and gameplay reveals. The announcement did not publish a verified Drops reward table, watch-time requirement, or campaign window.",
        "Without those elements, this page will not claim an active campaign. A live channel category or player account-linking report is not enough to prove launch rewards.",
      ],
    },
    {
      heading: "How to verify a real campaign",
      table: {
        headers: ["Check", "Required evidence"],
        rows: [
          ["Dates", "Official start and end time with timezone"],
          ["Eligibility", "Supported accounts, platforms, and regions"],
          ["Watch requirement", "Exact eligible channel/category and duration"],
          ["Rewards", "Named items shown by the official publisher"],
          ["Claim route", "Twitch inventory plus official account-linking domain"],
        ],
      },
    },
    {
      heading: "Safe account linking",
      bullets: [
        "Start from the official game site, game client, or Twitch Drops inventory.",
        "Check the domain before signing in.",
        "Never send a password, backup code, or session token to another person.",
        "Confirm the linked platform account before watching.",
        "Claim on Twitch and then follow the official in-game delivery instructions.",
        "Unlink suspicious or unused connections from the platform security page.",
      ],
    },
    {
      heading: "If a claimed reward does not arrive",
      paragraphs: [
        "Confirm the campaign was official, the claim completed in Twitch inventory, and the same eligible account is linked. Restart the game after the official delivery window.",
        "If the requirements were met, record the campaign, claim time, platform, account region, and non-sensitive proof before contacting official support.",
      ],
    },
  ],
  faqs: [
    { question: "Are Twitch Drops active now?", answer: "No active official campaign was verified in the sources checked on July 31, 2026." },
    { question: "Does watching the launch stream grant a reward?", answer: "The official stream announcement did not confirm a Drops reward table." },
    { question: "Where should I link accounts?", answer: "Only through an official game or Twitch route." },
  ],
  related: ["codes", "launch-rewards", "skins", "known-issues"],
  sources: [STEAM_NEWS, OFFICIAL_SITE],
};

const launchRewards: GuidePageData = {
  path: "launch-rewards",
  category: "Rewards",
  eyebrow: "Eligibility guide",
  keyword: "mistfall hunter launch rewards",
  title: "Mistfall Hunter Launch Rewards & Eligibility",
  description: "Mistfall Hunter launch rewards explained: playtest carry-over items, the free Season 1 Battle Pass unlock, Deluxe bonuses, eligibility, and claim cautions.",
  h1: "Mistfall Hunter Launch Rewards",
  answer: "Officially confirmed launch-era rewards depend on eligibility: qualifying playtest accounts can reclaim named cosmetics, and the Season 1 Battle Pass unlocks free after seven cumulative logins. Deluxe items require purchase.",
  ...common,
  informationType: "Official reward eligibility",
  sections: [
    {
      heading: "Confirmed launch reward categories",
      table: {
        headers: ["Reward category", "Eligibility", "Status checked July 31"],
        rows: [
          ["Playtest participation cosmetics", "Use the same eligible account used in the qualifying test", "Officially described"],
          ["Season 1 Battle Pass", "Seven cumulative logins", "Officially described as free unlock"],
          ["Deluxe Edition cosmetics and Fate Coins", "Deluxe purchase or upgrade", "Paid edition benefit"],
          ["Public redeem code", "No confirmed information", "Not listed as active"],
          ["Twitch Drops", "No current official campaign verified", "Do not assume from stream promotion"],
        ],
      },
    },
    {
      heading: "Playtest carry-over rewards",
      paragraphs: [
        "Official June notices said eligible test participants could carry cosmetic rewards into the official release by using the same account. The playtest conclusion specifically described the social emote 'No, it's a bug!' as a launch reward for participants.",
        "A June live update also described reclaimable cosmetics tied to the same account after launch. Eligibility depends on the exact event and account record; participation in a different test or using a different login may not qualify.",
      ],
    },
    {
      heading: "Season 1 Battle Pass unlock",
      paragraphs: [
        "DevNote #7 states that the Season 1 Battle Pass, 'Slumbering Contract,' unlocks free after seven days of cumulative logins. It also describes the 'Slumbering Servant' outfit as redeemable using tokens earned through regular active play.",
        "The page does not invent a full reward track, token rate, or expiry. Check the live season screen for current rules.",
      ],
    },
    {
      heading: "Claim checklist",
      bullets: [
        "Use the same platform and eligible game account.",
        "Install the current patch.",
        "Check in-game mail, event, and Battle Pass screens.",
        "Read the exact expiry and eligibility text in the live client.",
        "Do not pay a third party to 'activate' an account reward.",
        "Record non-sensitive proof before contacting official support.",
      ],
    },
  ],
  faqs: [
    { question: "Is the Season 1 Battle Pass free?", answer: "Official DevNote #7 says it unlocks free after seven cumulative login days." },
    { question: "Do beta rewards carry over?", answer: "Certain officially announced cosmetics do, when the same eligible account is used." },
    { question: "Are Deluxe rewards free launch rewards?", answer: "No. They are paid edition entitlements." },
  ],
  related: ["skins", "codes", "twitch-drops", "patch-notes"],
  sources: [STEAM_NEWS, STEAM],
};

const skins: GuidePageData = {
  path: "skins",
  category: "Rewards",
  eyebrow: "Cosmetics guide",
  keyword: "mistfall hunter skins",
  title: "Mistfall Hunter Skins, Outfits & Cosmetics",
  description: "Mistfall Hunter skins and cosmetics explained: Deluxe items, launch-era rewards, Fate Coins, the free Season 1 Battle Pass, ownership, and safe purchases.",
  h1: "Mistfall Hunter Skins",
  answer: "Mistfall Hunter cosmetics come from edition bonuses, seasonal rewards, event eligibility, and the in-game cosmetic economy. Official store copy says Fate Coins purchase cosmetic items and the game has no paid stat boosts.",
  ...common,
  informationType: "Official cosmetic overview",
  sections: [
    {
      heading: "Deluxe Edition cosmetics",
      table: {
        headers: ["Type", "Official item"],
        rows: [
          ["Outfit", "Forsaken Skeleton"],
          ["Background", "Shipwreck Coast"],
          ["Earrings", "Web of Fate"],
          ["Standing pose", "Justice"],
          ["Emotes", "Pip's Daily Life"],
          ["Avatar", "Dew"],
          ["Avatar frame", "Light Feather"],
          ["Currency", "2,500 Fate Coins"],
        ],
      },
      note: "These names come from the official Steam Deluxe listing checked on July 31, 2026.",
    },
    {
      heading: "Season and event cosmetics",
      paragraphs: [
        "DevNote #7 describes a free Season 1 Battle Pass unlocked after seven cumulative login days and the Slumbering Servant outfit as a token reward for regular active play.",
        "Official playtest notices also announced eligibility-based carry-over cosmetics. These are not public codes and may require the same account that participated in the event.",
      ],
    },
    {
      heading: "Do skins change stats?",
      paragraphs: [
        "The official Xbox description promises zero pay-to-win mechanics and no paid stat boosts. The Steam listing says Fate Coins are used for cosmetic items.",
        "This page does not assume every future purchase is identical. Read the current item description before spending and use the official store or in-game shop only.",
      ],
    },
    {
      heading: "Safe cosmetic purchases",
      bullets: [
        "Verify the item and account before confirming.",
        "Check platform refund and wallet rules.",
        "Do not buy accounts or third-party currency.",
        "Do not confuse a build share code with a cosmetic code.",
        "Keep purchase receipts without sharing transaction identifiers publicly.",
        "Check current season expiry before buying progress.",
      ],
    },
  ],
  faqs: [
    { question: "What is in the Deluxe Edition?", answer: "It includes named cosmetic items and 2,500 Fate Coins according to Steam." },
    { question: "Are skins pay to win?", answer: "Official Xbox copy says there are no paid stat boosts." },
    { question: "Can I earn a free outfit?", answer: "DevNote #7 describes a Season 1 outfit redeemable with tokens earned through active play." },
  ],
  related: ["launch-rewards", "codes", "twitch-drops", "price"],
  sources: [STEAM, STEAM_NEWS],
};

const knownIssues: GuidePageData = {
  path: "known-issues",
  category: "Updates",
  eyebrow: "Official issue tracker summary",
  keyword: "mistfall hunter known issues",
  title: "Mistfall Hunter Known Issues & Current Status",
  description: "Mistfall Hunter known issues summarized from official launch posts, including controller, UI, extraction, reconnect, console, and fixed items.",
  h1: "Mistfall Hunter Known Issues",
  answer: "Bellring Games published a launch known-issues list and then scheduled an immediate update covering those items. Update first; if a listed symptom remains, report the platform, version, and reproduction steps.",
  ...common,
  informationType: "Official issue and fix summary",
  sections: [
    {
      heading: "Known issues and first-update status",
      table: {
        headers: ["Category", "Issue summary", "Platforms", "Official status", "Workaround / action"],
        rows: [
          ["Tutorial", "Incorrect Sorcerer key prompts in some languages", "All relevant", "Listed fixed in first update", "Update client"],
          ["Combat UI", "Flameblade visual range mismatch", "All relevant", "Listed fixed", "Update client"],
          ["Extraction", "Extra Soul of Return consumption near Soul Tree", "All relevant", "Listed fixed", "Avoid repeated boundary entry until updated"],
          ["Inventory", "Secondary menu could not split items", "All relevant", "Listed fixed", "Use split hotkey before update"],
          ["Connection", "Some console matches failed to reconnect", "Console", "Listed fixed", "Update and record match details"],
          ["Controller", "Leaderboard, gear, and Auction House navigation faults", "Controller users", "Listed fixed", "Update; use alternate input where available"],
          ["Console UI", "PS5 deck screen display anomaly", "PS5", "Listed fixed", "Restart game before update"],
        ],
      },
    },
    {
      heading: "Crashes and performance",
      paragraphs: [
        "Official launch material says the team fixed several random crashes, including vegetation animation and AMD hair-rendering triggers, and optimized shader precompilation, asset loading, memory use, low-end PCs, consoles, and combat micro-stutters.",
        "These statements do not guarantee every configuration is resolved. New faults should be separated by version, hardware, screen, and action instead of merged into a generic 'launch issue.'",
      ],
    },
    {
      heading: "How to confirm your current status",
      bullets: [
        "Install the latest approved patch from your platform store.",
        "Restart the game and confirm the version changed.",
        "Reproduce the issue once with a supported default configuration.",
        "Capture the exact screen, action, platform, and input method.",
        "Check a newer official known-issues post before using a workaround.",
        "Submit through in-game support or official community channels.",
      ],
    },
    {
      heading: "Issue reporting boundaries",
      paragraphs: [
        "This page summarizes official posts; it is not a live server monitor. Community reports can reveal a pattern, but a single post does not establish an official issue.",
        "Do not share logs containing personal identifiers publicly. Do not apply unknown DLLs, security changes, or anti-cheat bypasses to test a community theory.",
      ],
    },
  ],
  faqs: [
    { question: "Were launch known issues fixed?", answer: "The first update lists fixes for the published launch issues; install it and report any remaining reproduction." },
    { question: "Is stuttering fully resolved?", answer: "The developer reported improvements but said results vary by hardware." },
    { question: "Where can I report a bug?", answer: "Use in-game customer support or official community channels." },
  ],
  related: ["patch-notes", "fatal-error-fix", "stuttering-fix", "crashing-fix", "controller-guide"],
  sources: [STEAM_NEWS, STEAM],
};

const patchNotes: GuidePageData = {
  path: "patch-notes",
  category: "Updates",
  eyebrow: "Official update digest",
  keyword: "mistfall hunter patch notes",
  title: "Mistfall Hunter Patch Notes: Launch Updates and Fixes",
  description: "Mistfall Hunter patch notes summarized with dates, major fixes, class balance, performance changes, console fixes, and affected guide pages.",
  h1: "Mistfall Hunter Patch Notes",
  answer: "The first launch update was scheduled for July 30, 2026 at 16:00 UTC and addressed the published known-issue list plus class balance changes. This page summarizes official notes instead of copying them.",
  ...common,
  informationType: "Official patch summary",
  sections: [
    {
      heading: "July 30, 2026 launch update summary",
      table: {
        headers: ["Area", "Main change", "Guide impact"],
        rows: [
          ["Known issues", "Fixed the launch list across tutorial, extraction, inventory, controller, reconnect, and console UI", "Update troubleshooting and extraction cautions"],
          ["Withered Knight", "Adjusted Polearm & Shield energy and turning; raised several attack values", "Recheck class and build feel"],
          ["Sorcerer", "Fixed Flameblade presentation and tutorial prompts", "Controller and known-issue pages"],
          ["Controller", "Fixed leaderboard, loadout, Auction House, and Training Room faults", "Controller troubleshooting"],
          ["Connection", "Fixed some console reconnect failures", "Connection guide"],
        ],
      },
      note: "Patch date and summary follow the official Steam announcement checked July 31. Store approval timing can differ by platform.",
    },
    {
      heading: "Launch-version balance context",
      paragraphs: [
        "DevNote #7 prepared broader launch balance adjustments across all six classes. Official examples included Blackarrow solo tuning, Shadowstrix control and mobility reductions, Seer damage and escape changes, Sorcerer Stardust buffs, Mercenary PvE improvements, and Withered Knight changes.",
        "A patch note saying damage increased or decreased does not provide enough evidence for a universal class rank. Builds and tier recommendations on this site are labeled editorial and should be rechecked after each balance update.",
      ],
    },
    {
      heading: "Performance and crash work",
      paragraphs: [
        "Pre-launch notes described shader-precompilation, asset-loading, memory, device preset, console, low-end PC, camp, UI, and combat micro-stutter work. The launch announcement also listed several random crash fixes.",
        "We do not translate that into a promised FPS gain. Hardware, drivers, storage, background tasks, and individual scenes still change results.",
      ],
    },
    {
      heading: "How this digest is maintained",
      bullets: [
        "Use the official announcement date and link.",
        "Summarize material changes in original language.",
        "Separate confirmed fixes from planned work.",
        "Mark affected guides for review.",
        "Do not copy entire official patch posts.",
        "Retire beta facts when the launch version contradicts them.",
      ],
    },
  ],
  faqs: [
    { question: "Where are the full official patch notes?", answer: "Use the official Steam announcements linked below." },
    { question: "Did the first patch fix controller issues?", answer: "It listed fixes for several controller-specific launch issues." },
    { question: "Do old builds still work?", answer: "They may function, but balance changes can alter their relative value." },
  ],
  related: ["known-issues", "classes", "builds", "stuttering-fix", "crashing-fix"],
  sources: [STEAM_NEWS, STEAM],
};

export const rewardUpdatePages: GuidePageData[] = [
  codes,
  twitch,
  launchRewards,
  skins,
  knownIssues,
  patchNotes,
];
