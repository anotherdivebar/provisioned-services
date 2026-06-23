"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/components/motion/animations";
import { VisualPattern } from "@/components/visual-pattern";

const flowSteps = [
  { num: "01", label: "Intake", sub: "Capture scope & urgency" },
  { num: "02", label: "Scope", sub: "Align before dispatch" },
  { num: "03", label: "Execute", sub: "Coordinate on-site work" },
  { num: "04", label: "Closeout", sub: "Validate & document" },
];

const environments = [
  {
    label: "Restaurants",
    detail: "Kitchen, dining, and cooler/freezer support",
  },
  {
    label: "Retail",
    detail: "Storefront, flooring, and emergency repairs",
  },
  {
    label: "Multi-site operators",
    detail: "Rollouts, refreshes, and portfolio maintenance",
  },
];

const disciplines = [
  "HVAC coordination",
  "Refrigeration",
  "Flooring",
  "Emergency response",
  "Vendor coordination",
];

export function HeroOperationsGraphic() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-lg bg-amber-500/6 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0a1628]/95 shadow-xl shadow-black/30">
        <VisualPattern variant="blueprint" opacity={0.35} />
        <div className="card-shine absolute inset-0" aria-hidden="true" />

        <div className="relative border-b border-white/8 px-5 py-5 sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-400">
            How we work
          </p>
          <p className="mt-1 text-lg font-semibold text-white">
            Request to closeout
          </p>
          <p className="mt-2 text-sm leading-relaxed text-steel-400">
            Disciplined coordination for maintenance, repairs, and project work
            across active commercial locations.
          </p>
        </div>

        <div className="relative grid gap-3 p-5 sm:grid-cols-4 sm:p-6">
          {flowSteps.map((step, i) => {
            const content = (
              <div className="rounded-lg border border-white/10 bg-navy-900/60 p-4">
                <span className="text-[10px] font-bold tabular-nums text-amber-400/90">
                  {step.num}
                </span>
                <p className="mt-2 font-semibold text-white">{step.label}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-steel-400">
                  {step.sub}
                </p>
              </div>
            );

            return reduceMotion ? (
              <div key={step.label}>{content}</div>
            ) : (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.45, ease: easeOut }}
              >
                {content}
              </motion.div>
            );
          })}
        </div>

        <div className="relative border-t border-white/8 px-5 py-5 sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-steel-400">
            Built for
          </p>
          <div className="mt-3 space-y-2">
            {environments.map((env, i) => {
              const row = (
                <div className="rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3">
                  <p className="text-sm font-medium text-white">{env.label}</p>
                  <p className="mt-0.5 text-xs text-steel-400">{env.detail}</p>
                </div>
              );

              return reduceMotion ? (
                <div key={env.label}>{row}</div>
              ) : (
                <motion.div
                  key={env.label}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.07, duration: 0.4, ease: easeOut }}
                >
                  {row}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div
          className="relative border-t border-white/8 bg-navy-950/80 px-5 py-4 sm:px-6"
          aria-label="Facility service disciplines"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-steel-500">
            Coordinated disciplines
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {disciplines.map((item) => (
              <span
                key={item}
                className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-steel-300"
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
