import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import FeaturedVideos from "@/components/FeaturedVideos";
import GuideCard from "@/components/GuideCard";
import JsonLd from "@/components/JsonLd";
import { getPage } from "@/data/pages";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const title = "Mistfall Hunter Guide: Classes, Builds, Fixes & Tips";
const description = "Explore our Mistfall Hunter guide for beginner tips, classes, builds, extraction help, solo play, servers, settings, fixes, rewards, and current updates.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/", languages: { en: "/", es: "/es/", de: "/de/", "x-default": "/" } },
  openGraph: { title, description, url: "/", type: "website", siteName: siteConfig.name, images: [siteConfig.defaultSocialImage] },
  twitter: { card: "summary_large_image", title, description, images: [siteConfig.defaultSocialImage] },
};

const featured = [
  "beginner-guide",
  "how-to-extract",
  "classes",
  "best-class",
  "best-solo-class",
  "builds",
  "solo-mode",
  "crossplay",
  "servers",
  "fov",
  "fatal-error-fix",
  "stuttering-fix",
  "codes",
  "known-issues",
  "patch-notes",
].map(getPage).filter(Boolean);

const classPages = [
  "classes/mercenary",
  "classes/sorcerer",
  "classes/blackarrow",
  "classes/shadowstrix",
  "classes/seer",
  "classes/withered-knight",
].map(getPage).filter(Boolean);

const faqs = [
  { question: "What is Mistfall Hunter?", answer: "Mistfall Hunter is a third-person dark-fantasy PvPvE extraction ARPG from Bellring Games." },
  { question: "Can you play Mistfall Hunter solo?", answer: "Yes. Solo is supported, but it remains a PvPvE mode rather than a private PvE campaign." },
  { question: "What is the best class?", answer: "There is no official best class. Mercenary is our learning recommendation, Blackarrow suits ranged solo play, and Seer provides direct team support." },
  { question: "How do you extract?", answer: "Defeat a Returner Woodling, obtain a Soul of Return, and complete the in-match return process." },
  { question: "Does Mistfall Hunter support crossplay?", answer: "Yes. The official launch FAQ confirms cross-platform matchmaking." },
  { question: "Are there active redeem codes?", answer: "No confirmed public redeem codes were found in official sources checked on July 31, 2026." },
];

export default function Home() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description,
    about: { "@type": "VideoGame", name: siteConfig.gameName },
  };
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.png"),
    description: siteConfig.description,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={[website, organization, faqSchema]} />
      <section className="home-hero">
        <figure className="home-hero-media">
          <Image
            src="/images/official/site-01.webp"
            alt="Ruined city beneath the spreading golden Gyldenmist"
            width={1600}
            height={900}
            priority
            sizes="100vw"
          />
          <figcaption>The Gyldenmist over Weavereach. <a href="https://mistfallhunter.com/" target="_blank" rel="noopener noreferrer">Official source</a></figcaption>
        </figure>
        <div className="home-hero-shade" />
        <div className="home-hero-inner">
          <p className="eyebrow">Independent • source-aware • launch updated</p>
          <h1>Mistfall Hunter Guide</h1>
          <p className="hero-lead">Practical help for your first extraction, all six classes, launch builds, solo and squad play, crossplay, settings, safe fixes, rewards, and every current update that changes the hunt.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/beginner-guide/">Start the beginner guide</Link>
            <Link className="button button-secondary" href="/classes/">Compare classes</Link>
          </div>
          <Link className="hot-link" href="/known-issues/">
            <span>Current hot question</span>
            <strong>What did the first launch update fix?</strong>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <main className="home-main">
        <section className="snapshot">
          <div>
            <p className="section-label">Launch snapshot</p>
            <h2>The quick answer before you enter the mist</h2>
            <p>Mistfall Hunter launched globally on July 30, 2026 at 01:00 UTC. It is a paid dark-fantasy extraction ARPG for Windows PC, PlayStation 5, and Xbox Series X|S. Cross-platform matchmaking is officially confirmed, and Xbox lists cross-platform co-op for two to three players.</p>
            <p>Every run asks you to balance combat, loot, and survival. You fight Corroded creatures, major PvE threats, and potentially rival Gyldhunters. To leave with your spoils, the official website says you must defeat a Returner Woodling and obtain a Soul of Return. Death can strip away what you carried from the run, so knowing when to extract matters as much as winning a fight.</p>
          </div>
          <dl>
            <div><dt>Launch</dt><dd>July 30, 2026</dd></div>
            <div><dt>Platforms</dt><dd>PC, PS5, Xbox Series X|S</dd></div>
            <div><dt>Modes</dt><dd>Solo and 3-player squad</dd></div>
            <div><dt>Genre</dt><dd>Third-person PvPvE extraction ARPG</dd></div>
            <div><dt>Classes</dt><dd>Six at launch</dd></div>
            <div><dt>Price</dt><dd>$24.99 Standard in the US</dd></div>
          </dl>
        </section>

        <figure className="home-figure">
          <a href="https://mistfallhunter.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/official/site-03.webp" alt="Three Gyldhunters fighting Corroded creatures inside a cavern" width={1600} height={900} />
          </a>
          <figcaption>A squad manages PvE pressure in an official gameplay image. <span>Source: official Mistfall Hunter website.</span></figcaption>
        </figure>

        <section>
          <p className="section-label">Choose a route</p>
          <h2>Popular Mistfall Hunter guides</h2>
          <p className="section-intro">These guides answer the highest-risk launch questions first. Each page separates official facts from editorial recommendations and marks information that has not been officially confirmed.</p>
          <div className="guide-grid">
            {featured.slice(0, 9).map((page) => page && <GuideCard key={page.path} page={page} />)}
          </div>
        </section>

        <section className="prose-section">
          <p className="section-label">Beginner help</p>
          <h2>A fast Mistfall Hunter beginner guide</h2>
          <p>Your first objective is not to collect the rarest possible inventory. It is to learn a repeatable run. Enter with equipment you can replace, choose a compact objective, and keep enough healing and class resources for the return journey. Watch where PvE fights force you to spend cooldowns, because rival players can use that moment to pressure you.</p>
          <p>The official loop is clear: scavenge, fight, and extract. The difficult part is deciding when the run has already succeeded. Set a threshold before deployment. That threshold might be a completed task, a nearly full bag, low healing, or a valuable item you do not want to risk. Leaving early with modest value creates progress; staying for one more room can reset the entire run.</p>
          <p>Use our <Link href="/beginner-guide/">Mistfall Hunter beginner guide</Link> for a five-run learning plan. Then read <Link href="/how-to-extract/">how to extract in Mistfall Hunter</Link> for the Returner Woodling and Soul of Return sequence. We do not publish fixed spawn coordinates or probabilities because official launch sources do not support them.</p>
        </section>

        <section>
          <p className="section-label">First-five-run plan</p>
          <h2>Learn one decision at a time</h2>
          <p className="section-intro">A good first session is a sequence of controlled tests, not one expensive attempt to understand the entire game.</p>
          <div className="home-copy-grid">
            <div>
              <h3>Runs one and two</h3>
              <p>Learn movement, camera, defense, one weapon stance, and ordinary PvE. Then practice opening the inventory only after moving out of the combat footprint.</p>
            </div>
            <div>
              <h3>Runs three and four</h3>
              <p>Follow the Returner Woodling and Soul of Return flow. Set an extraction threshold and leave one unfavorable encounter before it consumes healing and cooldowns.</p>
            </div>
            <div>
              <h3>Run five</h3>
              <p>Complete one compact objective, reject loot that does not serve it, and extract while the run is still healthy. Record the first bad decision if the run fails.</p>
            </div>
          </div>
          <p className="section-intro">Success is visible when you can explain why you entered, why you stopped looting, and why you chose the return. Continue with the <Link href="/guides/">Guides hub</Link> for the complete reading order.</p>
        </section>

        <section>
          <p className="section-label">Class selection</p>
          <h2>Six classes, six different ways to survive</h2>
          <p className="section-intro">Mistfall Hunter classes are more than cosmetic heroes. They decide weapon families, resource rhythm, active skills, talent directions, reach, mobility, and team job. The official class breakdown supports several archetypes within most classes, so one class can still cover more than one role.</p>
          <div className="guide-grid class-grid">
            {classPages.map((page) => page && <GuideCard key={page.path} page={page} />)}
          </div>
          <div className="home-copy-grid">
            <div>
              <h3>Best class for beginners</h3>
              <p>Mercenary is our safest learning recommendation. Sword & Shield gives new players a readable defensive plan, while Hammer introduces heavier area pressure once charge timing feels comfortable. This is an editorial choice, not an official beginner label.</p>
            </div>
            <div>
              <h3>Best solo class</h3>
              <p>Blackarrow is our ranged solo recommendation for players who can aim and protect distance. Official launch notes also say parts of Blackarrow&apos;s solo performance were overtuned and adjusted, so the recommendation should not be read as a permanent tier.</p>
            </div>
            <div>
              <h3>Best support class</h3>
              <p>Seer has the clearest direct support route through healing, shielding, buffs, and control. In solo, those tools can be redirected toward a hybrid setup, but the class&apos;s full support value appears in a coordinated team.</p>
            </div>
          </div>
          <p>Read the <Link href="/best-class/">best class comparison</Link>, <Link href="/best-solo-class/">best solo class guide</Link>, and cautious <Link href="/class-tier-list/">class tier framework</Link>. None uses fabricated DPS, win rate, or extraction-rate data.</p>
        </section>

        <figure className="home-figure">
          <a href="https://store.steampowered.com/app/3282300/Mistfall_Hunter/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/official/steam-07.webp" alt="The six Mistfall Hunter launch classes posed together" width={1600} height={900} />
          </a>
          <figcaption>All six launch classes in official promotional art. <span>Source: official Steam store.</span></figcaption>
        </figure>

        <section className="prose-section">
          <p className="section-label">Builds</p>
          <h2>How to choose a launch build</h2>
          <p>A useful build begins with a job. Decide whether you are clearing PvE efficiently, surviving solo, creating PvP burst, supporting a trio, or maximizing extraction consistency. Then align weapon stance, active skills, talents, equipment, and Affix Gems around that job.</p>
          <p>Official developer notes describe a Loadout System with saved configurations and share codes. A share code can import equipment and gem choices, but it does not prove that a setup is best for your patch, mode, budget, or skill level. Treat every imported setup as a hypothesis. Test it with replaceable gear, check whether it has a defensive response and a disengagement plan, and update it after balance notes.</p>
          <p>Our <Link href="/builds/">Mistfall Hunter builds hub</Link> gives one beginner, solo, and trio direction for each class. Every recommendation is labeled with mode, difficulty, game version, check date, and evidence type. Specific class pages explain why the direction works instead of presenting an unexplained list of equipment.</p>
        </section>

        <figure className="home-figure">
          <a href="https://store.steampowered.com/app/3282300/Mistfall_Hunter/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/official/steam-06.webp" alt="Mistfall Hunter class talent interface with connected upgrade nodes" width={1600} height={900} />
          </a>
          <figcaption>Build decisions connect through class talents and loadout choices. <span>Source: official Steam store.</span></figcaption>
        </figure>

        <FeaturedVideos />

        <section className="split-feature">
          <div>
            <p className="section-label">Solo, PvE & multiplayer</p>
            <h2>What the official modes actually allow</h2>
            <p>You can play solo, but solo is not PvE-only. Mistfall Hunter remains a PvPvE extraction game, and no complete PvE-only progression mode is officially confirmed in the sources reviewed for this release. Training and tutorial content are not the same thing as turning off hostile players in standard extraction.</p>
            <p>Squads contain up to three players, and Xbox lists online co-op for two to three. Bellring Games said it was not planning a separate permanent Duo matchmaking queue in the short term. The developer also discusses Solo and Trio as distinct balance environments, which is why one universal class tier list can be misleading.</p>
            <div className="inline-links">
              <Link href="/solo-mode/">Solo mode</Link>
              <Link href="/pve-only/">PvE-only status</Link>
              <Link href="/play-with-friends/">Play with friends</Link>
            </div>
          </div>
          <div>
            <p className="section-label">Crossplay, servers & region lock</p>
            <h2>Connect with the right expectations</h2>
            <p>The official launch FAQ confirms cross-platform matchmaking. Five server deployment countries are named: China, the United States, Germany, Singapore, and Brazil. This site does not claim live status or invent additional server cities.</p>
            <p>There is an important region restriction. Store accounts registered in the United States, Canada, Mexico, Puerto Rico, and the U.S. Virgin Islands receive the North American build and can access only North American servers located in the US. Crossplay does not override that account rule.</p>
            <div className="inline-links">
              <Link href="/crossplay/">Crossplay</Link>
              <Link href="/servers/">Servers</Link>
              <Link href="/region-lock/">Region lock</Link>
            </div>
          </div>
        </section>

        <section className="prose-section">
          <p className="section-label">Settings & safe fixes</p>
          <h2>FOV, stuttering, crashes, and fatal errors</h2>
          <p>The official launch material documents major work on shader precompilation, asset loading, low-end PCs, consoles, memory use, camp frame rate, interface response, and combat micro-stutters. It also lists fixes for random crashes tied to specific vegetation animation and AMD hair-rendering cases. Those improvements are meaningful context, but they do not guarantee identical performance on every system.</p>
          <p>Start with the current client, an SSD, a stable frame-rate target, and the hardware-based default preset. Lower expensive shadows, effects, reflections, and volumetric settings before sacrificing texture clarity. Change one option at a time and test the same scenario. We do not publish invented FPS-gain percentages.</p>
          <p>For a fatal error or crash, check the official issue list, restart, verify game files, install stable vendor drivers, and close only nonessential overlays for one test. Never download unknown DLL files, disable anti-cheat, permanently disable Windows security, or use a generic repair tool. The <Link href="/fatal-error-fix/">fatal error guide</Link>, <Link href="/stuttering-fix/">stuttering guide</Link>, and <Link href="/crashing-fix/">crashing guide</Link> label each step by source category.</p>
          <p>No consistently documented official FOV-slider answer was found in the launch sources reviewed for this guide. Check the current camera and display menu on your platform, and avoid injectors or unsupported camera tools. The Steam listing identifies Bellring Anti-Cheat, which makes unknown modifications especially inappropriate.</p>
        </section>

        <section className="split-feature">
          <div>
            <p className="section-label">Codes, rewards & Twitch Drops</p>
            <h2>Verified answers without fake rewards</h2>
            <p>No confirmed public redeem codes were found in the official sources checked on July 31, 2026. A Loadout share code is real, but it imports a build and does not grant currency or cosmetics. We also found no currently active official Twitch Drops campaign with verified dates, watch requirements, and rewards.</p>
            <p>Official launch-era rewards do exist. Eligible playtest participants can reclaim named cosmetics by using the same account, and DevNote #7 says the Season 1 Battle Pass unlocks free after seven cumulative login days. Paid Deluxe content is separate from free launch rewards.</p>
            <div className="inline-links">
              <Link href="/codes/">Codes status</Link>
              <Link href="/twitch-drops/">Twitch Drops</Link>
              <Link href="/launch-rewards/">Launch rewards</Link>
            </div>
          </div>
          <div>
            <p className="section-label">Known issues & patch notes</p>
            <h2>What changed immediately after launch</h2>
            <p>Bellring Games published a known-issues list covering tutorial prompts, Flameblade presentation, extra Soul of Return consumption, inventory splitting, console reconnects, controller navigation, and a PS5 interface anomaly. The first update then listed fixes for those issues.</p>
            <p>The same update also adjusted class balance, including Withered Knight Polearm & Shield. Because platform approval timing can differ, confirm your client is updated before assuming a known issue remains unresolved.</p>
            <div className="inline-links">
              <Link href="/known-issues/">Known issues</Link>
              <Link href="/patch-notes/">Patch notes</Link>
              <Link href="/controller-guide/">Controller guide</Link>
            </div>
          </div>
        </section>

        <section>
          <p className="section-label">Recently updated</p>
          <h2>Launch-week guides worth rechecking</h2>
          <div className="guide-grid">
            {featured.slice(9).map((page) => page && <GuideCard key={page.path} page={page} />)}
          </div>
        </section>

        <section>
          <p className="section-label">Quick answers</p>
          <h2>Mistfall Hunter guide FAQ</h2>
          <FAQ items={faqs} />
        </section>

        <section className="independent-note">
          <p className="section-label">Independent editorial site</p>
          <h2>How this guide handles changing facts</h2>
          <p>Mistfall Hunter Guide is an independent fan-made website and is not affiliated with Bellring Games or the official Mistfall Hunter team. Game names, images, and trademarks belong to their respective owners.</p>
          <p>We use official sources first, label community context, and avoid inventing missing facts. Every content page includes a last-checked date and source list. Builds and tier frameworks are editorial recommendations, not official rankings. If a code, server detail, reward, mode, fix, or patch fact cannot be confirmed, we say so directly.</p>
          <p>Read our <Link href="/editorial-policy/">Editorial Policy</Link>, <Link href="/disclaimer/">Disclaimer</Link>, or <Link href="/contact/">contact page</Link> to submit a correction.</p>
        </section>
      </main>
    </>
  );
}
