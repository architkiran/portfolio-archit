"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaDumbbell, FaUsers, FaLeaf, FaGlobe, FaBook, FaBrain } from "react-icons/fa"

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      {/* ================== Hero About Section ================== */}
      <section className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-15 mb-5 pt-5">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <Image
            src="/profile.jpg"
            alt="Archit Kiran Kumar"
            width={280}
            height={280}
            className="rounded-full border-4 border-purple-400 shadow-lg object-cover"
          />
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am <span className="font-semibold text-white">Archit Kiran Kumar</span>, a passionate learner 
            and builder currently pursuing my Master of Science in Computer Science at Boston University. 
            My journey has been fueled by a deep curiosity for{" "}
            <span className="font-semibold">software engineering, data science, and front-end design</span>.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I love tackling real-world problems with technology, whether it’s through 
            <span className="font-semibold"> scalable applications</span>, 
            <span className="font-semibold"> data-driven insights</span>, or 
            <span className="font-semibold"> intuitive user experiences</span>. 
            My approach combines creativity with analytical thinking, and I’m always 
            pushing myself to explore new tools and frameworks to stay ahead in this ever-evolving field.
          </p>
        </motion.div>
      </section>

      {/* ================== Education ================== */}
      <section className="max-w-5xl w-full mb-40 pt-40">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-12 text-gray-300 text-lg">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/60 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white">Boston University</h3>
            <p>Master of Science in Computer Science (September 2025 – Present)</p>
            <p>
              Focusing on <span className="font-semibold">advanced algorithms, distributed systems, applied data science and object oriented programming</span>. 
              Engaging in projects that combine modern software engineering practices with real-world 
              problem solving, such as <span className="italic">predictive analytics, secure systems, and 
              scalable architectures</span>. My coursework and projects are preparing me to work at the 
              intersection of <span className="font-semibold">data-driven innovation</span> and <span className="font-semibold">software development</span>.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/60 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white">Ramaiah Institute of Technology</h3>
            <p>Bachelor of Engineering in Computer Science (Graduated June 2025)</p>
            <p>
              Built a solid foundation in computer science fundamentals such as{" "}
              <span className="font-semibold">Data Structures, operating systems, computer networks, and blockchain</span>. 
              Led and contributed to projects in <span className="font-semibold">IoT security</span>, 
              <span className="font-semibold">traffic data analysis</span>, and <span className="font-semibold">post-quantum communication frameworks</span>. 
              Represented my work at <span className="italic">national exhibitions</span> and received the{" "}
              <span className="font-semibold">Best Project Award</span>, validating both technical ability 
              and practical problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================== Work Experience ================== */}
<section className="min-h-screen w-full py-20 flex flex-col items-center justify-center">
  <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
    Work Experience
  </h2>
  <div className="space-y-8 text-gray-300 text-lg max-w-5xl w-full">
    {/* Millicent */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-900/60 p-6 rounded-lg shadow-lg transition-all hover:shadow-white-500/20"
    >
      <h3 className="text-2xl font-semibold text-white">
        Front-End Developer Intern — Millicent Technologies
      </h3>
      <p className="text-sm text-gray-400 mb-2">(2025)</p>
      <p>
        Built responsive client-facing web applications with React/Next.js.  
        Collaborated across teams to ship features, improve performance, and polish UI/UX.  
        Strengthened skills in debugging, optimization, and communicating trade-offs with stakeholders.
      </p>
    </motion.div>

    {/* InternPE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-900/60 p-6 rounded-lg shadow-lg transition-all hover:shadow-white-500/20"
    >
      <h3 className="text-2xl font-semibold text-white">
        Software Development Intern — InternPE
      </h3>
      <p className="text-sm text-gray-400 mb-2">(2024)</p>
      <p>
        Contributed to feature development and bug-fixing across the stack with a focus on clean, 
        maintainable code. Worked with RESTful APIs and modern front-end patterns, participated in code reviews, 
        and collaborated closely with mentors to iterate quickly and deliver reliable improvements.
      </p>
    </motion.div>

    {/* AICTE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-900/60 p-6 rounded-lg shadow-lg transition-all hover:shadow-white-500/20"
    >
      <h3 className="text-2xl font-semibold text-white">AICTE Programs (Volunteer)</h3>
      <p className="text-sm text-gray-400 mb-2">(2022 – 2023)</p>
      <p>
        Helped spread computer science awareness and promoted environmental cleanliness.  
        Experiences here strengthened leadership, teaching, and community-focused communication.
      </p>
    </motion.div>
  </div>
</section>



      {/* ================== Skills ================== */}
      <section className="max-w-6xl w-full mb-40 pt-40">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {[
            "React", "Next.js", "TypeScript", "Tailwind CSS",
            "Node.js", "Express.js", "MongoDB", "REST APIs",
            "Python", "PySpark", "Pandas", "NumPy",
            "Data Visualization (Matplotlib/Plotly)", "SQL",
            "Machine Learning (scikit-learn basics)",
            "Git/GitHub", "Docker", "Postman"
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-gray-800/60 py-4 px-3 rounded-lg shadow hover:shadow-xl"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================== Beyond Tech ================== */}
<section className="min-h-screen w-full py-20 text-center flex flex-col items-center justify-center">
  <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
    Beyond Technology
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-300 text-lg max-w-6xl w-full">
    {[
      {
        icon: <FaDumbbell className="text-5xl text-purple-400" />,
        title: "Fitness & Discipline",
        text: "Regular training keeps me focused and consistent. Fitness builds discipline that reflects in my professional life."
      },
      {
        icon: <FaUsers className="text-5xl text-blue-400" />,
        title: "Team Collaboration",
        text: "I thrive in collaborative environments, valuing clear communication and shared ownership of projects."
      },
      {
        icon: <FaLeaf className="text-5xl text-green-400" />,
        title: "Clean & Sustainable Living",
        text: "I care about sustainability and actively participate in community cleanliness and awareness programs."
      },
      {
        icon: <FaBook className="text-5xl text-pink-400" />,
        title: "Continuous Learning",
        text: "Always curious and engaged with new technologies, frameworks, and concepts to expand my expertise."
      },
      {
        icon: <FaGlobe className="text-5xl text-yellow-400" />,
        title: "Global Perspective",
        text: "Exposure to diverse teams and cultures has given me a broader outlook on problem-solving."
      },
      {
        icon: <FaBrain className="text-5xl text-indigo-400" />,
        title: "Problem-Solving Mindset",
        text: "I enjoy breaking down complex problems and creating elegant, scalable solutions."
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.08 }}
        className="bg-gray-900/60 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 hover:shadow-xl"
      >
        {item.icon}
        <p className="font-semibold">{item.title}</p>
        <p className="text-sm">{item.text}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* ================== Footer ================== */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800 w-full">
        © {new Date().getFullYear()} Archit Kiran Kumar. All Rights Reserved.
      </footer>
    </main>
  )
}
