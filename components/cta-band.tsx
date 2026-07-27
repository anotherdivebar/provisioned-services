"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/motion/animations";
import { VisualPattern } from "@/components/visual-pattern";
import { Button } from "@/components/ui/button";

interface CtaBandProps {
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
  variant?: "default" | "final";
}

export function CtaBand({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  variant = "default",
}: CtaBandProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-y border-white/10 bg-charcoal-950 py-14 text-white sm:py-20",
        className
      )}
    >
      <VisualPattern variant="grid" opacity={0.16} />
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-1.5 bg-brand-red",
          variant === "final" && "w-2.5"
        )}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 font-mono text-[16rem] font-bold leading-none tracking-[-0.12em] text-white/[0.025]"
        aria-hidden="true"
      >
        PSI
      </div>

      <FadeUp className="relative mx-auto grid max-w-[90rem] gap-9 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8">
        <div>
          <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-brand-red-light">
            Next move / Start here
          </p>
          <h2 className="max-w-4xl text-3xl font-semibold leading-[1] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          {primaryCta ? (
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : null}
          {secondaryCta ? (
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          ) : null}
        </div>
      </FadeUp>
    </section>
  );
}
