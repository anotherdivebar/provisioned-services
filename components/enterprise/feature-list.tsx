import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureListProps {
  items: readonly string[];
  variant?: "light" | "dark";
  className?: string;
}

export function FeatureList({
  items,
  variant = "light",
  className,
}: FeatureListProps) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex gap-3 text-sm leading-relaxed",
            variant === "dark" ? "text-steel-300" : "text-steel-600"
          )}
        >
          <Check
            className={cn(
              "mt-0.5 h-4 w-4 shrink-0",
              variant === "dark" ? "text-amber-400" : "text-amber-600"
            )}
            strokeWidth={2.5}
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
