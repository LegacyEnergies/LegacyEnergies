import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function Crude(){
  return (
    <main>
      <PageHero
        kicker="Trading and Supply"
        title="Crude Oil and Feedstocks"
        subtitle="Physical crude, condensates, and refinery feedstocks across key basins, supported by disciplined execution and risk governance."
        backgroundVideo="/hero-crude.mp4"
      />

      <section className="section alt">
        <div className="container">
          <SectionHeader
title="Crude trading and supply"
            subtitle="Focus on commercially relevant grades and feedstock solutions, aligned with commercial and refinery requirements."
            note="Content is for general information and may be subject to approvals, availability, and applicable regulations."
          />

          <div className="grid-3">
            <div className="card">
<h3 className="h3" style={{ marginTop: 8 }}>Physical crude flows</h3>
              <div className="muted" style={{ marginTop: 8 }}>Sourcing and placement aligned with execution capability and logistics constraints.</div>
            </div>
            <div className="card">
<h3 className="h3" style={{ marginTop: 8 }}>Refinery feedstocks</h3>
              <div className="muted" style={{ marginTop: 8 }}>Feedstock optimization support across blending, storage, and delivery timing.</div>
            </div>
            <div className="card">
<h3 className="h3" style={{ marginTop: 8 }}>Risk and compliance</h3>
              <div className="muted" style={{ marginTop: 8 }}>Transaction-level governance across credit, sanctions screening, and documentation.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
