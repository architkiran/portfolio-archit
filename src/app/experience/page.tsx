"use client"

import { motion } from "framer-motion"
import { experience, education } from "@/data/content"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-cream pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] tracking-[0.18em] text-accent uppercase font-medium mb-4"
        >
          Career
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-5xl md:text-7xl font-light text-ink mb-5"
        >
          Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-ink-muted text-base max-w-xl mb-20 leading-relaxed"
        >
          Roles where I&apos;ve built data tools, automated workflows, and helped teams make
          faster, better-informed decisions.
        </motion.p>

        {/* Work Experience Timeline */}
        <section className="mb-24 max-w-3xl">
          <p className="text-[11px] tracking-[0.18em] text-ink-muted uppercase font-medium mb-8 pb-3 border-b border-border">
            Work Experience
          </p>
          <div>
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex gap-8"
              >
                {/* Timeline spine */}
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 shrink-0 ring-4 ring-cream" />
                  {i < experience.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2 min-h-[100px]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-14">
                  <span className="text-[11px] tracking-widest text-ink-muted uppercase font-medium">
                    {exp.period}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-ink mt-1 mb-0.5">
                    {exp.company}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-4">{exp.role}</p>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                        <span className="text-accent/60 mt-0.5 shrink-0">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="max-w-3xl">
          <p className="text-[11px] tracking-[0.18em] text-ink-muted uppercase font-medium mb-8 pb-3 border-b border-border">
            Education
          </p>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-7 hover:border-accent/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <h3 className="font-serif text-2xl font-medium text-ink">{edu.school}</h3>
                  <span className="text-xs text-ink-muted tracking-wide shrink-0">{edu.period}</span>
                </div>
                <p className="text-accent text-sm font-medium mb-3">{edu.degree}</p>
                <p className="text-ink-muted text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
