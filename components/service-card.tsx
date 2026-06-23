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
  visual,
  caption,
  className,
}: PremiumServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-300/60 hover:shadow-xl hover:shadow-navy-950/8",
        className
      )}
    >
      <div
        className={cn(
          "relative h-36 overflow-hidden bg-gradient-to-br",
          visual
        )}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm">
            {category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-medium text-white/70">{caption}</p>
        </div>
        <span className="absolute right-4 top-4 font-mono text-2xl font-bold text-white/20">
          {code}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-bold tabular-nums tracking-widest text-amber-600">
            {index}
          </span>
          <span className="rounded-full border border-navy-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-steel-500">
            Service module
          </span>
        </div>
        <h3 className="text-xl font-bold leading-snug text-navy-950 transition-colors group-hover:text-navy-800">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-600">
          {description}
        </p>
        <Link
          href="/services"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-amber-600"
        >
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}

// keep old export name working on other pages
export { PremiumServiceCard as ServiceCard };
