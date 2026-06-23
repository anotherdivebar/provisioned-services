import { cn } from "@/lib/utils";

interface SectionDividerProps {
  flip?: boolean;
  className?: string;
  fill?: string;
}

export function SectionDivider({
  flip = false,
  className,
  fill = "var(--off-white)",
}: SectionDividerProps) {
  return (
    <div
      className={cn("relative h-12 w-full overflow-hidden sm:h-16", className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className={cn("absolute inset-0 h-full w-full", flip && "rotate-180")}
      >
        <path
          d="M0,32 L480,8 C720,-8 960,56 1440,24 L1440,64 L0,64 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
