import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { VENDOR_TRADES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vendors",
  description:
    "Join the Provisioned vendor network. Reliable service providers supporting restaurants, retailers, and multi-site operators.",
};

export default function VendorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Vendor Network"
        title="Join the Provisioned Vendor Network."
        description="Provisioned works with reliable service providers to support restaurants, retailers, and multi-site operators. If your team is responsive, professional, insured, and committed to quality work, we'd like to learn more about your capabilities."
        primaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Who Should Apply" title="Professional service providers ready to partner" />
              <ul className="mt-6 space-y-4">
                {[
                  "Licensed and insured trades serving commercial clients",
                  "Teams comfortable working in active business environments",
                  "Vendors with restaurant, retail, or multi-site experience",
                  "Service providers who value clear scopes and responsive communication",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-steel-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading eyebrow="What Provisioned Expects" title="Quality, responsiveness, and professionalism" />
              <ul className="mt-6 space-y-4">
                {[
                  "Reliable response times and professional on-site conduct",
                  "Appropriate licensing and insurance where required",
                  "Quality workmanship aligned to scope and client standards",
                  "Respect for operating schedules and site constraints",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-steel-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-off-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="What Vendors Can Expect"
                title="Professional coordination and partnership respect"
              />
              <ul className="mt-6 space-y-4">
                {[
                  "Clear scopes and organized project communication",
                  "Reliable client opportunities aligned to your capabilities",
                  "Long-term partnership potential with an growing operator base",
                  "Respect for supplier partners and quality standards",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-steel-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading eyebrow="Required Qualifications" title="Baseline requirements" />
              <ul className="mt-6 space-y-4">
                {[
                  "Valid business registration and contact information",
                  "Insurance and licensing appropriate to your trade and service area",
                  "Ability to provide references and documentation when requested",
                  "Willingness to work within Provisioned quality and communication standards",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-steel-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Categories"
            title="Trades and services needed across the network"
            description="Select all applicable trades when you apply. Provisioned reviews applications based on current client needs and coverage areas."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VENDOR_TRADES.map((trade) => (
              <div
                key={trade}
                className="rounded-lg border border-navy-100 bg-white px-4 py-3 text-sm font-medium text-navy-900 shadow-sm"
              >
                {trade}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/apply-to-be-a-vendor">Apply to Be a Vendor</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to join the Provisioned vendor network?"
        description="Submit your application and tell us about your company, capabilities, and coverage area."
        primaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />
    </>
  );
}
