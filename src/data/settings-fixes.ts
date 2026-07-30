import type { GuidePageData, GuideSection } from "@/lib/types";
import { STEAM, STEAM_NEWS } from "./sources";

const checked = "2026-07-31";
const common = {
  updated: checked,
  published: "2026-07-31",
  version: "Launch / Season 1",
  platforms: "PC, PS5, Xbox Series X|S",
};

const fov: GuidePageData = {
  path: "fov",
  category: "Settings & Fixes",
  eyebrow: "Camera setting",
  keyword: "mistfall hunter fov",
  title: "Mistfall Hunter FOV: Can You Change It?",
  description: "Mistfall Hunter FOV explained: slider status, field of view versus camera distance, safe in-game settings, motion comfort, platforms, and unsupported tools.",
  h1: "Mistfall Hunter FOV",
  answer: "No confirmed, consistently documented FOV slider status is available from the official sources reviewed for this page. Use only current in-game display and camera options; do not inject tools or edit unknown files.",
  ...common,
  informationType: "Cautious settings status",
  sections: [
    {
      heading: "FOV slider status",
      paragraphs: [
        "The official launch FAQ confirms controller support and hardware requirements but does not document a field-of-view slider. Menu options can differ by platform and update, so check the current Camera or Display menu on your own client.",
        "A video setting labeled camera distance, camera shake, or aiming sensitivity is not automatically a true FOV control. Field of view changes how much of the world is visible, while camera distance changes the third-person camera's position.",
      ],
    },
    {
      heading: "Safe camera and comfort adjustments",
      bullets: [
        "Reduce camera shake or motion blur if those options are available.",
        "Lower look sensitivity if fast turns trigger discomfort.",
        "Increase viewing distance from the display and keep the room softly lit.",
        "Use a stable frame-rate target to reduce uneven visual motion.",
        "Take a break immediately if nausea, headache, or eye strain develops.",
        "Check platform accessibility settings for additional display support.",
      ],
    },
    {
      heading: "PC and console differences",
      paragraphs: [
        "No official source used here confirms identical camera options across Windows, PS5, and Xbox Series X|S. Console menus may use platform-specific presets, while PC exposes more graphics controls.",
        "Do not assume a beta video represents the launch menu. If a setting is absent, report the accessibility need through official support rather than using an unverified workaround.",
      ],
    },
    {
      heading: "Tools and edits we do not recommend",
      paragraphs: [
        "Mistfall Hunter uses Bellring Anti-Cheat on Steam. Avoid injection tools, modified DLL files, memory editors, and third-party camera utilities. They may be unsafe or conflict with the anti-cheat and service rules.",
        "This page will only recommend a config-file change if Bellring Games documents it. No such official change is confirmed in the sources reviewed here.",
      ],
    },
  ],
  faqs: [
    { question: "Does Mistfall Hunter have an FOV slider?", answer: "No consistently documented official answer is confirmed here; check the current platform menu." },
    { question: "Is camera distance the same as FOV?", answer: "No. They affect the view in different ways." },
    { question: "Can I use an FOV injector?", answer: "We do not recommend injection or unsupported tools, especially with anti-cheat enabled." },
  ],
  related: ["best-settings", "stuttering-fix", "crashing-fix", "known-issues"],
  sources: [STEAM, STEAM_NEWS],
};

const bestSettings: GuidePageData = {
  path: "best-settings",
  category: "Settings & Fixes",
  eyebrow: "Performance tuning",
  keyword: "mistfall hunter best settings",
  title: "Mistfall Hunter Best Settings for Smooth Play",
  description: "Mistfall Hunter best settings for image quality, frame-rate stability, low-end PCs, input response, stutter reduction, consoles, and a safe tuning order.",
  h1: "Mistfall Hunter Best Settings",
  answer: "Start with the game's hardware-based default, set a stable frame-rate target, lower expensive effects and shadows before texture quality, and change one option at a time. No universal FPS gain is claimed.",
  ...common,
  informationType: "Safe performance recommendations",
  sections: [
    {
      heading: "Best settings priorities",
      table: {
        headers: ["Priority", "Keep higher", "Lower first", "Reason"],
        rows: [
          ["Clear image", "Textures, view clarity", "Motion blur, excessive effects", "Preserves readable targets"],
          ["Stable frame rate", "Native or sensible render scale", "Shadows, effects, reflections", "Reduces common GPU load"],
          ["Low input delay", "Stable cap and responsive display mode", "Unneeded post-processing", "Avoids erratic frame pacing"],
          ["Low-end PC", "Textures only if VRAM allows", "Shadows, effects, volumetrics", "Targets expensive features first"],
        ],
      },
    },
    {
      heading: "Recommended tuning order",
      bullets: [
        "Apply the game's default preset for your detected hardware.",
        "Choose a frame-rate cap your system can hold during combat.",
        "Lower shadows and effects one step.",
        "Reduce volumetric, reflection, or post-processing options if available.",
        "Adjust render scale only after the earlier changes.",
        "Keep textures appropriate for available graphics memory.",
        "Restart when the menu or shader process requests it.",
        "Test the same area or scenario after each change.",
      ],
    },
    {
      heading: "Stutter and shader context",
      paragraphs: [
        "Bellring Games said it optimized Unreal Engine shader precompilation, asset loading, device presets, low-end PCs, consoles, and combat micro-stutters before launch. Actual results vary by hardware and system environment.",
        "A first run after an update can behave differently from later runs. Keep the game current and installed on an SSD, which the official requirements strongly recommend, before making aggressive quality reductions.",
      ],
    },
    {
      heading: "PC and console differences",
      paragraphs: [
        "PC users can usually trade quality for performance across more individual controls. PS5 and Xbox Series X|S use console-specific tuning and may expose fewer options. Xbox officially lists 60 fps+, VRR, HDR10, and ray tracing capabilities, but availability can depend on display and selected mode.",
        "Do not copy a PC preset directly to console or assume every Xbox capability is active simultaneously.",
      ],
    },
  ],
  faqs: [
    { question: "What should I lower first?", answer: "Start with shadows, effects, reflections, and volumetric options before sacrificing texture clarity." },
    { question: "Should I install on an SSD?", answer: "Yes. The official requirements strongly recommend an SSD." },
    { question: "How much FPS will these settings add?", answer: "No universal percentage is claimed because results depend on hardware and scene." },
  ],
  related: ["system-requirements", "stuttering-fix", "fov", "crashing-fix"],
  sources: [STEAM, STEAM_NEWS],
};

const controller: GuidePageData = {
  path: "controller-guide",
  category: "Settings & Fixes",
  eyebrow: "Input guide",
  keyword: "mistfall hunter controller",
  title: "Mistfall Hunter Controller Guide & Fixes",
  description: "Mistfall Hunter controller support on PC, PS5, and Xbox, with aiming, sensitivity, button prompts, common launch issues, and safe troubleshooting.",
  h1: "Mistfall Hunter Controller Guide",
  answer: "Controller support is officially confirmed for PS5 and Xbox controllers. Use the live control presets, tune sensitivity gradually, and update to the latest client because launch patches fixed several controller-specific issues.",
  ...common,
  informationType: "Official support with practical setup",
  sections: [
    {
      heading: "Official controller support",
      paragraphs: [
        "The official launch FAQ confirms PS5 and Xbox controllers. Bellring Games also described class-specific controller layouts, interface navigation work, melee and ranged aim-assist tuning, and camera-control optimization.",
        "Steam input remapping can add another layer on PC. Start with the native game profile before adding a platform override so you can identify which layer causes a conflict.",
      ],
    },
    {
      heading: "Comfortable starting adjustments",
      bullets: [
        "Use the default class preset for the first matches.",
        "Adjust horizontal and vertical look sensitivity in small steps.",
        "Test aim assist separately on melee and ranged classes.",
        "Keep dodge, block, healing, and a defensive skill easy to reach.",
        "Avoid remapping several actions before learning the prompt language.",
        "Save or photograph the working layout before experimenting.",
      ],
    },
    {
      heading: "Known launch controller issues",
      paragraphs: [
        "The official launch known-issues post listed problems involving the Seasonal Leaderboard cursor, unequipping gear, Auction House gem selection, and some console reconnects. The first update then listed fixes for these items and a Training Room controller setting issue.",
        "If the same symptom persists, confirm the patch is installed before applying local changes. A fixed official issue may remain visible until every platform approves and distributes the update.",
      ],
    },
    {
      heading: "Safe controller troubleshooting",
      table: {
        headers: ["Step", "Action", "Source type"],
        rows: [
          ["1", "Install the latest game and platform update", "Official fix context"],
          ["2", "Reconnect the controller before launching", "Common troubleshooting step"],
          ["3", "Disable duplicate input layers, not system security", "Common troubleshooting step"],
          ["4", "Restore the default in-game control preset", "Common troubleshooting step"],
          ["5", "Test another USB port or cable on PC", "Common troubleshooting step"],
          ["6", "Report platform, controller model, and screen", "Official support path"],
        ],
      },
    },
  ],
  faqs: [
    { question: "Does Mistfall Hunter support controllers?", answer: "Yes. PS5 and Xbox controllers are officially supported." },
    { question: "Why are my prompts wrong?", answer: "Update first, restore the native preset, and remove duplicate remapping layers." },
    { question: "Are controller issues known?", answer: "Several launch issues were officially listed and then addressed in the first update." },
  ],
  related: ["best-settings", "known-issues", "connection-fix", "crashing-fix"],
  sources: [STEAM_NEWS, STEAM],
};

type FixSpec = {
  path: string;
  keyword: string;
  title: string;
  h1: string;
  description: string;
  answer: string;
  diagnosis: GuideSection;
  settingsStep: string;
  errorCapture: string;
};

const sharedFixSections = (settingsStep: string, errorCapture: string): GuideSection[] => [
  {
    heading: "Safe troubleshooting order",
    table: {
      headers: ["Order", "Action", "Source category"],
      rows: [
        ["1", "Check official known issues and maintenance posts", "Official fix"],
        ["2", "Restart the game and platform client", "Common troubleshooting step"],
        ["3", "Verify or repair game files through the platform", "Common troubleshooting step"],
        ["4", "Install stable graphics and operating-system updates", "Common troubleshooting step"],
        ["5", "Close nonessential overlays and capture tools", "Common troubleshooting step"],
        ["6", settingsStep, "Common troubleshooting step"],
        ["7", "Test a clean, supported network path and eligible region", "Common troubleshooting step"],
        ["8", "Collect reproducible error information", "Official support preparation"],
        ["9", "Contact in-game or official community support", "Official support path"],
      ],
    },
  },
  {
    heading: "Verify files and updates",
    paragraphs: [
      "Install the current game patch before changing the system. Then use the platform's built-in verify or repair action. This can replace damaged files without downloading unknown DLLs or third-party repair tools.",
      "Use a stable, vendor-released graphics driver. If a problem began immediately after a driver update, consult the GPU vendor's official rollback guidance rather than downloading an older driver from an archive site.",
    ],
  },
  {
    heading: "Overlays, shaders, and settings",
    paragraphs: [
      "Close only nonessential overlays, performance displays, video capture, or RGB tools for one controlled test. Do not disable antivirus, Windows security, anti-cheat, or unrelated services.",
      "Bellring Games specifically worked on Unreal Engine shader precompilation and asset-loading stutter. Allow supported shader work to finish, keep the game on an SSD, and change one graphics option at a time.",
    ],
  },
  {
    heading: "What to record for support",
    bullets: [
      errorCapture,
      "Platform, store, account region, and selected server.",
      "Game version and the approximate time of the incident.",
      "CPU, GPU, memory, driver, and operating-system version on PC.",
      "Whether the issue occurs in camp, loading, a specific map, or every match.",
      "A screenshot or short video that does not expose private account information.",
    ],
  },
  {
    heading: "Unsafe fixes to avoid",
    paragraphs: [
      "Do not download replacement DLL files, cracked patches, registry bundles, or generic 'game fixer' applications. Do not disable anti-cheat or permanently turn off security features.",
      "Undervolting, BIOS changes, and unknown command-line flags are not appropriate first-line fixes. They add variables and can make support evidence less useful.",
    ],
  },
];

function fixPage(spec: FixSpec): GuidePageData {
  return {
    path: spec.path,
    category: "Settings & Fixes",
    eyebrow: "Safe troubleshooting",
    keyword: spec.keyword,
    title: spec.title,
    description: spec.description,
    h1: spec.h1,
    answer: spec.answer,
    ...common,
    informationType: "Official status plus conservative troubleshooting",
    warning: "No step is guaranteed. Stop after the first successful, supported fix.",
    sections: [spec.diagnosis, ...sharedFixSections(spec.settingsStep, spec.errorCapture)],
    faqs: [
      { question: "Is this a guaranteed fix?", answer: "No. The steps isolate common causes safely and preserve useful support evidence." },
      { question: "Should I disable antivirus or anti-cheat?", answer: "No. This guide does not recommend disabling security or anti-cheat." },
      { question: "Where should I report the issue?", answer: "Use in-game customer support or the official community links from Bellring Games." },
    ],
    related: ["known-issues", "patch-notes", "best-settings", "system-requirements", "controller-guide"],
    sources: [STEAM_NEWS, STEAM],
  };
}

const fatal = fixPage({
  path: "fatal-error-fix",
  keyword: "mistfall hunter fatal error",
  title: "Mistfall Hunter Fatal Error: Safe Fix Steps",
  h1: "Mistfall Hunter Fatal Error Fix",
  description: "Troubleshoot a Mistfall Hunter fatal error safely with official issue checks, file verification, stable drivers, overlay isolation, settings, and support evidence.",
  answer: "Update the game first, verify files, restart the platform, use a stable GPU driver, and test without nonessential overlays. Do not download DLLs or disable anti-cheat.",
  diagnosis: {
    heading: "Check official fatal-error context first",
    paragraphs: [
      "Official launch notes acknowledged and fixed several random crash causes, including vegetation animation and AMD hair-rendering issues. A new fatal error may therefore be version-, driver-, or scene-specific rather than one universal fault.",
      "Match the time and behavior against current known-issue and patch posts. If Bellring Games lists the same fault, prioritize the official update over local experimentation.",
    ],
  },
  settingsStep: "Apply a lower preset and remove overclocking for one test",
  errorCapture: "Exact fatal-error text and any crash identifier.",
});

const stutter = fixPage({
  path: "stuttering-fix",
  keyword: "mistfall hunter stuttering",
  title: "Mistfall Hunter Stuttering: Reduce Hitches Safely",
  h1: "Mistfall Hunter Stuttering Fix",
  description: "Reduce Mistfall Hunter stuttering with official patch checks, SSD use, shader patience, stable settings, background-task isolation, drivers, and clear support data.",
  answer: "Install the latest patch, run the game from an SSD, use a sustainable frame cap, lower heavy effects gradually, and close nonessential background capture tools. Results vary by hardware.",
  diagnosis: {
    heading: "What the developer has confirmed",
    paragraphs: [
      "Bellring Games said the launch version targeted Unreal Engine shader precompilation hitches, asset-loading spikes, combat micro-stutters, memory use, low-end PCs, consoles, and camp frame rate. It also warned that improvement varies by system.",
      "That makes updating the client the first step. Do not apply beta-era shader workarounds after the official launch optimization without evidence.",
    ],
  },
  settingsStep: "Set a stable frame cap and lower shadows, effects, or volumetrics",
  errorCapture: "A short frame-time symptom description: traversal, first effect, combat, inventory, or constant.",
});

const crashing = fixPage({
  path: "crashing-fix",
  keyword: "mistfall hunter crashing",
  title: "Mistfall Hunter Crashing: PC & Console Fixes",
  h1: "Mistfall Hunter Crashing Fix",
  description: "Troubleshoot Mistfall Hunter crashing on PC, PS5, and Xbox with updates, file checks, stable drivers, controller context, graphics isolation, and support details.",
  answer: "Update first, restart the platform, verify files on PC, and test a supported default configuration. Launch patches addressed several crash triggers, so an outdated client can preserve a known fault.",
  diagnosis: {
    heading: "Officially reported crash context",
    paragraphs: [
      "Official notes mention random crashes tied to vegetation animation, AMD hair rendering, the controller cursor on the Seasonal Leaderboard, and a PS5 deck display anomaly. The immediate launch update lists fixes for these issues.",
      "A crash in a different screen or map needs separate evidence. Do not assume a community workaround for one trigger applies to every crash.",
    ],
  },
  settingsStep: "Restore the platform default preset and test the problem screen again",
  errorCapture: "Last screen, map, action, and input method before the crash.",
});

const connection = fixPage({
  path: "connection-fix",
  keyword: "mistfall hunter connection error",
  title: "Mistfall Hunter Connection Error Fix",
  h1: "Mistfall Hunter Connection Error Fix",
  description: "Resolve a Mistfall Hunter connection error safely by checking official status, updates, account region, network stability, console requirements, and support evidence.",
  answer: "Check official maintenance first, then confirm the current client, eligible account region, platform online access, and a stable network path. This site does not provide live server status.",
  diagnosis: {
    heading: "Server, region, or local network?",
    paragraphs: [
      "Bellring Games names deployments in China, the United States, Germany, Singapore, and Brazil. It also confirms that accounts in specified North American storefront regions can access only North American servers in the US.",
      "A connection failure can come from maintenance, a queue, version mismatch, account-region eligibility, platform service, router path, or local packet loss. Identify the layer before reinstalling.",
    ],
  },
  settingsStep: "Use the closest eligible region and test a wired connection",
  errorCapture: "Exact connection message, selected region, and whether party members are affected.",
});

export const settingsFixPages: GuidePageData[] = [
  fov,
  bestSettings,
  controller,
  fatal,
  stutter,
  crashing,
  connection,
];
