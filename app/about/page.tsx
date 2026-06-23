import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { CtaBand } from "@/components/cta-band";
import { ProcessTimeline } from "@/components/process-timeline";
import { FeatureList } from "@/components/enterprise/feature-list";
import { OpsModules } from "@/components/enterprise/ops-modules";
import { Button } from "@/components/ui/button";
import { ORGANIZATION_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Provisioned Services coordinates facility maintenance, emergency repairs, rollouts, and vendor support for restaurant, retail, and multi-site operators.",
};

const TRUST_POINTS = [
  "One accountable partner instead of fragmented vendor relationships",
  "Responsive facility support when locations cannot wait",
  "Clear communication that operations teams can act on",
  "Reduced operational disruption in active business environments",
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Facility coordination for operators under pressure"
        description="Provisioned Services supports brands and operators that need facility problems handled quickly, professionally, and with minimal disruption—across maintenance, repairs, installations, rollouts, cooler and freezer work, flooring, rapid response, and vendor coordination."
        primaryCta={{ label: "Request Service", href: "/contact" }}
      />

      <SectionShell tone="light" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="A coordination partner for active commercial environments"
              />
              <p className="prose-enterprise mt-6">
                Provisioned was built for operators who cannot afford extended
                downtime. We support restaurants, retailers, franchise groups, and
                multi-site portfolios with practical facility coordination—from
                emergency repairs to planned rollouts.
              </p>
            </div>
            <div>
              <SectionHeading
                eyebrow="What We Do"
                title="Maintenance, projects, and vendor coordination"
              />
              <p className="prose-enterprise mt-6">
                Our work spans day-to-day maintenance, emergency response, cooler
                and freezer support, flooring, installations, remodels, and
                multi-location programs. We coordinate service partners and maintain
                clear accountability from intake to closeout.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="muted" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Operate"
            title="Disciplined coordination from intake to closeout"
            description="Designed for facilities teams that need work handled without adding chaos."
          />
          <div className="mt-10">
            <OpsModules />
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="white" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="Consistent execution across every request"
          />
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="light" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Why Clients Work With Provisioned"
                title="Relationship-driven support with operational discipline"
              />
              <FeatureList items={TRUST_POINTS} className="mt-6" />
            </div>
            <div>
              <SectionHeading
                eyebrow="Service Partner Philosophy"
                title="Strong outcomes depend on strong vendors"
              />
              <p className="prose-enterprise mt-6">
                Provisioned values service partners who are responsive,
                professional, insured, and committed to quality work. We coordinate
                vendors with clear scopes, respectful communication, and
                long-term partnership in mind.
              </p>
              <Button asChild className="mt-6">
                <Link href="/vendors">Explore the vendor network</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="muted" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Organization"
            title="How we are structured to support clients"
            description="Functional areas focused on operator coordination, project execution, and vendor network management."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ORGANIZATION_AREAS.map((area, index) => (
              <article key={area.title} className="enterprise-card p-6">
                <span className="font-mono text-[11px] font-bold text-amber-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-navy-950">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <CtaBand
        title="Ready to discuss facility support for your locations?"
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />
    </>
  );
}
