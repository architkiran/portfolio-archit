"use client"

import { contact } from "@/data/content"
import { RevealText, FadeUp } from "./motion/Reveal"
import Magnetic from "./motion/Magnetic"
import Mesh from "./motion/Mesh"

const rows = [
  { label: "LinkedIn", display: "in/archit-kiran-kumar", href: contact.linkedin },
  { label: "GitHub", display: "@architkiran", href: contact.github },
  { label: "Resume", display: "Download PDF", href: "/Archit_Kiran_Kumar_Resume.pdf" },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="relative rounded-[2rem] overflow-hidden border border-white/70 bg-card">
            <Mesh opacity={0.9} />
            <div aria-hidden className="grain absolute inset-0 pointer-events-none" />
            <div className="relative p-8 md:p-16 lg:p-20 grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12">
              <div>
                <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Get in touch</p>
                <RevealText as="h2" text="Let's make something useful." className="font-serif text-[clamp(2.8rem,7vw,5.6rem)] tracking-tight text-ink leading-[1]" />
                <p className="mt-8 text-ink-muted text-base md:text-lg leading-relaxed max-w-md">
                  Open to Data Analyst roles, interesting projects, or just a good conversation about data and design.
                </p>
                <div className="mt-10">
                  <Magnetic>
                    <a
                      href={`mailto:${contact.email}`}
                      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-ink text-cream text-sm font-medium rounded-full overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                      <span className="relative">{contact.email}</span>
                      <span className="relative transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </a>
                  </Magnetic>
                </div>
              </div>

              <div className="lg:pt-12">
                <div className="rounded-2xl bg-card/70 backdrop-blur border border-white/80 divide-y divide-border">
                  {rows.map((r) => (
                    <a
                      key={r.label}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-6 px-6 py-5 hover:bg-white/60 transition-colors"
                    >
                      <span className="text-[11px] tracking-[0.18em] uppercase text-ink-muted w-20 shrink-0">{r.label}</span>
                      <span className="flex-1 text-sm text-ink group-hover:text-accent transition-colors truncate">{r.display}</span>
                      <span className="text-ink-muted group-hover:text-accent transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
