import { SERVICES, SERVICE_GROUPS } from "@/lib/constants";

export function ServiceGroups() {
  return (
    <div className="space-y-8">
      {SERVICE_GROUPS.map((group) => {
        const groupServices = SERVICES.filter((s) =>
          (group.slugs as readonly string[]).includes(s.slug)
        );

        return (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-24 enterprise-card overflow-hidden"
          >
            <div className="border-b border-navy-100 bg-navy-50 px-6 py-5 sm:px-8">
              <h2 className="text-xl font-bold text-navy-950 sm:text-2xl">
                {group.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel-600 sm:text-base">
                {group.description}
              </p>
            </div>
            <div className="grid gap-px bg-navy-100 lg:grid-cols-[1fr_280px]">
              <ul className="bg-white">
                {groupServices.map((service) => (
                  <li
                    key={service.slug}
                    id={service.slug}
                    className="scroll-mt-24 border-b border-navy-100 px-6 py-5 last:border-b-0 sm:px-8"
                  >
                    <h3 className="font-semibold text-navy-950">{service.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                      {service.description}
                    </p>
                  </li>
                ))}
              </ul>
              <aside className="bg-off-white px-6 py-5 sm:px-8 lg:py-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
                  Operational outcome
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-navy-900">
                  {group.outcome}
                </p>
              </aside>
            </div>
          </section>
        );
      })}
    </div>
  );
}
