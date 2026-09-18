"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { experience } from "@/data/content"
import { EASE } from "@/lib/motion"
import { RevealText, FadeUp } from "./motion/Reveal"

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.75", "end 0.6"] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="py-32 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-12 md:gap-20">
          <div className="md:sticky md:top-32 self-start">
            <FadeUp>
              <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Career</p>
            </FadeUp>
            <RevealText
              as="h2"
              text="Where I've worked"
              className="font-serif text-5xl md:text-7xl tracking-tight text-ink leading-[1.05] mb-8"
            />
            <FadeUp delay={0.2}>
              <Link href="/experience" className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors">
                Full timeline
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">→</span>
              </Link>
            </FadeUp>
          </div>

          <div ref={listRef} className="relative pl-8 md:pl-12">
            {/* Timeline line draws with scroll */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />
            <motion.div style={{ scaleY: lineScale }} className="absolute left-0 top-2 bottom-2 w-px bg-accent origin-top" />

            {experience.map((exp, i) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.05 }}
                className={`relative ${i < experience.length - 1 ? "pb-16" : ""}`}
              >
                <span className="absolute -left-8 md:-left-12 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cream border-2 border-accent" />
                <span className="text-[11px] tracking-[0.18em] text-ink-muted uppercase font-medium">{exp.period}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-ink mt-2 mb-1">{exp.company}</h3>
                <p className="text-accent text-sm font-medium mb-6">{exp.role}</p>
                <ul className="space-y-3">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4 text-[15px] text-ink-muted leading-relaxed">
                      <span className="text-accent mt-[3px] shrink-0 text-xs">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
