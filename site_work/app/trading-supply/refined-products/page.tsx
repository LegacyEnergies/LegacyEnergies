import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { refinedProductsTaxonomy } from "@/lib/site";

export default function Refined(){
  return (
    <main>
      <PageHero
        kicker="Trading and Supply"
        title="Refined Products"
        subtitle="A majors-style product portfolio across light distillates, middle distillates, fuel oils, and aviation."
        backgroundVideo="/hero-refined.mp4"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            kicker="Taxonomy"
            title="Products portfolio"
            subtitle="Terminology follows how major energy groups organise their physical portfolios: crude and feedstocks, refined products, gas, and infrastructure."
          />

          <div className="grid-3">
            {refinedProductsTaxonomy.map((g) => (
              <div className="card" key={g.group}>
                <div className="tag">{g.group}</div>
                <h3 className="h3" style={{ marginTop: 8 }}>{g.group}</h3>
                <div className="muted" style={{ marginTop: 8 }}>
                  {g.items.map((i) => (
                    <div key={`${g.group}-${i.name}`} style={{ marginTop: 10 }}>
                      <div style={{ fontWeight: 650, color: "var(--navy)" }}>{i.name}</div>
                      <div className="muted">{i.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader
            kicker="Execution"
            title="Delivery governance"
            subtitle="Execution is structured around specification control, terminal interface, and documentation discipline across regions (CIF/CFR/FOB) and terminals."
            note="This page intentionally avoids price commentary, availability promises, or other forward-looking commercial commitments."
          />

          <div className="grid-3">
            <div className="card">
              <div className="tag">Specifications</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Quality controls</h3>
              <div className="muted" style={{ marginTop: 8 }}>Specification alignment, inspection coordination, and documentary consistency.</div>
            </div>
            <div className="card">
              <div className="tag">Logistics</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Shipping and terminals</h3>
              <div className="muted" style={{ marginTop: 8 }}>Voyage planning, terminal interface, demurrage discipline, and handover protocol.</div>
            </div>
            <div className="card">
              <div className="tag">Documentation</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Trade documentation</h3>
              <div className="muted" style={{ marginTop: 8 }}>Bankable documentation set aligned with counterparties and intermediaries where applicable.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
