"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PickerEntryType } from "./PickerCta";

const ClassPickerDrawer = dynamic(() => import("./ClassPickerDrawer"), { ssr: false });

const labels = {
  en: { desktop: "⚔ Find Your Class", mobile: "⚔ Class Picker", aria: "Open the Mistfall Hunter Class Picker" },
  es: { desktop: "⚔ Encuentra tu clase", mobile: "⚔ Selector de clase", aria: "Abrir el selector de clase de Mistfall Hunter" },
  de: { desktop: "⚔ Finde deine Klasse", mobile: "⚔ Klassenauswahl", aria: "Mistfall Hunter Klassenauswahl öffnen" },
} as const;

function track(event: string, parameters: Record<string, string>) {
  const analyticsWindow = window as typeof window & { gtag?: (command: string, event: string, parameters: Record<string, string>) => void };
  analyticsWindow.gtag?.("event", event, parameters);
}

export default function ClassPickerLauncher({ locale = "en" }: { locale?: "en" | "es" | "de" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [entryType, setEntryType] = useState<PickerEntryType>("floating_button");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const isOpenRef = useRef(false);

  const openPicker = useCallback((source: PickerEntryType, trigger?: HTMLElement | null) => {
    if (isOpenRef.current) return;
    window.dispatchEvent(new CustomEvent("site-navigation:close", { detail: { source: "class-picker" } }));
    isOpenRef.current = true;
    openerRef.current = trigger ?? buttonRef.current;
    setEntryType(source);
    setOpen(true);
    track("class_picker_open", { source_path: location.pathname, entry_type: source });
  }, []);

  const closePicker = useCallback((restoreFocus: boolean) => {
    if (!isOpenRef.current) return;
    isOpenRef.current = false;
    setOpen(false);
    track("class_picker_close", { source_path: location.pathname, entry_type: entryType });
    if (restoreFocus) {
      window.setTimeout(() => {
        const target = openerRef.current?.isConnected ? openerRef.current : buttonRef.current;
        target?.focus();
      }, 0);
    }
  }, [entryType]);

  const dismissPicker = useCallback(() => closePicker(true), [closePicker]);
  const closeForNavigation = useCallback(() => closePicker(false), [closePicker]);

  useEffect(() => {
    function handleOpen(event: Event) {
      const detail = (event as CustomEvent<{ entryType?: PickerEntryType; trigger?: HTMLElement }>).detail;
      openPicker(detail?.entryType ?? "floating_button", detail?.trigger);
    }
    window.addEventListener("class-picker:open", handleOpen);
    return () => window.removeEventListener("class-picker:open", handleOpen);
  }, [openPicker]);

  useEffect(() => {
    function handleNavigationOpen(event: Event) {
      const detail = (event as CustomEvent<{ deviceType?: "desktop" | "mobile" }>).detail;
      setMobileNavigationOpen(detail?.deviceType === "mobile");
      if (isOpenRef.current) closePicker(false);
    }
    function handleNavigationClose() {
      setMobileNavigationOpen(false);
    }
    window.addEventListener("site-navigation:open", handleNavigationOpen);
    window.addEventListener("site-navigation:close", handleNavigationClose);
    return () => {
      window.removeEventListener("site-navigation:open", handleNavigationOpen);
      window.removeEventListener("site-navigation:close", handleNavigationClose);
    };
  }, [closePicker]);

  if (pathname === "/class-picker/" || pathname === "/class-picker") return null;
  const t = labels[locale];
  return <>
    {!open && !mobileNavigationOpen && <button ref={buttonRef} className="class-picker-launcher" type="button" aria-label={t.aria} onClick={() => openPicker("floating_button")}><span className="picker-launcher-desktop">{t.desktop}</span><span className="picker-launcher-mobile">{t.mobile}</span></button>}
    {open && <ClassPickerDrawer locale={locale} entryType={entryType} onClose={dismissPicker} onResultNavigate={closeForNavigation} />}
  </>;
}
