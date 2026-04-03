import { Mail, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-800 bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* LEFT - BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Motunrayo<span className="text-purple-500">.</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Frontend developer building modern, scalable web applications with
            a focus on performance, usability, and clean design.
          </p>
        </div>

        {/* CENTER - NAV */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <div className="flex flex-col gap-3 text-sm">
            <a href="#Home" className="hover:text-white transition">Home</a>
            <a href="#About" className="hover:text-white transition">About</a>
            <a href="#Projects" className="hover:text-white transition">Projects</a>
            <a href="#Contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>

        {/* RIGHT - CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get in Touch</h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-purple-400" />
              <span>eniolaoluwa.sanni@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-purple-400" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/Enigmatic-Eni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-900 hover:bg-purple-500/20 transition"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/motunrayo-sanni/"
              className="p-2 rounded-lg bg-gray-900 hover:bg-purple-500/20 transition"  target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Motunrayo Sanni. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}