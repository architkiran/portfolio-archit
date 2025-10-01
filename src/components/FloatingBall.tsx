"use client"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

interface BallProps {
  size: number
  duration?: number
}

export default function FloatingBall({ size, duration = 10 }: BallProps) {
  const controls = useAnimation()
  const [start, setStart] = useState<{ x: number; y: number } | null>(null)

  // Pick a random start position on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const startX = Math.random() * (window.innerWidth - size)
      const startY = Math.random() * (window.innerHeight - size)
      setStart({ x: startX, y: startY })
    }
  }, [size])

  // Animate to random positions forever
  useEffect(() => {
    if (!start || typeof window === "undefined") return

    async function animateBall() {
      while (true) {
        const x = Math.random() * (window.innerWidth - size)
        const y = Math.random() * (window.innerHeight - size)

        await controls.start({
          x,
          y,
          transition: {
            duration: duration + Math.random() * 5,
            ease: "easeInOut",
          },
        })
      }
    }

    animateBall()
  }, [controls, size, duration, start])

  if (!start) return null

  return (
    <motion.div
      initial={{ x: start.x, y: start.y }}
      animate={controls}
      className="absolute rounded-full"
      style={{
        backgroundColor: "white",
        width: size,
        height: size,
        filter: "blur(10px)", // smaller blur for softer balls
        opacity: 1,
      }}
    />
  )
}
