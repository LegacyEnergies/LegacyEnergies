import { nav, newsroom, type NewsItem } from "./site";

export type SearchItem = {
  title: string;
  href: string;
  kind: "page" | "press" | "news" | "insight";
  /** Additional text used for matching (not displayed). */
  content?: string;
};

function flattenNavItems(): SearchItem[] {
  const out: SearchItem[] = [];
  for (const n of nav ?? []) {
    out.push({
      title: n.label,
      href: n.href,
      kind: "page",
      content: `${n.description ?? ""}`,
    });
    for (const child of n.children ?? []) {
      out.push({
        title: child.label,
        href: child.href,
        kind: "page",
        content: `${child.description ?? ""}`,
      });
    }
  }
  return out;
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function newsToSearchItems(items: NewsItem[]): SearchItem[] {
  return (items ?? []).map((n) => ({
    title: n.title,
    href: `/newsroom/${n.slug}`,
    kind: n.type === "press" ? "press" : n.type === "news" ? "news" : "insight",
    content: `${n.excerpt ?? ""} ${n.body ?? ""}`,
  }));
}

// Public API
export const searchIndex: SearchItem[] = [
  ...flattenNavItems(),
  ...newsToSearchItems(newsroom),
].filter((i) => !!i?.title && !!i?.href);

export function buildSearchIndex() {
  return searchIndex;
}

export function search(query: string, limit = 12): SearchItem[] {
  const q = normalize(query);
  if (!q) return [];

  const scored = searchIndex
    .map((item) => {
      const hay = normalize(`${item.title} ${item.content ?? ""} ${item.href}`);
      const idx = hay.indexOf(q);
      // Smaller index == better match. Non-matches score as Infinity.
      const score = idx === -1 ? Number.POSITIVE_INFINITY : idx;
      return { item, score };
    })
    .filter((x) => Number.isFinite(x.score))
    .sort((a, b) => a.score - b.score)
    .slice(0, limit)
    .map((x) => x.item);

  return scored;
}
