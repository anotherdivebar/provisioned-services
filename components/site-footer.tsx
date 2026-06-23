import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-steel-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-xl font-bold text-white">{SITE.name}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-steel-400">
              Responsive facility support for restaurants, retailers, and
              multi-site operators. Maintenance, emergency repairs, rollouts,
              and vendor coordination—built for brands that cannot afford
              downtime.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="sm">
                <Link href="/contact">Request Service</Link>
              </Button>
              <Button asChild variant="secondary" size="sm">
                <Link href="/apply-to-be-a-vendor">Apply to Be a Vendor</Link>
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="mt-4 space-y-3">
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

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-amber-400"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-amber-400"
                >
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Facility maintenance, repairs, and vendor coordination.</p>
        </div>
      </div>
    </footer>
  );
}
