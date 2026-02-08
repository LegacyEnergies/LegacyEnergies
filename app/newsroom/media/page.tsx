import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import Link from "next/link";
import type { ReactNode } from "react";

function Field({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div style={{ display: "grid", gap: 6 }}>
      <div style={{ fontSize: 12, letterSpacing: 0.12, textTransform: "uppercase", color: "var(--muted)" }}>
        {label}
      </div>
      <div style={{ fontSize: 15, color: "var(--text)" }}>{value}</div>
    </div>
  );
}

export default function MediaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Newsroom"
        title="Media"
        backgroundVideo="/hero-media.mp4"
        videoObjectPosition="50% 12%"
      />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.25fr 0.85fr",
              gap: 28,
              alignItems: "start",
            }}
          >
            <div style={{ display: "grid", gap: 16 }}>
              <div className="kicker">Media enquiries</div>
              <h2 className="h2" style={{ margin: 0 }}>
                A single point of contact
              </h2>
              <p className="p" style={{ margin: 0, maxWidth: 760 }}>
                We aim to respond to verified media requests promptly and to provide accurate information.
                For time-sensitive enquiries, include your deadline, publication, and the topic you are covering.
              </p>

              <div style={{ display: "grid", gap: 10, marginTop: 6 }}>
                <div className="segmented" style={{ alignSelf: "flex-start" }}>
                  <Link href="/newsroom" className="segBtn">
                    Newsroom
                  </Link>
                  <Link href="/newsroom?type=press" className="segBtn">
                    Company updates
                  </Link>
                  <Link href="/newsroom?type=insights" className="segBtn">
                    Editorial insights
                  </Link>
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>
                  Note: we do not provide market commentary, trading views, or investment advice.
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: "grid", gap: 16 }}>
                <div style={{ fontWeight: 650, fontSize: 16 }}>Press office</div>
                <Field
                  label="Email"
                  value={
                    <a href={`mailto:${site.emails.media}`} style={{ color: "var(--text)", textDecoration: "none" }}>
                      {site.emails.media}
                    </a>
                  }
                />
                <Field label="Response window" value={<>Mon–Fri, business hours (Eastern Time)</>} />
                <Field
                  label="What to include"
                  value={
                    <>
                      Publication, deadline, topic, and any document requests.
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section lightAlt">
        <div className="container">
          <div style={{ display: "grid", gap: 18 }}>
            <div className="kicker">Company information</div>
            <h2 className="h2" style={{ margin: 0 }}>
              Boilerplate
            </h2>
            <p className="p" style={{ margin: 0, maxWidth: 980 }}>
              Legacy Energies is an independent energy platform focused on physical trading, logistics execution, and
              participation across LPG and pipeline-delivered natural gas. Our operating approach combines disciplined
              risk controls, fit-for-purpose documentation, and coordinated delivery governance across shipping,
              terminals, and pipeline interfaces.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 16,
              }}
            >
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 650 }}>Areas of activity</div>
                <p className="p" style={{ marginTop: 8 }}>
                  LPG, pipeline natural gas, and associated logistics coordination in selected markets.
                </p>
              </div>
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 650 }}>How we work</div>
                <p className="p" style={{ marginTop: 8 }}>
                  Execution-first workflows, clear controls, and escalation paths aligned with contractual delivery
                  points.
                </p>
              </div>
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 650 }}>Compliance posture</div>
                <p className="p" style={{ marginTop: 8 }}>
                  Counterparty due diligence, sanctions compliance, and adherence to applicable terminal and pipeline
                  rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gap: 18 }}>
            <div className="kicker">Brand assets</div>
            <h2 className="h2" style={{ margin: 0 }}>
              Logos and usage guidance
            </h2>
            <p className="p" style={{ margin: 0, maxWidth: 980 }}>
              To maintain consistency across publications, we provide approved logo files and basic brand guidance on
              request. Please email the press office with your intended use, format, and deadline.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 650 }}>Logo formats</div>
                <ul className="list" style={{ marginTop: 10 }}>
                  <li>SVG for digital and responsive use</li>
                  <li>PNG for presentations and web placements</li>
                  <li>EPS/PDF for print applications</li>
                </ul>
              </div>
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 650 }}>Basic rules</div>
                <ul className="list" style={{ marginTop: 10 }}>
                  <li>Do not alter proportions, colors, or add effects</li>
                  <li>Maintain clear space around the mark</li>
                  <li>Use high-contrast backgrounds for legibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section lightAlt">
        <div className="container">
          <div style={{ display: "grid", gap: 18 }}>
            <div className="kicker">Interviews and filming</div>
            <h2 className="h2" style={{ margin: 0 }}>
              Practical information
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 16,
              }}
            >
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 650 }}>Site access</div>
                <p className="p" style={{ marginTop: 8 }}>
                  Operational sites are managed by terminals and service providers. Access requires advance approval,
                  safety briefings, and proof of insurance where applicable.
                </p>
              </div>
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 650 }}>Safety</div>
                <p className="p" style={{ marginTop: 8 }}>
                  LPG and natural gas environments require ignition control, PPE compliance, and adherence to
                  restricted-area procedures.
                </p>
              </div>
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 650 }}>Approvals</div>
                <p className="p" style={{ marginTop: 8 }}>
                  We may need to coordinate with counterparties and facility operators before confirming interviews or
                  on-site filming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: 22 }}>
            <div style={{ display: "grid", gap: 8 }}>
              <div style={{ fontWeight: 650 }}>Request checklist</div>
              <div style={{ color: "var(--muted)", fontSize: 14 }}>
                To help us respond efficiently, include the items below in your email.
              </div>
              <ul className="list" style={{ marginTop: 12 }}>
                <li>Publication and journalist name</li>
                <li>Deadline and time zone</li>
                <li>Topic and specific questions</li>
                <li>Requested documents, photos, or statements</li>
                <li>Any on-site visit requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
