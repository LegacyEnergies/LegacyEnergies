import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function Leadership(){
  return (
    <main>
      <PageHero
        title="Leadership"
        subtitle="Executive management and oversight supporting disciplined execution, risk control, and long-term partnership."
        backgroundVideo="/hero-about.mp4"
      />

      <section className="section alt">
        <div className="container">
          <p className="muted" style={{ maxWidth: 920, lineHeight: 1.75, margin: "0 auto 26px" }}>
            Our leadership team is responsible for setting strategic direction and maintaining the operating discipline required in physical energy
            markets. We combine commercial decision-making with practical execution oversight across logistics, scheduling, contractual performance,
            and delivery governance. Risk and compliance are embedded within day-to-day workflows to support responsible participation, continuity,
            and long-term alignment with the standards expected of an enterprise-style energy organization.
          </p>

          <SectionHeader kicker="Company" title="Executive management" subtitle="Executive roles supporting strategic direction and operating discipline." />

          {/* Top row: 3-up */}
          <div className="grid-3" style={{ marginBottom: 18 }}>
            {[
              { role: "CEO", name: "Omer Shalev" },
              { role: "CFO", name: "Jeremy Ezra" },
              { role: "VP Operations", name: "Renju Chakkappan" },
            ].map((p) => (
              <div
                className="card"
                key={p.role}
                style={{
                  minHeight: 140,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <h3 className="h3" style={{ margin: 0 }}>{p.role}</h3>
                <div className="muted" style={{ marginTop: 10 }}>{p.name}</div>
              </div>
            ))}
          </div>

          {/* Second row: 2 cards centered as a pair */}
          <div className="leadershipRow2">
            {[
              { role: "VP Risk and Compliance", name: "Goce Josifoski" },
              { role: "VP Global Trading", name: "Jason Wrenn Christodoulou" },
            ].map((p) => (
              <div
                className="card"
                key={p.role}
                style={{
                  minHeight: 140,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <h3 className="h3" style={{ margin: 0 }}>{p.role}</h3>
                <div className="muted" style={{ marginTop: 10 }}>{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
