import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
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
  title,
  projectType,
  industry,
  challenge,
  solution,
  outcome,
  href = "/projects",
  className,
}: CaseStudyCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg",
        className
      )}
    >
      <div className="border-b border-navy-100 bg-off-white px-6 py-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-navy-950 px-3 py-1 text-xs font-medium text-amber-400">
            {projectType}
          </span>
          <span className="rounded-full border border-navy-200 px-3 py-1 text-xs font-medium text-steel-600">
            {industry}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-navy-950">{title}</h3>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-6 py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
            Challenge
          </p>
          <p className="mt-1 text-sm leading-relaxed text-steel-600">{challenge}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
            Solution
          </p>
          <p className="mt-1 text-sm leading-relaxed text-steel-600">{solution}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
            Outcome
          </p>
          <p className="mt-1 text-sm leading-relaxed text-steel-600">{outcome}</p>
        </div>
      </div>

      <div className="border-t border-navy-100 px-6 py-4">
        <Button asChild variant="ghost" className="px-0">
          <Link href={href}>
            View project details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
