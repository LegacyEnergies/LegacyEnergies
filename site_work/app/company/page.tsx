import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function Company(){
  return (
    <main>
	      <PageHero
	        title="About Legacy Energies"
	        // Keep the hero clean; the narrative sits in “Our story”.
	        subtitle={undefined}
	        backgroundVideo="/hero-about.mp4"
	      />

      <section className="section">
        <div className="container">
	          <SectionHeader
	            kicker=""
	            title="Focused participation in physical markets"
	            subtitle="We combine disciplined execution with fit-for-purpose controls to support reliable performance across the markets we serve."
	          />

          <div className="grid-3">
            <div className="card">
              <h3 className="h3" style={{ marginTop: 8 }}>Energy market presence</h3>
              <div className="muted" style={{ marginTop: 8 }}>
                Active across physical crude oil, refined products, and natural gas markets, aligned to logistics capability and delivery performance.
              </div>
            </div>
            <div className="card">
              <h3 className="h3" style={{ marginTop: 8 }}>Logistics-led delivery</h3>
              <div className="muted" style={{ marginTop: 8 }}>
                Execution is coordinated across shipping, scheduling, and delivery to support dependable performance from origin to destination.
              </div>
            </div>
            <div className="card">
              <h3 className="h3" style={{ marginTop: 8 }}>Standards and controls</h3>
              <div className="muted" style={{ marginTop: 8 }}>
                Operational discipline and risk considerations support responsible market participation and long-term continuity.
              </div>
            </div>
          </div>

          <div className="divider" style={{ margin: "72px 0" }} />

          {/* Our story — full-width narrative (no boxes) */}
          <section style={{ maxWidth: 920, margin: "0 auto" }}>
            <h2 className="h2">Our story</h2>

            <p className="muted" style={{ marginTop: 12, lineHeight: 1.75 }}>
              Legacy Energies is a privately held energy company headquartered in the United States, active across physical crude oil, refined products,
              and natural gas markets.
            </p>

            <p className="muted" style={{ marginTop: 14, lineHeight: 1.75 }}>
              Legacy Energies was founded in 2022 as a private energy platform focused on direct participation in physical energy markets. The business
              was built with a clear emphasis on execution, logistics coordination, and operational consistency across crude oil, refined products, and
              natural gas.
            </p>

            <p className="muted" style={{ marginTop: 14, lineHeight: 1.75 }}>
              From inception, the business has been structured to support participation in physical markets through careful planning,
              disciplined execution processes, and a long-term operating mindset. The focus is on building the capabilities, controls,
              and relationships required to support consistent market participation over time.
            </p>

            <p className="muted" style={{ marginTop: 14, lineHeight: 1.75 }}>
              Legacy Energies is co-owned by H.H. Sheikh Saud bin Salman bin Ali Al Khalifa, a member of the Royal Family of the Kingdom of Bahrain.
              Ownership support provides stability and long-term alignment, while day-to-day operations are managed independently, with a clear focus on
              execution quality and market participation.
            </p>

            <p className="muted" style={{ marginTop: 14, lineHeight: 1.75 }}>
              The company operates as a private organization, maintaining flexibility in decision-making while applying governance and risk standards
              appropriate to physical energy trading and logistics-driven operations.
            </p>
          </section>

          <div className="divider" style={{ margin: "72px 0" }} />

          {/* Operational approach — separate section */}
          <section style={{ maxWidth: 920, margin: "0 auto" }}>
            <h2 className="h2">Operational approach</h2>

            <p className="muted" style={{ marginTop: 12, lineHeight: 1.75 }}>
              Our operations are centered on the practical requirements of physical energy markets. Activity is coordinated across logistics, shipping,
              scheduling, and contractual performance to ensure reliable execution from origin to destination.
            </p>

            <p className="muted" style={{ marginTop: 14, lineHeight: 1.75 }}>
              Operational processes are designed to support consistency across transactions, with attention to timing, quality alignment, and delivery
              obligations. This approach reflects the realities of physical markets, where outcomes are determined by execution at each stage rather than
              transactional intent.
            </p>

            <p className="muted" style={{ marginTop: 14, lineHeight: 1.75 }}>
              Risk and control considerations are embedded within operating workflows, supporting responsible decision-making and continuity across market
              conditions, without constraining commercial flexibility.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
