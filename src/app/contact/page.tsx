"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { contact } from "@/data/content"
import { EASE } from "@/lib/motion"
import PageHeader from "@/components/PageHeader"
import Mesh from "@/components/motion/Mesh"
import Magnetic from "@/components/motion/Magnetic"
import { FadeUp } from "@/components/motion/Reveal"

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    display: contact.email,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    display: "linkedin.com/in/archit-kiran-kumar",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: contact.github,
    display: "github.com/architkiran",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
]

const field =
  "w-full px-5 py-3.5 rounded-2xl border border-border bg-card text-ink text-sm placeholder-ink-muted/50 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      })
      if (res.ok) {
        setStatus("success")
        form.reset()
        setTimeout(() => setStatus("idle"), 4000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 4000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  return (
    <main className="min-h-screen bg-cream pb-32">
      <PageHeader
        label="Get in touch"
        title="Let's talk"
        intro="Always open to interesting conversations about data, design, or fintech. Whether it's a role, a project, or just a good idea — I'd love to hear from you."
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-6 lg:gap-8 items-start">
          {/* Form on a mesh panel */}
          <FadeUp delay={0.2}>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/70 bg-card">
              <Mesh opacity={0.8} />
              <form onSubmit={handleSubmit} className="relative p-7 md:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-ink-muted mb-2">Your name</label>
                    <input name="name" type="text" placeholder="Jane Smith" required className={field} />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-ink-muted mb-2">Email</label>
                    <input name="email" type="email" placeholder="jane@example.com" required className={field} />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-ink-muted mb-2">Message</label>
                  <textarea name="message" placeholder="Tell me about your project or idea..." required rows={6} className={`${field} resize-none`} />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Magnetic>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-ink text-cream text-sm font-medium rounded-full overflow-hidden disabled:opacity-60"
                    >
                      <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                      <span className="relative">{status === "sending" ? "Sending…" : "Send message"}</span>
                      <span className="relative transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </button>
                  </Magnetic>
                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.p key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="text-sm text-accent font-medium">
                        Message sent — I&apos;ll be in touch soon!
                      </motion.p>
                    )}
                    {status === "error" && (
                      <motion.p key="err" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="text-sm text-red-600 font-medium">
                        Something went wrong. Try emailing me directly.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </FadeUp>

          {/* Direct links */}
          <FadeUp delay={0.3}>
            <div className="rounded-[2rem] bg-card border border-border divide-y divide-border overflow-hidden">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 px-7 py-6 hover:bg-warm/70 transition-colors"
                >
                  <span className="w-11 h-11 rounded-full bg-warm flex items-center justify-center text-ink-muted group-hover:bg-accent group-hover:text-cream transition-colors">
                    {link.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-ink-muted font-medium tracking-[0.16em] uppercase mb-0.5">{link.label}</p>
                    <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors truncate">{link.display}</p>
                  </div>
                  <span className="ml-auto text-ink-muted group-hover:text-accent transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </main>
  )
}
