import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "alt" | "dark";
};

/**
 * Layout wrapper used across content pages.
 * Matches the existing `.section` + `.container` pattern used elsewhere in the site.
 */
export default function Section({ children, className, variant }: Props) {
  const cls = ["section", variant, className].filter(Boolean).join(" ").trim();

  return (
    <section className={cls}>
      <div className="container">{children}</div>
    </section>
  );
}
