import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { newsroom } from "@/lib/site";
import NewsroomTabs from "@/components/NewsroomTabs";

export default function NewsroomPage({
  searchParams,
}: {
  searchParams?: { type?: string; tab?: string };
}) {
  const raw = String(searchParams?.type ?? searchParams?.tab ?? "").toLowerCase();
  const initialTab =
    raw === "press" || raw === "company" || raw === "updates"
      ? "press"
      : raw === "insights" || raw === "insight" || raw === "editorial"
        ? "insights"
        : raw === "news"
          ? "news"
          : "press";
  const press = newsroom.filter(n => n.type === "press");
  const news = newsroom.filter(n => n.type === "news");
  const insights = newsroom.filter(n => n.type === "insight");

  return (
    <main>
      <PageHero
        title="Newsroom"
        backgroundVideo="/hero-newsroom.mp4"
        backgroundImage="stock"
        videoObjectPosition="50% 12%"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            title="News and insights"
            subtitle="Select between verified company updates and editorial insights."
          />
          <NewsroomTabs press={press} news={news} insights={insights} initialTab={initialTab} />
        </div>
      </section>
    </main>
  );
}
