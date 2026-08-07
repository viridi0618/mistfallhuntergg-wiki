import type { GuidePageData } from "@/lib/types";
import { OFFICIAL_SITE, STEAM_NEWS } from "./sources";

const cipherList: GuidePageData = {
  path: "cipher-list",
  category: "Rewards",
  eyebrow: "Community-tested reference",
  keyword: "mistfall hunter cipher list",
  title: "Mistfall Hunter Cipher List: Clues & Correct NPCs",
  description: "Use this Mistfall Hunter cipher list to match clue words with the correct NPC, including community-tested mappings for Pip, Dramm, Sigrid, Merimo, Cazarro, Soekja, and Dew.",
  h1: "Mistfall Hunter Cipher List",
  answer: "Check the clue words shown on the cipher, then match them with the NPC table below. Ciphers are still present in the launch version—official August 1 mail rewards included an Ashen Cipher and an Abyssal Cipher—but Bellring Games has not published a complete clue-to-NPC answer key.",
  updated: "2026-08-07",
  published: "2026-08-07",
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
  informationType: "Official cipher availability with community-tested NPC mappings",
  warning: "NPC mappings are community-tested, not an official Bellring Games answer key.",
  heroImage: "/images/official/site-05.webp",
  heroImageAlt: "Gyldhunters examining loot and equipment in a dark chamber",
  heroImageCaption: "Loot decisions remain part of every high-risk hunt.",
  heroImageSourceUrl: "https://mistfallhunter.com/",
  heroImageWidth: 1600,
  heroImageHeight: 900,
  sections: [
    {
      heading: "How the cipher NPC clues work",
      paragraphs: [
        "Mistfall Hunter uses several camp NPCs that can decipher Cipher items. The important part is the clue text attached to the Cipher rather than assuming that the item name alone identifies the correct NPC.",
        "During the June Gylden Rush event, the in-game guide described a system in which giving a Cipher to the NPC who understood its secret could provide a bonus reward. Launch-era players continue to report the same clue-matching behavior, but this page does not promise a fixed bonus item, drop rate, or one-time reward rule unless Bellring Games publishes current details.",
      ],
      table: {
        headers: ["Cipher clue words", "NPC", "Confidence", "Evidence note"],
        rows: [
          ["Mantra", "Pip", "High", "Long-running community consensus; also repeated in launch-era reports."],
          ["Score, Plucking", "Pip", "High", "Multiple August reports independently identify Pip."],
          ["Tree Hollow, Secret Cache", "Pip", "Medium", "Current community confirmation exists, but fewer reports."],
          ["Fire, Brimstone, Ashes", "Dramm", "High", "Repeated blacksmith/forge mapping across older and current reports."],
          ["Anvil, Furnace", "Dramm", "Medium", "Current report matches Dramm's Workshop role."],
          ["Sealing Wax, Acid", "Sigrid", "High", "Multiple launch-era confirmations."],
          ["Residual Heat, Malt", "Sigrid", "High", "Repeated current reports identify Sigrid."],
          ["Hay, Cheese", "Merimo", "High", "Multiple launch-era reports."],
          ["Camel Bells, Salt Licks", "Merimo", "High", "Current reports include successful bonus-result confirmations."],
          ["Rugs, Caravan", "Merimo", "Medium", "Established during the June event; fewer fresh confirmations."],
          ["City State, Intelligence, Blood", "Cazarro", "Medium", "Established community mapping; fewer recent reports."],
          ["Insight, Balance", "Cazarro", "High", "Multiple independent August confirmations."],
          ["Covenant, Interest", "Cazarro", "High", "Repeated August 6–7 confirmations."],
          ["Stone, Steps, Tides", "Soekja", "Medium", "Established community mapping from the earlier Cipher event."],
          ["Guidance, Return", "Soekja", "High", "Multiple current confirmations; notably not Dew despite the wording."],
          ["Homeward, Echo, Anchor", "Dew", "Medium", "Established community mapping, but fewer fresh confirmations."],
          ["Prophecy, Spindle", "Dew", "High", "Current August reports identify Dew."],
        ],
      },
    },
    {
      heading: "What is officially confirmed about Ciphers?",
      paragraphs: [
        "Bellring Games officially included Ashen Cipher x1 and Abyssal Cipher x1 in the second wave of launch rewards announced on August 1, confirming that Cipher items remain part of the launch version.",
        "The exact live clue-to-NPC answer table has not been published by Bellring Games. For that reason, the mappings above are labeled by community confidence instead of being presented as official data.",
      ],
    },
    {
      heading: "How confidence is assigned",
      paragraphs: [
        "High confidence means the mapping has multiple independent launch-era confirmations, or a current confirmation that agrees with an established earlier consensus.",
        "Medium confidence means the mapping has useful supporting reports but fewer recent independent confirmations.",
        "Mappings with conflicting reports are omitted until stronger evidence appears. A bonus reward from one turn-in can support a mapping, but this page does not treat one reward result as enough to establish a universal rule.",
      ],
    },
  ],
  faqs: [
    { question: "How do I know which NPC should decipher a Cipher?", answer: "Read the clue words on the Cipher and compare them with the mapping table. Do not rely on the Cipher name alone." },
    { question: "Are these Cipher NPC mappings official?", answer: "No. Cipher availability is officially confirmed, but the full clue-to-NPC table is based on current community testing." },
    { question: "Which NPCs can decipher Ciphers?", answer: "Community and in-game reference material identify Pip, Dramm, Sigrid, Merimo, Cazarro, Soekja, and Dew among the Cipher-deciphering NPCs." },
    { question: "What happens if I use the correct NPC?", answer: "The June in-game event guide described bonus rewards for the correct NPC, and launch-era players continue to report bonus results. This page does not promise a specific bonus item or rate in the current version." },
    { question: "Are Ashen Cipher and Abyssal Cipher real launch items?", answer: "Yes. Bellring Games included one of each in the official second wave of launch rewards announced on August 1." },
  ],
  related: ["rewards", "launch-rewards", "codes", "patch-notes", "guides"],
  sources: [STEAM_NEWS, OFFICIAL_SITE],
};

export const cipherPages: GuidePageData[] = [cipherList];
