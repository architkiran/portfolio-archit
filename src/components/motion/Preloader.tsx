"use client"

import { useEffect, useLayoutEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion, useMotionValue } from "framer-motion"
import { EASE, INTRO_KEY } from "@/lib/motion"
import { useIntro } from "./IntroProvider"
import Mesh from "./Mesh"

// First-visit-only intro: ink curtain, counter to 100, name reveal, then the
// curtain lifts and hands off to the hero via IntroProvider.
export default function Preloader() {
  const { setReady } = useIntro()
  const reduce = useReducedMotion()
  const [skipped, setSkipped] = useState(false)
  const [show, setShow] = useState(true)
  const [count, setCount] = useState(0)
  const progress = useMotionValue(0)

  // Decide before first paint so returning visitors never see the curtain
  useLayoutEffect(() => {
    if (reduce || sessionStorage.getItem(INTRO_KEY)) {
      setSkipped(true)
      setReady(true)
    }
  }, [reduce, setReady])

  useEffect(() => {
    if (skipped) return
    document.documentElement.classList.add("intro-lock")
    const start = performance.now()
    const duration = 1300
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * 100))
      progress.set(eased)
      if (p < 1) raf = requestAnimationFrame(tick)
      else {
        setTimeout(() => {
          sessionStorage.setItem(INTRO_KEY, "1")
          setShow(false)
          setReady(true)
        }, 350)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [skipped, setReady, progress])

  if (skipped) return null

  return (
    <AnimatePresence onExitComplete={() => document.documentElement.classList.remove("intro-lock")}>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] bg-cream text-ink flex items-center justify-center"
          exit={{ y: "-100%", borderRadius: "0 0 50% 50% / 0 0 8vh 8vh" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <Mesh opacity={0.9} />
          <div className="absolute top-6 left-6 md:top-8 md:left-12 text-[10px] tracking-[0.22em] uppercase text-ink-muted">
            Archit Kiran Kumar
          </div>
          <div className="absolute top-6 right-6 md:top-8 md:right-12 text-[10px] tracking-[0.22em] uppercase text-ink-muted">
            Portfolio · 2026
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="relative font-serif text-[clamp(2rem,5vw,4rem)] tracking-tight text-center px-6"
          >
            Data, <em className="italic text-accent">designed</em> to be understood.
          </motion.p>

          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 font-serif text-[clamp(3rem,10vw,7rem)] leading-none tabular-nums text-ink">
            {String(count).padStart(3, "0")}
          </div>

          <motion.div
            className="absolute bottom-0 left-0 w-full h-px bg-accent origin-left"
            style={{ scaleX: progress }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
