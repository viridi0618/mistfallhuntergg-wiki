import type { GuidePageData, GuideSection } from "@/lib/types";
import { COMMUNITY_AMA, DEVNOTE_7, LAUNCH_UPDATE, OFFICIAL_SITE, STEAM, STEAM_NEWS } from "./sources";

const checked = "2026-08-05";

const weaponSections: GuideSection[] = [
  {
    heading: "How Weapons Shape a Build",
    paragraphs: [
      "Weapon choice is tied closely to your skill direction. In Mistfall Hunter, the weapon family you hold helps define the talents, skills, and playstyle branches that make sense, which is why builds are described around a weapon archetype rather than a single stat loadout.",
      "Official material also confirms that players can switch weapons or combat routes during a fight. That makes a weapon a tactical choice in the moment, not a permanent lock, while the Loadout System handles saved configurations for repeatable setups.",
    ],
    note: "Official mechanic.",
  },
  {
    heading: "Weapons by Class",
    paragraphs: [
      "The six launch classes each arrive with a confirmed set of weapon families. Two classes still have a second weapon that has not been officially confirmed for release, so those entries are labeled rather than guessed.",
    ],
    subsections: [
      {
        heading: "Mercenary weapons",
        paragraphs: ["Confirmed weapons: Sword & Shield and Hammer. Sword & Shield favors sword-oriented offense with shield-oriented blocking and parrying, while Hammer emphasizes charged attacks and stun or control pressure."],
      },
      {
        heading: "Blackarrow weapons",
        paragraphs: ["Confirmed weapon: Bow. The Archer and Hunter playstyle branches are part of the launch kit. Bellring Games has said a second weapon will arrive in a later season, but its name has not been officially confirmed."],
      },
      {
        heading: "Sorcerer weapons",
        paragraphs: ["Confirmed weapon: Staff. Elemental and Stardust are the launch archetypes within the Staff kit rather than separate weapons. A second weapon was once described as being in development, but no final name is safe to publish from the sources reviewed."],
      },
      {
        heading: "Shadowstrix weapons",
        paragraphs: ["Confirmed weapons: Daggers and Dual Blades. Daggers support burst after breaking stealth and the cyclical stealth of Shadow Veil, while Dual Blades support wound accumulation and multi-hit damage stacking."],
      },
      {
        heading: "Seer weapons",
        paragraphs: ["Confirmed weapons: Catalyst and Mace. Catalyst can be built for offensive enhanced-orb pressure or a support direction with healing, shielding, buffs, and control. Mace supports speed-boost or high-frequency pressure and a Super Armor or damage-reduction direction."],
      },
      {
        heading: "Withered Knight weapons",
        paragraphs: ["Confirmed weapons: Greatsword and Polearm & Shield. Greatsword supports Consecutive Break, Delayed Detonation, and Wither stacks or sigil interaction. Polearm & Shield is official launch content that introduces six new skills, supports DPS and Support directions, and includes the ability to rescue a downed teammate from range."],
      },
    ],
    note: "Official launch content. Earlier material that described the Withered Knight second weapon as still in development predates its launch release and is not used here.",
  },
  {
    heading: "Official Playstyle Branches",
    table: {
      headers: ["Class", "Weapon", "Officially described direction"],
      rows: [
        ["Mercenary", "Sword & Shield", "Sword-oriented offense with shield-oriented blocking and parrying"],
        ["Mercenary", "Hammer", "Charged attacks with stun and control pressure"],
        ["Blackarrow", "Bow - Archer", "Fully charged shots, energy recovery, and Mysticfly Arrow burst interaction"],
        ["Blackarrow", "Bow - Hunter", "Ailment arrows, damage over time, crowd control, and basic attacks that extend debuff duration"],
        ["Sorcerer", "Staff - Elemental", "Fire, Thunder, and Ice reactions with damage and crowd control"],
        ["Sorcerer", "Staff - Stardust", "Large-area damage and control, with Stardust Arcana able to bypass parts of the chanting process"],
        ["Shadowstrix", "Daggers", "Burst after breaking stealth and Shadow Veil cyclical stealth"],
        ["Shadowstrix", "Dual Blades", "Wound accumulation and burst with multi-hit damage stacking"],
        ["Seer", "Catalyst", "Offensive enhanced-orb pressure or support with healing, shielding, buffs, and control"],
        ["Seer", "Mace", "Speed Boost or high-frequency pressure and Super Armor or damage-reduction play"],
        ["Withered Knight", "Greatsword", "Consecutive Break, Delayed Detonation, and Wither stacks or sigil interaction"],
        ["Withered Knight", "Polearm & Shield", "Six new launch skills with DPS and Support directions, including remote rescue of downed allies"],
      ],
    },
    note: "Editorial explanation organized from official class material. No absolute PvP or PvE ranking is claimed for any weapon.",
  },
  {
    heading: "Holy Weapons",
    paragraphs: [
      "Holy weapons were added as part of official launch content. They carry exclusive affixes that change how the weapon plays, which separates them from ordinary equipment in the same slot.",
      "Official material describes Holy weapons as drops from map Bosses, with different Bosses corresponding to different Holy weapons. No exact drop rate is published in the sources reviewed for this page.",
    ],
    note: "Official launch content. Exact drop rates are not currently confirmed in the official sources reviewed.",
  },
  {
    heading: "Affix Gems and Equipment Sockets",
    paragraphs: [
      "Equipment can carry a small number of inherent affixes, while a large part of build customization in the mid-to-late game comes from socketed Affix Gems. The system is therefore a combination of the base item and the gems you socket into it.",
      "Affix Gems have level and type restrictions. Official material has described an Affix Gem as able to carry up to two affixes, which makes gem selection a central part of a finished build rather than a minor bonus.",
    ],
    note: "Official mechanic. Unverified damage, durability, and affix values are not reproduced here.",
  },
  {
    heading: "Loadout and Build Share Codes",
    paragraphs: [
      "The Loadout System lets you save equipment configurations, and a Loadout Share Code can import a complete equipment and Affix Gem setup into your own Loadout. This is how players share a full build configuration without recreating it piece by piece.",
      "A Build Share Code is not a reward redemption code. It carries configuration data only, so it does not grant currency, items, or cosmetics, and entering it in the wrong interface will not deliver a reward.",
    ],
    note: "Official mechanic. Share codes are configuration data, not reward codes.",
  },
  {
    heading: "What Is Not Yet Confirmed",
    paragraphs: [
      "Blackarrow and Sorcerer have second weapons that are not yet officially confirmed for release, and no name is assigned to either here. Withered Knight's Polearm & Shield is the confirmed launch addition in that class.",
      "Exact weapon drop rates, market prices, and numeric attack, durability, or affix values are not published in the official sources reviewed for this page. Third-party databases such as MistfallDB contain hundreds of entries that include quality and value variants, so their record count cannot be read as a list of distinct weapons.",
    ],
    note: "Not currently confirmed in the official sources reviewed.",
  },
];

const weapons: GuidePageData = {
  path: "weapons",
  category: "Gameplay",
  eyebrow: "Weapon hub",
  keyword: "mistfall hunter weapons",
  title: "Mistfall Hunter Weapons: Every Launch Weapon Explained",
  description: "Mistfall Hunter weapons explained: every confirmed launch weapon per class, official playstyle branches, Holy weapons, Affix Gems, and loadout share codes.",
  h1: "Mistfall Hunter Weapons",
  answer: "Every class launches with a confirmed set of weapon families and official playstyle branches. Weapon choice is tied to your skill direction, and you can switch weapons or routes during a fight. Holy weapons, Affix Gems, and loadout share codes complete the system; exact drop rates and some second weapons are not yet confirmed in official sources.",
  updated: checked,
  published: checked,
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
  informationType: "Official weapon information with editorial explanation",
  pageType: "category",
  warning: "This page records confirmed mechanics and launch content. It does not publish drop rates, damage totals, or a best-weapon ranking that official sources do not provide.",
  sections: weaponSections,
  faqs: [
    { question: "How many weapons does each class have?", answer: "Every launch class has confirmed weapon families: Mercenary uses Sword & Shield and Hammer, Blackarrow uses the Bow, Sorcerer uses the Staff, Shadowstrix uses Daggers and Dual Blades, Seer uses Catalyst and Mace, and Withered Knight uses Greatsword plus Polearm & Shield. Second weapons for Blackarrow and Sorcerer are not yet officially confirmed." },
    { question: "Can I switch weapons during a fight?", answer: "Yes. Official material confirms that you can switch weapons or combat routes during combat, and the Loadout System lets you save equipment configurations." },
    { question: "Are Holy weapons in the game?", answer: "Yes. Holy weapons were added as official launch content. They carry exclusive affixes that change how the weapon plays and are officially described as drops from map Bosses, with different Bosses tied to different Holy weapons." },
    { question: "Is a build share code a reward code?", answer: "No. A Loadout Share Code imports a complete equipment and Affix Gem configuration; it is not a redeem code and does not grant currency or items." },
  ],
  related: ["classes", "builds", "gameplay", "how-to-extract", "patch-notes", "classes/mercenary", "classes/sorcerer", "classes/blackarrow", "classes/shadowstrix", "classes/seer", "classes/withered-knight"],
  sources: [OFFICIAL_SITE, DEVNOTE_7, COMMUNITY_AMA, LAUNCH_UPDATE, STEAM, STEAM_NEWS],
};

export const weaponPages: GuidePageData[] = [weapons];
