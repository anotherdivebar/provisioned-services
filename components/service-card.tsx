import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumServiceCardProps {
  title: string;
  description: string;
  category: string;
  code: string;
  index: string;
  visual: string;
  caption: string;
  className?: string;
}

export function PremiumServiceCard({
  title,
  description,
  category,
  code,
  index,
  caption,
  className,
}: PremiumServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full min-h-[24rem] flex-col overflow-hidden border border-navy-200 bg-off-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/50 hover:bg-white hover:shadow-[0_24px_60px_rgba(61,23,12,0.1)]",
        className
      )}
    >
      <div className="h-1 w-full bg-navy-100">
        <div className="h-full w-14 bg-brand-red transition-all duration-500 group-hover:w-full" />
      </div>

      <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-6 sm:pt-6">
        <div>
          <span className="font-mono text-[10px] font-bold text-brand-red">
            {index}
          </span>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-steel-500">
            {category}
          </p>
        </div>
        <span
          className="font-mono text-5xl font-semibold tracking-[-0.08em] text-navy-100 transition-colors group-hover:text-brand-red/10"
          aria-hidden="true"
        >
          {code}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-8 sm:px-6 sm:pb-6">
        <h3 className="max-w-[16rem] text-2xl font-semibold leading-[1.02] tracking-[-0.04em] text-navy-950">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-steel-600">
          {description}
        </p>

        <div className="mt-7 border-t border-navy-100 pt-4">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-steel-400">
            Scope Signal
          </p>
          <p className="mt-1.5 text-xs font-semibold text-navy-800">{caption}</p>
        </div>

        <Link
          href="/services"
          className="mt-4 inline-flex min-h-11 items-center justify-between border-t border-navy-100 pt-4 text-sm font-semibold text-navy-900 transition-colors group-hover:text-brand-red"
        >
          Explore Capability
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}

export { PremiumServiceCard as ServiceCard };
