"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button']")) setIsHovering(true)
    }
    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button']")) setIsHovering(false)
    }

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onEnter)
    document.addEventListener("mouseout", onLeave)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onEnter)
      document.removeEventListener("mouseout", onLeave)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full bg-accent"
      animate={{
        x: pos.x - (isHovering ? 12 : 6),
        y: pos.y - (isHovering ? 12 : 6),
        width: isHovering ? 24 : 12,
        height: isHovering ? 24 : 12,
        opacity: isHovering ? 0.5 : 0.7,
      }}
      transition={{ type: "spring", stiffness: 600, damping: 35, mass: 0.3 }}
    />
  )
}
