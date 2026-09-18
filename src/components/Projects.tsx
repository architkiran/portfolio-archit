"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { projects, type Project } from "@/data/content"
import { EASE } from "@/lib/motion"
import { RevealText, FadeUp } from "./motion/Reveal"

const GITHUB_ICON = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

// Shared with /projects page — grid card
export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`group relative bg-card border border-border rounded-2xl flex flex-col
        hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(14,21,36,0.25)] transition-all duration-300
        ${featured ? "p-8" : "p-6"}`}
    >
      {featured && (
        <span className="inline-block text-[10px] tracking-[0.18em] text-accent uppercase font-medium mb-4">Featured</span>
      )}
      <h3 className={`font-serif text-ink leading-snug mb-3 group-hover:text-accent transition-colors duration-200 ${featured ? "text-3xl" : "text-2xl"}`}>
        {project.title}
      </h3>
      <p className="text-ink-muted text-sm leading-relaxed flex-1 mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11px] border border-border text-ink-muted px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-accent transition-colors w-fit">
        {GITHUB_ICON}
        View on GitHub
      </a>
    </motion.div>
  )
}

const tints = ["bg-mint", "bg-lilac", "bg-apricot", "bg-sky", "bg-accent-light"]

// One sticky card in the stack. As the next card arrives, this one scales
// down so the stack reads as depth.
function StackCard({ project, index, total, progress }: { project: Project; index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total
  const end = (index + 1) / total
  const scale = useTransform(progress, [start, end], [1, index === total - 1 ? 1 : 0.93])

  return (
    <div className="sticky top-24 md:top-28" style={{ zIndex: index + 1 }}>
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{ scale, transformOrigin: "top center" }}
        className={`group block rounded-3xl ${tints[index % tints.length]} border border-white/70 shadow-[0_30px_80px_-30px_rgba(14,21,36,0.3)] overflow-hidden`}
      >
        <div className="grid md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-8 p-8 md:p-12 min-h-[60vh]">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-2xl text-ink/50">{String(index + 1).padStart(2, "0")}</span>
              <span className="h-px flex-1 bg-ink/10" />
              {project.featured && <span className="text-[10px] tracking-[0.18em] uppercase text-ink/60">Featured</span>}
            </div>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight text-ink group-hover:text-accent transition-colors duration-300 mb-6">
              {project.title}
            </h3>
            <p className="text-ink/75 text-base leading-relaxed max-w-lg">{project.description}</p>
            <div className="mt-auto pt-8 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="text-[11px] bg-white/60 text-ink px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between md:items-end md:text-right">
            {project.metric && (
              <div>
                <p className="font-serif text-[clamp(3.5rem,8vw,7rem)] leading-none tracking-tight text-ink">{project.metric.value}</p>
                <p className="mt-3 text-[11px] tracking-[0.18em] uppercase text-ink/60 max-w-[18ch] md:ml-auto">{project.metric.label}</p>
              </div>
            )}
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-accent transition-colors w-fit md:ml-auto">
              {GITHUB_ICON}
              Open on GitHub
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </motion.a>
    </div>
  )
}

export default function Projects() {
  const shown = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured).slice(0, 2)]
  const stackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] })

  return (
    <section id="projects" className="relative bg-cream py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <FadeUp>
              <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Work</p>
            </FadeUp>
            <RevealText as="h2" text="Selected projects" className="font-serif text-5xl md:text-7xl tracking-tight text-ink leading-[1]" />
          </div>
          <FadeUp delay={0.2}>
            <Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors">
              View all {projects.length}
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">→</span>
            </Link>
          </FadeUp>
        </div>

        <div ref={stackRef} className="space-y-8 md:space-y-10">
          {shown.map((p, i) => (
            <StackCard key={p.id} project={p} index={i} total={shown.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}
