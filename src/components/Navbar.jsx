import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl border-b border-gray-800/50 z-50 px-6 lg:px-10 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <motion.div 
        className="text-xl font-bold text-theme"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <a href="https://github.com/Enigmatic-Eni" target="_blank" rel="noopener noreferrer">Motunrayo Sanni</a>
        
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-2 lg:gap-8">
        {links.map((link, index) => (
          <motion.a
            key={link}
            href={`#${link}`}
            className="relative font-medium text-gray-300 hover:text-theme px-3 py-2 rounded-full transition-all duration-300 group"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {link}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-theme to-purple-600 w-0 group-hover:w-4/5 rounded-full transition-all duration-300 origin-center" />
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button 
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-xl backdrop-blur-sm bg-black/50 hover:bg-black/80 transition-all duration-200"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
      >
        <svg 
          className={`w-6 h-6 transition-all duration-300 ${open ? 'rotate-90' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-t border-gray-800/50 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {links.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-semibold text-gray-200 hover:text-theme px-6 py-3 rounded-2xl backdrop-blur-sm bg-black/30 hover:bg-theme/10 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}