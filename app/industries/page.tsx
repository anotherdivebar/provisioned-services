import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { CtaBand } from "@/components/cta-band";
import { FeatureList } from "@/components/enterprise/feature-list";
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
        title="Facility support aligned to your operating environment"
        description="Provisioned supports operators across restaurants, retail, fitness, veterinary, franchise, and multi-site portfolios—with coordination built for active business environments."
        primaryCta={{ label: "Request Service", href: "/contact" }}
      />

      <SectionShell tone="light" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {INDUSTRIES.map((industry, index) => (
              <article
                key={industry.slug}
                id={industry.slug}
                className="scroll-mt-24 grid gap-8 border-b border-navy-100 pb-16 last:border-b-0 last:pb-0 lg:grid-cols-2 lg:gap-12"
              >
                <div>
                  <p className="font-mono text-[11px] font-bold text-amber-600">
                    {String(index + 1).padStart(2, "0")} · {industry.title}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-snug text-navy-950 sm:text-3xl">
                    {industry.description}
                  </h2>
                  <p className="prose-enterprise mt-5">{industry.howWeHelp}</p>
                  <Button asChild className="mt-6">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>

                <div className="grid gap-5">
                  <div className="enterprise-card bg-off-white p-6">
                    <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-navy-950">
                      Common pain points
                    </h3>
                    <FeatureList items={industry.painPoints} className="mt-4" />
                  </div>

                  <div className="enterprise-card p-6">
                    <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-navy-950">
                      Example services
                    </h3>
                    <FeatureList items={industry.services} className="mt-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <CtaBand
        title="Need responsive facility support across your portfolio?"
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
