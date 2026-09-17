"use client"

import { motion } from "framer-motion"
import { skillGroups } from "@/data/content"
import { EASE } from "@/lib/motion"
import { RevealText, FadeUp } from "./motion/Reveal"

function Marquee({ items, reverse = false, duration = 60 }: { items: string[]; reverse?: boolean; duration?: number }) {
  const row = items.map((s, i) => (
    <span key={`${s}-${i}`} className="inline-flex items-center">
      <span className="font-serif italic text-4xl md:text-6xl font-light text-ink/80">{s}</span>
      <span className="mx-6 md:mx-8 w-1.5 h-1.5 rounded-full bg-accent" />
    </span>
  ))
  return (
    <div className="overflow-hidden whitespace-nowrap select-none" aria-hidden>
      <div
        className={`inline-flex ${reverse ? "marquee-reverse" : "marquee"}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {row}
        {row}
      </div>
    </div>
  )
}

export default function Skills() {
  const all = Array.from(new Set(skillGroups.flatMap((g) => g.skills)))
  const half = Math.ceil(all.length / 2)

  return (
    <section id="skills" className="py-32 md:py-40 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
        <FadeUp>
          <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Capabilities</p>
        </FadeUp>
        <RevealText
          as="h2"
          text="Tools I think in"
          className="font-serif text-5xl md:text-7xl font-light text-ink leading-[1.05]"
        />
      </div>

      {/* Marquee strips */}
      <div className="space-y-4 mb-24 -rotate-1 origin-left scale-[1.02]">
        <Marquee items={all.slice(0, half)} duration={70} />
        <Marquee items={all.slice(half)} reverse duration={80} />
      </div>

      {/* Grouped list */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="border-t border-border">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.06 }}
              className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] gap-3 md:gap-10 py-7 border-b border-border group"
            >
              <h3 className="text-[11px] tracking-[0.18em] text-ink-muted uppercase font-medium pt-1 group-hover:text-accent transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="text-base md:text-lg text-ink hover:text-accent transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
