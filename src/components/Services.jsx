import { motion } from "framer-motion";
import { useRef } from "react";


const techCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and dynamic user interfaces",
    techs: [
      {
        name: "React.js",
        logo: "../src/assets/react.png",
        desc: "Building dynamic, component-based user interfaces"
      },
      {
        name: "Nextjs",
        logo: "../src/assets/nextjs.png",
        desc: "Server-side rendering and optimized web apps"
      },
      {
        name: "TypeScript",
        logo: "../src/assets/typescript.png",
        desc: "Type-safe JavaScript for scalable applications"
      },
      {
        name: "Tailwind CSS",
        logo: "../src/assets/tailwind.png",
        desc: "Utility-first CSS for rapid UI development"
      },
      {
        name: "Javascript",
        logo: "../src/assets/javascript.png",
        desc: "Modern ES6+ Javascript development"
      },
      {
        name: "HTML 5",
        logo: "../src/assets/html.png",
        desc: "Semantic and accessible markup"
      },
       {
        name: "CSS3",
        logo: "../src/assets/css3.png",
        desc: "Advanced styling and animations"
      },
    ]
  },
  {
    title: "Backend Development",
    description: "Building APIs and server-side logic",
    techs: [
      {
        name: "Node.js",
        logo: "../src/assets/nodejs.png",
        desc: "JavaScript runtime for building backend services"
      },
      {
        name: "Express.js",
        logo: "../src/assets/expressjs.png",
        desc: "Minimal framework for building REST APIs"
      },
      {
        name: "REST APIs",
        logo: "../src/assets/rest.png",
        desc: "Designing and integrating scalable APIs"
      }
    ]
  },
  {
    title: "Database Management",
    description: "Handling structured and unstructured data",
    techs: [
      {
        name: "MongoDB",
        logo: "../src/assets/mongo.png",
        desc: "NoSQL database for flexible data storage"
      },
     
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "CI/CD and cloud infrastructure",
    techs: [
      {
        name: "Linux",
        logo: "../src/assets/linux.png",
        desc: "Server environment and system operations"
      },
      {
        name: "Git",
        logo: "../src/assets/git.png",
        desc: "Version control and collaboration"
      },
      {
        name: "CI/CD",
        logo: "../src/assets/cicd.png",
        desc: "Automated testing and deployment pipelines"
      }
    ]
  },
  {
    title: "Dev Tools",
    description: "Tools for development and team collaboration",
    techs: [
      {
        name: "GitHub",
        logo: "../src/assets/github.png",
        desc: "Code hosting and collaboration"
      },
      {
        name: "Postman",
        logo: "../src/assets/postman.png",
        desc: "API testing and debugging"
      },
    ]
  }
];

export default function Services() {
  return (
    <section id="Services" className="py-24 px-4 md:px-10  mx-11">
      
      {/* Header */}
      <motion.div 
        className="text-center mb-20 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.h6 
          className="text-4xl font-semibold text-theme"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Services & Expertise
        </motion.h6>
{/*         
        <motion.h2 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-theme via-purple-600 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Comprehensive solutions
        </motion.h2> */}
        
        <motion.p 
          className="mt-2 text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Tailored to bring your digital vision to life
        </motion.p>
      </motion.div>

      {/* Tech Categories */}
{techCategories.map((category, index) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 250;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      key={category.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {category.title}
          </h3>
          <p className="text-gray-400 text-sm">
            {category.description}
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-theme transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-theme transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden"
      >
        {category.techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="min-w-55 bg-black/70 border border-gray-800 rounded-2xl p-6 shrink-0 transition-all duration-300 hover:border-theme/50"
          >
            {/* Logo */}
            <div className="w-14 h-14 mb-4">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <h4 className="text-white font-semibold mb-2">
              {tech.name}
            </h4>
            <p className="text-gray-400 text-sm">
              {tech.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
})}

      {/* CTA */}
      <motion.div 
        className="text-center mt-24"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        <motion.button 
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 bg-linear-to-r from-theme to-purple-600 text-white rounded-2xl font-bold text-lg backdrop-blur-sm border border-white/20 hover:from-theme/90 hover:to-purple-500/90 transition-all duration-300 shadow-2xl hover:shadow-theme/25 hover:cursor-pointer"
        >
          <a href="#Contact">Hire Me</a>
        </motion.button>
      </motion.div>
    </section>
  );
}