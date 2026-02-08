import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function Responsibility(){
  return (
    <main>
      <PageHero
        kicker="Responsibility"
        title="Responsibility"
        subtitle="Health, safety, security, environment, and sustainability frameworks presented with an enterprise tone."
        backgroundImage="stock"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            kicker="Framework"
            title="HSSE and ESG"
            subtitle="Use these pages to publish approved summaries, targets, and policies. Keep language factual and controlled."
          />
          <div className="grid-3">
            <Link href="/responsibility/hsse" className="card">
              <div className="tag">HSSE</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Health, Safety, Security and Environment</h3>
              <div className="muted" style={{ marginTop: 8 }}>Operational discipline and risk controls in the field and across logistics.</div>
            </Link>
            <Link href="/responsibility/esg" className="card">
              <div className="tag">ESG</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Sustainability / ESG</h3>
              <div className="muted" style={{ marginTop: 8 }}>Policy summaries, reporting posture, and governance alignment.</div>
            </Link>
            <div className="card">
              <div className="tag">Reporting</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Document-ready</h3>
              <div className="muted" style={{ marginTop: 8 }}>Link ESG/HSSE policies in the Document Center as downloadable PDFs.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
