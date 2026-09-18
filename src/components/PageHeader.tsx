"use client"

import { motion } from "framer-motion"
import { EASE } from "@/lib/motion"
import { RevealText } from "./motion/Reveal"
import Mesh from "./motion/Mesh"

// Subpage header: pastel mesh fading into the page, masked title reveal.
// Delays are tuned to land just as the route curtain finishes lifting.
export default function PageHeader({
  label,
  title,
  intro,
  children,
}: {
  label: string
  title: string
  intro?: string
  children?: React.ReactNode
}) {
  return (
    <header className="relative overflow-hidden pt-36 md:pt-44 pb-14 md:pb-20">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ maskImage: "linear-gradient(to bottom, black 20%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent)" }}
      >
        <Mesh opacity={0.7} />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6"
        >
          {label}
        </motion.p>
        <RevealText
          as="h1"
          text={title}
          animate
          delay={0.45}
          className="font-serif text-[clamp(3.2rem,9vw,7.5rem)] tracking-tight text-ink leading-[0.95] mb-6"
        />
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
            className="text-ink-muted text-base md:text-lg leading-relaxed max-w-xl"
          >
            {intro}
          </motion.p>
        )}
        {children}
      </div>
    </header>
  )
}
