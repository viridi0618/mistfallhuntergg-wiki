"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeForPath, switchTarget, type Locale } from "@/i18n/routes";

const labels: Record<Locale, string> = { en: "EN", es: "ES", de: "DE" };
const names: Record<Locale, string> = { en: "English", es: "Español", de: "Deutsch" };

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const current = localeForPath(pathname);

  return (
    <nav className="language-switcher" aria-label="Language selector">
      {(Object.keys(labels) as Locale[]).map((locale) => (
        <Link
          key={locale}
          href={switchTarget(pathname, locale)}
          hrefLang={locale}
          lang={locale}
          aria-label={names[locale]}
          aria-current={locale === current ? "page" : undefined}
        >
          {labels[locale]}
        </Link>
      ))}
    </nav>
  );
}
