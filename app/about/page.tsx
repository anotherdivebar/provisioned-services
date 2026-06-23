import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Provisioned Services—facility support for restaurants, retailers, and multi-site operators who need responsive maintenance, repairs, and vendor coordination.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Facility support built for operators under pressure"
        description="Provisioned Services supports brands and operators that need facility problems handled quickly, professionally, and with minimal disruption. The company works across maintenance, repairs, installations, rollouts, cooler/freezer work, flooring, rapid response, and vendor coordination to keep client locations operational."
        primaryCta={{ label: "Request Service", href: "/contact" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="A coordination partner for active commercial environments"
              />
              <p className="mt-6 text-steel-600 leading-relaxed">
                Provisioned Services was built for operators who cannot afford extended
                downtime. We support restaurants, retailers, franchise groups, and
                multi-site portfolios with practical facility coordination—from emergency
                repairs to planned rollouts.
              </p>
            </div>
            <div>
              <SectionHeading eyebrow="What We Do" title="Maintenance, projects, and vendor coordination" />
              <p className="mt-6 text-steel-600 leading-relaxed">
                Our work spans day-to-day maintenance, emergency response, cooler and
                freezer support, flooring, installations, remodels, and multi-location
                programs. We coordinate trusted service partners and maintain clear
                accountability from intake to closeout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-off-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="Disciplined coordination from intake to closeout"
            description="Clear scope, responsive communication, and accountable execution—designed for facilities teams that need work handled without adding chaos."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Structured intake",
                copy: "We capture location details, urgency, and scope before dispatch so work starts with alignment.",
              },
              {
                title: "Coordinated execution",
                copy: "Service partners are assigned based on trade, coverage, and the realities of your operating environment.",
              },
              {
                title: "Validated closeout",
                copy: "Completion is reviewed against scope and quality expectations with documentation you can rely on.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Why Clients Trust Provisioned"
                title="Relationship-driven support with operational discipline"
              />
              <ul className="mt-6 space-y-4">
                {[
                  "One accountable partner instead of fragmented vendor relationships",
                  "Responsive facility support when locations cannot wait",
                  "Clear communication that operations teams can act on",
                  "Reduced operational disruption in active business environments",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-steel-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Service Partner Philosophy"
                title="Great outcomes depend on great vendors"
              />
              <p className="mt-6 text-steel-600 leading-relaxed">
                Provisioned values service partners who are responsive, professional,
                insured, and committed to quality work. We coordinate vendors with clear
                scopes, respectful communication, and long-term partnership in mind—because
                reliable execution protects client relationships.
              </p>
              <Button asChild className="mt-6">
                <Link href="/vendors">Learn about our vendor network</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy-100 bg-off-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Team placeholder"
            description="Leadership profiles and team photography can be added here as the company grows its public-facing team page."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Operations Leadership", "Project Coordination", "Vendor Relations"].map(
              (role) => (
                <div
                  key={role}
                  className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 h-40 rounded-lg bg-gradient-to-br from-navy-800 to-steel-700" />
                  <h3 className="font-semibold text-navy-950">{role}</h3>
                  <p className="mt-2 text-sm text-steel-600">
                    Profile placeholder — add name, title, and bio when ready.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to talk about facility support for your locations?"
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />
    </>
  );
}
