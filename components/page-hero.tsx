"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeUp, SlideInRight } from "@/components/motion/animations";
import { VisualPattern } from "@/components/visual-pattern";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  dark = true,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        dark
          ? "border-white/10 hero-gradient text-white"
          : "border-navy-100 bg-off-white text-navy-950"
      )}
    >
      {dark ? (
        <>
          <VisualPattern variant="blueprint" opacity={0.2} />
          <VisualPattern variant="noise" opacity={0.1} />
        </>
      ) : null}

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeUp duration={0.6}>
            {eyebrow ? (
              <p className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-amber-400">
                <span className="h-px w-6 bg-amber-400/60" aria-hidden="true" />
                {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              {title}
            </h1>
            {description ? (
              <p
                className={cn(
                  "mt-6 max-w-2xl text-lg leading-relaxed lg:text-xl",
                  dark ? "text-steel-300" : "text-steel-600"
                )}
              >
                {description}
              </p>
            ) : null}

            {(primaryCta || secondaryCta) && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {primaryCta ? (
                  <Button asChild size="lg" className="shadow-lg shadow-amber-500/15">
                    <Link href={primaryCta.href}>
                      {primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button asChild variant="secondary" size="lg">
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                ) : null}
              </div>
            )}
          </FadeUp>

          {children ? (
            <SlideInRight delay={0.12} duration={0.65}>
              <div className="relative">{children}</div>
            </SlideInRight>
          ) : null}
        </div>
      </div>
    </section>
  );
}
