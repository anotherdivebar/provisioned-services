import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  description: string;
  slug?: string;
  href?: string;
  index?: number;
  className?: string;
}

export function IndustryCard({
  title,
  description,
  slug,
  href,
  index = 0,
  className,
}: IndustryCardProps) {
  const link = href ?? (slug ? `/industries#${slug}` : "/industries");
  const code = title.slice(0, 2).toUpperCase();

  return (
    <Link
      href={link}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100/80 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-300/50 hover:shadow-xl hover:shadow-navy-950/8 sm:p-7",
        className
      )}
    >
      <div className="mb-6 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 font-mono text-sm font-bold text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-navy-950">
          {code}
        </div>
        <span className="font-mono text-xs font-bold tabular-nums text-steel-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-xl font-bold text-navy-950">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-600">
        {description}
      </p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors group-hover:text-amber-600">
        Explore industry
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>

      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-500 group-hover:w-full"
        aria-hidden="true"
      />
    </Link>
  );
}
