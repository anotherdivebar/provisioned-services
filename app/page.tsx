import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { StatsStrip } from "@/components/stats-strip";
import { PremiumServiceCard } from "@/components/service-card";
import { IndustryCard } from "@/components/industry-card";
import { ProcessTimeline } from "@/components/process-timeline";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBand } from "@/components/cta-band";
import { VendorCTA } from "@/components/vendor-cta";
import { EnterpriseProofStrip } from "@/components/enterprise/enterprise-proof-strip";
import { OpsModules } from "@/components/enterprise/ops-modules";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/animations";
import { Button } from "@/components/ui/button";
import {
  CASE_STUDIES,
  INDUSTRIES,
  WHAT_WE_DO,
  WHY_PROVISIONED,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <EnterpriseProofStrip />
      <StatsStrip />

      <SectionShell tone="light" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="Operating Model"
              sectionNumber="01"
              title="Built for multi-site facility operations"
              description="Provisioned is designed to help operators coordinate facility work with clear scope, responsive communication, and accountable closeout."
            />
          </FadeUp>
          <FadeUp className="mt-10">
            <OpsModules />
          </FadeUp>
        </div>
      </SectionShell>

      <SectionShell tone="white" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="Capabilities"
              sectionNumber="02"
              title="Facility support across maintenance, response, and projects"
              description="Service modules designed for restaurant, retail, and multi-site operators that cannot afford extended downtime."
            />
          </FadeUp>
          <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {WHAT_WE_DO.map((item) => (
              <StaggerItem key={item.title}>
                <PremiumServiceCard {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp className="mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View full service catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeUp>
        </div>
      </SectionShell>

      <SectionShell tone="muted" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="Industries"
              sectionNumber="03"
              title="Support aligned to how each operator runs"
              description="Facility coordination tailored to the schedules, standards, and pain points of active commercial environments."
            />
          </FadeUp>
          <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry, index) => (
              <StaggerItem key={industry.slug}>
                <IndustryCard
                  title={industry.title}
                  description={industry.description}
                  slug={industry.slug}
                  index={index}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionShell>

      <SectionShell tone="dark" pattern="grid" dividerTop className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              light
              eyebrow="Why Provisioned"
              sectionNumber="04"
              title="One accountable partner when facility work cannot wait"
              description="Operators choose Provisioned for coordination discipline—not another vendor relationship to manage."
            />
          </FadeUp>

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <FadeUp delay={0.08}>
              <blockquote className="enterprise-card-dark h-full p-6 sm:p-8">
                <p className="text-lg font-medium leading-relaxed text-white sm:text-xl">
                  Clear scope, fast dispatch, accountable execution—built for
                  brands that cannot afford downtime.
                </p>
                <footer className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
                  Provisioned operating standard
                </footer>
              </blockquote>
            </FadeUp>

            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {WHY_PROVISIONED.map((item, index) => (
                <StaggerItem key={item.title}>
                  <article className="enterprise-card-dark h-full p-5">
                    <span className="font-mono text-[11px] font-bold text-amber-400/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-400">
                      {item.description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="light" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="Process"
              sectionNumber="05"
              title="From intake to closeout"
              description="A consistent operating process designed for active business environments."
            />
          </FadeUp>
          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </div>
      </SectionShell>

      <VendorCTA />

      <SectionShell tone="white" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="Projects"
              sectionNumber="06"
              title="Representative project examples"
              description="Illustrative scenarios showing the types of facility challenges Provisioned is built to support. Not client-specific case studies."
            />
          </FadeUp>
          <StaggerContainer className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {CASE_STUDIES.slice(0, 6).map((project) => (
              <StaggerItem key={project.id}>
                <CaseStudyCard {...project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp className="mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View all project examples
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeUp>
        </div>
      </SectionShell>

      <CtaBand
        variant="final"
        title="Need a facilities partner who can keep up with your locations?"
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "Apply to Be a Vendor", href: "/apply-to-be-a-vendor" }}
      />
    </>
  );
}
