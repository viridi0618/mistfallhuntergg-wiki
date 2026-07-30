import Link from "next/link";

const columns = [
  {
    title: "Popular Guides",
    links: [["Beginner Guide", "/beginner-guide/"], ["How to Extract", "/how-to-extract/"], ["Solo Mode", "/solo-mode/"], ["Builds", "/builds/"]],
  },
  {
    title: "Classes",
    links: [["All Classes", "/classes/"], ["Best Class", "/best-class/"], ["Best Solo Class", "/best-solo-class/"], ["Tier List", "/class-tier-list/"]],
  },
  {
    title: "Help & Fixes",
    links: [["Known Issues", "/known-issues/"], ["Fatal Error", "/fatal-error-fix/"], ["Stuttering", "/stuttering-fix/"], ["Connection", "/connection-fix/"]],
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
          <div className="brand-mark" aria-hidden="true">M</div>
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
      <div className="footer-legal">
        <p>Mistfall Hunter Guide is an independent fan-made website and is not affiliated with Bellring Games or the official Mistfall Hunter team.</p>
        <p>Game names, images, and trademarks belong to their respective owners.</p>
        <p>© 2026 Mistfall Hunter Guide</p>
      </div>
    </footer>
  );
}
