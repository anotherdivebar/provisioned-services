import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { CtaBand } from "@/components/cta-band";
import { VendorCTA } from "@/components/vendor-cta";
import { FeatureList } from "@/components/enterprise/feature-list";
import { Button } from "@/components/ui/button";
import { VENDOR_BENEFITS, VENDOR_TRADES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vendors",
  description:
    "Join the Provisioned vendor network. Professional service providers supporting restaurants, retailers, and multi-site operators.",
};

const WHO_SHOULD_APPLY = [
  "Licensed and insured trades serving commercial clients",
  "Teams comfortable working in active business environments",
  "Vendors with restaurant, retail, or multi-site experience",
  "Service providers who value clear scopes and responsive communication",
] as const;

const EXPECTATIONS = [
  "Reliable response times and professional on-site conduct",
  "Appropriate licensing and insurance where required",
  "Quality workmanship aligned to scope and client standards",
  "Respect for operating schedules and site constraints",
] as const;

const QUALIFICATIONS = [
  "Valid business registration and contact information",
  "Insurance and licensing appropriate to your trade and service area",
  "Ability to provide references and documentation when requested",
  "Willingness to work within Provisioned quality and communication standards",
] as const;

export default function VendorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Vendor Network"
        title="Join the Provisioned vendor network"
        description="Provisioned works with responsive, insured, professional service providers to support restaurants, retailers, and multi-site operators. If your team is committed to quality work, we want to learn about your capabilities."
        primaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />

      <SectionShell tone="light" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Who Should Apply"
                title="Professional service providers ready to partner"
              />
              <FeatureList items={WHO_SHOULD_APPLY} className="mt-6" />
            </div>
            <div>
              <SectionHeading
                eyebrow="What We Expect"
                title="Quality, responsiveness, and professionalism"
              />
              <FeatureList items={EXPECTATIONS} className="mt-6" />
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="muted" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Partner Benefits"
            title="What vendors can expect from Provisioned"
            description="A coordination model designed to respect supplier partners and support quality execution."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {VENDOR_BENEFITS.map((benefit, index) => (
              <article key={benefit.title} className="enterprise-card p-6">
                <span className="font-mono text-[11px] font-bold text-amber-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-semibold text-navy-950">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="white" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Qualifications"
                title="Baseline requirements"
              />
              <FeatureList items={QUALIFICATIONS} className="mt-6" />
              <Button asChild size="lg" className="mt-8">
                <Link href="/apply-to-be-a-vendor">Start application</Link>
              </Button>
            </div>
            <div>
              <SectionHeading
                eyebrow="Service Categories"
                title="Trades needed across the network"
                description="Select all applicable trades when you apply. Review is based on current client needs and coverage."
              />
              <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
                {VENDOR_TRADES.map((trade) => (
                  <div
                    key={trade}
                    className="enterprise-card px-4 py-3 text-sm font-medium text-navy-900"
                  >
                    {trade}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <VendorCTA />

      <CtaBand
        title="Ready to apply?"
        description="Complete the vendor application with your company details, capabilities, and coverage area."
        primaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />
    </>
  );
}
