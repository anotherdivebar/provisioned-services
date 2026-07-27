"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { easeOut } from "@/components/motion/animations";

const FLOW_STEPS = [
  { num: "01", label: "Intake", sub: "Location, scope, urgency" },
  { num: "02", label: "Dispatch", sub: "Right trade, right coverage" },
  { num: "03", label: "Execute", sub: "Coordinate work on site" },
  { num: "04", label: "Closeout", sub: "Validate and document" },
] as const;

const COVERAGE = [
  "Maintenance",
  "Emergency",
  "Rollouts",
  "Specialty trades",
] as const;

export function HeroOperationsGraphic() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-xl lg:mr-0">
      <div
        className="absolute -inset-3 translate-x-3 translate-y-3 border border-brand-red/20"
        aria-hidden="true"
      />
      <div className="soft-shadow relative overflow-hidden border border-navy-800 bg-charcoal-950 text-white">
        <div
          className="coordinate-grid pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        <div
          className="signal-orbit pointer-events-none absolute -right-32 -top-32 h-96 w-96 opacity-60"
          aria-hidden="true"
        />

        <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
            PSI / Operations desk
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full bg-brand-red-light opacity-50 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 bg-brand-red-light" />
            </span>
            Ready to coordinate
          </div>
        </div>

        <div className="relative px-5 py-6 sm:px-6 sm:py-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
                Operating model
              </p>
              <h2 className="mt-3 max-w-sm text-3xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-4xl">
                Request to resolution.
              </h2>
            </div>
            <ArrowDownRight
              className="h-8 w-8 shrink-0 text-brand-red-light"
              strokeWidth={1.4}
              aria-hidden="true"
            />
          </div>

          <div className="mt-7 border-y border-white/10">
            {FLOW_STEPS.map((step, index) => {
              const row = (
                <div className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-white/10 py-4 last:border-b-0">
                  <span className="font-mono text-[11px] font-bold text-brand-red-light">
                    {step.num}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{step.label}</p>
                    <p className="mt-0.5 text-xs text-white/45">{step.sub}</p>
                  </div>
                  <span className="h-1.5 w-1.5 bg-amber-400" aria-hidden="true" />
                </div>
              );

              return reduceMotion ? (
                <div key={step.label}>{row}</div>
              ) : (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.15 + index * 0.07,
                    duration: 0.38,
                    ease: easeOut,
                  }}
                >
                  {row}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-white/[0.025] px-5 py-5 sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
            Coverage modules
          </p>
          <div className="mt-3 grid grid-cols-2 gap-px bg-white/10">
            {COVERAGE.map((item) => (
              <span
                key={item}
                className="bg-charcoal-950 px-3 py-2.5 text-[11px] font-semibold text-white/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
