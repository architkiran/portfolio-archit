"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaBars, FaTimes, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const scrollContainer = document.querySelector("main")
    if (!scrollContainer) return

    const handleScroll = () => {
      const currentY = (scrollContainer as HTMLElement).scrollTop

      if (currentY > lastScrollY.current && currentY > 50) {
        setHidden(true) // hide when scrolling down
      } else {
        setHidden(false) // show when scrolling up
      }

      lastScrollY.current = currentY
    }

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true })
    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10 shadow-lg"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center py-4 px-6">
          {/* Logo on far left */}
          <div className="absolute left-6 text-white text-xl font-bold">Archit</div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-6">
            <button onClick={() => setOpen(!open)} className="text-gray-200 text-2xl">
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-gray-300 text-3xl hover:text-white"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col gap-8 text-center">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl text-gray-200 hover:text-white transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-6 mt-12 text-3xl text-gray-400">
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/yourinstagram" target="_blank" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-red-400">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}
