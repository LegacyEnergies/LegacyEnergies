import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/lib/site";

export default function KYC(){
  return (
    <main>
      <PageHero
        kicker="Ethics and Compliance"
        title="KYC and Onboarding"
        subtitle="A practical onboarding page aligned to institutional standards and trade lifecycle governance."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <SectionHeader
            kicker="Onboarding"
            title="Counterparty information"
            subtitle="This page is designed to be concise and professional. Replace with your approved internal checklist."
          />

          <div className="card">
            <div className="tag">Typical requirements</div>
            <div className="muted" style={{ marginTop: 10 }}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Corporate registration documents and ownership structure</li>
                <li>Authorized signatories and board / director information (where applicable)</li>
                <li>Banking details and settlement instructions (validated)</li>
                <li>Trade references and operational contacts</li>
                <li>Sanctions/AML screening and risk-based approvals</li>
              </ul>
              <p style={{ marginTop: 14 }}>
                For onboarding requests, contact: <strong>{site.emails.general}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
