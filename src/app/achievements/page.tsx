"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { EASE } from "@/lib/motion"
import PageHeader from "@/components/PageHeader"
import Tilt from "@/components/motion/Tilt"
import { RevealText, FadeUp } from "@/components/motion/Reveal"

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

const tints = ["bg-mint", "bg-lilac", "bg-apricot", "bg-sky"]

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-cream pb-32">
      <PageHeader
        label="Recognition"
        title="Achievements"
        intro="Milestones that reflect innovation, teamwork, and impact beyond the day-to-day."
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-6 mb-32">
          {achievements.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
              className={`group rounded-3xl overflow-hidden border border-white/70 ${tints[i % tints.length]}`}
            >
              <div className="relative h-64 md:h-72 overflow-hidden bg-white/40">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className={`transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] ${
                    a.title.includes("Certificate") ? "object-contain p-6" : "object-cover"
                  }`}
                />
              </div>
              <div className="p-7 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-serif text-3xl text-ink leading-tight">{a.title}</h2>
                  <span className="text-[11px] tracking-[0.16em] uppercase text-ink/60 shrink-0 mt-2">{a.year}</span>
                </div>
                <p className="text-sm text-ink/70 leading-relaxed">{a.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <FadeUp>
          <p className="text-[11px] tracking-[0.2em] text-accent uppercase font-medium mb-6">Leadership &amp; activities</p>
        </FadeUp>
        <RevealText as="h2" text="Beyond the classroom" className="font-serif text-4xl md:text-6xl tracking-tight text-ink leading-[1.05] mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {leadershipItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
            >
              <Tilt max={5} className="h-full rounded-3xl">
                <div className="h-full rounded-3xl p-7 bg-card border border-border">
                  <span className="font-serif text-2xl text-ink/40 block mb-6">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-2xl text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
