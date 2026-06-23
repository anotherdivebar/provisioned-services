import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { CtaBand } from "@/components/cta-band";
import { ServiceGroups } from "@/components/enterprise/service-groups";
import { Button } from "@/components/ui/button";
import { TRADE_CARDS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Facility maintenance, emergency repairs, cooler and freezer work, flooring, rollouts, vendor coordination, and project management for multi-site operators.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Facility support and project coordination for multi-site operators"
        description="From day-to-day maintenance to emergency response, rollouts, and vendor coordination—Provisioned delivers responsive facility support with clear scope and accountable closeout."
        primaryCta={{ label: "Request Service", href: "/contact" }}
      />

      <SectionShell tone="light" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Catalog"
            title="Grouped by operational need"
            description="Services organized by how operators typically plan, prioritize, and execute facility work."
          />
          <div className="mt-12">
            <ServiceGroups />
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="muted" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trades & Capabilities"
            title="Coordinated service disciplines"
            description="Provisioned coordinates qualified service partners across the trades operators rely on."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TRADE_CARDS.map((trade) => (
              <div
                key={trade}
                className="enterprise-card px-4 py-3.5 text-sm font-medium text-navy-900 transition-colors hover:border-amber-300/60"
              >
                {trade}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="white" className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            title="Discuss your next facility project"
            description="Share your locations, urgency, and scope. We will follow up to determine fit and coverage."
          />
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Request Service</Link>
          </Button>
        </div>
      </SectionShell>

      <CtaBand
        title="Qualified vendors strengthen every outcome."
        description="If you are a licensed, insured service provider, apply to join the Provisioned network."
        primaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />
    </>
  );
}
