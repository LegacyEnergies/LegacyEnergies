import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { newsroom } from "@/lib/site";

function fmt(d: string){
  const dt = new Date(d);
  return dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
}

export default function NewsroomPage({ searchParams }: { searchParams: { type?: string } }){
  const t = searchParams.type;
  const items = t ? newsroom.filter(n => n.type === t) : newsroom;

  return (
    <main>
      <PageHero
        kicker="Newsroom"
        title="Newsroom"
        subtitle="Press releases and insights presented in a majors-style layout with filtering and a consistent article page."
        backgroundImage="stock"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            kicker="Updates"
            title="Press releases and insights"
            subtitle="Use this section to publish approved updates with consistent tone and legal posture."
          />

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
            <Link className="btn primary" href="/newsroom">All</Link>
            <Link className="btn primary" href="/newsroom?type=press">Press Releases</Link>
            <Link className="btn primary" href="/newsroom?type=insight">Insights</Link>
          </div>

          <div className="grid-3">
            {items.map((n) => (
              <Link key={n.id} href={`/newsroom/${n.id}`} className="card">
                <div className="tag">{n.type === "press" ? "Press Release" : "Insight"}</div>
                <h3 className="h3" style={{ marginTop: 8 }}>{n.title}</h3>
                <div className="muted" style={{ marginTop: 8 }}>{n.excerpt}</div>
                <div style={{ marginTop: 12, fontSize: 12, color: "rgba(12,27,54,0.70)" }}>{fmt(n.date)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
