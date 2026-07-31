import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Popular Guides",
    links: [["Guides Hub", "/guides/"], ["Beginner Guide", "/beginner-guide/"], ["How to Extract", "/how-to-extract/"], ["Gameplay", "/gameplay/"]],
  },
  {
    title: "Classes",
    links: [["All Classes", "/classes/"], ["Best Class", "/best-class/"], ["Best Solo Class", "/best-solo-class/"], ["Tier List", "/class-tier-list/"]],
  },
  {
    title: "Play & Help",
    links: [["Multiplayer", "/multiplayer/"], ["Settings & Fixes", "/settings-fixes/"], ["Rewards", "/rewards/"], ["Updates", "/updates/"]],
  },
  {
    title: "Site",
    links: [["About", "/about/"], ["Editorial Policy", "/editorial-policy/"], ["Privacy Policy", "/privacy-policy/"], ["Disclaimer", "/disclaimer/"], ["Contact", "/contact/"]],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand-logo" aria-hidden="true">
            <Image src="/icon.png" alt="Mistfall Hunter Guide emblem" width={40} height={40} />
          </div>
          <h2>Mistfall Hunter Guide</h2>
          <p>Independent guides, classes, builds, fixes, and gameplay help for Mistfall Hunter.</p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h3>{column.title}</h3>
            <ul>{column.links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="footer-badges">
        <a href="https://artificin.com?utm_source=badge&utm_medium=referral&utm_campaign=featured_badge" target="_blank" rel="noopener">
          <img src="https://artificin.com/badges/Artificin-badge.png" alt="Featured on Artificin" loading="lazy" width="175" height="50" />
        </a>
        <a href="https://startupfa.me/s/mistfall-hunter-guide?utm_source=mistfallhuntergg.wiki" target="_blank">
          <img src="https://startupfa.me/badges/featured/default-small-rounded.webp" alt="MistfallHunterGuide - Featured on Startup Fame" loading="lazy" width="240" height="37" />
        </a>
        <a href="https://findly.tools/mistfallhunter?utm_source=mistfallhunter" target="_blank" rel="noopener noreferrer">
          <img src="https://findly.tools/badges/findly-tools-badge-light.svg" alt="Featured on Findly.tools" loading="lazy" width="175" height="55" />
        </a>
      </div>
      <div className="footer-legal">
        <p>Mistfall Hunter Guide is an independent fan-made website and is not affiliated with Bellring Games or the official Mistfall Hunter team.</p>
        <p>Game names, images, and trademarks belong to their respective owners.</p>
        <p>© 2026 Mistfall Hunter Guide</p>
      </div>
    </footer>
  );
}
