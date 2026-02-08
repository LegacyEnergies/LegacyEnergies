import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function Gas(){
  return (
    <main>
      <PageHero
        kicker="Gas"
        title="Gas"
        subtitle="Participation across LPG, pipeline gas, and LNG, supported by disciplined execution and governance."
        backgroundVideo="/hero-gas.mp4"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            kicker="Gas"
            title="Gas"
            subtitle="LPG and pipeline gas participation across key markets."
            note="Project descriptions are illustrative and subject to internal approvals, commercial agreement, and applicable regulations."
          />

          <div className="grid-3">
            <Link href="/gas/products" className="card">
              <div className="tag">Gas</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Gas</h3>
              <div className="muted" style={{ marginTop: 8 }}>
                LNG and pipeline gas participation across key markets, supported by disciplined execution and governance.
              </div>
            </Link>

            <div className="card">
              <div className="tag">Framework</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Execution posture</h3>
              <div className="muted" style={{ marginTop: 8 }}>
                Controlled communications, documented controls, and compliance-aligned execution across stakeholders.
              </div>
            </div>

            <div className="card">
              <div className="tag">Disclosure</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Information only</h3>
              <div className="muted" style={{ marginTop: 8 }}>
                Content is informational and not an offer or solicitation. Availability and terms depend on approvals and contracts.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
