import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function Company(){
  const BREATHER_IMAGE = "/images/company-breather.jpg";
  const BREATHER_IMAGE_2 = "/images/company-breather-2.jpg";

  return (
    <main>
	      <PageHero
	        title="About Legacy Energies"
	        // Keep the hero clean; the narrative sits in “Our story”.
	        subtitle={undefined}
	        backgroundVideo="/hero-about.mp4"
	      />

      {/* Hero 2 — Narrative (match the Operating Model page rhythm) */}
      <section className="section">
        <div className="container" style={{ paddingTop: 40 }}>
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

	      {/* Light-alt background only for the “Focused participation” section */}
	      <div className="fullBleed" style={{ background: "var(--bg-alt)" }}>
	  {/* Hero 3 — Market participation (match the Operating Model page structure) */}
      <section className="section">
        <div className="container" style={{ paddingTop: 32 }}>
          <div className="grid-2" style={{ gap: 40, margin: "8px 0 44px" }}>
            <div>
              <h2 className="h2" style={{ margin: 0, maxWidth: 560 }}>
                Focused participation in physical markets
              </h2>
            </div>
            <div className="muted" style={{ fontSize: 16, lineHeight: 1.75 }}>
              We combine disciplined execution with fit-for-purpose controls to support reliable performance across the markets we serve.
              <br /><br />
              Participation is structured around physical delivery, with practical coordination across scheduling, shipping, and contractual
              performance.
              <br /><br />
              Our approach is designed to support reliable outcomes over time, while maintaining the flexibility required to operate as a private
              organization.
            </div>
          </div>

          {/* Breather image (Vitol-style): image + white overlay text, anchored bottom-left */}
          <section aria-label="Market participation highlight" className="section" style={{ padding: 0, marginBottom: 56 }}>
            <div
              style={{
                position: "relative",
                height: 460,
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src={BREATHER_IMAGE}
                alt="Operational coordination"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                style={{ objectFit: "cover", objectPosition: "50% 82%" }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.00) 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  padding: 28,
                  maxWidth: 760,
                  color: "#fff",
                  textShadow: "0 2px 12px rgba(0,0,0,0.55)",
                }}
              >
                <div style={{ fontSize: 34, lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.02em" }}>
                  Operational capability and delivery performance
                </div>
                <div
                  style={{
                    marginTop: 10,
                    maxWidth: 640,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.92)",
                  }}
                >
                  We participate through physical execution, with coordination across logistics and contractual delivery. Clear responsibilities and
                  structured workflows support reliable performance across markets.
                </div>
              </div>
            </div>
          </section>
	        </div>
	      </section>
	      </div>

		  {/* Participation pillars (white background from here to footer) */}
		  <section className="section" style={{ paddingTop: 0 }}>
		    <div className="container" style={{ paddingTop: 32 }}>
            <div
              className="grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: 36,
                alignItems: "start",
                marginTop: 32,
              }}
            >
              <div style={{ gridColumn: "span 4" }}>
                <h2 className="h2">Participation structure</h2>
                <div className="muted" style={{ marginTop: 12, lineHeight: 1.7 }}>
                  Our participation is aligned to execution capability, logistics coordination, and disciplined operating standards across physical
                  markets.
                </div>
              </div>

              <div style={{ gridColumn: "span 8" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 34,
                  }}
                >
                  <div>
                    <h3 className="h3">Energy market presence</h3>
                    <div className="muted" style={{ marginTop: 8 }}>
                      Active across physical crude oil, refined products, and natural gas markets, aligned to logistics capability and delivery
                      performance.
                    </div>
                  </div>

                  <div>
                    <h3 className="h3">Logistics-led delivery</h3>
                    <div className="muted" style={{ marginTop: 8 }}>
                      Execution is coordinated across shipping, scheduling, and delivery to support dependable performance from origin to destination.
                    </div>
                  </div>

                  <div>
                    <h3 className="h3">Standards and controls</h3>
                    <div className="muted" style={{ marginTop: 8 }}>
                      Operational discipline and risk considerations support responsible market participation and long-term continuity.
                    </div>
                  </div>

                  <div>
                    <h3 className="h3">Commercial discipline</h3>
                    <div className="muted" style={{ marginTop: 8 }}>
                      Activity is structured around clearly defined delivery terms and performance expectations, supporting repeatable outcomes across
                      market conditions.
                    </div>
                  </div>
                </div>
	              </div>
	            </div>

	            {/* Second breather image (visual pause) */}
	            <section style={{ marginTop: 80 }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 360,
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 10px 28px rgba(0,0,0,0.10)",
              }}
            >
              <Image
                src={BREATHER_IMAGE_2}
                alt="Global market participation"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                style={{ objectFit: "cover", objectPosition: "50% 73%" }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.00) 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  padding: 28,
                  maxWidth: 760,
                  color: "#fff",
                  textShadow: "0 2px 12px rgba(0,0,0,0.55)",
                }}
              >
                <div style={{ fontSize: 30, lineHeight: 1.12, fontWeight: 700, letterSpacing: "-0.02em" }}>
                  Reliability over time
                </div>
                <div
                  style={{
                    marginTop: 10,
                    maxWidth: 620,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.92)",
                  }}
                >
                  We operate with an execution-first mindset, supported by practical controls and a long-term operating approach.
                </div>
              </div>
	            </div>
	          </section>

	          <div style={{ height: 60 }} />
	        </div>
	      </section>
	</main>
  );
}