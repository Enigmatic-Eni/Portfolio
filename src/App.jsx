import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Services/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}