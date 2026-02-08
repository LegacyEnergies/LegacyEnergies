import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function OperatingModel(){
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
	      <div className="container" style={{ paddingBottom: 10 }}>
	        <div className="grid-2" style={{ alignItems: "start" }}>
	          <div>
	            <h2 className="h2">Operating approach</h2>
	          </div>
	          <div>
	            <p className="muted" style={{ marginTop: 2 }}>
	              Disciplined execution, supported by risk management and reliable physical performance across markets.
	            </p>
	            <p className="muted" style={{ marginTop: 12 }}>
	              Our operating model reflects the practical requirements of physical markets. We focus on clear responsibilities, clean handover between functions, and
	              consistent delivery against contractual terms.
	            </p>
	          </div>
	        </div>
	      </div>
	    </section>

	    {/* Breathing visual between sections (replace the svg with any photo later). */}
	    <section aria-hidden className="section" style={{ padding: 0 }}>
	      <div
	        style={{
	          height: 320,
	          borderTop: "1px solid var(--border)",
	          borderBottom: "1px solid var(--border)",
	          backgroundImage: "url(/images/operating-breather.svg)",
	          backgroundSize: "cover",
	          backgroundPosition: "center",
	        }}
	      />
	    </section>

	    <section className="section">
	      <div className="container" style={{ paddingTop: 26 }}>
	        <SectionHeader
          title="Controls across the trade lifecycle"
          subtitle="Disciplined execution, supported by risk management and reliable physical performance across markets."
	        />

	        <div className="grid-3">
	          <div className="card">
	            <h3 className="h3">Decision discipline</h3>
	            <div className="muted" style={{ marginTop: 8 }}>
	              Defined mandates and approval steps guide commercial terms, credit exposure, and delivery commitments.
	            </div>
	          </div>

	          <div className="card">
	            <h3 className="h3">Risk management</h3>
	            <div className="muted" style={{ marginTop: 8 }}>
	              Market, operational, and credit considerations are assessed within the context of contract structure and execution requirements.
	            </div>
	          </div>

	          <div className="card">
	            <h3 className="h3">Compliance and integrity</h3>
	            <div className="muted" style={{ marginTop: 8 }}>
	              Standards and controls support responsible conduct and alignment with applicable regulatory expectations.
	            </div>
	          </div>
	        </div>

	        <div className="grid-3" style={{ marginTop: 18 }}>
	          <div className="card">
	            <h3 className="h3">Trade operations</h3>
	            <div className="muted" style={{ marginTop: 8 }}>
	              Scheduling, nominations, and documentation are managed end-to-end, supporting clean handover from load to discharge.
	            </div>
	          </div>

	          <div className="card">
	            <h3 className="h3">Quality and quantity assurance</h3>
	            <div className="muted" style={{ marginTop: 8 }}>
	              Product specification alignment, independent inspection where required, and clear reconciliation processes.
	            </div>
	          </div>

	          <div className="card">
	            <h3 className="h3">Shipping and storage</h3>
	            <div className="muted" style={{ marginTop: 8 }}>
	              Execution planning across chartering, storage interfaces, demurrage prevention, and operational contingency.
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
    </main>
  );
}
