"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { navItems, type NavigationLocale, type NavGroup, type NavItem } from "@/data/navigation";
import { isNavigationGroupActive, isNavigationPathCurrent } from "@/lib/navigation";

const ui = {
  en: { primary: "Primary navigation", mobile: "Mobile navigation", open: "Open navigation", close: "Close navigation", all: "All", expand: "Open {label} menu" },
  es: { primary: "Navegación principal", mobile: "Navegación móvil", open: "Abrir navegación", close: "Cerrar navegación", all: "Todo", expand: "Abrir menú de {label}" },
  de: { primary: "Hauptnavigation", mobile: "Mobile Navigation", open: "Navigation öffnen", close: "Navigation schließen", all: "Alle", expand: "Menü {label} öffnen" },
} as const;

type DeviceType = "desktop" | "mobile";

function track(event: "nav_menu_open" | "nav_menu_close" | "nav_item_click", parameters: Record<string, string>) {
  const analyticsWindow = window as typeof window & { gtag?: (command: string, event: string, parameters: Record<string, string>) => void };
  analyticsWindow.gtag?.("event", event, parameters);
}

function menuId(group: NavGroup, device: DeviceType) {
  return `${device}-nav-panel-${group.id}`;
}

export default function SiteNavigation({ locale, groups }: { locale: NavigationLocale; groups: NavGroup[] }) {
  const pathname = usePathname();
  const labels = ui[locale];
  const rootRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const desktopToggleRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const mobileGroupToggleRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const desktopOpenRef = useRef<string | null>(null);
  const mobileOpenRef = useRef(false);
  const mobileGroupRef = useRef<string | null>(null);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  const eventParameters = useCallback((id: string, deviceType: DeviceType) => ({
    locale,
    source_path: window.location.pathname,
    menu_id: id,
    device_type: deviceType,
  }), [locale]);

  const broadcast = useCallback((name: "site-navigation:open" | "site-navigation:close", deviceType: DeviceType) => {
    window.dispatchEvent(new CustomEvent(name, { detail: { deviceType } }));
  }, []);

  const closeDesktop = useCallback((restoreFocus = false, sendEvent = true) => {
    const current = desktopOpenRef.current;
    if (!current) return;
    desktopOpenRef.current = null;
    setDesktopOpen(null);
    track("nav_menu_close", eventParameters(current, "desktop"));
    if (sendEvent) broadcast("site-navigation:close", "desktop");
    if (restoreFocus) window.setTimeout(() => desktopToggleRefs.current[current]?.focus(), 0);
  }, [broadcast, eventParameters]);

  const openDesktop = useCallback((id: string, focus: "first" | "last" | null = null) => {
    const current = desktopOpenRef.current;
    if (current === id && focus === null) {
      closeDesktop(true);
      return;
    }
    if (current && current !== id) track("nav_menu_close", eventParameters(current, "desktop"));
    if (current !== id) {
      desktopOpenRef.current = id;
      setDesktopOpen(id);
      track("nav_menu_open", eventParameters(id, "desktop"));
      broadcast("site-navigation:open", "desktop");
    }
    if (focus) {
      window.requestAnimationFrame(() => {
        const links = document.querySelectorAll<HTMLAnchorElement>(`#desktop-nav-panel-${id} a[href]`);
        const target = focus === "first" ? links[0] : links[links.length - 1];
        target?.focus();
      });
    }
  }, [broadcast, closeDesktop, eventParameters]);

  const closeMobileGroup = useCallback((restoreFocus = false) => {
    const current = mobileGroupRef.current;
    if (!current) return;
    mobileGroupRef.current = null;
    setMobileGroup(null);
    track("nav_menu_close", eventParameters(current, "mobile"));
    if (restoreFocus) window.setTimeout(() => mobileGroupToggleRefs.current[current]?.focus(), 0);
  }, [eventParameters]);

  const closeMobile = useCallback((restoreFocus = false, sendEvent = true) => {
    if (!mobileOpenRef.current) return;
    closeMobileGroup(false);
    mobileOpenRef.current = false;
    setMobileOpen(false);
    track("nav_menu_close", eventParameters("mobile-navigation", "mobile"));
    if (sendEvent) broadcast("site-navigation:close", "mobile");
    if (restoreFocus) window.setTimeout(() => mobileToggleRef.current?.focus(), 0);
  }, [broadcast, closeMobileGroup, eventParameters]);

  const openMobile = useCallback(() => {
    if (mobileOpenRef.current) {
      closeMobile(true);
      return;
    }
    mobileOpenRef.current = true;
    setMobileOpen(true);
    track("nav_menu_open", eventParameters("mobile-navigation", "mobile"));
    broadcast("site-navigation:open", "mobile");
  }, [broadcast, closeMobile, eventParameters]);

  const toggleMobileGroup = useCallback((id: string) => {
    const current = mobileGroupRef.current;
    if (current === id) {
      closeMobileGroup(true);
      return;
    }
    if (current) track("nav_menu_close", eventParameters(current, "mobile"));
    mobileGroupRef.current = id;
    setMobileGroup(id);
    track("nav_menu_open", eventParameters(id, "mobile"));
  }, [closeMobileGroup, eventParameters]);

  const closeAll = useCallback((restoreFocus = false, sendEvent = true) => {
    closeDesktop(restoreFocus, sendEvent);
    closeMobile(restoreFocus, sendEvent);
  }, [closeDesktop, closeMobile]);

  useEffect(() => {
    closeAll(false);
  }, [pathname, closeAll]);

  useEffect(() => {
    function outside(event: PointerEvent) {
      if (rootRef.current?.contains(event.target as Node)) return;
      closeAll(false);
    }
    function escape(event: globalThis.KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (mobileGroupRef.current) {
        event.preventDefault();
        closeMobileGroup(true);
      } else if (mobileOpenRef.current || desktopOpenRef.current) {
        event.preventDefault();
        closeAll(true);
      }
    }
    function closeForPicker() {
      closeAll(false);
    }
    function externalClose() {
      closeAll(false, false);
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    window.addEventListener("class-picker:open", closeForPicker);
    window.addEventListener("site-navigation:close", externalClose);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
      window.removeEventListener("class-picker:open", closeForPicker);
      window.removeEventListener("site-navigation:close", externalClose);
    };
  }, [closeAll, closeMobileGroup]);

  function trackLink(group: NavGroup, item: NavItem, deviceType: DeviceType) {
    track("nav_item_click", {
      ...eventParameters(group.id, deviceType),
      item_label: item.label,
      destination_path: item.href,
    });
  }

  function selectLink(group: NavGroup, item: NavItem, deviceType: DeviceType, event: MouseEvent<HTMLAnchorElement>) {
    trackLink(group, item, deviceType);
    if (deviceType === "desktop") closeDesktop(false);
    else closeMobile(false);
    // Do not prevent default: modified clicks and JavaScript-free navigation keep normal Link behavior.
    void event;
  }

  function panelKeydown(event: KeyboardEvent<HTMLDivElement>, id: string, deviceType: DeviceType) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>("a[href]"));
    if (!links.length) return;
    event.preventDefault();
    const current = links.indexOf(document.activeElement as HTMLAnchorElement);
    let next = 0;
    if (event.key === "End") next = links.length - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "ArrowDown") next = current < 0 || current === links.length - 1 ? 0 : current + 1;
    else next = current <= 0 ? links.length - 1 : current - 1;
    links[next]?.focus();
    if (deviceType === "mobile" && mobileGroupRef.current !== id) toggleMobileGroup(id);
  }

  function desktopItems(group: NavGroup) {
    const sections = group.sections ?? [{ items: group.items ?? [] }];
    return sections.map((section, sectionIndex) => (
      <div className="nav-menu-section" key={section.label ?? sectionIndex}>
        {section.label && <p className="nav-menu-section-label">{section.label}</p>}
        <div className="nav-menu-items">
          {section.items.map((item) => (
            <Link
              key={`${group.id}-${item.href}-${item.label}`}
              href={item.href}
              prefetch={false}
              data-emphasis={item.emphasis}
              aria-current={isNavigationPathCurrent(pathname, item.href) ? "page" : undefined}
              onClick={(event) => selectLink(group, item, "desktop", event)}
            >
              <span>{item.label}</span>
              {item.description && <small>{item.description}</small>}
            </Link>
          ))}
        </div>
      </div>
    ));
  }

  return (
    <div className="site-navigation" ref={rootRef}>
      <nav className="desktop-nav" aria-label={labels.primary}>
        {groups.map((group) => {
          const hasPanel = Boolean(group.items?.length || group.sections?.length);
          const active = isNavigationGroupActive(pathname, group);
          const exact = isNavigationPathCurrent(pathname, group.href);
          const groupLink: NavItem = { label: group.label, href: group.href };
          if (!hasPanel) {
            return <Link key={group.id} className="nav-top-link nav-top-direct" data-active={active || undefined} href={group.href} aria-current={exact ? "page" : undefined} onClick={(event) => selectLink(group, groupLink, "desktop", event)}>{group.label}</Link>;
          }
          const panelId = menuId(group, "desktop");
          return (
            <div
              className="desktop-nav-group"
              data-active={active || undefined}
              key={group.id}
              onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) closeDesktop(false); }}
            >
              <Link className="nav-top-link" href={group.href} aria-current={exact ? "page" : undefined} onClick={(event) => selectLink(group, groupLink, "desktop", event)}>{group.label}</Link>
              <button
                ref={(node) => { desktopToggleRefs.current[group.id] = node; }}
                className="nav-disclosure"
                type="button"
                aria-label={labels.expand.replace("{label}", group.label)}
                aria-expanded={desktopOpen === group.id}
                aria-controls={panelId}
                onClick={() => openDesktop(group.id)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                    event.preventDefault();
                    openDesktop(group.id, event.key === "ArrowDown" ? "first" : "last");
                  }
                }}
              ><span aria-hidden="true">⌄</span></button>
              <div
                id={panelId}
                className="desktop-nav-panel"
                data-layout={group.layout ?? "single"}
                data-align={group.align ?? "left"}
                hidden={desktopOpen !== group.id}
                onKeyDown={(event) => panelKeydown(event, group.id, "desktop")}
              >
                {group.panelLabel && <p className="nav-panel-label">{group.panelLabel}</p>}
                <div className="nav-panel-content">{desktopItems(group)}</div>
                {group.footerLink && <Link className="nav-panel-footer" href={group.footerLink.href} prefetch={false} aria-current={isNavigationPathCurrent(pathname, group.footerLink.href) ? "page" : undefined} onClick={(event) => selectLink(group, group.footerLink!, "desktop", event)}>{group.footerLink.label}<span aria-hidden="true"> →</span></Link>}
              </div>
            </div>
          );
        })}
      </nav>

      <div className="mobile-navigation">
        <button ref={mobileToggleRef} className="mobile-navigation-toggle" type="button" aria-label={mobileOpen ? labels.close : labels.open} aria-expanded={mobileOpen} aria-controls="mobile-site-navigation" onClick={openMobile}>
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
        <div id="mobile-site-navigation" className="mobile-navigation-panel" data-open={mobileOpen || undefined} hidden={!mobileOpen}>
          <div className="mobile-navigation-heading"><strong>{labels.mobile}</strong><button type="button" onClick={() => closeMobile(true)} aria-label={labels.close}>×</button></div>
          <nav aria-label={labels.mobile}>
            {groups.map((group) => {
              const items = navItems(group).filter((item) => !isNavigationPathCurrent(item.href, group.href));
              const hasPanel = items.length > 0;
              const active = isNavigationGroupActive(pathname, group);
              const exact = isNavigationPathCurrent(pathname, group.href);
              const groupLink: NavItem = { label: group.label, href: group.href };
              if (!hasPanel) {
                return <Link key={group.id} className="mobile-nav-direct" data-active={active || undefined} href={group.href} aria-current={exact ? "page" : undefined} onClick={(event) => selectLink(group, groupLink, "mobile", event)}><span>{group.label}</span><span aria-hidden="true">→</span></Link>;
              }
              const panelId = menuId(group, "mobile");
              return (
                <div className="mobile-nav-group" data-active={active || undefined} key={group.id}>
                  <div className="mobile-nav-group-heading">
                    <Link href={group.href} aria-current={exact ? "page" : undefined} onClick={(event) => selectLink(group, groupLink, "mobile", event)}>{group.label}</Link>
                    <button ref={(node) => { mobileGroupToggleRefs.current[group.id] = node; }} type="button" aria-label={labels.expand.replace("{label}", group.label)} aria-expanded={mobileGroup === group.id} aria-controls={panelId} onClick={() => toggleMobileGroup(group.id)}><span aria-hidden="true">⌄</span></button>
                  </div>
                  <div id={panelId} className="mobile-nav-group-panel" hidden={mobileGroup !== group.id} onKeyDown={(event) => panelKeydown(event, group.id, "mobile") }>
                    <Link className="mobile-nav-all" href={group.href} prefetch={false} aria-current={exact ? "page" : undefined} onClick={(event) => selectLink(group, { label: `${labels.all} ${group.label}`, href: group.href }, "mobile", event)}>{labels.all} {group.label}</Link>
                    {items.map((item) => <Link key={`${group.id}-${item.href}-${item.label}`} href={item.href} prefetch={false} data-emphasis={item.emphasis} aria-current={isNavigationPathCurrent(pathname, item.href) ? "page" : undefined} onClick={(event) => selectLink(group, item, "mobile", event)}><span>{item.label}</span>{item.description && <small>{item.description}</small>}</Link>)}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
