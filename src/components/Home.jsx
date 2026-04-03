import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="Home"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36]
        }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm <span className="text-theme">Sanni Motunrayo</span>
      </motion.h1>

      <motion.div initial={{opacity: 0, y:30}}
      animate={{opacity: 1, y:0}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5}} className=" pt-2 font-semibold text-2xl">
      {`<> Frontend Developer </>`}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y:30 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ 
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 1 }}
        className="mt-2 text-gray-300 max-w-xl leading-relaxed"
      >
       I craft <span className=" text-theme">pixel-perfect, responsive web applications</span> with modern 
technologies like React, Next.js, and Tailwind CSS. Passionate about 
creating intuitive user experiences and clean, scalable code.
      </motion.p>

     <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <motion.a
          href="#Projects"
          whileHover={{ 
            scale: 1.05,
            y: -4,
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 17 
            }
          }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 bg-[#5F2475] text-white rounded-full font-semibold hover:bg-[#4A1B5E] transition-all duration-200 shadow-lg"
        >
          View My Work
        </motion.a>

        <motion.a
          href="/Motunrayo Eniola Sanni.pdf"
          download="Sanni-Motunrayo-Resume.pdf"
          whileHover={{ 
            scale: 1.05,
            y: -4,
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 17 
            }
          }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 border-2 border-[#5F2475] text-[#5F2475] rounded-full font-semibold hover:bg-[#5F2475] hover:text-white transition-all duration-200 shadow-lg"
        >
          My Resume
        </motion.a>
      </motion.div>
    </section>
  );
}