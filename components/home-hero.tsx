"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { HeroOperationsGraphic } from "@/components/hero-operations-graphic";
import { easeOut, SlideInRight } from "@/components/motion/animations";
import { HERO_TRUST_POINTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MOBILE_WORKFLOW_STEPS = [
  "Intake",
  "Dispatch",
  "Execute",
  "Closeout",
] as const;

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-gradient relative isolate overflow-hidden text-white">
      <div className="brand-rings pointer-events-none absolute -right-32 top-0 h-[46rem] w-[46rem] opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" aria-hidden="true" />

      <div className="relative mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            {reduceMotion ? (
              <HeroContent />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: easeOut }}
              >
                <HeroContent />
              </motion.div>
            )}
          </div>

          <SlideInRight className="hidden lg:block" delay={0.08} duration={0.6}>
            <HeroOperationsGraphic />
          </SlideInRight>

          <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-5 backdrop-blur-sm lg:hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
              One accountable workflow
            </p>
            <ol className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
              {MOBILE_WORKFLOW_STEPS.map((step, index) => (
                <li key={step} className="bg-brand-red/80 px-4 py-3.5">
                  <span className="font-mono text-[10px] text-white/45">
                    0{index + 1}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-white">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15 bg-black/10">
        <div className="mx-auto grid max-w-[90rem] grid-cols-2 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {HERO_TRUST_POINTS.map((point, index) => (
            <div
              key={point}
              className={cn(
                "flex min-h-20 items-center gap-3 border-white/15 px-3 py-4 max-lg:border-b lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0",
                index % 2 === 0 && index < HERO_TRUST_POINTS.length - 1
                  ? "max-lg:border-r max-lg:pl-0"
                  : null,
                index === HERO_TRUST_POINTS.length - 1
                  ? "max-lg:col-span-2 max-lg:border-b-0 max-lg:pl-0"
                  : null
              )}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10">
                <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span className="text-xs font-semibold leading-snug text-white/85 sm:text-sm">{point}</span>
              <span className="ml-auto hidden text-[10px] font-bold text-white/30 xl:block">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <>
      <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
        <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-white/90">
          National facility support
        </p>
      </div>

      <h1 className="mt-7 max-w-4xl text-[clamp(3rem,6.5vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
        Keep every location moving.
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
        One accountable partner for maintenance, emergency repairs, rollouts,
        and vendor coordination across active restaurant, retail, and multi-site
        environments.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="group bg-white text-brand-red shadow-[0_16px_40px_rgba(56,8,0,0.22)] hover:bg-brand-cream"
        >
          <Link href="/contact">
            Request service
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/projects">See representative projects</Link>
        </Button>
      </div>

      <p className="mt-5 text-xs font-medium text-white/55">
        Clear scope. Responsive dispatch. Accountable closeout.
      </p>
    </>
  );
}
