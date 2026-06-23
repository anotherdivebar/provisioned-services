import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { VisualPattern } from "@/components/visual-pattern";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950 text-steel-300">
      <VisualPattern variant="blueprint" opacity={0.2} />
      <VisualPattern variant="noise" opacity={0.08} />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 font-mono text-sm font-bold text-navy-950">
                PS
              </div>
              <p className="text-xl font-bold text-white">{SITE.name}</p>
            </div>
            <p className="mt-6 max-w-md text-base leading-relaxed text-steel-400">
              Responsive facility support for restaurants, retailers, and
              multi-site operators. Maintenance, emergency repairs, rollouts,
              and vendor coordination—built for brands that cannot afford
              downtime.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="shadow-md shadow-amber-500/10">
                <Link href="/contact">Request Service</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/apply-to-be-a-vendor">Apply to Be a Vendor</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
              Contact
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-steel-500">
                  Email
                </span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 inline-block transition-colors hover:text-amber-400"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-steel-500">
                  Phone
                </span>
                <a
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="mt-1 inline-block transition-colors hover:text-amber-400"
                >
                  {SITE.phone}
                </a>
              </li>
            </ul>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold text-white">
                Join our vendor network
              </p>
              <p className="mt-2 text-xs leading-relaxed text-steel-400">
                Responsive, insured service providers supporting restaurants,
                retail, and multi-site operators.
              </p>
              <Link
                href="/apply-to-be-a-vendor"
                className="mt-3 inline-block text-sm font-semibold text-amber-400 hover:text-amber-300"
              >
                Apply to Be a Vendor →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-sm text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="text-xs uppercase tracking-wider">
            Facility maintenance · Repairs · Vendor coordination
          </p>
        </div>
      </div>
    </footer>
  );
}
