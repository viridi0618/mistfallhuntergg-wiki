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

const localized = {
  en: {
    columns,
    description: "Independent guides, classes, builds, fixes, and gameplay help for Mistfall Hunter.",
    legal: "Mistfall Hunter Guide is an independent fan-made website and is not affiliated with Bellring Games or the official Mistfall Hunter team.",
    rights: "Game names, images, and trademarks belong to their respective owners.",
  },
  es: {
    columns: [
      { title: "Guías", links: [["Inicio", "/es/"], ["Principiantes", "/es/guia-principiantes/"], ["Cómo extraer", "/es/como-extraer/"]] },
      { title: "Clases", links: [["Todas las clases", "/es/clases/"], ["Mejor clase", "/es/mejor-clase/"], ["Tier list", "/es/tier-list-clases/"]] },
      { title: "Juego", links: [["Builds", "/es/builds/"], ["Jugar solo", "/es/jugar-solo/"], ["Servidores", "/es/servidores/"]] },
      { title: "Ayuda", links: [["Bloqueo regional", "/es/bloqueo-regional/"], ["Códigos", "/es/codigos/"], ["English site", "/"]] },
    ],
    description: "Guías independientes en español sobre clases, builds, extracción y ayuda de Mistfall Hunter.",
    legal: "Mistfall Hunter Guide es un sitio independiente creado por fans y no está afiliado con Bellring Games ni con el equipo oficial de Mistfall Hunter.",
    rights: "Los nombres, imágenes y marcas del juego pertenecen a sus respectivos propietarios.",
  },
  de: {
    columns: [
      { title: "Deutsch", links: [["Startseite", "/de/"], ["Einstellungen", "/de/einstellungen/"], ["Ruckler beheben", "/de/ruckler-beheben/"]] },
      { title: "Technische Hilfe", links: [["Abstürze beheben", "/de/absturz-beheben/"], ["Server", "/de/server/"], ["Region Lock", "/de/region-lock/"]] },
      { title: "Weitere Guides", links: [["English site", "/"], ["Klassen (English)", "/classes/"], ["Builds (English)", "/builds/"]] },
      { title: "Website", links: [["Über uns (English)", "/about/"], ["Datenschutz (English)", "/privacy-policy/"], ["Kontakt (English)", "/contact/"]] },
    ],
    description: "Unabhängige deutsche Hilfe zu Einstellungen, Fehlern, Servern und Mistfall Hunter.",
    legal: "Mistfall Hunter Guide ist eine unabhängige Fan-Website und nicht mit Bellring Games oder dem offiziellen Mistfall-Hunter-Team verbunden.",
    rights: "Spielnamen, Bilder und Marken gehören ihren jeweiligen Eigentümern.",
  },
} as const;

export default function Footer({ locale = "en" }: { locale?: keyof typeof localized }) {
  const content = localized[locale];
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand-logo" aria-hidden="true">
            <Image src="/icon.png" alt="Mistfall Hunter Guide emblem" width={40} height={40} />
          </div>
          <h2>Mistfall Hunter Guide</h2>
          <p>{content.description}</p>
        </div>
        {content.columns.map((column) => (
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
        <p>{content.legal}</p>
        <p>{content.rights}</p>
        <p>© 2026 Mistfall Hunter Guide</p>
      </div>
    </footer>
  );
}
