import type { ClassProfile, GuidePageData } from "@/lib/types";
import { classProfiles } from "./class-profiles";
import { GAMESRADAR, LAUNCH_UPDATE, OFFICIAL_SITE, STEAM, STEAM_NEWS } from "./sources";

const checked = "2026-07-31";
const launchChecked = "2026-08-01";
const classSourceNote =
  "Bellring Games describes two weapon stances and several archetypes for each launch class. Balance changed immediately around launch, so this page avoids fixed damage numbers and treats recommendations as version-sensitive.";

const profiles = classProfiles;

function classPage(profile: ClassProfile): GuidePageData {
  const keyword = `mistfall hunter ${profile.name.toLowerCase()}`;
  return {
    path: `classes/${profile.slug}`,
    category: "Classes",
    eyebrow: "Class guide",
    keyword,
    title: `${profile.name} Guide: Weapons, Builds & Roles`,
    description: `A source-aware ${keyword} guide covering weapons, strengths, solo and team roles, beginner difficulty, build direction, and launch patch context.`,
    h1: `Mistfall Hunter ${profile.name} Guide`,
    answer: `${profile.name} is the game's ${profile.role}. ${profile.solo}`,
    updated: profile.updated ?? checked,
    published: "2026-07-31",
    version: "Launch / Season 1",
    platforms: "PC, PS5, Xbox Series X|S",
    informationType: "Official mechanics with editorial recommendations",
    warning: "Community-recommended setup — not an official build.",
    sections: [
      {
        heading: `${profile.name} role and weapon stances`,
        paragraphs: [
          `${profile.name} uses ${profile.weapons}. The official class breakdown treats each weapon or archetype as a different way to solve positioning, pressure, and survival rather than a fixed equipment database.`,
          classSourceNote,
        ],
      },
      {
        heading: "Main strengths and weaknesses",
        table: {
          headers: ["Strengths", "Trade-offs"],
          rows: profile.strengths.map((strength, index) => [strength, profile.weaknesses[index] ?? profile.weaknesses[0]]),
        },
      },
      {
        heading: "Solo, trio, PvP, and PvE fit",
        paragraphs: [
          `Solo: ${profile.solo}`,
          `Trio: ${profile.team}`,
          "PvE rewards predictable rotations, safe recovery, and avoiding unnecessary equipment risk. PvP demands reserve mobility, awareness of third parties, and a route to disengage. A setup that farms monsters quickly may not be the safest duel setup.",
        ],
      },
      {
        heading: "Beginner-friendly launch setup",
        paragraphs: [profile.setup],
        table: {
          headers: ["Build type", "Recommended mode", "Difficulty", "Game version", "Last checked", "Evidence type"],
          rows: [["Starter archetype", "Learning, PvE, mixed extraction", profile.difficulty, "Launch / Season 1", checked, "Official mechanics + editorial recommendation"]],
        },
        note: "Treat this as a direction for learning the class. Gear affixes, available skills, economy, and balance can change the best exact loadout.",
      },
      {
        heading: "How to pilot the class",
        bullets: [
          "Enter with an extraction plan and enough space to use your preferred weapon.",
          "Keep at least one defensive or movement option for a third-party attack.",
          "Do not chase beyond cover simply because an opponent is low.",
          "Practice the class in lower-risk equipment before committing rare gear.",
          "In trios, announce control effects and target swaps instead of overlapping every cooldown.",
          "Re-evaluate the setup after official balance notes change its core mechanic.",
        ],
      },
      {
        heading: "Current patch impact",
        paragraphs: [profile.patch],
        bullets: profile.patchChanges,
        note: "This summary follows official launch and immediate post-launch notes. It does not convert patch wording into unsupported DPS rankings.",
      },
    ],
    faqs: [
      { question: `Is ${profile.name} good for beginners?`, answer: profile.difficulty },
      { question: `Is ${profile.name} good solo?`, answer: profile.solo },
      { question: `What weapons does ${profile.name} use?`, answer: profile.weapons },
      { question: `What is a safe ${profile.name} build?`, answer: profile.setup },
    ],
    related: [`builds/${profile.slug}`, "classes", "best-class", "best-solo-class", "class-tier-list", "builds"],
    sources: profile.updated === launchChecked ? [LAUNCH_UPDATE, OFFICIAL_SITE] : [STEAM_NEWS, OFFICIAL_SITE],
  };
}

const classPages = profiles.map(classPage);

const classesHub: GuidePageData = {
  path: "classes",
  category: "Classes",
  eyebrow: "Class hub",
  keyword: "mistfall hunter classes",
  title: "Mistfall Hunter Classes: All Six Launch Roles",
  description: "Compare all six Mistfall Hunter classes, their official weapons, solo and trio roles, difficulty, strengths, and current launch balance context.",
  h1: "Mistfall Hunter Classes",
  answer: "Mistfall Hunter launched with six classes: Mercenary, Sorcerer, Blackarrow, Shadowstrix, Seer, and Withered Knight. Each class has distinct weapon stances and can be built for different jobs.",
  updated: checked,
  published: "2026-07-31",
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
  informationType: "Official class overview",
  pickerCta: "Not sure which class fits you? Try the Class Picker.",
  sections: [
    {
      heading: "All Mistfall Hunter classes at a glance",
      table: {
        headers: ["Class", "Core role", "Weapons", "Learning curve"],
        rows: profiles.map((profile) => [profile.name, profile.role, profile.weapons, profile.difficulty]),
      },
    },
    {
      heading: "How class choice works",
      paragraphs: [
        "Class choice decides your weapon families, active skills, talent routes, resource rhythm, and practical battlefield role. It does not reduce every class to one mandatory job: the official breakdown gives several archetypes within most weapons.",
        "Start with the range and commitment level you enjoy. Mercenary offers readable defense, Blackarrow and Sorcerer play around distance, Shadowstrix rewards ambush timing, Seer flexes between support and pressure, and Withered Knight controls space through heavy reach.",
      ],
    },
    {
      heading: "Choosing for solo or a three-player squad",
      paragraphs: [
        "Solo mode values self-sufficiency, safe PvE clearing, reliable extraction tools, and the ability to leave an unfavorable fight. Trio play raises the value of healing, shielding, coordinated control, frontline pressure, and focus fire.",
        "The official team balances Solo and Trio separately. That is a good reason to avoid a single universal ranking: the strongest choice depends on mode, map, equipment risk, and current patch.",
      ],
    },
    {
      heading: "Current launch balance context",
      paragraphs: [
        "Official pre-launch data described Blackarrow as overtuned in parts of solo play, while immediate launch tuning also touched Shadowstrix control, Seer mobility, Withered Knight, Mercenary, and Sorcerer. These changes make old beta tier lists unreliable.",
        "Use the class pages below for role and build direction, then check official patch notes before copying an exact loadout.",
      ],
    },
  ],
  faqs: [
    { question: "How many Mistfall Hunter classes are there?", answer: "Six at launch." },
    { question: "Can a squad use duplicate classes?", answer: "The developer said identical classes were not restricted around launch." },
    { question: "Which class is best?", answer: "There is no official best class. Mode, patch, player execution, and equipment all change the answer." },
    { question: "Can I change builds?", answer: "Yes. Skills, talents, weapons, and affix gems support multiple directions within a class." },
  ],
  related: ["best-class", "best-solo-class", "class-tier-list", "builds", "weapons", ...profiles.map((profile) => `classes/${profile.slug}`)],
  sources: [STEAM_NEWS, OFFICIAL_SITE],
};

const bestClass: GuidePageData = {
  path: "best-class",
  category: "Classes",
  eyebrow: "Class comparison",
  keyword: "mistfall hunter best class",
  title: "Mistfall Hunter Best Class: Choose by Role",
  description: "Find the Mistfall Hunter best class for learning, ranged pressure, support, ambushes, frontline play, and solo without treating a live-game tier as permanent.",
  h1: "Mistfall Hunter Best Class",
  answer: "There is no official best class. Mercenary is the safest learning recommendation, Blackarrow is a strong ranged solo option, Seer brings the clearest team support, and every class has a usable role.",
  updated: checked,
  published: "2026-07-31",
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
  informationType: "Editorial comparison based on official mechanics",
  warning: "Role-based recommendation — not an official ranking.",
  sections: [
    {
      heading: "Best class recommendations by goal",
      table: {
        headers: ["Goal", "Recommendation", "Why", "Important trade-off"],
        rows: [
          ["Learning fundamentals", "Mercenary", "Blocking, parry routes, and durable melee", "Must commit at close range"],
          ["Ranged solo play", "Blackarrow", "Scouting and pressure from distance", "Aim and escape routing are essential"],
          ["Team support", "Seer", "Healing, shielding, buffs, and peel", "Support value depends on team coordination"],
          ["Ambush play", "Shadowstrix", "Stealth, mobility, and backline threat", "High execution and low error margin"],
          ["Area magic", "Sorcerer", "Elemental and Stardust control", "Casting windows can be punished"],
          ["Heavy control", "Withered Knight", "Reach, pulls, sigils, and shield utility", "Slow attacks demand prediction"],
        ],
      },
    },
    {
      heading: "Why a universal winner would be misleading",
      paragraphs: [
        "Mistfall Hunter combines PvE clearing, PvP, extraction risk, solo matchmaking, and trio coordination. A class can excel at one job and still be less comfortable in another. Gear quality and affix choices also change how forgiving an archetype feels.",
        "Bellring Games said it evaluates Solo and Trio separately and uses live combat data for balance. A snapshot based on launch-week performance can change after a small skill, movement, or crowd-control adjustment.",
      ],
    },
    {
      heading: "A practical selection test",
      bullets: [
        "Pick Mercenary if you want clear defense and a frontline role.",
        "Pick Sorcerer if you prefer aimed magic and area control.",
        "Pick Blackarrow if you want ranged scouting and bow pressure.",
        "Pick Shadowstrix if you enjoy stealth, target selection, and mobility.",
        "Pick Seer if you want to protect teammates without giving up offensive routes.",
        "Pick Withered Knight if deliberate heavy attacks and formation control feel natural.",
      ],
    },
  ],
  faqs: [
    { question: "What is the best beginner class?", answer: "Mercenary is our safest beginner recommendation, not an official designation." },
    { question: "What is the best class for a trio?", answer: "Seer is valuable for direct support, while Mercenary or Withered Knight can anchor space. Team composition matters more than one pick." },
    { question: "Did the developer publish a tier list?", answer: "No. There is no official class tier list." },
  ],
  related: ["classes", "best-solo-class", "class-tier-list", "builds"],
  sources: [STEAM_NEWS, GAMESRADAR],
};

const bestSolo: GuidePageData = {
  path: "best-solo-class",
  category: "Classes",
  eyebrow: "Solo recommendation",
  keyword: "mistfall hunter best solo class",
  title: "Mistfall Hunter Best Solo Class at Launch",
  description: "Compare the Mistfall Hunter best solo class choices by safety, range, PvE clearing, disengage tools, execution, and launch balance evidence.",
  h1: "Mistfall Hunter Best Solo Class",
  answer: "Blackarrow is our launch-week ranged solo recommendation for confident aimers; Mercenary is the safer beginner solo choice. This is an editorial judgment, not an official tier.",
  updated: checked,
  published: "2026-07-31",
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
  informationType: "Community-aware editorial recommendation",
  warning: "Community-recommended — not an official build or ranking.",
  sections: [
    {
      heading: "Best solo class shortlist",
      table: {
        headers: ["Player need", "Class", "Reason", "Watch for"],
        rows: [
          ["Ranged control", "Blackarrow", "Scouts and pressures from range", "Launch nerfs and close-range danger"],
          ["Safer learning", "Mercenary", "Defense and steady PvE tools", "Limited chase and disengage"],
          ["High-skill ambush", "Shadowstrix", "Chooses engagements well", "Punishing if the exit fails"],
          ["Flexible sustain", "Seer", "Offense plus protective options", "Some tools pay more in trios"],
        ],
      },
    },
    {
      heading: "What actually wins solo extractions",
      paragraphs: [
        "Class strength is only one input. Route knowledge, bringing an affordable kit, stopping a chase early, tracking extraction requirements, and avoiding third-party fights often matter more than theoretical duel strength.",
        "Official notes said Blackarrow overperformed in parts of solo mode before launch and was adjusted. That supports its solo potential but also warns against copying beta conclusions without reading the current patch.",
      ],
    },
    {
      heading: "Solo setup checklist",
      bullets: [
        "Use a kit you can afford to lose while learning the map.",
        "Carry a response for melee pressure and one way to break line of sight.",
        "Leave enough inventory space for the run's objective.",
        "Set an extraction threshold before greed takes over.",
        "Avoid fighting at the edge of your healing and consumable supply.",
        "Re-check balance notes when a class's mobility or control changes.",
      ],
    },
  ],
  faqs: [
    { question: "Is Blackarrow officially the best solo class?", answer: "No. It is our launch recommendation based on range and official solo-balance comments." },
    { question: "Is Mercenary viable solo?", answer: "Yes. It is a practical beginner option, especially when defense is more valuable to you than mobility." },
    { question: "Does solo mean PvE only?", answer: "No. Solo is still part of a PvPvE extraction game." },
  ],
  related: ["solo-mode", "classes", "best-class", "class-tier-list", "builds"],
  sources: [STEAM_NEWS, GAMESRADAR],
};

const tierList: GuidePageData = {
  path: "class-tier-list",
  category: "Classes",
  eyebrow: "Launch snapshot",
  keyword: "mistfall hunter class tier list",
  title: "Mistfall Hunter Class Tier List: Launch Snapshot",
  description: "A cautious Mistfall Hunter class tier list organized by use case, with official launch balance context and no invented damage or extraction statistics.",
  h1: "Mistfall Hunter Class Tier List",
  answer: "This is a role-based launch snapshot, not an official tier list. Blackarrow stands out for ranged solo play, Seer for direct team support, and Mercenary for learning; the other classes reward more specialized execution.",
  updated: checked,
  published: "2026-07-31",
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
  informationType: "Editorial tier framework",
  warning: "Not an official tier list. No unsupported DPS or extraction-rate claims.",
  sections: [
    {
      heading: "Mistfall Hunter class tier list by practical role",
      table: {
        headers: ["Use case", "Leading choices", "Competitive alternatives", "Evidence limit"],
        rows: [
          ["Beginner learning", "Mercenary", "Seer, Withered Knight", "Ease is editorial, not a developer label"],
          ["Solo ranged pressure", "Blackarrow", "Sorcerer", "Blackarrow received launch solo tuning"],
          ["Trio support", "Seer", "Withered Knight, Mercenary", "Role value depends on composition"],
          ["Ambush and cleanup", "Shadowstrix", "Blackarrow", "High execution; launch CC was reduced"],
          ["Area control", "Sorcerer", "Seer, Withered Knight", "No normalized damage test is claimed"],
        ],
      },
    },
    {
      heading: "How to read this tier framework",
      paragraphs: [
        "The table groups classes by the job they perform well rather than forcing every mode into a single S-to-D ladder. A class listed as a competitive alternative can be the better choice for an experienced specialist or a particular trio.",
        "No official source publishes a complete ranking. Bellring Games instead discusses weapon archetypes, live data, and targeted adjustments. This page therefore avoids fabricated win rates, DPS, extraction rates, or universal matchup claims.",
      ],
      subsections: [
        {
          heading: "Compare classes within one mode",
          paragraphs: ["Solo survival, trio coordination, PvE clearing, and contested extraction reward different strengths. Read each recommendation in the mode named by the table instead of treating it as a universal rank."],
        },
        {
          heading: "Separate role value from raw damage",
          paragraphs: ["Control, protection, reach, and a reliable disengage can decide a run without producing the largest visible hit. The framework values whether a class completes its job consistently, not an unverified damage total."],
        },
      ],
    },
    {
      heading: "Patch changes that can move the order",
      paragraphs: [
        "Launch notes adjusted Blackarrow solo pressure, Shadowstrix mobility and control, Seer Catalyst damage and Mace escape, Sorcerer Stardust, Mercenary PvE performance, and Withered Knight weapon feel. Even a small change to mobility or control can be more important than a raw damage change in an extraction match.",
        "Treat the list as a starting point for choosing a role. Verify the current official patch, then test the class with low-risk equipment before investing in a build.",
      ],
    },
  ],
  faqs: [
    { question: "Is this an official tier list?", answer: "No. Bellring Games has not published an official class tier list." },
    { question: "Why are there no DPS numbers?", answer: "Reliable normalized launch testing is not available here, and inventing numbers would mislead readers." },
    { question: "Which class is lowest tier?", answer: "We do not label any class as unusable. Each has an official role and is subject to live balance changes." },
  ],
  related: ["classes", "best-class", "best-solo-class", "builds"],
  sources: [STEAM_NEWS, STEAM],
};

const builds: GuidePageData = {
  path: "builds",
  category: "Builds",
  eyebrow: "Build hub",
  keyword: "mistfall hunter builds",
  title: "Mistfall Hunter Builds: Six Class Directions",
  description: "Choose Mistfall Hunter builds by mode, weapon, skills, talents, gear risk, and evidence. Includes a launch direction for all six classes without fake stats.",
  h1: "Mistfall Hunter Builds",
  answer: "A useful build starts with mode and weapon role, then aligns skills, talents, gear, and affix gems around one repeatable plan. Launch balance is moving, so these are directions rather than guaranteed best loadouts.",
  updated: checked,
  published: "2026-07-31",
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
  informationType: "Official mechanics with community-style recommendations",
  warning: "Community-recommended directions — not official builds.",
  pickerCta: "Find a build by playstyle with the Class Picker.",
  buildCards: profiles.map((profile) => ({
    name: profile.name,
    routes: `${profile.startingRoute} / ${profile.alternateRoute}`,
    bestFor: profile.soloFit >= profile.trioFit ? "Solo and flexible play" : "Trio and coordinated play",
    difficulty: profile.difficulty,
    href: profile.buildPath,
  })),
  sections: [
    {
      heading: "Mistfall Hunter builds for every class",
      table: {
        headers: ["Class", "Beginner direction", "Solo direction", "Trio direction"],
        rows: [
          ["Mercenary", "Balanced Sword & Shield", "Defensive pursuit", "Shield control or Hammer disruption"],
          ["Sorcerer", "Elemental reactions", "Mobile ranged control", "Protected Stardust pressure"],
          ["Blackarrow", "Sustained Archer", "Ranged scouting and burst", "Hunter ailments and focus fire"],
          ["Shadowstrix", "Measured Dual Blades", "Stealth ambush", "Backline burst and cleanup"],
          ["Seer", "Offensive Catalyst", "Hybrid sustain", "Support Catalyst or control Mace"],
          ["Withered Knight", "Greatsword sigils", "Reach and detonation", "Polearm & Shield utility"],
        ],
      },
    },
    {
      heading: "Build selection principles",
      paragraphs: [
        "Define the job first: safe PvE clearing, solo survival, PvP burst, trio support, or extraction consistency. Pick a weapon archetype that serves that job, then choose skills that share the same range, resource rhythm, and engagement plan.",
        "Avoid mixing every attractive effect. A coherent build normally has a way to start a fight, create pressure, survive the response, and disengage or finish. If one of those steps is missing, equipment rarity will not solve the structural weakness.",
      ],
      subsections: [
        {
          heading: "Define the build's job",
          paragraphs: ["Name the result the build must deliver: safe clearing, solo survival, burst pressure, support, or consistent extraction. Every later choice should make that job easier to repeat."],
        },
        {
          heading: "Check the defensive answer",
          paragraphs: ["Identify what happens when the first attack fails. A practical setup needs healing, protection, control, movement, or another supported way to survive the opponent's response."],
        },
        {
          heading: "Plan the disengage",
          paragraphs: ["Reserve a route or ability for leaving a bad fight. A build that can engage but cannot reset may win isolated exchanges and still lose the extraction run."],
        },
      ],
    },
    {
      heading: "Skills, talents, gear, and affix gems",
      paragraphs: [
        "Official developer notes describe gear with limited inherent affixes and a large role for socketed Affix Gems. That makes the build a relationship between weapon stance, talents, skills, sockets, and the equipment you can realistically replace.",
        "Do not judge an affix in isolation. Prefer effects that reinforce your primary actions and can be used consistently in the intended mode. A rare effect that only triggers in an unlikely situation may contribute less than a reliable defensive or resource option.",
        "The Loadout System supports saving multiple equipment configurations, and a Loadout Share Code can import a complete equipment and Affix Gem setup. Share codes reproduce configuration data only; they are not reward codes and do not grant items, currency, or cosmetics.",
        "Build recommendations are version-sensitive. Official class mechanics are separated from editorial recommendations, and exact loadouts should be rechecked after balance updates.",
      ],
    },
    {
      heading: "Evidence label for every recommendation",
      table: {
        headers: ["Build type", "Recommended mode", "Difficulty", "Game version", "Last checked", "Evidence type"],
        rows: profiles.map((profile) => [profile.name + " starter", "Mixed / learning", profile.difficulty, "Launch / Season 1", checked, "Official mechanics + editorial recommendation"]),
      },
      note: "Exact equipment and talent selections belong on the class pages and should be rechecked after balance updates.",
    },
  ],
  faqs: [
    { question: "Does Mistfall Hunter have build share codes?", answer: "Official developer notes describe a Loadout System that can generate and import build share codes." },
    { question: "What is the best build?", answer: "No single setup is best for every mode, patch, equipment budget, and player." },
    { question: "Are these official builds?", answer: "No. They organize official mechanics into editorial learning recommendations." },
  ],
  related: ["classes", "weapons", ...profiles.map((profile) => `builds/${profile.slug}`), ...profiles.map((profile) => `classes/${profile.slug}`)],
  sources: [STEAM_NEWS, STEAM],
};

export const classGuidePages: GuidePageData[] = [
  classesHub,
  bestClass,
  bestSolo,
  tierList,
  builds,
  ...classPages,
];
