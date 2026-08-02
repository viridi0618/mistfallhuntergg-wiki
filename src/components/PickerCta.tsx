"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

export type PickerEntryType = "floating_button" | "builds_hub" | "classes_hub" | "guides_hub" | "standalone_page" | "build_page";

export default function PickerCta({ label, entryType }: { label: string; entryType: PickerEntryType }) {
  function openPicker(event: MouseEvent<HTMLAnchorElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.dispatchEvent(new CustomEvent("class-picker:open", { detail: { entryType, trigger: event.currentTarget } }));
  }
  return <p className="picker-cta"><Link href="/class-picker/" onClick={openPicker}>⚔ {label}</Link></p>;
}
