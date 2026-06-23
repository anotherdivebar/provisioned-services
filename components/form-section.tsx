import { cn } from "@/lib/utils";

interface FormSectionProps {
  step: number;
  totalSteps: number;
  title: string;
  description?: string;
  helperText?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormSection({
  step,
  totalSteps,
  title,
  description,
  helperText,
  children,
  className,
}: FormSectionProps) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-lg border border-navy-100/80 bg-white shadow-sm",
        className
      )}
    >
      <div className="border-b border-navy-100 bg-gradient-to-r from-off-white to-white px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-600">
              Section {step} of {totalSteps}
            </p>
            <h2 className="mt-2 text-xl font-bold text-navy-950 sm:text-2xl">{title}</h2>
            {description ? (
              <p className="mt-2 text-sm leading-relaxed text-steel-600">{description}</p>
            ) : null}
            {helperText ? (
              <p className="mt-1 text-xs text-steel-500">{helperText}</p>
            ) : null}
          </div>
          <span className="hidden shrink-0 font-mono text-3xl font-bold text-amber-500/20 sm:block">
            {String(step).padStart(2, "0")}
          </span>
        </div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-navy-100">
          <div
            className="h-full rounded-full bg-amber-500 transition-all duration-500"
            style={{ width: `${(step / totalSteps) * 100}%` }}
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
            aria-label={`Form progress: section ${step} of ${totalSteps}`}
          />
        </div>
      </div>
      <div className="p-6 sm:p-8">{children}</div>
    </section>
  );
}

export const VENDOR_FORM_SECTIONS = [
  "Company Information",
  "Business Details",
  "Services & Trades",
  "Operational Fit",
  "References",
  "Documents",
  "Agreement",
] as const;
