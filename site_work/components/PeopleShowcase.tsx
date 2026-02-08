"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
// Keep filename case consistent for production builds on case-sensitive filesystems.
import styles from "./PeopleShowcase.module.css";

// Static imports ensure the images are bundled and work consistently across environments.
// Use the provided assets for the "Our behaviours" rotation.
import peoplePortrait from "../public/behaviours/Our People.png";
import esgPortrait from "../public/behaviours/ESG.png";
import ethicsPortrait from "../public/behaviours/Ethics and Compliance.png";

const ROTATION_INTERVAL_MS = 7000;

type ItemKey = "people" | "esg" | "ethics";

type ShowcaseItem = {
  key: ItemKey;
  label: string;
  heading: string;
  body: string;
  ctaLabel: string;
  href: string;
  portrait: any;
};

export default function PeopleShowcase() {
  const items: ShowcaseItem[] = useMemo(
    () => [
      {
        key: "people",
        label: "Our people",
        heading: "Our people",
        body: "People are fundamental to execution quality and long-term performance.",
        ctaLabel: "Leadership overview",
        href: "/about/leadership",
        portrait: peoplePortrait,
      },
      {
        key: "esg",
        label: "Environmental, social and governance",
        heading: "Environmental,\nsocial and\ngovernance",
        body: "Environmental, social, and governance considerations are integrated into operational and decision-making processes.",
        ctaLabel: "ESG overview",
        href: "/esg",
        portrait: esgPortrait,
      },
      {
        key: "ethics",
        label: "Ethics and compliance",
        heading: "Ethics and\nCompliance",
        body: "Ethics and compliance are embedded at leadership level and applied consistently across the organization.",
        ctaLabel: "Explore compliance",
        href: "/compliance",
        portrait: ethicsPortrait,
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((p) => (p + 1) % items.length);
    }, ROTATION_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [items.length]);

  const current = items[active];
  const portraitClassName = `${styles.portraitImg} ${
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (styles as any)[`portrait_${current.key}`] || ""
  }`;

  return (
    <section className={styles.wrap} aria-labelledby="our-behaviours">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={`h2 ${styles.companyHeader}`}>Company</h2>
          <div className={styles.navList}>
            {items.map((it, idx) => (
              <button
                key={it.key}
                type="button"
                className={`${styles.navItem} ${idx === active ? styles.navItemActive : ""}`}
                onClick={() => setActive(idx)}
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.middle} aria-hidden="true">
          <div className={styles.portraitFrame}>
            {current.portrait ? (
              <Image
                src={current.portrait}
                alt=""
                fill
                priority={active === 0}
                sizes="(min-width: 1024px) 28vw, 60vw"
                className={portraitClassName}
                style={{ objectFit: "contain" }}
              />
            ) : (
              <div className={styles.portraitPlaceholder} />
            )}
          </div>
        </div>

        <div className={styles.right}>
          <h2 id="our-behaviours" className={`h2 ${styles.heading}`}>{current.heading}</h2>
          <p className={styles.body}>{current.body}</p>
          <Link className={styles.cta} href={current.href}>
            {current.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
