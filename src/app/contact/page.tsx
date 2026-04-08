"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { contact } from "@/data/content"

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
    <main className="min-h-screen bg-cream pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] tracking-[0.18em] text-accent uppercase font-medium mb-4"
        >
          Get in touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-5xl md:text-7xl font-light text-ink mb-5"
        >
          Let&apos;s talk
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-ink-muted text-base max-w-xl mb-16 leading-relaxed"
        >
          Always open to interesting conversations about data, design, or fintech. Whether it&apos;s
          a role, a project, or just a good idea — I&apos;d love to hear from you.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-card border border-border rounded-lg p-8 space-y-6"
          >
            <div>
              <label className="block text-xs font-medium text-ink-muted tracking-wide mb-2">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Jane Smith"
                required
                className="w-full px-4 py-3 rounded border border-border bg-cream text-ink text-sm placeholder-ink-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-ink-muted tracking-wide mb-2">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="jane@example.com"
                required
                className="w-full px-4 py-3 rounded border border-border bg-cream text-ink text-sm placeholder-ink-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-ink-muted tracking-wide mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded border border-border bg-cream text-ink text-sm placeholder-ink-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-accent text-cream text-sm font-medium rounded hover:bg-accent/90 disabled:opacity-60 transition-colors"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-center text-green-700 font-medium">
                Message sent — I&apos;ll be in touch soon!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-center text-red-600 font-medium">
                Something went wrong. Try emailing me directly.
              </p>
            )}
          </motion.form>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col gap-4 pt-2"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-5 bg-card border border-border rounded-lg hover:border-accent hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-ink-muted group-hover:text-accent transition-colors">
                  {link.icon}
                </span>
                <div>
                  <p className="text-[10px] text-ink-muted font-medium tracking-widest uppercase mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                    {link.display}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-ink-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  )
}
