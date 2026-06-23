import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div
        className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-amber-400 via-navy-300 to-navy-200 lg:left-1/2 lg:block"
        aria-hidden="true"
      />

      <ol className="space-y-8 lg:space-y-0">
        {PROCESS_STEPS.map((step, index) => (
          <li
            key={step.title}
            className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8"
          >
            <div
              className={`lg:text-right ${index % 2 === 0 ? "" : "lg:order-2 lg:text-left"}`}
            >
              <div
                className={`relative rounded-xl border border-navy-100 bg-white p-6 shadow-sm lg:max-w-md ${
                  index % 2 === 0 ? "lg:ml-auto" : ""
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                  Step {step.step}
                </p>
                <h3 className="mt-2 text-xl font-bold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {step.description}
                </p>
              </div>
            </div>

            <div
              className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-amber-400 bg-white lg:left-1/2 lg:block"
              aria-hidden="true"
            />

            <div className={index % 2 === 0 ? "hidden lg:block" : "hidden lg:order-1 lg:block"} />
          </li>
        ))}
      </ol>
    </div>
  );
}
