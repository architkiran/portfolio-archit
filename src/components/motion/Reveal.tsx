"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion"
import { EASE } from "@/lib/motion"

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div"

const lineVariants = {
  hidden: { y: "110%" },
  visible: (d: number) => ({
    y: "0%",
    transition: { duration: 1, ease: EASE, delay: d },
  }),
}

/**
 * Masked word reveal. Each word sits inside an overflow-hidden span and
 * slides up out of its own clip — the "editorial" text entrance.
 * Pass `animate` to control it manually (hero), otherwise it fires in view.
 */
export function RevealText({
  text,
  as = "p",
  className = "",
  delay = 0,
  stagger = 0.035,
  animate,
  once = true,
}: {
  text: string
  as?: Tag
  className?: string
  delay?: number
  stagger?: number
  animate?: boolean
  once?: boolean
}) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once, margin: "-10% 0px" })
  const show = animate ?? inView
  const Comp = motion[as] as typeof motion.p

  return (
    <Comp ref={ref as never} className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} aria-hidden>
          <span className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="inline-block"
              variants={lineVariants}
              custom={delay + i * stagger}
              initial="hidden"
              animate={show ? "visible" : "hidden"}
            >
              {word}
            </motion.span>
          </span>
          {i < text.split(" ").length - 1 && " "}
        </span>
      ))}
    </Comp>
  )
}

/** Character-level masked reveal, for the hero name. Words never break mid-word. */
export function RevealChars({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
  animate,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
  animate: boolean
}) {
  let idx = 0
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {text.split(" ").map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap" aria-hidden>
          {word.split("").map((ch, c) => {
            const d = delay + idx++ * stagger
            return (
              <span key={c} className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]">
                <motion.span
                  className="inline-block"
                  variants={lineVariants}
                  custom={d}
                  initial="hidden"
                  animate={animate ? "visible" : "hidden"}
                >
                  {ch}
                </motion.span>
              </span>
            )
          })}
          {w < text.split(" ").length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}

/** Simple fade-up for blocks; fires once in view. */
export function FadeUp({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ScrubWord({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
      {children}
    </motion.span>
  )
}

/**
 * Paragraph whose words brighten one by one as it scrolls through the
 * viewport — reading pace tied to scroll pace.
 */
export function ScrubText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] })
  const words = text.split(" ")
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <ScrubWord key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </ScrubWord>
      ))}
    </p>
  )
}
