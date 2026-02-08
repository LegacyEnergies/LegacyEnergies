import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import Callout from "@/components/Callout";
import PeopleShowcase from "@/components/PeopleShowcase";

export default function Home() {
  return (
    <main>
      <Hero
        backgroundImage="stock"
        slides={[
          {
            title: "Focused presence across",
            highlight: "physical energy markets",
            lead:
              "Legacy Energies participates across crude, refined products, and natural gas, supported by logistics-led execution. We work with national oil companies, refiners, and corporate clients across global markets.",
            secondaryCta: { label: "Explore products and services", href: "/trading-supply" },
            pill: "Enterprise platform",
          },
          {
            title: "Discipline and",
            highlight: "Execution",
            lead: "Execution governance across trading, logistics, and operational functions.",
            secondaryCta: { label: "How we execute", href: "/trading-supply/infrastructure-logistics" },
            pill: "How we operate",
          },
          {
            title: "Trust and",
            highlight: "Responsibility",
            lead:
              "Our ethics and compliance framework underpins responsible conduct, risk management, and integrity across all activities.",
            secondaryCta: { label: "Learn more", href: "/compliance" },
            pill: "Responsible business",
          },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Activities"
            subtitle="Structured participation across the physical energy chain, aligned with global expectations."
          />

          <div className="activities-grid">
            <Link href="/trading-supply/crude-oil-feedstocks" className="activity-card">
              <div className="activity-image">
                <img src="/activities/crude-oil-feedstocks.jpg" alt="Crude oil and feedstocks" />
              </div>
              <h3 className="activity-title">Crude oil and feedstocks</h3>
              <div className="muted" style={{ marginTop: 10 }}>
                Physical crude, condensates, and refinery feedstocks across key markets.
              </div>
              <div className="activity-cta">
                <span>Explore</span>
                <span className="ctaMark" aria-hidden="true" />
              </div>
            </Link>

            <Link href="/trading-supply/refined-products" className="activity-card">
              <div className="activity-image">
                <img src="/activities/refined-products.jpg" alt="Refined products" />
              </div>
              <h3 className="activity-title">Refined Products</h3>
              <div className="muted" style={{ marginTop: 10 }}>
                Light distillates, middle distillates, fuel oil, and aviation fuel.
              </div>
              <div className="activity-cta">
                <span>Explore</span>
                <span className="ctaMark" aria-hidden="true" />
              </div>
            </Link>

            <Link href="/gas" className="activity-card">
              <div className="activity-image">
                <img src="/activities/gas.jpg" alt="Gas" />
              </div>
              <h3 className="activity-title">Gas</h3>
              <div className="muted" style={{ marginTop: 10 }}>
                LPG and pipeline gas participation across key markets.
              </div>
              <div className="activity-cta">
                <span>Explore</span>
                <span className="ctaMark" aria-hidden="true" />
              </div>
            </Link>

            <Link href="/trading-supply/infrastructure-logistics" className="activity-card">
              <div className="activity-image">
                <img src="/activities/logistics.jpg" alt="Logistics" />
              </div>
              <h3 className="activity-title">Logistics</h3>
              <div className="muted" style={{ marginTop: 10 }}>
                Storage, blending, shipping and delivery governance across the trade lifecycle.
              </div>
              <div className="activity-cta">
                <span>Explore</span>
                <span className="ctaMark" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader
            title="How we operate"
            subtitle="An operating framework built on risk management and reliable physical execution."
          />

          {/*
            Mercuria-style "invisible" boxes:
            - Typography-led blocks
            - Zig-zag flow (right column starts after the left block above)
            - No visible borders, no card chrome
          */}
          <div style={{ marginTop: 26, maxWidth: 980, display: "flex", flexDirection: "column", gap: 28 }}>
            {/* Risk management (left) */}
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: 520,
                  padding: 22,
                  borderRadius: 22,
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <h3 className="h3" style={{ margin: 0 }}>Risk management</h3>
                <p className="muted" style={{ marginTop: 10 }}>
                  A dedicated risk function provides independent challenge and oversight across market, credit, and
                  operational exposures. We use clear risk appetites, defined limits, and escalation paths to support
                  consistent decision quality.
                </p>
                <p className="muted" style={{ marginTop: 10 }}>
                  Risk monitoring is continuous and integrated into day-to-day execution, including position controls,
                  counterparty assessment, operational readiness, and delivery performance.
                </p>
              </div>
            </div>

            {/* Physical execution (right) with image on the left */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ width: "100%", maxWidth: 980, display: "flex", justifyContent: "flex-end" }}>
                <div style={{ display: "flex", gap: 26, alignItems: "stretch" }}>
                  <div
                    style={{
                      position: "relative",
                      width: 360,
                      minHeight: 240,
                      borderRadius: 22,
                      overflow: "hidden",
                      background: "#0b1625",
                    }}
                  >
                    {/*
                      Drop your image here (you will add it manually):
                      public/images/home-physical-execution.jpg
                    */}
                    <img
                      src="/images/home-physical-execution.jpg"
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div
                    style={{
                      width: 520,
                      padding: 22,
                      borderRadius: 22,
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <h3 className="h3" style={{ margin: 0 }}>Physical execution</h3>
                    <p className="muted" style={{ marginTop: 10 }}>
                      Execution is coordinated across scheduling, terminals, shipping, quality controls, and
                      documentation. We use fit-for-purpose operating procedures and accountable roles to reduce
                      friction and protect delivery outcomes.
                    </p>
                    <p className="muted" style={{ marginTop: 10 }}>
                      From nomination through discharge, we manage operational dependencies, exceptions, and
                      confirmations with structured workflows that support reliable performance across markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ethics and compliance (left) */}
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: 520,
                  padding: 22,
                  borderRadius: 22,
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <h3 className="h3" style={{ margin: 0 }}>Ethics and compliance</h3>
                <p className="muted" style={{ marginTop: 10 }}>
                  Ethics and compliance are embedded at leadership level and applied consistently across Legacy Energies.
                  Policies and controls support responsible business conduct, regulatory alignment, and governance
                  discipline across activities.
                </p>
                <p className="muted" style={{ marginTop: 10 }}>
                  We promote a culture of integrity and speak-up confidence, with clear guidance and escalation routes
                  when issues arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PeopleShowcase />

      <section className="section alt">
        <div className="container">
          <SectionHeader
            kicker=""
            title="Governance"
            subtitle="Governance structures support risk management, integrity, and operational discipline across our activities."
          />

          <div className="governanceGrid">
            <a className="governanceCard" href="/company/corporate-governance">
              <div className="governanceCardTitle">Board and oversight</div>
              <div className="governanceCardBody">
                Governance principles and oversight structures that support long-term stewardship and accountability.
              </div>
              <div className="governanceCardCta">
                <span>Explore governance</span>
                <span className="ctaMark" aria-hidden="true" />
              </div>
            </a>

            <a className="governanceCard" href="/compliance/documents">
              <div className="governanceCardTitle">Policies and standards</div>
              <div className="governanceCardBody">
                Access our Code of Conduct and key policies covering business integrity, human rights, modern slavery, sanctions compliance, and whistleblowing.
              </div>
              <div className="governanceCardCta">
                <span>Open Document Center</span>
                <span className="ctaMark" aria-hidden="true" />
              </div>
            </a>

            <a className="governanceCard" href="/newsroom">
              <div className="governanceCardTitle">Updates and insights</div>
              <div className="governanceCardBody">
                Press releases and insights presented in an enterprise newsroom format.
              </div>
              <div className="governanceCardCta">
                <span>Visit Newsroom</span>
                <span className="ctaMark" aria-hidden="true" />
              </div>
            </a>
          </div>

          <div className="hr" />
        </div>
      </section>
    </main>
  );
}
