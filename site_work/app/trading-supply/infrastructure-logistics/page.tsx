import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function Infra(){
  return (
    <main>
      <PageHero
        kicker="Trading and Supply"
        title="Logistics"
        subtitle="Storage, blending, and physical execution modules that support reliable delivery: terminal interfaces, shipping, and documentation controls."
        backgroundVideo="/hero-logistics.mp4"
      />

      <section className="section alt">
        <div className="container">
          <SectionHeader
            kicker="Execution"
            title="From planning to delivery"
            subtitle="This page is intentionally written in enterprise execution language (governance, controls, interfaces) rather than consumer logistics phrasing."
          />

          <div className="grid-3">
            <div className="card">
              <div className="tag">Storage</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Storage and blending</h3>
              <div className="muted" style={{ marginTop: 8 }}>Owned and third-party capacity strategies, blending where appropriate, and inventory governance.</div>
            </div>
            <div className="card">
              <div className="tag">Shipping</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Voyage execution</h3>
              <div className="muted" style={{ marginTop: 8 }}>Chartering interface, laytime discipline, and operational risk management.</div>
            </div>
            <div className="card">
              <div className="tag">Handover</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Delivery protocol</h3>
              <div className="muted" style={{ marginTop: 8 }}>Quality/quantity controls, documentary sets, and delivery close-out procedures.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
