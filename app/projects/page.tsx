import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function Projects(){
  return (
    <main>
      <PageHero
        kicker="Projects"
        title="Active initiatives"
        subtitle="High-level descriptions of selected initiatives. No pricing, no forward-looking commitments, and no solicitation language."
        backgroundImage="stock"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            kicker="Approach"
            title="Information-first project presentation"
            subtitle="Major energy groups typically publish project information at a high level and avoid deal-specific or forward-looking commitments. This page follows that posture."
          />

          <div className="grid-3">
            {[
              {t:"Gas value chain development", d:"Exploration of integrated gas solutions where infrastructure and demand can be aligned."},
              {t:"Downstream infrastructure interfaces", d:"Selective evaluation of storage and terminal interfaces to support reliable delivery."},
              {t:"Supply corridor development", d:"Structuring repeatable physical flows with disciplined governance and counterparties."},
            ].map((x) => (
              <div className="card" key={x.t}>
                <div className="tag">Initiative</div>
                <h3 className="h3" style={{ marginTop: 8 }}>{x.t}</h3>
                <div className="muted" style={{ marginTop: 8 }}>{x.d}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18 }}>
            <Link href="/projects/pipeline" style={{ color: "var(--navy-2)", fontSize: 13 }}>View Development Pipeline →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
