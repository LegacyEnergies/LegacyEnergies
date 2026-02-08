import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

export default function CrudeOilFeedstocks() {
  return (
    <main>
      <PageHero
        title="Crude Oil and Feedstocks"
        backgroundVideo="/hero-crude.mp4"
      />

      {/* Hero 2 */}
      <section className="section alt">
        <div className="container">
          <SectionHeader
            title="Crude and feedstock markets"
            subtitle="Physical crude, condensates, and refinery feedstocks across key basins, supported by disciplined execution and risk governance."
          />

          <div className="grid-2" style={{ alignItems: "start" }}>
            <div>
              <h3 className="h3">Market coverage with execution discipline</h3>
              <p className="muted" style={{ marginTop: 10, maxWidth: 560 }}>
                Crude oil and feedstocks are foundational inputs for refining and petrochemical supply. Coverage is
                organized around benchmark-linked and regional streams, with execution built around clear
                specifications, scheduling constraints, and disciplined operational controls.
              </p>

              <p className="muted" style={{ marginTop: 14, maxWidth: 560 }}>
                Execution is supported through coordinated operations, including nomination and scheduling,
                independent inspection and measurement, voyage planning, and documentation controls, consistent
                with applicable regulations and internal compliance standards.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                height: 340,
                borderRadius: 26,
                overflow: "hidden",
                background: "#0b1625",
              }}
            >
              {/*
                Add this image manually:
                public/images/crude-breather-1.jpg
              */}
              <img
                src="/images/crude-breather-1.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero 3 */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="What we cover"
            subtitle="Crude oil and feedstocks are organised around physical characteristics, processing behaviour, and logistics requirements. Coverage reflects how materials move through production, transportation, and refining systems, with emphasis on specification integrity, operational compatibility, and disciplined execution across established supply chains."
          />

          <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 22 }}>
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ height: 200, overflow: "hidden" }}>
                <Image
                  src="/images/crude/cover-crude-grades.jpg"
                  alt="Crude terminal logistics"
                  width={1200}
                  height={800}
                  // Keep the same crop/scale, but pan slightly upward to show more sky.
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%" }}
                  priority={false}
                />
              </div>
              <div style={{ padding: 22 }}>
                <h3 className="h3" style={{ marginTop: 0 }}>Crude oil grades</h3>
                <div className="muted" style={{ marginTop: 8 }}>
                  We work across benchmark-linked and regional grades, focused on quality parameters, assay consistency, and delivery windows that match downstream requirements.
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ height: 200, overflow: "hidden" }}>
                <Image
                  src="/images/crude/cover-condensates.jpg"
                  alt="Condensate handling equipment"
                  width={1200}
                  height={800}
                  // Keep the same crop/scale, but pan slightly downward to show more of the lower area.
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 70%" }}
                  priority={false}
                />
              </div>
              <div style={{ padding: 22 }}>
                <h3 className="h3" style={{ marginTop: 0 }}>Condensates</h3>
                <div className="muted" style={{ marginTop: 8 }}>
                  Condensate movements are managed with attention to stabilization, vapor pressure considerations, and documentation that supports safe storage and transport.
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ height: 200, overflow: "hidden" }}>
                <Image
                  src="/images/crude/cover-refinery-feedstocks.png"
                  alt="Refinery processing units"
                  width={1200}
                  height={800}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  priority={false}
                />
              </div>
              <div style={{ padding: 22 }}>
                <h3 className="h3" style={{ marginTop: 0 }}>Refinery feedstocks</h3>
                <div className="muted" style={{ marginTop: 8 }}>
                  We support feedstock supply and positioning for refining systems, prioritizing specification clarity, compatibility with processing configuration, and reliable logistics execution.
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ height: 200, overflow: "hidden" }}>
                <Image
                  src="/images/crude/cover-blendstocks-components.jpeg"
                  alt="Industrial blending and manifolds"
                  width={1200}
                  height={800}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  priority={false}
                />
              </div>
              <div style={{ padding: 22 }}>
                <h3 className="h3" style={{ marginTop: 0 }}>Blendstocks and components</h3>
                <div className="muted" style={{ marginTop: 8 }}>
                  Blend components are handled with disciplined specification control and custody transfer practices, supporting consistency in downstream blending and delivery.
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: 6 }} />

          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 28, maxWidth: 1040 }}>
            <div style={{ maxWidth: 560 }}>
              <h3 className="h3">Quality and documentation discipline</h3>
              <p className="muted">
                Execution is supported by specification governance, inspection coordination, and documented checks
                aligned with standard industry practice. Clear documentation workflows support operational continuity
                across counterparties and service providers.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 26,
                alignItems: "flex-start",
                width: "100%",
                alignSelf: "flex-start",
              }}
            >
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
                {/*
                  Add this image manually:
                  public/images/crude-breather-2.jpg
                */}
                <img
                  src="/images/crude-breather-2.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div style={{ maxWidth: 520 }}>
                <h3 className="h3">Responsible trade controls</h3>
                <p className="muted">
                  Participation is governed by a risk-based compliance framework, including sanctions and trade
                  controls, counterparty review, and recordkeeping standards aligned with responsible market practice.
                </p>
              </div>
            </div>

            <div style={{ maxWidth: 560 }}>
              <h3 className="h3">Freight and operational coordination</h3>
              <p className="muted">
                Freight, storage, and positioning are coordinated to support delivery reliability. Escalation routes,
                exception management, and role clarity help maintain performance when market conditions change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
