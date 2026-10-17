import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import CertificationList from "./components/CertificationList";

const App = () => {
  return (
    <div className="relative min-h-[100dvh] bg-background text-primary selection:bg-accent/30 selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <CertificationList />
        <Education />
        <Contact />
      </main>

      <footer className="bg-surface border-t border-surfaceElevated py-12 text-center mt-20">
        <div className="container mx-auto px-6">
          <p className="text-secondary font-mono text-sm">
            © {new Date().getFullYear()} Tushar Gidde. Built with React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;