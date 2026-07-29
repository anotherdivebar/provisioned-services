import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-brand-red bg-charcoal-950 text-white">
      <div className="coordinate-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="signal-orbit pointer-events-none absolute -bottom-56 -right-48 h-[42rem] w-[42rem] opacity-45" aria-hidden="true" />

      <div className="relative mx-auto max-w-[90rem] px-4 pb-8 pt-12 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-9 border-b border-white/20 pb-10 sm:gap-12 sm:pb-14 lg:grid-cols-[1.2fr_0.55fr_0.55fr] lg:gap-16">
          <div>
            <BrandLogo className="h-16 w-52 rounded-md" />
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/72 sm:mt-6 sm:text-lg">
              Responsive facility support for restaurants, retailers, franchise
              groups, and multi-site operators who cannot afford downtime.
            </p>
            <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap">
              <Button asChild className="w-full bg-white text-brand-red hover:bg-brand-cream sm:w-auto">
                <Link href="/contact">
                  Request Service
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="w-full sm:w-auto">
                <Link href="/apply-to-be-a-vendor">Join the Vendor Network</Link>
              </Button>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">Explore</p>
            <ul className="mt-3 space-y-0 lg:mt-5 lg:space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-11 items-center py-2 text-sm font-medium text-white/78 transition-colors hover:text-white lg:min-h-0 lg:py-0">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">Start Here</p>
            <p className="mt-5 text-sm leading-relaxed text-white/72">
              Tell us the location, issue, and timing. We will follow up to determine fit and coverage.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 inline-flex min-h-11 items-center gap-2 border-b border-white/35 py-2 text-sm font-semibold text-white transition-colors hover:border-white sm:mt-5"
            >
              {SITE.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-white/75 transition-colors hover:text-white sm:min-h-0"
              aria-label="Provisioned Services on LinkedIn"
            >
              <span
                className="flex h-4 w-4 items-center justify-center rounded-[2px] border border-current text-[8px] font-bold leading-none"
                aria-hidden="true"
              >
                in
              </span>
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <p className="uppercase tracking-[0.16em]">
              Facility Maintenance · Repairs · Vendor Coordination
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
