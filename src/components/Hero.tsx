"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { EASE } from "@/lib/motion"
import { skillGroups } from "@/data/content"
import { useIntro } from "./motion/IntroProvider"
import { RevealText } from "./motion/Reveal"
import Magnetic from "./motion/Magnetic"
import Mesh from "./motion/Mesh"
import Tilt from "./motion/Tilt"

const cards = [
  { value: "$141K", label: "Margin leakage found", sub: "Payments · PostgreSQL", tint: "bg-mint", rotate: -6, x: 0, y: 0 },
  { value: "$8.1M", label: "Exposure surfaced", sub: "Reconciliation · Power BI", tint: "bg-lilac", rotate: 4, x: 90, y: 120 },
  { value: "1,200+", label: "Dashboard users", sub: "Tableau · Excel", tint: "bg-apricot", rotate: -2, x: -40, y: 250 },
]

function Fade({ ready, delay, className = "", children }: { ready: boolean; delay: number; className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const tools = Array.from(new Set(skillGroups.flatMap((g) => g.skills))).slice(0, 18)
  const d = 0.2

  return (
    <section ref={ref} id="hero" className="relative min-h-screen bg-cream overflow-hidden">
      <Mesh opacity={0.85} />
      <div aria-hidden className="grain absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-28 min-h-screen flex flex-col">
        <div className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-14 lg:gap-8 items-center flex-1">
          {/* ── Copy ── */}
          <motion.div style={{ y: textY, opacity }}>
            <Fade ready={ready} delay={d} className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Data Analyst · Boston, MA
            </Fade>

            <h1 className="font-serif text-[clamp(3.6rem,8.2vw,7.4rem)] leading-[0.95] tracking-[-0.02em] text-ink">
              <RevealText as="span" text="Archit" animate={ready} delay={d + 0.1} className="block" />
              <span className="block italic whitespace-nowrap">
                <RevealText as="span" text="Kiran Kumar" animate={ready} delay={d + 0.3} className="inline" />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={ready ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: d + 0.9 }}
                  className="text-accent not-italic"
                >
                  .
                </motion.span>
              </span>
            </h1>

            <Fade ready={ready} delay={d + 0.9} className="mt-8 max-w-md text-ink-muted text-base md:text-lg leading-relaxed">
              MS Computer Science at Boston University. Previously Data Analyst at BU Spark and
              Millicent Technologies — SQL, Python, Power BI. Open to Data Analyst roles in 2026.
            </Fade>

            <Fade ready={ready} delay={d + 1.05} className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href="/projects"
                  className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-ink text-cream text-sm font-medium rounded-full overflow-hidden"
                >
                  <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                  <span className="relative">See the work</span>
                  <span className="relative transition-transform duration-500 group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/Archit_Kiran_Kumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-7 py-3.5 bg-card/70 backdrop-blur border border-border text-ink text-sm font-medium rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  Resume
                </a>
              </Magnetic>
            </Fade>
          </motion.div>

          {/* ── Floating stat cards ── */}
          <motion.div style={{ y: cardsY }} className="relative h-[420px] lg:h-[520px] hidden sm:block">
            {cards.map((c, i) => (
              <motion.div
                key={c.value}
                initial={{ opacity: 0, y: 60, rotate: c.rotate * 2 }}
                animate={ready ? { opacity: 1, y: 0, rotate: c.rotate } : { opacity: 0, y: 60, rotate: c.rotate * 2 }}
                transition={{ duration: 1.1, ease: EASE, delay: d + 0.7 + i * 0.15 }}
                className="absolute left-1/2 top-0 -translate-x-1/2"
                style={{ marginLeft: c.x, marginTop: c.y }}
              >
                <Tilt max={12} className="rounded-2xl">
                  <div className={`w-[280px] rounded-2xl p-6 ${c.tint} border border-white/60 shadow-[0_20px_60px_-20px_rgba(14,21,36,0.25)]`}>
                    <p className="font-serif text-5xl leading-none text-ink tracking-tight">{c.value}</p>
                    <p className="mt-3 text-sm font-medium text-ink">{c.label}</p>
                    <p className="mt-1 text-xs text-ink-muted">{c.sub}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Tool ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: d + 1.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-border/70 bg-cream/60 backdrop-blur-sm"
      >
        <div className="overflow-hidden whitespace-nowrap py-4 select-none" aria-hidden>
          <div className="marquee inline-flex" style={{ animationDuration: "50s" }}>
            {[...tools, ...tools].map((t, i) => (
              <span key={i} className="inline-flex items-center text-[12px] tracking-[0.14em] uppercase text-ink-muted">
                {t}
                <span className="mx-6 w-1 h-1 rounded-full bg-accent/60" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
