import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function Businesses(){
  return (
    <main>
      <PageHero
        kicker="Trading and Supply"
        title="Trading and Supply"
        subtitle="A majors-style structure: Crude Oil and Feedstocks, Refined Products, Gas, and Logistics."
        backgroundVideo="/hero-trading.mp4"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            kicker="Portfolio"
            title="Global solutions, transaction-led"
            subtitle="Each business line page uses professional sector language and avoids retail-style phrasing."
          />

          <div className="grid-4">
            <Link href="/trading-supply/crude-oil-feedstocks" className="card">
<h3 className="h3" style={{ marginTop: 8 }}>Crude Oil and Feedstocks</h3>
              <div className="muted" style={{ marginTop: 8 }}>Crude oil, condensates, and refinery feedstocks.</div>
            </Link>
            <Link href="/trading-supply/refined-products" className="card">
<h3 className="h3" style={{ marginTop: 8 }}>Refined Products</h3>
              <div className="muted" style={{ marginTop: 8 }}>Gasoline, Diesel/Gasoil, aviation, and fuel oils.</div>
            </Link>
            <Link href="/gas/products" className="card">
<h3 className="h3" style={{ marginTop: 8 }}>Gas</h3>
              <div className="muted" style={{ marginTop: 8 }}>LPG, Natural gas, and LNG across relevant markets.</div>
            </Link>
            <Link href="/trading-supply/infrastructure-logistics" className="card">
<h3 className="h3" style={{ marginTop: 8 }}>Logistics</h3>
              <div className="muted" style={{ marginTop: 8 }}>Storage, blending, shipping, and delivery governance.</div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
