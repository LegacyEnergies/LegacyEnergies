import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

const BREATHER_1 = "/images/compliance-breather.jpg";
const BREATHER_2 = "/images/compliance-breather-2.jpg";
// KYC image (separate asset to avoid repeating the breather image).
const KYC_IMAGE = "/images/kyc-breather.jpg";

const ANTI_BRIBERY_IMAGE = "/images/compliance-anti-bribery.jpg";
const AML_IMAGE = "/images/compliance-aml.jpg";

const FOCUS_AREAS = [
  {
    title: "Code of conduct",
    description:
      "Legacy Energies’ Code of Conduct defines the standards that guide professional behaviour, ethical decision‑making, and accountability across the organisation. It addresses conflicts of interest, responsible use of information, and appropriate business interactions, and sets out practical routes to seek advice, raise questions, or escalate concerns. The aim is consistent judgement in day‑to‑day work, supported by clear expectations and leadership reinforcement.",
  },
  {
    title: "Anti-bribery and corruption",
    description:
      "Legacy Energies maintains a zero‑tolerance approach to bribery, facilitation payments, and improper influence, whether direct or indirect. Controls are designed to be practical and risk‑based, including training, documented approvals, and enhanced review for higher‑risk relationships, third‑party arrangements, or government‑facing activity. Where concerns arise, escalation and refusal options are built into the process.",
  },
  {
    title: "Sanctions and trade controls",
    description:
      "Sanctions and trade controls are addressed through screening and documented checks designed to comply with applicable restrictive measures, export controls, and trade limitations. Reviews consider relevant parties and ownership, products and end‑use context, routing and destination, and other risk indicators that may require additional scrutiny. Where uncertainty exists, matters are escalated for review and, where needed, approval before proceeding.",
  },
  {
    title: "Anti-money laundering",
    description:
      "Risk‑based anti‑money laundering measures support the integrity of Legacy Energies’ activities by helping identify unusual patterns and reducing exposure to illicit finance. Due diligence is designed to build a clear understanding of identity, ownership and control, the legitimacy of the activity, and, where relevant, source‑of‑funds context before formal engagement. Suspicious concerns can be escalated and handled through documented review pathways.",
  },
  {
    title: "Market and conduct risk",
    description:
      "Market and conduct risk is managed through standards, monitoring, and controls intended to support disciplined execution and market integrity. This includes documented approvals, segregation of duties, and periodic review of key controls and behaviours across the lifecycle of activity. The objective is consistency, transparency of decisioning, and a clear record of how material risks are identified and managed.",
  },
  {
    title: "Reporting and speaking up",
    description:
      "Channels are available for employees and stakeholders to raise concerns in good faith, including confidential options where permitted by law. Reports are handled through a structured workflow, including intake, triage, review, and closure, with appropriate discretion and documentation. Non‑retaliation expectations underpin the process, and issues can be raised through line management, compliance contacts, or designated reporting routes.",
  },
] as const;

export default function CompliancePage() {
  return (
    <main>
      <PageHero
        title="Ethics and compliance"
        // Keep PageHero inside <main> so it aligns with the fixed-header offset used across the site.
        backgroundVideo="/hero-about.mp4"
      />
        {/* Intro */}
        <section className="section">
          <div className="container">
            <div className="grid-2">
              <div>
                <SectionHeader
                  eyebrow="How we operate"
                  title="Standards supporting responsible conduct and consistent execution"
                />
              </div>

              <div>
                <p className="lead dark">
                  Ethics and compliance standards supporting responsible business conduct, risk
                  management, and integrity across our activities.
                </p>
                <p className="muted" style={{ marginTop: 12 }}>
                  We assess partners, service providers, and other stakeholders through a risk-based KYC process.
                  The aim is to develop a clear view of ownership, commercial standing, and compliance posture before
                  any formal engagement.
                </p>
                <p className="muted" style={{ marginTop: 16 }}>
                  Reviews combine document collection, screening, and context-based assessment that scales with the
                  nature of the activity. Where relevant, this may include beneficial ownership checks, sanctions and
                  adverse media screening, and enhanced due diligence for higher-risk jurisdictions or structures.
                  Outcomes are documented, and escalation routes are available when additional review is required.
                </p>
              </div>

              <div className="card">
                <h3 className="h3">What it means in practice</h3>
                <ul className="list" style={{ marginTop: 12 }}>
                  <li>
                    <strong>Confidential handling.</strong> Reports are handled with sensitivity and
                    appropriate discretion.
                  </li>
                  <li>
                    <strong>Non-retaliation expectations.</strong> Concerns raised in good faith
                    should not result in adverse consequences.
                  </li>
                  <li>
                    <strong>Clear case workflow.</strong> Intake, triage, investigation, and closure
                    steps are documented.
                  </li>
                </ul>

                <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link className="ctaLink" href="/compliance/documents">
                    <span className="ctaLinkText">Read our Whistleblowing Policy</span>
                    <span className="ctaLinkLine" />
                  </Link>
                </div>
              </div>
            </div>

            
          </div>
        </section>

        {/* Breather */}
        <section className="section">
          <div className="container">
            <div
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
                height: 380,
                background: "#0b1220",
              }}
            >
              <Image
                src={BREATHER_1}
                alt=""
                fill
                // Keep all faces visible at this wide card aspect ratio.
                style={{ objectFit: "cover", objectPosition: "50% 25%" }}
                priority={false}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,0) 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 34,
                  bottom: 28,
                  right: 34,
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.1, marginTop: 8, maxWidth: 740 }}>
                  Ethics and compliance
                </div>
                <div
                  style={{ fontSize: 15, lineHeight: 1.5, marginTop: 10, maxWidth: 740, opacity: 0.9 }}
                >
                  Clear standards, practical controls, and consistent execution
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy coverage */}
        <section className="section alt">
          <div className="container">
            <SectionHeader
              eyebrow="Focus areas"
              title="Policy coverage aligned with practical risks and responsibilities"
            />

            <p className="muted" style={{ marginTop: 18, maxWidth: 760 }}>
              The Document Center contains the current policy set. Items below mirror core coverage
              areas used across major energy and commodities groups.
            </p>

            {/*
              Mercuria-style: "invisible" boxes (no borders), grid-aligned.
              Typography and spacing carry the structure.
            */}
            {/*
              Zig-zag layout (Mercuria-style): each item gets its own row,
              alternating left/right alignment so the right column starts lower.
            */}
            <div style={{ marginTop: 26, maxWidth: 980, display: "flex", flexDirection: "column", gap: 28 }}>
              {FOCUS_AREAS.map((c) => {
                const isRight = [
                  "Anti-bribery and corruption",
                  "Anti-money laundering",
                  "Reporting and speaking up",
                ].includes(c.title);

                const withImage = c.title === "Anti-bribery and corruption" || c.title === "Anti-money laundering";
                const imgSrc = c.title === "Anti-bribery and corruption" ? ANTI_BRIBERY_IMAGE : AML_IMAGE;

                return (
                  <div key={c.title} style={{ display: "flex", justifyContent: isRight ? "flex-end" : "flex-start" }}>
                    {/*
                      For selected right-side items, Mercuria-style image sits in the left negative space,
                      while the text block remains right-aligned.
                    */}
                    {withImage ? (
                      <div style={{ width: "100%", maxWidth: 980, display: "flex", justifyContent: "flex-end" }}>
                        <div style={{ display: "flex", gap: 26, alignItems: "stretch" }}>
                          <div
                            style={{
                              position: "relative",
                              width: 360,
                              minHeight: 240,
                              borderRadius: 22,
                              overflow: "hidden",
                              background: "#0b1625",
                            }}
                          >
                            <Image src={imgSrc} alt="" fill style={{ objectFit: "cover" }} sizes="360px" />
                          </div>

                          <div
                            style={{
                              width: 520,
                              padding: 22,
                              borderRadius: 22,
                              background: "rgba(255,255,255,0.03)",
                            }}
                          >
                            <h3 className="h3" style={{ margin: 0 }}>
                              {c.title}
                            </h3>
                            <p className="muted" style={{ marginTop: 10 }}>
                              {c.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          maxWidth: 520,
                          padding: 22,
                          borderRadius: 22,
                          background: "rgba(255,255,255,0.03)",
                        }}
                      >
                        <h3 className="h3" style={{ margin: 0 }}>
                          {c.title}
                        </h3>
                        <p className="muted" style={{ marginTop: 10 }}>
                          {c.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 18 }}>
              <Link className="ctaLink" href="/compliance/documents">
                <span className="ctaLinkText">View all documents</span>
                <span className="ctaLinkArrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Breather */}
        <section className="section">
          <div className="container">
            <div
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
                height: 380,
                background: "#0b1220",
              }}
            >
              <Image
                src={BREATHER_2}
                alt=""
                fill
                style={{ objectFit: "cover", objectPosition: "55% 40%" }}
                priority={false}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,0) 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 34,
                  bottom: 28,
                  right: 34,
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.1, maxWidth: 740 }}>
                  Risk and controls
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.5, opacity: 0.9, marginTop: 10, maxWidth: 640 }}>
                  Proportionate due diligence, escalation, and documented approvals
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* KYC */}
        <section className="section">
          <div className="container">
            <div className="grid-2" style={{ alignItems: "start" }}>
              <div>
                <SectionHeader
                  eyebrow="Due diligence"
                  title="Know-your-counterparty processes"
                  body="Risk-based screening and due diligence procedures support responsible engagement across our activities."
                />

                <p className="muted" style={{ marginTop: 12, maxWidth: 760 }}>
                  Prior to execution of contracts or formal engagements, we apply proportionate checks
                  designed to confirm identity, ownership and control, sanctions and reputational risk,
                  and the nature of the proposed transaction.
                </p>

                <p className="muted" style={{ marginTop: 12, maxWidth: 760 }}>
                  Enhanced measures may be applied based on jurisdiction, sector, or transaction
                  characteristics, including documentary review, escalation, and approval routing.
                </p>

                <p className="muted" style={{ marginTop: 12, maxWidth: 760 }}>
                  Our approach is designed to be measured and conservative. Reviews consider commercial
                  strength and compliance standing, including indications of legal restrictions, sanctions,
                  or other integrity concerns.
                </p>

                <p className="muted" style={{ marginTop: 12, maxWidth: 760 }}>
                  We apply similar discipline prior to investments, acquisitions, or joint ventures. Where
                  supply chains touch higher-risk environments, additional due diligence may be used to help
                  reduce exposure to corruption, violence, or human rights abuses.
                </p>
              </div>

              <div
                style={{
                  position: "relative",
                  height: 420,
                  borderRadius: 22,
                  overflow: "hidden",
                  border: "1px solid rgba(15, 23, 42, 0.12)",
                  background: "#0b1625",
                }}
              >
                <Image src={KYC_IMAGE} alt="" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 520px" />
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
