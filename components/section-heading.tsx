import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  sectionNumber?: string;
  verticalLabel?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  sectionNumber,
  verticalLabel,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "relative max-w-3xl",
        align === "center" && "mx-auto text-center",
        verticalLabel && "lg:pl-12"
      )}
    >
      {verticalLabel ? (
        <span
          className={cn(
            "vertical-label absolute left-0 top-1 hidden text-[10px] font-bold uppercase tracking-[0.35em] lg:block",
            light ? "text-amber-500/40" : "text-amber-600/30"
          )}
          aria-hidden="true"
        >
          {verticalLabel}
        </span>
      ) : null}

      {sectionNumber ? (
        <span
          className={cn(
            "section-number pointer-events-none absolute -left-2 -top-8 select-none",
            light ? "text-white/[0.04]" : "text-amber-500/[0.07]"
          )}
          aria-hidden="true"
        >
          {sectionNumber}
        </span>
      ) : null}

      {eyebrow ? (
        <p
          className={cn(
            "relative mb-4 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em]",
            light ? "text-amber-400" : "text-amber-600"
          )}
        >
          <span
            className={cn("h-px w-6", light ? "bg-amber-400/60" : "bg-amber-500/60")}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "relative text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          light ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "relative mt-5 text-lg leading-relaxed",
            light ? "text-steel-300" : "text-steel-600"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
