"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { EASE } from "@/lib/motion"
import { RevealText, ScrubText, FadeUp } from "./motion/Reveal"

const paragraphs = [
  "I'm an international student from India pursuing my Master's in Computer Science at Boston University (Class of 2026), with a deep focus on data analytics and fintech — where numbers tell stories and dashboards drive decisions.",
  "My work sits at the intersection of rigorous data engineering and human-readable design. I believe the best analysis is the kind that gets used — and that means building tools that are not just accurate, but intuitive and clear.",
  "Most recently a Data Analyst at BU Spark, and previously an intern at Millicent Technologies and InternPe, where I built financial dashboards, automated reconciliation pipelines, and brought structure to messy data problems that real teams depended on every day.",
]

export default function About() {
  const photoRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section id="about" className="py-32 md:py-40 bg-warm">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeUp>
          <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">About</p>
        </FadeUp>

        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-14 md:gap-20 items-start">
          {/* Photo — clip reveal + slow parallax */}
          <div className="md:sticky md:top-32">
            <motion.div
              ref={photoRef}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.3, ease: EASE }}
              className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm"
            >
              <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
                <Image src="/profile.jpg" alt="Archit Kiran Kumar" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" priority={false} />
              </motion.div>
            </motion.div>
            <FadeUp delay={0.3} className="mt-6 flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open to Data Analyst roles · 2026
            </FadeUp>
          </div>

          {/* Text column */}
          <div>
            <RevealText
              as="h2"
              text="Hello, I'm Archit"
              className="font-serif text-5xl md:text-7xl font-light text-ink leading-[1.05] mb-10"
            />
            <div className="space-y-6">
              {paragraphs.map((t, i) => (
                <ScrubText
                  key={i}
                  text={t}
                  className={`leading-relaxed text-ink ${i === 0 ? "text-xl md:text-2xl font-serif" : "text-base md:text-lg"}`}
                />
              ))}
            </div>
            <FadeUp delay={0.1} className="mt-12">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors"
              >
                More about me
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">→</span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
