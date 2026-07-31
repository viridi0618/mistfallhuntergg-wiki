import type { GuidePageData } from "@/lib/types";
import {
  COMMUNITY_AMA,
  DEVNOTE_7,
  KNOWN_ISSUES_OFFICIAL,
  LAUNCH_ANNOUNCEMENT,
  LAUNCH_FAQ,
  LAUNCH_UPDATE,
  OFFICIAL_SITE,
  STEAM,
  XBOX,
} from "./sources";

const common = {
  updated: "2026-07-31",
  published: "2026-07-31",
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
  pageType: "category" as const,
  categoryPath: "",
};

const guides: GuidePageData = {
  path: "guides",
  category: "Guides",
  eyebrow: "Guide library",
  keyword: "mistfall hunter guides",
  title: "Mistfall Hunter Guides: A Practical Reading Path",
  description: "Use the Mistfall Hunter guides hub to learn the extraction loop, prepare a first run, understand progression, compare platforms, and choose the next practical guide.",
  h1: "Mistfall Hunter Guides",
  breadcrumbLabel: "Guides",
  answer: "Start with the beginner guide, learn extraction before risking valuable gear, then move into class, build, multiplayer, and troubleshooting sections as each question appears.",
  ...common,
  informationType: "Editorial guide index based on official mechanics",
  sections: [
    {
      heading: "What this guide library solves",
      paragraphs: [
        "Mistfall Hunter combines deliberate action combat with extraction risk. That means a player can understand attacks and still lose progress by bringing the wrong kit, staying too long, or beginning the return process without enough healing and information. This hub arranges the site around decisions you can make before, during, and after a hunt.",
        "Official material confirms the basic loop: descend into the Gyldenmist, fight Corroded creatures and rival Gyldhunters, collect spoils, find a Returner Woodling, obtain a Soul of Return, and escape. Our guides add conservative planning around that loop without inventing spawn coordinates, drop rates, or guaranteed safe routes.",
      ],
    },
    {
      heading: "Recommended reading order for a new player",
      table: {
        headers: ["Step", "Read", "Question it answers"],
        rows: [
          ["1", "Beginner Guide", "What should I carry, practice, and avoid in my first five runs?"],
          ["2", "How to Extract", "What starts a return and what can interrupt it?"],
          ["3", "Classes", "Which weapon rhythm and battlefield role fit me?"],
          ["4", "Builds", "How do I turn a role into a coherent beginner, solo, or trio setup?"],
          ["5", "Gameplay", "How do combat, loot, pressure, and extraction connect?"],
          ["6", "Multiplayer", "Can I group with these friends and this account region?"],
        ],
      },
    },
    {
      heading: "The three questions to ask during every run",
      paragraphs: [
        "First ask what the run is for. A learning run, task run, recovery run, PvE route, and high-risk loot run should not use the same stopping rule. Second ask what resource would make the next fight unsafe: healing, class resource, a disengagement skill, inventory space, or time. Third ask whether the value already carried is worth more than the uncertain value ahead.",
        "A successful early run is not necessarily a boss clear or player kill. It can be one new mechanic learned and a modest extraction completed. Clear success criteria prevent the common beginner mistake of turning a finished objective into an avoidable wipe.",
      ],
    },
    {
      heading: "Popular guide routes",
      bullets: [
        "If you keep dying with a full bag, read How to Extract and Solo Mode.",
        "If combat feels unreadable, compare Classes before copying a build.",
        "If friends cannot join, read Crossplay, Servers, Region Lock, and Play With Friends in that order.",
        "If performance interrupts fights, start with Best Settings, then choose the symptom-specific fix.",
        "If a reward claim appears online, check Codes, Twitch Drops, and Launch Rewards separately.",
        "If old advice conflicts with the client, check Patch Notes and Known Issues before changing your setup.",
      ],
    },
    {
      heading: "Recently updated and source boundaries",
      paragraphs: [
        "This hub was reviewed for the July 30, 2026 launch and the first official update. Launch facts such as price, server deployment countries, cross-platform matchmaking, system requirements, and published fixes come from official pages. Strategy is labeled as editorial guidance, while player reports are treated as reports rather than proof.",
        "The site does not convert Open Beta values into launch facts. When an exact skill value, drop chance, server status, or repair result is not supported by a current source, the relevant guide explains how to verify it in your own client instead of filling the gap with a guess.",
      ],
    },
    {
      heading: "Where to go next",
      paragraphs: [
        "New players should continue to the Beginner Guide. Players who already understand extraction can move directly to Classes or Builds. If the question is about joining friends, use the Multiplayer hub; if the game is not running correctly, use Settings & Fixes. Rewards and Updates are separated so an official gift is never confused with a redeem code or an expired test event.",
      ],
    },
  ],
  faqs: [
    { question: "Which Mistfall Hunter guide should I read first?", answer: "Read the Beginner Guide, then How to Extract before investing in a detailed build." },
    { question: "Do these guides use beta facts?", answer: "Beta observations are not treated as launch facts. Version-sensitive claims are dated and labeled." },
    { question: "Is a successful first run a boss clear?", answer: "Not necessarily. Learning one system and extracting a replaceable haul is a useful first-run success." },
  ],
  related: ["beginner-guide", "how-to-extract", "classes", "builds", "gameplay", "multiplayer"],
  sources: [OFFICIAL_SITE, LAUNCH_FAQ, LAUNCH_ANNOUNCEMENT],
};

const multiplayer: GuidePageData = {
  path: "multiplayer",
  category: "Multiplayer",
  eyebrow: "Multiplayer hub",
  keyword: "mistfall hunter multiplayer",
  title: "Mistfall Hunter Multiplayer: Crossplay, Servers & Parties",
  description: "Understand Mistfall Hunter multiplayer, crossplay, solo and trio play, servers, account-region limits, party checks, and the safest connection troubleshooting order.",
  h1: "Mistfall Hunter Multiplayer",
  breadcrumbLabel: "Multiplayer",
  answer: "Mistfall Hunter supports solo play and three-player squads with cross-platform matchmaking, but account-region restrictions can still prevent otherwise compatible friends from sharing a server.",
  ...common,
  informationType: "Official multiplayer facts with conservative troubleshooting",
  sections: [
    {
      heading: "Start with the right multiplayer question",
      paragraphs: [
        "Crossplay, party size, server location, account region, and connection quality are separate systems. The official launch FAQ confirms cross-platform matchmaking and names deployments in China, the United States, Germany, Singapore, and Brazil. It also states that certain North American storefront accounts use a North American build restricted to US servers.",
        "A crossplay badge therefore answers only whether supported platforms can match together. It does not promise cross-region access, identical platform permissions, or a live path between every account pair.",
      ],
    },
    {
      heading: "Recommended party setup order",
      table: {
        headers: ["Check", "What both players should compare", "If it differs"],
        rows: [
          ["Client", "Current game version and completed update", "Update and restart before retrying"],
          ["Region", "Store-account region and visible server choices", "Read Region Lock before changing network settings"],
          ["Platform access", "Online subscription or multiplayer permission", "Resolve the platform entitlement first"],
          ["Crossplay", "Current in-game crossplay preference", "Match settings and recreate the party"],
          ["Party", "Invite direction and current party state", "Leave stale parties and send a fresh invite"],
          ["Network", "Whether one or many players fail", "Use the connection guide only after the account checks"],
        ],
      },
    },
    {
      heading: "Solo, trio, and the missing duo queue",
      paragraphs: [
        "Solo is officially supported, and official descriptions promote squads of three. In the community AMA, Bellring Games said a permanent Duo matchmaking queue was not planned in the short term because it would complicate balance and divide the matchmaking pool. That answer can change, so the Updates hub is the correct place to recheck it.",
        "Solo and trio also reward different decisions. A solo player must preserve a personal disengagement tool and avoid being pinned between PvE and another group. A trio can divide scouting, frontline, support, and extraction security, but three players also create more noise and more opportunities to split.",
      ],
    },
    {
      heading: "Crossplay does not mean cross-region",
      paragraphs: [
        "Treat platform compatibility and server eligibility as two gates. A PC player and console player can satisfy the platform gate while failing the region gate. Before buying a second copy or troubleshooting a router, compare the exact store regions and server choices shown on both accounts.",
        "Do not use VPNs, unofficial launch arguments, account-region workarounds, or third-party network tools to bypass a published restriction. Those approaches can conflict with storefront, payment, or game rules and cannot be recommended as reliable fixes.",
      ],
    },
    {
      heading: "How to tell a personal problem from a wider outage",
      bullets: [
        "If only one household fails, compare that account, platform permission, client version, and local connection.",
        "If several unrelated players fail at the same time, check official announcements before changing devices.",
        "If login works but a specific friend cannot join, compare region and party eligibility before DNS.",
        "If every online game fails on a console, test the platform network status and subscription.",
        "If latency is high but connection succeeds, use a wired path and compare the eligible server rather than assuming an outage.",
      ],
    },
    {
      heading: "Continue by symptom",
      paragraphs: [
        "Read Crossplay for platform compatibility, Servers for deployed locations and latency expectations, Region Lock for account restrictions, and Play With Friends for the actual invite checklist. Use Connection Fix only after those pages rule out policy and version mismatches.",
      ],
    },
  ],
  faqs: [
    { question: "How many players are in a Mistfall Hunter squad?", answer: "Official store descriptions support squads of three." },
    { question: "Does crossplay remove region restrictions?", answer: "No. Cross-platform matchmaking and account-region eligibility are separate." },
    { question: "Is there a permanent duo queue?", answer: "Bellring Games said it was not planned in the short term in the launch-era community AMA." },
  ],
  related: ["crossplay", "servers", "region-lock", "play-with-friends", "solo-mode", "connection-fix"],
  sources: [LAUNCH_FAQ, XBOX, COMMUNITY_AMA],
};

const settingsFixes: GuidePageData = {
  path: "settings-fixes",
  category: "Settings & Fixes",
  eyebrow: "Performance and support hub",
  keyword: "mistfall hunter settings and fixes",
  title: "Mistfall Hunter Settings & Fixes: Safe Test Order",
  description: "Use a safe Mistfall Hunter settings and fixes workflow for performance, controllers, fatal errors, stuttering, crashes, and connection problems.",
  h1: "Mistfall Hunter Settings & Fixes",
  breadcrumbLabel: "Settings & Fixes",
  answer: "Update first, classify the symptom, make one reversible change, retest the same scenario, and keep evidence for support instead of applying a pile of unverified fixes.",
  ...common,
  informationType: "Official issue context with conservative workarounds",
  sections: [
    {
      heading: "Classify the symptom before changing settings",
      paragraphs: [
        "A fatal error is not the same as a frame-time spike, a sustained low frame rate, an ordinary application crash, or a server rejection. Each symptom has a different evidence trail. Record when it happens: before the title screen, while loading a hunt, during combat, in a menu, after reconnecting a controller, or only when joining a party.",
        "The official launch material documents work on shader precompilation, asset loading, console and low-end-PC tuning, memory use, camp frame rate, combat micro-stutters, and several specific crashes. Those notes are useful context, not a promise that every device is fixed.",
      ],
    },
    {
      heading: "The safe diagnostic loop",
      table: {
        headers: ["Step", "Action", "Success signal"],
        rows: [
          ["1", "Confirm the client and platform are updated", "Version mismatch is removed"],
          ["2", "Reproduce once and record the stage or exact message", "The symptom has a repeatable boundary"],
          ["3", "Apply one reversible change", "You can attribute any improvement"],
          ["4", "Repeat the same route or loading step", "Comparison uses the same workload"],
          ["5", "Restore changes that did not help", "The system stays understandable"],
          ["6", "Collect logs and hardware details for support", "The report contains actionable evidence"],
        ],
      },
    },
    {
      heading: "Choose the right guide",
      bullets: [
        "Best Settings: establish a stable baseline before chasing maximum visual quality.",
        "FOV: verify the current in-game camera controls without unsupported injectors.",
        "Controller Guide: separate mapping, navigation, reconnect, and platform-permission problems.",
        "Fatal Error Fix: preserve the exact error text and identify its launch, load, or match stage.",
        "Stuttering Fix: distinguish shader, traversal, combat, and sustained-performance symptoms.",
        "Crashing Fix: separate startup, loading, UI, controller, PC, and console crashes.",
        "Connection Fix: check maintenance, version, region, party, permissions, and network in order.",
      ],
    },
    {
      heading: "Changes this site does not recommend",
      paragraphs: [
        "Do not download replacement DLL files, disable anti-cheat, permanently disable security software, edit account regions to bypass restrictions, or run unknown registry scripts. Avoid generic booster tools that promise guaranteed FPS or routing fixes. They add risk and make the original problem harder to isolate.",
        "Driver updates should come from the GPU vendor, game verification from the platform launcher, and account or ban issues from official support. If a step needs elevated permission, understand exactly what it changes and reverse it after the test when appropriate.",
      ],
    },
    {
      heading: "Recently updated",
      paragraphs: [
        "This section reflects the July 30 launch update, official known-issues notice, and DevNote #7. The official team reported fixes involving tutorial prompts, controller navigation, console reconnect behavior, PS5 interface presentation, and several crash or performance cases. Check the Updates hub before assuming an older workaround is still relevant.",
      ],
    },
    {
      heading: "What to send support",
      bullets: [
        "Platform, exact model, operating-system or console version, and game version.",
        "Exact error wording or a clear photo from your own device.",
        "Where the failure occurs and whether it is repeatable.",
        "Recent driver, update, controller, overlay, or network changes.",
        "The minimal troubleshooting steps already tested and their results.",
      ],
    },
  ],
  faqs: [
    { question: "Should I change several graphics settings at once?", answer: "No. Change one variable and repeat the same test so you know what helped." },
    { question: "Is every launch issue fixed?", answer: "No such guarantee is official. Check the current known-issues and patch pages." },
    { question: "Should I download a DLL from a fix video?", answer: "No. Use official platform verification and vendor downloads." },
  ],
  related: ["best-settings", "fatal-error-fix", "stuttering-fix", "crashing-fix", "connection-fix", "known-issues"],
  sources: [DEVNOTE_7, KNOWN_ISSUES_OFFICIAL, LAUNCH_UPDATE, STEAM],
};

const rewards: GuidePageData = {
  path: "rewards",
  category: "Rewards",
  eyebrow: "Rewards hub",
  keyword: "mistfall hunter rewards",
  title: "Mistfall Hunter Rewards: Codes, Drops & Launch Gifts",
  description: "Separate Mistfall Hunter redeem codes, Twitch Drops, launch rewards, in-game mail, Deluxe cosmetics, Battle Pass access, and loadout share codes.",
  h1: "Mistfall Hunter Rewards",
  breadcrumbLabel: "Rewards",
  answer: "Check the reward type before following a claim: redeem codes, Twitch Drops, in-game mail, launch gifts, paid cosmetics, and loadout share codes are different systems.",
  ...common,
  informationType: "Official reward status with unconfirmed claims labeled",
  sections: [
    {
      heading: "Do not treat every code as a redeem code",
      paragraphs: [
        "No confirmed public redeem-code campaign was found in the official sources checked on July 31, 2026. Mistfall Hunter does use loadout share codes, but those import build information rather than granting currency, items, or cosmetics. A store activation key is also not an in-game reward code.",
        "This distinction matters because search results often combine unrelated systems. A valid-looking string is not evidence of an active redemption system. Use the Codes page for the current confirmed answer and never submit account credentials to a third-party code page.",
      ],
    },
    {
      heading: "Current reward types at a glance",
      table: {
        headers: ["Reward type", "Confirmed status", "Where to verify"],
        rows: [
          ["Public redeem codes", "No confirmed active public codes found", "Official site and announcements"],
          ["Twitch Drops", "No verified active campaign found at last check", "Official Twitch campaign announcement"],
          ["Launch in-game mail", "Official July 30 launch gift announced", "Official launch update and in-game mail"],
          ["Playtest carryover cosmetic", "Eligibility tied to the same account", "Official playtest conclusion notice"],
          ["Season 1 Battle Pass", "Officially described as free after cumulative login requirements", "DevNote #7"],
          ["Deluxe cosmetics", "Paid edition content", "Official launch FAQ or storefront"],
        ],
      },
    },
    {
      heading: "Safe claim checklist",
      bullets: [
        "Confirm the announcement is from Bellring Games or an official storefront account.",
        "Check the start time, end time, platform, account, and region conditions.",
        "Match the reward name to the current client rather than an old beta screenshot.",
        "Use only the in-game mail, official redemption page, or linked platform flow.",
        "Do not pay a third party to unlock a free reward.",
        "Keep loadout share codes separate from currency and cosmetic claims.",
      ],
    },
    {
      heading: "Recommended reading order",
      paragraphs: [
        "Read Codes if you have a string that claims to grant items. Read Twitch Drops when a stream campaign is announced. Read Launch Rewards for in-game mail, playtest eligibility, and login rewards. Read Skins for the difference between earned cosmetics and paid Deluxe content.",
        "When a campaign is not officially confirmed, the page gives a short honest status rather than fabricating a list. That answer remains useful because it tells you which channels would contain a real announcement.",
      ],
    },
    {
      heading: "Recently updated",
      paragraphs: [
        "Bellring Games announced a launch gift of a Thumbs Up gesture and 500 Soul Coins for players logging in before September 1, 2026 at 00:00 UTC. Because reward windows expire, use the direct official launch-update source and the date printed on each reward page before attempting a claim.",
      ],
    },
    {
      heading: "How this hub connects to other sections",
      paragraphs: [
        "Rewards affect inventory and appearance, not whether a build is mechanically complete. Use Builds for setup logic and Price for edition costs. Use Updates when a reward changes in a patch or official notice. Account-specific missing rewards must be handled by official support rather than this fan site.",
      ],
    },
  ],
  faqs: [
    { question: "Are there active Mistfall Hunter codes?", answer: "No confirmed public redeem codes were found in the official sources checked July 31, 2026." },
    { question: "Is a loadout share code a reward code?", answer: "No. It shares build configuration rather than granting an item." },
    { question: "Are Twitch Drops active?", answer: "No current official campaign with verified dates and requirements was found at the last check." },
  ],
  related: ["codes", "twitch-drops", "launch-rewards", "skins", "price", "updates"],
  sources: [LAUNCH_UPDATE, DEVNOTE_7, LAUNCH_FAQ, LAUNCH_ANNOUNCEMENT],
};

const updates: GuidePageData = {
  path: "updates",
  category: "Updates",
  eyebrow: "Live information hub",
  keyword: "mistfall hunter updates",
  title: "Mistfall Hunter Updates: Patch Notes & Known Issues",
  description: "Track Mistfall Hunter updates through official patch notes, known issues, fixed problems, launch balance changes, and careful version checks.",
  h1: "Mistfall Hunter Updates",
  breadcrumbLabel: "Updates",
  answer: "Use Known Issues to identify acknowledged problems and Patch Notes to confirm what changed; a listed fix should not be described as guaranteed on every platform until the correct client update is installed.",
  ...common,
  informationType: "Official update index",
  sections: [
    {
      heading: "Known issue, fix, and workaround are different",
      paragraphs: [
        "A known issue is a problem the official team has acknowledged. A patch note describes a change included in a named update. A workaround is a temporary action that may reduce impact without repairing the underlying code. Keeping those labels separate prevents a player report from becoming a false guarantee.",
        "The launch known-issues notice covered tutorial prompts, Flameblade presentation, Soul of Return consumption, inventory splitting, console reconnect behavior, controller navigation, an Xbox PC prompt, and a PS5 deck-screen anomaly. The July 30 update later listed fixes for the launch set and class adjustments.",
      ],
    },
    {
      heading: "How to verify your client",
      table: {
        headers: ["Question", "Check", "Why it matters"],
        rows: [
          ["Was the update published?", "Read the specific official note and time", "Announcement timing is not the same as installation"],
          ["Did your platform receive it?", "Check the platform download queue or version", "Store review timing can differ"],
          ["Is the symptom the same?", "Compare the stage and exact wording", "Similar symptoms can have different causes"],
          ["Does it still reproduce?", "Restart and repeat one controlled test", "Cached sessions can preserve old behavior"],
          ["Is it widespread?", "Check official posts before community claims", "One report does not establish a global outage"],
        ],
      },
    },
    {
      heading: "Recommended update workflow",
      bullets: [
        "Read the newest specific official announcement rather than only the announcement index.",
        "Confirm the client has finished downloading and restart it.",
        "Reproduce the original problem once before keeping an old workaround.",
        "Remove workarounds that are no longer necessary.",
        "Recheck class, build, server, reward, and fix pages affected by the note.",
        "Report persistent problems with platform, version, stage, and exact symptom.",
      ],
    },
    {
      heading: "Balance notes and guide recommendations",
      paragraphs: [
        "The launch period included adjustments for all six classes and an immediate change to Withered Knight's Polearm & Shield. A skill, crowd-control, movement, or energy change can alter the safest build direction without creating a permanent best class.",
        "Tier and build pages therefore state their evaluation dimensions and last-check date. They do not convert official qualitative notes into fabricated DPS values, win rates, or extraction statistics.",
      ],
    },
    {
      heading: "Recently updated",
      paragraphs: [
        "This hub currently covers the official launch announcement, launch FAQ, DevNote #7, launch known issues, and the July 30 launch rewards/update post. It does not provide live server status. For a current outage, check the newest official communication rather than assuming an older known issue applies.",
      ],
    },
    {
      heading: "Choose the next page",
      paragraphs: [
        "Open Known Issues when you need to identify an acknowledged symptom. Open Patch Notes when you need the sequence of published changes. Use Settings & Fixes only after checking whether the official team already named or resolved the problem.",
      ],
    },
  ],
  faqs: [
    { question: "Are patch notes the same as known issues?", answer: "No. Known issues acknowledge problems; patch notes document shipped changes." },
    { question: "Does a listed fix guarantee my problem is gone?", answer: "No. Confirm the platform update and that your symptom matches the fixed case." },
    { question: "Does this page show live server status?", answer: "No. It points readers to current official communication instead of claiming real-time status." },
  ],
  related: ["known-issues", "patch-notes", "settings-fixes", "class-tier-list", "builds"],
  sources: [KNOWN_ISSUES_OFFICIAL, LAUNCH_UPDATE, DEVNOTE_7, LAUNCH_ANNOUNCEMENT],
};

export const categoryPages: GuidePageData[] = [guides, multiplayer, settingsFixes, rewards, updates];
