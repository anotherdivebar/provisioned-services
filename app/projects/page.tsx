import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBand } from "@/components/cta-band";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Representative facility project examples across maintenance, emergency response, rollouts, and multi-site coordination.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Representative facility work across maintenance, response, and rollouts"
        description="These examples illustrate the types of facility challenges Provisioned is built to support. They are representative scenarios—not named client engagements."
        primaryCta={{ label: "Request Service", href: "/contact" }}
      />

      <SectionShell tone="light" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project Examples"
            title="How Provisioned supports complex facility work"
            description="Each example follows a consistent structure: challenge, coordinated solution, and operational outcome."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {CASE_STUDIES.map((project) => (
              <CaseStudyCard key={project.id} {...project} href="/contact" />
            ))}
          </div>
        </div>
      </SectionShell>

      <CtaBand
        title="Facing a similar facility challenge?"
        description="Tell us about your locations, urgency, and scope. Our team will follow up to discuss fit and coverage."
        primaryCta={{ label: "Request Service", href: "/contact" }}
      />
    </>
  );
}
