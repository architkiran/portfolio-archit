"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const taglines = [
  "I turn messy data into clear decisions.",
  "Building dashboards that actually get used.",
  "Fintech analytics + a love for clean design.",
]

function Typewriter({ phrases }: { phrases: string[] }) {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((i) => i + 1), 52)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2600)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((i) => i - 1), 26)
    } else {
      setDeleting(false)
      setPhraseIdx((i) => (i + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx, phrases])

  return (
    <span>
      {phrases[phraseIdx].slice(0, charIdx)}
      <span className="opacity-50">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
    >
      {/* --- Layered background --- */}

      {/* Large warm bleed — top right */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 700,
          height: 700,
          top: "-20%",
          right: "-15%",
          background: "radial-gradient(circle, #F4E5D8 0%, transparent 70%)",
          opacity: 0.9,
        }}
        animate={{ x: [0, 18, -8, 0], y: [0, -12, 16, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Terracotta accent orb — mid left */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 420,
          height: 420,
          top: "30%",
          left: "-10%",
          background: "radial-gradient(circle, #C8622A22 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, -20, 12, 0], y: [0, 24, -14, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom warm pool */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 320,
          bottom: "-8%",
          left: "20%",
          background: "radial-gradient(ellipse, #F2EDE8 0%, transparent 70%)",
          opacity: 0.8,
        }}
        animate={{ x: [0, 14, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle fine grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#1C1625 1px, transparent 1px), linear-gradient(90deg, #1C1625 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "160px 160px",
        }}
      />

      {/* Thin diagonal accent line — decorative */}
      <div
        className="absolute pointer-events-none opacity-10"
        style={{
          width: 1,
          height: "55vh",
          top: "10%",
          right: "12%",
          background: "linear-gradient(to bottom, transparent, #C8622A, transparent)",
          transform: "rotate(12deg)",
        }}
      />

      {/* --- Content --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-8"
        >
          Portfolio · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-[clamp(3.5rem,10vw,7rem)] font-light text-ink leading-[1.03] tracking-tight mb-7"
        >
          Archit
          <br />
          <em className="not-italic font-medium">Kiran Kumar</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-ink-muted text-base md:text-lg mb-3 tracking-wide"
        >
          MS Computer Science @ Boston University · Data &amp; Business Analytics
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="text-ink font-medium text-lg md:text-xl mb-12 h-8"
        >
          <Typewriter phrases={taglines} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/projects"
            className="px-7 py-3 bg-accent text-cream text-sm font-medium rounded hover:bg-accent/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="/Archit_Kiran_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-ink/25 text-ink text-sm font-medium rounded hover:border-accent hover:text-accent transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-ink-muted uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-ink-muted/0 via-ink-muted/50 to-ink-muted/0"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
