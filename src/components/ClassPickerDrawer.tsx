"use client";

import { useEffect, useRef } from "react";
import ClassPicker from "./ClassPicker";
import type { PickerEntryType } from "./PickerCta";

const closeLabels = { en: "Close class picker", es: "Cerrar selector de clase", de: "Klassenauswahl schließen" } as const;

export default function ClassPickerDrawer({ locale, entryType, onClose }: { locale: "en" | "es" | "de"; entryType: PickerEntryType; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previous = document.body.style.overflow;
    const background = document.getElementById("site-content");
    const hadInert = background?.hasAttribute("inert") ?? false;
    const previousAriaHidden = background?.getAttribute("aria-hidden") ?? null;
    document.body.style.overflow = "hidden";
    background?.setAttribute("inert", "");
    background?.setAttribute("aria-hidden", "true");
    const dialog = dialogRef.current;
    const focusable = () => Array.from(dialog?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])') ?? []);
    closeRef.current?.focus();
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") { event.preventDefault(); onClose(); return; }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previous;
      if (!hadInert) background?.removeAttribute("inert");
      if (previousAriaHidden === null) background?.removeAttribute("aria-hidden");
      else background?.setAttribute("aria-hidden", previousAriaHidden);
      document.removeEventListener("keydown", keydown);
    };
  }, [onClose]);

  return <div className="class-picker-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div ref={dialogRef} className="class-picker-drawer" role="dialog" aria-modal="true" aria-labelledby="class-picker-dialog-title">
      <header><h2 id="class-picker-dialog-title">{locale === "es" ? "Selector de clase" : locale === "de" ? "Klassenauswahl" : "Class Picker"}</h2><button ref={closeRef} type="button" onClick={onClose} aria-label={closeLabels[locale]}>× <span>{locale === "es" ? "Cerrar" : locale === "de" ? "Schließen" : "Close"}</span></button></header>
      <ClassPicker locale={locale} entryType={entryType} />
    </div>
  </div>;
}
