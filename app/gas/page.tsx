import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function Gas() {
  return (
    <main>
      {/* Hero 1: keep positioning and layout unchanged. */}
      <PageHero
        title="Gas"
        backgroundVideo="/hero-gas.mp4"
        ctaLabel="Explore operations"
        ctaHref="/company/operating-model"
      />

      {/* Start here (below hero) */}
      <section className="section" style={{ background: "var(--light-alt)" }}>
        <div className="container">
          <SectionHeader
            title="LPG and pipeline gas participation"
            subtitle="Participation is focused on physical LPG and pipeline-delivered natural gas, supported by documented execution and risk controls."
          />

	          <div style={{ maxWidth: 860 }}>
	            <p className="lead dark" style={{ marginTop: 16 }}>
              We participate in LPG and pipeline natural gas markets with a safety-first operating mindset, supported by clear procedures,
              responsible handling standards, and disciplined controls across storage, transport interfaces, and contractual delivery points.
              LPG and natural gas require rigorous attention to ignition control, pressure containment, ventilation and confined-space awareness,
              and emergency response readiness. We work within established terminal and pipeline rules, maintain fit-for-purpose documentation,
              and coordinate with qualified operators and service providers to support consistent execution.
            </p>

            <p className="muted" style={{ marginTop: 14, lineHeight: 1.75 }}>
              Participation is framed around reliable scheduling and nomination discipline, measurement and reconciliation practices, and
              risk-managed contractual terms. Counterparty due diligence, compliance requirements, and operational checks are integrated into
              decision-making and ongoing monitoring to support safe performance and continuity through changing market conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt fullBleed">
        <div className="container">
          <SectionHeader
            title="Execution that supports reliable delivery"
            subtitle="Operational coordination and fit-for-purpose controls are applied across scheduling, logistics interfaces, and contractual delivery."
          />

          <div className="grid grid-2" style={{ marginTop: 18 }}>
            <div className="card">
              <div className="cardInner">
                <h3 className="cardTitle">Operational coordination</h3>
                <p className="cardText">
                  We align internal teams and external parties around nominations, delivery windows, documentation, and exception handling.
                </p>
                <ul style={{ marginTop: 14, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
                  <li>Scheduling and nomination discipline</li>
                  <li>Terminal and pipeline interface, where applicable</li>
                  <li>Delivery documentation follow-through</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="cardInner">
                <h3 className="cardTitle">Risk and compliance posture</h3>
                <p className="cardText">
                  Risk management and compliance controls are integrated into approvals, contractual terms, and ongoing monitoring.
                </p>
                <ul style={{ marginTop: 14, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
                  <li>Market and credit exposure oversight</li>
                  <li>Contract governance and performance controls</li>
                  <li>Escalation paths and accountability</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ height: 10 }} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              maxWidth: 980,
              margin: "0 auto",
              gridTemplateColumns: "1fr 360px",
              gap: 28,
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                borderRadius: 22,
                padding: "22px 24px",
                boxShadow: "0 18px 45px rgba(2, 6, 23, 0.08)",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 800, color: "#0f172a" }}>Explore how we operate</div>
              <div style={{ marginTop: 10, color: "#475569", lineHeight: 1.65 }}>
                Our operating model sets out how we manage execution, governance controls, and risk responsibilities across activities.
              </div>
              <div style={{ marginTop: 14 }}>
                <Link className="btn" href="/company/operating-model">
                  How we operate <span className="ctaMark" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div
              style={{
                width: 360,
                height: 240,
                borderRadius: 22,
                overflow: "hidden",
                boxShadow: "0 18px 45px rgba(2, 6, 23, 0.12)",
              }}
            >
              <Image
                src="/images/logistics/breather-controls.jpg"
                alt="Operating controls"
                width={720}
                height={480}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
