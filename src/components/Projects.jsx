import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "jobnest",
    title: "Jobnest",
    desc: "AI-powered job platform that aggregates listings and helps users generate tailored CVs and cover letters.",
    image: "/assets/jobnest.png",
    link: "https://job-nest-seven.vercel.app",
    github: "https://github.com/Enigmatic-Eni/JobNest",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    id: "stocksave",
    title: "Stocksave AI",
    desc: "Full-stack savings platform enabling users to set goals and collaboratively fund purchases.",
    image: "/assets/stocsave.png",
    link: "https://stocksave.vercel.app/",
    github: "https://github.com/StockSave-AI",
    tags: ["React", "Tailwind", "Node.js", "MySQL"],
  },
  {
    id: "oboh",
    title: "Oboh Draws",
    desc: "Responsive portfolio platform designed for showcasing artwork with modern UI patterns.",
    image: "/assets/oboh.png",
    link: "https://oboh-draws.vercel.app/",
    github: "https://github.com/Enigmatic-Eni/oboh-draws",
    tags: ["Next.js", "Tailwind"],
  },
];

export default function Projects() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section id="Projects" className="py-32 px-6 bg-gradient-to-b from-black to-black/60 text-white">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto rounded-full mb-8" />
        <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-300">
          A selection of projects I’ve built, showcasing my experience in
          frontend development, backend systems, and scalable web applications.
        </p>
      </div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - SELECTOR */}
        <div className="space-y-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              onClick={() => setActive(project)}
              className={`cursor-pointer p-5 rounded-xl border transition-all ${
                active.id === project.id
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-gray-800 hover:border-gray-600"
              }`}
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.desc.slice(0, 60)}...</p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT - DISPLAY */}
        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="absolute w-full"
            >
              {/* IMAGE */}
              <motion.img
                src={active.image}
                alt={active.title}
                className="rounded-2xl shadow-2xl mb-6"
                layoutId={`image-${active.id}`}
              />

              {/* CONTENT */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{active.title}</h2>

                <p className="text-gray-300">{active.desc}</p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-4 mt-4">
                  {active.link && active.link !== "#" && (
                    <a
                      href={active.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition flex items-center gap-2"
                    >
                      Live Demo <ArrowUpRight size={18} />
                    </a>
                  )}

                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline flex items-center gap-1"
                    >
                      View Code <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-20">
        <a
          href="https://github.com/Enigmatic-Eni"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 rounded-2xl font-semibold shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/70 transition-all"
        >
          View More Projects
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}