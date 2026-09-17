"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { EASE } from "@/lib/motion"
import { useIntro } from "./motion/IntroProvider"
import { RevealChars } from "./motion/Reveal"
import Magnetic from "./motion/Magnetic"

const taglines = [
  "I turn messy data into clear decisions.",
  "Building dashboards that actually get used.",
  "Fintech analytics with a designer's eye.",
]

function RotatingLine({ lines, active }: { lines: string[]; active: boolean }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (!active) return
    const id = setInterval(() => setI((v) => (v + 1) % lines.length), 3400)
    return () => clearInterval(id)
  }, [active, lines.length])

  return (
    <span className="block overflow-hidden h-[3em] md:h-[1.5em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-110%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="block"
        >
          {lines[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function Fade({
  ready,
  delay,
  className = "",
  children,
}: {
  ready: boolean
  delay: number
  className?: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const { ready } = useIntro()
  const ref = useRef<HTMLElement>(null)

  // Parallax: content drifts down and fades as the hero scrolls away
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  // A warm glow that lazily follows the cursor
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.4)
  const gx = useSpring(mx, { stiffness: 30, damping: 20 })
  const gy = useSpring(my, { stiffness: 30, damping: 20 })
  const glowLeft = useTransform(gx, (v) => `${v * 100}%`)
  const glowTop = useTransform(gy, (v) => `${v * 100}%`)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth)
      my.set(e.clientY / window.innerHeight)
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [mx, my])

  const d = 0.25 // base delay so the reveal emerges as the curtain lifts

  return (
    <section ref={ref} id="hero" className="relative min-h-screen bg-cream overflow-hidden">
      {/* ── Background ── */}
      <motion.div
        aria-hidden
        className="absolute w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: glowLeft,
          top: glowTop,
          background: "radial-gradient(circle, #F4E5D8 0%, rgba(244,229,216,0.4) 35%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#1C1625 1px, transparent 1px), linear-gradient(90deg, #1C1625 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div aria-hidden className="grain absolute inset-0 pointer-events-none" />

      {/* ── Content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-24 flex flex-col"
      >
        {/* Top meta */}
        <div className="flex items-start justify-between text-[11px] tracking-[0.2em] uppercase text-ink-muted">
          <Fade ready={ready} delay={d + 0.2}>
            Data &amp; Business Analytics
          </Fade>
          <Fade ready={ready} delay={d + 0.3} className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Boston, MA · Open to 2026 roles
          </Fade>
        </div>

        {/* Name */}
        <div className="flex-1 flex flex-col justify-center py-12">
          <h1 className="font-serif text-[clamp(4.75rem,11.5vw,10.5rem)] font-light text-ink leading-[0.92] tracking-[-0.02em]">
            <span className="block">
              <RevealChars text="Archit" animate={ready} delay={d} />
            </span>
            <span className="block font-medium">
              <RevealChars text="Kiran Kumar" animate={ready} delay={d + 0.18} />
            </span>
          </h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <Fade ready={ready} delay={d + 0.9} className="max-w-xl">
            <p className="text-ink-muted text-sm mb-3 tracking-wide">
              MS Computer Science @ Boston University
            </p>
            <div className="font-serif italic text-xl sm:text-2xl md:text-[1.75rem] text-ink font-normal md:whitespace-nowrap">
              <RotatingLine lines={taglines} active={ready} />
            </div>
          </Fade>

          <Fade ready={ready} delay={d + 1.05} className="flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="/projects"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-ink text-cream text-sm font-medium rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                <span className="relative">View my work</span>
                <span className="relative transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/Archit_Kiran_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 border border-ink/20 text-ink text-sm font-medium rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Resume
              </a>
            </Magnetic>
          </Fade>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: d + 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-ink-muted uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-ink-muted/0 via-ink-muted/60 to-ink-muted/0"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
