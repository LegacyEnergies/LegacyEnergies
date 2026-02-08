"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { NewsItem } from "@/lib/site";

type Props = {
  press: NewsItem[];
  news: NewsItem[];
  insights: NewsItem[];
  initialTab?: Tab;
};

type Tab = "press" | "news" | "insights";

export default function NewsroomTabs({ press, news, insights, initialTab = "press" }: Props) {
  const [active, setActive] = useState<Tab>(initialTab);

  // Create formatter inside the Client Component (can't pass functions from Server Components).
  const fmt = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  }, []);

  const items = useMemo(() => {
    const src = active === "press" ? press : active === "news" ? news : insights;
    return src.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [active, press, news, insights]);

  return (
    <>
      <div className="newsroomTopbar">
        <div className="segmented" role="tablist" aria-label="Newsroom views">
          <button
            type="button"
            role="tab"
            aria-selected={active === "press"}
            className={`segBtn ${active === "press" ? "active" : ""}`}
            onClick={() => setActive("press")}
          >
            Press releases
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={active === "news"}
            className={`segBtn ${active === "news" ? "active" : ""}`}
            onClick={() => setActive("news")}
          >
            News
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={active === "insights"}
            className={`segBtn ${active === "insights" ? "active" : ""}`}
            onClick={() => setActive("insights")}
          >
            Insights
          </button>
        </div>

        {/* Intentionally no per-tab subtitle here to keep the layout consistent with other pages. */}
      </div>

      <div className="grid-3" style={{ marginTop: 22 }}>
        {items.map((n) => (
          <Link key={n.id} href={`/newsroom/${n.id}`} className="card">
            <h3 className="h3" style={{ marginTop: 8 }}>
              {n.title}
            </h3>
            <div className="muted" style={{ marginTop: 8 }}>
              {n.excerpt}
            </div>
            <div style={{ marginTop: 12, fontSize: 12, color: "rgba(12,27,54,0.70)" }}>
              {fmt.format(new Date(n.date))}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
