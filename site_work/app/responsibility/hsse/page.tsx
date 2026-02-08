import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function HSSE(){
  return (
    <main>
      <PageHero
        kicker="Responsibility"
        title="Health, Safety, Security and Environment"
        subtitle="A controlled, enterprise posture: operational discipline, prevention, and documented procedures."
      />

      <section className="section alt">
        <div className="container">
          <SectionHeader
            kicker="HSSE"
            title="Operational discipline"
            subtitle="Use this page to publish approved HSSE standards, training expectations, and operational controls."
          />

          <div className="grid-3">
            {[
              {t:"Safety culture", d:"Training, prevention, and incident reporting posture."},
              {t:"Operational controls", d:"Procedures across terminals, shipping, and handover points."},
              {t:"Contractor standards", d:"Minimum expectations for service providers and interfaces."}
            ].map((x) => (
              <div className="card" key={x.t}>
                <div className="tag">HSSE</div>
                <h3 className="h3" style={{ marginTop: 8 }}>{x.t}</h3>
                <div className="muted" style={{ marginTop: 8 }}>{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
