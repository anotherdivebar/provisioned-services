"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { easeOut } from "@/components/motion/animations";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-navy-950/90 shadow-xl shadow-black/20 backdrop-blur-xl"
          : "border-b border-transparent bg-navy-950/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 font-mono text-xs font-bold text-navy-950 transition-transform group-hover:scale-105">
            PS
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white sm:text-lg">
              {SITE.shortName}
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-steel-400 sm:block">
              Facility Support
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-white"
                    : "text-steel-400 hover:text-white"
                )}
              >
                {link.label}
                {active ? (
                  <span className="absolute inset-x-3 -bottom-[1.35rem] h-0.5 rounded-full bg-amber-500" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="secondary" size="sm" className="font-semibold">
            <Link href="/contact">Request Service</Link>
          </Button>
          <Button asChild size="sm" className="font-semibold shadow-md shadow-amber-500/15">
            <Link href="/apply-to-be-a-vendor">Apply to Be a Vendor</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2.5 text-white transition-colors hover:bg-white/5 lg:hidden"
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
            transition={{ duration: 0.25, ease: easeOut }}
            className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 border-t border-white/10 bg-navy-950/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex h-full flex-col gap-1 overflow-y-auto px-4 py-6" aria-label="Mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3, ease: easeOut }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-4 py-3.5 text-lg font-medium transition-colors",
                      pathname.startsWith(link.href)
                        ? "bg-white/10 text-white"
                        : "text-steel-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/contact">Request Service</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/apply-to-be-a-vendor">Apply to Be a Vendor</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
