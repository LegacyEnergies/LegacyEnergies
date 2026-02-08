import Link from "next/link";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        title="Privacy Policy"
        variant="simple"
      />

      <section className="section">
        <div className="container">
          <div className="max-w-3xl" />

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <div className="space-y-10">
                <div>
                  <SectionHeader
                    title="Introduction and organizational information"
                    subtitle="We process personal information to operate our website, respond to enquiries, and support our services."
                  />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      We, at Legacy Energies, are dedicated to serving our customers and contacts to the best of our abilities.
                      Part of our commitment involves the responsible management of personal information collected through our
                      website legacyenergies.com and any related interactions.
                    </p>
                    <p className="font-medium text-foreground">Our primary goals in processing this information include:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Enhancing the user experience by understanding user needs and preferences.</li>
                      <li>Providing timely support and responding to enquiries or service requests.</li>
                      <li>Improving our products and services to meet evolving demands.</li>
                      <li>Conducting necessary business operations, such as billing and account management.</li>
                    </ul>
                    <p>
                      It is our policy to process personal information with respect for privacy and security. We follow relevant
                      regulations and guidelines to protect data against unauthorized access, disclosure, alteration, and destruction.
                    </p>
                    <p>
                      We do not have a designated Data Protection Officer (DPO), but we remain committed to addressing privacy
                      concerns. If you have questions about how we manage personal information, please use our{" "}
                      <Link href="/contact" className="link">
                        contact form
                      </Link>
                      .
                    </p>
                    <p>
                      This commitment extends to third-party services that may process personal information on our behalf (for example,
                      when sending invoices). Where applicable, such activities are conducted in compliance with applicable privacy laws.
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Scope and application" subtitle="Who this policy applies to." />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      This policy is designed to protect the personal information of our stakeholders, including website visitors,
                      registered users, and customers. Whether you are browsing legacyenergies.com, using our services as a registered
                      user, or engaging with us as a customer, we process your personal data with appropriate privacy and security
                      safeguards.
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Data storage and protection" subtitle="Where data is stored and how it is protected." />
                  <div className="mt-5 space-y-8 text-muted">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">Data storage</h3>
                      <p className="mt-2">
                        Personal information is stored on secure servers. For services that require international data transfer, we
                        aim to ensure transfers comply with applicable laws and maintain protection standards equivalent to those in
                        our primary location.
                      </p>
                      <p className="mt-2">
                        <span className="font-medium text-foreground">Data hosting partners:</span> We partner with reputable hosting
                        providers and select partners based on adherence to appropriate security and data protection standards.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground">Data protection measures</h3>
                      <ul className="mt-2 list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium text-foreground">Security audits and monitoring:</span> Regular security reviews
                          are conducted to identify and remediate potential vulnerabilities. We monitor for unusual activity to help
                          prevent unauthorized access.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground">Data processing agreements</h3>
                      <p className="mt-2">
                        When we share data with third-party service providers, we do so under Data Processing Agreements (DPAs) where
                        appropriate. These agreements require suitable technical and organizational measures to help protect your data.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground">Transparency and control</h3>
                      <p className="mt-2">
                        We aim to be transparent and provide you with control over your personal information. Where applicable, you
                        will be informed about material changes to our sharing practices and, where required, you may be asked for
                        consent.
                      </p>
                      <p className="mt-2">For queries about how we share and disclose personal information, please contact us.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <SectionHeader title="User rights and choices" subtitle="How to exercise your privacy rights." />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      We recognize and respect your rights regarding personal information in accordance with the General Data
                      Protection Regulation (GDPR) and other applicable data protection laws.
                    </p>
                    <div>
                      <p className="font-medium text-foreground">Your rights may include:</p>
                      <ul className="mt-2 list-disc pl-5 space-y-2">
                        <li>Right of access (Art. 15 GDPR).</li>
                        <li>Right to rectification (Art. 16 GDPR).</li>
                        <li>Right to erasure (Art. 17 GDPR).</li>
                        <li>Right to restriction of processing (Art. 18 GDPR).</li>
                        <li>Right to data portability (Art. 20 GDPR).</li>
                        <li>Right to object (Art. 21 GDPR).</li>
                        <li>Right to withdraw consent (Art. 7(3) GDPR), where processing is based on consent.</li>
                        <li>Right to lodge a complaint (Art. 77 GDPR).</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Exercising your rights</p>
                      <p className="mt-2">
                        To exercise these rights, please contact us. We may need to verify your identity to protect your information.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Cookies and tracking technologies" subtitle="How we use cookies and how you can manage preferences." />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      We use cookies and similar technologies to support website functionality, enhance user experience, and understand
                      how our site is used.
                    </p>
                    <p className="font-medium text-foreground">How we use these technologies</p>
                    <ul className="mt-2 list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium text-foreground">Essential cookies:</span> Necessary for core functionality such
                        as security.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Performance and analytics cookies:</span> Help us understand how
                        visitors use the site.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Functional cookies:</span> Support enhanced functionality and
                        personalization.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Advertising and targeting cookies:</span> Used to deliver more
                        relevant advertising and measure effectiveness.
                      </li>
                    </ul>
                    <p>
                      On your first visit, a cookie consent banner provides options to accept all cookies, reject non-essential cookies,
                      or customize preferences.
                    </p>
                    <p>
                      For more detail, see our{" "}
                      <Link href="/legal/cookies" className="link">
                        Cookie Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Compliance with United States privacy laws" subtitle="Additional rights for U.S. residents." />
                  <div className="mt-5 space-y-6 text-muted">
                    <div>
                      <p>
                        To appeal a decision we may make regarding your request, contact us within 60 days of receiving our response.
                        Include your original request, the date of our response, and a brief explanation of why you believe the decision
                        was incorrect.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-foreground">Additional rights may include:</p>
                      <ul className="mt-2 list-disc pl-5 space-y-2">
                        <li>Right to know what personal information is collected, used, shared, or sold, and why.</li>
                        <li>Right to delete personal information.</li>
                        <li>Right to correct inaccurate personal information.</li>
                        <li>Right to limit the use of sensitive personal information for limited purposes.</li>
                        <li>Right to opt-out of the sale or sharing of personal information.</li>
                        <li>Right to non-discrimination for exercising privacy rights.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-foreground">Sensitive or biometric data</p>
                      <p className="mt-2">
                        We process sensitive personal data only with prior consent and for purposes disclosed at the time of collection.
                        You may withdraw consent at any time by contacting us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="card p-6">
                <p className="text-sm font-semibold text-foreground">Contact</p>
                <p className="mt-2 text-sm text-muted">
                  For privacy enquiries, <Link className="link" href="/contact">contact us</Link>.
                </p>
                <div className="mt-6 text-sm text-muted">
                  <p className="font-semibold text-foreground">Related</p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <Link className="link" href="/legal/cookies">
                        Cookie Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href="/legal/terms">
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
