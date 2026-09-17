"use client"

import { contact } from "@/data/content"
import { RevealText, FadeUp } from "./motion/Reveal"
import Magnetic from "./motion/Magnetic"

const rows = [
  { label: "LinkedIn", display: "linkedin.com/in/archit-kiran-kumar", href: contact.linkedin },
  { label: "GitHub", display: "github.com/architkiran", href: contact.github },
  { label: "Resume", display: "Archit_Kiran_Kumar_Resume.pdf", href: "/Archit_Kiran_Kumar_Resume.pdf" },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeUp>
          <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Get in touch</p>
        </FadeUp>

        <RevealText
          as="h2"
          text="Let's talk."
          className="font-serif text-[clamp(4rem,12vw,10rem)] font-light text-ink leading-[0.95] tracking-[-0.02em] mb-10"
        />

        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 md:gap-20 items-start">
          <FadeUp delay={0.1}>
            <p className="text-ink-muted text-base md:text-lg leading-relaxed max-w-sm">
              Always open to conversations about data, design, or fintech. Whether it&apos;s a role, a project,
              or just a good idea — I&apos;d love to hear from you.
            </p>
          </FadeUp>

          <div>
            <FadeUp delay={0.15} className="mb-10">
              <Magnetic strength={0.15}>
                <a
                  href={`mailto:${contact.email}`}
                  className="link-draw font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink hover:text-accent transition-colors duration-300 break-all"
                >
                  {contact.email}
                </a>
              </Magnetic>
            </FadeUp>

            <div className="border-t border-border">
              {rows.map((r, i) => (
                <FadeUp key={r.label} delay={0.2 + i * 0.06}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 py-5 border-b border-border hover:pl-2 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                  >
                    <span className="text-[11px] tracking-[0.18em] uppercase text-ink-muted w-24 shrink-0">{r.label}</span>
                    <span className="flex-1 text-sm md:text-base text-ink group-hover:text-accent transition-colors truncate">{r.display}</span>
                    <span className="text-ink-muted group-hover:text-accent transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </a>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
