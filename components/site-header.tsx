"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { easeOut } from "@/components/motion/animations";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

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
          ? "border-navy-100 bg-brand-cream/95 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-brand-cream"
      )}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group -ml-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-4"
          aria-label="Provisioned Services home"
        >
          <BrandLogo priority className="h-12 w-44 transition-opacity group-hover:opacity-90 sm:w-48" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3.5 py-2 text-[13px] font-semibold transition-colors",
                  active
                    ? "text-brand-red"
                    : "text-steel-700 hover:text-brand-red"
                )}
              >
                {link.label}
                {active ? (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 bg-brand-red" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/apply-to-be-a-vendor">Vendor network</Link>
          </Button>
          <Button asChild size="sm" className="group">
            <Link href="/contact">
              Request service
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-navy-200 p-2.5 text-brand-ink transition-colors hover:border-brand-red hover:text-brand-red lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="fixed inset-x-0 top-[4.75rem] bottom-0 z-40 border-t border-navy-100 bg-brand-cream lg:hidden"
          >
            <nav className="mx-auto flex h-full max-w-lg flex-col overflow-y-auto px-5 py-7" aria-label="Mobile navigation">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-steel-500">
                Explore PSI
              </p>
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035, duration: 0.25, ease: easeOut }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between border-b border-navy-100 py-4 text-2xl font-semibold tracking-tight",
                      pathname.startsWith(link.href)
                        ? "text-brand-red"
                        : "text-brand-ink"
                    )}
                  >
                    {link.label}
                    <span className="text-sm font-normal text-steel-400">0{index + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 grid gap-3">
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>Request service</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/apply-to-be-a-vendor" onClick={() => setMobileOpen(false)}>Apply to be a vendor</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
