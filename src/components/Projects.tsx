"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { projects, type Project } from "@/data/content"

const GITHUB_ICON = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative bg-card border border-border rounded-lg flex flex-col
        hover:-translate-y-1 hover:shadow-md transition-all duration-300
        hover:border-l-[3px] hover:border-l-accent
        ${featured ? "p-8" : "p-6"}`}
    >
      {featured && (
        <span className="inline-block text-[10px] tracking-[0.18em] text-accent uppercase font-medium mb-4">
          Featured
        </span>
      )}

      <h3
        className={`font-serif text-ink leading-snug mb-3 group-hover:text-accent transition-colors duration-200
          ${featured ? "text-2xl md:text-[1.6rem]" : "text-xl"}`}
      >
        {project.title}
      </h3>

      <p className="text-ink-muted text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] border border-border text-ink-muted px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-accent transition-colors w-fit"
      >
        {GITHUB_ICON}
        View on GitHub
      </a>
    </motion.div>
  )
}

// Home page — top 5 only
export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const topRegular = projects.filter((p) => !p.featured).slice(0, 3)

  return (
    <section id="projects" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] tracking-[0.18em] text-accent uppercase font-medium mb-4"
        >
          Work
        </motion.p>
        <div className="flex items-end justify-between mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-light text-ink"
          >
            Selected Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/projects"
              className="text-sm font-medium text-ink-muted hover:text-accent transition-colors hidden md:flex items-center gap-1.5 group"
            >
              View all 10
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {topRegular.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="flex md:hidden">
          <Link
            href="/projects"
            className="text-sm font-medium text-accent border border-accent/30 px-5 py-2.5 rounded hover:bg-accent-light transition-colors"
          >
            View all 10 projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
