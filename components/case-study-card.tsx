import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDY_VISUALS } from "@/lib/constants";
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

export function CaseStudyCard({
  id,
  title,
  projectType,
  industry,
  challenge,
  solution,
  outcome,
  href = "/projects",
  className,
}: CaseStudyCardProps) {
  const visual =
    (id && CASE_STUDY_VISUALS[id]) ||
    "from-[#1a2f4a] via-[#2d4a62] to-[#0f1f33]";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-300/50 hover:shadow-xl hover:shadow-navy-950/8",
        className
      )}
    >
      <div
        className={cn(
          "relative h-44 overflow-hidden bg-gradient-to-br",
          visual
        )}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-950">
              {projectType}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
              {industry}
            </span>
          </div>
          <h3 className="mt-4 text-xl font-bold leading-snug text-white lg:text-2xl">
            {title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        {(
          [
            ["Challenge", challenge],
            ["Solution", solution],
            ["Outcome", outcome],
          ] as const
        ).map(([label, text]) => (
          <div key={label} className="border-l-2 border-amber-500/30 pl-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
              {label}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{text}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-navy-100 px-6 py-4">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-amber-600"
        >
          View project details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
