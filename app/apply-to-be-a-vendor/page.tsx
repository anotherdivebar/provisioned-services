import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { VendorApplicationForm } from "@/components/vendor-application-form";
import { SectionShell } from "@/components/section-shell";
import { FeatureList } from "@/components/enterprise/feature-list";

export const metadata: Metadata = {
  title: "Apply to Be a Vendor",
  description:
    "Apply to join the Provisioned vendor network. Share your company details, capabilities, coverage area, and qualifications.",
};

const APPLICATION_NOTES = [
  "Applications are reviewed based on current client needs and coverage",
  "Submitting does not guarantee work or network acceptance",
  "Have insurance, licensing, and reference details ready where applicable",
] as const;

export default function ApplyToBeAVendorPage() {
  return (
    <>
      <PageHero
        eyebrow="Vendor Application"
        title="Apply to be a vendor"
        description="Tell us about your company, capabilities, coverage area, and qualifications. Our team reviews each submission and follows up when your services align with current client needs."
      />

      <SectionShell tone="muted" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 enterprise-card p-6 sm:p-8">
            <h2 className="text-lg font-bold text-navy-950">Before you begin</h2>
            <FeatureList items={APPLICATION_NOTES} className="mt-4" />
          </div>
          <VendorApplicationForm />
        </div>
      </SectionShell>
    </>
  );
}
