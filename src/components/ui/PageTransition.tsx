"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import type { ReactNode } from "react";

/**
 * Fades each route in on navigation. Keyed by pathname so it
 * re-runs whenever the page changes.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
