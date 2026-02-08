import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function Businesses(){
  return (
    <main>
      {/* Hero 1 (video) — remove kicker + subtitle */}
      <PageHero
        title="Trading and Supply"
        backgroundVideo="/hero-trading.mp4"
      />

      {/* Hero 2 — Long-form trading content (Mercuria/Trafigura-inspired, fully rephrased) */}
      <section className="section alt">
        <div className="container">
          <SectionHeader
            title="Global solutions, market-led"
            subtitle="Trading capabilities spanning crude, refined products and gas, supported by logistics-led execution and disciplined risk controls."
          />

          {/* Typography-led zig-zag with breathers */}
          <div style={{ marginTop: 26, maxWidth: 1040, display: "flex", flexDirection: "column", gap: 30 }}>
            {/* Sourcing & market access (left) + breather on the right */}
            <div style={{ display: "flex", justifyContent: "space-between", gap: 26, alignItems: "stretch" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: 520,
                  padding: 22,
                  borderRadius: 22,
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <h3 className="h3" style={{ margin: 0 }}>Sourcing and market access</h3>
                <p className="muted" style={{ marginTop: 10 }}>
                  Legacy Energies participates across key global energy corridors, helping connect producers, refiners,
                  and end-users through structured physical trade. We focus on clear participation structures, practical
                  controls, and disciplined execution across the lifecycle of a transaction.
                </p>
                <p className="muted" style={{ marginTop: 10 }}>
                  Market access combines relationships, market intelligence, and execution capability. Our approach
                  prioritizes reliability, documentation discipline, and risk-managed decision pathways that support
                  consistent delivery outcomes.
                </p>
              </div>

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
                  Add this image manually:
                  public/images/trading-breather-1.jpg
                */}
                <img
                  src="/images/trading-breather-1.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Supply chain execution (right) — push slightly further right, add breather on the left, and use “freight” */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ width: "100%", maxWidth: 1040, display: "flex", justifyContent: "flex-end" }}>
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
                      Add this image manually:
                      public/images/trading-breather-2.jpg
                    */}
                    <img
                      src="/images/trading-breather-2.jpg"
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div
                    style={{
                      width: 560,
                      padding: 22,
                      borderRadius: 22,
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <h3 className="h3" style={{ margin: 0 }}>Supply chain execution</h3>
                    <p className="muted" style={{ marginTop: 10 }}>
                      Execution is coordinated across scheduling, storage, quality controls, documentation, and freight
                      workflows. We apply fit-for-purpose operating procedures and accountable roles to reduce friction,
                      manage exceptions, and protect outcomes for stakeholders.
                    </p>
                    <p className="muted" style={{ marginTop: 10 }}>
                      Where relevant, strategic storage and blending can support specification management and timely
                      positioning. Logistics coordination supports safe and reliable movement, aligned with contractual
                      requirements and governance standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product evolution (left) + breather on the right */}
            <div style={{ display: "flex", justifyContent: "space-between", gap: 26, alignItems: "stretch" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: 520,
                  padding: 22,
                  borderRadius: 22,
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <h3 className="h3" style={{ margin: 0 }}>Product evolution and transition readiness</h3>
                <p className="muted" style={{ marginTop: 10 }}>
                  Energy markets are evolving, and trading increasingly intersects with fuel quality frameworks,
                  regulatory developments, and new blending requirements. We follow practical controls and documented
                  processes to support responsible participation while maintaining reliability and delivery discipline.
                </p>
                <p className="muted" style={{ marginTop: 10 }}>
                  Our approach remains execution-first: clear governance, consistent documentation standards, and risk
                  management embedded into everyday decision-making.
                </p>
              </div>

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
                  Add this image manually:
                  public/images/trading-breather-3.jpg
                */}
                <img
                  src="/images/trading-breather-3.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 3 — Copy of Home “Activities”, renamed */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Products we trade"
            subtitle="Participation across the physical energy chain, aligned with global expectations."
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
                Storage, blending, freight, and delivery governance across the trade lifecycle.
              </div>
              <div className="activity-cta">
                <span>Explore</span>
                <span className="ctaMark" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero 4 — Additional depth */}
      <section className="section alt">
        <div className="container">
          <SectionHeader
            title="Operational depth across the trade lifecycle"
            subtitle="Processes, controls and delivery governance that support reliable performance."
          />

          <div className="grid-2" style={{ marginTop: 22 }}>
            <div className="card" style={{ padding: 22, display: "flex", flexDirection: "column" }}>
              <h3 className="h3" style={{ marginTop: 0 }}>Controls that scale</h3>
              <div className="muted" style={{ marginTop: 10 }}>
                Documentation standards, quality management, and operational sign-offs are structured to reduce execution
                risk. Clear escalation routes support consistent decision-making when market conditions change.
              </div>
              <div className="muted" style={{ marginTop: 10 }}>
                We apply practical governance across market exposure, risk oversight, and delivery readiness, aligned
                with responsible participation expectations.
              </div>
              <div style={{ marginTop: "auto", paddingTop: 16 }}>
                <Link className="btn" href="/company/operating-model" style={{ marginLeft: -12 }}>
                  Explore how we operate <span className="ctaMark" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="card" style={{ padding: 22, display: "flex", flexDirection: "column" }}>
              <h3 className="h3" style={{ marginTop: 0 }}>Logistics-led delivery</h3>
              <div className="muted" style={{ marginTop: 10 }}>
                Reliable delivery depends on logistics capability: storage, blending, and freight coordination. Our
                operating approach focuses on execution quality and continuity across markets.
              </div>
              <div className="muted" style={{ marginTop: 10 }}>
                We coordinate dependencies and confirmations with disciplined workflows to protect outcomes for clients
                and stakeholders.
              </div>
              <div style={{ marginTop: "auto", paddingTop: 16 }}>
                <Link className="btn" href="/trading-supply/infrastructure-logistics" style={{ marginLeft: -12 }}>
                  Explore logistics <span className="ctaMark" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
