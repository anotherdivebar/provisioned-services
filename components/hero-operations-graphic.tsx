"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { easeOut } from "@/components/motion/animations";

const flowSteps = [
  { num: "01", label: "Intake", sub: "Location, scope, urgency" },
  { num: "02", label: "Dispatch", sub: "Right trade, right coverage" },
  { num: "03", label: "Execute", sub: "Coordinate work on site" },
  { num: "04", label: "Closeout", sub: "Validate and document" },
];

const environments = ["Restaurants", "Retail", "Franchise groups", "Multi-site portfolios"];

export function HeroOperationsGraphic() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-xl lg:mr-0">
      <div className="absolute -inset-5 translate-x-3 translate-y-3 rounded-[2rem] border border-white/12" aria-hidden="true" />
      <div className="soft-shadow relative overflow-hidden rounded-[1.6rem] border border-white/60 bg-brand-cream text-brand-ink">
        <div className="paper-grid absolute inset-0 opacity-35" aria-hidden="true" />

        <div className="relative flex items-center justify-between border-b border-navy-100 px-5 py-4 sm:px-6">
          <BrandLogo className="h-10 w-36 rounded-sm" />
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-30 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
            </span>
            Ready to coordinate
          </div>
        </div>

        <div className="relative px-5 py-6 sm:px-6 sm:py-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-steel-500">Operating model</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Request to resolution</h2>
            </div>
            <ArrowUpRight className="h-7 w-7 text-brand-red" strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl border border-navy-100 bg-white/80">
            {flowSteps.map((step, index) => {
              const row = (
                <div className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-navy-100 px-4 py-4 last:border-b-0 sm:grid-cols-[2.5rem_1fr_auto] sm:items-center">
                  <span className="font-mono text-xs font-bold text-brand-red">{step.num}</span>
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">{step.label}</p>
                    <p className="mt-0.5 text-xs text-steel-600">{step.sub}</p>
                  </div>
                  <span className="col-start-2 inline-flex w-fit items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-brand-red sm:col-start-auto">
                    <Check className="h-3 w-3" aria-hidden="true" />
                    Accountable
                  </span>
                </div>
              );

              return reduceMotion ? (
                <div key={step.label}>{row}</div>
              ) : (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + index * 0.08, duration: 0.38, ease: easeOut }}
                >
                  {row}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative border-t border-navy-100 bg-white/65 px-5 py-5 sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-steel-500">Built around your environment</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {environments.map((environment) => (
              <span key={environment} className="rounded-full border border-navy-200 bg-brand-cream px-3 py-1.5 text-[11px] font-semibold text-navy-800">
                {environment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
