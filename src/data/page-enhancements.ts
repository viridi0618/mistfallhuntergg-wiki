import type { ContentImage, GuidePageData, GuideSection } from "@/lib/types";
import {
  COMMUNITY_AMA,
  DEVNOTE_7,
  KNOWN_ISSUES_OFFICIAL,
  LAUNCH_FAQ,
  LAUNCH_UPDATE,
  OFFICIAL_SITE,
} from "./sources";

const OFFICIAL_SITE_URL = "https://mistfallhunter.com/";
const STEAM_STORE_URL = "https://store.steampowered.com/app/3282300/Mistfall_Hunter/";
const XBOX_STORE_URL = "https://www.xbox.com/en-US/games/store/mistfall-hunter/9p8x6tvw9zw8";

type ImageInfo = Omit<ContentImage, "placementAfterHeading">;

const imageInfo: Record<string, ImageInfo> = {
  "site-01": { src: "/images/official/site-01.webp", alt: "Ruined city beneath the spreading golden Gyldenmist", caption: "The Gyldenmist consumes a ruined city in official key art.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-02": { src: "/images/official/site-02.webp", alt: "Dew standing in the flower-covered refuge at Windrest", caption: "Dew, the immortal maiden, in official character art.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-03": { src: "/images/official/site-03.webp", alt: "Three Gyldhunters fighting Corroded creatures in a cavern", caption: "A squad fights through a cavern in an official gameplay image.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-04": { src: "/images/official/site-04.webp", alt: "Armored Gyldhunter confronting a glowing spectral enemy", caption: "A close-range encounter shown in official combat art.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-05": { src: "/images/official/site-05.webp", alt: "Gyldhunters examining loot and equipment in a dark chamber", caption: "Loot decisions remain part of every high-risk hunt.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-06": { src: "/images/official/site-06.webp", alt: "Gyldhunter raising a hand toward a circular return effect", caption: "Official extraction-themed art showing a return effect.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-07": { src: "/images/official/site-07.webp", alt: "Distant fortress beneath a turbulent gold and black sky", caption: "Weavereach under the Gyldenmist in official landscape art.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-08": { src: "/images/official/site-08.webp", alt: "Hunters crossing a desolate battlefield filled with giant roots", caption: "A hostile route through the ruined world of Weavereach.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-09": { src: "/images/official/site-09.webp", alt: "Corroded monster emerging from a forest floor", caption: "A Corroded creature shown in official monster art.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-10": { src: "/images/official/site-10.webp", alt: "Ancient tower rising above a green valley", caption: "One of the official Weavereach environment concepts.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-11": { src: "/images/official/site-11.webp", alt: "Red-lit ruined fortress and scorched battlements", caption: "A dangerous red-lit zone in official environment art.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-12": { src: "/images/official/site-12.webp", alt: "Hunters crossing a foggy settlement near a burning structure", caption: "A squad route through a fog-covered settlement.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-13": { src: "/images/official/site-13.webp", alt: "Hunter approaching a ruined gate lit by red fires", caption: "A narrow approach where route awareness matters.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-14": { src: "/images/official/site-14.webp", alt: "Three hunters exploring a blue-lit underground cavern", caption: "A squad moving through an underground route.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-15": { src: "/images/official/site-15.webp", alt: "Lone hunter facing a bright opening inside a cavern", caption: "A solo hunter approaches an exposed transition.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-16": { src: "/images/official/site-16.webp", alt: "Hunter walking through a cavern filled with purple crystal growth", caption: "A Gyldhunter explores a corrupted crystal cavern.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-17": { src: "/images/official/site-17.webp", alt: "Hunter entering a torch-lit stone hall", caption: "A confined interior route from official environment art.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-18": { src: "/images/official/site-18.webp", alt: "Hunter beneath wooden ruins in a blue-green cavern", caption: "Vertical terrain and narrow sightlines shape this official environment.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-19": { src: "/images/official/site-19.webp", alt: "Squad moving through a ruined hall lit from above", caption: "A three-player team advances through a ruined interior.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "site-20": { src: "/images/official/site-20.webp", alt: "Hunters beneath a massive root in a red-lit cavern", caption: "A dangerous cavern route shown in official environment art.", sourceLabel: "Official Mistfall Hunter website", sourceUrl: OFFICIAL_SITE_URL, width: 1600, height: 900 },
  "steam-01": { src: "/images/official/steam-01.webp", alt: "Withered Knight holding a greatsword near a white tree", caption: "Withered Knight appears in an official Steam screenshot.", sourceLabel: "Official Steam store", sourceUrl: STEAM_STORE_URL, width: 1600, height: 900 },
  "steam-02": { src: "/images/official/steam-02.webp", alt: "Hunter opening a glowing treasure chest", caption: "A loot chest in an official Steam gameplay screenshot.", sourceLabel: "Official Steam store", sourceUrl: STEAM_STORE_URL, width: 1600, height: 900 },
  "steam-03": { src: "/images/official/steam-03.webp", alt: "Armored melee hunter attacking beside an ally", caption: "Close-range class combat from the official Steam gallery.", sourceLabel: "Official Steam store", sourceUrl: STEAM_STORE_URL, width: 1600, height: 900 },
  "steam-04": { src: "/images/official/steam-04.webp", alt: "Three hunters facing a giant spectral creature", caption: "A trio confronts a large PvE threat in an official screenshot.", sourceLabel: "Official Steam store", sourceUrl: STEAM_STORE_URL, width: 1600, height: 900 },
  "steam-05": { src: "/images/official/steam-05.webp", alt: "Spellcaster directing a circular golden effect toward an enemy", caption: "Ranged magic in an official Steam combat screenshot.", sourceLabel: "Official Steam store", sourceUrl: STEAM_STORE_URL, width: 1600, height: 900 },
  "steam-06": { src: "/images/official/steam-06.webp", alt: "Mistfall Hunter talent interface with connected upgrade nodes", caption: "The official Steam gallery shows a class talent interface.", sourceLabel: "Official Steam store", sourceUrl: STEAM_STORE_URL, width: 1600, height: 900 },
  "steam-07": { src: "/images/official/steam-07.webp", alt: "Six Mistfall Hunter classes posed together", caption: "The six launch classes in official promotional art.", sourceLabel: "Official Steam store", sourceUrl: STEAM_STORE_URL, width: 1600, height: 900 },
  "steam-08": { src: "/images/official/steam-08.webp", alt: "Hunter facing a towering luminous boss", caption: "A large PvE encounter from the official Steam gallery.", sourceLabel: "Official Steam store", sourceUrl: STEAM_STORE_URL, width: 1600, height: 900 },
  "steam-09": { src: "/images/official/steam-09.webp", alt: "Melee hunter fighting winged and armored enemies", caption: "A multi-enemy combat scene from the official Steam gallery.", sourceLabel: "Official Steam store", sourceUrl: STEAM_STORE_URL, width: 1600, height: 900 },
  "steam-10": { src: "/images/official/steam-10.webp", alt: "Hooded agile hunter moving through a dark battlefield", caption: "A mobile ambush scene from the official Steam gallery.", sourceLabel: "Official Steam store", sourceUrl: STEAM_STORE_URL, width: 1600, height: 900 },
  "steam-11": { src: "/images/official/steam-11.webp", alt: "Hunter fighting a large enemy in a misty forest", caption: "A forest combat encounter from the official Steam gallery.", sourceLabel: "Official Steam store", sourceUrl: STEAM_STORE_URL, width: 1600, height: 900 },
  "xbox-cover": { src: "/images/official/xbox-cover.webp", alt: "Mistfall Hunter official Xbox cover with three Gyldhunters", caption: "Official Mistfall Hunter cover art from the Xbox store.", sourceLabel: "Official Xbox store", sourceUrl: XBOX_STORE_URL, width: 683, height: 1024 },
};

const coreHero: Record<string, string> = {
  "beginner-guide": "site-02",
  "how-to-extract": "site-06",
  classes: "steam-07",
  "best-class": "steam-03",
  "best-solo-class": "site-15",
  "class-tier-list": "steam-06",
  builds: "steam-02",
  gameplay: "site-03",
  "solo-mode": "site-16",
  "pve-only": "steam-08",
  crossplay: "steam-04",
  servers: "site-10",
  "region-lock": "site-01",
  "play-with-friends": "site-19",
  "best-settings": "site-14",
  "controller-guide": "steam-09",
  "fatal-error-fix": "site-11",
  "stuttering-fix": "site-18",
  "crashing-fix": "site-13",
  "connection-fix": "site-12",
  "known-issues": "site-20",
  "patch-notes": "site-07",
  review: "steam-11",
  guides: "site-08",
  multiplayer: "site-17",
  "settings-fixes": "site-14",
  rewards: "site-05",
  updates: "site-11",
};

const normalHero: Record<string, string> = {
  "character-creation": "steam-07",
  "classes/mercenary": "steam-03",
  "classes/sorcerer": "steam-05",
  "classes/blackarrow": "steam-11",
  "classes/shadowstrix": "steam-10",
  "classes/seer": "site-04",
  "classes/withered-knight": "steam-01",
  "builds/mercenary": "steam-03",
  "builds/sorcerer": "steam-05",
  "builds/blackarrow": "steam-11",
  "builds/shadowstrix": "steam-10",
  "builds/seer": "site-04",
  "builds/withered-knight": "steam-01",
  "class-picker": "steam-07",
  weapons: "steam-03",
  "game-pass": "xbox-cover",
  "battle-pass": "steam-02",
  fov: "site-15",
  codes: "site-05",
  "twitch-drops": "steam-04",
  "launch-rewards": "steam-02",
  skins: "xbox-cover",
  price: "xbox-cover",
  platforms: "site-07",
  "system-requirements": "site-18",
};

const explicitContent: Record<string, string[]> = {
  "beginner-guide": ["site-05", "steam-02", "site-03"],
  "how-to-extract": ["site-05", "site-15", "steam-04"],
  classes: ["steam-06", "steam-03", "steam-05"],
  "class-tier-list": ["steam-07", "steam-03", "steam-05"],
  builds: ["steam-06", "steam-07", "steam-04"],
  servers: ["site-12", "site-07", "site-19"],
  "region-lock": ["site-07", "site-12", "site-19"],
  "classes/mercenary": ["steam-06", "steam-09"],
  "classes/sorcerer": ["steam-06", "steam-04"],
  "classes/blackarrow": ["steam-06", "steam-07"],
  "classes/shadowstrix": ["steam-06", "site-03"],
  "classes/seer": ["steam-05", "steam-06"],
  "classes/withered-knight": ["steam-06", "steam-08"],
  "builds/mercenary": ["steam-06", "steam-09"],
  "builds/sorcerer": ["steam-06", "steam-04"],
  "builds/blackarrow": ["steam-06", "steam-07"],
  "builds/shadowstrix": ["steam-06", "site-03"],
  "builds/seer": ["steam-05", "steam-06"],
  "builds/withered-knight": ["steam-06", "steam-08"],
  "class-picker": ["steam-06"],
  "game-pass": ["site-07"],
  "battle-pass": ["site-05"],
};

type ExplicitImageAssignment = {
  key: string;
  heading: string;
  caption: string;
};

const explicitImageAssignments: Record<string, ExplicitImageAssignment[]> = {
  "best-settings": [
    { key: "steam-04", heading: "Build a stable baseline before increasing quality", caption: "Use the same demanding combat scene when comparing a stable baseline with higher visual settings." },
  ],
  fov: [
    { key: "site-17", heading: "Safe camera and comfort adjustments", caption: "Compare camera comfort in both open and confined scenes before keeping an adjustment." },
  ],
  "controller-guide": [
    { key: "steam-06", heading: "Controller symptom matrix", caption: "Menu navigation and combat input should be tested separately because they can fail at different stages." },
  ],
  "fatal-error-fix": [
    { key: "site-17", heading: "Classify the fatal error by stage", caption: "Record whether the failure occurs at launch, during loading, or only after entering a playable area." },
  ],
  "stuttering-fix": [
    { key: "steam-04", heading: "Run a repeatable frame-pacing test", caption: "Repeat one combat workload when checking whether a frame-pacing change actually helped." },
  ],
  "crashing-fix": [
    { key: "steam-06", heading: "Crash type changes the first test", caption: "Separate interface crashes from loading and in-match crashes before choosing a troubleshooting path." },
  ],
  "connection-fix": [
    { key: "site-19", heading: "Use a two-account comparison when possible", caption: "A two-account party test helps separate one account or network problem from a wider service incident." },
  ],
  servers: [
    { key: "site-12", heading: "Account region, server region, and physical location", caption: "Server eligibility and physical distance are separate factors when diagnosing connection quality." },
  ],
  "region-lock": [
    { key: "xbox-cover", heading: "Store region versus server region", caption: "Start with the storefront account and game build before treating a join failure as a network problem." },
  ],
  crossplay: [
    { key: "xbox-cover", heading: "Platform-by-platform preparation", caption: "Cross-platform matchmaking still depends on supported platforms, current clients, and compatible account regions." },
  ],
  "known-issues": [
    { key: "steam-06", heading: "How to confirm your current status", caption: "Recheck the exact interface or gameplay stage named in an issue after the relevant update is installed." },
  ],
  "patch-notes": [
    { key: "steam-03", heading: "Guide areas affected by a patch", caption: "Combat changes should be retested in the class and build guidance they affect." },
  ],
  review: [
    { key: "site-05", heading: "A practical fit test before buying", caption: "Combat, loot decisions, and extraction risk should all be part of a practical fit assessment." },
  ],
  "solo-mode": [
    { key: "site-15", heading: "Build a solo route with three exits", caption: "A solo route needs a retreat, a covered reset, and a return direction rather than a promised safe corridor." },
  ],
  "pve-only": [
    { key: "site-09", heading: "What official PvE language does and does not promise", caption: "Official monster encounters confirm PvE content, but do not by themselves confirm a separate PvE-only queue." },
  ],
};

const explicitHeroCaptions: Record<string, string> = {
  "best-settings": "An official gameplay environment suitable for building a repeatable visual-performance test.",
  fov: "A centered solo scene useful for discussing camera framing without claiming an unsupported FOV value.",
  "controller-guide": "A movement-heavy official combat scene relevant to checking controller input and camera response.",
  "fatal-error-fix": "An official gameplay environment; the guide separates launch, loading, and in-match failure stages.",
  "stuttering-fix": "An official traversal scene relevant to repeatable frame-pacing comparisons.",
  "crashing-fix": "An official transition scene; crash diagnosis begins by recording the exact failure stage.",
  "connection-fix": "A squad route in official art, relevant to party and connection troubleshooting.",
  servers: "An official Weavereach environment; server eligibility and physical distance are evaluated separately.",
  "region-lock": "Official key art used alongside account-region and storefront eligibility guidance.",
  crossplay: "An official three-player encounter supporting the guide's platform and party checklist.",
  "known-issues": "An official gameplay scene; issue status must be checked against the named client update.",
  "patch-notes": "Official environment art introducing a dated digest of published game changes.",
  review: "An official combat image used to frame the guide's source-aware launch assessment.",
  "solo-mode": "An official solo traversal scene relevant to route and disengagement planning.",
  "pve-only": "An official large-enemy encounter that confirms PvE content, not a separate PvE-only queue.",
  weapons: "Official combat art used alongside the hub that explains each class's launch weapon families.",
};

const categoryByPath: Record<string, { label: string; path: string }> = {
  "beginner-guide": { label: "Guides", path: "guides" },
  "how-to-extract": { label: "Guides", path: "guides" },
  "character-creation": { label: "Guides", path: "guides" },
  price: { label: "Guides", path: "guides" },
  platforms: { label: "Guides", path: "guides" },
  review: { label: "Guides", path: "guides" },
  classes: { label: "Classes", path: "classes" },
  "best-class": { label: "Classes", path: "classes" },
  "best-solo-class": { label: "Classes", path: "classes" },
  "class-tier-list": { label: "Classes", path: "classes" },
  builds: { label: "Builds", path: "builds" },
  "class-picker": { label: "Guides", path: "guides" },
  "game-pass": { label: "Guides", path: "guides" },
  gameplay: { label: "Gameplay", path: "gameplay" },
  "solo-mode": { label: "Multiplayer", path: "multiplayer" },
  "pve-only": { label: "Multiplayer", path: "multiplayer" },
  crossplay: { label: "Multiplayer", path: "multiplayer" },
  servers: { label: "Multiplayer", path: "multiplayer" },
  "region-lock": { label: "Multiplayer", path: "multiplayer" },
  "play-with-friends": { label: "Multiplayer", path: "multiplayer" },
  fov: { label: "Settings & Fixes", path: "settings-fixes" },
  "best-settings": { label: "Settings & Fixes", path: "settings-fixes" },
  "controller-guide": { label: "Settings & Fixes", path: "settings-fixes" },
  "fatal-error-fix": { label: "Settings & Fixes", path: "settings-fixes" },
  "stuttering-fix": { label: "Settings & Fixes", path: "settings-fixes" },
  "crashing-fix": { label: "Settings & Fixes", path: "settings-fixes" },
  "connection-fix": { label: "Settings & Fixes", path: "settings-fixes" },
  "system-requirements": { label: "Settings & Fixes", path: "settings-fixes" },
  codes: { label: "Rewards", path: "rewards" },
  "twitch-drops": { label: "Rewards", path: "rewards" },
  "launch-rewards": { label: "Rewards", path: "rewards" },
  skins: { label: "Rewards", path: "rewards" },
  "battle-pass": { label: "Rewards", path: "rewards" },
  "known-issues": { label: "Updates", path: "updates" },
  "patch-notes": { label: "Updates", path: "updates" },
};

for (const slug of ["mercenary", "sorcerer", "blackarrow", "shadowstrix", "seer", "withered-knight"]) {
  categoryByPath[`classes/${slug}`] = { label: "Classes", path: "classes" };
  categoryByPath[`builds/${slug}`] = { label: "Builds", path: "builds" };
}

const corePaths = new Set(Object.keys(coreHero));
const imageKeys = Object.keys(imageInfo);

function contentImage(key: string, placementAfterHeading: string): ContentImage {
  return { ...imageInfo[key], placementAfterHeading };
}

const commonPractical: Record<string, GuideSection[]> = {
  "privacy-policy": [
    {
      heading: "Embedded YouTube videos",
      paragraphs: [
        "Embedded YouTube videos use YouTube's privacy-enhanced embedding domain. The initial page loads local thumbnail images and does not request the YouTube player until a visitor chooses to play a video.",
        "YouTube may still process device, network, and interaction data when a visitor loads or plays a video. The ordinary YouTube link is also available, and YouTube's own privacy terms apply after the player or external page is opened.",
      ],
    },
  ],
  "best-class": [
    {
      heading: "Best class by player goal",
      table: {
        headers: ["Goal", "First recommendation", "Alternative", "Decision rule"],
        rows: [
          ["Beginner", "Mercenary", "Seer", "Choose readable defense or a flexible hybrid"],
          ["Solo", "Blackarrow", "Mercenary", "Choose range if aim is reliable; defense if it is not"],
          ["Trio", "Seer", "Mercenary", "Add support or a stable frontline to the group"],
          ["PvP ambush", "Shadowstrix", "Blackarrow", "Choose stealth commitment or ranged angle control"],
          ["PvE clearing", "Sorcerer", "Mercenary", "Choose area pressure or durable melee grouping"],
          ["Ranged", "Blackarrow", "Sorcerer", "Choose precision shots or magical area control"],
          ["Melee", "Mercenary", "Withered Knight", "Choose faster defense or slower reach and control"],
          ["Support", "Seer", "Withered Knight", "Choose direct protection or formation utility"],
        ],
      },
    },
    {
      heading: "Six-class comparison",
      paragraphs: [
        "Mercenary provides the clearest defensive feedback. Sorcerer rewards planned casting lanes. Blackarrow rewards aim and distance. Shadowstrix rewards target selection and exit discipline. Seer turns protection and control into team advantage. Withered Knight rewards prediction, reach, and formation control.",
        "The best choice is the one whose failure you can diagnose. If a class loses because you cannot maintain its required range, resource loop, or commitment timing, another class may teach the game faster even if a tier list ranks it lower.",
      ],
    },
    {
      heading: "A two-minute class decision flow",
      bullets: [
        "Want a shield and readable defense? Start with Mercenary.",
        "Want magic and area control from range? Try Sorcerer.",
        "Want precision pressure and scouting? Try Blackarrow.",
        "Want stealth and high-risk engagement choice? Try Shadowstrix.",
        "Want healing, shielding, control, or hybrid play? Try Seer.",
        "Want heavy reach, pulls, sigils, and shield utility? Try Withered Knight.",
      ],
    },
    {
      heading: "If you chose the wrong class",
      paragraphs: [
        "Do not immediately discard the class after one expensive loss. Run a replaceable setup and test its basic range, defense, resource loop, and exit separately. If the weapon rhythm still feels unnatural after several low-risk runs, move to the class that solves the specific friction.",
        "Best Class is a role-matching guide. The Tier List page is different: it scores the classes against defined launch-week modes. Neither page can replace current patch notes or personal execution.",
      ],
    },
  ],
  "best-solo-class": [
    {
      heading: "Solo decision test",
      table: {
        headers: ["Question", "If yes", "If no"],
        rows: [
          ["Can you consistently aim while retreating?", "Blackarrow is a strong first test", "Use Mercenary for clearer defense"],
          ["Do you enjoy choosing ambushes and abandoning bad ones?", "Try Shadowstrix", "Prefer a steadier class"],
          ["Can you protect long casting windows alone?", "Sorcerer can control PvE and space", "Choose shorter commitments"],
          ["Do you want sustain more than raw pressure?", "Try an offensive Seer route", "Avoid a support-heavy solo setup"],
        ],
      },
    },
    {
      heading: "What to do when the solo pick feels weak",
      paragraphs: [
        "Check whether the problem is class identity or setup mismatch. A ranged class trapped in corridors, a heavy class chasing open ground, or a support route with no solo damage loop can all feel weaker than the class actually is.",
        "Change one part of the plan: route, engagement range, defensive reserve, or extraction threshold. Only switch classes after the same failure repeats in replaceable gear.",
      ],
    },
  ],
  gameplay: [
    {
      heading: "A repeatable hunt decision loop",
      paragraphs: [
        "Before entering a new room, pause long enough to answer four questions: what can see you, where can you retreat, which cooldown starts the fight, and what ends the fight if another player arrives. The goal is not slow play; it is to avoid beginning an encounter without an exit.",
        "After the fight, perform a fast reset: heal only what is necessary, reload or restore the class resource, move away from the loudest position, then sort loot under cover. Success is visible when you can leave the room with a defensive option still available instead of consuming every resource to win one exchange.",
      ],
    },
    {
      heading: "Common gameplay failures and the next correction",
      table: {
        headers: ["Failure", "Likely cause", "Next-run correction"],
        rows: [
          ["Killed while looting", "Inventory opened in the combat footprint", "Move to cover and listen before sorting"],
          ["Third-partied after PvE", "Every cooldown was spent", "Reserve one peel or movement option"],
          ["Bag full of low-value items", "No loot priority", "Set task, upgrade, and replaceable categories"],
          ["Died after meeting the objective", "No extraction threshold", "Switch to return mode as soon as the run succeeds"],
        ],
      },
    },
  ],
  "solo-mode": [
    {
      heading: "Solo route discipline",
      bullets: [
        "Enter each space along one edge so you do not expose every angle at once.",
        "Break line of sight before healing; distance alone is not cover.",
        "Avoid committing both mobility and control to the opening exchange.",
        "Leave PvE alive when it can discourage a pursuing player, but do not trap your own retreat.",
        "Move toward extraction while resources are healthy rather than after they are exhausted.",
      ],
      note: "This is editorial survival guidance. It is not a claim about fixed player spawns or guaranteed safe routes.",
    },
  ],
  "pve-only": [
    {
      heading: "How to reduce PvP exposure without claiming a PvE queue",
      paragraphs: [
        "Choose a compact objective, avoid chasing sound, leave high-traffic fights, and extract after the objective rather than clearing the map. These habits reduce exposure but cannot switch standard extraction into a private PvE session.",
        "Tutorial or training content can teach mechanics, but it should not be described as full PvE-only progression unless an official announcement explicitly adds that mode.",
      ],
    },
  ],
  crossplay: [
    {
      heading: "Crossplay setup checklist",
      bullets: [
        "Update every platform and restart after the download finishes.",
        "Confirm each account can access online multiplayer on its platform.",
        "Compare the account regions and visible server choices.",
        "Match the in-game crossplay preference, then recreate the party.",
        "Send one fresh invite from the player who can enter matchmaking.",
        "If the party still fails, test with another eligible friend to isolate the account.",
      ],
    },
  ],
  "play-with-friends": [
    {
      heading: "Assign roles before deployment",
      paragraphs: [
        "A simple trio assignment is scout, anchor, and support or follow-up. The scout identifies the next threat without starting every fight; the anchor holds a defensible line; the third player protects recovery, adds control, or confirms focus damage. Announce when a role changes because a player is low or carrying the objective.",
        "For extraction, one player watches the approach, one handles the immediate interaction or objective, and one stays close enough to trade without stacking on the same attack. If pressured, call whether the team is committing, delaying, or abandoning the attempt.",
      ],
    },
  ],
  "best-settings": [
    {
      heading: "Graphics adjustment order",
      table: {
        headers: ["Order", "Test", "Keep the change when"],
        rows: [
          ["1", "Choose a stable frame cap", "Frame pacing becomes repeatable"],
          ["2", "Disable ray tracing while diagnosing", "Combat spikes become smaller"],
          ["3", "Lower shadows and effects", "GPU pressure falls without harming readability"],
          ["4", "Lower reflections and volumetrics", "Busy scenes improve"],
          ["5", "Compare one upscaler mode", "Motion and image quality remain acceptable"],
          ["6", "Reduce textures only for memory pressure", "Long-session instability improves"],
        ],
      },
    },
  ],
  "controller-guide": [
    {
      heading: "Controller symptom matrix",
      table: {
        headers: ["Symptom", "First check", "Do not assume"],
        rows: [
          ["No input anywhere", "Platform connection and selected device", "That the game mapping is the cause"],
          ["Menus fail but combat works", "Current known issues and directional-pad behavior", "That the controller is broken"],
          ["Disconnect after sleep", "Reconnect and restart the client", "That a network error is involved"],
          ["Party blocked on console", "Online permission or subscription", "That crossplay is disabled"],
        ],
      },
    },
  ],
};

const deepeningSections: Record<string, GuideSection[]> = {
  classes: [
    {
      heading: "Compare the six class commitments",
      table: {
        headers: ["Class", "Fight it wants", "Resource to protect", "Failure to avoid"],
        rows: [
          ["Mercenary", "Readable close-range exchange", "Guard, stamina, and punish window", "Blocking until surrounded"],
          ["Sorcerer", "Controlled casting lane", "Casting time, space, and escape", "Beginning the longest cast under pressure"],
          ["Blackarrow", "Long sightline with a retreat", "Aim time and separation tool", "Firing repeatedly from one exposed angle"],
          ["Shadowstrix", "Chosen ambush on an isolated target", "Stealth and one exit", "Spending every mobility tool on entry"],
          ["Seer", "Exchange where protection changes the outcome", "Healing, shielding, and control timing", "Reacting after the ally is already lost"],
          ["Withered Knight", "Predictable lane or formation", "Heavy recovery and defensive energy", "Committing when the target can simply leave"],
        ],
      },
    },
    {
      heading: "A safe class trial",
      paragraphs: [
        "Use replaceable equipment and test one weapon direction across three ordinary PvE pulls, one disengagement, and one extraction attempt. The trial succeeds when you can describe the opener, repeatable loop, defensive answer, and exit without reading the skill list during combat.",
        "If the same failure repeats, identify whether it comes from range, timing, aim, resource management, or team dependence. Switch to a class that removes that specific friction rather than following a headline rank.",
      ],
    },
  ],
  "best-class": [
    {
      heading: "When each class is the right answer",
      paragraphs: [
        "Mercenary is the right answer when you need defensive feedback. A blocked or parried exchange teaches timing clearly, but the class still needs route discipline against mobile ranged pressure.",
        "Sorcerer is the right answer when you enjoy planning where a fight happens. Area control and ranged magic are valuable only when you can preserve the space and time required to cast.",
        "Blackarrow is the right answer when aim, scouting, and firing angles are already comfortable. It is less forgiving when a corridor or missed shot removes the range advantage.",
        "Shadowstrix is the right answer when you enjoy choosing an engagement more than holding a position. The class rewards information and exit planning, not automatic aggression.",
        "Seer is the right answer when you want a flexible route into support, control, or hybrid pressure. Its best trio moments depend on teammates acting inside the protection or control window.",
        "Withered Knight is the right answer when deliberate reach and formation control feel natural. Heavy commitment demands more prediction, and Polearm & Shield gives the launch class a broader identity than older Greatsword-only impressions.",
      ],
    },
    {
      heading: "Selection mistakes that look like balance problems",
      bullets: [
        "Choosing a ranged class but repeatedly entering confined fights.",
        "Choosing a heavy class and chasing mobile targets across open ground.",
        "Copying a trio support direction into solo without personal pressure.",
        "Using every movement skill in the opener and blaming the class for having no escape.",
        "Testing rare gear before learning the class's ordinary resource loop.",
        "Treating an older beta ranking as a launch-version verdict.",
      ],
    },
  ],
  "best-solo-class": [
    {
      heading: "Solo evaluation for all six classes",
      paragraphs: [
        "Blackarrow offers the cleanest ranged plan: observe, pressure, relocate, and preserve separation. Its limitation is that missed aim or closed distance can remove the main advantage quickly.",
        "Mercenary offers the clearest learning plan: defend, read, punish, and leave. Its limitation is pursuit; a mobile opponent can refuse the exchange or attack from beyond the preferred range.",
        "Shadowstrix offers excellent engagement choice for a practiced player. Its limitation is recovery after a failed ambush, especially when entry consumes the movement needed to escape.",
        "Sorcerer can clear PvE and control space from range. Its limitation is the solo casting window: no teammate can hold the target while a longer effect is prepared.",
        "Withered Knight can dominate a predictable lane with reach and control. Its limitation is slow recovery when a fast opponent baits the commitment.",
        "Seer can build toward hybrid offense and personal protection. Its limitation is that a support-heavy investment produces less value without two teammates to save or enable.",
      ],
    },
    {
      heading: "A solo extraction readiness test",
      bullets: [
        "Can the setup clear ordinary PvE without spending the escape?",
        "Can it respond when a melee class reaches the preferred range?",
        "Can it stop a chase before losing the retreat route?",
        "Can it begin extraction with healing and one defensive option?",
        "Can you replace the kit after a learning loss?",
        "Can you explain the first decision that causes each repeated death?",
      ],
    },
  ],
  "class-tier-list": [
    {
      heading: "Class-by-class ranking rationale",
      paragraphs: [
        "Mercenary ranks high for beginners and trios because defense and frontline space are useful in ordinary situations. It ranks lower when the mode rewards chase, rapid disengagement, or long-range pressure.",
        "Sorcerer ranks high in PvE because grouped enemies and controlled areas reward magic pressure. It becomes more execution-dependent in solo PvP when a longer cast must be protected personally.",
        "Blackarrow ranks high in solo and PvP for range, information, and pressure. Its limitation is mechanical: missed shots and a failed retreat can turn a top-tier angle into a weak close-range exchange.",
        "Shadowstrix ranks high in PvP because stealth and mobility influence when the fight begins. It ranks lower for beginners and routine PvE because a failed entry can spend both damage and safety.",
        "Seer ranks high in trio play because healing, shielding, control, and peel multiply coordinated teammates. It ranks lower in solo when a support route cannot convert those tools into enough personal pressure.",
        "Withered Knight ranks well when reach, pulls, sigils, parry, and shield utility shape a doorway or formation. It is more situational against opponents who can bait a slow commitment and return during recovery.",
      ],
    },
    {
      heading: "How to use the list without wasting gear",
      paragraphs: [
        "Choose the mode table that matches the next run, then read the limitation before the rank. Test the class with replaceable equipment and a single objective. A class belongs in your personal top tier only when you can execute its opener, defense, and exit under extraction pressure.",
        "Recheck this page after a patch changes mobility, crowd control, energy, or a core weapon. A one-line tier change should follow tested reasoning, not precede it.",
      ],
    },
  ],
  builds: [
    {
      heading: "Class build directions in practice",
      paragraphs: [
        "Mercenary should decide whether Sword & Shield stability or Hammer commitment is the center of the setup. Mixing both without a clear swap condition can leave every talent half-supported.",
        "Sorcerer should decide whether repeatable Elemental pressure or protected Stardust windows define the fight. Keep a quick response outside the long-cast package.",
        "Blackarrow should decide whether charged-shot precision or frequent ailment pressure is more reliable for the player's aim and route. Both need a plan for collapsed distance.",
        "Shadowstrix should choose burst or sustained multi-hit pressure and explicitly reserve an exit. A build that requires every mobility tool to complete damage is fragile in extraction PvP.",
        "Seer should choose solo hybrid, offensive control, or trio protection before selecting supporting affixes. A healing-heavy setup without team coordination can sacrifice too much personal pressure.",
        "Withered Knight should choose Greatsword sigil pressure or Polearm & Shield formation utility as the main loop. Reach, recovery, and energy requirements should guide every supporting choice.",
      ],
    },
    {
      heading: "Three-run build validation",
      table: {
        headers: ["Run", "Test", "Pass condition"],
        rows: [
          ["1", "Ordinary PvE and resource loop", "The setup clears without consuming its emergency response"],
          ["2", "Bad engagement and disengagement", "You can leave after the opener fails"],
          ["3", "Objective plus extraction", "The build reaches the return with healing and a defensive answer"],
        ],
      },
    },
  ],
  gameplay: [
    {
      heading: "From camp to extraction: the complete operating sequence",
      table: {
        headers: ["Phase", "Player action", "Decision to avoid"],
        rows: [
          ["Prepare", "Choose one objective and a replaceable kit", "Bringing value that makes every experiment frightening"],
          ["Enter", "Identify cover, sound, and the first retreat", "Running directly toward the first marker"],
          ["Fight PvE", "Use a repeatable rotation and reserve one response", "Spending every cooldown on ordinary enemies"],
          ["Loot", "Move to cover and keep only items that serve the run", "Sorting in the combat footprint"],
          ["Reassess", "Compare bag value, healing, time, and objective", "Continuing because the next room might be better"],
          ["Extract", "Secure the return requirement and protect the interaction", "Beginning with no recovery or lookout"],
        ],
      },
    },
    {
      heading: "Combat success is more than dealing damage",
      paragraphs: [
        "A successful exchange improves position, preserves enough health and class resource for the next threat, and does not erase the extraction plan. Winning a duel with no healing, escape, or return route may still be a losing run.",
        "Use sound and line of sight as resources. A quiet rotation can avoid a third party; a doorway can reduce the angles you must defend; living PvE can discourage pursuit. These are situational tools, not guaranteed safe-route claims.",
      ],
    },
    {
      heading: "What to review after a death",
      bullets: [
        "The first moment the planned route was abandoned.",
        "Whether healing or a defensive skill was already unavailable.",
        "Whether the bag had already met the extraction threshold.",
        "Whether PvE and another player were allowed to pressure from different angles.",
        "Whether the chase crossed the last safe cover.",
        "One change to test in the next replaceable run.",
      ],
    },
  ],
  "solo-mode": [
    {
      heading: "A solo encounter decision tree",
      paragraphs: [
        "If you see an opponent before being seen, first decide whether the fight serves the run. If not, rotate while information is still private. If the fight is necessary, identify cover, the opponent's likely escape, and the cooldown you will keep for a third party.",
        "If the opponent sees you first, break line of sight before returning damage. If PvE is already active, avoid standing between both threats. If healing or escape is gone, the objective changes from winning to creating enough uncertainty to leave.",
      ],
    },
    {
      heading: "Solo success signals",
      bullets: [
        "You leave at least one unfavorable fight before taking critical damage.",
        "Ordinary PvE does not consume the emergency movement or control tool.",
        "Inventory choices take seconds under cover, not minutes in the open.",
        "The extraction threshold is reached before the bag is completely full.",
        "A failed run produces one specific correction rather than a complete class rebuild.",
      ],
    },
  ],
  "pve-only": [
    {
      heading: "Choose the right product expectation",
      paragraphs: [
        "Players who want deliberate fantasy combat may still enjoy PvE encounters, bosses, loot, and class progression, but the standard extraction loop includes rival-player risk. Buying for a private campaign experience would rely on a mode that is not officially confirmed.",
        "Before purchasing, watch the long-form gameplay selection on the home page and read Solo Mode. If unwanted PvP risk is a decisive problem, wait for an official mode announcement rather than assuming a training area becomes full progression.",
      ],
    },
    {
      heading: "PvE-focused run checklist",
      bullets: [
        "Set a compact PvE objective and avoid following player combat sounds.",
        "Use cover and edge routes to reduce, not eliminate, exposure.",
        "Preserve a disengagement tool specifically for a player encounter.",
        "Extract after the PvE objective rather than clearing the entire map.",
        "Do not describe a low-contact run as proof of a PvE-only queue.",
      ],
    },
  ],
  crossplay: [
    {
      heading: "Platform-by-platform preparation",
      paragraphs: [
        "On PC, confirm the game is updated through the active storefront account and that the same account reaches online matchmaking. On PlayStation and Xbox, confirm the console user has the required online access and that family or child-account permissions do not block multiplayer.",
        "Then compare regions. A successful solo matchmaking test on both devices proves basic online access, but it does not prove the accounts share an eligible server pool. Recreate the party only after both version and region gates match.",
      ],
    },
    {
      heading: "Crossplay failure outcomes",
      table: {
        headers: ["Outcome", "Meaning", "Next step"],
        rows: [
          ["Neither player can match", "Service, version, or platform access may be involved", "Check official status and client updates"],
          ["Both can match, but not together", "Party, crossplay preference, or region compatibility is more likely", "Compare settings and account regions"],
          ["One can match and one cannot", "Focus on the failing account or platform", "Check entitlement, region, and version"],
          ["Party forms but latency is poor", "Compatibility works; routing or eligible server distance remains", "Use the Servers checklist"],
        ],
      },
    },
  ],
  "play-with-friends": [
    {
      heading: "A clean invite workflow",
      table: {
        headers: ["Step", "Action", "Success signal"],
        rows: [
          ["1", "Each player enters online play separately", "Basic account access works"],
          ["2", "Compare client version, account region, and server choices", "Eligibility matches"],
          ["3", "Leave old parties and restart the game", "Stale session state is removed"],
          ["4", "Send one invite from the intended leader", "The same party appears for everyone"],
          ["5", "Queue with no last-minute setting changes", "Matchmaking begins for the full group"],
        ],
      },
    },
    {
      heading: "Communication that prevents avoidable wipes",
      bullets: [
        "Call the target and the reason for the engagement.",
        "Call when the defensive or healing response is unavailable.",
        "Use finish, delay, or abandon for extraction decisions.",
        "Announce inventory and healing stops so someone watches.",
        "Regroup before entering the next room rather than assuming everyone followed.",
      ],
    },
  ],
  "best-settings": [
    {
      heading: "Build a stable baseline before increasing quality",
      paragraphs: [
        "Start from the hardware-based default preset, disable ray tracing during diagnosis, and choose a frame cap the system can sustain during combat rather than only in camp. Test one route with camera turns, traversal, and an effect-heavy fight.",
        "Only after the baseline is repeatable should you raise settings. Increase one category, replay the same route, and keep the change if frame pacing and clarity remain acceptable. There is no universal preset or guaranteed FPS gain across hardware.",
      ],
    },
    {
      heading: "Read the result correctly",
      table: {
        headers: ["Result", "Interpretation", "Next action"],
        rows: [
          ["Average FPS rises but spikes remain", "Frame pacing or loading is still the problem", "Use the stuttering guide"],
          ["Performance drops over a long session", "Memory, heat, or background load may be involved", "Record time-to-failure and restore defaults"],
          ["Only online movement feels delayed", "Network latency may be mistaken for rendering", "Compare offline UI/camp and connection behavior"],
          ["One setting causes immediate instability", "The baseline was exceeded", "Revert that setting and keep the stable profile"],
        ],
      },
    },
  ],
  "controller-guide": [
    {
      heading: "Controller test sequence",
      bullets: [
        "Connect or pair the controller before launching the game.",
        "Confirm it works in the platform interface or another supported title.",
        "Disconnect duplicate input layers for one controlled test.",
        "Use the default in-game mapping before creating a custom layout.",
        "Test combat, inventory, auction, and party navigation separately.",
        "Record whether the stick works when the directional pad does not.",
      ],
    },
    {
      heading: "Known issue versus local input problem",
      paragraphs: [
        "The official launch list named controller-specific interface cases, including Auction House gem-slot navigation and reconnect or invitation behavior, and the immediate update addressed the launch set. That history makes the exact menu and client version important.",
        "If combat input fails everywhere, test the device and platform first. If only one menu path fails, compare the current known-issues note before replacing hardware or remapping every control.",
      ],
    },
  ],
  "known-issues": [
    {
      heading: "Launch issue status table",
      table: {
        headers: ["Issue area", "Official launch status", "Player action"],
        rows: [
          ["Tutorial prompts and Flameblade presentation", "Acknowledged, then included in the launch update set", "Update and retest the same step"],
          ["Extra Soul of Return consumption", "Acknowledged, then included in the launch update set", "Confirm the installed version before reporting"],
          ["Inventory splitting and controller navigation", "Acknowledged in the launch list", "Use the current input path and update"],
          ["Console reconnect and PS5 deck display", "Acknowledged with platform context", "Restart as directed and confirm the platform build"],
        ],
      },
    },
    {
      heading: "How to report an issue that remains",
      bullets: [
        "Platform and exact installed game version.",
        "The menu, map transition, or combat stage where it happens.",
        "A short reproduction sequence with no private account data.",
        "Whether restart, update, and file verification changed it.",
        "A screenshot from your own device when the message matters.",
      ],
    },
    {
      heading: "Reported does not mean confirmed",
      paragraphs: [
        "Players may report a new symptom before the official team acknowledges it. This page can label that pattern as a player report, but it should not assign a universal cause, affected platform list, or fix without stronger evidence.",
        "Likewise, a workaround that helps one system is not a patch. Retire temporary steps when the official client resolves the underlying case.",
      ],
    },
  ],
  "patch-notes": [
    {
      heading: "How to read the July 30 update",
      paragraphs: [
        "The launch update combined class balance adjustments, fixes for the published known-issue set, and launch rewards. Read each part separately: a reward window does not establish a permanent system, and a class adjustment does not create an official tier list.",
        "Platform delivery can depend on storefront review and download completion. The update exists for a player only after the correct platform build is installed and the client restarts.",
      ],
    },
    {
      heading: "Guide areas affected by a patch",
      table: {
        headers: ["Patch change", "Guide to recheck", "What not to infer"],
        rows: [
          ["Mobility or control", "Class, solo, and tier pages", "A permanent win-rate order"],
          ["Energy or resource use", "Class and build pages", "That every old setup is unusable"],
          ["Soul of Return behavior", "Extraction and known issues", "That every failed return shares one cause"],
          ["Controller or interface fix", "Controller and crash pages", "That all platform input problems are resolved"],
          ["Reward window", "Rewards and launch gifts", "An active redeem code"],
        ],
      },
    },
    {
      heading: "Patch verification workflow",
      bullets: [
        "Open the specific official announcement, not only the news index.",
        "Record the publication time and affected platforms.",
        "Install the update and restart the client.",
        "Retest the exact mechanic before retaining a workaround.",
        "Update related guides only where the note changes the answer.",
        "Avoid converting qualitative wording into unsupported damage percentages.",
      ],
    },
  ],
  review: [
    {
      heading: "A practical fit test before buying",
      bullets: [
        "Watch an extended hunt rather than only a cinematic trailer.",
        "Decide whether losing carried loot creates useful tension or unacceptable frustration.",
        "Check the account region and friends' regions before planning a squad.",
        "Compare the PC requirements or console online-access conditions.",
        "Read current issues after the first update, not only launch-day comments.",
        "Choose a class whose normal combat rhythm looks enjoyable without a perfect build.",
      ],
    },
    {
      heading: "How to read launch feedback",
      paragraphs: [
        "Launch reviews overrepresent immediate technical friction and first impressions, while later reviews can reflect patches, a developed meta, and longer progression. Neither period should be reduced to one percentage.",
        "Use official notes to verify whether a named issue was acknowledged or fixed, and use multiple independent hands-on sources for subjective combat feel. One player report can identify a question but cannot prove a universal experience.",
      ],
    },
  ],
};

const beginnerSections: GuideSection[] = [
  {
    heading: "Before the first deployment",
    paragraphs: [
      "Open the loadout and identify one basic attack, one defensive response, one movement or disengagement option, and the resource that limits your active skills. Do not leave camp until you can name those four controls. Enter with a replaceable weapon direction, modest protection, healing, and enough empty inventory space to learn what the run offers.",
      "Set a single objective before matchmaking: learn a weapon stance, complete a task, practice PvE timing, or perform one extraction. If you cannot state the objective in one sentence, the run will encourage aimless looting and late greed.",
    ],
  },
  {
    heading: "What to carry in the first run",
    table: {
      headers: ["Bring", "Why", "Avoid"],
      rows: [
        ["A replaceable class weapon", "Lets you practice the intended rhythm", "Rare gear you cannot replace"],
        ["A small healing reserve", "Covers learning mistakes", "So much value that fear prevents practice"],
        ["One clear defensive option", "Creates a response to surprise pressure", "An all-offense setup with no exit"],
        ["Open bag space", "Makes loot choices visible", "A full inventory before deployment"],
      ],
    },
  },
  {
    heading: "Your first five runs",
    paragraphs: [
      "Use replaceable equipment and give each early run one learning target. The risk rule is simple: preserve a response for the return, stop when the target is complete, and do not turn practice into an expensive chase.",
    ],
    table: {
      headers: ["Run", "Learning target", "Count it as a success when", "Risk rule"],
      rows: [
        ["1", "Movement, healing, defense, and one PvE enemy", "You can repeat the basic response without checking controls", "Take only equipment you can replace"],
        ["2", "Loot value, cover, and inventory pace", "You reject items that do not serve the run", "Do not chase another player"],
        ["3", "Returner Woodling and Soul of Return flow", "You can explain the extraction sequence", "Save one response for the exit"],
        ["4", "Sound, sightlines, and disengagement", "You leave one bad fight before it becomes a wipe", "Set a route or inventory limit"],
        ["5", "A complete compact route solo or with a squad", "You extract after the stated objective", "Leave after the objective succeeds"],
      ],
    },
  },
  {
    heading: "Loot priority without invented prices",
    paragraphs: [
      "Prioritize what completes the run's stated task, directly improves a replaceable setup, or has clearly readable value in your current client. Next keep compact items you understand. Drop bulky low-purpose items when they prevent you from carrying the objective or force more time in an exposed menu.",
      "No fixed price or drop-rate list is needed for this decision. The success signal is a bag whose contents you can explain, not a bag filled merely because space existed.",
    ],
  },
  {
    heading: "Combat check before every pull",
    bullets: [
      "Locate cover and the route you will use if another player arrives.",
      "Check healing, class resource, and the cooldown needed to disengage.",
      "Identify whether the target can pull additional enemies.",
      "Listen before starting a loud or lengthy fight.",
      "Do not open with the only tool that can save you from a third party.",
    ],
  },
  {
    heading: "Solo and squad adjustments",
    paragraphs: [
      "Solo players must preserve their own recovery window and should stop a chase earlier. Squad players can trade attention, but need explicit calls for target, retreat, and extraction. Do not assume a teammate sees the same threat simply because it is visible on your screen.",
      "In a trio, separate just enough to cover different angles without becoming three isolated fights. If one player is sorting loot, the others should not both open their inventories.",
    ],
  },
  {
    heading: "Common beginner deaths",
    table: {
      headers: ["Death pattern", "What probably happened", "Next-run rule"],
      rows: [
        ["Died with valuable loot", "The run succeeded but did not end", "Extract when the original objective is complete"],
        ["Died to a third party", "PvE consumed every cooldown", "Reserve one defensive response"],
        ["Died while healing", "Distance was mistaken for cover", "Break line of sight first"],
        ["Died while chasing", "The retreat route was abandoned", "Stop at the next exposed doorway"],
        ["Died in inventory", "Loot was sorted in the combat footprint", "Move, listen, then open the bag"],
      ],
    },
  },
  {
    heading: "Recover after the first failure",
    paragraphs: [
      "Rebuild with a cheaper version of the same learning plan rather than switching class, weapon, route, and settings simultaneously. Write down the first decision that made the death likely—not only the final hit. It may have been entering without healing, chasing past cover, or ignoring the extraction threshold.",
      "The next run should test one correction. A recovery run succeeds when the corrected decision appears, even if the final loot is modest. Continue with How to Extract, then choose a class-specific page once the loop feels repeatable.",
    ],
  },
];

const extractionSections: GuideSection[] = [
  {
    heading: "Prepare before starting the return",
    bullets: [
      "Stop unnecessary looting and create inventory space for the required return item.",
      "Heal, restore the class resource, and preserve a defensive cooldown.",
      "Listen for nearby combat and identify at least one covered approach.",
      "For a squad, assign the interaction, lookout, and response roles.",
      "Do not assume a location is safe because it was quiet on a previous run.",
    ],
  },
  {
    heading: "Returner Woodling and Soul of Return",
    paragraphs: [
      "The official website states that a Returner Woodling is the rare monster tied to escape. Defeat it to obtain a Soul of Return, which is used to find the way home. The official description establishes the sequence but does not publish fixed coordinates or a guaranteed spawn probability.",
      "Once the relevant target or return objective is found, stop treating the area as an ordinary loot room. Clear immediate PvE pressure, check for rival players, secure the required item, and move through the return interaction with enough resources to survive interruption.",
    ],
  },
  {
    heading: "Solo extraction sequence",
    table: {
      headers: ["Step", "Action", "Success signal"],
      rows: [
        ["1", "Approach along cover and listen", "You can identify an exit before committing"],
        ["2", "Clear only threats that block the interaction", "The area is manageable without draining every cooldown"],
        ["3", "Secure the Soul of Return", "The required item is visible in the current run state"],
        ["4", "Reset before the final return", "Healing and one defensive option remain"],
        ["5", "Begin the return and watch the approach", "You can react without abandoning the interaction blindly"],
      ],
    },
  },
  {
    heading: "Squad extraction roles",
    paragraphs: [
      "The interaction player handles the required objective. The lookout watches the most likely approach and reports movement without overchasing. The response player stays between both jobs and can peel, control, or trade if pressure arrives.",
      "If enemies interrupt, call one of three decisions: finish, delay, or abandon. A divided squad—one player finishing, one chasing, one retreating—usually turns a defensible attempt into separate losses.",
    ],
  },
  {
    heading: "When another player contests the return",
    bullets: [
      "Do not chase beyond the area needed to protect the return.",
      "Use cover to force the attacker into a readable angle.",
      "Preserve the required item and the player carrying it.",
      "If resources are too low, abandon the immediate attempt and reset rather than feeding one at a time.",
      "After winning an exchange, recheck healing and cooldowns before restarting the interaction.",
    ],
  },
  {
    heading: "Extraction failure checklist",
    table: {
      headers: ["Symptom", "Check", "Next action"],
      rows: [
        ["No return progress", "Required item and current interaction state", "Re-read the on-screen objective instead of guessing"],
        ["Item consumed unexpectedly", "Current client version and official issue notes", "Update, restart, and report if it reproduces"],
        ["Interrupted by PvE", "Uncleared aggro and approach route", "Clear only the blocking threat before retrying"],
        ["Interrupted by players", "Sightlines and role assignment", "Reset under cover and protect the carrier"],
        ["Squad split", "Whether everyone called the same decision", "Assign one final caller for finish, delay, or leave"],
      ],
    },
  },
  {
    heading: "The fixed Soul of Return issue",
    paragraphs: [
      "The launch known-issues post acknowledged a case involving extra Soul of Return consumption, and the July 30 update listed the launch set among its fixes. Confirm that your platform has installed the relevant client update before applying any workaround.",
      "A patch note is not a guaranteed diagnosis for every failed extraction. If the updated client still consumes or handles the item unexpectedly, record the platform, version, run state, and exact sequence for official support.",
    ],
  },
];

const tierSections: GuideSection[] = [
  {
    heading: "How the tiers are scored",
    paragraphs: [
      "S means the class answers the mode's central risks with a broadly useful kit; A means strong with a clear trade-off; B means viable but more dependent on matchup, coordination, or execution. These are editorial launch-week placements, not official balance data.",
      "The dimensions are survival, reliable pressure, disengagement, PvE efficiency, team utility, and learning cost. No invented win rate, extraction rate, or DPS number is used.",
    ],
  },
  {
    heading: "Solo tier list",
    table: { headers: ["Tier", "Classes", "Why"], rows: [["S", "Blackarrow, Mercenary", "Range or readable defense supports self-sufficient runs"], ["A", "Shadowstrix, Sorcerer, Withered Knight", "High control or ceiling with sharper punish windows"], ["B", "Seer", "Viable offense, but direct support value is reduced alone"]] },
  },
  {
    heading: "Trio tier list",
    table: { headers: ["Tier", "Classes", "Why"], rows: [["S", "Seer, Mercenary", "Protection, recovery, and stable frontline value"], ["A", "Sorcerer, Blackarrow, Withered Knight", "Strong follow-up, focus pressure, and formation control"], ["B", "Shadowstrix", "Powerful flank value but requires synchronized timing"]] },
  },
  {
    heading: "PvP tier list",
    table: { headers: ["Tier", "Classes", "Why"], rows: [["S", "Shadowstrix, Blackarrow", "Engagement choice and ranged pressure remain valuable"], ["A", "Sorcerer, Withered Knight, Mercenary", "Control, reach, and defense can decide structured fights"], ["B", "Seer", "Strong in coordinated teams but less direct in isolated duels"]] },
  },
  {
    heading: "PvE tier list",
    table: { headers: ["Tier", "Classes", "Why"], rows: [["S", "Sorcerer, Mercenary", "Area pressure and durable clears are easy to build around"], ["A", "Blackarrow, Seer, Withered Knight", "Safe pressure, sustain, or heavy control"], ["B", "Shadowstrix", "Strong execution but some PvP mobility adds less to routine clears"]] },
  },
  {
    heading: "Beginner tier list",
    table: { headers: ["Tier", "Classes", "Why"], rows: [["S", "Mercenary", "Defense gives readable feedback while learning"], ["A", "Seer, Blackarrow", "Clear roles, but resource or aim discipline matters"], ["B", "Sorcerer, Withered Knight, Shadowstrix", "Casting, heavy commitment, or ambush timing raises the learning cost"]] },
  },
  {
    heading: "Limits for every class",
    bullets: [
      "Mercenary: safe fundamentals do not solve mobile ranged matchups automatically.",
      "Sorcerer: strong space control collapses if casting begins without protection.",
      "Blackarrow: range loses value when aim, cover, or escape routing fails.",
      "Shadowstrix: a failed ambush can spend both pressure and escape at once.",
      "Seer: support value depends on teammates using the window it creates.",
      "Withered Knight: heavy reach is punishable when opponents bait a commitment.",
    ],
  },
];

const buildSections: GuideSection[] = [
  {
    heading: "Beginner, solo, and trio setup directions",
    table: {
      headers: ["Class", "Beginner setup", "Solo setup", "Trio setup"],
      rows: [
        ["Mercenary", "Sword & Shield with one reliable punish", "Defense plus a chase-safe finisher", "Frontline control with a protected retreat"],
        ["Sorcerer", "Repeatable Elemental pressure", "Fast casts plus a saved escape", "Area control timed behind the frontline"],
        ["Blackarrow", "Forgiving sustained bow pressure", "Range, ailment pressure, and an escape response", "Focus-fire setup with control for ally follow-up"],
        ["Shadowstrix", "One clear engage and one clear exit", "Ambush burst without spending every mobility tool", "Backline pressure synchronized with team control"],
        ["Seer", "Hybrid offense and self-protection", "Damage route with personal sustain", "Healing, shielding, control, and team recovery"],
        ["Withered Knight", "Readable Greatsword punish windows", "Reach plus a conservative disengage plan", "Pull, formation control, and shield utility"],
      ],
    },
  },
  {
    heading: "Weapon, skill, and talent selection logic",
    paragraphs: [
      "Choose the weapon direction that creates the fight you can execute. Then select one opener, one repeatable pressure tool, one defensive answer, and one disengagement or reset. Talents should reinforce that loop rather than adding a second unrelated plan.",
      "A build is incomplete if it can begin a fight but cannot survive a failed opener, handle ordinary PvE without exhausting rare resources, or reach extraction with enough recovery left.",
    ],
  },
  {
    heading: "Equipment and Affix priority",
    bullets: [
      "Meet the survival requirement of the mode before maximizing conditional damage.",
      "Favor affixes that support the attacks and resource loop you actually use.",
      "Do not stack a trigger that the setup cannot activate consistently.",
      "Keep enough durability, healing, or protection to survive the extraction phase.",
      "Test expensive changes with a cheaper version of the same concept first.",
    ],
  },
  {
    heading: "Build completeness test",
    table: {
      headers: ["Question", "Pass condition"],
      rows: [
        ["How does the fight start?", "One opener works from the range you can reach"],
        ["What is the repeatable loop?", "Skills and weapon attacks restore or preserve the needed resource"],
        ["How do you survive failure?", "A defensive response remains after the opener"],
        ["How do you leave?", "The build has movement, control, cover use, or a planned retreat"],
        ["How does it clear PvE?", "Ordinary enemies do not consume the entire PvP plan"],
        ["How does it extract?", "Healing and a response remain for the return attempt"],
      ],
    },
  },
  {
    heading: "Common mismatched builds",
    bullets: [
      "Every skill requires a long setup, so the build has no quick response.",
      "Damage triggers depend on conditions the weapon rarely creates.",
      "All mobility is used to engage, leaving no exit.",
      "A trio support build is copied into solo without personal pressure.",
      "An expensive affix is kept even after a patch changes the mechanic it supports.",
    ],
  },
  {
    heading: "Update a build after a patch",
    paragraphs: [
      "Read the exact official note, identify which part of the loop changed, and test the smallest affected piece first. A movement adjustment may change positioning without invalidating damage; an energy change may alter rotation length without requiring new equipment.",
      "Keep the old version until the revised setup passes the same route, PvE encounter, and extraction check. Do not rebuild from a tier headline alone.",
    ],
  },
];

const fixAdditions: Record<string, GuideSection[]> = {
  "fatal-error-fix": [
    { heading: "Classify the fatal error by stage", table: { headers: ["Stage", "Record", "First safe check"], rows: [["Before the title screen", "Exact dialog and executable name", "Update, restart, and verify files"], ["While loading a hunt", "Map or transition and whether it repeats", "Verify files and test stable graphics defaults"], ["Entering combat", "Effect, driver state, and overlays", "Close nonessential overlays for one test"], ["After an update", "Old and new client version", "Restart the platform and complete the update"]] } },
    { heading: "Preserve the exact error text", paragraphs: ["Copy or photograph the full first error line from your own device. A community report from the June test showed a shader compilation fatal error, but that beta message is not proof that every launch fatal error has the same cause. Match the stage and wording before choosing a test.", "Do not publish personal account data, access tokens, or a full path that exposes a user name. The useful fields are platform, hardware, driver, game version, stage, exact error family, and reproducible steps."] },
    { heading: "File, driver, shader, and overlay test order", bullets: ["Restart and confirm the current client.", "Verify game files through the official launcher.", "Install a stable driver from NVIDIA or AMD, then restart.", "Return graphics to a stable preset and disable ray tracing while diagnosing.", "Close one nonessential overlay at a time.", "Repeat the same launch or loading step after each change."] },
    { heading: "What to include in a support report", bullets: ["Platform and store version.", "CPU, GPU, memory, and operating-system build.", "Exact error text and the stage where it appears.", "Whether file verification found a problem.", "Driver version and overlay state.", "One short reproduction sequence."] },
  ],
  "stuttering-fix": [
    { heading: "Identify the stutter pattern", table: { headers: ["Pattern", "What it feels like", "Diagnostic"], rows: [["Shader stutter", "First appearance of an effect or model hitches", "Repeat the same encounter without changing settings"], ["Traversal stutter", "Spike when entering a room or zone", "Run the same route twice"], ["Combat stutter", "Frame-time spikes during abilities or many actors", "Repeat a controlled encounter"], ["Sustained low FPS", "Performance stays low rather than spiking", "Lower one expensive setting and compare"]] } },
    { heading: "SSD, frame cap, and settings order", paragraphs: ["Steam strongly recommends an SSD, and official launch notes describe asset-loading and shader-precompilation work. Confirm the install location before treating every hitch as a graphics-preset problem.", "Choose a frame cap the system can hold through combat. Then test ray tracing, shadows, effects, reflections, volumetrics, and one upscaler in that order. Keep textures until memory pressure is plausible, because lowering them first can harm clarity without fixing frame pacing."] },
    { heading: "How to measure whether a change helped", bullets: ["Use the same route, camera movement, and combat effect.", "Run the test once after a restart and once after the area is warmed.", "Record whether the issue is a spike, average slowdown, or input delay.", "Keep only the change that improves the repeatable symptom.", "Do not combine a driver, preset, upscaler, and frame-cap change in one result."] },
  ],
  "crashing-fix": [
    { heading: "Crash type changes the first test", table: { headers: ["Crash type", "First evidence", "First action"], rows: [["Startup crash", "Does the client reach the title screen?", "Update, restart, verify files"], ["Loading crash", "Does one transition reproduce it?", "Verify files and use stable defaults"], ["UI crash", "Which menu action or rapid input triggers it?", "Check known issues and avoid the exact sequence"], ["Controller crash", "Connection change or UI navigation before failure", "Reconnect before launch and test one device"], ["Console crash", "Platform error and system version", "Update console and game; report through platform support"]] } },
    { heading: "Officially fixed crash context", paragraphs: ["The launch announcement says the team fixed random crashes tied to vegetation animation and AMD hair rendering, while other launch notes addressed controller and interface cases. Those fixes describe specific bugs; they do not prove that every current crash is caused by vegetation, hair rendering, or a controller.", "If an old guide names a beta crash, compare its date and build with your current client. A launch client reproducing a different stage needs a new report rather than an old workaround."] },
    { heading: "PC and console paths", paragraphs: ["On PC, verify files, use official stable drivers, return to stable graphics defaults, and close one overlay for a controlled test. On console, update the system and game, fully restart, confirm free storage, and capture the platform error. Do not apply PC DLL, registry, or driver steps to a console.", "If the crash persists, preserve the sequence and send it to official support. Reinstall only after lower-cost checks, because a reinstall does not correct account, server, or platform permission issues."] },
  ],
  "connection-fix": [
    { heading: "Connection troubleshooting order", table: { headers: ["Order", "Check", "Why first"], rows: [["1", "Official maintenance or incident", "Local changes cannot repair a service outage"], ["2", "Client version", "Different versions can block parties or matchmaking"], ["3", "Account and server region", "A published restriction is not a router fault"], ["4", "Party and crossplay state", "Stale party state can affect only one group"], ["5", "Platform online permission", "Console multiplayer may require entitlement"], ["6", "Local NAT, DNS, and route", "Network tests matter after policy checks"]] } },
    { heading: "Region and account checks", paragraphs: ["Compare the storefront account region, visible server choices, and whether both players use the same eligible environment. The official North American restriction applies by store-account registration, not simply physical location. Crossplay does not override it.", "Do not attempt to bypass the restriction with account edits, VPNs, or unofficial launch options. Use the Region Lock page and official support when account eligibility appears wrong."] },
    { heading: "Conservative NAT, DNS, and route tests", bullets: ["Restart the game and platform before the router.", "Test a wired connection if available.", "Check whether other online games and platform services work.", "Avoid changing DNS unless the failure affects name resolution rather than an account restriction.", "Do not open broad port ranges from an unverified guide.", "Restore network changes that do not improve the same test."] },
    { heading: "Personal problem or wider incident?", paragraphs: ["If unrelated players across platforms report the same failure at the same time, prioritize official status communication. If one account fails while another on the same network succeeds, compare region, permission, version, and party state. If all devices in one home fail, then local network testing becomes more relevant.", "Record the time, platform, visible region, exact error, and whether login, party creation, or matchmaking fails. That evidence is more useful than saying the servers are down."] },
  ],
};

const serverSections: GuideSection[] = [
  { heading: "Official server deployment countries", paragraphs: ["The official launch FAQ names five deployment countries: China, the United States, Germany, Singapore, and Brazil. It does not establish every city, real-time status, or exact routing path. This page therefore uses country-level wording only.", "A deployment country is not the same as a selectable region label or an account's store region. Your client may display broader labels, while eligibility can still depend on the account build."] },
  { heading: "Account region, server region, and physical location", table: { headers: ["Term", "Meaning", "Why it matters"], rows: [["Physical location", "Where the player connects from", "Affects distance but does not necessarily choose the account build"], ["Store-account region", "Region registered with the storefront", "Can determine the eligible build and restriction"], ["Visible server region", "Choices shown by the current client", "Defines where the account can attempt matchmaking"], ["Crossplay", "Supported platforms can match", "Does not create cross-region eligibility"]] } },
  { heading: "High-latency troubleshooting", bullets: ["Confirm the account is using an eligible server before tuning the network.", "Use a wired connection when possible.", "Stop large downloads and uploads during the comparison.", "Compare latency at more than one time instead of one match.", "Check whether every household device or only the game is affected.", "Report persistent routing problems with region, provider, time, and platform."] },
  { heading: "This is not a live server-status page", paragraphs: ["This guide records official deployment information and account rules. It does not poll servers and should not be used as proof that a region is currently online. For an outage, use the newest official announcement or in-game service notice.", "If Bellring Games changes the restriction, the source of record should be a new official launch FAQ, patch note, or account-region announcement. The Updates hub is where this site will point to that change."] },
];

const regionSections: GuideSection[] = [
  { heading: "Region-lock decision flow", table: { headers: ["Question", "If yes", "If no"], rows: [["Is the store account registered in the named North American group?", "Expect the North American build and US servers under the launch rule", "Continue to the client server choices"], ["Do both friends see the same eligible region?", "Continue to version and party checks", "The region gate likely blocks the party"], ["Are both clients current?", "Recreate the party", "Update before network troubleshooting"], ["Can each account match separately?", "Focus on party compatibility", "Check account, platform permission, or service status"]] } },
  { heading: "Why crossplay is not cross-region", paragraphs: ["Crossplay answers whether PC, PS5, and Xbox players can match when their accounts and server eligibility align. Cross-region access is a separate policy decision. A platform pair can be crossplay-compatible and still be unable to join because the accounts received different regional builds.", "Before a group buys the game, compare storefront regions—especially when one player uses a US, Canadian, Mexican, Puerto Rican, or US Virgin Islands account and another does not."] },
  { heading: "What friends should compare", bullets: ["Storefront and account region.", "The exact server or region choices visible in the client.", "Game version after the latest update.", "Crossplay preference and platform online permission.", "Whether each player can match separately.", "The exact party error rather than a paraphrase."] },
  { heading: "What not to use as a workaround", paragraphs: ["Do not change payment or account details, use a VPN, buy an unverified key, or follow unofficial region-bypass steps. Those actions can violate platform rules, create purchase problems, or move the account into an unsupported state.", "If the official policy changes, update from the storefront or client and follow the new announcement. Community reports can reveal confusion, but they do not override the published launch rule."] },
];

const classPlaybooks: Record<string, GuideSection[]> = {
  mercenary: [
    { heading: "Mercenary combat loop", paragraphs: ["Use Sword & Shield to read the opponent, absorb or parry a committed attack, then answer with a short punish that preserves stamina and positioning. Hammer changes the loop: create space, predict movement, and commit only when the charged swing can control more than one target or punish recovery.", "The resource goal is consistency rather than endless blocking. A shield held without a plan can surrender space, while a Hammer charge started in the open can be interrupted. Alternate observation, short pressure, and reset."] },
    { heading: "Openers, defense, and disengagement", bullets: ["Open from cover or behind a teammate instead of walking through ranged pressure.", "Use the shield to gather information before spending the strongest punish.", "With Hammer, begin the charge where an opponent must enter the threat area.", "Disengage around a corner that breaks arrows and spells.", "Do not chase a mobile class after spending the tool needed to survive its counterattack."] },
    { heading: "PvE, PvP, solo, and trio jobs", paragraphs: ["In PvE, group ordinary enemies into readable arcs and avoid charging through an unseen doorway. In PvP, protect the space your ranged ally needs and punish opponents who commit through your guard.", "Solo Mercenary wins through stable decisions, not endless pursuit. In a trio, announce the target you are pinning and the moment your defense is exhausted so the backline can reposition."] },
    { heading: "Common Mercenary mistakes and counterplay", paragraphs: ["Common mistakes are blocking without moving, charging Hammer at maximum risk, and mistaking durability for immunity to focus fire. Against Mercenary, attack from changing angles, bait the heavy commitment, and punish the recovery rather than trading into the shield.", "The launch notes improved parts of parry feel and shield or Hammer PvE performance. Recheck exact tooltips in the current client instead of relying on beta timings."] },
  ],
  sorcerer: [
    { heading: "Sorcerer combat and resource loop", paragraphs: ["Sorcerer converts distance and casting windows into elemental or Stardust pressure. The practical loop is to establish space with a quick effect, layer control where the target wants to move, then use the longer cast only after the opponent has spent a gap closer or become occupied.", "Treat positioning as part of the resource bar. A full magical resource pool is not useful when a wall, corner, or melee push removes the casting angle."] },
    { heading: "Openers, protection, and escape", bullets: ["Open with the shortest reliable effect rather than the longest chant.", "Place area pressure across the enemy's route, not only its current location.", "Keep the blink or equivalent escape response until melee commitment is visible.", "Break sightlines when an opposing ranged class wins the angle.", "In a trio, cast from a different line than the support so one dive cannot interrupt both."] },
    { heading: "PvE, PvP, solo, and trio jobs", paragraphs: ["PvE rewards grouping enemies into area effects and keeping a clear retreat during boss mechanics. PvP rewards forcing movement and punishing the destination rather than free-casting at a target that can simply step away.", "Solo Sorcerer needs shorter commitments and a reserved escape. In a trio, the class becomes a follow-up specialist: let the frontline create a predictable movement before spending the larger cast."] },
    { heading: "Common Sorcerer mistakes and counterplay", paragraphs: ["The common failure is opening with the slowest spell, using escape to gain a small angle, then being caught without a reset. Against Sorcerer, vary approach timing, use cover, and pressure after a long cast begins.", "Launch notes improved parts of Stardust and fixed Flameblade presentation. That context does not establish a permanent top DPS route."] },
  ],
  blackarrow: [
    { heading: "Blackarrow combat and resource loop", paragraphs: ["Blackarrow turns sightline control into charged or sustained bow pressure. Archer-style play values a deliberate shot and follow-up detonation; Hunter-style play values frequent hits, ailments, and keeping the target inside a pressure window.", "The loop fails when every shot is taken from the same exposed angle. Fire, relocate, and preserve the tool that creates distance when an opponent finally closes."] },
    { heading: "Openers, defense, and disengagement", bullets: ["Scout from cover before beginning a charge.", "Aim where the target must move after PvE pressure or ally control.", "Use status or frequent hits to force a defensive response before the biggest shot.", "Break line of sight and rotate instead of backpedaling through open ground.", "Do not spend the escape merely to gain a slightly better firing angle."] },
    { heading: "PvE, PvP, solo, and trio jobs", paragraphs: ["In PvE, prioritize enemies that can interrupt aim or close distance, then use the safe range to preserve healing. In PvP, change elevation or angle so the opponent cannot solve every shot with one piece of cover.", "Solo Blackarrow must plan what happens when the first opponent reaches melee. In a trio, coordinate charged pressure with a frontline stun or pull rather than shooting a target your allies cannot follow."] },
    { heading: "Common Blackarrow mistakes and counterplay", paragraphs: ["Missed shots, tunnel vision, and retreating in a straight line are the main failures. Against Blackarrow, move between cover, deny the long lane, and pressure after the class spends its separation tool.", "Official notes reduced parts of Mysticfly scaling and adjusted special arrows after strong solo data. Treat that as evidence of version sensitivity, not proof of a permanent tier."] },
  ],
  shadowstrix: [
    { heading: "Shadowstrix combat and resource loop", paragraphs: ["Shadowstrix uses stealth, mobility, and rapid melee sequences to choose the opening. Dagger routes emphasize burst or repeated Shadow Veil play, while Dual Blades favor multi-hit pressure and wound or damage stacking.", "The real resource is exit capacity. An ambush that spends every movement and control option may win the first second but lose the fight when the target survives or a third party arrives."] },
    { heading: "Openers, defense, and escape", bullets: ["Approach from an angle that does not reveal the retreat route.", "Commit burst only after confirming the target is isolated or occupied.", "Keep one movement tool outside the damage sequence.", "Use stealth to reset information, not only to begin damage.", "Stop the chase when the enemy crosses into open support or PvE pressure."] },
    { heading: "PvE, PvP, solo, and trio jobs", paragraphs: ["PvE requires controlled grouping because high mobility can pull more enemies than intended. PvP rewards target selection: pressure the exposed ranged or support role, then leave before the frontline can pin you.", "Solo play gives freedom to choose fights but no teammate to cover a failed exit. In a trio, wait for allied control or distraction and call the target before entering the backline."] },
    { heading: "Common Shadowstrix mistakes and counterplay", paragraphs: ["Common errors are revealing stealth too early, attacking the tankiest target, and chaining mobility into damage with no retreat. Against Shadowstrix, protect isolated angles, delay the defensive response until commitment, and group near peel rather than stacking tightly.", "Launch tuning reduced excess mobility and chain-control potential. Old beta combo claims should be retested in the current build."] },
  ],
  seer: [
    { heading: "Seer combat and resource loop", paragraphs: ["Seer alternates between Catalyst pressure or support and Mace-based close-range mobility or durability. In a support route, the loop is observe, protect the teammate who is about to be pressured, then use control or damage to turn the saved window into an advantage.", "Do not spend every protective tool on minor chip damage. Preserve the stronger response for crowd control, a committed dive, or the extraction interaction."] },
    { heading: "Openers, defense, and disengagement", bullets: ["Open with control or pressure that the team can actually follow.", "Shield before predictable burst rather than after the ally is already down.", "Use healing under cover and announce when it is unavailable.", "With Mace, do not confuse mobility with permission to overextend.", "Leave with the teammate you are protecting instead of retreating on a separate line."] },
    { heading: "PvE, PvP, solo, and trio jobs", paragraphs: ["In PvE, Seer can stabilize mistakes and group enemies for efficient follow-up. In PvP, the class changes the value of an enemy commitment by shielding, healing, controlling, or counter-pressuring at the right moment.", "Solo requires an offensive route that can finish ordinary fights without exhausting sustain. Trio play unlocks the clearest identity: keep sightlines to both allies and prevent one diver from separating the team."] },
    { heading: "Common Seer mistakes and counterplay", paragraphs: ["The main mistakes are healing too late, standing beside the ally being targeted, and choosing a full support setup for solo without a reliable damage loop. Against Seer, interrupt recovery, separate the support from the frontline, and avoid wasting burst into visible protection.", "Official launch notes raised parts of Catalyst damage and reduced long-distance Mace escape power. Exact values should be read from current tooltips."] },
  ],
  "withered-knight": [
    { heading: "Sigils, Reckoning, and weapon loop", paragraphs: ["Greatsword play revolves around deliberate reach and Withering Sigil pressure that can lead into Reckoning or delayed payoff. Polearm & Shield adds a different rhythm: pull or pin space, defend the approach, and create a remote rescue or formation-control opportunity for the team.", "Both routes punish impatience. A long weapon can dominate a doorway but becomes vulnerable when the opponent baits the swing, leaves the threat area, and returns during recovery."] },
    { heading: "Parry, grapple, defense, and escape", bullets: ["Use Greatsword reach to make the opponent commit before the heavy answer.", "Treat a pull or grapple as a team signal, not a private combo.", "Raise the shield to control an approach, then reposition before energy is exhausted.", "Keep terrain behind the target in mind when using pin or displacement tools.", "Disengage before a fast class circles behind the slow recovery arc."] },
    { heading: "PvE, PvP, solo, and trio jobs", paragraphs: ["In PvE, wide reach and heavy control can manage grouped enemies, but over-pulling makes the slow recovery dangerous. In PvP, the class creates a threat zone and punishes a predictable dash, doorway, or rescue attempt.", "Solo play requires patience and an escape route before the first heavy commitment. In a trio, Withered Knight can pull a target into focus fire, protect an approach, or rescue a downed ally remotely according to the official class description."] },
    { heading: "Common Withered Knight mistakes and counterplay", paragraphs: ["Common failures are charging without an angle, throwing a pull before allies are ready, and holding a shield until energy is gone. Against the class, bait the first commitment, attack from a changing angle, and do not group where one control effect reaches everyone.", "Polearm & Shield launched with Season 1 and received immediate energy and turning adjustments. This page avoids carrying pre-launch Greatsword-only conclusions into the full launch kit."] },
  ],
};

const classAdvanced: Record<string, GuideSection[]> = {
  mercenary: [
    {
      heading: "Mercenary practice drill",
      paragraphs: [
        "Enter a low-value run and choose one ordinary enemy with a readable attack. For the first exchange, defend without immediately counterattacking. On the second, answer with one short punish. On the third, reposition after the punish instead of extending the combo. The drill teaches the difference between surviving an attack and earning a safe response.",
        "Repeat with Hammer only after the shield rhythm is clear. Begin the charge from cover or while the target is committed elsewhere, then cancel the chase if the swing misses. Success is preserving enough stamina and space to handle a second threat, not landing the largest possible hit.",
      ],
    },
    {
      heading: "Mercenary readiness checklist",
      bullets: [
        "You can identify the attack worth parrying instead of reacting to every feint.",
        "A short punish ends before the opponent's fastest answer.",
        "The shield does not hide an empty stamina or escape plan.",
        "Hammer charges begin from a forced approach, corner, or allied control window.",
        "You stop pursuit when ranged pressure pulls you away from cover.",
        "The trio hears when your frontline defense is unavailable.",
      ],
    },
  ],
  sorcerer: [
    {
      heading: "Sorcerer practice drill",
      paragraphs: [
        "Choose a short route with two pieces of cover. Pressure an ordinary enemy from the first angle, move before repeating the cast, and keep the longest spell unused until the enemy is controlled or committed. The goal is to make position create the casting window instead of hoping the target waits.",
        "For a second pass, deliberately let an enemy approach, use the quick defensive response, and retreat to the next prepared angle. Success means the escape creates a new casting lane. If it only adds distance in open ground, revise the route rather than adding more damage.",
      ],
    },
    {
      heading: "Sorcerer readiness checklist",
      bullets: [
        "A quick spell remains available when the longest cast is interrupted.",
        "Area pressure covers the destination rather than the target's old position.",
        "The escape moves toward prepared cover instead of unknown terrain.",
        "PvE groups enter one controlled lane without surrounding the caster.",
        "Solo rotations still function when no teammate protects the cast.",
        "Trio follow-up begins after allied control, not before the target is committed.",
      ],
    },
  ],
  blackarrow: [
    {
      heading: "Blackarrow practice drill",
      paragraphs: [
        "Mark three firing positions around a safe PvE pull. Take one deliberate shot from the first, move to the second while the target reacts, and reserve the third as the retreat angle. This makes relocation part of the attack loop and reveals whether the route actually preserves range.",
        "Then repeat after intentionally missing the opener. Do not force another charged shot from the exposed position. Break sight, restore separation, and restart from a new angle. Success is recovering the plan after imperfect aim, because extraction PvP rarely grants an uncontested sequence.",
      ],
    },
    {
      heading: "Blackarrow readiness checklist",
      bullets: [
        "The first charged shot begins behind cover.",
        "A missed opener leads to relocation rather than tunnel vision.",
        "The separation tool is still ready when melee reaches the firing lane.",
        "Status pressure serves a clear follow-up instead of decorating the target.",
        "The retreat crosses cover rather than open ground in a straight line.",
        "A trio target is chosen where allies can capitalize on ranged pressure.",
      ],
    },
  ],
  shadowstrix: [
    {
      heading: "Shadowstrix practice drill",
      paragraphs: [
        "Approach an ordinary fight without using the movement tool reserved for escape. Enter from an off-angle, perform a short damage sequence, then leave before the enemy is defeated. The exercise separates a safe entry from an all-in combo and makes the exit route visible before real PvP pressure.",
        "On the next pull, use stealth only to reset enemy information rather than to open. Reappear from a different side and finish the fight. Success means stealth changes what the opponent knows; merely becoming invisible while remaining on the same predictable line is not a complete reset.",
      ],
    },
    {
      heading: "Shadowstrix readiness checklist",
      bullets: [
        "The target is isolated, distracted, or already committed before entry.",
        "One mobility option remains outside the damage chain.",
        "The retreat route does not cross the enemy frontline.",
        "Stealth changes angle or timing rather than pausing in place.",
        "The chase ends when support, PvE, or open terrain removes the advantage.",
        "Trio allies know the intended backline target before the ambush begins.",
      ],
    },
  ],
  seer: [
    {
      heading: "Seer practice drill",
      paragraphs: [
        "Use a low-risk run to distinguish prevention from recovery. Against a readable PvE attack, protect before the hit on one pull and heal after the hit on another. Compare the time, position, and resource cost. This teaches which response preserves team tempo and which merely repairs a mistake.",
        "For solo practice, choose an offensive loop that defeats ordinary enemies without consuming the strongest protective tool. For trio practice, stand on a separate line from the ally most likely to be pressured. Success means you can see both teammates without offering one enemy attack all three targets.",
      ],
    },
    {
      heading: "Seer readiness checklist",
      bullets: [
        "Protection arrives before predictable burst, not after the ally falls.",
        "Minor chip damage does not consume the emergency response.",
        "The solo setup has a repeatable personal damage loop.",
        "Healing happens behind cover or after control creates time.",
        "The Seer is close enough to help without sharing the frontline's angle.",
        "The team knows when healing, shielding, or peel is unavailable.",
      ],
    },
  ],
  "withered-knight": [
    {
      heading: "Withered Knight practice drill",
      paragraphs: [
        "Choose a doorway or narrow lane and let an ordinary enemy enter Greatsword reach before committing. After the swing, step back and observe the recovery instead of immediately chaining another attack. The drill teaches how the threat zone controls movement even when no hit is thrown.",
        "For Polearm & Shield, practice a pull or pin only when the destination is safe and an ally could follow. Then defend briefly and reposition before energy is exhausted. Success is creating a favorable formation; moving a target without considering its landing point is not useful control.",
      ],
    },
    {
      heading: "Withered Knight readiness checklist",
      bullets: [
        "Heavy attacks answer a commitment rather than begin from open ground.",
        "The target's landing point is checked before a pull or displacement.",
        "Shield use ends before energy reaches an emergency state.",
        "Slow recovery does not expose the back to a second angle.",
        "Solo routes include a retreat before the first heavy exchange.",
        "Trio allies receive a call before a pull, pin, or remote rescue.",
      ],
    },
  ],
};

const classBeginnerDirections: Record<string, GuideSection[]> = {
  mercenary: [
    {
      heading: "Beginner direction and sequence logic",
      paragraphs: [
        "Start with Sword & Shield and build a three-part sequence: observe one committed attack, defend it, then answer with the shortest punish that keeps guard and stamina available. Add a longer follow-up only when the opponent has spent its response. This makes the class teach timing before equipment complexity.",
        "Move toward Hammer after you can predict where an enemy must stand. The useful sequence is space first, charge second, impact third, and reset immediately if the target leaves the threat area. Do not turn a missed charge into a long chase.",
      ],
      note: "Beginner success signal: you finish an ordinary exchange with enough defense to handle an unexpected second enemy.",
    },
  ],
  sorcerer: [
    {
      heading: "Beginner direction and sequence logic",
      paragraphs: [
        "Begin with the shortest reliable cast and one clear escape. The sequence is quick pressure, movement control, reposition, then a longer effect only after the target is committed or occupied. If the opening spell does not change movement, do not layer the slowest cast on top of it.",
        "Practice casting beside cover rather than at maximum visible range in the open. A good reset breaks line of sight, restores a lane, and lets the next quick spell protect the longer setup. Damage added before this rhythm is stable usually makes the failure faster rather than fixing it.",
      ],
      note: "Beginner success signal: an interrupted long cast does not leave the character without a quick response or covered retreat.",
    },
  ],
  blackarrow: [
    {
      heading: "Beginner direction and sequence logic",
      paragraphs: [
        "Use a simple three-angle sequence: deliberate opener from cover, immediate relocation, then either a follow-up shot or retreat depending on the target's response. The sequence should survive a missed opener. If the plan requires perfect aim from one exposed position, it is not yet beginner-safe.",
        "Choose frequent-hit pressure when it helps reveal movement and reserve the largest commitment for an ally's control or a predictable PvE action. When the target closes, create separation before drawing again. Backpedaling while continuing to fire usually preserves neither aim nor distance.",
      ],
      note: "Beginner success signal: every shot is taken from a position that already has a second angle or covered exit.",
    },
  ],
  shadowstrix: [
    {
      heading: "Beginner direction and sequence logic",
      paragraphs: [
        "Build the first sequence around a short ambush, not maximum burst: approach unseen, confirm isolation, strike briefly, then leave with one mobility option still unused. Repeat only after stealth or terrain has changed the opponent's information. This teaches selection and recovery before combo length.",
        "Dual Blades or repeated-hit pressure should stop when the target reaches support or when PvE begins to surround the route. Dagger burst should stop when the expected opening fails. The class becomes safer when the player can cancel a plan early rather than trying to force every entry into a finish.",
      ],
      note: "Beginner success signal: a failed ambush becomes a clean reset instead of consuming every movement tool.",
    },
  ],
  seer: [
    {
      heading: "Beginner direction and sequence logic",
      paragraphs: [
        "Begin with a hybrid direction that can clear ordinary PvE and still protect one dangerous moment. The sequence is readable pressure, protection before predictable burst, then healing or control after cover creates time. Avoid a full support investment until the trio consistently responds to calls.",
        "With Mace, use mobility to stay connected to the team rather than to begin a separate frontline fight. With Catalyst, place control where an enemy must move and keep sight of both allies. A protective skill has value only when the saved teammate can act during the window.",
      ],
      note: "Beginner success signal: minor damage is handled without spending the response reserved for a committed dive or extraction contest.",
    },
  ],
  "withered-knight": [
    {
      heading: "Beginner direction and sequence logic",
      paragraphs: [
        "Start by controlling one doorway or lane. Let the enemy enter Greatsword reach, use a deliberate answer, then respect the recovery before adding another attack. Build sigil or Reckoning pressure only after the basic reach-and-reset rhythm is readable in the current client.",
        "For Polearm & Shield, the sequence is choose the landing area, call the pull or pin, let allies follow, then defend and reposition before energy is exhausted. Do not use displacement simply because it is available; moving the wrong target into the wrong space can help the opponent.",
      ],
      note: "Beginner success signal: every heavy commitment or pull has a planned recovery position and does not surprise the trio.",
    },
  ],
};

const fixDeepening: Record<string, GuideSection[]> = {
  "fatal-error-fix": [
    {
      heading: "Prove whether a change helped",
      paragraphs: [
        "Use the same launch path after each change and record the furthest repeatable stage: launcher, title screen, camp, loading screen, or active hunt. One successful launch is encouraging but does not prove stability. Repeat the smallest safe test before combining more changes.",
        "If disabling an overlay or returning graphics to default has no effect, restore the original setting. A clean troubleshooting record is more valuable than accumulating permanent changes whose purpose is no longer known.",
      ],
    },
    {
      heading: "When to stop local troubleshooting",
      bullets: [
        "The same fatal error appears after update, restart, and file verification.",
        "The failure began immediately after an official update and affects other players.",
        "Windows records a repeating faulting module or device-loss message.",
        "A crash occurs across default settings with nonessential overlays closed.",
        "The workaround would require deleting saves, changing firmware, or bypassing security.",
        "You have the timestamp, client version, platform, error text, and reproduction steps needed for support.",
      ],
    },
  ],
  "stuttering-fix": [
    {
      heading: "Run a repeatable frame-pacing test",
      paragraphs: [
        "Select one route that includes traversal, a camera turn, and a modest combat effect. Record whether the hitch occurs at the same location, only on the first pass, during every effect, or after a longer session. Those patterns separate traversal or shader behavior from sustained GPU load or memory pressure.",
        "Change one setting and repeat the same route. Keep the change only when the hitch frequency or severity improves without creating a new problem. Average FPS alone can hide a poor frame-time result, so judge the consistency you can feel during movement and combat.",
      ],
    },
    {
      heading: "Stutter evidence worth keeping",
      bullets: [
        "Resolution, display mode, frame cap, and upscaling mode.",
        "GPU driver version and whether a clean restart followed installation.",
        "Whether ray tracing, overlays, and capture software were active.",
        "The first-run versus repeat-run behavior on the same route.",
        "GPU, CPU, and memory pressure during the hitch if available.",
        "A short reproduction description that avoids claiming a universal fix.",
      ],
    },
  ],
  "crashing-fix": [
    {
      heading: "Separate a crash from a disconnect",
      paragraphs: [
        "A desktop return, frozen process, or operating-system application fault belongs in the crash path. A return to the title screen with a network message belongs in connection troubleshooting. A system restart, display-driver recovery, or device-loss message should be recorded separately because it changes the evidence support needs.",
        "After classifying the event, repeat only the safest baseline: current client, restarted platform, verified files, default or known-stable graphics, and nonessential overlays closed. Do not mix account, network, and graphics changes in one test.",
      ],
    },
    {
      heading: "Rollback and escalation rules",
      bullets: [
        "Restore any graphics or overlay change that does not improve the same reproduction.",
        "Do not delete progression data or reinstall the operating system for one game crash.",
        "Stop overclocking or undervolting only as a reversible diagnostic test.",
        "Escalate a repeatable crash with timestamp, stage, client version, and error evidence.",
        "Mention whether the crash occurs in camp, loading, combat, or extraction.",
        "Recheck official known issues before repeating a workaround after a patch.",
      ],
    },
  ],
  "connection-fix": [
    {
      heading: "Use a two-account comparison when possible",
      paragraphs: [
        "If one account can match on the same device and network while another cannot, focus on account region, entitlement, party state, and version. If both accounts fail only on one network, then local routing or platform connectivity becomes more plausible. This comparison is more useful than immediately changing router settings.",
        "For friends, test solo matchmaking before creating the party. If every player can match separately but the group cannot, compare the eligible region, crossplay preference, client version, and party leader. That result does not prove a global server outage.",
      ],
    },
    {
      heading: "Connection support packet",
      bullets: [
        "Exact error text and the stage where it appears.",
        "Platform, storefront account region, and visible server choice.",
        "Client version and time of the failed attempt with time zone.",
        "Whether solo matchmaking and party matchmaking fail differently.",
        "Whether another account or network changes the result.",
        "Only the conservative network changes tested and whether each was restored.",
      ],
    },
  ],
};

const deliveryDepth: Record<string, GuideSection[]> = {
  "beginner-guide": [
    {
      heading: "Know when the first run has already succeeded",
      paragraphs: [
        "A beginner run is successful when it completes the learning objective and still has a realistic return plan. That can happen before the bag is full. If you learned the defensive timing, found the return requirement, or completed the intended task, compare the remaining healing, escape tool, and route risk before opening another room.",
        "Leave when the original objective is complete and the next fight risks more than it teaches. Continue only when the kit is healthy, the return plan is known, and the next action has a specific purpose. This rule turns extraction into a planned decision instead of a late reaction to a nearly lost run.",
      ],
    },
  ],
  "how-to-extract": [
    {
      heading: "Audit a failed extraction",
      paragraphs: [
        "Start with the first broken condition. Did the squad begin without the required item, enter with low healing, fail to watch an approach, or split between finishing and chasing? The final hit is rarely the most useful explanation. Record the earliest decision that removed a safe option.",
        "On the next attempt, change one condition only. Arrive earlier, assign roles, or preserve a defensive cooldown. If the official client behavior does not match this sequence after an update, consult the current known-issues and patch-notes pages before assuming a new universal rule.",
      ],
    },
  ],
  "best-class": [
    {
      heading: "Choose by the problem you want the class to solve",
      table: {
        headers: ["Player problem", "First class to test", "Alternative", "Reason to reconsider"],
        rows: [
          ["I lose every close exchange", "Mercenary", "Withered Knight", "Choose range instead if timing is not enjoyable"],
          ["I cannot control where fights happen", "Sorcerer", "Blackarrow", "Both require planned sightlines and an exit"],
          ["I want to choose when PvP begins", "Shadowstrix", "Blackarrow", "Ambush freedom has a higher recovery cost"],
          ["My trio collapses under one dive", "Seer", "Mercenary", "The team must act inside the protection window"],
          ["I want deliberate reach and control", "Withered Knight", "Mercenary", "Slow recovery punishes impatient pursuit"],
          ["I prefer aim and scouting", "Blackarrow", "Sorcerer", "Closed terrain can remove the preferred range"],
        ],
      },
    },
    {
      heading: "What to do after choosing the wrong class",
      paragraphs: [
        "Do not immediately sell equipment or copy a completely different build. Run a replaceable kit and isolate the friction: aim, range, recovery, resource timing, team dependence, or difficulty disengaging. Then compare that one problem with another class's normal loop.",
        "Switch when the class repeatedly asks for a decision you do not enjoy making, not simply after one loss. Stay when the loop feels right but execution is inconsistent; use the class page's practice drill. A class choice is recoverable because early experiments should be made with replaceable gear rather than a rare investment.",
      ],
    },
    {
      heading: "Best Class and Tier List answer different questions",
      paragraphs: [
        "Best Class starts with the player: preferred range, mechanical comfort, mode, teammates, and tolerance for risk. Tier List starts with an editorial comparison under stated criteria. A class can rank lower in a general table and still be the best choice for a player who executes its loop consistently.",
        "Use this page to select two candidates. Use the Tier List to understand their mode-dependent tradeoffs, then use the individual class pages to test the opener, defense, exit, and formal-launch changes before investing in a build.",
      ],
    },
  ],
  "class-tier-list": [
    {
      heading: "What moves a class between tiers",
      table: {
        headers: ["Change", "Most affected context", "Question to retest"],
        rows: [
          ["Mobility or escape adjustment", "Solo and PvP", "Can the class still leave after a failed opener?"],
          ["Control duration or reliability", "Trio and PvP", "Can allies capitalize before the target recovers?"],
          ["Resource or energy cost", "All modes", "How many repeatable actions fit before a reset?"],
          ["PvE damage or area adjustment", "PvE and progression", "Does ordinary clearing consume the emergency response?"],
          ["Shielding, healing, or peel adjustment", "Trio", "Does protection still reverse a committed enemy push?"],
          ["Weapon recovery adjustment", "Beginner and solo", "Is a missed commitment still survivable?"],
        ],
      },
    },
    {
      heading: "Personal tier calibration",
      paragraphs: [
        "Take the editorial tier as a shortlist, then score your own results across five replaceable runs. Record whether the opener created advantage, defense answered surprise pressure, PvE preserved resources, and extraction remained possible after a mistake. Do not count only kills.",
        "Move a class up in your personal list when its normal loop remains repeatable under pressure. Move it down when the advertised strength depends on aim, coordination, or timing you cannot yet reproduce. That change describes player fit, not an official balance verdict.",
      ],
    },
  ],
  builds: [
    {
      heading: "Beginner, solo, and trio build priorities",
      table: {
        headers: ["Context", "First priority", "Second priority", "Reject the setup when"],
        rows: [
          ["Beginner", "Readable repeatable loop", "One forgiving defensive answer", "Every success requires a rare trigger"],
          ["Solo", "Personal pressure or clear speed", "Independent escape and recovery", "The loop needs an ally to create every opening"],
          ["Trio", "A defined team job", "Timing that allies can follow", "Utility and damage compete without a callout plan"],
        ],
      },
    },
    {
      heading: "A build is complete when it has answers",
      paragraphs: [
        "A complete direction explains the opener, repeatable damage or control loop, defensive response, disengagement, PvE resource plan, and extraction role. It also states the condition under which the player stops the combo. More rarity or more triggered effects do not repair a missing answer.",
        "Write those answers in plain language before pursuing expensive affixes. When an item improves one answer but breaks another—for example, more commitment damage at the cost of the only safe reset—keep the stable version until the new direction passes the three-run validation.",
      ],
    },
  ],
  gameplay: [
    {
      heading: "Plan a route around decisions, not a fixed map script",
      paragraphs: [
        "Before leaving camp, define the objective, acceptable kit loss, and extraction threshold. On entry, identify nearby cover, sound-producing fights, and at least one direction that does not require crossing the center of the current threat. Exact safe routes cannot be guaranteed because players and PvE change the risk.",
        "At every transition, compare four resources: healing, class resource, time, and bag value. If two are already weak, rotate toward the return plan. If only one is weak and the objective remains incomplete, choose the shortest action that repairs it instead of extending into unknown rooms.",
      ],
    },
    {
      heading: "Target priority in mixed PvE and PvP",
      table: {
        headers: ["Situation", "First priority", "Why"],
        rows: [
          ["PvE can interrupt healing or casting", "Create cover or control the interrupter", "A player can punish the forced recovery"],
          ["A player is fighting PvE", "Decide whether to leave before revealing position", "Information may be more valuable than immediate damage"],
          ["A third party arrives", "Break the shared sightline", "Trading damage can make both sides easy to finish"],
          ["A teammate is isolated", "Restore one defensible formation", "Three separate duels remove team utility"],
          ["Extraction is contested", "Protect the return condition", "A long chase can win combat but lose the run"],
        ],
      },
    },
    {
      heading: "A five-line post-run review",
      bullets: [
        "Objective: what the run intended to accomplish.",
        "First advantage: the earliest decision that improved the position.",
        "First avoidable loss: the moment a safe option disappeared.",
        "Extraction decision: why the team continued, returned, or failed to decide.",
        "Next test: one route, control, class, or inventory change to repeat.",
      ],
    },
  ],
  "solo-mode": [
    {
      heading: "Build a solo route with three exits",
      paragraphs: [
        "For each intended objective, identify a retreat before the first fight, a covered reset near the objective, and the direction used when extraction becomes the priority. These are decision exits, not guaranteed safe corridors. Their purpose is to prevent one blocked doorway from turning every encounter into an all-in fight.",
        "When a route becomes loud, crowded, or depleted of cover, leave before confirming every threat. Solo play values private information. An opponent who has not seen the final rotation cannot pursue with certainty, while an extra attack may reveal both location and remaining resources.",
      ],
    },
    {
      heading: "Solo inventory and recovery rules",
      bullets: [
        "Sort only after breaking sightline and listening.",
        "Keep healing accessible rather than buried beneath low-purpose loot.",
        "Use replaceable gear while testing a new class or route.",
        "Extract after the objective when the next fight risks the escape tool.",
        "After a loss, rebuild the same learning plan before changing class and route together.",
        "Treat a low-contact run as successful routing, not proof of a PvE-only queue.",
      ],
    },
  ],
  "pve-only": [
    {
      heading: "What official PvE language does and does not promise",
      paragraphs: [
        "Official descriptions confirm Corroded enemies, bosses, loot, progression, and a world explored alone or with teammates. They also describe extraction competition and the danger posed by other Gyldhunters. That combination supports a PvPvE reading; it does not confirm a separate queue with full progression and no rival players.",
        "Training, tutorial, or practice functionality should not be described as a PvE-only mode unless an official page says it supports the same loop and rewards. This page will change only when a current announcement or store description defines such a mode.",
      ],
    },
    {
      heading: "How to reduce PvP exposure without promising safety",
      table: {
        headers: ["Action", "What it can do", "What it cannot prove"],
        rows: [
          ["Use an edge route", "Reduce common crossing angles", "That no player uses the same route"],
          ["Avoid combat sounds", "Lower the chance of joining a fight", "That another player did not hear your PvE"],
          ["Keep the objective compact", "Shorten exposure time", "That extraction will be uncontested"],
          ["Preserve disengagement", "Create a response to contact", "That escape always succeeds"],
          ["Leave after the PvE goal", "Avoid optional risk", "That the queue is PvE-only"],
        ],
      },
    },
  ],
  crossplay: [
    {
      heading: "Crossplay eligibility checklist",
      bullets: [
        "Both players own and launch the current game build on a supported platform.",
        "Console accounts have the online access and permissions required by their platform.",
        "The crossplay preference is compatible on both clients.",
        "Store-account regions lead to the same eligible server environment.",
        "Both players can enter online matchmaking separately.",
        "The party is recreated after any version, setting, or account change.",
      ],
    },
    {
      heading: "A crossplay test with useful evidence",
      paragraphs: [
        "Have each player restart, record the visible client version, and enter matchmaking separately. Then leave all parties, compare crossplay and region settings, and send one fresh invite from the intended leader. Record the exact step that fails: friend visibility, invite delivery, party join, or matchmaking.",
        "If the party forms, crossplay compatibility is working for that group even if latency is poor. If separate matchmaking works but the party does not, the evidence points toward group compatibility, region, or party state rather than a universal outage. Report the exact result to official support.",
      ],
    },
  ],
  servers: [
    {
      heading: "Choose and compare a server responsibly",
      paragraphs: [
        "Use only the choices displayed by the current client and compatible with the account build. If several are eligible, compare them at similar times with the same local connection. One match cannot establish a permanent best server because routing, demand, and physical distance vary.",
        "For a squad, prioritize an eligible region everyone can access before comparing latency. The lowest-latency region for one player is unusable if another account cannot enter that environment. Record the visible label rather than translating it into an unconfirmed city.",
      ],
    },
    {
      heading: "Server report checklist",
      bullets: [
        "Platform and storefront account region.",
        "Exact visible server or region label.",
        "Local country and network provider.",
        "Date, local time, and time zone.",
        "Whether login, party creation, matchmaking, or in-hunt play failed.",
        "Whether solo and squad attempts produced the same result.",
        "A screenshot of the message without exposing personal account data.",
      ],
    },
  ],
  "region-lock": [
    {
      heading: "Check region compatibility before purchase",
      paragraphs: [
        "Ask each player for the storefront account region, not only where they currently live. Compare that information with the current official launch FAQ and the server choices shown by the client. If the accounts fall into different eligible builds, crossplay support does not guarantee that the group can join.",
        "Do this before buying a second copy or arranging a squad. A physical move, travel, or fast connection does not automatically change the store-account classification. If the account appears misclassified, use the platform or game support route instead of unofficial bypass instructions.",
      ],
    },
    {
      heading: "Safe evidence for a region support request",
      table: {
        headers: ["Include", "Reason", "Exclude"],
        rows: [
          ["Platform and store-account country", "Establishes the relevant build rule", "Payment details"],
          ["Visible client region choices", "Shows actual eligibility", "Assumed hidden server cities"],
          ["Friend's platform and account country", "Explains party compatibility", "Their private account credentials"],
          ["Exact party or matchmaking error", "Locates the failure stage", "Claims that all servers are down"],
          ["Client version and time", "Supports current investigation", "VPN or bypass instructions"],
        ],
      },
    },
  ],
  "play-with-friends": [
    {
      heading: "Assign trio responsibilities before matchmaking",
      table: {
        headers: ["Responsibility", "Before combat", "During extraction"],
        rows: [
          ["Initiator", "Names the target and commitment window", "Controls the nearest contest without overchasing"],
          ["Response", "Keeps peel, control, or healing available", "Protects the interaction and carrier"],
          ["Lookout", "Tracks sound and the second angle", "Reports approach and preserves the retreat"],
        ],
      },
    },
    {
      heading: "Recover a broken party without random changes",
      paragraphs: [
        "First prove that every player can enter online matchmaking separately. Then compare version, region eligibility, platform permission, and crossplay preference. Leave old parties, restart once, and send one fresh invite. Changing leaders repeatedly before recording the failing step makes the result harder to interpret.",
        "If the invite works but matchmaking does not, keep the party and record the queue result. If one player cannot match alone, focus on that account or platform. If all players fail at the same time, check current official communication before changing local networks.",
      ],
    },
  ],
  "fatal-error-fix": [
    {
      heading: "Fatal error support record",
      table: {
        headers: ["Field", "Example format", "Why it helps"],
        rows: [
          ["Failure stage", "Launch, loading, combat, extraction", "Narrows the reproduction"],
          ["Error text", "Exact message or screenshot", "Avoids guessing the cause"],
          ["Version and platform", "Client build and Windows version", "Separates old reports"],
          ["Last safe change", "One test and its result", "Prevents duplicate troubleshooting"],
          ["Timestamp", "Date, time, and time zone", "Connects the event with service or patch activity"],
        ],
      },
    },
  ],
  "stuttering-fix": [
    {
      heading: "Interpret the stutter pattern",
      table: {
        headers: ["Pattern", "Possible category", "Next controlled comparison"],
        rows: [
          ["First visit only", "Shader or asset preparation", "Repeat the same route after a restart"],
          ["Every area boundary", "Traversal or storage pressure", "Compare the same boundary from an SSD"],
          ["Only effect-heavy combat", "GPU or effects load", "Lower effects after establishing a frame cap"],
          ["Worsens over time", "Memory or thermal pressure", "Record a short and long-session result"],
          ["Constant low rate", "Sustained performance limit", "Use the graphics adjustment order"],
        ],
      },
    },
  ],
  "crashing-fix": [
    {
      heading: "PC and console crash evidence differs",
      paragraphs: [
        "On PC, record the exact application error, faulting module if Windows provides one, graphics driver version, overlays, and whether the process closes or freezes. On console, record the platform error code, whether the game returns to the dashboard, the current system update, and the controller or UI action immediately before the crash.",
        "Do not transfer a PC DLL, driver, or shader workaround to console. Likewise, a console cache or entitlement step does not diagnose a Windows application fault. Both platforms benefit from the same basics—current version, restart, exact stage, and official known-issue check—but escalation evidence must match the platform.",
      ],
    },
  ],
  "connection-fix": [
    {
      heading: "Restore every network test that does not help",
      paragraphs: [
        "Use a wired connection or router restart only as a controlled comparison. If a DNS change, Wi-Fi adjustment, or party recreation does not change the same error, return it to the prior state before the next test. Avoid leaving several undocumented network changes active.",
        "Do not open broad port ranges, disable security, change account region, or use a VPN based on an unverified fix. Connection errors can come from policy, version, entitlement, party state, service availability, or routing, and risky changes can make the original evidence less clear.",
      ],
    },
  ],
  "known-issues": [
    {
      heading: "How an issue moves through this tracker",
      table: {
        headers: ["State", "Required evidence", "Reader action"],
        rows: [
          ["Officially acknowledged", "Named in an official known-issues post", "Follow the official workaround if one exists"],
          ["Player-reported", "Repeated reports but no official confirmation", "Treat as a lead, not a universal defect"],
          ["Fix announced", "Specific official patch note", "Install the update and retest"],
          ["Verified resolved", "Current client no longer reproduces the exact case", "Remove obsolete workaround wording"],
          ["Still unclear", "Conflicting or incomplete evidence", "Keep the limitation explicit"],
        ],
      },
    },
    {
      heading: "Report a new issue without overstating it",
      paragraphs: [
        "Record the current client version, platform, account region when relevant, exact error, reproduction sequence, frequency, and last successful state. Add a short screenshot or clip only when it does not reveal account details. Compare the report with the official list before assigning a cause.",
        "One report can show that a problem happened; it cannot establish how common it is or that every similar symptom shares the same cause. This site labels community evidence and waits for an official note before presenting a fix or scope as confirmed.",
      ],
    },
  ],
  "patch-notes": [
    {
      heading: "Turn a patch note into a useful test",
      paragraphs: [
        "Start with the exact official wording and identify the smallest affected action. If the note mentions control, test the same opener and escape. If it mentions energy, record the repeatable loop before and after. If it mentions extraction, reproduce the same return stage on the updated client.",
        "Keep observation separate from conclusion. A changed animation can improve clarity without changing damage; a successful match after maintenance does not prove every server is stable. Update the relevant guide only after the note or repeatable test changes its practical answer.",
      ],
    },
    {
      heading: "Patch-note archive fields",
      bullets: [
        "Official title, publication date, and direct source URL.",
        "Platforms and client version when the announcement provides them.",
        "Classes, systems, rewards, or issues explicitly named.",
        "Related guide pages that require a focused retest.",
        "Old workarounds that should be removed after verification.",
        "Questions the note does not answer, kept as unconfirmed rather than completed from memory.",
      ],
    },
  ],
  "settings-fixes": [
    {
      heading: "Use the hub as a symptom router",
      paragraphs: [
        "Choose the page that matches the first observable failure: fatal dialog, desktop crash, uneven frame pacing, or online-session error. If two symptoms appear together, test the earlier one in the sequence first and preserve the timestamp, version, and exact message for both.",
      ],
    },
  ],
  rewards: [
    {
      heading: "Verify before claiming any reward",
      paragraphs: [
        "Match the reward name, eligibility, start and end time, platform, and claim method against the direct official announcement. A launch gift, Twitch Drop, giveaway, game key, and redeem code are different mechanisms and should never be merged into one active-code list.",
      ],
    },
  ],
  updates: [
    {
      heading: "What every update entry must preserve",
      paragraphs: [
        "Each entry should keep the direct official source, publication date, affected platform or version when provided, and the guides that need retesting. Editorial interpretation stays separate from the official change, and an old workaround is removed only after the current behavior is verified.",
      ],
    },
  ],
};

const classFaqs: Record<string, { question: string; answer: string }[]> = {
  mercenary: [
    { question: "Should Mercenary block every attack?", answer: "No. Guard is a tool for reading and surviving a committed exchange, but holding it without repositioning can surrender stamina and space. Use a short defensive answer, punish when earned, then reset." },
    { question: "When should Mercenary choose Hammer over Sword & Shield?", answer: "Choose Hammer when you can create predictable commitment windows and accept slower recovery. Sword & Shield is the clearer learning route when defense, parry feedback, and frontline stability matter more." },
  ],
  sorcerer: [
    { question: "Why do Sorcerer casts keep getting interrupted?", answer: "The cast may be starting before space or control has been established. Open with a faster effect, force movement, and reserve the longest cast for a protected window rather than treating it as the opener." },
    { question: "Is Sorcerer suitable for solo play?", answer: "It can be, but solo removes the teammate who would protect longer casts. A solo setup needs a quick response, a preserved escape, and a route that converts distance into another safe angle." },
  ],
  blackarrow: [
    { question: "What should Blackarrow do after missing a charged shot?", answer: "Break the predictable angle and relocate. Forcing another long shot from the same exposed position gives the opponent time to close and removes the range advantage." },
    { question: "Is Blackarrow only a solo class?", answer: "No. In a trio, ranged pressure becomes more reliable when a frontline or control effect makes the target's movement predictable. The archer should still keep a personal separation plan." },
  ],
  shadowstrix: [
    { question: "Should Shadowstrix use every mobility skill in the opener?", answer: "Usually not. One movement or information-reset option should remain available if the target survives or a third party arrives. An entry without an exit is an all-in gamble." },
    { question: "What is Shadowstrix looking for before an ambush?", answer: "An isolated, occupied, or exposed target; a route that conceals the approach; and a retreat that does not cross the enemy frontline. Damage alone does not make the engagement favorable." },
  ],
  seer: [
    { question: "Can Seer play solo?", answer: "Yes, but a solo direction needs repeatable personal pressure rather than a trio-only support investment. Preserve protection for the moment it changes the exchange instead of spending it on minor damage." },
    { question: "When should Seer heal an ally?", answer: "After cover or control creates time, and before the team separates. For predictable burst, prevention through timely protection may preserve more tempo than trying to repair the damage afterward." },
  ],
  "withered-knight": [
    { question: "What is the biggest Withered Knight positioning mistake?", answer: "Committing a slow attack or pull without checking the recovery and landing area. The class is strongest when reach and control shape a lane, not when it chases faster targets across open ground." },
    { question: "Are Greatsword and Polearm & Shield the same playstyle?", answer: "No. Greatsword emphasizes deliberate reach and sigil pressure, while Polearm & Shield adds formation control and defensive utility. Build around one main loop before mixing supporting choices." },
  ],
};

function appendSections(page: GuidePageData): GuideSection[] {
  const sections: GuideSection[] = [];
  if (page.path === "beginner-guide") sections.push(...beginnerSections);
  if (page.path === "how-to-extract") sections.push(...extractionSections);
  if (page.path === "class-tier-list") sections.push(...tierSections);
  if (page.path === "builds") sections.push(...buildSections);
  if (page.path === "servers") sections.push(...serverSections);
  if (page.path === "region-lock") sections.push(...regionSections);
  if (fixAdditions[page.path]) sections.push(...fixAdditions[page.path]);
  if (fixDeepening[page.path]) sections.push(...fixDeepening[page.path]);
  if (page.path.startsWith("classes/")) {
    const slug = page.path.split("/")[1];
    sections.push(
      ...(classPlaybooks[slug] ?? []),
      ...(classAdvanced[slug] ?? []),
      ...(classBeginnerDirections[slug] ?? []),
    );
  }
  sections.push(
    ...(commonPractical[page.path] ?? []),
    ...(deepeningSections[page.path] ?? []),
    ...(deliveryDepth[page.path] ?? []),
  );
  return sections;
}

function pageImages(page: GuidePageData, sections: GuideSection[]) {
  const heroKey = coreHero[page.path] ?? normalHero[page.path];
  if (!heroKey || !imageInfo[heroKey]) return {};
  const desired = page.path.startsWith("classes/") ? 2 : corePaths.has(page.path) ? 3 : 1;
  const heroIndex = imageKeys.indexOf(heroKey);
  const headings = sections.map((section) => section.heading);
  const images: ContentImage[] = [];
  const assignments = explicitImageAssignments[page.path];
  if (assignments) {
    for (const assignment of assignments) {
      if (assignment.key === heroKey) continue;
      images.push({
        ...contentImage(assignment.key, assignment.heading),
        caption: assignment.caption,
      });
    }
  } else {
    const selected = explicitContent[page.path] ?? Array.from({ length: desired }, (_, index) => imageKeys[(heroIndex + (index + 1) * 7) % imageKeys.length]);
    for (let index = 0; index < selected.length; index++) {
      const candidate = selected[index];
      if (candidate === heroKey) continue;
      images.push(contentImage(candidate, headings[Math.min(index, headings.length - 1)]));
    }
  }
  const hero = imageInfo[heroKey];
  return {
    image: hero.src,
    imageAlt: hero.alt,
    heroImage: hero.src,
    heroImageAlt: hero.alt,
    heroImageCaption: explicitHeroCaptions[page.path] ?? hero.caption,
    heroImageSourceUrl: hero.sourceUrl,
    heroImageWidth: hero.width,
    heroImageHeight: hero.height,
    contentImages: images,
  };
}

function sourceEnhancements(path: string) {
  if (path === "how-to-extract") return [OFFICIAL_SITE, KNOWN_ISSUES_OFFICIAL, LAUNCH_UPDATE];
  if (path === "beginner-guide" || path === "gameplay") return [OFFICIAL_SITE, LAUNCH_FAQ];
  if (["solo-mode", "pve-only"].includes(path)) return [OFFICIAL_SITE, COMMUNITY_AMA];
  if (path === "classes" || path.startsWith("classes/") || path.startsWith("builds/") || ["best-class", "best-solo-class", "class-tier-list", "builds"].includes(path)) return [DEVNOTE_7, COMMUNITY_AMA];
  if (["servers", "region-lock", "crossplay", "play-with-friends"].includes(path)) return [LAUNCH_FAQ, COMMUNITY_AMA];
  if (["fatal-error-fix", "stuttering-fix", "crashing-fix", "best-settings"].includes(path)) return [DEVNOTE_7, KNOWN_ISSUES_OFFICIAL, LAUNCH_UPDATE];
  if (path === "controller-guide") return [KNOWN_ISSUES_OFFICIAL, LAUNCH_UPDATE, LAUNCH_FAQ];
  if (path === "connection-fix") return [LAUNCH_FAQ, COMMUNITY_AMA, KNOWN_ISSUES_OFFICIAL];
  if (["codes", "twitch-drops", "launch-rewards", "skins"].includes(path)) return [LAUNCH_UPDATE, DEVNOTE_7, LAUNCH_FAQ];
  if (["price", "platforms", "system-requirements"].includes(path)) return [LAUNCH_FAQ];
  if (["known-issues", "patch-notes"].includes(path)) return [KNOWN_ISSUES_OFFICIAL, LAUNCH_UPDATE, DEVNOTE_7];
  return [];
}

export function enhancePage(page: GuidePageData): GuidePageData {
  const category = categoryByPath[page.path];
  const appended = appendSections(page);
  const sections = appended.length ? [...page.sections, ...appended] : page.sections;
  const isPolicy = page.category === "Site";
  const isCategory = page.pageType === "category" || ["classes", "builds", "gameplay"].includes(page.path);
  const extraSources = sourceEnhancements(page.path);
  const specificSources = page.sources.filter(
    (source) =>
      !source.url.endsWith("/announcements/") &&
      source.url !== "https://store.playstation.com/concept/10012369",
  );
  const sourceMap = new Map([...extraSources, ...specificSources].map((source) => [source.url, source]));
  const classSlug = page.path.startsWith("classes/") ? page.path.split("/")[1] : "";
  return {
    ...page,
    category: category?.label ?? page.category,
    breadcrumbLabel: page.breadcrumbLabel ?? page.h1.replace(/^Mistfall Hunter\s+/i, ""),
    categoryPath: isCategory ? "" : category?.path ?? "",
    pageType: page.tool === "class-picker"
      ? "webpage"
      : page.path === "about"
      ? "about"
      : page.path === "contact"
        ? "contact"
        : isPolicy
          ? "policy"
          : isCategory
            ? "category"
            : "article",
    sections,
    faqs: classSlug ? [...page.faqs, ...(classFaqs[classSlug] ?? [])] : page.faqs,
    sources: [...sourceMap.values()],
    ...pageImages(page, sections),
  };
}
