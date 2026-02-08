import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function AmlSanctions(){
  return (
    <main>
      <PageHero
        kicker="Ethics and Compliance"
        title="AML and Sanctions Statement"
        subtitle="A controlled statement page. Keep language factual. Avoid overpromising. Publish only approved text."
      />

      <section className="section alt">
        <div className="container" style={{ maxWidth: 920 }}>
          <SectionHeader
            kicker="Statement"
            title="High-level posture"
            subtitle="Replace with counsel-approved language reflecting your actual procedures and jurisdictions."
          />

          <div className="card">
            <div className="tag">Template</div>
            <div className="muted" style={{ marginTop: 10 }}>
              Legacy Energies applies risk-based controls to support compliance with applicable anti-money laundering (AML) and sanctions requirements, including third-party due diligence, screening, and transaction-level review. Procedures may vary depending on jurisdiction, third-party profile, and transaction structure.
              <p style={{ marginTop: 12 }}>
                This statement is provided for information purposes only and does not create any obligations beyond those arising under applicable law and the relevant contractual documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
