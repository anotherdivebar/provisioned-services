import {
  ClipboardCheck,
  Network,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { OPERATIONAL_MODULES } from "@/lib/constants";

const icons: LucideIcon[] = [Network, Zap, ClipboardCheck, ShieldCheck];

export function OpsModules() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {OPERATIONAL_MODULES.map((module, index) => {
        const Icon = icons[index] ?? Network;
        return (
          <article
            key={module.title}
            className="enterprise-card flex gap-4 p-5 transition-shadow hover:shadow-md sm:p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-950 text-amber-400">
              <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-navy-950">{module.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-600">
                {module.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
