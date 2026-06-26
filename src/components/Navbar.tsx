"use client";

import { navLinks, profile } from "@/data/portfolio";
import { Code2, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm font-bold"
        >
          <span className="from-cyan to-violet text-bg grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br shadow-[0_0_20px_-2px_var(--color-violet)] transition-transform group-hover:scale-110">
            <Code2 size={18} strokeWidth={2.5} />
          </span>
          <span className="hidden sm:inline">
            {profile.name.split(" ")[0]}
            <span className="text-cyan">.dev</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/8"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="from-cyan to-violet text-bg hidden rounded-xl bg-linear-to-r px-4 py-2 text-sm font-semibold shadow-[0_0_24px_-6px_var(--color-violet)] transition-transform hover:scale-105 md:inline-block"
          >
            Hire Me
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-text grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute inset-x-4 top-18 rounded-2xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:text-text block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 ${
                      isActive(link.href) ? "text-cyan" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="from-cyan to-violet text-bg mt-1 block rounded-xl bg-linear-to-r px-4 py-3 text-center text-sm font-semibold"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
