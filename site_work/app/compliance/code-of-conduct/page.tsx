import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function Code(){
  return (
    <main>
      <PageHero
        kicker="Ethics and Compliance"
        title="Code of Conduct"
        subtitle="A majors-style Code of Conduct landing page with clear sections and a PDF placeholder."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <SectionHeader
            kicker="Integrity"
            title="Core principles"
            subtitle="Replace these sections with your approved Code of Conduct. Publish a PDF in the Document Center."
          />

          <div className="grid-3">
            {[
              {t:"Integrity and ethics", d:"We expect transparent behavior, accurate records, and documented decision-making."},
              {t:"Ethics and Compliance with law", d:"We operate in accordance with applicable laws and regulations in relevant jurisdictions."},
              {t:"Respect and professionalism", d:"We expect professional conduct across all counterparties and stakeholders."},
            ].map((x) => (
              <div className="card" key={x.t}>
                <div className="tag">Section</div>
                <h3 className="h3" style={{ marginTop: 8 }}>{x.t}</h3>
                <div className="muted" style={{ marginTop: 8 }}>{x.d}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18 }}>
            <Link href="/compliance/documents" style={{ color: "var(--navy-2)", fontSize: 13 }}>
              Go to Document Center → (upload Code of Conduct PDF)
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
