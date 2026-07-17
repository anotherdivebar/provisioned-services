import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-red text-white">
      <div className="brand-rings pointer-events-none absolute -bottom-48 -right-40 h-[42rem] w-[42rem] opacity-60" aria-hidden="true" />

      <div className="relative mx-auto max-w-[90rem] px-4 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-12 border-b border-white/20 pb-14 lg:grid-cols-[1.2fr_0.55fr_0.55fr] lg:gap-16">
          <div>
            <BrandLogo className="h-[4.5rem] w-64" />
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/72">
              Responsive facility support for restaurants, retailers, franchise
              groups, and multi-site operators who cannot afford downtime.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-white text-brand-red hover:bg-brand-cream">
                <Link href="/contact">
                  Request service
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/apply-to-be-a-vendor">Join the vendor network</Link>
              </Button>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium text-white/78 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">Start here</p>
            <p className="mt-5 text-sm leading-relaxed text-white/72">
              Tell us the location, issue, and timing. We will follow up to determine fit and coverage.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-flex items-center gap-2 border-b border-white/35 pb-1 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              {SITE.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="uppercase tracking-[0.16em]">Facility maintenance · Repairs · Vendor coordination</p>
        </div>
      </div>
    </footer>
  );
}
