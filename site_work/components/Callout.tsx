import Link from "next/link";

export default function Callout(props: {
  title: string;
  body: string;
  cta?: { label: string; href: string };
}) {
  const { title, body, cta } = props;
  return (
    <div className="card">
      <div className="tag">Callout</div>
      <h3 className="h3" style={{ marginTop: 8 }}>{title}</h3>
      <div className="muted" style={{ marginTop: 8 }}>{body}</div>
      {cta ? (
        <div style={{ marginTop: 14 }}>
          <Link className="btn ghost" href={cta.href}>{cta.label}</Link>
        </div>
      ) : null}
    </div>
  );
}
