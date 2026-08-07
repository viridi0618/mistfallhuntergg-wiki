import type { GuidePageData } from "@/lib/types";
import { LAUNCH_UPDATE, KNOWN_ISSUES_OFFICIAL, OFFICIAL_SITE, STEAM, STEAM_NEWS, TWITCH_DROPS } from "./sources";

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
  answer: "There are currently no confirmed public Mistfall Hunter redeem codes in the official sources checked on August 1, 2026. The launch gift of Gesture: Thumbs Up and 500 Soul Coins arrives through in-game mail and is not a redeem code.",
  ...common,
  updated: "2026-08-07",
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
          ["Launch milestone mail gift", "Eligibility-based", "Gesture: Thumbs Up and 500 Soul Coins arrive through in-game mail; no public string is entered"],
        ],
      },
    },
    {
      heading: "The launch mail gift is not a code",
      paragraphs: [
        "The launch gift containing Gesture: Thumbs Up and 500 Soul Coins is delivered through in-game mail. It is not a redeem code, and players do not need to enter a public string to claim it.",
        "The official claim deadline is September 1, 2026 at 00:00 UTC. Eligibility and delivery should be checked in the current game client rather than through a third-party claim page.",
      ],
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
    {
      heading: "Ciphers are not redeem codes",
      paragraphs: [
        "Bellring Games included Ashen Cipher and Abyssal Cipher in the official August 1 launch reward mail. These are in-game Cipher items, not public redeem-code strings.",
        "Do not treat the word “Cipher” as evidence that Mistfall Hunter has launched a public code-redemption campaign. Use the Cipher List for NPC clue matching and this page only for public redeem-code status.",
      ],
    },
  ],
  faqs: [
    { question: "Are there active Mistfall Hunter codes?", answer: "No confirmed public redeem codes were found in the official sources checked on August 1, 2026." },
    { question: "Is the 500 Soul Coins launch gift a code?", answer: "No. It is an eligibility-based in-game mail reward." },
    { question: "Is a build share code a reward code?", answer: "No. It imports a loadout configuration." },
    { question: "Are Ashen Cipher and Abyssal Cipher redeem codes?", answer: "No. They are in-game Cipher items and do not establish a public redeem-code system." },
    { question: "Where will verified codes come from?", answer: "Official Bellring Games announcements, the game client, or other official channels." },
  ],
  related: ["twitch-drops", "launch-rewards", "skins", "patch-notes", "cipher-list"],
  sources: [LAUNCH_UPDATE, STEAM],
};

const twitch: GuidePageData = {
  path: "twitch-drops",
  category: "Rewards",
  eyebrow: "Campaign status",
  keyword: "mistfall hunter twitch drops",
  title: "Mistfall Hunter Twitch Drops: Campaign Status",
  description: "Check Mistfall Hunter Twitch Drops status, how to verify a campaign, link accounts safely, claim rewards, and separate Drops from livestream reveals.",
  h1: "Mistfall Hunter Twitch Drops",
  answer: "No new active Twitch Drops campaign with verified August 2026 dates and rewards has been announced in the official sources reviewed on August 5, 2026. The most recent official campaign ran June 14 through June 22 and has ended; an official Twitch livestream mention does not by itself confirm new Drops.",
  ...common,
  updated: "2026-08-05",
  informationType: "Official-source campaign verification",
  sections: [
    {
      heading: "Current Twitch Drops status",
      paragraphs: [
        "No new active campaign with verified August dates and rewards has been announced in the official sources reviewed. Bellring Games promoted an official pre-launch Twitch livestream with a named creator and gameplay reveals, but that announcement did not publish a verified Drops reward table, watch-time requirement, or campaign window.",
        "Without those elements, this page will not claim an active campaign. A live channel category or player account-linking report is not enough to prove launch rewards. The previous official campaign listed on the Twitch Drops page is the June 14 – June 22 window described below, which has ended.",
      ],
    },
    {
      heading: "Previous Official Campaign",
      paragraphs: [
        "The official Twitch Drops page lists a completed campaign that ran June 14 through June 22, before the July 30 launch. The rewards below are the official table from that window and are presented as historical, not active.",
        "Claiming required linking your game account with Twitch, claiming from Twitch within 24 hours of receiving the notification, and restarting the game if you were already logged in when the reward was delivered.",
      ],
      table: {
        headers: ["Watch time", "Reward", "Claim note"],
        rows: [
          ["15 minutes", "Healing Elixir x5 and Gyldenblod x200", "Link Twitch and game account; claim within 24 hours"],
          ["30 minutes", "Excellent Weapon Selection Chest", "Claim on Twitch within 24 hours of the notification"],
          ["60 minutes", "Returner Woodling - Head", "Once per account; claim within 24 hours"],
        ],
      },
      note: "Official launch-era campaign, now ended. If a reward is missing 72 hours after a successful claim, contact official support with the campaign, claim time, platform, and account region.",
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
    { question: "Are Twitch Drops active now?", answer: "No new active official campaign with verified August 2026 dates and rewards was announced in the sources checked on August 5, 2026. The last official campaign ended on June 22." },
    { question: "What was the last official Twitch Drops campaign?", answer: "The official campaign ran June 14 through June 22 and offered Healing Elixir x5 and Gyldenblod x200 at 15 minutes, an Excellent Weapon Selection Chest at 30 minutes, and the Returner Woodling - Head cosmetic at 60 minutes, once per account. Rewards had to be claimed on Twitch within 24 hours of the notification." },
    { question: "Does watching the launch stream grant a reward?", answer: "The official stream announcement did not confirm a Drops reward table." },
    { question: "Where should I link accounts?", answer: "Only through an official game or Twitch route." },
  ],
  related: ["codes", "rewards", "launch-rewards", "skins", "known-issues"],
  sources: [STEAM_NEWS, OFFICIAL_SITE, TWITCH_DROPS],
};

const launchRewards: GuidePageData = {
  path: "launch-rewards",
  category: "Rewards",
  eyebrow: "Eligibility guide",
  keyword: "mistfall hunter launch rewards",
  title: "Mistfall Hunter Launch Rewards & Eligibility",
  description: "Mistfall Hunter launch rewards explained: playtest carry-over items, the free Season 1 Battle Pass unlock, Deluxe bonuses, eligibility, and claim cautions.",
  h1: "Mistfall Hunter Launch Rewards",
  answer: "Current official launch-era mail rewards include the July 30 launch gift, the August 1 second reward wave, and the August 5 one-million-player reward wave. Each has its own eligibility deadline, and none of these mail rewards requires a public redeem code.",
  ...common,
  updated: "2026-08-07",
  informationType: "Official reward eligibility",
  sections: [
    {
      heading: "Current launch mail rewards",
      table: {
        headers: ["Announced", "Reward", "Claim deadline"],
        rows: [
          ["July 30", "Gesture: Thumbs Up + 500 Soul Coins", "September 1, 2026 at 00:00 UTC"],
          ["August 1 — Second Wave", "Pip's Rare Pouch Voucher (3 Days) x1, Soul Coin x500, Ashen Cipher x1, Abyssal Cipher x1", "September 1, 2026 at 00:00 UTC"],
          ["August 5 — Wave 3", "Standing Pose: Spellcasting, Moonlight Nectar x5, Pro Combat Bag x1, Advanced Combat Bag x1", "August 12, 2026 at 12:00 UTC"],
        ],
      },
      paragraphs: [
        "These rewards are delivered through in-game mail to eligible accounts. They are separate from public redeem codes, Twitch Drops, build share codes, and paid Deluxe Edition benefits.",
        "The August 1 reward wave is also direct official evidence that Ashen Cipher and Abyssal Cipher are present in the launch version.",
      ],
    },
    {
      heading: "Confirmed launch reward categories",
      table: {
        headers: ["Reward category", "Eligibility", "Claim status"],
        rows: [
          ["Launch milestone mail gift", "Log in before September 1, 2026 at 00:00 UTC", "Gesture: Thumbs Up and 500 Soul Coins delivered through in-game mail"],
          ["Playtest participation cosmetics", "Use the same eligible account used in the qualifying test", "Officially described"],
          ["Season 1 Battle Pass", "Seven cumulative logins", "Officially described as free unlock"],
          ["Deluxe Edition cosmetics and Fate Coins", "Deluxe purchase or upgrade", "Paid edition benefit"],
          ["Public redeem code", "No confirmed information", "Not listed as active"],
          ["Twitch Drops", "No current official campaign verified", "Do not assume from stream promotion"],
        ],
      },
    },
    {
      heading: "Launch milestone mail reward",
      paragraphs: [
        "Bellring Games announced Gesture: Thumbs Up and 500 Soul Coins as a first-day milestone gift. Eligible players receive the gift through in-game mail after logging in before the official deadline, September 1, 2026 at 00:00 UTC. No public redeem code is required.",
        "If the mail does not appear, first confirm the account, install the current client version, and check the in-game mailbox. The announcement does not guarantee retroactive delivery to every account that logs in after the deadline, and there is no third-party claim link.",
      ],
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
    { question: "Do I need a redeem code for the 500 Soul Coins?", answer: "No. The official launch gift is delivered through in-game mail and is not a public redeem code." },
    { question: "Do beta rewards carry over?", answer: "Certain officially announced cosmetics do, when the same eligible account is used." },
    { question: "Are Deluxe rewards free launch rewards?", answer: "No. They are paid edition entitlements." },
    { question: "What is the deadline for the August 5 reward wave?", answer: "Log in before August 12, 2026 at 12:00 UTC to claim the Wave 3 mail rewards." },
    { question: "Are Ashen Cipher and Abyssal Cipher redeem codes?", answer: "No. They are in-game Cipher items included in the August 1 mail reward wave." },
  ],
  related: ["skins", "codes", "twitch-drops", "patch-notes", "cipher-list"],
  sources: [LAUNCH_UPDATE, STEAM_NEWS, STEAM],
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
  answer: "As of August 7, 2026, Bellring Games says it is still investigating recently reported stuttering and latency issues. The August 6 update listed fixes for several other problems, including PS/Xbox friends-list crashes, gem-affix match crashes, Hallowgrove Gyldenmist behavior, Soul Tree trapping, and multiplayer downed-state issues.",
  ...common,
  updated: "2026-08-07",
  informationType: "Official issue and fix summary",
  sections: [
    {
      heading: "Issues still being investigated",
      table: {
        headers: ["Issue", "Current official status", "What this page should claim"],
        rows: [
          ["Stuttering", "Actively being investigated as of August 5.", "Do not claim a universal fix or that the August 6 update resolved all stuttering."],
          ["Latency", "Actively being investigated as of August 5.", "Do not claim a universal network fix or current outage without newer official evidence."],
        ],
      },
      paragraphs: [
        "These are the two current problems Bellring Games explicitly said it was still investigating in the August 5 roadmap announcement. A newer client or local troubleshooting step may improve an individual case, but that does not establish an official global resolution.",
      ],
    },
    {
      heading: "Listed fixed in the August 6 update",
      table: {
        headers: ["Issue area", "Official status"],
        rows: [
          ["PS/Xbox friends list retrieval crash", "Listed fixed August 6"],
          ["Gem-affix match crash", "Listed fixed August 6"],
          ["Hallowgrove Gyldenmist dealing no damage", "Listed fixed August 6"],
          ["Soul Tree model trapping players", "Listed fixed August 6"],
          ["Brandrgarde Mine Pit dodge location", "Listed fixed August 6"],
          ["Execution interruption locking actions", "Listed fixed August 6"],
          ["Multiplayer Soul Separation Pill downed state", "Listed fixed August 6"],
          ["Spectator-mode exit/loading issues", "Listed fixed August 6"],
          ["Fate Chart Selection Chest display", "Listed fixed August 6"],
          ["Gyldening progress display", "Listed fixed August 6"],
          ["Contract/Fate Chart weekly refresh time", "Listed fixed August 6"],
          ["Rival equipment incorrectly appearing bound", "Listed fixed August 6"],
        ],
      },
    },
    {
      heading: "Previously fixed — July 30 launch issues",
      table: {
        headers: ["Category", "Issue summary", "Platforms", "Official status", "Workaround / action"],
        rows: [
          ["Sorcerer tutorial", "Incorrect spellcasting key prompts in some languages", "All relevant", "Listed fixed in the July 30 update", "Update client and retest the tutorial"],
          ["Combat UI", "Flameblade visual range did not match its damage range", "All relevant", "Listed fixed in the July 30 update", "Update client"],
          ["Extraction", "Repeated Soul Tree boundary entry could consume an extra Soul of Return", "All relevant", "Listed fixed in the July 30 update", "Update before reproducing the same sequence"],
          ["Inventory", "Items could not be split through the secondary menu", "All relevant", "Listed fixed in the July 30 update", "Update; the split hotkey was the earlier workaround"],
          ["Connection", "Some console matches could not reconnect after disconnection", "Console", "Listed fixed in the July 30 update", "Update and record match details if it persists"],
          ["General Harald", "An occasional impassable area could appear during the challenge", "All relevant", "Listed fixed in the July 30 update", "Update and report the exact location if reproduced"],
          ["Guide UI", "Closing the guide interface very quickly could leave some keys unresponsive", "All relevant", "Listed fixed in the July 30 update", "Update and record the closing sequence"],
          ["Seasonal Leaderboard", "Moving the controller cursor to specific regions could crash the game", "Controller users", "Listed fixed in the July 30 update", "Update and report the screen position if reproduced"],
          ["Loadout", "Equipment could not be unequipped with a controller", "Controller users", "Listed fixed in the July 30 update", "Update and retest the same item"],
          ["Auction House", "Some gem slots could not be selected with the D-pad", "Controller users", "Listed fixed in the July 30 update", "Update and compare D-pad input"],
          ["Training Room", "Public Training Room settings could not be opened with a controller", "Controller users", "Listed fixed in the July 30 update", "Update and retest the settings action"],
          ["Xbox PC", "An incorrect popup appeared when exiting the game", "Xbox PC", "Listed fixed in the July 30 update", "Update and record the prompt if it remains"],
          ["PS5 UI", "The deck screen could occasionally display abnormally", "PS5", "Listed fixed in the July 30 update", "Update; restart was the published pre-update workaround"],
          ["Audio", "Execution Animation: Execute - Voidflame Requiem had missing audio", "All relevant", "Listed fixed in the July 30 update", "Update and report the exact animation if silent"],
        ],
      },
      subsections: [
        {
          heading: "Controller and interface cases",
          paragraphs: ["The official update listed fixes for the Seasonal Leaderboard crash, Loadout unequip action, Auction House D-pad selection, Training Room settings, Xbox PC exit prompt, PS5 deck display, and guide UI input case. Retest only after the current platform update is installed."],
        },
        {
          heading: "Extraction, inventory, and reconnect cases",
          paragraphs: ["The named fixes include extra Soul of Return consumption, secondary-menu item splitting, some console reconnect failures, and the General Harald impassable area. A similar symptom in a different sequence should be reported as a new reproduction."],
        },
        {
          heading: "Audio and presentation cases",
          paragraphs: ["The update also listed the Voidflame Requiem audio issue, Flameblade range presentation, and Sorcerer tutorial prompts as fixed. This status summarizes the official note and is not a guarantee for every client or platform."],
        },
      ],
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
    { question: "Is Mistfall Hunter stuttering fixed?", answer: "Not as a blanket official claim. Bellring Games said on August 5 that it was still actively investigating recently reported stuttering." },
    { question: "Is Mistfall Hunter latency fixed?", answer: "No complete official resolution is confirmed here. Bellring Games said recent latency reports were still under investigation on August 5." },
    { question: "Was the PS5 and Xbox friends-list crash fixed?", answer: "The August 6 update lists the PS/Xbox friends-list retrieval crash as fixed. Install the current client and report a new reproduction if it still occurs." },
    { question: "Where can I report a bug?", answer: "Use in-game customer support or the official Mistfall Hunter community channels." },
  ],
  related: ["patch-notes", "fatal-error-fix", "stuttering-fix", "crashing-fix", "controller-guide"],
  sources: [KNOWN_ISSUES_OFFICIAL, LAUNCH_UPDATE, STEAM, STEAM_NEWS],
};

const patchNotes: GuidePageData = {
  path: "patch-notes",
  category: "Updates",
  eyebrow: "Official update digest",
  keyword: "mistfall hunter patch notes",
  title: "Mistfall Hunter Patch Notes: Launch Updates and Fixes",
  description: "Mistfall Hunter patch notes summarized with dates, major fixes, class balance, performance changes, console fixes, and affected guide pages.",
  h1: "Mistfall Hunter Patch Notes",
  answer: "The latest official Mistfall Hunter client update was scheduled for August 6, 2026 at 09:00 UTC. It enabled Dried Flower Knot drops and Einherjar Mist Lord challenges, adjusted Blackarrow and Withered Knight, and fixed several crash, multiplayer, Hallowgrove, Soul Tree, Fate Chart, and interface issues.",
  ...common,
  updated: "2026-08-07",
  informationType: "Official patch summary",
  sections: [
    {
      heading: "August 6, 2026 live update",
      paragraphs: [
        "Bellring Games scheduled a no-downtime client update for August 6 at 09:00 UTC. Players still needed to update the game through their platform store after the update became available.",
      ],
      table: {
        headers: ["Area", "August 6 change"],
        rows: [
          ["Einherjar", "Dried Flower Knots began dropping, opening the current path to Mist Lord challenges in Einherjar Mode."],
          ["Blackarrow — Steel Arrow", "Uncharged shots no longer apply the previous impact effect, and the impact of fully charged shots was slightly reduced."],
          ["Blackarrow — movement", "Fixed abnormal displacement when jumping after a side dodge."],
          ["Blackarrow — aiming", "Fixed an incorrect collision prompt when aiming at Stealthed units."],
          ["Withered Knight — Sprinting Slash", "Energy Cost was slightly reduced."],
          ["Withered Knight — Withering Mark", "Energy Cost was slightly reduced."],
          ["Withered Knight — skill reliability", "Fixed cases where certain skills could catch on obstacles and launch the character upward."],
          ["Withered Knight — Inspect interaction", "Fixed certain skills being interrupted early by the Inspect action."],
          ["Withered Knight — Thorn Guide", "Fixed Thorn Guide being able to drag Richie the Merchant."],
          ["Mercenary", "Fixed a Sword & Shield issue that could trigger auto-block under specific circumstances."],
          ["Sorcerer", "Fixed a Stardust issue that could prevent use of a charged Meteor Charm under specific circumstances."],
        ],
      },
    },
    {
      heading: "Critical fixes in the August 6 update",
      table: {
        headers: ["Issue", "Official August 6 status"],
        rows: [
          ["PS/Xbox friends list crash", "Listed fixed. The friends list could fail to retrieve friend information and crash the game."],
          ["Hallowgrove Gyldenmist", "Listed fixed. Gyldenmist could incorrectly deal no damage under specific circumstances."],
          ["Stackable items", "Listed fixed. Some stackable items could stack incorrectly."],
          ["Gem affixes", "Listed fixed. Gem affixes could occasionally cause a crash during matches."],
          ["Brandrgarde Cataclysm", "Listed fixed. Allowed Combat Bags could display incorrectly."],
          ["Contracts / Fate Chart", "Listed fixed. Weekly task refresh times could be incorrect."],
          ["Looted rival equipment", "Listed fixed. Equipment taken from defeated Gyldhunters could incorrectly appear bound."],
          ["Contract page", "A display issue was listed fixed."],
        ],
      },
    },
    {
      heading: "Other player-facing fixes",
      paragraphs: [
        "The same update also addressed several lower-frequency but player-facing problems. These included players becoming trapped by the Soul Tree model, a Brandrgarde Mine Pit location where dodging could leave a player stuck, execution interruptions that could lock all actions, multiplayer Soul Separation Pill cases that prevented the correct downed state, Spectator mode exit and loading-screen problems, Fate Chart Selection Chests failing to show their contents, and Gyldening progress-bar display issues.",
        "Bellring Games also shipped additional cosmetic, audio, localization, task-text, controller-looting, settlement-screen, and interface corrections. This digest focuses on changes that materially affect gameplay, progression, stability, or existing guides rather than reproducing the full official post.",
      ],
    },
    {
      heading: "Previous update — July 30, 2026",
      table: {
        headers: ["Area", "Official change", "Pages affected"],
        rows: [
          ["Launch reward", "Gesture: Thumbs Up and 500 Soul Coins through in-game mail before September 1, 2026 at 00:00 UTC", "Rewards, Launch Rewards, Codes"],
          ["Withered Knight", "Polearm & Shield energy costs were reduced; Tier-1 Charged Dash turning, Basic Attack thrust damage, Spear Barrage multiplier, and Rainbow Piercer cooldown were improved", "Withered Knight guide"],
          ["Sorcerer", "Chant Guard description corrected; Flameblade range presentation and tutorial prompts fixed", "Sorcerer guide, Known Issues"],
          ["Controller/UI", "Leaderboard crash, Loadout, Auction House, Training Room, Xbox PC prompt, and PS5 deck issues listed fixed", "Known Issues, Controller Guide"],
          ["Gameplay", "Soul of Return, item splitting, console reconnect, General Harald, guide UI, and Voidflame Requiem audio cases listed fixed", "Extraction, Connection, Known Issues"],
        ],
      },
      note: "Patch date and summary follow the official Steam announcement checked August 1. Store approval timing can differ by platform.",
      subsections: [
        {
          heading: "Rewards and eligibility",
          paragraphs: ["The launch milestone gift contains Gesture: Thumbs Up and 500 Soul Coins. It is delivered through in-game mail to eligible accounts that log in before September 1, 2026 at 00:00 UTC, and it is not a public redeem code."],
        },
        {
          heading: "Class balance details",
          paragraphs: ["The update includes qualitative Polearm & Shield adjustments for Withered Knight and a corrected Chant Guard description for Sorcerer. Neither change alone establishes a new global class ranking."],
        },
        {
          heading: "Controller and gameplay fixes",
          paragraphs: ["The official list covers controller, interface, extraction, inventory, reconnect, challenge-area, audio, and crash cases. Each item remains described as listed fixed rather than guaranteed resolved on every configuration."],
        },
      ],
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
    { question: "What is the latest Mistfall Hunter patch?", answer: "The latest official client update covered here is the August 6, 2026 live update, which enabled Dried Flower Knot drops and Einherjar Mist Lord challenges, adjusted Blackarrow and Withered Knight, and fixed multiple stability and gameplay issues." },
    { question: "Did the August 6 update fix stuttering and latency?", answer: "Bellring Games said on August 5 that it was still actively investigating recently reported stuttering and latency issues. The August 6 patch should not be described as a complete fix for either problem." },
    { question: "Did the August 6 patch change class balance?", answer: "Yes. Steel Arrow and two Withered Knight Energy Costs were adjusted. The same patch also fixed class-specific issues affecting Blackarrow, Withered Knight, Mercenary, and Sorcerer." },
    { question: "Where are the full official patch notes?", answer: "Use the official Mistfall Hunter Steam announcements linked in the Sources section." },
  ],
  related: ["known-issues", "classes", "builds", "stuttering-fix", "crashing-fix"],
  sources: [LAUNCH_UPDATE, KNOWN_ISSUES_OFFICIAL, STEAM, STEAM_NEWS],
};

export const rewardUpdatePages: GuidePageData[] = [
  codes,
  twitch,
  launchRewards,
  skins,
  knownIssues,
  patchNotes,
];
