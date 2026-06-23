import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Facility support for restaurants, retail, fitness clubs, veterinary clinics, franchise groups, and multi-site commercial operators.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Facility support tailored to your operating environment"
        description="Provisioned supports operators across restaurants, retail, fitness, veterinary, franchise, and multi-site portfolios—with coordination built for active business environments."
        primaryCta={{ label: "Request Service", href: "/contact" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {INDUSTRIES.map((industry) => (
              <article
                key={industry.slug}
                id={industry.slug}
                className="scroll-mt-24 grid gap-10 border-b border-navy-100 pb-20 last:border-b-0 last:pb-0 lg:grid-cols-2"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                    {industry.title}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-navy-950">
                    {industry.description}
                  </h2>
                  <p className="mt-6 leading-relaxed text-steel-600">
                    {industry.howWeHelp}
                  </p>
                  <Button asChild className="mt-6">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>

                <div className="space-y-8">
                  <div className="rounded-xl border border-navy-100 bg-off-white p-6">
                    <h3 className="font-semibold text-navy-950">
                      Common facility pain points
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {industry.painPoints.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm text-steel-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
                    <h3 className="font-semibold text-navy-950">Example services</h3>
                    <ul className="mt-4 space-y-3">
                      {industry.services.map((service) => (
                        <li
                          key={service}
                          className="flex gap-3 text-sm text-steel-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need responsive facility support across your portfolio?"
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
