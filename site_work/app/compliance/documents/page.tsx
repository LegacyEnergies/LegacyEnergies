import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

const docs = [
  { cat: "Ethics and Compliance", title: "Code of Conduct (PDF)", note: "Information document. Replace with your approved file." },
  { cat: "Ethics and Compliance", title: "AML and Sanctions Statement (PDF)", note: "Publish only approved text and versions." },
  { cat: "Onboarding", title: "Counterparty KYC Pack (PDF)", note: "Company profile, onboarding checklist, and contact routing." },
  { cat: "Policies", title: "HSSE Policy (PDF)", note: "Health, Safety, Security and Environment policy statement." },
  { cat: "Policies", title: "Privacy Policy (PDF)", note: "Optional: provide downloadable version for convenience." }
];

export default function Documents(){
  return (
    <main>
      <PageHero
        kicker="Ethics and Compliance"
        title="Document Center"
        subtitle="A majors-style document library. Keep naming consistent, include versioning, and publish only approved files."
      />

      <section className="section alt">
        <div className="container">
          <SectionHeader
            kicker="Library"
            title="Downloads"
            subtitle="Replace locations and roles (as published) with real PDFs in /public/docs and link them here."
            note="Tip: add version/date in file name, e.g., Code-of-Conduct_v1.2_2025-12-01.pdf"
          />

          <div className="grid-3">
            {docs.map((d) => (
              <div className="card" key={d.title}>
                <div className="tag">{d.cat}</div>
                <h3 className="h3" style={{ marginTop: 8 }}>{d.title}</h3>
                <div className="muted" style={{ marginTop: 8 }}>{d.note}</div>
                <div style={{ marginTop: 12, fontSize: 12, color: "rgba(12,27,54,0.66)" }}>
                  Link placeholder: /docs/your-file.pdf
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
