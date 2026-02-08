import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function Pipeline(){
  return (
    <main>
      <PageHero
        kicker="Projects"
        title="Development pipeline"
        subtitle="A structured way to communicate project stages without overstating commitments. Replace stages with approved labels and public information."
      />

      <section className="section alt">
        <div className="container">
          <SectionHeader
            kicker="Stages"
            title="Stage-based communication"
            subtitle="Use consistent stage labels: evaluation, development, execution. Avoid timelines or claims unless formally approved."
          />

          <div className="grid-3">
            {[
              {t:"Evaluation", d:"Screening, technical diligence, preliminary commercial structures."},
              {t:"Development", d:"Partner alignment, permitting pathways, and documented controls."},
              {t:"Execution", d:"Transaction-backed deployment with operational governance."},
            ].map((x) => (
              <div className="card" key={x.t}>
                <div className="tag">Stage</div>
                <h3 className="h3" style={{ marginTop: 8 }}>{x.t}</h3>
                <div className="muted" style={{ marginTop: 8 }}>{x.d}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, fontSize: 12, color: "var(--muted)" }}>
            Disclaimer: Project pipeline content is provided for general information only and may be subject to approvals, counterparties, and regulatory requirements.
          </div>
        </div>
      </section>
    </main>
  );
}
