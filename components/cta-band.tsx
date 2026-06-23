import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CtaBandProps {
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function CtaBand({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CtaBandProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-y border-white/10 bg-navy-950 py-16 sm:py-20",
        className
      )}
    >
      <div className="absolute inset-0 network-bg opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-950 to-charcoal-950" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-steel-300">
            {description}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
      </div>
    </section>
  );
}
