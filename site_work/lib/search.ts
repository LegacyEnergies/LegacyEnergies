import { nav } from "./site";

export type SearchEntry = { title: string; href: string; description?: string };

export function buildSearchIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];
  const walk = (items: typeof nav) => {
    for (const item of items) {
      out.push({ title: item.label, href: item.href, description: item.description });
      if (item.children) walk(item.children);
    }
  };
  walk(nav);
  return out;
}
