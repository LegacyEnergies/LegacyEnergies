"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./search.module.css";
import { buildSearchIndex } from "@/lib/search";
import Link from "next/link";

export default function SearchOverlay(props: { open: boolean; onClose: () => void }) {
  const { open, onClose } = props;
  const index = useMemo(() => buildSearchIndex(), []);
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) setQ("");
  }, [open]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return index.slice(0, 8);
    return index
      .filter((e) => {
        const hay = `${e.title} ${e.description ?? ""} ${e.content ?? ""}`.toLowerCase();
        return hay.includes(query);
      })
      .slice(0, 10);
  }, [q, index]);

  if (!open) return null;

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label="Site search">
      <div className={styles.panel}>
        <div className={styles.top}>
          <div className={styles.title}>Search</div>
          <button className={styles.close} onClick={onClose} aria-label="Close search">Close</button>
        </div>

        <input
          className={styles.input}
          autoFocus
          placeholder="Enter a keyword, role, or topic…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <div className={styles.results}>
          {results.map((r) => (
            <Link key={r.href + r.title} href={r.href} className={styles.result} onClick={onClose}>
              <div className={styles.resultRow}>
                <div className={styles.resultTitle}>{r.title}</div>
                {r.kind === "page" ? null : (
                  <div className={styles.resultKind}>
                    {r.kind === "press" ? "Press" : r.kind === "news" ? "News" : "Insight"}
                  </div>
                )}
              </div>
              {r.description ? <div className={styles.resultDesc}>{r.description}</div> : null}
            </Link>
          ))}
        </div>

        <div className={styles.hint}>Press Esc to close</div>
      </div>
    </div>
  );
}
