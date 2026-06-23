import { cn } from "@/lib/utils";
import { VisualPattern } from "@/components/visual-pattern";

type SectionTone =
  | "dark"
  | "light"
  | "muted"
  | "white"
  | "gradient"
  | "vendor";

interface SectionShellProps {
  children: React.ReactNode;
  tone?: SectionTone;
  className?: string;
  pattern?: "grid" | "blueprint" | "dots" | "noise" | "none";
  dividerTop?: boolean;
  dividerBottom?: boolean;
  id?: string;
}

const toneStyles: Record<SectionTone, string> = {
  dark: "bg-navy-950 text-white",
  light: "bg-white text-navy-950",
  muted: "bg-[#eef2f7] text-navy-950",
  white: "bg-off-white text-navy-950",
  gradient:
    "bg-gradient-to-br from-navy-900 via-[#0f2847] to-navy-950 text-white",
  vendor:
    "bg-gradient-to-br from-[#0c1e36] via-navy-900 to-[#162d4a] text-white",
};

export function SectionShell({
  children,
  tone = "light",
  className,
  pattern = "none",
  dividerTop = false,
  dividerBottom = false,
  id,
}: SectionShellProps) {
  const isDark = tone === "dark" || tone === "gradient" || tone === "vendor";

  return (
    <section id={id} className={cn("relative overflow-hidden", toneStyles[tone], className)}>
      {pattern !== "none" ? (
        <VisualPattern variant={pattern} opacity={isDark ? 0.35 : 0.5} />
      ) : null}
      {dividerTop ? (
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
          aria-hidden="true"
        />
      ) : null}
      <div className="relative">{children}</div>
      {dividerBottom ? (
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden="true"
        />
      ) : null}
    </section>
  );
}
