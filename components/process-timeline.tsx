"use client";

import { useState } from "react";
import { PROCESS_STEPS } from "@/lib/constants";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/animations";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      {/* desktop horizontal timeline */}
      <div className="hidden lg:block">
        <div
          className="absolute left-0 right-0 top-[2.75rem] h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent"
          aria-hidden="true"
        />
        <StaggerContainer className="grid grid-cols-6 gap-3">
          {PROCESS_STEPS.map((step, index) => (
            <StaggerItem key={step.title}>
              <button
                type="button"
                className="group w-full text-left"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <div
                  className={cn(
                    "relative mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300",
                    active === index
                      ? "border-amber-500 bg-amber-500 text-navy-950 shadow-lg shadow-amber-500/25"
                      : "border-navy-200 bg-white text-navy-700 group-hover:border-amber-400 group-hover:text-amber-700"
                  )}
                >
                  {step.step.replace("0", "")}
                </div>
                <h3
                  className={cn(
                    "text-center text-sm font-bold transition-colors",
                    active === index ? "text-navy-950" : "text-navy-800"
                  )}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-center text-xs leading-relaxed text-steel-500">
                  {step.description}
                </p>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* mobile vertical timeline */}
      <ol className="space-y-4 lg:hidden">
        {PROCESS_STEPS.map((step, index) => (
          <FadeUp key={step.title} delay={index * 0.06}>
            <li className="relative flex gap-4">
              {index < PROCESS_STEPS.length - 1 ? (
                <div
                  className="absolute left-[1.35rem] top-12 h-[calc(100%-1rem)] w-px bg-navy-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-amber-500 bg-amber-500 text-sm font-bold text-navy-950">
                {step.step.replace("0", "")}
              </div>
              <div className="flex-1 rounded-xl border border-navy-100 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
                  Step {step.step}
                </p>
                <h3 className="mt-1 text-lg font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {step.description}
                </p>
              </div>
            </li>
          </FadeUp>
        ))}
      </ol>

      {/* sticky visual panel - desktop */}
      <FadeUp delay={0.2} className="mt-12 hidden lg:block">
        <div className="overflow-hidden rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0f2038] p-8 text-white">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400">
                Active step
              </p>
              <p className="mt-2 text-3xl font-bold">{PROCESS_STEPS[active].title}</p>
              <p className="mt-3 text-steel-300">{PROCESS_STEPS[active].description}</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {PROCESS_STEPS.map((s, i) => (
                <div
                  key={s.title}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-center text-xs font-semibold transition-all",
                    i <= active
                      ? "border-amber-500/40 bg-amber-500/10 text-amber-200"
                      : "border-white/10 bg-white/5 text-steel-500"
                  )}
                >
                  {s.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
