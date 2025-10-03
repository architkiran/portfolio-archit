"use client"
import { motion } from "framer-motion"
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa"
import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // simulate API call
    setTimeout(() => {
      setStatus("success")
      setTimeout(() => setStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <main className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[40vw] h-[40vw] bg-purple-500/20 blur-[200px] rounded-full top-10 left-10 animate-pulse" />
        <div className="absolute w-[50vw] h-[50vw] bg-blue-500/20 blur-[220px] rounded-full bottom-10 right-10 animate-pulse" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          Let’s Connect !!
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Whether you have a project in mind, want to collaborate, or just want
          to chat, I’d love to hear from you!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-8 rounded-2xl shadow-xl bg-white/10 backdrop-blur-2xl border border-white/20 space-y-6"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-2">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-4 rounded-lg bg-gray-900/70 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all"
              required
              pattern="^[A-Za-z\s]+$"
              title="Name should only contain letters"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Your Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-4 rounded-lg bg-gray-900/70 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              placeholder="Type your message..."
              className="w-full p-4 h-40 rounded-lg bg-gray-900/70 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all"
              required
              minLength={1}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition"
          >
            Send Message 
          </button>

          {/* Toast Notification */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg bg-green-500 text-white shadow-lg"
            >
              ✅ Message sent successfully!
            </motion.div>
          )}
        </motion.form>

        {/* Contact Info Cards */}
        <div className="grid gap-6">
          {[
            {
              icon: <FaEnvelope className="text-4xl text-red-400" />,
              label: "Email",
              value: "architkiran@gmail.com",
              href: "mailto:architkiran@gmail.com",
            },
            {
              icon: <FaLinkedin className="text-4xl text-blue-400" />,
              label: "LinkedIn",
              value: "linkedin.com/in/architkiran",
              href: "https://linkedin.com/in/archit-kiran-kumar-403610243",
            },
            {
              icon: <FaInstagram className="text-4xl text-pink-500" />,
              label: "Instagram",
              value: "@archit.kiran",
              href: "https://instagram.com/archit.kiran",
            },
            {
              icon: <FaGithub className="text-4xl text-gray-300" />,
              label: "GitHub",
              value: "github.com/architkiran",
              href: "https://github.com/architkiran",
            },
          ].map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-5 p-6 rounded-xl bg-gray-900/60 border border-white/10 hover:border-purple-400 transition shadow-md hover:shadow-purple-500/20"
            >
              {c.icon}
              <div>
                <p className="text-sm text-gray-400">{c.label}</p>
                <p className="text-lg font-medium text-white">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  )
}
