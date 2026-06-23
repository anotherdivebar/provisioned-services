"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/components/motion/animations";
import { VisualPattern } from "@/components/visual-pattern";

const locations = [
  { id: "LOC-2847", name: "Retail — Dallas", status: "Dispatched", trade: "HVAC" },
  { id: "LOC-1092", name: "Restaurant — Phoenix", status: "On site", trade: "Refrigeration" },
  { id: "LOC-3310", name: "Retail — Atlanta", status: "Scoped", trade: "Flooring" },
];

const flowSteps = [
  { num: "01", label: "Request", sub: "Intake" },
  { num: "02", label: "Dispatch", sub: "Scope & assign" },
  { num: "03", label: "Execute", sub: "Field work" },
  { num: "04", label: "Closeout", sub: "Validated" },
];

export function HeroOperationsGraphic() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-3xl bg-amber-500/8 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#0a1628]/90 shadow-2xl shadow-black/40 backdrop-blur-md">
        <VisualPattern variant="blueprint" opacity={0.5} />
        <div className="card-shine absolute inset-0" aria-hidden="true" />

        <div className="relative border-b border-white/8 p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400">
                Operations Command
              </p>
              <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
                Multi-site dispatch overview
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Active response
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-steel-300">
                12 locations
              </span>
            </div>
          </div>
        </div>

        <div className="relative grid gap-4 p-5 sm:grid-cols-4 sm:p-6">
          {flowSteps.map((step, i) => {
            const content = (
              <div className="group relative rounded-xl border border-white/10 bg-navy-900/70 p-4 transition-colors hover:border-amber-500/30 hover:bg-navy-900">
                <span className="text-[10px] font-bold tabular-nums text-amber-400/80">
                  {step.num}
                </span>
                <p className="mt-2 font-semibold text-white">{step.label}</p>
                <p className="mt-0.5 text-xs text-steel-400">{step.sub}</p>
                {i < flowSteps.length - 1 ? (
                  <div
                    className="absolute -right-2 top-1/2 hidden h-px w-4 bg-amber-500/40 sm:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            );

            return reduceMotion ? (
              <div key={step.label}>{content}</div>
            ) : (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: easeOut }}
              >
                {content}
              </motion.div>
            );
          })}
        </div>

        <div className="relative border-t border-white/8 p-5 sm:p-6">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel-400">
              Open work orders
            </p>
            <span className="text-xs text-steel-500">Network coverage</span>
          </div>
          <div className="space-y-2">
            {locations.map((loc, i) => {
              const row = (
                <div className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3 transition-colors hover:border-white/15 hover:bg-white/[0.05]">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white">{loc.name}</p>
                    <p className="text-[11px] text-steel-500">{loc.id}</p>
                  </div>
                  <div className="ml-4 flex shrink-0 items-center gap-2">
                    <span className="hidden rounded bg-navy-800 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-steel-300 sm:inline">
                      {loc.trade}
                    </span>
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-amber-300">
                      {loc.status}
                    </span>
                  </div>
                </div>
              );

              return reduceMotion ? (
                <div key={loc.id}>{row}</div>
              ) : (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + i * 0.08, duration: 0.45, ease: easeOut }}
                >
                  {row}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div
          className="relative h-28 overflow-hidden border-t border-white/8 bg-gradient-to-br from-[#152536] via-[#1a3050] to-[#0d1828]"
          role="img"
          aria-label="National service network coverage map visualization"
        >
          <VisualPattern variant="dots" opacity={0.4} />
          <div className="absolute inset-0 flex items-center justify-between px-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400/90">
                Coverage
              </p>
              <p className="mt-1 text-sm text-steel-300">
                Field coordination · Vendor network · Rapid dispatch
              </p>
            </div>
            <div className="hidden gap-1 sm:grid sm:grid-cols-3">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    [0, 2, 4, 5, 7].includes(i)
                      ? "bg-amber-400/60"
                      : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
