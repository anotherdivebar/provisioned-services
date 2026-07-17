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
    <div className="grid overflow-hidden rounded-2xl border border-navy-200 bg-navy-200 gap-px sm:grid-cols-2">
      {OPERATIONAL_MODULES.map((module, index) => {
        const Icon = icons[index] ?? Network;
        return (
          <article
            key={module.title}
            className="group relative flex gap-4 bg-off-white p-5 transition-colors hover:bg-white sm:p-7"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
              <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold text-brand-red">0{index + 1}</span>
              <h3 className="mt-1.5 font-semibold text-navy-950">{module.title}</h3>
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
