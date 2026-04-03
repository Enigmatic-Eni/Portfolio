import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "3+", color: "from-theme" },
  { label: "Projects Completed", value: "15+", color: "from-emerald-500" },
  { label: "Clean Code", value: "100%", color: "from-blue-500" },
  { label: "Responsive", value: "100%", color: "from-purple-500" },
];

export default function About() {
  return (
    <section id="About" className="py-2 px-4 md:px-10 max-w-7xl mx-auto">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        {/* <motion.h6 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-semibold text-theme mb-4"
        >
          Get to know me
        </motion.h6> */}
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-4xl font-bold bg-linear-to-r from-theme via-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Educational Background */}
          <div className="bg-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-black/70 transition-all duration-300">
            <h3 className="text-xl font-bold text-theme mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-theme rounded-full" />
              Educational Background
            </h3>
           <p className="text-gray-300 leading-relaxed">
  I’m a <strong>Computer Science graduate</strong> from{" "}
  <strong>Lagos State University</strong>, with a strong foundation in
  algorithms, data structures, and software engineering principles.
</p>
          </div>

          {/* Journey */}
          <div className="bg-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-black/70 transition-all duration-300">
            <h3 className="text-xl font-bold text-theme mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-theme rounded-full" />
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Hi, I'm <strong>Sanni Motunrayo</strong>, a passionate{" "}
              <strong>Frontend Developer</strong> with hands-on experience crafting 
              exceptional digital experiences using <strong>React.js</strong>,{" "}
              <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
            </p>
            <p className="text-gray-400 mt-4 text-sm">
             I focus on creating clean, responsive interfaces while ensuring performance,
usability, and a seamless user experience.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-linear-to-br from-black/50 to-transparent backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 text-center hover:border-theme/50 transition-all duration-300 cursor-default"
            >
              <div className="text-3xl md:text-4xl font-black bg-linear-to-r from-theme via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}