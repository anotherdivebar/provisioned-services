import { TRUST_STRIP_ITEMS } from "@/lib/constants";

export function StatsStrip() {
  return (
    <section className="border-y border-navy-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {TRUST_STRIP_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-lg border border-navy-100 bg-off-white px-4 py-3 text-sm font-medium text-navy-900"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-amber-500"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
