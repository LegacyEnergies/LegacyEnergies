import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function Governance(){
  return (
    <main>
      <PageHero
        kicker="Company"
        title="Governance"
        subtitle="Oversight structures and documented standards supporting integrity, risk discipline, and consistent execution."
        backgroundVideo="/hero-about.mp4"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            kicker="Oversight"
            title="Policies and controls"
            subtitle="Use this section to publish governance statements, policy summaries, and oversight structures."
          />

          <div className="grid-3">
            <div className="card">
              <div className="tag">Policy</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Ethics and compliance</h3>
              <div className="muted" style={{ marginTop: 8 }}>
                Code of conduct, reporting channels, and integrity principles.
              </div>
              <div style={{ marginTop: 12 }}>
                <Link href="/compliance/code-of-conduct" style={{ color: "var(--navy-2)", fontSize: 13 }}>
                  View Code of Conduct →
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="tag">Control</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Risk management</h3>
              <div className="muted" style={{ marginTop: 8 }}>
                Structured risk management covering market, credit, and operational considerations.
              </div>
            </div>

            <div className="card">
              <div className="tag">Assurance</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Operational governance</h3>
              <div className="muted" style={{ marginTop: 8 }}>
                Documentation, quality/quantity, shipping, and handover procedures.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
