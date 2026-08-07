import type { GuidePageData } from "@/lib/types";
import { GAMESRADAR, OFFICIAL_SITE, STEAM, STEAM_NEWS, XBOX } from "./sources";

const checked = "2026-07-31";
const common = {
  updated: checked,
  published: "2026-07-31",
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
};

const beginner: GuidePageData = {
  path: "beginner-guide",
  category: "Guides",
  eyebrow: "Start here",
  keyword: "mistfall hunter beginner guide",
  title: "Mistfall Hunter Beginner Guide: First Extractions",
  description: "A practical Mistfall Hunter beginner guide to the match loop, loot risk, classes, Returner Woodling extraction, solo play, resources, and early mistakes.",
  h1: "Mistfall Hunter Beginner Guide",
  answer: "Enter with replaceable gear, complete a clear objective, keep enough resources to fight your way out, defeat a Returner Woodling for a Soul of Return, and extract before greed turns a good run into a loss.",
  ...common,
  informationType: "Official mechanics with beginner recommendations",
  sections: [
    {
      heading: "The Mistfall Hunter game loop",
      paragraphs: [
        "Mistfall Hunter is a third-person PvPvE extraction ARPG. You deploy into a hostile area, fight Corroded creatures and possibly rival Gyldhunters, collect gear and Gyldenblood, then try to return to camp. If you die, the official descriptions warn that you lose the spoils carried from that run.",
        "Camp is where you prepare the next attempt. Class progression, skills, talents, weapons, equipment, gems, and loadout choices shape what you can safely accomplish. Extraction is the success condition that converts carried loot into usable progression.",
      ],
    },
    {
      heading: "How to enter a match prepared",
      bullets: [
        "Choose a kit with a clear weapon and skill plan.",
        "Bring healing and utility you understand; more items are not automatically safer.",
        "Leave inventory capacity for the objective and valuable loot.",
        "Know whether you are learning PvE, seeking PvP, or gathering resources.",
        "Check the selected mode, map, server, and squad before confirming.",
        "Review current official notices if connection or stability looks abnormal.",
      ],
      subsections: [
        {
          heading: "Choose a replaceable kit",
          paragraphs: ["Use equipment you can afford to lose while learning routes and combat timing. A repeatable kit gives you a stable baseline and keeps one failed run from consuming the rest of your reserve."],
        },
        {
          heading: "Set one run objective",
          paragraphs: ["Decide before deployment whether the run is for practice, resources, a task, or player conflict. A specific objective makes the extract-or-continue decision easier once supplies begin to fall."],
        },
        {
          heading: "Keep an exit resource",
          paragraphs: ["Do not spend every heal, movement skill, and defensive cooldown on optional fights. Preserve enough recovery and mobility to reach and protect the return process."],
        },
      ],
    },
    {
      heading: "Loot, death, and early resource management",
      paragraphs: [
        "Treat equipment as a budget, not a permanent possession. Expensive gear can improve survival, but taking it before you understand routes may only increase the cost of each mistake. Build a reserve of repeatable kits and upgrade gradually.",
        "Official developer notes describe Equipment Standard Vouchers as a comeback tool and Affix Gems as a major part of equipment customization. Learn one dependable loadout before maintaining several specialized profiles.",
      ],
    },
    {
      heading: "Class choice for new players",
      paragraphs: [
        "Our safest first recommendation is Mercenary because Sword & Shield makes defense easy to understand. Blackarrow suits players who aim well and prefer range. Seer offers protection and support, Sorcerer controls space, Shadowstrix rewards ambush timing, and Withered Knight favors deliberate heavy commitments.",
        "This is not an official tier list. Start with the class whose range and tempo match your instincts, then learn its recovery windows before copying a specialized build.",
      ],
    },
    {
      heading: "Solo and squad differences",
      paragraphs: [
        "Solo play gives you full control of route and retreat decisions but no teammate to cover healing, revive pressure, or a failed extraction attempt. A three-player squad can divide frontline, support, and ranged jobs, but noisy movement and unclear calls can also attract fights.",
        "The official Xbox listing supports online co-op for two to three players. Bellring Games has said it balances Solo and Trio separately and does not plan a permanent Duo queue in the short term.",
      ],
    },
    {
      heading: "Common beginner mistakes",
      bullets: [
        "Staying after the run's objective is already complete.",
        "Using every movement skill to chase and having no escape.",
        "Looting in the open without listening or checking sightlines.",
        "Building around rarity instead of weapon and skill synergy.",
        "Treating solo as a PvE-only mode.",
        "Copying beta builds after launch balance changes.",
      ],
    },
  ],
  faqs: [
    { question: "What should I do first in Mistfall Hunter?", answer: "Learn movement, one class, the extraction sequence, and a short low-risk loot route." },
    { question: "Do I lose loot when I die?", answer: "Official store descriptions state that death strips you of the spoils carried from the run." },
    { question: "Can beginners play solo?", answer: "Yes, but solo still carries PvP risk and gives you no teammate safety net." },
    { question: "What should I read next?", answer: "Use the How to Extract guide, then compare classes and beginner build directions." },
  ],
  related: ["how-to-extract", "character-creation", "classes", "builds", "solo-mode"],
  sources: [OFFICIAL_SITE, STEAM, STEAM_NEWS, XBOX],
};

const extract: GuidePageData = {
  path: "how-to-extract",
  category: "Guides",
  eyebrow: "Core mechanic",
  keyword: "how to extract in mistfall hunter",
  title: "How to Extract in Mistfall Hunter Safely",
  description: "Learn how to extract in Mistfall Hunter using a Returner Woodling and Soul of Return, plus preparation, failure causes, solo tips, and current limits.",
  h1: "How to Extract in Mistfall Hunter",
  answer: "Locate and defeat a Returner Woodling, take its Soul of Return, and use the game's return process to leave with your spoils. The official site confirms this core sequence but does not publish fixed spawn coordinates.",
  ...common,
  informationType: "Official extraction mechanic",
  sections: [
    {
      heading: "Basic extraction sequence",
      table: {
        headers: ["Step", "Action", "Decision"],
        rows: [
          ["1", "Finish your objective and assess supplies", "Extract now or accept more risk"],
          ["2", "Locate a Returner Woodling through in-match information", "Avoid crossing unnecessary high-traffic areas"],
          ["3", "Defeat the Returner Woodling", "Keep enough health and resources for interference"],
          ["4", "Obtain a Soul of Return", "Confirm the item and route before moving"],
          ["5", "Complete the return process", "Watch for monsters and rival players until safe"],
        ],
      },
    },
    {
      heading: "What are the Returner Woodling and Soul of Return?",
      paragraphs: [
        "The official website identifies the Returner Woodling as the rare monster tied to escape and the Soul of Return as the item obtained from defeating it. The exact in-match interface and available extraction interactions can vary by map or update.",
        "This guide does not claim permanent coordinates, spawn refresh rates, or guaranteed paths. Use the current match UI and tutorial prompts rather than an old beta map image.",
      ],
    },
    {
      heading: "Prepare before starting the extraction",
      bullets: [
        "Heal and reload or reset your resource cycle before committing.",
        "Choose cover that limits how many directions can pressure you.",
        "Listen for other players and avoid announcing the attempt too early.",
        "Keep one movement, control, or defensive skill ready.",
        "Decide which loot can be dropped if inventory management becomes urgent.",
        "Tell teammates who watches, who fights, and who handles the interaction.",
      ],
      subsections: [
        {
          heading: "Confirm the Soul of Return",
          paragraphs: ["Before changing route, confirm that the Returner Woodling is defeated and the required Soul of Return is accounted for. Do not rely on an old beta route or an assumed fixed spawn."],
        },
        {
          heading: "Reset health and cooldowns",
          paragraphs: ["Heal, reload, and let essential movement or defensive tools recover before beginning the return. Starting immediately with depleted resources makes predictable interference much harder to survive."],
        },
        {
          heading: "Choose a defensible approach",
          paragraphs: ["Approach through cover when possible and check the directions that expose you to monsters or rival players. In a squad, assign the interaction and guard roles before anyone commits."],
        },
      ],
    },
    {
      heading: "Why extraction attempts fail",
      paragraphs: [
        "The most common structural failures are starting with too few supplies, committing in an exposed area, spending every cooldown on the Woodling, or assuming another squad will ignore the sound and timing of an extraction.",
        "A launch-day known issue could consume an extra Soul of Return when repeatedly entering and leaving the Soul Tree area while summoning an Extraction Point. The first official update listed a fix. Keep the game client current and check new known-issue posts if the behavior returns.",
      ],
    },
    {
      heading: "Solo extraction advice",
      paragraphs: [
        "Solo players cannot split guard and interaction duties. Clear nearby threats first, break line of sight from open approaches, and avoid taking a fight that pulls you away from the extraction objective.",
        "A clean early exit is better than a high-value inventory lost to greed. Choose a personal threshold—objective completed, bag nearly full, healing low, or dangerous noise nearby—and respect it.",
      ],
    },
  ],
  faqs: [
    { question: "Do I need a Soul of Return?", answer: "The official site says a Soul of Return from a Returner Woodling is required to find your way home." },
    { question: "Where does the Returner Woodling spawn?", answer: "No permanent launch-version coordinates are claimed here. Follow current in-match information." },
    { question: "Can another player interrupt extraction?", answer: "Mistfall Hunter is PvPvE, so plan as if rivals may contest the process." },
  ],
  related: ["beginner-guide", "gameplay", "solo-mode", "known-issues"],
  sources: [OFFICIAL_SITE, STEAM_NEWS, GAMESRADAR],
};

const character: GuidePageData = {
  path: "character-creation",
  category: "Guides",
  eyebrow: "Account setup",
  keyword: "mistfall hunter character creation",
  title: "Mistfall Hunter Character Creation & Class Choice",
  description: "Mistfall Hunter character creation explained: appearance, class choice, account considerations, what affects combat, and safe decisions for a first Gyldhunter.",
  h1: "Mistfall Hunter Character Creation",
  answer: "Treat appearance as identity and class as the combat decision. Public official material confirms six classes and cosmetic items, but it does not support claims that a face or body choice changes combat statistics.",
  ...common,
  informationType: "Officially supported overview with cautious limits",
  sections: [
    {
      heading: "What character creation changes",
      paragraphs: [
        "Mistfall Hunter presents you as a resurrected Gyldhunter in the world of Weavereach. Cosmetic presentation and profile items shape how the character appears, while class, weapon, skills, talents, and equipment shape combat.",
        "No official source used for this page confirms hidden bonuses from cosmetic choices. Do not choose an appearance based on rumored hitbox, movement, or damage advantages.",
      ],
    },
    {
      heading: "Choose a class by combat range",
      table: {
        headers: ["Preferred style", "Class to inspect first", "Reason"],
        rows: [
          ["Defensive melee", "Mercenary", "Sword & Shield and Hammer routes"],
          ["Ranged magic", "Sorcerer", "Elemental and Stardust control"],
          ["Ranged weapon", "Blackarrow", "Bow pressure and ailments"],
          ["Fast ambush", "Shadowstrix", "Stealth, Daggers, and Dual Blades"],
          ["Support flexibility", "Seer", "Catalyst and Mace routes"],
          ["Heavy melee", "Withered Knight", "Greatsword or Polearm & Shield"],
        ],
      },
    },
    {
      heading: "Account and platform considerations",
      bullets: [
        "Use an account region that matches where you actually play and purchase.",
        "North American storefront accounts have an official server restriction described in the launch FAQ.",
        "Cross-platform matchmaking is confirmed, but account-linking details should be checked in the live client.",
        "Do not buy or share third-party accounts, activation keys, or claimed reward codes.",
        "Keep the same eligible account for any officially announced carry-over reward.",
      ],
    },
    {
      heading: "What you can safely decide later",
      paragraphs: [
        "Build direction can change through weapons, skills, talents, equipment, and gems. The official Loadout System also supports saved configurations and share codes. That makes early experimentation more useful than trying to predict a permanent meta before playing.",
        "For any paid cosmetic or Deluxe item, verify the current storefront description. Cosmetic availability and shop rotations can change after this page is published.",
      ],
    },
  ],
  faqs: [
    { question: "Does appearance affect combat?", answer: "No official evidence used here confirms a combat advantage from cosmetic appearance." },
    { question: "How many classes are available?", answer: "Six classes are confirmed for launch." },
    { question: "Can I follow a shared build?", answer: "Official developer notes describe build share codes in the Loadout System." },
  ],
  related: ["beginner-guide", "classes", "builds", "platforms"],
  sources: [OFFICIAL_SITE, STEAM_NEWS, STEAM],
};

const gameplay: GuidePageData = {
  path: "gameplay",
  category: "Gameplay",
  eyebrow: "Mechanics overview",
  keyword: "mistfall hunter gameplay guide",
  title: "Mistfall Hunter Gameplay Guide: PvPvE Loop",
  description: "Understand Mistfall Hunter gameplay: deployment, third-person combat, PvE and PvP threats, loot, classes, progression, squads, and extraction.",
  h1: "Mistfall Hunter Gameplay Guide",
  answer: "Mistfall Hunter combines third-person action combat with an extraction loop: deploy, fight Corroded enemies and rival players, gather loot, secure a Soul of Return, and extract before death costs the run's spoils.",
  ...common,
  informationType: "Official mechanics overview",
  sections: [
    {
      heading: "Mistfall Hunter gameplay in one loop",
      bullets: [
        "Prepare a class, weapon stance, skills, talents, equipment, and consumables at camp.",
        "Deploy solo or with a team into a PvPvE battlefield.",
        "Explore objectives, fight creatures, and evaluate rival-player risk.",
        "Collect Gyldenblood, equipment, gems, and other useful loot.",
        "Defeat a Returner Woodling and use a Soul of Return to leave.",
        "Convert a successful extraction into safer future progression.",
      ],
    },
    {
      heading: "Combat with steel, bows, and magic",
      paragraphs: [
        "Official store descriptions emphasize free aiming, combos, weak-point targeting, tactical items, and weapon switching. The six classes cover shields, heavy melee weapons, bows, staves, stealth weapons, support tools, and hybrid control.",
        "Combat is not only about dealing damage. Positioning, recovery frames, crowd control, blocking, dodges, resource cycles, and disengagement decide whether a strong opening becomes a safe extraction.",
      ],
    },
    {
      heading: "PvE and PvP coexist",
      paragraphs: [
        "Corroded creatures and major monsters create PvE pressure while rival Gyldhunters introduce PvP. Noise, resource spending, and loot interactions can make a PvE encounter an opportunity for another player to attack.",
        "The developer added a PvE revival condition for deaths without hostile-player damage, but official material explicitly keeps PvP deaths separate. Verify the current live rules in the tutorial because edge cases can change.",
      ],
    },
    {
      heading: "Progression and build customization",
      paragraphs: [
        "Class talent trees, active skills, two weapon stances for many classes, equipment, inherent affixes, and Affix Gems support different archetypes. Loadout profiles help organize repeatable setups.",
        "The game also uses seasons and has confirmed seasonal resets with some long-term progression carrying over. Exact reset scope should be checked in current official season notes.",
      ],
    },
  ],
  faqs: [
    { question: "Is Mistfall Hunter a Soulslike?", answer: "It uses deliberate third-person action elements, but the official category is a dark fantasy PvPvE extraction ARPG." },
    { question: "Can I play alone?", answer: "Yes. The official descriptions support solo play." },
    { question: "Is there co-op?", answer: "Yes. Xbox lists online co-op for two to three players." },
  ],
  related: ["beginner-guide", "how-to-extract", "solo-mode", "pve-only", "classes"],
  sources: [OFFICIAL_SITE, STEAM, XBOX],
};

const solo: GuidePageData = {
  path: "solo-mode",
  category: "Gameplay",
  eyebrow: "Mode guide",
  keyword: "mistfall hunter solo mode",
  title: "Mistfall Hunter Solo Mode Guide: Rules, Routes and Tips",
  description: "Mistfall Hunter solo mode explained: matchmaking, PvP risk, accessible content, Solo versus Trio, class choices, limits, and launch advice.",
  h1: "Mistfall Hunter Solo Mode",
  answer: "Yes, Mistfall Hunter supports solo play. Solo is a matchmaking and squad-size choice inside a PvPvE extraction game, not a private offline or PvE-only campaign.",
  ...common,
  informationType: "Official mode facts with player-focused advice",
  sections: [
    {
      heading: "What solo mode means",
      paragraphs: [
        "Official descriptions say you can stalk the mist as a lone wolf or join a three-player squad. In solo, you make route, loot, fight, and extraction decisions alone. Other players and PvE threats remain part of the game.",
        "Bellring Games discusses Solo and Trio as separate balance contexts. That supports dedicated solo consideration, but it does not imply every map, queue, or seasonal activity has identical availability.",
      ],
    },
    {
      heading: "Solo versus Trio",
      table: {
        headers: ["Question", "Solo", "Trio"],
        rows: [
          ["Decision making", "Fast and independent", "Requires clear calls"],
          ["Role coverage", "One build covers every need", "Roles can be specialized"],
          ["Extraction security", "No dedicated guard", "Can split interaction and defense"],
          ["Loot sharing", "All decisions are yours", "Coordinate value and equipment return"],
          ["Recovery from mistakes", "Limited", "Teammates may cover or rescue"],
        ],
      },
    },
    {
      heading: "Content and current limitations",
      paragraphs: [
        "The official July community response said a permanent Duo queue was not planned in the short term. It also said Brandrgarde Solo might open for a limited period during a season. This means mode and map availability can rotate.",
        "No fixed promise is made here about every current quest or seasonal activity. Check the live mode selector and official announcements when a map is unavailable in Solo.",
      ],
    },
    {
      heading: "Best solo class choices",
      paragraphs: [
        "Blackarrow is our ranged recommendation for confident aimers, while Mercenary is a safer learning option. Shadowstrix can choose engagements well in experienced hands, and Seer can build for hybrid protection.",
        "These are editorial recommendations. The developer adjusted Blackarrow after strong solo data and said Solo and Trio receive distinct balance treatment.",
      ],
    },
    {
      heading: "Beginner solo rules",
      bullets: [
        "Use replaceable gear until you know a complete extraction route.",
        "Avoid long fights that invite a third party.",
        "Keep a defensive cooldown after killing a PvE target.",
        "Leave when the objective succeeds instead of filling every slot.",
        "Use terrain to reduce the number of angles you must watch.",
        "Read map and mode rotation notes before assuming content is missing.",
      ],
    },
  ],
  faqs: [
    { question: "Will I meet other players in solo?", answer: "Yes. Solo remains part of a PvPvE game." },
    { question: "Is solo a separate queue?", answer: "Official posts discuss Solo and Trio separately, but live queue and map availability can vary." },
    { question: "Is there a permanent Duo mode?", answer: "The developer said Duo matchmaking was not planned in the short term." },
  ],
  related: ["best-solo-class", "pve-only", "gameplay", "how-to-extract", "classes"],
  sources: [STEAM_NEWS, STEAM, XBOX],
};

const pve: GuidePageData = {
  path: "pve-only",
  category: "Gameplay",
  eyebrow: "Mode status",
  keyword: "mistfall hunter pve only",
  title: "Mistfall Hunter PvE-Only Mode Status and PvP Risk",
  description: "Is Mistfall Hunter PvE only? Learn the confirmed PvPvE design, whether PvP can be disabled, how training differs, and ways to lower player-conflict risk.",
  h1: "Mistfall Hunter PvE Only Mode",
  answer: "No confirmed full PvE-only extraction mode is currently advertised. Official store pages consistently describe Mistfall Hunter as PvPvE, and solo does not mean PvE-only.",
  ...common,
  informationType: "Official mode-status answer",
  sections: [
    {
      heading: "Is there a pure PvE mode?",
      paragraphs: [
        "The official website, Steam listing, and Xbox description present the core game as PvPvE. No official source reviewed for this page confirms a switch that removes hostile players from standard extraction matches.",
        "Training or tutorial areas can contain PvE practice, but that is not the same as a complete parallel progression mode with standard extraction rewards. Check the live client for limited events without assuming they are permanent.",
      ],
    },
    {
      heading: "Why solo is not PvE-only",
      paragraphs: [
        "Solo describes your squad size, not the absence of rivals. You can still encounter other Gyldhunters while fighting Corroded enemies, looting, or extracting.",
        "The official developer discussion treats PvP and PvE as coexisting systems. A PvE revival feature was designed to give more room for errors against monsters, while deaths involving hostile players remain intentionally different.",
      ],
    },
    {
      heading: "How to lower PvP risk",
      bullets: [
        "Choose quieter routes and avoid lingering at obvious contest points.",
        "Extract after completing the objective instead of maximizing every run.",
        "Break line of sight and disengage rather than accepting every fight.",
        "Use sound carefully and avoid opening an exposed inventory screen.",
        "Pick a class and build with reliable escape or defense.",
        "Play with friends if role coverage improves your confidence.",
      ],
      note: "These steps reduce risk; they do not remove PvP or guarantee a peaceful match.",
    },
    {
      heading: "Has the developer promised PvE-only later?",
      paragraphs: [
        "No confirmed information is currently available from the official sources reviewed here. Player requests are not a roadmap. If Bellring Games announces a dedicated PvE mode, this page should be updated with the exact scope and source.",
      ],
    },
  ],
  faqs: [
    { question: "Can I turn PvP off?", answer: "No official source reviewed here confirms a PvP-off option for standard extraction." },
    { question: "Does training count as PvE-only?", answer: "Training can be PvE practice, but it is not evidence of a full PvE-only progression mode." },
    { question: "Is solo PvE?", answer: "No. Solo remains PvPvE." },
  ],
  related: ["solo-mode", "gameplay", "play-with-friends", "beginner-guide"],
  sources: [OFFICIAL_SITE, STEAM, XBOX, STEAM_NEWS],
};

const crossplay: GuidePageData = {
  path: "crossplay",
  category: "Multiplayer",
  eyebrow: "Platform support",
  keyword: "is mistfall hunter crossplay",
  title: "Is Mistfall Hunter Crossplay? Platforms Explained",
  description: "Is Mistfall Hunter crossplay? See the official cross-platform matchmaking confirmation, PC, PS5 and Xbox support, grouping limits, and region caveats.",
  h1: "Is Mistfall Hunter Crossplay?",
  answer: "Yes. The official launch FAQ confirms cross-platform matchmaking, and Xbox lists cross-platform multiplayer and co-op. Region restrictions can still limit who shares a server pool.",
  ...common,
  informationType: "Official platform confirmation",
  sections: [
    {
      heading: "Crossplay support at a glance",
      table: {
        headers: ["Platform", "Launch support", "Cross-platform evidence"],
        rows: [
          ["Windows PC / Steam", "Available", "Official launch FAQ confirms cross-platform matchmaking"],
          ["Xbox Series X|S / Xbox PC", "Available", "Xbox lists cross-platform multiplayer and co-op"],
          ["PlayStation 5", "Available", "Included in the simultaneous console launch; use live account flow"],
        ],
      },
    },
    {
      heading: "Cross-platform matchmaking and squads",
      paragraphs: [
        "Cross-platform matchmaking means supported platforms can enter shared matchmaking. Xbox also explicitly lists cross-platform co-op. The exact friend invitation and account-linking screens should be followed in the live client because UI steps can change.",
        "The official store listing supports online co-op for two to three players. Bellring Games has said a separate permanent Duo queue is not planned in the short term, which is different from two friends being able to form a party.",
      ],
    },
    {
      heading: "Region restrictions still matter",
      paragraphs: [
        "The official launch FAQ states that store accounts registered in the United States, Canada, Mexico, Puerto Rico, and the U.S. Virgin Islands receive the North American build and can access only the North American servers located in the US.",
        "Crossplay does not override that restriction. Friends on different platforms may still be separated if their account builds cannot reach the same region.",
      ],
    },
    {
      heading: "If a friend does not appear",
      bullets: [
        "Confirm both clients are on the latest version.",
        "Confirm both players are using compatible account regions.",
        "Check privacy, parental, and cross-network settings on console.",
        "Verify the correct in-game account or identifier.",
        "Restart the game after linking or changing a setting.",
        "Check official announcements for maintenance or a known issue.",
      ],
    },
  ],
  faqs: [
    { question: "Does Mistfall Hunter have cross-platform matchmaking?", answer: "Yes, according to the official launch FAQ." },
    { question: "Can PC and Xbox play together?", answer: "Xbox lists cross-platform multiplayer and co-op." },
    { question: "Does crossplay remove region restrictions?", answer: "No. The official North American account restriction still applies." },
  ],
  related: ["play-with-friends", "servers", "region-lock", "platforms", "connection-fix"],
  sources: [STEAM_NEWS, XBOX],
};

const servers: GuidePageData = {
  path: "servers",
  category: "Multiplayer",
  eyebrow: "Regional infrastructure",
  keyword: "mistfall hunter servers",
  title: "Mistfall Hunter Servers: Regions & Connection Help",
  description: "Mistfall Hunter servers explained: five officially named deployment countries, choosing a region, latency, maintenance, queues, and connection checks.",
  h1: "Mistfall Hunter Servers",
  answer: "The official launch FAQ names server deployments in China, the United States, Germany, Singapore, and Brazil. This page does not provide live server status.",
  ...common,
  informationType: "Official regional information; no live status",
  sections: [
    {
      heading: "Official server locations",
      table: {
        headers: ["Deployment country", "Likely broad audience", "Official wording limit"],
        rows: [
          ["China", "Eligible accounts in the China service context", "Deployment country, not a list of every datacenter"],
          ["United States", "North America", "North American restricted accounts use US servers"],
          ["Germany", "Europe", "No additional city is claimed"],
          ["Singapore", "Asia-Pacific", "No additional routing promise is claimed"],
          ["Brazil", "South America", "No additional city is claimed"],
        ],
      },
      note: "These are the five countries named by Bellring Games. They are not a live uptime report or a guarantee of identical routing for every provider.",
    },
    {
      heading: "How to choose a server",
      paragraphs: [
        "Use the lowest stable latency among regions your account can access, then keep the squad together on the same eligible region. A numerically low ping is useful, but packet loss and route stability can matter more than a small latency difference.",
        "North American store accounts have an official access limitation. Do not buy a different-region account or use unsupported tools to bypass it; use the account and region controls provided by the game and platform.",
      ],
    },
    {
      heading: "Maintenance, queues, and outages",
      paragraphs: [
        "This independent site does not provide real-time server status. Check the official Steam announcements, in-game notices, and the official Discord before assuming a local fault.",
        "A queue after launch or maintenance can be temporary. Do not repeatedly reinstall the game if the official team has acknowledged a service-side problem.",
      ],
    },
    {
      heading: "Basic connection checks",
      bullets: [
        "Update the game and platform client.",
        "Restart the game, router, and platform network session.",
        "Use a wired connection where practical.",
        "Pause large downloads and cloud backups.",
        "Confirm platform subscriptions required for console online play.",
        "Record the error message, time, region, and platform before contacting support.",
      ],
    },
  ],
  faqs: [
    { question: "How many server countries are confirmed?", answer: "Five: China, the United States, Germany, Singapore, and Brazil." },
    { question: "Is this a live status page?", answer: "No. Use official channels for current maintenance or outages." },
    { question: "Can North American accounts change region?", answer: "The official launch FAQ says listed North American storefront accounts are limited to North American servers." },
  ],
  related: ["region-lock", "crossplay", "connection-fix", "play-with-friends"],
  sources: [STEAM_NEWS, XBOX],
};

const regionLock: GuidePageData = {
  path: "region-lock",
  category: "Multiplayer",
  eyebrow: "Account restriction",
  keyword: "mistfall hunter region lock",
  title: "Mistfall Hunter Region Lock: Account and Server Rules",
  description: "Mistfall Hunter region lock explained: store account versus server region, the official North American restriction, cross-region friends, and switching limits.",
  h1: "Mistfall Hunter Region Lock",
  answer: "Mistfall Hunter has a confirmed North American account restriction: accounts registered in the US, Canada, Mexico, Puerto Rico, and the US Virgin Islands receive the North American build and can access only US-based North American servers.",
  ...common,
  informationType: "Official account-region restriction",
  sections: [
    {
      heading: "What the region restriction covers",
      paragraphs: [
        "The launch FAQ ties the restriction to the storefront account's registered region and the downloaded build. It lists the United States, Canada, Mexico, Puerto Rico, and the U.S. Virgin Islands.",
        "This is not the same as saying every global account is permanently locked to one server. The developer separately said it was working on a region-unlocking solution, but no completion date was confirmed in the source reviewed here.",
      ],
    },
    {
      heading: "Store region versus server region",
      table: {
        headers: ["Term", "Meaning", "Common misunderstanding"],
        rows: [
          ["Store account region", "Platform account registration and purchase context", "Not simply your current physical location"],
          ["Game build", "Version delivered for the account context", "Crossplay does not automatically replace it"],
          ["Server region", "Eligible matchmaking infrastructure", "A lower-ping region may still be inaccessible"],
        ],
      },
    },
    {
      heading: "Can friends in different regions play together?",
      paragraphs: [
        "Only if their builds and accounts can access a shared eligible server pool. Cross-platform matchmaking is confirmed, but it does not override the North American restriction.",
        "If a friend invitation fails, compare account regions before spending time on reinstallations. No unsupported bypass is recommended.",
      ],
    },
    {
      heading: "Can you switch region?",
      paragraphs: [
        "The official July community response said a solution for region unlocking was in progress and asked players to wait for updates. That is not confirmation that self-service switching is currently available.",
        "Use only options exposed by the game or platform. Avoid account purchases, location spoofing, or third-party tools that can violate service rules or create payment and support problems.",
      ],
    },
  ],
  faqs: [
    { question: "Is Mistfall Hunter region locked?", answer: "A specific North American account restriction is officially confirmed." },
    { question: "Does crossplay bypass region lock?", answer: "No." },
    { question: "Can I change my server region?", answer: "No generally available solution is confirmed here; follow official updates." },
  ],
  related: ["servers", "crossplay", "play-with-friends", "connection-fix"],
  sources: [STEAM_NEWS, STEAM],
};

const friends: GuidePageData = {
  path: "play-with-friends",
  category: "Multiplayer",
  eyebrow: "Co-op setup",
  keyword: "how to play mistfall hunter with friends",
  title: "How to Play Mistfall Hunter With Friends",
  description: "Learn how to play Mistfall Hunter with friends across PC, PS5, and Xbox, including party size, crossplay, regions, readiness, roles, and connection checks.",
  h1: "How to Play Mistfall Hunter With Friends",
  answer: "Form an in-game party, confirm compatible account regions and current versions, then enter together. Xbox officially lists online co-op for two to three players and cross-platform co-op.",
  ...common,
  updated: "2026-08-07",
  informationType: "Official capabilities with practical setup steps",
  sections: [
    {
      heading: "Party setup checklist",
      table: {
        headers: ["Step", "Check"],
        rows: [
          ["1", "Update every game and platform client"],
          ["2", "Add the correct in-game or platform identity"],
          ["3", "Confirm cross-network privacy settings"],
          ["4", "Confirm all accounts can access the same server region"],
          ["5", "Create or join the party and select compatible content"],
          ["6", "Ready together after checking equipment and inventory"],
        ],
      },
      note: "The precise menu labels may change. Follow the current live client rather than a beta screenshot.",
    },
    {
      heading: "Party size and matchmaking",
      paragraphs: [
        "Xbox lists online co-op for two to three players and online multiplayer for two to fifteen players in the broader match. Bellring Games describes squad play as a three-player team.",
        "Two friends can form part of the supported co-op range, but the developer said it was not opening a dedicated Duo matchmaking queue in the short term.",
      ],
    },
    {
      heading: "Cross-platform and region checks",
      paragraphs: [
        "Cross-platform matchmaking is officially confirmed. Xbox also lists cross-platform co-op. If an invitation fails across platforms, verify account linking, privacy settings, and region before treating it as a server outage.",
        "Accounts in the named North American storefront regions receive the North American build and can access only North American servers in the US. Friends outside that reachable pool may not be able to join.",
      ],
    },
    {
      heading: "Simple trio role plan",
      bullets: [
        "Assign one player to initiate or hold space.",
        "Assign one player to ranged pressure, control, or scouting.",
        "Assign one player to support, peel, or flexible cleanup.",
        "Call target changes and extraction attempts clearly.",
        "Return teammate equipment when the game system allows it.",
        "Leave together; one extra loot interaction can end the entire run.",
      ],
    },
    {
      heading: "August 6 console friends-list fix",
      paragraphs: [
        "The August 6 update lists a fix for a PS/Xbox issue where the friends list could fail to retrieve friend information and cause the game to crash.",
        "If the same symptom still occurs, update the game through the platform store, restart the client, confirm both players are using the current version, and retry the normal friend-list flow before changing region or network settings. A new reproduction after the patch should be treated as a new issue rather than proof that the older fix never shipped.",
      ],
    },
  ],
  faqs: [
    { question: "How many friends can play together?", answer: "Xbox lists online co-op for two to three players; the standard squad is three." },
    { question: "Can PC and console players group?", answer: "Cross-platform matchmaking is confirmed, and Xbox lists cross-platform co-op." },
    { question: "Why can I not invite a friend?", answer: "Check client versions, account identity, privacy settings, and server-region eligibility first. On PS/Xbox, the August 6 update also listed a fix for a friends-list retrieval issue that could cause a crash, so update and restart before using older workarounds." },
  ],
  related: ["crossplay", "servers", "region-lock", "connection-fix", "classes"],
  sources: [XBOX, STEAM_NEWS],
};

export const gameplayPages: GuidePageData[] = [
  beginner,
  extract,
  character,
  gameplay,
  solo,
  pve,
  crossplay,
  servers,
  regionLock,
  friends,
];
