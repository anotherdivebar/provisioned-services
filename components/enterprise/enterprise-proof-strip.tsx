import { ENTERPRISE_PROOF } from "@/lib/constants";

export function EnterpriseProofStrip() {
  return (
    <section className="border-b border-navy-100 bg-brand-cream" aria-label="Provisioned Services operating proof">
      <div className="mx-auto max-w-[90rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-red">Why operators call PSI</p>
        </div>
        <div className="grid border-y border-navy-200 sm:grid-cols-2 lg:grid-cols-4 lg:border-y-0">
          {ENTERPRISE_PROOF.map((item, index) => (
            <div
              key={item.label}
              className="border-b border-navy-200 py-5 sm:px-5 sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(2n+1)]:pl-0 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-brand-red">0{index + 1}</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-steel-500">{item.label}</p>
              </div>
              <p className="mt-2 max-w-xs text-sm font-semibold leading-snug text-brand-ink sm:text-[15px]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
