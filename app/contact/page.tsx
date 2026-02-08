import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/lib/site";

export default function Contact(){
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Contact"
        subtitle="Route inquiries by function. Avoid collecting sensitive information via the website."
        backgroundImage="stock"
      />

      {/* Anchor target used from the Careers page (general availability) */}
      <section className="section alt" id="general-applications">
        <div className="container">
          <SectionHeader
            kicker="Inquiries"
            title="Contact routing"
            subtitle="A majors-style contact page: clear routing, minimal friction, and compliance-friendly form language."
          />

          <div className="grid-2">
            <div className="card">
              <div className="tag">Email</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Trading</h3>
              <div className="muted" style={{ marginTop: 8 }}>{site.emails.trading}</div>
              <div className="hr" style={{ background: "rgba(15,23,42,0.10)" }} />
              <h3 className="h3">General</h3>
              <div className="muted" style={{ marginTop: 8 }}>{site.emails.general}</div>
              <div style={{ marginTop: 14, fontSize: 12, color: "rgba(12,27,54,0.66)" }}>
                Headquarters: {site.headquarters}
              </div>
            </div>

            <div className="card">
              <div className="tag">Form</div>
              <h3 className="h3" style={{ marginTop: 8 }}>Website inquiry</h3>
              <div className="muted" style={{ marginTop: 8 }}>
                This form is a static page. Connect it to your preferred backend (or a secure CRM) when deploying.
              </div>

              <form
                style={{ display:"grid", gap: 10, marginTop: 14 }}
                action="#"
                method="post"
              >
                <label style={{ fontSize: 11, letterSpacing: "0.16em", textTransform:"uppercase", color:"rgba(12,27,54,0.70)" }}>
                  Name
                  <input required style={{ width:"100%", marginTop: 6, padding: 10, borderRadius: 12, border:"1px solid rgba(15,23,42,0.18)" }} />
                </label>
                <label style={{ fontSize: 11, letterSpacing: "0.16em", textTransform:"uppercase", color:"rgba(12,27,54,0.70)" }}>
                  Company
                  <input style={{ width:"100%", marginTop: 6, padding: 10, borderRadius: 12, border:"1px solid rgba(15,23,42,0.18)" }} />
                </label>
                <label style={{ fontSize: 11, letterSpacing: "0.16em", textTransform:"uppercase", color:"rgba(12,27,54,0.70)" }}>
                  Email
                  <input type="email" required style={{ width:"100%", marginTop: 6, padding: 10, borderRadius: 12, border:"1px solid rgba(15,23,42,0.18)" }} />
                </label>
                <label style={{ fontSize: 11, letterSpacing: "0.16em", textTransform:"uppercase", color:"rgba(12,27,54,0.70)" }}>
                  Message
                  <textarea required rows={5} style={{ width:"100%", marginTop: 6, padding: 10, borderRadius: 12, border:"1px solid rgba(15,23,42,0.18)" }} />
                </label>

                <div style={{ fontSize: 12, color: "rgba(12,27,54,0.66)" }}>
                  Please do not submit confidential, price-sensitive, or personal financial information via this form.
                </div>

                <button className="btn primary" type="submit" style={{ justifyContent:"center" }}>
                  Submit <span aria-hidden>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
