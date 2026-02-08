import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function CorporateGovernance(){
  return (
    <main>
      <PageHero
        kicker="About us"
        title="Corporate governance"
        subtitle="Oversight structures supporting accountability, risk discipline, and responsible decision-making."
        backgroundVideo="/hero-about.mp4"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            kicker="Framework"
            title="Oversight and accountability"
            subtitle="Corporate governance practices are designed to support decision-making discipline, risk oversight, and responsible conduct."
          />
        </div>
      </section>
    </main>
  );
}
