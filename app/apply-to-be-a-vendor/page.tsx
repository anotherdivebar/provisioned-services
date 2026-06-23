import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { VendorApplicationForm } from "@/components/vendor-application-form";

export const metadata: Metadata = {
  title: "Apply to Be a Vendor",
  description:
    "Apply to join the Provisioned vendor network. Tell us about your company, capabilities, coverage area, and qualifications.",
};

export default function ApplyToBeAVendorPage() {
  return (
    <>
      <PageHero
        eyebrow="Vendor Application"
        title="Apply to Be a Vendor."
        description="Tell us about your company, capabilities, coverage area, and qualifications. Our team will review your information and follow up if your services align with current client needs."
      />

      <section className="border-t border-navy-100 bg-[#eef2f7] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <VendorApplicationForm />
        </div>
      </section>
    </>
  );
}
