import PageHero from "@/components/PageHero";
import { newsroom } from "@/lib/site";
import Link from "next/link";

function fmt(d: string){
  const dt = new Date(d);
  return dt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" });
}

export default function Article({ params }: { params: { id: string } }){
  const item = newsroom.find(n => n.id === params.id);
  if (!item) {
    return (
      <main>
        <PageHero kicker="Newsroom" title="Not found" subtitle="The requested article does not exist." />
        <section className="section"><div className="container"><Link href="/newsroom">Back to Newsroom →</Link></div></section>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        kicker={item.type === "press" ? "Press Release" : "Insight"}
        title={item.title}
        subtitle={item.excerpt}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display:"flex", justifyContent:"space-between", gap: 14, flexWrap:"wrap", marginBottom: 14 }}>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>{fmt(item.date)}</div>
            <div style={{ display:"flex", gap: 8, flexWrap:"wrap" }}>
              {item.tags.map((t) => (
                <span key={t} style={{
                  fontSize: 11, letterSpacing:"0.12em", textTransform:"uppercase",
                  border:"1px solid rgba(15,23,42,0.16)", borderRadius: 999, padding:"6px 10px",
                  background:"#fff"
                }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="card">
            {item.body.map((p, idx) => (
              <p key={idx} style={{ marginTop: idx === 0 ? 0 : 12, color: "var(--muted)", fontSize: 14 }}>{p}</p>
            ))}
          </div>

          <div style={{ marginTop: 16 }}>
            <Link href="/newsroom" style={{ color:"var(--navy-2)", fontSize: 13 }}>← Back to Newsroom</Link>
          </div>

          <div style={{ marginTop: 18, fontSize: 12, color: "var(--muted)" }}>
            Disclaimer: This material is provided for information purposes only and does not constitute an offer, solicitation, or recommendation.
          </div>
        </div>
      </section>
    </main>
  );
}
