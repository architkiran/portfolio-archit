"use client"
import { motion } from "framer-motion"

const projects = [
  // Tier 1: Data & Business Analytics
  {
    id: 1,
    title: "Boston-Area Price & Crime Prediction",
    description:
      "A data-driven decision support project analyzing crime rates and housing rent trends to help residents and newcomers make safer, more informed housing choices in the Boston area.",
    link: "https://github.com/architkiran/Boston-Area-Price-and-Crime-Prediction",
  },
  {
    id: 2,
    title: "Music Review Rating Prediction (Kaggle, Macro-F1)",
    description:
      "Predicts reviewer ratings (1–5) of music releases using metadata and text features. A multi-class classification project evaluated using Macro F1 Score (per Kaggle rules).",
    link: "https://github.com/architkiran/Music-Review-Rating-Prediction",
  },
  {
    id: 3,
    title: "Traffic Data Analysis (PySpark, Big Data)",
    description:
      "Built a PySpark-based big data pipeline to analyze and visualize urban traffic patterns, generating insights and predictive trends to support data-driven transportation planning.",
    link: "https://github.com/architkk/traffic-analysis",
  },

  // Tier 2: Systems with Data Impact
  {
    id: 4,
    title: "EV Charging Network Resilience (OCPP Security + Infrastructure Analytics)",
    description:
      "Research-backed project strengthening India&apos;s EV charging infrastructure by analyzing OCPP protocol vulnerabilities and proposing resilient, secure frameworks for real-world deployment.",
    link: "https://github.com/architkiran/Safeguarding-Bharat-s-EV-Charging-Networks-Through-OCPP-Protocol-Resilience-",
  },
  {
    id: 5,
    title: "Blockchain-based E-Voting System",
    description:
      "Engineered a secure, transparent, and tamper-resistant e-voting system using blockchain to support integrity, auditability, and trust in digital election processes.",
    link: "https://github.com/architkiran/Blockchain-Based-Voting-",
  },

  // Tier 3: Engineering Proof
  {
    id: 6,
    title: "Post-Quantum IoT Framework",
    description:
      "Designed a secure IoT communication framework resilient to quantum-era attacks by integrating post-quantum cryptography while optimizing performance for resource-constrained devices.",
    link: "https://github.com/architkiran/Post-Quantum-Communication-framework-for-IOT-Devices",
  },
  {
    id: 7,
    title: "Portfolio Website (This Site)",
    description:
      "Built with Next.js, Tailwind CSS, and Framer Motion to showcase analytics-focused projects and experience with a clean UI, smooth interactions, and polished presentation.",
    link: "https://github.com/architkiran/portfolio",
  },
  {
    id: 8,
    title: "MERN Stack Projects (Car Rental & Railway Management)",
    description:
      "Developed full-stack systems to manage bookings and workflows, focusing on data modeling, CRUD operations, and clean user flows using MongoDB, Express, React, and Node.js.",
    link: "https://github.com/architkiran/Car-Rental-System",
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
          A collection of my most impactful work across data analysis, predictive modeling,
          big data pipelines, and secure systems.
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
            transition={{ duration: 0.6, delay: index * 0.08 }}
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