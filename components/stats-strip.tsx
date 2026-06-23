"use client";

import { TRUST_STRIP_ITEMS } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function StatsStrip() {
  return (
    <section className="relative border-y border-navy-100 bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {TRUST_STRIP_ITEMS.map((item, index) => (
            <StaggerItem key={item}>
              <div className="group flex h-full items-center gap-4 rounded-xl border border-navy-100 bg-off-white px-4 py-4 transition-all hover:border-amber-200 hover:bg-white hover:shadow-md">
                <span className="font-mono text-lg font-bold tabular-nums text-amber-500/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-navy-900">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
