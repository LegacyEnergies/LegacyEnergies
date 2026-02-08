import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function Refined(){
  return (
    <main>
      {/* Hero 1 (video) — remove kicker + subtitle */}
      <PageHero
        title="Refined Products"
        backgroundVideo="/hero-refined.mp4"
      />

      {/* Hero 2 — Short, majors-style paragraph (no “Taxonomy” framing) */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Refined products trading"
            subtitle="Physical market participation across core refined products, aligned with quality frameworks, regulatory requirements, and responsible execution."
          />

          <div style={{ maxWidth: 920, marginTop: 18 }}>
            <p className="muted" style={{ fontSize: 16, lineHeight: 1.75, margin: 0 }}>
              Refined products support critical mobility, industrial and power needs across regions, and market access
              depends on disciplined execution and governance. Legacy Energies focuses on fit-for-purpose controls around
              specification alignment, product integrity, and compliance requirements, including applicable sanctions and
              trade controls. Participation is organised to support reliable physical flow, with logistics coordination
              and documentation standards that are consistent with major market practices.
            </p>
          </div>
        </div>
      </section>

      {/* Hero 3 — Non-clickable “Products we trade” layout, refined-products specific taxonomy */}
      <section className="section alt">
        <div className="container">
          <SectionHeader
            title="Products we trade"
            subtitle=""
          />

          <div className="activities-grid" style={{ marginTop: 18 }}>
            {/* Light ends */}
            <div className="activity-card" style={{ cursor: "default" }}>
              <div className="activity-image" style={{ height: 260, overflow: "hidden" }}>
                {/*
                  Add this image manually:
                  public/images/refined-light-ends.jpg
                */}
                <img src="/images/refined-light-ends.jpg" alt="Light ends" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
              <h3 className="activity-title">Light ends</h3>
              <div className="muted" style={{ marginTop: 10 }}>
                Gasoline, naphtha, and other blending components used across refinery and distribution supply chains.
              </div>
            </div>

            {/* Middle distillates */}
            <div className="activity-card" style={{ cursor: "default" }}>
              <div className="activity-image" style={{ height: 260, overflow: "hidden" }}>
                {/*
                  Add this image manually:
                  public/images/refined-middle-distillates.jpg
                */}
                <img src="/images/refined-middle-distillates.jpg" alt="Middle distillates" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
              <h3 className="activity-title">Middle distillates</h3>
              <div className="muted" style={{ marginTop: 10 }}>
                Diesel and gasoil grades aligned with regional specifications and sulfur frameworks.
              </div>
            </div>

            {/* Aviation */}
            <div className="activity-card" style={{ cursor: "default" }}>
              <div className="activity-image" style={{ height: 260, overflow: "hidden" }}>
                {/*
                  Add this image manually:
                  public/images/refined-aviation.jpg
                */}
                <img src="/images/refined-aviation.jpg" alt="Aviation" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
              <h3 className="activity-title">Aviation</h3>
              <div className="muted" style={{ marginTop: 10 }}>
                Aviation turbine fuels aligned with industry specifications such as ASTM and DEF STAN requirements.
              </div>
            </div>

            {/* Fuel oil */}
            <div className="activity-card" style={{ cursor: "default" }}>
              <div className="activity-image" style={{ height: 260, overflow: "hidden" }}>
                {/*
                  Add this image manually:
                  public/images/refined-fuel-oil.jpg
                */}
                <img src="/images/refined-fuel-oil.jpg" alt="Fuel oil" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
              <h3 className="activity-title">Fuel oil</h3>
              <div className="muted" style={{ marginTop: 10 }}>
                Marine and industrial fuel oils, including low-sulfur and high-sulfur grades where applicable.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 4 — Delivery governance (majors-style, no “brokery” details) */}
      
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Delivery governance"
            subtitle="Disciplined execution across refined products, aligned with market standards and responsible trade expectations."
          />

          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 28, maxWidth: 1040 }}>
            <div style={{ maxWidth: 520 }}>
              <h3 className="h3">Specification governance</h3>
              <p className="muted">
                Refined products are managed against agreed specifications and recognised quality frameworks.
                Controls support product integrity through standardised checks, inspection coordination, and
                documentation discipline across the supply chain.
              </p>
            </div>

            <div style={{ display: "flex", gap: 26, alignItems: "flex-start", width: "100%", alignSelf: "flex-start" }}>
              <div
                style={{
                  width: 360,
                  minHeight: 220,
                  borderRadius: 22,
                  overflow: "hidden",
                  background: "#0b1625"
                }}
              >
                {/*
                  Add this image manually:
                  public/images/refined-governance-breather.jpg
                */}
                <img
                  src="/images/refined-governance-breather.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div style={{ maxWidth: 520 }}>
                <h3 className="h3">Responsible trade controls</h3>
              <p className="muted">
                Participation is governed by a risk-based compliance framework, including sanctions and trade
                controls, counterparty review, and recordkeeping standards aligned with major market practice.
              </p>
              </div>
            </div>

            <div style={{ maxWidth: 520 }}>
              <h3 className="h3">Freight and positioning</h3>
              <p className="muted">
                Freight, storage, and positioning are coordinated to support continuity and delivery reliability.
                Clear roles, escalation routes, and exception management support execution when market conditions change.
              </p>
            </div>
          </div>
        </div>
      </section>
    
    </main>
  );
}
