"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type HeroBackgroundContextValue = {
  heroBackground: string | null;
  setHeroBackground: (value: string | null) => void;
};

const HeroBackgroundContext = createContext<HeroBackgroundContextValue | null>(null);

export function HeroBackgroundProvider({ children }: { children: React.ReactNode }) {
  const [heroBackground, setHeroBackground] = useState<string | null>(null);
  const value = useMemo(() => ({ heroBackground, setHeroBackground }), [heroBackground]);
  return <HeroBackgroundContext.Provider value={value}>{children}</HeroBackgroundContext.Provider>;
}

export function useHeroBackground() {
  const ctx = useContext(HeroBackgroundContext);
  if (!ctx) {
    return {
      heroBackground: null,
      setHeroBackground: () => {
        /* no-op if used outside provider */
      },
    };
  }
  return ctx;
}
