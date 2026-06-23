import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { SectionDivider } from "@/components/section-divider";
import { StatsStrip } from "@/components/stats-strip";
import { PremiumServiceCard } from "@/components/service-card";
import { IndustryCard } from "@/components/industry-card";
import { ProcessTimeline } from "@/components/process-timeline";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBand } from "@/components/cta-band";
import { VendorCTA } from "@/components/vendor-cta";
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
      <StatsStrip />

      {/* Services — white */}
      <SectionShell tone="light" className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="Capabilities"
              verticalLabel="Capabilities"
              sectionNumber="01"
              title="What Provisioned Does"
              description="Responsive facility support and project coordination for operators that need clear scope, fast dispatch, and accountable execution."
            />
          </FadeUp>
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {WHAT_WE_DO.map((item) => (
              <StaggerItem key={item.title}>
                <PremiumServiceCard {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp className="mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                Explore all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeUp>
        </div>
      </SectionShell>

      <SectionDivider fill="#eef2f7" />

      {/* Industries — muted */}
      <SectionShell tone="muted" pattern="dots" className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="Industries"
              verticalLabel="Industries"
              sectionNumber="02"
              title="Industries Served"
              description="Facility support tailored to the environments, schedules, and standards of active commercial operators."
            />
          </FadeUp>
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Why Provisioned — dark */}
      <SectionShell tone="dark" pattern="blueprint" dividerTop className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              light
              eyebrow="Why Provisioned"
              verticalLabel="Trust"
              sectionNumber="03"
              title="One accountable partner for facility work that cannot wait"
              description="Provisioned is built for operators who need responsive coordination—not another vendor to chase."
            />
          </FadeUp>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <FadeUp delay={0.1}>
              <blockquote className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                <div className="mb-4 text-5xl font-serif leading-none text-amber-500/40" aria-hidden="true">
                  &ldquo;
                </div>
                <p className="text-xl font-medium leading-relaxed text-white lg:text-2xl">
                  Clear scope, fast dispatch, accountable execution—built for brands
                  that cannot afford downtime.
                </p>
                <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                  Provisioned Services
                </footer>
              </blockquote>
            </FadeUp>

            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {WHY_PROVISIONED.map((item, index) => (
                <StaggerItem key={item.title}>
                  <article className="h-full rounded-xl border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-amber-500/20 hover:bg-white/[0.05]">
                    <span className="font-mono text-xs font-bold text-amber-400/70">
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

      {/* Process — light */}
      <SectionShell tone="white" className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="Process"
              verticalLabel="Process"
              sectionNumber="04"
              title="Clear scope, fast dispatch, accountable execution"
              description="A disciplined process from intake through closeout—designed for active business environments."
            />
          </FadeUp>
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </SectionShell>

      <VendorCTA />

      {/* Projects */}
      <SectionShell tone="light" className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="Projects"
              verticalLabel="Projects"
              sectionNumber="05"
              title="Project Examples"
              description="Representative work across maintenance, emergency response, rollouts, and multi-site coordination."
            />
          </FadeUp>
          <StaggerContainer className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {CASE_STUDIES.slice(0, 6).map((project) => (
              <StaggerItem key={project.id}>
                <CaseStudyCard {...project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp className="mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View all projects
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
