"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import Image from "next/image"

export default function Home() {
  return (
    <main className="w-full text-white snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* =========================== Hero ============================ */}
      <section
        id="hero"
        className="h-screen snap-start flex flex-col items-center justify-center bg-black overflow-hidden relative"
      >
        {/* Aurora Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 opacity-30 blur-[150px]"
            animate={{ x: ["-20%", "40%", "-10%"], y: ["-10%", "30%", "-20%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 opacity-30 blur-[160px]"
            animate={{ x: ["30%", "-20%", "10%"], y: ["20%", "-30%", "10%"] }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-4"
          >
            Welcome to my portfolio 👋
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Archit Kiran Kumar
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4 text-lg md:text-xl text-gray-300"
          >
            Master&apos;s in Computer Science @ Boston University
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8 flex gap-6 justify-center"
          >
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transform transition"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transform transition"
            >
              Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex justify-center gap-6 mt-8 text-2xl text-gray-400"
          >
            <a href="https://github.com/architkiran" target="_blank" className="hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/archit-kiran-kumar-403610243"
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:architkiran@gmail.com" className="hover:text-red-400 transition-colors">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =========================== About ============================ */}
      <section
        id="about-section"
        className="h-screen snap-start flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-8">
          About Me
        </h2>
        <p className="max-w-3xl text-lg text-gray-300 leading-relaxed">
          Passionate about building scalable web applications, uncovering insights through data, and creating seamless
          user experiences. My work blends <span className="font-semibold">frontend engineering</span> with{" "}
          <span className="font-semibold">data science</span> to turn ideas into impactful solutions. Always curious,
          always learning, that&apos;s my approach to technology and problem-solving.
        </p>
        <a
          href="/about"
          className="mt-10 px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold shadow-lg hover:scale-105 transform transition"
        >
          Learn More →
        </a>
      </section>

      {/* =================== Projects =================== */}
      <section
        id="projects"
        className="h-screen snap-start bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Project 1 */}
          <div className="rounded-lg bg-gray-800/60 p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-2">Safeguarding Bharat&apos;s EV Charging Networks</h3>
            <p className="text-gray-300 mb-4">
              Strengthening India&apos;s EV charging networks through OCPP protocol resilience. Focused on identifying
              vulnerabilities, simulating real-world threats, and proposing secure frameworks.
            </p>
            <a
              href="https://github.com/architkiran/Safeguarding-Bharat-s-EV-Charging-Networks-Through-OCPP-Protocol-Resilience-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:scale-105 transition"
            >
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="rounded-lg bg-gray-800/60 p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-2">Post-Quantum IoT Framework</h3>
            <p className="text-gray-300 mb-4">
              Designed a secure IoT communication framework resilient to quantum-computing threats. Integrated
              post-quantum cryptography techniques while ensuring efficiency for resource-constrained devices.
            </p>
            <a
              href="https://github.com/architkiran/Post-Quantum-Communication-framework-for-IOT-Devices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:scale-105 transition"
            >
              View Project →
            </a>
          </div>

          {/* Project 3 */}
          <div className="rounded-lg bg-gray-800/60 p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-2">Traffic Data Analysis</h3>
            <p className="text-gray-300 mb-4">
              Built a big data pipeline to analyze and visualize urban traffic patterns. Leveraged PySpark and analytics
              tools to deliver insights for smarter transportation planning.
            </p>
            <a
              href="https://github.com/architkk/traffic-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:scale-105 transition"
            >
              View Project →
            </a>
          </div>

          {/* Project 4 */}
          <div className="rounded-lg bg-gray-800/60 p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-2">MERN Stack Projects</h3>
            <p className="text-gray-300 mb-4">
              Developed full-stack systems including a Car Rental System and Railway Management System. Built with
              MongoDB, Express, React, and Node.js, focusing on usability and performance.
            </p>
            <a
              href="https://github.com/architkiran/Car-Rental-System"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:scale-105 transition"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* =================== Achievements =================== */}
      <section
        id="achievement-best"
        className="h-screen snap-start bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-16 text-center">
          Achievements
        </h2>
        <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/Best-Project.JPG"
              alt="Best Project Award"
              width={420}
              height={280}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-semibold text-white mb-4">Best Project Award</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Won the <span className="font-bold">Best Project Award</span> for an innovative and impactful solution. As
              part of a four-member team, I contributed ideas, problem-solving, and collaboration alongside Chris Biju,
              Het Rutul Joshi, and Amogh AN. Together we combined technical depth with real-world applicability,
              showcasing teamwork, creativity, and resilience.
            </p>
          </div>
        </div>
      </section>

      <section
        id="achievement-exhibition"
        className="h-screen snap-start bg-gradient-to-b from-black via-gray-900 to-black flex items-center px-6"
      >
        <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-semibold text-white mb-4">Exhibition Showcase</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Represented our project at a <span className="font-bold">national-level exhibition</span>, where we
              demonstrated scalability and real-world impact to professors, peers, and industry leaders. This experience
              strengthened my ability to communicate complex ideas clearly and adapt to diverse audiences.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="/exhibition.jpg"
              alt="Exhibition Showcase"
              width={420}
              height={280}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="achievement-aicte"
        className="h-screen snap-start bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center px-6"
      >
        <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/aicte.JPEG"
              alt="AICTE Program"
              width={420}
              height={280}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-semibold text-white mb-4">AICTE Program</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Contributed to the <span className="font-bold">AICTE program</span>, helping spread computer science
              knowledge and promoting <span className="italic">environmental cleanliness</span>. I engaged with learners,
              simplified technical concepts, and encouraged sustainable practices — reinforcing both professional
              discipline and social responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* ============================ Connect ============================ */}
      <section
        id="connect"
        className="h-screen snap-start flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-300 max-w-xl text-lg mb-8">
          I&apos;m always open to collaborating, sharing ideas, or just connecting with like-minded people. Reach out and
          let&apos;s build something meaningful together.
        </p>
        <div className="flex gap-6 text-3xl text-gray-400">
          <a
            href="https://linkedin.com/in/archit-kiran-kumar-403610243"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/archit.kiran"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </a>
          <a href="mailto:architkiran@gmail.com" className="hover:text-red-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </main>
  )
}
