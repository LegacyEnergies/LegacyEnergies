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
  /** Fine-tune crop of background videos via CSS object-position (e.g. "50% 15%", "center top"). */
  videoObjectPosition?: string;
  variant?: "dark" | "light";
  /** Optional overrides for specific pages. Prefer leaving undefined. */
  minHeight?: string;
  /**
   * Forces a fixed hero height (also sets minHeight). Use when you need the
   * hero to be pixel-consistent across pages.
   */
  height?: string;
  contentPaddingTop?: string;
}) {
  const {
    title,
    subtitle,
    kicker,
    backgroundImage,
    backgroundVideo,
    videoObjectPosition,
    variant = "dark",
    minHeight,
    height,
    contentPaddingTop,
  } = props;

  const { setHeroBackground } = useHeroBackground();

  const selected =
    backgroundImage === "stock" || !backgroundImage
      ? normalizeBackgroundImage(pickStockHero(title))
      : normalizeBackgroundImage(backgroundImage);

  useEffect(() => {
    // The header uses this to decide when it can overlay a dark hero.
    // Keep an image URL even for video heroes so we always have a fallback.
    setHeroBackground(selected);
  }, [selected, backgroundVideo, setHeroBackground]);
  return (
    <section
      className={`${styles.wrap} ${backgroundVideo ? styles.video : ""} ${variant === "light" ? styles.light : ""}`}
      style={
        {
          ["--hero-image" as any]: selected,
          ...(height ? { height, minHeight: height, ["--hero-min-height" as any]: height } : {}),
          ...(!height && minHeight ? { ["--hero-min-height" as any]: minHeight } : {}),
          ...(contentPaddingTop ? { ["--hero-pad-top-extra" as any]: contentPaddingTop } : {}),
        } as any
      }
    >
      {backgroundVideo ? (
        <video
          className={styles.bgVideo}
          style={videoObjectPosition ? ({ objectPosition: videoObjectPosition } as React.CSSProperties) : undefined}
          src={backgroundVideo}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster={backgroundImage && backgroundImage !== "stock" ? backgroundImage : undefined}
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
