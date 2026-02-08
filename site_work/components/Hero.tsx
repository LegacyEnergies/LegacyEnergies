"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";
import Link from "next/link";
import { pickStockHero } from "@/lib/stockHero";
import { useHeroBackground } from "@/components/HeroBackgroundContext";

function normalizeBackgroundImage(value: string) {
  const v = value.trim();
  if (!v) return "none";
  const lower = v.toLowerCase();
  if (lower.includes("gradient") || lower.includes("url(")) return v;
  return `url('${v}')`;
}

function normalizeMediaSrc(value: string) {
  const v = value.trim();
  if (!v) return "";
  // Allow passing CSS-style url('...') values, but strip...
  const lower = v.toLowerCase();
  if (!lower.startsWith("url(")) return v;
  const inner = v.slice(4).trim(); // after "url("
  const trimmed = inner.endsWith(")") ? inner.slice(0, -1).trim() : inner;
  return trimmed.replace(/^['"]/, "").replace(/['"]$/, "");
}

// Static list of hero images for the home hero rotation.
// These paths are under public/stock in v19.
const HERO_IMAGES = [
  "/stock/hero-omer-1.jpg",
  "/stock/hero-omer-2.jpg",
  "/stock/hero-omer-4.jpg",
];

// Home hero videos (Option A): one video per slide.
// Served from /public/hero-home-*.mp4
const HERO_VIDEOS: Array<string | null> = [
  "/hero-home-1.mp4",
  "/hero-home-2.mp4",
  "/hero-home-3.mp4",
];

const ROTATION_INTERVAL_MS = 8000;

type HeroCta = { label: string; href: string };

type HeroSlide = {
  kicker: string;
  title: string;
  /**
   * Optional: render the main headline in the accent tone.
   * Used on home hero slides 2/3 to keep the same visual language as slide 1.
   */
  titleTone?: "default" | "accent";
  highlight?: string;
  lead: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  pill?: string;
  meta?: string;
};

export default function Hero(props: {
  /**
   * Preferred: provide a slides array for multi-slide heroes.
   * If omitted, the hero will render a single slide using the legacy props below.
   */
  slides?: HeroSlide[];
  kicker?: string;
  title?: string;
  highlight?: string;
  lead?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  pill?: string;
  /**
   * Accepts either a full CSS background-image value (e.g. "url('/x.jpg')" or a gradient),
   * or a plain path like "/images/hero/home.svg".
   * Use "stock" (or omit) to auto-pick a curated stock image.
   */
  backgroundImage?: string;
}) {
  const { slides, kicker, title, highlight, lead, primaryCta, secondaryCta, pill, backgroundImage } = props;
  const { setHeroBackground } = useHeroBackground();

  const [index, setIndex] = useState(0);
  // Keep all hero videos mounted so the next one can buffer.
  // This avoids any flash of an underlying image/frame between slides.
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const resolvedSlides: HeroSlide[] =
    slides && slides.length
      ? slides
      : [
          {
            kicker: kicker || "",
            title: title || "",
            highlight,
            lead: lead || "",
            primaryCta,
            secondaryCta,
            pill,
          },
        ];

  const slideCount = resolvedSlides.length;
  const active = resolvedSlides[Math.min(index, slideCount - 1)];

  // Allow explicit line breaks in titles by passing "\n" in the slide title string.
  // This helps keep the home hero typography consistent across slides.
  const titleLines = (active.title || "").split("\n").filter(Boolean);

  const useStock = !backgroundImage || backgroundImage === "stock";

  // Option A: one background video per slide (where provided).
  // Videos should play in full (no time slicing) and only advance when finished.
  const videoSrc = useStock ? (normalizeMediaSrc(HERO_VIDEOS[index] || "") || null) : null;

  const useRotation = useStock && slideCount > 1 && !videoSrc;

  useEffect(() => {
    if (!useRotation) return;

    // For video slides, we advance on `onEnded` so each video can play in full.
    if (videoSrc) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideCount);
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(id);
  }, [useRotation, slideCount, videoSrc]);

  // Note: we avoid keeping an older video mounted during transitions to prevent
  // any flash of a video restarting while fading.

  useEffect(() => {
    if (!videoSrc) return;

    // Play only the active video, and pause the rest.
    // Preloading remains enabled, so the next slide is buffered and starts instantly.
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        try {
          // If the video is already near the end (e.g. after returning), restart cleanly.
          if (v.currentTime > 0 && v.currentTime >= (v.duration || Infinity) - 0.05) v.currentTime = 0;
        } catch {
          // ignore
        }
        const p = v.play();
        if (p && typeof (p as any).catch === "function") (p as any).catch(() => undefined);
      } else {
        try {
          v.pause();
        } catch {
          // ignore
        }
      }
    });
  }, [videoSrc, index]);

  let bgValue: string;

  // When playing videos, avoid keeping an image background around.
  // Image backgrounds (or video posters) can flash during source swaps.
  if (videoSrc) {
    bgValue = "none";
  } else if (useStock) {
    const img = HERO_IMAGES[index % HERO_IMAGES.length] || pickStockHero(active.title || "home");
    bgValue = `url('${img}')`;
  } else {
    bgValue = normalizeBackgroundImage(backgroundImage!);
  }

  useEffect(() => {
    setHeroBackground(bgValue);
  }, [bgValue, setHeroBackground]);

  return (
    <div className={`${styles.wrap} ${videoSrc ? styles.hasVideo : ""}`} style={{ ["--hero-image" as any]: bgValue }}>
      {videoSrc ? (
        <div className={styles.videoStack} aria-hidden="true">
          {HERO_VIDEOS.map((src, i) => {
            if (!src) return null;
            return (
              <video
                key={src}
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                className={styles.videoBg}
                src={src}
                autoPlay={i === index}
                muted
                playsInline
                preload="auto"
                poster=""
                // No transitions, no intermediate frames: hard-cut to next video.
                style={{ opacity: i === index ? 0.78 : 0 }}
                onEnded={
                  i === index
                    ? () => {
                        const next = (i + 1) % slideCount;
                        // Start the next video immediately, then update state.
                        const nv = videoRefs.current[next];
                        if (nv) {
                          try {
                            nv.currentTime = 0;
                          } catch {
                            // ignore
                          }
                          const p = nv.play();
                          if (p && typeof (p as any).catch === "function") (p as any).catch(() => undefined);
                        }
                        setIndex(next);
                      }
                    : undefined
                }
              />
            );
          })}
        </div>
      ) : null}
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <div className={`kicker ${styles.kickerFixed}`}>{active.kicker}</div>
            <h1 className={`h1 ${styles.titleFixed}`}>
              <span className={active.titleTone === "accent" ? styles.titleAccent : undefined}>
                {titleLines.length > 1 ? (
                  titleLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < titleLines.length - 1 ? <br /> : null}
                    </span>
                  ))
                ) : (
                  active.title
                )}
              </span>
              {active.highlight ? (
                <>
                  <br />
                  <span className={styles.hl}>{active.highlight}</span>
                </>
              ) : null}
            </h1>
            <p className={`lead ${styles.leadFixed}`}>{active.lead}</p>
            <div className={styles.actions}>
              {active.primaryCta ? (
                <Link className="btn primary" href={active.primaryCta.href}>
                  {active.primaryCta.label} <span aria-hidden>→</span>
                </Link>
              ) : null}
              {active.secondaryCta ? (
                <Link className="btn ghost" href={active.secondaryCta.href}>
                  {active.secondaryCta.label}
                </Link>
              ) : null}
            </div>
            <div className={styles.meta}>
              <div className={styles.dot} />
              {active.meta ? <div>{active.meta}</div> : null}
            </div>
          </div>
        </div>
      </div>
        {slideCount > 1 ? (
        <div className={styles.heroControls} aria-label="Hero navigation">
          {Array.from({ length: slideCount }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.heroControl} ${idx === index ? styles.heroControlActive : ''}`}
              onClick={() => setIndex(idx)}
              aria-label={`Show slide ${idx + 1}`}
            />
          ))}
        </div>
        ) : null}

    </div>
  );
}