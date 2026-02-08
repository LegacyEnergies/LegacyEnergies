import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function Careers(){
  return (
    <main>
      <PageHero
        title="Careers"
        backgroundVideo="/hero-newsroom.mp4"
        backgroundImage="stock"
        videoObjectPosition="50% 12%"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            title="A professional operating environment"
            subtitle="We hire for roles that support disciplined execution in physical markets. We value integrity, collaboration, and clear documentation."
          />

          {/* Breather image (add to /public). */}
          <div
            className="grid-2"
            style={{
              marginTop: 26,
              alignItems: "center",
              gap: 22,
              maxWidth: 1100,
            }}
          >
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 18px 45px rgba(10, 20, 30, 0.10)",
              }}
            >
              <img
                src="/careers-breather-1.jpg"
                alt="Operations and engineering"
                style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }}
              />
            </div>
            <div>
              <h3 className="h3">Execution led culture</h3>
              <div className="muted" style={{ marginTop: 10, lineHeight: 1.7 }}>
                We operate in environments where safety, discipline, and clarity matter. Teams are expected to communicate precisely, document decisions,
                and collaborate with operators, service providers, and counterparties to deliver consistent outcomes.
              </div>
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: 28, alignItems: "start" }}>
            <div>
              <h3 className="h3">How we hire</h3>
              <div className="muted" style={{ marginTop: 10, lineHeight: 1.7 }}>
                Our hiring process is designed to be practical and consistent. We screen for role fit, relevant experience, and judgment under operational constraints.
                Final stages may include a case discussion, process review, or role specific technical conversation.
              </div>
              <ul style={{ marginTop: 14, paddingLeft: 18, lineHeight: 1.8, color: "var(--muted)" }}>
                <li>Application review and initial conversation.</li>
                <li>Role interview, including execution and risk scenarios.</li>
                <li>Reference checks and onboarding requirements.</li>
              </ul>
            </div>

            <div>
              <h3 className="h3">Locations and ways of working</h3>
              <div className="muted" style={{ marginTop: 10, lineHeight: 1.7 }}>
                Roles may be based in our core operating locations, with travel required for commercial, operational, or partner interfaces.
                We publish location expectations and working arrangements per role.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader
            title="Professional standards"
            subtitle="We operate with a safety minded culture and documented controls. Expectations include careful handling of sensitive information, compliance with applicable rules, and respect for counterparties and service providers."
          />

          <div
            className="grid-2"
            style={{
              marginTop: 18,
              marginBottom: 10,
              alignItems: "center",
              gap: 22,
              maxWidth: 1100,
            }}
          >
            <div style={{ maxWidth: 520 }}>
              <div className="h3">How we hire</div>
              <div className="muted" style={{ marginTop: 10, lineHeight: 1.75 }}>
                We look for people who can operate with clarity under real-world constraints. The process typically includes an initial conversation,
                a role-relevant discussion with the hiring team, and reference or compliance checks where appropriate.
              </div>
              <div className="muted" style={{ marginTop: 10, lineHeight: 1.75 }}>
                We do not request payment at any stage of recruitment. If you receive a suspicious message claiming to represent Legacy, please contact us
                through official channels.
              </div>
            </div>
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 18px 60px rgba(2,6,23,0.10)",
              }}
            >
              <img
                src="/careers-breather-2.jpg"
                alt="Operations and field work"
                style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: 26,
              borderRadius: 28,
              padding: "26px 26px",
              background: "#ffffff",
              boxShadow: "0 18px 60px rgba(2,6,23,0.08)",
              border: "1px solid rgba(2,6,23,0.06)",
            }}
          >
                        <div className="h2" style={{ marginTop: 6 }}>Roles and enquiries</div>
            <div className="muted" style={{ marginTop: 10, lineHeight: 1.75, maxWidth: 820 }}>
              Openings are published as they become available. When roles are open, we publish a formal description, required qualifications, and an application path.
            </div>

            <div className="grid-2" style={{ marginTop: 18, gap: 22 }}>
              <div>
                <div className="h3">Open roles</div>
                <div className="muted" style={{ marginTop: 8, lineHeight: 1.75 }}>
                  Openings are listed with role scope, location, and application instructions. Where relevant, we include expected travel, shift patterns, and
                  required certifications.
                </div>
              </div>
              <div>
                <div className="h3">General availability</div>
                <div className="muted" style={{ marginTop: 8, lineHeight: 1.75 }}>
                  For general applications, please share a short summary and attach a CV. We review submissions periodically and respond when there is an
                  alignment with published or upcoming requirements.
                  <div style={{ marginTop: 12 }}>
                    <a className="activity-cta" href="/contact#general-applications">
                      Contact
                      <span className="activity-cta-line" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
