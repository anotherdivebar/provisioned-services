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
        "relative overflow-hidden border-y border-white/10 py-20 sm:py-24",
        variant === "final"
          ? "bg-gradient-to-br from-navy-950 via-[#0a1628] to-charcoal-950"
          : "bg-navy-950",
        className
      )}
    >
      <VisualPattern variant="blueprint" opacity={0.25} />
      <div
        className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-blue-500/5"
        aria-hidden="true"
      />
      {variant === "final" ? (
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
          aria-hidden="true"
        />
      ) : null}

      <FadeUp className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-steel-300">
            {description}
          </p>
        ) : null}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {primaryCta ? (
            <Button asChild size="lg" className="h-12 px-8 shadow-lg shadow-amber-500/20">
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : null}
          {secondaryCta ? (
            <Button asChild variant="secondary" size="lg" className="h-12 px-8">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          ) : null}
        </div>
      </FadeUp>
    </section>
  );
}
