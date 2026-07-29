import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  id?: string;
  title: string;
  projectType: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  href?: string;
  className?: string;
}

const BRIEF_ROWS = [
  { key: "challenge", number: "01", label: "Challenge" },
  { key: "solution", number: "02", label: "Coordinated Response" },
  { key: "outcome", number: "03", label: "Operational Outcome" },
] as const;

export function CaseStudyCard({
  title,
  projectType,
  industry,
  challenge,
  solution,
  outcome,
  href = "/projects",
  className,
}: CaseStudyCardProps) {
  const content = { challenge, solution, outcome };

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden border border-navy-200 bg-off-white transition-all duration-300 hover:border-brand-red/40 hover:bg-white hover:shadow-[0_24px_60px_rgba(61,23,12,0.09)]",
        className
      )}
    >
      <div className="relative border-b border-navy-200 px-5 py-5 sm:px-6 sm:py-6">
        <div
          className="absolute inset-y-0 left-0 w-1 bg-brand-red"
          aria-hidden="true"
        />
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-brand-red px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white">
            {projectType}
          </span>
          <span className="border border-navy-200 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-steel-600">
            {industry}
          </span>
        </div>
        <h3 className="mt-6 max-w-xl text-2xl font-semibold leading-[1.02] tracking-[-0.04em] text-navy-950 sm:text-[1.75rem]">
          {title}
        </h3>
      </div>

      <div className="flex-1">
        {BRIEF_ROWS.map((row) => (
          <div
            key={row.key}
            className="grid gap-2 border-b border-navy-100 px-5 py-5 last:border-b-0 sm:grid-cols-[3.2rem_1fr] sm:gap-4 sm:px-6"
          >
            <span className="font-mono text-[10px] font-bold text-brand-red">
              {row.number}
            </span>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-steel-500">
                {row.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-steel-700">
                {content[row.key]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-navy-200 px-5 py-3 sm:px-6">
        <Link
          href={href}
          className="inline-flex min-h-11 w-full items-center justify-between text-sm font-semibold text-navy-900 transition-colors group-hover:text-brand-red"
        >
          Discuss a Similar Project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
