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
  { label: "Environmental, Social and Governance", href: "/esg" },
  { label: "Ethics and compliance", href: "/compliance" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Document center", href: "/compliance/documents" },
];

const solutions: FooterLink[] = [
  { label: "Products and services", href: "/trading-supply" },
  { label: "Crude oil and feedstocks", href: "/trading-supply/crude-oil-feedstocks" },
  { label: "Refined products", href: "/trading-supply/refined-products" },
  { label: "Logistics", href: "/trading-supply/infrastructure-logistics" },
  { label: "Gas", href: "/gas" },
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
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.33ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0Z"/>
              </svg>
            </a>
            <a className={styles.socialLink} href="#" aria-label="X" onClick={(e) => e.preventDefault()}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M18.9 2H22l-6.77 7.73L23.2 22h-6.6l-5.16-6.7L5.6 22H2.5l7.25-8.29L1.2 2h6.76l4.66 6.06L18.9 2Zm-1.16 18h1.72L7.05 3.9H5.2l12.54 16.1Z"/>
              </svg>
            </a>
            <a className={styles.socialLink} href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69V11.1h3.13V8.41c0-3.1 1.9-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.24h-1.92c-1.5 0-1.79.72-1.79 1.76v2.3h3.58l-.47 3.61h-3.11V24h6.11c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0Z"/>
              </svg>
            </a>
            <a className={styles.socialLink} href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1Zm5.99-7.94a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.13.63c-.8.31-1.48.73-2.16 1.41A5.9 5.9 0 0 0 .56 4.2c-.3.77-.5 1.65-.56 2.92C0 8.4 0 8.81 0 12.07c0 3.26.01 3.67.07 4.95.06 1.27.26 2.15.56 2.92.31.8.73 1.48 1.41 2.16a5.9 5.9 0 0 0 2.16 1.41c.77.3 1.65.5 2.92.56 1.28.06 1.69.07 4.95.07 3.26 0 3.67-.01 4.95-.07 1.27-.06 2.15-.26 2.92-.56a5.9 5.9 0 0 0 2.16-1.41 5.9 5.9 0 0 0 1.41-2.16c.3-.77.5-1.65.56-2.92.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.06-1.27-.26-2.15-.56-2.92a5.9 5.9 0 0 0-1.41-2.16A5.9 5.9 0 0 0 19.87.63c-.77-.3-1.65-.5-2.92-.56C15.67.01 15.26 0 12 0Zm0 2.16c3.2 0 3.58.01 4.84.07 1.16.05 1.79.25 2.21.41.55.21.94.46 1.35.87.41.41.66.8.87 1.35.16.42.36 1.05.41 2.21.06 1.26.07 1.64.07 4.84 0 3.2-.01 3.58-.07 4.84-.05 1.16-.25 1.79-.41 2.21-.21.55-.46.94-.87 1.35-.41.41-.8.66-1.35.87-.42.16-1.05.36-2.21.41-1.26.06-1.64.07-4.84.07-3.2 0-3.58-.01-4.84-.07-1.16-.05-1.79-.25-2.21-.41-.55-.21-.94-.46-1.35-.87-.41-.41-.66-.8-.87-1.35-.16-.42-.36-1.05-.41-2.21-.06-1.26-.07-1.64-.07-4.84 0-3.2.01-3.58.07-4.84.05-1.16.25-1.79.41-2.21.21-.55.46-.94.87-1.35.41-.41.8-.66 1.35-.87.42-.16 1.05-.36 2.21-.41C8.42 2.17 8.8 2.16 12 2.16Z"/>
              </svg>
            </a>
            <a className={styles.socialLink} href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M23.5 6.2s-.23-1.63-.94-2.35c-.9-.94-1.91-.95-2.37-1C16.88 2.6 12 2.6 12 2.6h-.01s-4.88 0-8.19.25c-.46.05-1.47.06-2.37 1C.72 4.57.5 6.2.5 6.2S.25 8.12.25 10.05v1.9c0 1.93.25 3.85.25 3.85s.23 1.63.94 2.35c.9.94 2.08.91 2.6 1.01 1.89.18 8.01.24 8.01.24s4.88-.01 8.19-.26c.46-.05 1.47-.06 2.37-1 .71-.72.94-2.35.94-2.35s.25-1.92.25-3.85v-1.9c0-1.93-.25-3.85-.25-3.85ZM9.75 14.06V7.9l6.27 3.08-6.27 3.08Z"/>
              </svg>
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
