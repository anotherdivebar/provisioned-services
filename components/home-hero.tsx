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
      <VisualPattern variant="blueprint" opacity={0.25} />
      <VisualPattern variant="noise" opacity={0.15} />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            {reduceMotion ? (
              <HeroContent />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: easeOut }}
              >
                <HeroContent />
              </motion.div>
            )}
          </div>

          <SlideInRight delay={0.15} duration={0.7}>
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
      <div className="mb-6 inline-flex items-center gap-3">
        <span className="h-px w-8 bg-amber-500" aria-hidden="true" />
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-400">
          National Facility Coordination
        </p>
      </div>

      <h1 className="max-w-2xl text-[2.75rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.02]">
        {SITE.tagline}
      </h1>

      <p className="mt-7 max-w-xl text-lg leading-relaxed text-steel-300 lg:text-xl lg:leading-relaxed">
        Provisioned Services helps restaurants, retailers, and multi-site operators
        handle maintenance, emergency repairs, installations, cooler/freezer work,
        flooring, rollouts, and rapid-response projects through disciplined
        coordination and trusted service partners.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-amber-500/20">
          <Link href="/contact">
            Request Service
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg" className="h-12 px-8 text-base">
          <Link href="/apply-to-be-a-vendor">Apply to Be a Vendor</Link>
        </Button>
      </div>

      <ul className="mt-12 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2">
        {HERO_TRUST_POINTS.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm text-steel-300">
            <span
              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400"
              aria-hidden="true"
            />
            {point}
          </li>
        ))}
      </ul>
    </>
  );
}
