import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function EthicsCompliancePage(){
  return (
    <main>
      <PageHero
        kicker="Ethics and Compliance"
        title="Ethics and Compliance"
        subtitle="Ethics and compliance standards supporting responsible business conduct, risk management, and integrity across our activities."
        backgroundVideo="/hero-about.mp4"
      />

      <section className="section alt">
        <div className="container">
          <SectionHeader
            kicker="Framework"
            title="Standards and documentation"
            subtitle="This hub provides structured pages and a document center to support responsible business conduct and reliable execution."
          />

          <div className="grid-3">
            <Link href="/compliance/kyc" className="card">
              <div className="tag">KYC</div>
              <h3 className="h3" style={{ marginTop: 8 }}>KYC and Onboarding</h3>
              <div className="muted" style={{ marginTop: 8 }}>Counterparty onboarding posture and information requirements.</div>
            </Link>
            <Link href="/compliance/aml-sanctions" className="card">
              <div className="tag">AML</div>
              <h3 className="h3" style={{ marginTop: 8 }}>AML and Sanctions Statement</h3>
              <div className="muted" style={{ marginTop: 8 }}>High-level statement consistent with institutional expectations.</div>
            </Link>
            <Link href="/compliance/documents" className="card">
              <div className="tag">Docs</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Document Center</h3>
              <div className="muted" style={{ marginTop: 8 }}>Downloadable policy and onboarding documents (locations and roles (as published)).</div>
            </Link>
          </div>

          <div style={{ marginTop: 18, fontSize: 12, color: "var(--muted)" }}>
            Note: This content is informational. Applicable procedures may vary by jurisdiction, third-party profile, and transaction structure.
          </div>
        </div>
      </section>
    </main>
  );
}
