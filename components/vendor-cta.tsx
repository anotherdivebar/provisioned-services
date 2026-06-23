"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/motion/animations";
import { SectionShell } from "@/components/section-shell";
import { VisualPattern } from "@/components/visual-pattern";
import { VENDOR_BENEFITS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

export function VendorCTA() {
  return (
    <SectionShell tone="vendor" pattern="blueprint" dividerTop className="py-20 sm:py-28">
      <VisualPattern variant="noise" opacity={0.12} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <SectionHeading
              light
              eyebrow="Vendor Network"
              title="Great client outcomes start with great service partners."
              description="Provisioned works with responsive, insured, professional vendors to support active restaurants, retailers, and multi-site operators."
            />
            <Button asChild size="lg" className="mt-8 shadow-lg shadow-amber-500/15">
              <Link href="/apply-to-be-a-vendor">
                Apply to Be a Vendor
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeUp>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {VENDOR_BENEFITS.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-amber-500/25 hover:bg-white/[0.06]">
                  <div className="mb-3 h-0.5 w-8 bg-amber-500" aria-hidden="true" />
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-400">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </SectionShell>
  );
}
