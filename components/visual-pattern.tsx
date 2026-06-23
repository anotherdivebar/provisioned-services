import { cn } from "@/lib/utils";

interface VisualPatternProps {
  variant?: "grid" | "blueprint" | "noise" | "dots";
  className?: string;
  opacity?: number;
}

export function VisualPattern({
  variant = "grid",
  className,
  opacity = 1,
}: VisualPatternProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      {variant === "grid" ? <div className="network-bg h-full w-full" /> : null}
      {variant === "blueprint" ? (
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(rgba(251,191,36,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,191,36,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px",
          }}
        />
      ) : null}
      {variant === "dots" ? (
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      ) : null}
      {variant === "noise" ? (
        <div className="noise-texture h-full w-full opacity-30" />
      ) : null}
    </div>
  );
}
