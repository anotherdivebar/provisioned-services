"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-navy-950/95 shadow-lg backdrop-blur-md"
          : "border-transparent bg-navy-950"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col gap-0.5">
          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            {SITE.shortName}
          </span>
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-steel-400 sm:block">
            Facility Support & Coordination
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-steel-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="secondary" size="sm">
            <Link href="/contact">Request Service</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/apply-to-be-a-vendor">Apply to Be a Vendor</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-18 bottom-0 z-40 bg-navy-950/98 backdrop-blur-lg transition-opacity lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav
          className="flex h-full flex-col gap-1 overflow-y-auto px-4 py-6"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-lg font-medium text-white hover:bg-white/5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
            <Button asChild variant="secondary" className="w-full">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Request Service
              </Link>
            </Button>
            <Button asChild className="w-full">
              <Link
                href="/apply-to-be-a-vendor"
                onClick={() => setMobileOpen(false)}
              >
                Apply to Be a Vendor
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
