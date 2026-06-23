"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroOperationsGraphic } from "@/components/hero-operations-graphic";
import { easeOut, SlideInRight } from "@/components/motion/animations";
import { VisualPattern } from "@/components/visual-pattern";
import { HERO_TRUST_POINTS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-white/10 hero-gradient">
      <VisualPattern variant="grid" opacity={0.2} />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            {reduceMotion ? (
              <HeroContent />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: easeOut }}
              >
                <HeroContent />
              </motion.div>
            )}
          </div>

          <SlideInRight delay={0.1} duration={0.6}>
            <HeroOperationsGraphic />
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <>
      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-amber-400">
        National Facility Support & Vendor Coordination
      </p>

      <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
        {SITE.tagline}
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
        Provisioned Services coordinates maintenance, emergency repairs,
        installations, cooler and freezer work, flooring, rollouts, and
        rapid-response projects for operators who need one accountable partner
        across many locations.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/contact">
            Request Service
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/apply-to-be-a-vendor">Apply to Be a Vendor</Link>
        </Button>
      </div>

      <ul className="mt-10 grid gap-2.5 border-t border-white/10 pt-8 sm:grid-cols-2">
        {HERO_TRUST_POINTS.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-steel-400">
            <span className="mt-2 h-px w-3 shrink-0 bg-amber-500/70" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </>
  );
}
