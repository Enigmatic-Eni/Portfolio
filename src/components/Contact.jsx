import { Mail, MapPin, Send } from "lucide-react";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="Contact" className="py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or an opportunity you'd like to discuss?
            Let’s build something impactful together.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let’s Work Together</h3>
              <p className="text-gray-300 leading-relaxed">
                I’m always open to discussing new projects, creative ideas, or
                opportunities where I can contribute and grow. Whether you’re
                building a product, need a developer, or just want to connect,
                feel free to reach out.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-4">

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <Mail className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">eniolaoluwa.sanni@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <MapPin className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Connect with me</h4>
              <div className="flex gap-4 items-center">
                <a
                  href="https://www.instagram.com/dearmotun" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-xl items-center hover:bg-purple-500/20 transition"
                >
                  <FiInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/motunrayo-sanni/" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-xl hover:bg-purple-500/20 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="eniolaoluwa.sanni@gmail.com" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-xl hover:bg-purple-500/20 transition"
                >
                  <MdEmail />
                </a>
                   <a
                  href="https://x.com/dearmotun" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-xl hover:bg-purple-500/20 transition"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/50 border border-gray-800 rounded-2xl p-8 space-y-6 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4">Send me a message</h3>

            <div>
              <label className="text-sm text-gray-400">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-2 p-3 rounded-xl bg-black border border-gray-700 focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full mt-2 p-3 rounded-xl bg-black border border-gray-700 focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full mt-2 p-3 rounded-xl bg-black border border-gray-700 focus:border-purple-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition font-semibold"
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>

 
      </div>
    </section>
  );
}