import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function LegalPage(){
  return (
    <main>
      <PageHero kicker="Legal" title="Legal Disclaimer" subtitle="A controlled, enterprise-style disclaimer page. Replace with counsel-approved text." />

      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <SectionHeader kicker="Information" title="Legal Disclaimer" subtitle="This is a page page. Replace the content with approved legal text." />
          <div className="card">
            <div className="tag">Information</div>
            <div className="muted" style={{ marginTop: 10 }}>
              Publish only content reviewed and approved by legal counsel. Ensure consistency with your Ethics and Compliance pages, Cookie policy, and any consent management platform configuration.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
