import Image from "next/image";
import Link from "next/link";
import { primaryNav } from "@/data/pages";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Mistfall Hunter Guide home">
          <span className="brand-logo" aria-hidden="true">
            <Image src="/icon.png" alt="" width={40} height={40} priority />
          </span>
          <span>
            <strong>Mistfall Hunter</strong>
            <small>Guide</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {primaryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
