"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-warm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xs tracking-widest text-accent uppercase font-medium mb-4"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Photo column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-5"
          >
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-cream shadow-md">
              <Image
                src="/profile.jpg"
                alt="Archit Kiran Kumar"
                width={176}
                height={176}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent-light/50 text-accent rounded-full px-4 py-1.5 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Data Analytics Internships · Summer 2026
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <h2 className="font-serif text-5xl md:text-6xl font-light text-ink leading-tight mb-8">
              Hello, I&apos;m <em className="not-italic font-medium">Archit</em>
            </h2>

            <div className="space-y-4 text-ink-muted leading-relaxed text-base md:text-lg">
              <p>
                I&apos;m an international student from India pursuing my Master&apos;s in Computer
                Science at Boston University (Class of 2027), with a deep focus on data analytics
                and fintech — where numbers tell stories and dashboards drive decisions.
              </p>
              <p>
                My work sits at the intersection of rigorous data engineering and human-readable
                design. I believe the best analysis is the kind that gets used — and that means
                building tools that are not just accurate, but intuitive and clear.
              </p>
              <p>
                Previously interned at Millicent Technologies and InternPe, where I built financial
                dashboards, automated reconciliation pipelines, and brought structure to messy
                data problems that real teams depended on every day.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
