"use client"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Safeguarding Bharat's EV Charging Networks",
    description:
      "A research-backed project strengthening India’s EV charging networks by addressing protocol-level vulnerabilities in OCPP. Focused on resilience against cyber threats to ensure a secure transition toward sustainable mobility.",
    link: "https://github.com/architkiran/Safeguarding-Bharat-s-EV-Charging-Networks-Through-OCPP-Protocol-Resilience-",
  },
  {
    id: 2,
    title: "Post-Quantum IoT Framework",
    description:
      "Designed a secure IoT communication framework resistant to quantum-based attacks. Integrated post-quantum cryptography while keeping performance optimized for resource-constrained IoT devices.",
    link: "https://github.com/architkiran/Post-Quantum-Communication-framework-for-IOT-Devices",
  },
  {
    id: 3,
    title: "Traffic Data Analysis",
    description:
      "Developed a big data pipeline using PySpark and analytics tools to analyze urban traffic flow. Delivered visual insights and predictive modeling for smarter transportation planning.",
    link: "https://github.com/architkk/traffic-analysis",
  },
  {
    id: 4,
    title: "MERN Stack Projects",
    description:
      "Built full-stack web apps including a Car Rental System and Railway Management System. Developed using MongoDB, Express, React, and Node.js, focusing on usability, performance, and clean UI design.",
    link: "https://github.com/architkiran/Car-Rental-System",
  },
  {
    id: 5,
    title: "Blockchain-based E-Voting System",
    description:
      "Engineered a secure, transparent, and tamper-proof e-voting system using blockchain. Ensured anonymity, verifiability, and immutability of votes while promoting trust in digital electoral processes.",
    link: "https://github.com/architkiran/Blockchain-Based-Voting-",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "The personal website you're exploring right now — designed and developed using Next.js, Tailwind CSS, and Framer Motion. Focused on clean aesthetics, smooth animations, and showcasing my journey as a developer.",
    link: "https://github.com/architkiran/portfolio",
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
          A collection of my most impactful work exploring cybersecurity,
          data analysis, blockchain, and full-stack development.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((p, index) => (
          <motion.a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              {p.title}
            </h3>
            <p className="text-gray-400 mt-3 leading-relaxed">{p.description}</p>
            <span className="mt-5 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-md group-hover:scale-105 transform transition">
              View Project →
            </span>
          </motion.a>
        ))}
      </div>
    </main>
  )
}
