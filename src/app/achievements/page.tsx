"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const achievements = [
  {
    id: 1,
    title: "Best Project Award",
    year: "2025",
    img: "/Best-Project.jpeg",
    description:
      "Received the Best Project Award for delivering an innovative and impactful solution as part of a four-member team — combining technical depth, creative problem-solving, and real-world applicability.",
  },
  {
    id: 2,
    title: "Exhibition Showcase",
    year: "2025",
    img: "/exhibition.jpg",
    description:
      "Our project was showcased at a university-level exhibition, where I presented its technical depth, scalability, and practical impact to professors, peers, and industry leaders.",
  },
  {
    id: 3,
    title: "AICTE Program",
    year: "2022 – 2023",
    img: "/aicte.JPEG",
    description:
      "Participated in the AICTE program to spread computer science awareness and promote environmental sustainability. This role strengthened leadership, teaching, and social responsibility.",
  },
  {
    id: 4,
    title: "Certificate of Best Project Award",
    year: "2025",
    img: "/certificate.jpg",
    description:
      "Earned the Certificate of Best Project Award, recognizing creativity, adaptability, and consistent contributions in building a solution with measurable real-world impact.",
  },
]

const leadershipItems = [
  {
    title: "Data Club Lead",
    description: "Mentored 40+ students on SQL, Python, data visualization, and analytics fundamentals.",
  },
  {
    title: "Hackathon Lead",
    description: "Delivered an end-to-end data analytics solution within a 24-hour sprint at a competitive hackathon.",
  },
  {
    title: "AICTE Volunteer",
    description: "Volunteered across AICTE programs, engaging 500+ learners and promoting CS education and sustainability.",
  },
]

export default function AchievementsPage() {
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
          Recognition
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-5xl md:text-7xl font-light text-ink mb-5"
        >
          Achievements
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-ink-muted text-base max-w-xl mb-16 leading-relaxed"
        >
          Milestones that reflect innovation, teamwork, and impact beyond the day-to-day.
        </motion.p>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <div className="overflow-hidden h-56 bg-warm">
                <Image
                  src={a.img}
                  alt={a.title}
                  width={600}
                  height={400}
                  className={`w-full h-full transition-transform duration-500 hover:scale-105 ${
                    a.title.includes("Certificate") ? "object-contain p-4" : "object-cover"
                  }`}
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="font-serif text-xl font-medium text-ink">{a.title}</h2>
                  <span className="text-xs text-ink-muted tracking-wide shrink-0 mt-1">{a.year}</span>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership divider */}
        <p className="text-[11px] tracking-[0.18em] text-ink-muted uppercase font-medium mb-8 pb-3 border-b border-border">
          Leadership &amp; Activities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {leadershipItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/40 transition-colors"
            >
              <h3 className="font-serif text-lg font-medium text-ink mb-2">{item.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
