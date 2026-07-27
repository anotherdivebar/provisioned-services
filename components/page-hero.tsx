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

const DEFAULT_FLOW = ["Intake", "Scope", "Dispatch", "Closeout"] as const;

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
          ? "border-white/10 bg-charcoal-950 text-white"
          : "border-navy-100 bg-off-white text-navy-950"
      )}
    >
      {dark ? (
        <>
          <VisualPattern variant="grid" opacity={0.18} />
          <div
            className="absolute -right-20 top-0 h-full w-[34%] skew-x-[-10deg] bg-brand-red/12"
            aria-hidden="true"
          />
          <div
            className="signal-orbit pointer-events-none absolute -right-32 -top-44 h-[38rem] w-[38rem] opacity-45"
            aria-hidden="true"
          />
        </>
      ) : null}

      <div className="relative mx-auto max-w-[90rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <FadeUp duration={0.6}>
            {eyebrow ? (
              <p
                className={cn(
                  "mb-6 inline-flex items-center gap-3 border-l-2 pl-3 font-mono text-[10px] font-bold uppercase tracking-[0.24em]",
                  dark
                    ? "border-brand-red-light text-amber-400"
                    : "border-brand-red text-brand-red"
                )}
              >
                PSI / {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-[4.6rem]">
              {title}
            </h1>
            {description ? (
              <p
                className={cn(
                  "mt-6 max-w-3xl text-base leading-relaxed sm:text-lg lg:text-xl",
                  dark ? "text-white/58" : "text-steel-600"
                )}
              >
                {description}
              </p>
            ) : null}

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {primaryCta ? (
                  <Button asChild size="lg">
                    <Link href={primaryCta.href}>
                      {primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    asChild
                    variant={dark ? "secondary" : "outline"}
                    size="lg"
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                ) : null}
              </div>
            )}
          </FadeUp>

          <SlideInRight
            className="hidden lg:block"
            delay={0.12}
            duration={0.65}
          >
            {children ?? (
              <DefaultPageHeroPanel eyebrow={eyebrow ?? "Operations"} />
            )}
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}

function DefaultPageHeroPanel({ eyebrow }: { eyebrow: string }) {
  return (
    <div className="relative border border-white/15 bg-white/[0.035] p-6 backdrop-blur-sm">
      <div
        className="coordinate-grid pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
            Operating system
          </p>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red-light">
            {eyebrow}
          </p>
        </div>

        <p className="mt-8 max-w-sm text-3xl font-semibold leading-[1] tracking-[-0.045em]">
          One accountable path from request to resolution.
        </p>

        <ol className="mt-8 grid grid-cols-2 gap-px bg-white/10">
          {DEFAULT_FLOW.map((step, index) => (
            <li key={step} className="bg-charcoal-950/95 px-4 py-4">
              <span className="font-mono text-[10px] text-brand-red-light">
                0{index + 1}
              </span>
              <p className="mt-2 text-sm font-semibold text-white/85">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
          <span>Multi-site ready</span>
          <span>PSI / Coordinated</span>
        </div>
      </div>
    </div>
  );
}
