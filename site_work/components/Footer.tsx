"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

type FooterLink = { label: string; href: string };

const company: FooterLink[] = [
  { label: "About us", href: "/company" },
  { label: "How we operate", href: "/company/operating-model" },
  // Leadership page stays live, but we hide the shortcut in the footer for now.
  { label: "Corporate governance", href: "/company/corporate-governance" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Ethics and compliance", href: "/compliance" },
  { label: "Document center", href: "/compliance/documents" },
];

const solutions: FooterLink[] = [
  { label: "Products and services", href: "/trading-supply" },
  { label: "Crude oil and feedstocks", href: "/trading-supply/crude-oil-feedstocks" },
  { label: "Refined products", href: "/trading-supply/refined-products" },
  { label: "Logistics", href: "/trading-supply/infrastructure-logistics" },
  { label: "Gas", href: "/gas" },
  { label: "Projects", href: "/projects" },
];

const contact: FooterLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Media contacts", href: "/newsroom/media" },
];

export default function Footer() {
  const openCookiePreferences = () => {
    // Support common CMP globals without coupling to a specific vendor.
    const w = window as any;
    if (typeof w?.UC_UI?.showSecondLayer === "function") {
      w.UC_UI.showSecondLayer();
      return;
    }
    if (typeof w?.OneTrust?.ToggleInfoDisplay === "function") {
      w.OneTrust.ToggleInfoDisplay();
      return;
    }
    if (typeof w?.Cookiebot?.renew === "function") {
      w.Cookiebot.renew();
      return;
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoWrap} aria-label="Legacy Energies home">
            <Image
              src="/brand/legacy-logo-white.png"
              alt="Legacy Energies"
              width={260}
              height={84}
              className={styles.logo}
            />
          </Link>

          <p className={styles.about}>
            Legacy Energies is an independent energy platform focused on physical trading, logistics execution, and the natural gas value chain.
          </p>

          <div className={styles.social}>
            <a className={styles.socialLink} href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>
              in
            </a>
            <a className={styles.socialLink} href="#" aria-label="Twitter / X" onClick={(e) => e.preventDefault()}>
              X
            </a>
            <a className={styles.socialLink} href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
              f
            </a>
            <a className={styles.socialLink} href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
              ig
            </a>
            <a className={styles.socialLink} href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()}>
              yt
            </a>
          </div>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <div className={styles.colTitle}>Company</div>
            <div className={styles.linkList}>
              {company.map((l) => (
                <Link key={l.href} href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Operations</div>
            <div className={styles.linkList}>
              {solutions.map((l) => (
                <Link key={l.href} href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Get in touch</div>
            <div className={styles.linkList}>
              {contact.map((l) => (
                <Link key={l.href} href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <div className={styles.legal}>
          <Link href="/legal/privacy" className={styles.legalLink}>Privacy</Link>
          <Link href="/legal/cookies" className={styles.legalLink}>Cookie policy</Link>
          <Link href="/legal/terms" className={styles.legalLink}>Terms</Link>
          <Link href="/legal/disclaimer" className={styles.legalLink}>Disclaimer</Link>
          <button type="button" className={styles.legalLink} onClick={openCookiePreferences}>
            Cookie preferences
          </button>
        </div>
        <div className={styles.copy}>© {new Date().getFullYear()} Legacy Energies. All rights reserved.</div>
      </div>
    </footer>
  );
}
