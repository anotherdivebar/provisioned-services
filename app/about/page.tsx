import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { CtaBand } from "@/components/cta-band";
import { ProcessTimeline } from "@/components/process-timeline";
import { FeatureList } from "@/components/enterprise/feature-list";
import { OpsModules } from "@/components/enterprise/ops-modules";
import { Button } from "@/components/ui/button";
import { ORGANIZATION_AREAS, SITE } from "@/lib/constants";

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
        title="Facility Coordination for Operators Under Pressure"
        description="Provisioned Services supports brands and operators that need facility problems handled quickly, professionally, and with minimal disruption—across maintenance, repairs, installations, rollouts, cooler and freezer work, flooring, rapid response, and vendor coordination."
        primaryCta={{ label: "Request Service", href: "/contact" }}
      />

      <SectionShell tone="light" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Founded in Wichita. Built to Support Clients Nationwide."
              />
              <dl className="mt-8 grid grid-cols-3 border-y border-steel-200">
                <div className="py-5">
                  <dt className="text-2xl font-semibold text-navy-950">2005</dt>
                  <dd className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-steel-500">
                    Founded
                  </dd>
                </div>
                <div className="border-x border-steel-200 px-4 py-5">
                  <dt className="text-sm font-semibold leading-tight text-navy-950 sm:text-base">
                    Wichita, KS
                  </dt>
                  <dd className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-steel-500">
                    Based
                  </dd>
                </div>
                <div className="py-5 pl-4">
                  <dt className="text-sm font-semibold leading-tight text-navy-950 sm:text-base">
                    Nationwide
                  </dt>
                  <dd className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-steel-500">
                    Coverage
                  </dd>
                </div>
              </dl>
            </div>
            <div className="space-y-5 lg:pt-1">
              <p className="prose-enterprise">
                Founded in 2005 and based in Wichita, KS, we’re a full-service
                facilities maintenance and management company working across the
                U.S. Our experienced project management team partners with our
                technicians to serve our clients nationwide, including retailers,
                restaurants, fitness clubs, and veterinary clinics.
              </p>
              <p className="prose-enterprise">
                We’ve built a solid foundation taking care of our supplier partners
                across the US so they will take care of us and our clients. Trust us
                for the dedicated and rapid response that earns us repeat business
                from our clients, and a skilled ability to adapt to any environment
                or situation.
              </p>
              <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 border-b border-brand-red/35 py-2 text-sm font-semibold text-brand-red transition-colors hover:border-brand-red hover:text-brand-red-dark"
              >
                <span
                  className="flex h-4 w-4 items-center justify-center rounded-[2px] border border-current text-[8px] font-bold leading-none"
                  aria-hidden="true"
                >
                  in
                </span>
                Follow Provisioned Services on LinkedIn
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="muted" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Operate"
            title="Disciplined Coordination from Intake to Closeout"
            description="Designed for facilities teams that need work handled without adding chaos."
          />
          <div className="mt-10">
            <OpsModules />
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="white" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="Consistent Execution Across Every Request"
          />
          <div className="mt-10 sm:mt-12">
            <ProcessTimeline />
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="light" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Why Clients Work With Provisioned"
                title="Relationship-Driven Support with Operational Discipline"
              />
              <FeatureList items={TRUST_POINTS} className="mt-6" />
            </div>
            <div>
              <SectionHeading
                eyebrow="Service Partner Philosophy"
                title="Strong Outcomes Depend on Strong Vendors"
              />
              <p className="prose-enterprise mt-6">
                Provisioned values service partners who are responsive,
                professional, insured, and committed to quality work. We coordinate
                vendors with clear scopes, respectful communication, and
                long-term partnership in mind.
              </p>
              <Button asChild className="mt-6">
                <Link href="/vendors">Explore the Vendor Network</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="muted" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Organization"
            title="How We Are Structured to Support Clients"
            description="Functional areas focused on operator coordination, project execution, and vendor network management."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ORGANIZATION_AREAS.map((area, index) => (
              <article key={area.title} className="enterprise-card p-5 sm:p-6">
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
        title="Ready to Discuss Facility Support for Your Locations?"
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />
    </>
  );
}
