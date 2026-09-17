import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Preloader from "@/components/motion/Preloader"

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  )
}
