"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { easeOut } from "@/components/motion/animations";
import { HERO_TRUST_POINTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const COORDINATION_AREAS = [
  "Emergency response",
  "Multi-site maintenance",
  "Rollouts & refreshes",
  "Specialty trades",
] as const;

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-editorial relative isolate overflow-hidden border-b border-navy-200 bg-brand-cream text-brand-ink">
      <div
        className="coordinate-grid-dark pointer-events-none absolute inset-0 opacity-35"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 -top-40 h-[34rem] w-[34rem] rounded-full border border-brand-red/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-12 -top-24 h-[24rem] w-[24rem] rounded-full border border-brand-red/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[90rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-24">
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

          <HeroBrandField />
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-charcoal-950 text-white">
        <div className="mx-auto grid max-w-[90rem] grid-cols-2 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {HERO_TRUST_POINTS.map((point, index) => (
            <div
              key={point}
              className={cn(
                "flex min-h-[4.75rem] items-center gap-3 border-white/10 px-3 py-4 max-lg:border-b lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0",
                index % 2 === 0 && index < HERO_TRUST_POINTS.length - 1
                  ? "max-lg:border-r max-lg:pl-0"
                  : null,
                index === HERO_TRUST_POINTS.length - 1
                  ? "max-lg:col-span-2 max-lg:border-b-0 max-lg:pl-0"
                  : null
              )}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-brand-red-light/60 bg-brand-red/20">
                <Check
                  className="h-3 w-3 text-amber-400"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </span>
              <span className="text-xs font-semibold leading-snug text-white/80 sm:text-sm">
                {point}
              </span>
              <span className="ml-auto hidden font-mono text-[10px] text-white/25 xl:block">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroBrandField() {
  return (
    <aside className="relative hidden min-h-[32rem] lg:flex lg:flex-col lg:justify-between">
      <div
        className="signal-orbit pointer-events-none absolute -right-28 -top-24 h-[34rem] w-[34rem] opacity-30"
        aria-hidden="true"
      />
      <div className="relative flex items-center justify-between border-t border-navy-200 pt-4">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-steel-500">
          Provisioned Services, Inc.
        </p>
        <span className="h-2 w-2 bg-brand-red" aria-hidden="true" />
      </div>

      <div
        className="pointer-events-none relative flex flex-1 items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="select-none font-sans text-[clamp(10rem,18vw,16rem)] font-bold leading-none tracking-[-0.12em] text-transparent"
          style={{ WebkitTextStroke: "1px rgba(141, 29, 3, 0.28)" }}
        >
          PSI
        </span>
        <span className="vertical-label absolute right-1 text-[9px] font-bold uppercase tracking-[0.4em] text-brand-red/45">
          Facility coordination
        </span>
      </div>

      <div>
        <p className="max-w-md text-xl font-semibold leading-snug tracking-[-0.025em] text-brand-ink">
          Structured support across locations, trades, and every stage of the
          work.
        </p>
        <ul className="mt-6 grid grid-cols-2 border-y border-navy-200">
          {COORDINATION_AREAS.map((area, index) => (
            <li
              key={area}
              className={cn(
                "flex items-center gap-3 py-3 text-xs font-semibold text-steel-700",
                index % 2 === 0
                  ? "border-r border-navy-200 pr-4"
                  : "pl-4",
                index < 2 && "border-b border-navy-200"
              )}
            >
              <span className="font-mono text-[9px] text-brand-red">
                0{index + 1}
              </span>
              {area}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function HeroContent() {
  return (
    <>
      <div className="inline-flex items-center gap-3 border-l-2 border-brand-red pl-3">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-brand-red">
          PSI / Facility operations
        </span>
      </div>

      <h1 className="mt-7 max-w-4xl text-[clamp(3.4rem,7.4vw,7.4rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-brand-ink">
        Keep every
        <span className="block text-brand-red">location moving.</span>
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-relaxed text-steel-700 sm:text-lg lg:text-xl">
        One accountable partner for maintenance, emergency repairs, rollouts,
        and vendor coordination across active restaurant, retail, and multi-site
        environments.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="group">
          <Link href="/contact">
            Request service
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/services">Explore capabilities</Link>
        </Button>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-navy-200 pt-5">
        {["Clear scope", "Responsive dispatch", "Accountable closeout"].map(
          (item) => (
            <span
              key={item}
              className="text-[10px] font-bold uppercase tracking-[0.18em] text-steel-500"
            >
              {item}
            </span>
          )
        )}
      </div>
    </>
  );
}
