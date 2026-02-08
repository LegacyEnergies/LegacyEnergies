import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Environmental, Social and Governance | Legacy Energies",
  description:
    "Environmental, social, and governance (ESG) overview.",
};

export default function ESGPage() {
  return (
    <main>
      <PageHero
        eyebrow="ESG"
        title="Environmental, Social and Governance"
        videoSrc="/hero-esg.mp4"
      />

      <section className="section pt-0">
        <div className="container">
          <p className="max-w-3xl text-lg text-muted-foreground">
            We take a practical approach to ESG, focused on safe operations, responsible
            participation, and fit-for-purpose governance across activities and counterparties.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                title="Execution-led, risk-aware"
                subtitle="We apply fit-for-purpose standards to support safe operations, responsible participation, and reliable delivery across the value chain."
              />

              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Our approach is grounded in clear accountability, documented procedures, and practical controls
                  aligned with the realities of physical logistics. We focus on prevention, readiness, and
                  consistent decision-making, across planning, execution, and incident learning.
                </p>
                <p>
                  ESG is not a standalone program. It is embedded in how we assess activity, select partners,
                  manage interfaces, and operate within applicable laws and terminal, port, and pipeline rules.
                </p>
              </div>


            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card p-6">
                  <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                    SAFETY
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">Safety-first operating mindset</h3>
                  <p className="mt-3 text-muted-foreground">
                    Hazard awareness, interface management, and emergency readiness support consistent
                    execution across storage, transport, and delivery points.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                    ENVIRONMENT
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">Responsible handling standards</h3>
                  <p className="mt-3 text-muted-foreground">
                    Controls for containment, spill prevention, waste handling, and contractor coordination
                    help reduce operational risk and support compliant performance.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                    PEOPLE
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">Capability and culture</h3>
                  <p className="mt-3 text-muted-foreground">
                    Clear roles, training expectations, and escalation pathways reinforce disciplined
                    execution and continuous improvement.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                    GOVERNANCE
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">Documented controls</h3>
                  <p className="mt-3 text-muted-foreground">
                    We apply counterparty due diligence, sanctions and AML screening, approvals, and
                    records that support consistent decisions across market conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="max-w-xl">
                <SectionHeader
                  title="How ESG is applied"
                  subtitle="A practical framework that supports planning, execution, and assurance across activities."
                />

                <ol className="mt-6 space-y-4 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Risk identification.</span> We assess
                    operational interfaces, logistics constraints, and regulatory considerations.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Controls and procedures.</span> We define
                    fit-for-purpose documentation, approvals, and escalation paths.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Oversight and monitoring.</span> We track
                    execution against agreed terms, rules, and safety requirements.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Incident learning.</span> When issues
                    occur, we document, review, and implement corrective actions.
                  </li>
                </ol>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl shadow-soft h-[100px] md:h-[120px]">
                <Image
                  src="/images/governance-breather-2.jpg"
                  alt="Operational oversight"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                title="Policy and reporting"
                subtitle="Governance-aligned policies and practical guidance, published and maintained as our operating footprint evolves."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4">
                <div className="card p-6">
                  <h3 className="text-base font-semibold">Sustainability updates</h3>
                  <p className="mt-2 text-muted-foreground">
                    Disclosures and updates will be published through the newsroom as applicable.
                  </p>
                  <div className="mt-4">
                    <Link className="ctaLink" href="/newsroom">
                      <span className="ctaLinkText">Go to newsroom</span>
                      <span className="ctaLinkLine" aria-hidden="true" />
                    </Link>
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
