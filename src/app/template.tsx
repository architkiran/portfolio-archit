"use client"

import { motion, useReducedMotion } from "framer-motion"
import { EASE } from "@/lib/motion"

// Re-mounts on every route change: a cream curtain lifts to reveal the page.
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()
  return (
    <>
      {!reduce && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[90] bg-warm pointer-events-none origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
        />
      )}
      {children}
    </>
  )
}
