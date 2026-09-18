"use client"

import PageHeader from "@/components/PageHeader"
import Timeline from "@/components/Timeline"
import EducationTiles from "@/components/EducationTiles"
import { RevealText, FadeUp } from "@/components/motion/Reveal"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-cream pb-32">
      <PageHeader
        label="Career"
        title="Experience"
        intro="Roles where I've built data tools, automated workflows, and helped teams make faster, better-informed decisions."
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <section className="grid md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-12 md:gap-20 mb-32">
          <div className="md:sticky md:top-32 self-start">
            <FadeUp>
              <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Work</p>
            </FadeUp>
            <RevealText as="h2" text="Where I've worked" className="font-serif text-4xl md:text-6xl tracking-tight text-ink leading-[1.05]" />
          </div>
          <Timeline />
        </section>

        <section>
          <FadeUp>
            <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Education</p>
          </FadeUp>
          <RevealText as="h2" text="Academic background" className="font-serif text-4xl md:text-6xl tracking-tight text-ink leading-[1.05] mb-12" />
          <EducationTiles />
        </section>
      </div>
    </main>
  )
}
