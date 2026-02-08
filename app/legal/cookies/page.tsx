"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Script from "next/script";

// Cookie consent (Cookiebot by Usercentrics)
// Optional: set NEXT_PUBLIC_COOKIEBOT_ID in .env.local to override
const COOKIEBOT_ID = process.env.NEXT_PUBLIC_COOKIEBOT_ID ?? "8d7f4393-7a53-4b94-994c-299831acebee";

export default function CookiesPage() {
  const openCookieSettings = () => {
    // Cookiebot preference center
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (w.Cookiebot?.renew) {
      w.Cookiebot.renew();
    }
  };

  return (
    <main>
      <PageHero
        title="Cookie Policy"
        backgroundImage="stock"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="card" style={{ padding: 18 }}>
            <h3 className="h3">Cookie settings</h3>
            <p className="muted" style={{ marginTop: 8 }}>
              Open the consent preference center to review or update your selections.
            </p>
            <button className="btn" style={{ marginTop: 12 }} type="button" onClick={openCookieSettings}>
              Open cookie settings
            </button>
          </div>

          <div style={{ marginTop: 26 }}>
            <SectionHeader title="Cookie settings and information" />

            <div className="prose" style={{ marginTop: 14 }}>
              <p>
                Cookies and similar technologies help operate this website, support security controls, remember preferences, and
                measure performance. Where required, non essential cookies are set only after you make a selection in the cookie
                preference center.
              </p>

              <h3>Cookie categories</h3>
              <ul>
                <li><strong>Essential</strong>, required for core functionality, security, and fraud prevention.</li>
                <li><strong>Performance and analytics</strong>, used to understand how visitors use the site and improve reliability.</li>
                <li><strong>Functional</strong>, used to remember preferences and provide enhanced features.</li>
                <li><strong>Advertising</strong>, used to deliver more relevant messaging where enabled.</li>
              </ul>

              <h3>How to manage preferences</h3>
              <p>
                Use the cookie settings control above to review, update, or withdraw consent for non essential cookies.
              </p>

              <h3>Cookie declaration</h3>
              <p>
                The cookie declaration is provided by our consent management platform and lists the cookies currently in use on this
                website, including category, purpose, and duration.
              </p>

              <div className="card" style={{ padding: 18, marginTop: 14 }}>
                {/* Cookiebot Declaration embed (place where declaration should render) */}
                <Script
                  id="CookieDeclaration"
                  src={`https://consent.cookiebot.com/${COOKIEBOT_ID}/cd.js`}
                  strategy="afterInteractive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
