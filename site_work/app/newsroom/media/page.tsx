import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/lib/site";

export default function MediaContacts(){
  return (
    <main>
      <PageHero
        kicker="Newsroom"
        title="Media contacts"
        subtitle="For press inquiries and factual clarifications related to published materials."
      />
      <section className="section alt">
        <div className="container">
          <SectionHeader
            kicker="Contact"
            title="Media"
            subtitle="Use this page to route media inquiries cleanly and keep trading/project channels separate."
          />
          <div className="card">
            <div className="tag">Email</div>
            <h3 className="h3" style={{ marginTop: 8 }}>{site.emails.media}</h3>
            <div className="muted" style={{ marginTop: 8 }}>
              Please include the relevant link or publication reference in your message.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
