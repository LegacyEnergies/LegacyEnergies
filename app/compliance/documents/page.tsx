import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Download } from "lucide-react";

type PolicyDoc = {
  title: string;
  description: string;
  fileName: string; // expected to be placed under /public/
};

const POLICY_DOCS: PolicyDoc[] = [
  {
    title: "Anti-slavery and anti human trafficking policy",
    description:
      "Standards on modern slavery risks, due diligence expectations, and escalation requirements.",
    fileName: "LE-_Anti Slavery Anti Human Trafficking Policy jan26.pdf",
  },
  {
    title: "Anti-bribery and corruption policy",
    description:
      "Requirements for gifts and hospitality, interactions with officials, and third-party conduct.",
    fileName: "LE-_Anti-Bribery & Corruption Policy.pdf",
  },
  {
    title: "Code of conduct",
    description:
      "Expectations for ethical behaviour, conflicts of interest, and raising concerns.",
    fileName: "LE-_COC Policy-Employees 26.pdf",
  },
  {
    title: "Code of business ethics",
    description:
      "Principles and governance for responsible conduct, compliance, and decision-making.",
    fileName: "LE-_CodeofBusinessEthicsPolicy2026.pdf",
  },
  {
    title: "Conflicts of interest policy",
    description:
      "Identification, disclosure and management of conflicts across business relationships.",
    fileName: "LE-_ConflictofInterestPolicy26.pdf",
  },
  {
    title: "Third-party due diligence policy",
    description:
      "Risk-based onboarding and screening requirements for third parties.",
    fileName: "LE-_DDPolicy2026jan5.docx.pdf",
  },
  {
    title: "Diversity policy",
    description:
      "Commitments to fair treatment, inclusion, and respectful workplace practices.",
    fileName: "LE-_Diversity Policy.pdf",
  },
  {
    title: "Human rights policy",
    description:
      "Commitments to human rights, expectations for partners, and remediation processes.",
    fileName: "LE-_HumanRightsPolicy26.pdf",
  },
  {
    title: "International sanctions policy",
    description:
      "Sanctions compliance standards, screening expectations, and escalation requirements.",
    fileName: "LE-_Intlsanctionspolicysept26.pdf",
  },
  {
    title: "Labour laws policy",
    description:
      "Commitments and standards aligned to employment and labour law requirements.",
    fileName: "LE-_Labor Laws Policy202jan5 .pdf",
  },
  {
    title: "Whistleblowing policy",
    description:
      "Speak up reporting standards, confidentiality and non-retaliation protections.",
    fileName: "LE-_Whistleblowing Policy.pdf",
  },
];

export default function ComplianceDocuments() {
  return (
    <main>
      <PageHero
        title="Document center"
        description="Policies and guidance supporting the Ethics and Compliance framework."
        videoSrc="/hero-home-2.mp4"
        align="left"
        size="md"
      />

      {/* Spacing: keep the back link comfortably separated from the hero, and keep the last card clear of the footer */}
      <section
        className="relative"
        // Inline spacing (in addition to classes) so spacing cannot be lost due to styling overrides.
        style={{ paddingTop: "120px", paddingBottom: "220px" }}
      >
        <div className="container mx-auto px-6">
          {/* Back link */}
          <div className="flex items-center gap-4">
            <Link
              href="/compliance"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
            >
              <span
                style={{ color: "var(--gold)" }}
                aria-hidden="true"
              >
                ←
              </span>
              <span className="group-hover:underline group-hover:underline-offset-4">
                Back to Compliance
              </span>
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:gap-6">
            {POLICY_DOCS.map((doc) => {
              // PDFs are expected to be placed under /public/policies
              const href = `/policies/${encodeURIComponent(doc.fileName)}`;
              return (
                <div
                  key={doc.fileName}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">{doc.title}</h2>
                      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                        {doc.description}
                      </p>
                      <p className="mt-3 text-xs text-slate-500">
                        File: <span className="font-mono">{doc.fileName}</span>
                      </p>
                    </div>

                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                    >
                      <span>Download</span>
                      <Download className="h-4 w-4" color="var(--gold)" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Extra breathing room before the footer */}
          <div aria-hidden="true" className="h-16 sm:h-20" />
        </div>
      </section>
    </main>
  );
}
