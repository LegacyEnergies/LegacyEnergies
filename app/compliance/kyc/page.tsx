"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function KycPage() {
  return (
    <main>
      <PageHero
        kicker="Ethics and Compliance"
        title="Know your counterparty"
        subtitle="Risk-based due diligence supporting responsible engagement with third parties."
        videoSrc="/videos/compliance-hero.mp4"
      />

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">A risk-based approach</h2>
            <p className="sectionLead">
              Our onboarding and due diligence practices are designed to support integrity, transparency, and responsible
              decision-making. Reviews are proportionate to risk, aligned to applicable regulations, and structured to
              support consistent outcomes.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, marginTop: 18 }}>
            <div className="card" style={{ gridColumn: "span 4" }}>
              <h3 className="cardTitle">Clear ownership and control</h3>
              <p className="cardText">
                We seek to understand beneficial ownership, governance, and authorized representatives to support
                accountability and transparency.
              </p>
            </div>

            <div className="card" style={{ gridColumn: "span 4" }}>
              <h3 className="cardTitle">Sanctions and financial crime controls</h3>
              <p className="cardText">
                Screening and checks support compliance with sanctions requirements and anti-money laundering and
                financial crime prevention controls.
              </p>
            </div>

            <div className="card" style={{ gridColumn: "span 4" }}>
              <h3 className="cardTitle">Ongoing monitoring</h3>
              <p className="cardText">
                Risk is not static. Where appropriate, reviews are refreshed over time, informed by changing facts,
                jurisdictions, and activity profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ marginTop: 10 }}>
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">How onboarding works</h2>
            <p className="sectionLead">
              Onboarding is structured around a consistent workflow. The depth of review depends on the counterparty and
              activity risk profile, including jurisdiction, ownership structure, and the nature of the engagement.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, marginTop: 18 }}>
            <div className="card" style={{ gridColumn: "span 3" }}>
              <h3 className="cardTitle">1. Screening</h3>
              <p className="cardText">
                Initial checks, including sanctions and other risk indicators, help determine whether further review is
                required.
              </p>
            </div>

            <div className="card" style={{ gridColumn: "span 3" }}>
              <h3 className="cardTitle">2. Understanding ownership</h3>
              <p className="cardText">
                We evaluate ownership and control, governance, and authorized signatories to support transparent
                engagement.
              </p>
            </div>

            <div className="card" style={{ gridColumn: "span 3" }}>
              <h3 className="cardTitle">3. Risk assessment</h3>
              <p className="cardText">
                A risk-based assessment considers the purpose of the relationship, jurisdictions involved, and relevant
                compliance requirements.
              </p>
            </div>

            <div className="card" style={{ gridColumn: "span 3" }}>
              <h3 className="cardTitle">4. Approvals and records</h3>
              <p className="cardText">
                Reviews are documented and approvals follow defined authorities. Records support auditability and
                consistent governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ marginTop: 10 }}>
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Related policies</h2>
            <p className="sectionLead">
              This approach is part of a broader compliance framework. Policies and guidance are available in our
              Document Center.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, marginTop: 18 }}>
            <Link href="/compliance/code-of-conduct" className="governanceCard" style={{ gridColumn: "span 4" }}>
              <h3 className="governanceCardTitle">Code of conduct</h3>
              <p className="governanceCardText">Standards for ethical behavior, integrity, and responsible conduct.</p>
              <div className="governanceCardCta">
                <span>Learn more</span>
                <span className="ctaMark" />
              </div>
            </Link>

            <Link href="/compliance/aml-sanctions" className="governanceCard" style={{ gridColumn: "span 4" }}>
              <h3 className="governanceCardTitle">AML and sanctions</h3>
              <p className="governanceCardText">
                Controls supporting sanctions compliance and financial crime prevention.
              </p>
              <div className="governanceCardCta">
                <span>Learn more</span>
                <span className="ctaMark" />
              </div>
            </Link>

            <Link href="/compliance/documents" className="governanceCard" style={{ gridColumn: "span 4" }}>
              <h3 className="governanceCardTitle">Document Center</h3>
              <p className="governanceCardText">
                Access policy documents and supporting guidance in a single place.
              </p>
              <div className="governanceCardCta">
                <span>Open Document Center</span>
                <span className="ctaMark" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
