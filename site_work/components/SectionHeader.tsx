export default function SectionHeader(props: {
  kicker: string;
  title: string;
  subtitle: string;
  note?: string;
  dark?: boolean;
}) {
  const { kicker, title, subtitle, note, dark } = props;
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 22, flexWrap: "wrap", marginBottom: 24 }}>
      <div style={{ maxWidth: 560 }}>
        {kicker ? (
          <div style={{
            fontSize: 11,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: dark ? "rgba(244,176,0,0.90)" : "rgba(11,42,91,0.85)"
          }}>
            {kicker}
          </div>
        ) : null}
        <h2 className="h2">{title}</h2>
        <div className={dark ? "muted" : "muted"}>{subtitle}</div>
      </div>
      {note ? <div className={dark ? "muted" : "muted"} style={{ maxWidth: 420 }}>{note}</div> : null}
    </div>
  );
}
