"use client"

import Link from "next/link"
import { RevealText, FadeUp } from "./motion/Reveal"
import Timeline from "./Timeline"

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-12 md:gap-20">
          <div className="md:sticky md:top-32 self-start">
            <FadeUp>
              <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Career</p>
            </FadeUp>
            <RevealText
              as="h2"
              text="Where I've worked"
              className="font-serif text-5xl md:text-7xl tracking-tight text-ink leading-[1.05] mb-8"
            />
            <FadeUp delay={0.2}>
              <Link href="/experience" className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors">
                Full timeline
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">→</span>
              </Link>
            </FadeUp>
          </div>
          <Timeline />
        </div>
      </div>
    </section>
  )
}
