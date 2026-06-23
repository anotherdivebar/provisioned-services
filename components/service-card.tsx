import {
  AlertCircle,
  Layers,
  Package,
  Store,
  Thermometer,
  Utensils,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  utensils: Utensils,
  store: Store,
  thermometer: Thermometer,
  layers: Layers,
  package: Package,
  zap: Zap,
  wrench: Wrench,
  "alert-circle": AlertCircle,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon = "wrench",
  className,
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Wrench;

  return (
    <article
      className={cn(
        "group rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg",
        className
      )}
    >
      <div className="mb-4 inline-flex rounded-lg bg-navy-950 p-3 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-navy-950">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-navy-950">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel-600">{description}</p>
    </article>
  );
}
