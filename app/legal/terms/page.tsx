import Link from "next/link";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function TermsOfUsePage() {
  return (
    <main>
      <PageHero title="Terms of Use" variant="simple" />

      <section className="section">
        <div className="container">
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-12">
              <div className="space-y-10">
                <div>
                  <SectionHeader
                    title="Website terms"
                    subtitle="These terms apply to your use of legacyenergies.com and related digital services."
                  />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      By accessing or using this website, you agree to these Terms of Use. If you do not agree, please do not
                      use the site.
                    </p>
                    <p>
                      We may update these terms from time to time. Changes take effect when published on this page. Your continued
                      use of the site after changes are posted indicates acceptance of the updated terms.
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Permitted use" subtitle="Use of the site is permitted for lawful purposes only." />
                  <div className="mt-5 space-y-4 text-muted">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Use the site in a manner consistent with applicable laws and regulations.</li>
                      <li>Do not attempt to gain unauthorized access to systems, data, or accounts.</li>
                      <li>
                        Do not introduce malware, scrape or harvest data at scale, interfere with site availability, or misuse
                        any forms or contact channels.
                      </li>
                      <li>
                        Do not use the site to transmit unlawful, defamatory, or infringing content, or to impersonate others.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Intellectual property" subtitle="Content on this site is protected by applicable laws." />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      Unless stated otherwise, all content on this site (including text, graphics, logos, videos, and layout) is
                      owned by or licensed to Legacy Energies and is protected by intellectual property laws.
                    </p>
                    <p>
                      You may view and print extracts for your own internal business use. You must not modify, reproduce,
                      distribute, or commercially exploit site materials without prior written permission.
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeader title="No offer or advice" subtitle="Information on this site is provided for general purposes." />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      Nothing on this site constitutes an offer, solicitation, recommendation, or advice (including investment,
                      legal, tax, or other professional advice). Any products or services described are subject to applicable
                      laws, internal approvals, and contractual documentation.
                    </p>
                    <p>
                      Reliance on information from this site is at your own risk. You should obtain appropriate professional
                      advice before acting on any information.
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Accuracy and availability" subtitle="We aim to keep information current but do not guarantee it." />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      We strive to keep the site accurate and up to date, but we do not warrant that content is complete,
                      error-free, or suitable for any particular purpose. We may suspend, withdraw, discontinue, or change all or
                      any part of the site without notice.
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Third-party links" subtitle="Links may take you to external sites." />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      Where the site includes links to third-party websites, these are provided for convenience only. We do not
                      control third-party sites and are not responsible for their content, availability, or practices.
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Limitation of liability" subtitle="Liability exclusions apply to the maximum extent permitted." />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      To the maximum extent permitted by applicable law, Legacy Energies and its affiliates will not be liable
                      for any loss or damage arising out of or in connection with your use of, or inability to use, this site.
                      This includes indirect or consequential losses, loss of profits, loss of business, or loss of data.
                    </p>
                    <p>
                      Nothing in these terms limits liability that cannot be excluded under applicable law (for example, liability
                      for death or personal injury caused by negligence, or for fraud).
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Privacy and cookies" subtitle="How we handle personal information and consent." />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      Our processing of personal information is described in our{" "}
                      <Link href="/legal/privacy" className="link">
                        Privacy Policy
                      </Link>{" "}
                      and our use of cookies and similar technologies is described in our{" "}
                      <Link href="/legal/cookies" className="link">
                        Cookie Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Governing law" subtitle="Which law applies to these terms." />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      These terms are governed by the laws of the State of New York, United States, without regard to conflict of
                      laws rules. Where mandatory local consumer protection laws apply, those laws may provide additional rights.
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Contact" subtitle="How to reach us about these terms." />
                  <div className="mt-5 space-y-4 text-muted">
                    <p>
                      If you have questions about these Terms of Use, please reach out via our{" "}
                      <Link href="/contact" className="ctaLink inline-flex items-center">
                        <span className="ctaLinkText font-semibold">Contact page</span>
                        <span className="ctaLinkLine" aria-hidden="true" />
                      </Link>
                      .
                    </p>
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
