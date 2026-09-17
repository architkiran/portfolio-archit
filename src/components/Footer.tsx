"use client"

import { getLenis } from "./motion/SmoothScroll"

export default function Footer() {
  const toTop = () => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { duration: 1.4 })
    else window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border py-8 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-ink-muted">
        <p>Designed &amp; built by Archit Kiran Kumar · 2026</p>
        <p className="hidden md:block">Next.js · Tailwind CSS · Framer Motion · GSAP · Lenis</p>
        <button onClick={toTop} className="group inline-flex items-center gap-2 hover:text-accent transition-colors">
          Back to top
          <span className="transition-transform duration-500 group-hover:-translate-y-0.5">↑</span>
        </button>
      </div>
    </footer>
  )
}
