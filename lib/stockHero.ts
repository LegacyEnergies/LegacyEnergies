const STOCK_HEROES = [
  {
    src: "/stock/hero-industrial-plant.jpg",
    tags: ["industrial", "refining", "infrastructure", "energy"],
  },
  {
    src: "/stock/hero-refinery-night.jpg",
    tags: ["refinery", "processing", "industrial", "energy"],
  },
  {
    src: "/stock/hero-facility-smoke.jpg",
    tags: ["facility", "refining", "logistics", "energy"],
  },
] as const;

function hashString(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h;
}

export function pickStockHero(seed: string) {
  const s = (seed || "legacy").toLowerCase();

  // Try to pick a better match for the seed.
  const scored = STOCK_HEROES.map((h) => {
    const score = h.tags.reduce((acc, t) => (s.includes(t) ? acc + 2 : acc), 0);
    return { h, score };
  }).sort((a, b) => b.score - a.score);

  const bestScore = scored[0]?.score ?? 0;
  const candidates = bestScore > 0 ? scored.filter((x) => x.score === bestScore).map((x) => x.h) : STOCK_HEROES;

  const idx = hashString(seed) % candidates.length;
  return candidates[idx].src;
}
