import { ENTERPRISE_PROOF } from "@/lib/constants";

export function EnterpriseProofStrip() {
  return (
    <section
      className="border-y border-navy-100 bg-surface-muted"
      aria-label="Operating model highlights"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-lg border border-navy-100 bg-navy-100 sm:grid-cols-2 lg:grid-cols-4">
          {ENTERPRISE_PROOF.map((item) => (
            <div key={item.label} className="bg-white px-5 py-6 sm:px-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-600">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-snug text-navy-950">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
