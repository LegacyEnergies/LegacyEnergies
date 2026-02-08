import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function Leadership(){
  return (
    <main>
      <PageHero
        kicker="Company"
        title="Leadership"
        subtitle="Executive management and oversight structures supporting strategic direction and operating discipline."
        backgroundVideo="/hero-about.mp4"
      />

      <section className="section alt">
        <div className="container">
          <SectionHeader
            kicker="Information"
            title="Leadership profiles"
            subtitle="Select leadership biographies and scope of responsibility are presented at a high level."
          />

          <div className="grid-3">
            {["Executive leadership", "Operations", "Governance and oversight"].map((t) => (
              <div className="card" key={t}>
                <div className="tag">Overview</div>
                <h3 className="h3" style={{ marginTop: 8 }}>{t}</h3>
                <div className="muted" style={{ marginTop: 8 }}>
                  Profiles and responsibilities can be shared here once approved for publication.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
