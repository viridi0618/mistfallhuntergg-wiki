import Image from "next/image";
import Link from "next/link";
import { navigationByLocale, type NavigationLocale } from "@/data/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import SiteNavigation from "./SiteNavigation";

export default function Header({ locale = "en" }: { locale?: NavigationLocale }) {
  const home = locale === "en" ? "/" : `/${locale}/`;
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href={home} className="brand" aria-label="Mistfall Hunter Guide home">
          <span className="brand-logo" aria-hidden="true">
            <Image src="/icon.png" alt="Mistfall Hunter Guide emblem" width={40} height={40} priority />
          </span>
          <span>
            <strong>Mistfall Hunter</strong>
            <small>Guide</small>
          </span>
        </Link>
        <SiteNavigation locale={locale} groups={navigationByLocale[locale]} />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
