"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HERO_TRUST_POINTS } from "@/lib/constants";

const processSteps = [
  { label: "Request", detail: "Intake" },
  { label: "Dispatch", detail: "Scope & assign" },
  { label: "Execute", detail: "On-site work" },
  { label: "Closeout", detail: "Validated" },
];

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-amber-500/10 blur-2xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Operations Flow
            </p>
            <p className="mt-1 text-lg font-semibold text-white">
              Request → Dispatch → Execute → Closeout
            </p>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-navy-900 px-3 py-1 text-xs text-steel-300 sm:block">
            Multi-site ready
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.4 }}
              className="relative rounded-xl border border-white/10 bg-navy-900/80 p-4"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-navy-950">
                {index + 1}
              </div>
              <p className="font-semibold text-white">{step.label}</p>
              <p className="mt-1 text-xs text-steel-400">{step.detail}</p>
              {index < processSteps.length - 1 ? (
                <ArrowRight
                  className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-amber-400 sm:block"
                  aria-hidden="true"
                />
              ) : null}
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {HERO_TRUST_POINTS.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.08, duration: 0.35 }}
              className="flex items-center gap-2 text-sm text-steel-300"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
              {point}
            </motion.div>
          ))}
        </div>

        <div
          className="mt-6 h-32 rounded-xl border border-white/10 bg-gradient-to-br from-navy-800 via-steel-700 to-navy-900"
          role="img"
          aria-label="Commercial facility maintenance visual placeholder"
        >
          <div className="flex h-full items-end p-4">
            <p className="text-xs text-steel-400">
              Image placeholder — swap with facility operations photography
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
