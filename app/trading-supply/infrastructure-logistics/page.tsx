import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

type Module = {
  title: string;
  body: string;
  imgSrc: string;
  imgAlt: string;
  imgPosition?: string;
};

const executionModules: Module[] = [
  {
    title: "Terminal and storage interfaces",
    body: "We coordinate nominations, terminal instructions, and load/discharge readiness with operators, inspection agencies, and service providers. The objective is consistent execution against agreed schedules, quantities, and quality requirements.",
    imgSrc: "/images/logistics/cover-terminal-interface.jpg",
    imgAlt: "Tank terminal and jetty",
  },
  {
    title: "Marine logistics and scheduling",
    body: "Voyage planning and operational coordination across shipping partners, port agents, and service providers. Workstreams include berthing windows, demurrage exposure management, and contingency routing when conditions change.",
    imgSrc: "/images/logistics/cover-marine-logistics.jpg",
    imgAlt: "Tanker at sea",
    imgPosition: "50% 70%",
  },
  {
    title: "Measurement and quality management",
    body: "Quality governance is supported through sampling, testing, inspection coordination, and data checks aligned with standard industry practice. Results are reconciled to support custody transfer and downstream acceptance.",
    imgSrc: "/images/logistics/cover-measurement-controls.jpg",
    imgAlt: "Pipeline measurement and control equipment",
  },
  {
    title: "Blending and component execution",
    body: "When required, blending and component interfaces are coordinated through approved facilities and qualified service providers. Execution is managed against defined specifications and documented procedures.",
    imgSrc: "/images/logistics/cover-blending-components.webp",
    imgAlt: "Industrial blending and tank farm piping",
  },
  {
    title: "Documentation and controls",
    body: "Documented workflows support operational continuity across terminals, carriers, and counterparties. Trade documentation, quality records, and shipment files are managed to meet contractual requirements and applicable regulations.",
    imgSrc: "/images/logistics/cover-documentation-controls.jpg",
    imgAlt: "Documentation and control room",
  },
  {
    title: "Terminal operations aligned to agreed procedures",
    body: "Day-to-day lifting and discharge execution is managed with defined roles, escalation paths, and exception handling. That includes interface management, inspection scope alignment, and timely communication to keep operations on plan.",
    imgSrc: "/images/logistics/cover-terminal-operations.jpg",
    imgAlt: "Terminal operations",
  },
];

const deliveryGovernance: Module[] = [
  {
    title: "Quality and documentation discipline",
    body: "Execution is supported by specification governance, inspection coordination, and documented checks aligned with standard industry practice. Clear documentation workflows support operational continuity across service providers.",
    imgSrc: "/images/logistics/breather-controls.jpg",
    imgAlt: "Documentation controls",
  },
  {
    title: "Operational risk management",
    body: "Operational planning, readiness checks, and defined escalation routes help maintain delivery performance. Exception management is structured to support continuity when schedules, terminals, or weather conditions shift.",
    imgSrc: "/images/logistics/cover-marine-logistics.jpg",
    imgAlt: "Marine operations",
  },
  {
    title: "Responsible trade controls",
    body: "Participation is governed by a risk-based compliance framework, including sanctions and trade controls, counterparty review, and recordkeeping standards aligned with responsible market practice.",
    imgSrc: "/images/logistics/cover-measurement-controls.jpg",
    imgAlt: "Control systems",
  },
  {
    title: "Documentation and controls",
    body: "Standardized shipment files support traceability and audit readiness. Records are maintained to evidence agreed procedures, quality outcomes, and operational approvals across the lifecycle of a movement.",
    imgSrc: "/images/logistics/breather-controls.jpg",
    imgAlt: "Controls and governance",
  },
];

function ZigZagRow({ item, reverse }: { item: Module; reverse?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 40,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: reverse ? "row-reverse" : "row",
        marginTop: 30,
      }}
    >
      <div
        style={{
          flex: "1 1 520px",
          maxWidth: 520,
          background: "transparent",
          border: "none",
          borderRadius: 0,
          padding: 0,
          boxShadow: "none",
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 800, color: "#0f172a" }}>{item.title}</div>
        <div style={{ marginTop: 8, color: "#475569", lineHeight: 1.6 }}>{item.body}</div>
      </div>

      <div
        style={{
          flex: "0 0 360px",
          width: 360,
          height: 240,
          borderRadius: 22,
          overflow: "hidden",
          boxShadow: "0 18px 45px rgba(2, 6, 23, 0.12)",
        }}
      >
        <Image
          src={item.imgSrc}
          alt={item.imgAlt}
          width={720}
          height={480}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: item.imgPosition ?? "center" }}
        />
      </div>
    </div>
  );
}

export default function InfrastructureLogistics() {
  return (
    <main>
<PageHero
        title="Infrastructure and logistics"
        backgroundVideo="/hero-logistics.mp4"
      />

      <Section className="tightBottom">
        <SectionHeader
          title="Physical execution that supports reliable delivery"
          subtitle="Logistics is where commercial terms become delivered performance. Execution is built around clear roles, verified data, and repeatable workflows across terminals, carriers, and service providers."
        />

        <div style={{ maxWidth: 920, marginTop: 14, color: "#475569", lineHeight: 1.65 }}>
          Movements are planned and managed against agreed procedures, applicable regulations, and responsible trade expectations. The emphasis is on operational continuity, disciplined documentation, and proactive exception management.
        </div>

        <div style={{ maxWidth: 920, marginTop: 18 }}>
          <div style={{ fontWeight: 800, color: "#0f172a" }}>Operational focus</div>
          <div style={{ marginTop: 8, color: "#475569", lineHeight: 1.65 }}>
            Our operating focus is to reduce variability around physical movements. That includes readiness checks, coordination across counterparties and service providers, and defined escalation routes so delivery performance is maintained when market and operating conditions change.
          </div>
        </div>
      </Section>

      <Section variant="alt" className="tightTop">
        <SectionHeader
          title="Execution modules"
          subtitle="We coordinate the operational components that sit around physical movements. Each module is designed to reduce variability and support consistent delivery outcomes."
        />

        <div style={{ marginTop: 20, maxWidth: 1040, marginLeft: "auto", marginRight: "auto" }}>
          {executionModules.map((m, idx) => (
            <ZigZagRow key={m.title} item={m} reverse={idx % 2 === 1} />
          ))}
        </div>
      </Section>

      <Section className="tightTop">
        <SectionHeader
          title="Delivery governance"
          subtitle="Controls that support safe, compliant, and reliable performance across the logistics and documentation lifecycle."
        />

        <div
          style={{
            marginTop: 24,
            maxWidth: 1040,
            marginLeft: "auto",
            marginRight: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: 26,
          }}
        >
          {deliveryGovernance.map((m) => (
            <div key={m.title} style={{ padding: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#0f172a" }}>{m.title}</div>
              <div style={{ marginTop: 8, color: "#475569", lineHeight: 1.6 }}>{m.body}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            maxWidth: 1040,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 34,
            borderRadius: 22,
            overflow: "hidden",
            boxShadow: "0 18px 45px rgba(2, 6, 23, 0.12)",
          }}
        >
          <Image
            src="/images/logistics/cover-delivery-governance-wide.jpg"
            alt="Delivery governance"
            width={2080}
            height={820}
            // Next/Image renders an inline element by default; display:block removes the baseline gap.
            style={{ display: "block", width: "100%", height: 360, objectFit: "cover", objectPosition: "center 25%" }}
          />
        </div>
      </Section>

      <Section variant="alt">
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(15, 23, 42, 0.08)",
              borderRadius: 22,
              padding: "22px 24px",
              boxShadow: "0 18px 45px rgba(2, 6, 23, 0.08)",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800, color: "#0f172a" }}>Explore how we operate</div>
            <div style={{ marginTop: 10, color: "#475569", lineHeight: 1.65 }}>
              Our operating model sets out how we manage execution, governance controls, and risk responsibilities across activities.
            </div>
            <div style={{ marginTop: 14 }}>
              <Link className="btn" href="/company/operating-model">How we operate <span className="ctaMark" aria-hidden="true" /></Link>
            </div>
          </div>

          <div
            style={{
              width: 360,
              height: 240,
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: "0 18px 45px rgba(2, 6, 23, 0.12)",
            }}
          >
            <Image
              src="/images/logistics/breather-controls.jpg"
              alt="Operating controls"
              width={720}
              height={480}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}

