"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

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
        kicker="Legal"
        title="Cookie Policy"
        subtitle="This page describes how cookies and similar technologies are used on this website. Cookie preference controls are available via the Cookie settings link below."
        backgroundImage="stock"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <SectionHeader
            kicker="Cookies"
            title="Cookie settings and information"
            subtitle="Use the Cookie settings control to review and update your preferences. Replace this placeholder text with your final policy content and disclosures."
            note="This information is provided for general purposes. Final legal text should be reviewed and approved by counsel."
          />

          <div className="card" style={{ padding: 18 }}>
            <div className="tag">Consent preferences</div>
            <h3 className="h3" style={{ marginTop: 10 }}>Cookie settings</h3>
            <p className="muted" style={{ marginTop: 8 }}>
              Open the consent preference center to review or update your selections.
            </p>
            <button className="btn" style={{ marginTop: 12 }} type="button" onClick={openCookieSettings}>
              Open cookie settings
            </button>
            <div className="muted" style={{ marginTop: 10, fontSize: 13 }}>
              If the preference center does not open on localhost, ensure your Usercentrics configuration allows this domain, and disable ad blockers for testing.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
