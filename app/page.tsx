import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { PremiumServiceCard } from "@/components/service-card";
import { ProcessTimeline } from "@/components/process-timeline";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBand } from "@/components/cta-band";
import { VendorCTA } from "@/components/vendor-cta";
import { EnterpriseProofStrip } from "@/components/enterprise/enterprise-proof-strip";
import { OpsModules } from "@/components/enterprise/ops-modules";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion/animations";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES, WHAT_WE_DO, WHY_PROVISIONED } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <EnterpriseProofStrip />

      <SectionShell tone="light" className="py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <FadeUp>
              <SectionHeading
                eyebrow="Built for operations"
                sectionNumber="01"
                title="Less chasing. More resolved."
                description="PSI gives busy facility teams a clear path from issue intake to accountable closeout—without adding another layer of chaos."
              />
              <Button asChild variant="outline" size="lg" className="mt-8">
                <Link href="/about">
                  How we operate
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </FadeUp>
            <FadeUp delay={0.08}>
              <OpsModules />
            </FadeUp>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="muted" className="py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Core capabilities"
                sectionNumber="02"
                title="One call covers the work that keeps locations open."
                description="Responsive support across the facility services operators rely on most."
              />
              <Button asChild variant="outline" size="lg" className="w-fit shrink-0">
                <Link href="/services">
                  Explore all services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeUp>
          <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {WHAT_WE_DO.slice(0, 4).map((item) => (
              <StaggerItem key={item.title}>
                <PremiumServiceCard {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionShell>

      <SectionShell tone="dark" pattern="grid" dividerTop className="py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <FadeUp>
              <SectionHeading
                light
                eyebrow="The PSI standard"
                sectionNumber="03"
                title="Facility support should feel clear—even when the problem is not."
              />
              <blockquote className="mt-8 border-l-2 border-amber-400 pl-5">
                <p className="text-lg font-medium leading-relaxed text-white/90">
                  “Clear scope, responsive dispatch, accountable execution—built
                  for brands that cannot afford downtime.”
                </p>
                <footer className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-amber-400">
                  Provisioned operating standard
                </footer>
              </blockquote>
            </FadeUp>

            <StaggerContainer className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {WHY_PROVISIONED.slice(0, 4).map((item, index) => (
                <StaggerItem key={item.title}>
                  <article className="h-full bg-navy-950/95 p-6 sm:p-7">
                    <span className="font-mono text-[10px] font-bold text-amber-400">0{index + 1}</span>
                    <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-400">{item.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="white" className="py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="A repeatable process"
              sectionNumber="04"
              title="From first call to documented closeout."
              description="A simple operating rhythm keeps urgent repairs and planned project work visible, organized, and moving forward."
            />
          </FadeUp>
          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="light" className="border-t border-navy-100 py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Representative work"
                sectionNumber="05"
                title="Proof lives in the way the work gets handled."
                description="Illustrative project scenarios that show the facility challenges PSI is built to coordinate."
              />
              <Button asChild variant="outline" size="lg" className="w-fit shrink-0">
                <Link href="/projects">
                  View all project examples
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeUp>
          <StaggerContainer className="mt-12 grid gap-5 lg:grid-cols-3">
            {CASE_STUDIES.slice(0, 3).map((project) => (
              <StaggerItem key={project.id}>
                <CaseStudyCard {...project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="mt-5 text-xs text-steel-500">Representative examples only; not client-specific case studies.</p>
        </div>
      </SectionShell>

      <VendorCTA />

      <CtaBand
        variant="final"
        title="Keep the next facility issue from becoming the next operational setback."
        description="Tell us what is happening, where it is happening, and how quickly you need support."
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
