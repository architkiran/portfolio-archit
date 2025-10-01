"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "Best Project Award",
      year: "2024",
      img: "/best-project.jpeg",
      description:
        "Received the Best Project Award for delivering an innovative and impactful solution as part of a four-member team. I contributed to technical depth, creative problem-solving, and seamless collaboration to ensure real-world applicability.",
    },
    {
      id: 2,
      title: "Exhibition Showcase",
      year: "2024",
      img: "/exhibition.jpg",
      description:
        "Our project was showcased at a national-level exhibition, where I presented its technical depth, scalability, and practical impact to professors, peers, and industry leaders.",
    },
    {
      id: 3,
      title: "AICTE Program",
      year: "2023",
      img: "/aicte.JPEG",
      description:
        "Participated in the AICTE program to spread computer science awareness and promote environmental cleanliness. This role strengthened my leadership, teamwork, and social responsibility.",
    },
    {
      id: 4,
      title: "Certificate of Best Project Award",
      year: "2024",
      img: "/certificate.jpg", // ensure horizontal version is saved
      description:
        "Earned the Certificate of Best Project Award, recognizing my creativity, adaptability, and consistent contributions in building a solution with real-world impact.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 pt-32 pb-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Achievements
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Some milestones that reflect my innovation, teamwork, and impactful contributions.
        </p>
      </motion.div>

      {/* Card Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg bg-gray-900/70 border border-gray-700 hover:border-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-500/20 transition-all duration-300"
          >
            <Image
              src={a.img}
              alt={a.title}
              width={600}
              height={400}
              className={`w-full ${
                a.title.includes("Certificate")
                  ? "object-contain h-64 bg-gray-950 p-4"
                  : "object-cover h-64"
              }`}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-1">{a.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{a.year}</p>
              <p className="text-gray-300">{a.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
