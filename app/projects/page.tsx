import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBand } from "@/components/cta-band";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project examples across restaurant support, emergency repairs, multi-location refreshes, flooring, cooler/freezer work, and rollout coordination.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Facility work across maintenance, response, and rollouts"
        description="Representative project examples showing how Provisioned supports operators with disciplined coordination—from emergency repairs to multi-location programs."
        primaryCta={{ label: "Request Service", href: "/contact" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Project examples"
            description="Each example reflects the type of facility challenges Provisioned helps operators solve—with clear scope, coordinated execution, and accountable closeout."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {CASE_STUDIES.map((project) => (
              <CaseStudyCard key={project.id} {...project} href="/contact" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a similar project or facility challenge?"
        description="Tell us about your locations, urgency, and scope. Our team will follow up to discuss how Provisioned can help."
        primaryCta={{ label: "Request Service", href: "/contact" }}
      />
    </>
  );
}
