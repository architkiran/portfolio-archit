"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { education, skillGroups } from "@/data/content"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
})

const beyondTech = [
  { title: "Fitness & Discipline", text: "Regular training builds the focus and consistency that carry into my professional work." },
  { title: "Team Collaboration", text: "I thrive in collaborative environments, valuing clear communication and shared ownership." },
  { title: "Continuous Learning", text: "Always curious — engaged with new technologies, frameworks, and ideas to expand my thinking." },
  { title: "Global Perspective", text: "Exposure to diverse teams and cultures has given me a broader lens on problem-solving." },
  { title: "Sustainable Living", text: "I care about sustainability and participate in community awareness programs." },
  { title: "Problem-Solving Mindset", text: "I enjoy breaking down complex problems into elegant, scalable solutions." },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Hero row ── */}
        <div className="grid md:grid-cols-[220px_1fr] gap-14 items-start mb-24">
          <motion.div {...fadeUp(0)} className="flex flex-col items-center md:items-start gap-5">
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-warm shadow-md">
              <Image
                src="/profile.jpg"
                alt="Archit Kiran Kumar"
                width={176}
                height={176}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent-light/50 text-accent rounded-full px-4 py-1.5 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open to Internships · Summer 2026
            </div>
          </motion.div>

          <div>
            <motion.p {...fadeUp(0.05)} className="text-[11px] tracking-[0.18em] text-accent uppercase font-medium mb-4">
              About
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="font-serif text-5xl md:text-7xl font-light text-ink mb-8 leading-tight">
              Hello, I&apos;m <em className="not-italic font-medium">Archit</em>
            </motion.h1>
            <motion.div {...fadeUp(0.2)} className="space-y-4 text-ink-muted leading-relaxed text-base md:text-lg max-w-2xl">
              <p>
                I&apos;m an international student from India pursuing my Master&apos;s in Computer Science
                at Boston University (Class of 2027), with a deep focus on data analytics and
                fintech — where numbers tell stories and dashboards drive decisions.
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
            </motion.div>
          </div>
        </div>

        {/* ── Education ── */}
        <section className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.18em] text-accent uppercase font-medium mb-4"
          >
            Education
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light text-ink mb-10"
          >
            Academic Background
          </motion.h2>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-7 hover:border-accent/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
                  <h3 className="font-serif text-2xl font-medium text-ink">{edu.school}</h3>
                  <span className="text-xs text-ink-muted tracking-wide">{edu.period}</span>
                </div>
                <p className="text-accent text-sm font-medium mb-3">{edu.degree}</p>
                <p className="text-ink-muted text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.18em] text-accent uppercase font-medium mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light text-ink mb-10"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <h3 className="text-[11px] tracking-[0.15em] text-ink-muted uppercase font-medium mb-4 pb-3 border-b border-border">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-medium text-ink bg-warm border border-border px-3 py-1.5 rounded-full hover:border-accent hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Beyond Tech ── */}
        <section>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.18em] text-accent uppercase font-medium mb-4"
          >
            Beyond the Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light text-ink mb-10"
          >
            Who I Am
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {beyondTech.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/40 transition-colors"
              >
                <h3 className="font-serif text-lg font-medium text-ink mb-2">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
