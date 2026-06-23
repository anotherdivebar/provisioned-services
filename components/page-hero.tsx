import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
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
          ? "border-white/10 bg-navy-950 text-white"
          : "border-navy-100 bg-off-white text-navy-950"
      )}
    >
      <div className="absolute inset-0 network-bg opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-950 to-charcoal-950" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {eyebrow ? (
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              {title}
            </h1>
            {description ? (
              <p
                className={cn(
                  "mt-6 max-w-2xl text-lg leading-relaxed",
                  dark ? "text-steel-300" : "text-steel-600"
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
                  <Button asChild variant="secondary" size="lg">
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                ) : null}
              </div>
            )}
          </div>

          {children ? <div className="relative">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
