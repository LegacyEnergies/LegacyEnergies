"use client";

import styles from "./pageHero.module.css";
import { pickStockHero } from "@/lib/stockHero";
import { useEffect } from "react";
import { useHeroBackground } from "@/components/HeroBackgroundContext";

function normalizeBackgroundImage(value: string) {
  const v = value.trim();
  if (!v) return "none";
  const lower = v.toLowerCase();
  if (lower.includes("gradient") || lower.includes("url(")) return v;
  // Treat as a path
  return `url('${v}')`;
}

export default function PageHero(props: {
  title: string;
  subtitle: string;
  kicker?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  variant?: "dark" | "light";
}) {
  const { title, subtitle, kicker, backgroundImage, backgroundVideo, variant = "dark" } = props;

  const { setHeroBackground } = useHeroBackground();

  const selected =
    backgroundImage === "stock" || !backgroundImage
      ? normalizeBackgroundImage(pickStockHero(title))
      : normalizeBackgroundImage(backgroundImage);

  useEffect(() => {
    // The header uses this to decide when it can overlay a dark hero.
    // For video heroes we intentionally do not provide an image URL.
    setHeroBackground(backgroundVideo ? null : selected);
  }, [selected, backgroundVideo, setHeroBackground]);
  return (
    <section
      className={`${styles.wrap} ${backgroundVideo ? styles.video : ""} ${variant === "light" ? styles.light : ""}`}
      style={backgroundVideo ? undefined : ({ ["--hero-image" as any]: selected } as any)}
    >
      {backgroundVideo ? (
        <video
          className={styles.bgVideo}
          src={backgroundVideo}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster=""
        />
      ) : null}

      <div className="container">
        {kicker ? <div className={styles.kicker}>{kicker}</div> : null}
        <h1 className={styles.h1}>{title}</h1>
        {subtitle ? <div className={styles.lead}>{subtitle}</div> : null}
      </div>
    </section>
  );
}
