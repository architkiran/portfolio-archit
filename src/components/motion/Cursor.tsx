"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"

type Variant = "default" | "link" | "view" | "hidden"

// A single terracotta dot that grows into a soft ring on interactive elements
// and into a labelled disc on [data-cursor="view"] targets (project cards).
export default function Cursor() {
  const reduce = useReducedMotion()
  const [variant, setVariant] = useState<Variant>("hidden")
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 900, damping: 60, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 900, damping: 60, mass: 0.2 })

  useEffect(() => {
    if (reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    document.documentElement.classList.add("has-cursor")

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVariant((v) => (v === "hidden" ? "default" : v))
    }
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest("[data-cursor='view']")) setVariant("view")
      else if (t.closest("a, button, [role='button'], [data-cursor='link']")) setVariant("link")
      else setVariant("default")
    }
    const onLeave = () => setVariant("hidden")
    const onEnter = () => setVariant("default")

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onOver)
    document.documentElement.addEventListener("mouseleave", onLeave)
    document.documentElement.addEventListener("mouseenter", onEnter)
    return () => {
      document.documentElement.classList.remove("has-cursor")
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      document.documentElement.removeEventListener("mouseenter", onEnter)
    }
  }, [reduce, x, y])

  if (reduce) return null

  const size = { default: 10, link: 40, view: 88, hidden: 0 }[variant]

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center rounded-full"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-accent text-cream text-[10px] font-medium tracking-[0.18em] uppercase"
        animate={{
          width: size,
          height: size,
          opacity: variant === "hidden" ? 0 : variant === "link" ? 0.22 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.5 }}
      >
        {variant === "view" && (
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Open
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  )
}
