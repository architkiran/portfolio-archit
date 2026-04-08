"use client"

import { motion } from "framer-motion"
import { experience } from "@/data/content"

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-widest text-accent uppercase font-medium mb-4"
        >
          Career
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl font-light text-ink mb-16"
        >
          Experience
        </motion.h2>

        <div className="max-w-2xl space-y-0">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-8"
            >
              {/* Timeline column */}
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {i < experience.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-3 mb-0 min-h-[80px]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-14">
                <span className="text-xs tracking-widest text-ink-muted uppercase font-medium">
                  {exp.period}
                </span>
                <h3 className="font-serif text-2xl font-medium text-ink mt-1 mb-0.5">
                  {exp.company}
                </h3>
                <p className="text-accent text-sm font-medium mb-4">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                      <span className="text-accent mt-0.5 shrink-0">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
