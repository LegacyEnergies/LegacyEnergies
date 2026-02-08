"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import styles from "./header.module.css";
import { useEffect, useMemo, useState } from "react";
import SearchOverlay from "./SearchOverlay";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const items = useMemo(() => nav, []);

  // Close any open mega menu when navigating.
  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  // Track scroll position so we can switch the header to a light theme
  useEffect(() => {
    const onScroll = () => {
      // Switch once we're a little way down the page
      setScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega menu when clicking outside the header.
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest(`.${styles.header}`)) return;
      setOpen(null);
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${(scrolled || open) ? styles.headerScrolled : ""}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label={`${site.name} home`}>
            <Image
              // Use the white mark on the transparent/dark header for better contrast.
              // Once the header becomes light (on scroll / menu open), revert to the standard logo.
              src={scrolled || open ? "/brand/legacy-logo-base.png" : "/brand/legacy-logo-white.png"}
              alt={site.name}
              width={220}
              height={86}
              className={styles.logo}
              priority
            />
          </Link>

          <nav
            className={`${styles.nav} ${mobile ? styles.navOpen : ""}`}
            aria-label="Primary navigation"
          >
            {items.map((item) => {
              const active =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const hasChildren = !!item.children?.length;
              const isOpen = open === item.label;
              const children = hasChildren
                ? item.children!.filter((c) => c.label.toLowerCase() !== "overview")
                : [];

              return (
                <div
                  key={item.label}
                  className={styles.navItem}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      className={`${styles.link} ${active ? styles.active : ""} ${isOpen ? styles.open : ""}`}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : item.label)}
                    >
                      {item.label}
                      <span
                        className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                        aria-hidden
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${styles.link} ${active ? styles.active : ""}`}
                      onClick={() => {
                        setOpen(null);
                        setMobile(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  )}

                  {hasChildren && (
                    <div
                      className={`${styles.mega} ${isOpen ? styles.megaOpen : ""} ${(item.label === "Newsroom" || item.label === "Gas" || item.label === "Projects") ? styles.megaAlignRight : ""}`}
                    >
                      <div className={styles.megaInner}>
                        <div className={styles.megaOverview}>
                          <div className={styles.megaOverviewTitle}>{item.label}</div>
                          <div className={styles.megaOverviewText}>
                            {item.description || "Overview"}
                          </div>
                          <Link
                            href={item.href}
                            className={styles.megaOverviewBtn}
                            onClick={() => {
                              setOpen(null);
                              setMobile(false);
                            }}
                          >
                            Overview
                          </Link>
                        </div>

                        <div className={styles.megaGrid}>
                          {children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className={styles.megaLink}
                              onClick={() => {
                                setOpen(null);
                                setMobile(false);
                              }}
                            >
                              <div className={styles.megaTitle}>{c.label}</div>
                              {c.description ? (
                                <div className={styles.megaDesc}>{c.description}</div>
                              ) : null}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Inline utility links (desktop) */}
            <div className={styles.utilityLinks}>
              <Link
                href="/careers"
                className={`${styles.link} ${styles.navLink} ${pathname.startsWith("/careers") ? styles.active : ""}`}
                onClick={() => {
                  setOpen(null);
                  setMobile(false);
                }}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className={`${styles.link} ${styles.navLink} ${pathname.startsWith("/contact") ? styles.active : ""}`}
                onClick={() => {
                  setOpen(null);
                  setMobile(false);
                }}
              >
                Contact
              </Link>
              <button
                className={styles.searchBtn}
                onClick={() => setSearchOpen(true)}
                aria-label="Open site search"
              >
                <span className={styles.searchIconGlyph} aria-hidden>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" fill="none" />
                    <line
                      x1="15.25"
                      y1="15.25"
                      x2="20"
                      y2="20"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className={styles.visuallyHidden}>Search</span>
              </button>
            </div>
          </nav>

          <div className={styles.actions}>


            <button
              className={styles.burger}
              onClick={() => setMobile((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={mobile}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
