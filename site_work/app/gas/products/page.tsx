import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function GasProducts() {
  return (
    <main>
      <PageHero
        title="Gas products"
        backgroundVideo="/hero-gas.mp4"
      />

      {/* LPG and pipeline gas participation (mirrors /gas) */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="LPG and pipeline gas participation"
            subtitle="Participation is focused on physical LPG and pipeline-delivered natural gas, supported by documented execution and risk controls."
            note="Participation is subject to internal approvals, counterparty due diligence, and applicable regulation."
          />

          <div className="grid-3">
            <div className="card">
              <div className="tag">LPG</div>
              <h3 className="h3" style={{ marginTop: 8 }}>
                Physical LPG
              </h3>
              <div className="muted" style={{ marginTop: 8 }}>
                Market participation across key hubs with disciplined sizing, contract clarity, and delivery governance.
              </div>
            </div>

            <div className="card">
              <div className="tag">Natural gas</div>
              <h3 className="h3" style={{ marginTop: 8 }}>
                Pipeline gas
              </h3>
              <div className="muted" style={{ marginTop: 8 }}>
                Regional pipeline gas exposure aligned with infrastructure access, nominations, and operational constraints.
              </div>
            </div>

            <div className="card">
              <div className="tag">Execution</div>
              <h3 className="h3" style={{ marginTop: 8 }}>
                Structured execution
              </h3>
              <div className="muted" style={{ marginTop: 8 }}>
                Controls support pricing discipline, credit oversight, and documentation standards across the trade lifecycle.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
