import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export function IndustryCard({
  title,
  description,
  href = "/industries",
  className,
}: IndustryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg",
        className
      )}
    >
      <div className="absolute right-4 top-4 text-steel-400 transition-colors group-hover:text-amber-500">
        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="pr-8 text-lg font-semibold text-navy-950">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel-600">{description}</p>
    </Link>
  );
}
