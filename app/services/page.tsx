import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { SERVICES, TRADE_CARDS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Facility maintenance, emergency repairs, cooler/freezer work, flooring, rollouts, remodels, vendor coordination, and project management for multi-site operators.",
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

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Services"
            title="Maintenance, projects, and coordination"
            description="Detailed support across the facility work operators rely on to keep locations open and operational."
          />
          <div className="mt-12 space-y-8">
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 rounded-xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-xl font-bold text-navy-950">{service.title}</h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-steel-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-off-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trades & Capabilities"
            title="Service and trade coordination"
            description="Provisioned coordinates qualified service partners across the trades and facility disciplines operators need."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRADE_CARDS.map((trade) => (
              <div
                key={trade}
                className="rounded-lg border border-navy-100 bg-white px-4 py-3 text-sm font-medium text-navy-900 shadow-sm transition-colors hover:border-amber-200"
              >
                {trade}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            title="Need a partner for your next facility project?"
            description="Tell us about your locations, urgency, and scope. We will follow up to discuss how Provisioned can support your operation."
          />
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Request Service</Link>
          </Button>
        </div>
      </section>

      <CtaBand
        title="Reliable service partners make reliable outcomes."
        description="If you are a qualified vendor or subcontractor, apply to join the Provisioned network."
        primaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />
    </>
  );
}
