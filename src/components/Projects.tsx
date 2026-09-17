"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { projects, type Project } from "@/data/content"
import { EASE } from "@/lib/motion"
import { RevealText, FadeUp } from "./motion/Reveal"
import { useIntro } from "./motion/IntroProvider"

gsap.registerPlugin(ScrollTrigger, useGSAP)

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
      <p className="text-ink-muted text-sm leading-relaxed flex-1 mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11px] border border-border text-ink-muted px-2.5 py-1 rounded-full">
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

// Home-page panel — large, numbered, opens GitHub on click
function Panel({ project, index }: { project: Project; index: number }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="view"
      className="group relative flex flex-col justify-between shrink-0 w-full lg:w-[min(560px,42vw)] lg:min-h-[62vh] min-h-[420px] p-8 md:p-10 bg-card border border-border rounded-lg overflow-hidden transition-colors duration-500 hover:border-accent/50"
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-accent-light/40 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
      />
      <div className="relative">
        <div className="flex items-center justify-between mb-8">
          <span className="font-serif text-4xl text-ink-muted/60 font-light tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.featured && (
            <span className="text-[10px] tracking-[0.18em] text-accent uppercase font-medium">Featured</span>
          )}
        </div>
        <h3 className="font-serif text-3xl md:text-[2.2rem] font-normal text-ink leading-[1.15] mb-5 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-ink-muted text-sm md:text-[15px] leading-relaxed lg:line-clamp-4">{project.description}</p>
      </div>
      {project.metric && (
        <div className="relative my-8">
          <p className="font-serif text-[clamp(3rem,5vw,4.5rem)] font-light leading-none text-ink tracking-tight">
            {project.metric.value}
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-ink-muted mt-2">{project.metric.label}</p>
        </div>
      )}
      <div className="relative flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-[11px] border border-border text-ink-muted px-2.5 py-1 rounded-full bg-cream/60">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-ink-muted group-hover:text-accent transition-colors shrink-0">{GITHUB_ICON}</span>
      </div>
    </a>
  )
}

export default function Projects() {
  const { ready } = useIntro()
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const shown = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured).slice(0, 2)]

  // Desktop only: pin the section and translate the track horizontally as the
  // user scrolls. Mobile and reduced-motion get a plain vertical stack.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current
        const section = sectionRef.current
        if (!track || !section) return
        const distance = () => track.scrollWidth - section.clientWidth
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })
      })
    },
    { scope: sectionRef }
  )

  // Layout shifts once the preloader lifts and fonts settle — re-measure
  useEffect(() => {
    if (ready) ScrollTrigger.refresh()
  }, [ready])

  return (
    <section ref={sectionRef} id="projects" className="relative bg-cream overflow-hidden lg:h-screen py-28 lg:py-0 lg:flex lg:items-center">
      <div ref={trackRef} className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-6 md:px-12 lg:pl-[max(3rem,calc((100vw-72rem)/2+3rem))] lg:pr-[12vw] w-full lg:w-max">
        {/* Intro panel */}
        <div className="shrink-0 lg:w-[38vw] flex flex-col justify-between lg:min-h-[62vh] mb-6 lg:mb-0">
          <div>
            <FadeUp>
              <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Work</p>
            </FadeUp>
            <RevealText
              as="h2"
              text="Selected Projects"
              className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] font-light text-ink leading-[0.95] max-w-[6ch]"
            />
          </div>
          <FadeUp delay={0.2} className="mt-10 lg:mt-0">
            <p className="text-ink-muted text-base leading-relaxed max-w-xs mb-6">
              Payments economics, position reconciliation, and financial intelligence — analysis built to be used.
            </p>
            <Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors">
              View all {projects.length}
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">→</span>
            </Link>
            <p className="hidden lg:block mt-10 text-[10px] tracking-[0.2em] uppercase text-ink-muted">Scroll to explore →</p>
          </FadeUp>
        </div>

        {shown.map((p, i) => (
          <Panel key={p.id} project={p} index={i} />
        ))}

        {/* End panel */}
        <Link
          href="/projects"
          className="group shrink-0 w-full lg:w-[min(420px,32vw)] lg:min-h-[62vh] min-h-[200px] rounded-lg border border-dashed border-border flex flex-col items-center justify-center gap-4 text-ink-muted hover:text-accent hover:border-accent/50 transition-colors duration-300"
        >
          <span className="font-serif text-6xl font-light">+{projects.length - shown.length}</span>
          <span className="text-sm font-medium inline-flex items-center gap-2">
            All projects
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </div>
    </section>
  )
}
