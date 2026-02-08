import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function GasProducts() {
  return (
    <main>
      <PageHero
        title="Gas products"
        backgroundVideo="/hero-gas.mp4"
      />

      {/* LPG and pipeline gas participation (mirrors /gas) */}
      <section className="section light-alt" style={{ position: "relative" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <SectionHeader
            title="LPG and pipeline gas participation"
            subtitle="We participate in LPG and pipeline natural gas markets with a safety-first operating mindset, supported by clear procedures, responsible handling standards, and disciplined controls across storage, transport interfaces, and contractual delivery points."
          />

          {/* Zig-zag layout (no card borders/background) */}
          <div className="grid grid-2-eq" style={{ marginTop: 22, alignItems: 'start' }}>
            {/* Row 1: LPG (left) */}
            <div style={{ padding: 4 }}>
              <h3 style={{ margin: 0, fontSize: 20, letterSpacing: '-0.02em' }}>LPG</h3>
	            <p className="muted" style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6, maxWidth: 520 }}>
                Physical participation across propane, butane, and related blends, supported by structured logistics and clear delivery terms.
              </p>
            </div>

            {/* Empty (keeps zig-zag on desktop; collapses naturally on mobile) */}
            <div aria-hidden="true" />

            {/* Row 2: Breather (left) + Pipeline (right) */}
            <div style={{ padding: 4 }}>
              <div
                style={{
                  borderRadius: 22,
                  overflow: 'hidden',
                  boxShadow: '0 18px 48px rgba(11, 22, 44, 0.10)',
                  background: '#0b162c',
                }}
              >
                <img
                  src="/gas-products-breather.jpg"
                  alt=""
                  style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            <div style={{ padding: 4 }}>
              <h3 style={{ margin: 0, fontSize: 20, letterSpacing: '-0.02em' }}>Pipeline natural gas</h3>
	            <p className="muted" style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6, maxWidth: 520 }}>
                Pipeline-delivered natural gas participation aligned with nominated volumes, contractual delivery points, and market fundamentals.
              </p>
            </div>

            {/* Row 3: Controls (left) */}
            <div style={{ padding: 4 }}>
              <h3 style={{ margin: 0, fontSize: 20, letterSpacing: '-0.02em' }}>Controls and governance</h3>
	            <p className="muted" style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6, maxWidth: 520 }}>
                Participation is governed through defined mandates, risk limits, and documented approvals to support consistency across market conditions.
              </p>
            </div>

            {/* Empty */}
            <div aria-hidden="true" />
          </div>
        </div>
      </section>
    </main>
  );
}
