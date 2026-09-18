"use client"

import { projects } from "@/data/content"
import { ProjectCard } from "@/components/Projects"
import PageHeader from "@/components/PageHeader"
import { FadeUp } from "@/components/motion/Reveal"

const tints = ["bg-mint", "bg-lilac", "bg-apricot"]

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <main className="min-h-screen bg-cream pb-32">
      <PageHeader
        label="All work"
        title="Projects"
        intro="A full collection of work spanning financial analytics, data pipelines, machine learning, and secure systems engineering."
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeUp>
          <p className="text-[11px] tracking-[0.18em] text-ink-muted uppercase font-medium mb-6 pb-4 border-b border-border">
            Featured
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} featured tint={tints[i % tints.length]} />
          ))}
        </div>

        <FadeUp>
          <p className="text-[11px] tracking-[0.18em] text-ink-muted uppercase font-medium mb-6 pb-4 border-b border-border">
            All projects
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </main>
  )
}
