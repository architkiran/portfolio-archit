"use client"

import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-gray-700/50 py-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Archit Kiran Kumar · Built with Next.js + Tailwind
        </p>

        <div className="flex gap-6 text-xl text-gray-400 mt-4 md:mt-0">
          <a href="https://linkedin.com/in/archit-kiran-kumar-403610243" target="_blank" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/archit.kiran" target="_blank" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="mailto:architkiran@gmail.com" className="hover:text-red-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
