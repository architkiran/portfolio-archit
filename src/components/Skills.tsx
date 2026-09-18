"use client"

import { motion } from "framer-motion"
import { skillGroups } from "@/data/content"
import { EASE } from "@/lib/motion"
import { RevealText, FadeUp } from "./motion/Reveal"
import Tilt from "./motion/Tilt"

const tints = ["bg-sky", "bg-mint", "bg-lilac", "bg-apricot", "bg-card"]
// Bento spans: first tile is wide, the rest fill in
const spans = ["md:col-span-2", "", "", "md:col-span-2", ""]

export default function Skills() {
  return (
    <section id="skills" className="py-32 md:py-40 bg-warm">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeUp>
          <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Capabilities</p>
        </FadeUp>
        <RevealText as="h2" text="Tools I think in" className="font-serif text-5xl md:text-7xl tracking-tight text-ink leading-[1] mb-16" />

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
              className={spans[i] ?? ""}
            >
              <Tilt max={5} className="h-full rounded-3xl">
                <div className={`h-full rounded-3xl p-7 md:p-8 ${tints[i % tints.length]} border border-white/70`}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-[11px] tracking-[0.18em] uppercase font-medium text-ink/70">{group.category}</h3>
                    <span className="font-serif text-2xl text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {group.skills.map((s) => (
                      <span key={s} className="font-serif text-2xl md:text-[1.7rem] text-ink hover:text-accent transition-colors cursor-default">{s}</span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
