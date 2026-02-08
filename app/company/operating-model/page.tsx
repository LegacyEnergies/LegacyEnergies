import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function OperatingModel(){
  // Optional: swap this to a real photography asset later.
  // Easiest path: keep the same filename, but replace the file in /public.
  // If you add a photo, overwrite /public/images/operating-breather.jpg (or change the path here).
  const BREATHER_IMAGE = "/images/operating-breather.jpg";
  const BREATHER_IMAGE_2 = "/images/operating-breather-2.jpg";

  return (
    <main>
      <PageHero
        title="How we operate"
        // Keep the hero clean (no kicker, no additional claims in the hero).
        subtitle=""
        backgroundVideo="/hero-about.mp4"
      />

	    {/* Option 2: Vitol-style structure — intro narrative, a breathing visual, then the controls grid. */}
	    <section className="section">
	      <div className="container" style={{ paddingTop: 40 }}>

	        <div className="grid-2" style={{ gap: 40, margin: "8px 0 44px" }}>
	          <div>
	            <h2 className="h2" style={{ margin: 0, maxWidth: 520 }}>
	              Disciplined execution across the global supply chain
	            </h2>
	          </div>
	          <div className="muted" style={{ fontSize: 16, lineHeight: 1.75 }}>
	            Disciplined execution, supported by risk management and reliable physical performance across markets.
	            <br /><br />
	            Our operating approach is designed around the realities of physical energy markets. Activity is coordinated across
	            scheduling, logistics, and contractual performance, with clear responsibilities and documented workflows.
	            <br /><br />
	            Controls are applied in a way that supports reliable execution and continuity across market conditions, while maintaining
	            the flexibility required to operate as a private organization.
	          </div>
	        </div>


	        {/* Full-width breather image (Vitol-style: image + inset text block) */}
	        <section aria-label="Operating model highlight" className="section" style={{ padding: 0, marginBottom: 56 }}>
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
		              alt="Operations and execution"
		              fill
		              sizes="(max-width: 1024px) 100vw, 1200px"
		              // Keep a slightly higher crop so faces/helmets remain visible.
	              style={{ objectFit: "cover", objectPosition: "50% 12%" }}
		            />
	            <div
	              aria-hidden
	              style={{
	                position: "absolute",
	                inset: 0,
		                // Subtle legibility treatment without a boxed card.
		                background:
		                  "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.00) 100%)",
	              }}
	            />

		            {/* Breather overlay (Vitol-style): no card, white type, anchored bottom-left */}
		            <div
		              style={{
		                position: "absolute",
		                left: 0,
		                bottom: 0,
		                padding: 28,
		                maxWidth: 720,
		                color: "#fff",
		                textShadow: "0 2px 12px rgba(0,0,0,0.55)",
		              }}
		            >
		              <div
		                style={{
		                  fontSize: 34,
		                  lineHeight: 1.08,
		                  fontWeight: 700,
		                  letterSpacing: "-0.02em",
		                }}
		              >
		                Execution quality in the physical chain
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
		                We coordinate performance across scheduling, logistics, and contractual delivery. Clear responsibilities
		                and documented workflows support reliable outcomes across market conditions.
		              </div>
		            </div>
	          </div>
	        </section>
		      </div>
		    </section>

		    {/* Operating principles (Vitol-style, declarative) */}
		    {/* Background should be full-bleed, but content should remain container-aligned. */}
		    <section className="section alt fullBleed" style={{ paddingTop: 0, paddingBottom: 40, marginBottom: 0 }}>
		      <div className="container" style={{ paddingTop: 56, paddingBottom: 40 }}>
		        {/* Move content slightly down, but keep background full-bleed */}
		        <div style={{ height: 28 }} />

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
		            <h2 className="h2">Execution governance</h2>
		            <div className="muted" style={{ marginTop: 12, lineHeight: 1.7 }}>
		              We operate through defined mandates, risk controls, and clear accountability, supporting consistent outcomes across
		              markets and conditions.
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
		                <h3 className="h3">Decision discipline</h3>
		                <div className="muted" style={{ marginTop: 8 }}>
		                  Defined mandates and documented approvals guide commitments, exposure, and key delivery terms.
		                </div>
		              </div>

		              <div>
		                <h3 className="h3">Risk management</h3>
		                <div className="muted" style={{ marginTop: 8 }}>
		                  Exposure is assessed across market, credit, and operational dimensions, with clear escalation where required.
		                </div>
		              </div>

		              <div>
		                <h3 className="h3">Compliance and integrity</h3>
		                <div className="muted" style={{ marginTop: 8 }}>
		                  Policies and controls support responsible conduct, sanctions compliance, and consistent decision-making.
		                </div>
		              </div>

		              <div>
		                <h3 className="h3">Execution continuity</h3>
		                <div className="muted" style={{ marginTop: 8 }}>
		                  Governance supports operational resilience and timely performance across changing market and logistical conditions.
		                </div>
		              </div>

		              <div>
		                <h3 className="h3">Assurance and controls</h3>
		                <div className="muted" style={{ marginTop: 8 }}>
		                  Documented controls support performance verification, reconciliation, and delivery integrity.
		                </div>
		              </div>

		              <div>
		                <h3 className="h3">Governance and accountability</h3>
		                <div className="muted" style={{ marginTop: 8 }}>
		                  Roles, escalation paths, and approvals are structured to support consistent decision quality.
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>

		        {/* Breather image #2 (visual pause) */}
		        <section style={{ marginTop: 72 }}>
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
		              alt="Energy logistics"
		              fill
		              sizes="(max-width: 1024px) 100vw, 1200px"
		              style={{ objectFit: "cover", objectPosition: "50% 46%" }}
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
		                Continuity and control
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
		                Controls are designed to support reliable delivery performance, integrity of documentation, and consistent decision-making.
		              </div>
		            </div>
		          </div>
		        </section>

		        {/* Calm close spacer so the light-alt background reaches the footer cleanly */}
		        <div style={{ height: 36 }} />
		      </div>
		    </section>
	    </main>
	  );
}
