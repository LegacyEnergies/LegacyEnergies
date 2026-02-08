import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function ESG(){
  return (
    <main>
      <PageHero
        kicker="Responsibility"
        title="Sustainability / ESG"
        subtitle="A factual, non-promotional page designed for enterprise ESG communication."
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            kicker="ESG"
            title="Policy and governance"
            subtitle="Publish approved frameworks, targets, and reporting posture. Keep claims controlled and evidence-based."
          />

          <div className="grid-3">
            {[
              {t:"Governance", d:"Oversight structures and accountability for ESG-related policies."},
              {t:"Disclosure", d:"Approach to reporting and documentation, linked to the Document Center."},
              {t:"Continuous improvement", d:"Operational improvements and measured outcomes, where approved."}
            ].map((x) => (
              <div className="card" key={x.t}>
                <div className="tag">ESG</div>
                <h3 className="h3" style={{ marginTop: 8 }}>{x.t}</h3>
                <div className="muted" style={{ marginTop: 8 }}>{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
