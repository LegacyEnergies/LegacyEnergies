import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function Careers(){
  return (
    <main>
      <PageHero
        kicker="Careers"
        title="Careers"
        subtitle="A professional page aligned with major energy company career pages: roles, culture, and locations (locations and roles (as published))."
        backgroundImage="stock"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            kicker="Working with us"
            title="A practical operating environment"
            subtitle="Use this page to publish open roles, hiring process, and culture statements in a controlled, factual tone."
          />

          <div className="grid-3">
            {[
              {t:"Trading and Supply", d:"Market execution, risk awareness, and documented procedures."},
              {t:"Operations and Logistics", d:"Terminal interfaces, voyage execution, and delivery governance."},
              {t:"Risk, Legal and Ethics and Compliance", d:"KYC/AML/sanctions, documentation, and institutional standards."},
            ].map((x) => (
              <div className="card" key={x.t}>
                <div className="tag">Function</div>
                <h3 className="h3" style={{ marginTop: 8 }}>{x.t}</h3>
                <div className="muted" style={{ marginTop: 8 }}>{x.d}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18, fontSize: 12, color: "var(--muted)" }}>
            When roles are available, we publish a formal description, location expectations, and an application path. If you do not see a suitable position, you may submit a general profile through the Contact page.
          </div>
        </div>
      </section>
    </main>
  );
}
