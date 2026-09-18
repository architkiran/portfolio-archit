"use client"

import { motion } from "framer-motion"
import { education } from "@/data/content"
import { EASE } from "@/lib/motion"
import Tilt from "./motion/Tilt"

const tints = ["bg-sky", "bg-mint"]

export default function EducationTiles() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {education.map((edu, i) => (
        <motion.div
          key={edu.school}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
        >
          <Tilt max={5} className="h-full rounded-3xl">
            <div className={`h-full rounded-3xl p-8 ${tints[i % tints.length]} border border-white/70 flex flex-col`}>
              <span className="text-[11px] tracking-[0.18em] uppercase text-ink/60 mb-6">{edu.period}</span>
              <h3 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-2">{edu.school}</h3>
              <p className="text-sm font-medium text-ink mb-4">{edu.degree}</p>
              <p className="text-sm text-ink/70 leading-relaxed mt-auto">{edu.description}</p>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  )
}
