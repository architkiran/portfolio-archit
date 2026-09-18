"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { EASE } from "@/lib/motion"
import PageHeader from "@/components/PageHeader"
import EducationTiles from "@/components/EducationTiles"
import Skills from "@/components/Skills"
import Tilt from "@/components/motion/Tilt"
import { RevealText, FadeUp, ScrubText } from "@/components/motion/Reveal"

const beyondTech = [
  { title: "Fitness & Discipline", text: "Regular training builds the focus and consistency that carry into my professional work." },
  { title: "Team Collaboration", text: "I thrive in collaborative environments, valuing clear communication and shared ownership." },
  { title: "Continuous Learning", text: "Always curious — engaged with new technologies, frameworks, and ideas to expand my thinking." },
  { title: "Global Perspective", text: "Exposure to diverse teams and cultures has given me a broader lens on problem-solving." },
  { title: "Sustainable Living", text: "I care about sustainability and participate in community awareness programs." },
  { title: "Problem-Solving Mindset", text: "I enjoy breaking down complex problems into elegant, scalable solutions." },
]

const paragraphs = [
  "I'm an international student from India pursuing my Master's in Computer Science at Boston University (Class of 2027), with a deep focus on data analytics and fintech — where numbers tell stories and dashboards drive decisions.",
  "My work sits at the intersection of rigorous data engineering and human-readable design. I believe the best analysis is the kind that gets used — and that means building tools that are not just accurate, but intuitive and clear.",
  "Most recently a Data Analyst at BU Spark, and previously an intern at Millicent Technologies and InternPe, where I built financial dashboards, automated reconciliation pipelines, and brought structure to messy data problems that real teams depended on every day.",
]

const tints = ["bg-mint", "bg-sky", "bg-lilac", "bg-apricot", "bg-accent-light", "bg-card"]

export default function AboutPage() {
  const photoRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <main className="min-h-screen bg-cream pb-32">
      <PageHeader label="About" title="Hello, I'm Archit" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ── Bio ── */}
        <section className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-14 md:gap-20 items-start mb-32">
          <div className="md:sticky md:top-32">
            <motion.div
              ref={photoRef}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.3, ease: EASE, delay: 0.7 }}
              className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl"
            >
              <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
                <Image src="/profile.jpg" alt="Archit Kiran Kumar" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
              </motion.div>
            </motion.div>
            <FadeUp delay={0.3} className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open to Data Analyst roles · 2026–2027
            </FadeUp>
          </div>
          <div className="space-y-6 md:pt-4">
            {paragraphs.map((t, i) => (
              <ScrubText key={i} text={t} className={`leading-relaxed text-ink ${i === 0 ? "text-xl md:text-2xl" : "text-base md:text-lg"}`} />
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section className="mb-32">
          <FadeUp>
            <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Education</p>
          </FadeUp>
          <RevealText as="h2" text="Academic background" className="font-serif text-4xl md:text-6xl tracking-tight text-ink leading-[1.05] mb-12" />
          <EducationTiles />
        </section>
      </div>

      {/* ── Skills (shared bento) ── */}
      <Skills />

      {/* ── Beyond the work ── */}
      <section className="py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeUp>
            <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Beyond the work</p>
          </FadeUp>
          <RevealText as="h2" text="Who I am" className="font-serif text-4xl md:text-6xl tracking-tight text-ink leading-[1.05] mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {beyondTech.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.07 }}
              >
                <Tilt max={5} className="h-full rounded-3xl">
                  <div className={`h-full rounded-3xl p-7 ${tints[i % tints.length]} border border-white/70`}>
                    <span className="font-serif text-2xl text-ink/40 block mb-6">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-2xl text-ink mb-2">{item.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{item.text}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
