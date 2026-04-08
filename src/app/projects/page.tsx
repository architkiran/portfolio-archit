"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/content"
import { ProjectCard } from "@/components/Projects"

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

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
          All Work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-5xl md:text-7xl font-light text-ink mb-5"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-ink-muted text-base max-w-xl mb-16 leading-relaxed"
        >
          A full collection of work spanning financial analytics, data pipelines, machine learning,
          and secure systems engineering.
        </motion.p>

        {/* Featured */}
        <p className="text-[11px] tracking-[0.18em] text-ink-muted uppercase font-medium mb-5 pb-3 border-b border-border">
          Featured
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
        </div>

        {/* All others */}
        <p className="text-[11px] tracking-[0.18em] text-ink-muted uppercase font-medium mb-5 pb-3 border-b border-border">
          All Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </main>
  )
}
