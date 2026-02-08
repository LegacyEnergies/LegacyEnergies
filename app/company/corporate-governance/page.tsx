import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export default function CorporateGovernance(){
  const BREATHER_IMAGE = "/images/governance-breather.jpg";
  const BREATHER_IMAGE_2 = "/images/governance-breather-2.jpg";

  return (
    <main>
      <PageHero
        title="Corporate governance"
        subtitle=""
        backgroundVideo="/hero-about.mp4"
      />

	      {/* Vitol-style structure — intro narrative, breathing visuals, then governance components */}
	      <section className="section">
	        <div className="container" style={{ paddingTop: 40 }}>

          <div className="grid-2" style={{ gap: 40, margin: "8px 0 44px" }}>
            <div>
              <h2 className="h2" style={{ margin: 0, maxWidth: 560 }}>
                Oversight supporting accountability and decision quality
              </h2>
            </div>
            <div className="muted" style={{ fontSize: 16, lineHeight: 1.75 }}>
              Oversight structures support accountability, risk discipline, and responsible decision-making.
              <br /><br />
              Governance is designed to provide clear roles, escalation paths, and documented approvals, supporting
              consistent judgment across activities and market conditions.
              <br /><br />
              As a private organization, we emphasize fit-for-purpose controls and transparency, aligned to the scale and
              responsibilities of our business.
            </div>
          </div>

          {/* Breather image (governance highlight) */}
          <section aria-label="Governance highlight" className="section" style={{ padding: 0, marginBottom: 56 }}>
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
                alt="Governance and oversight"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                style={{ objectFit: "cover", objectPosition: "50% 68%" }}
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
                  Oversight and accountability
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
                  Defined responsibilities, structured approvals, and escalation paths support consistent decision-making
                  and integrity across our activities.
                </div>
              </div>
            </div>
          </section>

	          <div style={{ height: 10 }} />
	        </div>
	      </section>

	      {/* Light-alt background only for Governance framework */}
	      <section className="section alt fullBleed" style={{ paddingTop: 0, paddingBottom: 0 }}>
	        <div className="container" style={{ paddingTop: 32, paddingBottom: 32 }}>
	          <section style={{ marginTop: 26 }}>
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
	                <h2 className="h2">Governance framework</h2>
	                <div className="muted" style={{ marginTop: 12, lineHeight: 1.7 }}>
	                  Corporate governance supports disciplined execution, risk oversight, and responsible conduct.
	                  The framework is designed to remain clear, practical, and scalable as the organization evolves.
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
	                    <h3 className="h3">Accountability and mandates</h3>
	                    <div className="muted" style={{ marginTop: 8 }}>
	                      Roles and delegated authorities define how commitments are approved, documented, and monitored.
	                    </div>
	                  </div>

	                  <div>
	                    <h3 className="h3">Risk oversight</h3>
	                    <div className="muted" style={{ marginTop: 8 }}>
	                      Risk is assessed across market, credit, and operational dimensions, with clear escalation where required.
	                    </div>
	                  </div>

	                  <div>
	                    <h3 className="h3">Ethics and compliance</h3>
	                    <div className="muted" style={{ marginTop: 8 }}>
	                      Policies and training support responsible business conduct, integrity, and adherence to applicable requirements.
	                    </div>
	                  </div>

	                  <div>
	                    <h3 className="h3">Controls and assurance</h3>
	                    <div className="muted" style={{ marginTop: 8 }}>
	                      Documented controls support verification, reconciliation, and appropriate review of key activities.
	                    </div>
	                  </div>

	                  <div>
	                    <h3 className="h3">Transparency</h3>
	                    <div className="muted" style={{ marginTop: 8 }}>
	                      We communicate governance expectations clearly, including how policies are applied and monitored.
	                    </div>
	                  </div>

	                  <div>
	                    <h3 className="h3">Continuous improvement</h3>
	                    <div className="muted" style={{ marginTop: 8 }}>
	                      Governance is reviewed periodically to remain fit for purpose as markets, requirements, and scale change.
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </section>
	        </div>
	      </section>

	      {/* Continue on white background */}
	      <section className="section" style={{ paddingTop: 0 }}>
	        <div className="container" style={{ paddingTop: 32 }}>
	          {/* Breather image #2 */}
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
                alt="Market and oversight"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                style={{ objectFit: "cover", objectPosition: "50% 60%" }}
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
                  maxWidth: 820,
                  color: "#fff",
                  textShadow: "0 2px 12px rgba(0,0,0,0.55)",
                }}
              >
                <div style={{ fontSize: 30, lineHeight: 1.12, fontWeight: 700, letterSpacing: "-0.02em" }}>
                  Consistency across market conditions
                </div>
                <div
                  style={{
                    marginTop: 10,
                    maxWidth: 660,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.92)",
                  }}
                >
                  Clear processes and decision discipline help maintain continuity, integrity, and responsible conduct
                  across changing environments.
                </div>
              </div>
            </div>
          </section>

                    
	{/* Governance documents and related pages */}
	<section className="section" style={{ marginTop: 10, paddingTop: 0 }}>
  <div className="container">
    <div className="sectionHeader">
      <h2 className="sectionTitle">Policies and guidance</h2>
      <p className="sectionLead">
        Core policies are available through our Document Center. These materials reflect how we approach
        business integrity, responsible conduct, and risk management across our activities.
      </p>
    </div>

    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
      <Link href="/compliance/documents" className="governanceCard">
        <h3 className="governanceCardTitle">Code of conduct</h3>
        <p className="governanceCardText">
          Expectations for ethical behaviour, conflicts of interest, information integrity, and respectful
          workplace standards. Guidance includes escalation routes and a clear obligation to raise concerns.
        </p>
        <div className="governanceCardCta">
          <span>Open Document Center</span>
          <span className="ctaMark" />
        </div>
      </Link>

      <Link href="/compliance/documents" className="governanceCard">
        <h3 className="governanceCardTitle">AML and sanctions</h3>
        <p className="governanceCardText">
          Risk-based controls that support sanctions compliance, anti-money laundering obligations, and broader
          financial crime prevention. Reviews are embedded in approvals, record keeping, and ongoing monitoring.
        </p>
        <div className="governanceCardCta">
          <span>Open Document Center</span>
          <span className="ctaMark" />
        </div>
      </Link>

      <Link href="/compliance/documents" className="governanceCard">
        <h3 className="governanceCardTitle">Third-party diligence</h3>
        <p className="governanceCardText">
          Structured due diligence, onboarding, and risk classification designed to support transparent and
          responsible engagement with external parties. Controls include ownership checks, screening, and
          documentation standards.
        </p>
        <div className="governanceCardCta">
          <span>Open Document Center</span>
          <span className="ctaMark" />
        </div>
      </Link>

      <Link href="/compliance/documents" className="governanceCard">
        <h3 className="governanceCardTitle">Speak up</h3>
        <p className="governanceCardText">
          Channels for raising concerns in good faith, supported by confidentiality safeguards and a
          non-retaliation standard. Reports are reviewed, triaged, and escalated based on severity and risk.
        </p>
        <div className="governanceCardCta">
          <span>Open Document Center</span>
          <span className="ctaMark" />
        </div>
      </Link>
    </div>
  </div>
	</section>

	          <div style={{ height: 70 }} />
	        </div>
	      </section>
    </main>
  );
}
