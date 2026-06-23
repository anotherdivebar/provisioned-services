import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { ServiceCard } from "@/components/service-card";
import { IndustryCard } from "@/components/industry-card";
import { ProcessTimeline } from "@/components/process-timeline";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBand } from "@/components/cta-band";
import { HeroVisual } from "@/components/hero-visual";
import { Button } from "@/components/ui/button";
import {
  CASE_STUDIES,
  INDUSTRIES,
  SITE,
  WHAT_WE_DO,
  WHY_PROVISIONED,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <PageHero
        title={SITE.tagline}
        description="Provisioned Services helps restaurants, retailers, and multi-site operators handle maintenance, emergency repairs, installations, cooler/freezer work, flooring, rollouts, and rapid-response projects through disciplined coordination and trusted service partners."
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      >
        <HeroVisual />
      </PageHero>

      <StatsStrip />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="What Provisioned Does"
            description="Responsive facility support and project coordination for operators that need clear scope, fast dispatch, and accountable execution."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_WE_DO.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link href="/services">
                Explore all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-off-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Industries Served"
            description="Facility support tailored to the environments, schedules, and standards of active commercial operators."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <IndustryCard
                key={industry.slug}
                title={industry.title}
                description={industry.description}
                href={`/industries#${industry.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Provisioned"
            title="One accountable partner for facility work that cannot wait"
            description="Provisioned is built for operators who need responsive coordination—not another vendor to chase."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_PROVISIONED.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 h-px w-10 bg-amber-500" aria-hidden="true" />
                <h3 className="text-base font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-off-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="Clear scope, fast dispatch, accountable execution"
            description="A disciplined process from intake through closeout—designed for active business environments."
          />
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <CtaBand
        title="Great client outcomes start with great service partners."
        description="Provisioned works with reliable vendors and service providers to support restaurants, retailers, and multi-site operators. If your team is responsive, insured, professional, and committed to quality work, apply to join the Provisioned vendor network."
        primaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Project Examples"
            description="Representative work across maintenance, emergency response, rollouts, and multi-site coordination."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {CASE_STUDIES.slice(0, 6).map((project) => (
              <CaseStudyCard key={project.id} {...project} />
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link href="/projects">
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a facilities partner who can keep up with your locations?"
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />
    </>
  );
}
