import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import CertificationList from "./components/CertificationList";
import ParticleBackground from "./components/ParticleBackground";

const App = () => {
  useEffect(() => {
    // Initialize AOS if needed
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-cyber_darker">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <CertificationList />
        <Education />
        <Contact />
        
        {/* Futuristic Footer */}
        <footer className="bg-cyber_dark border-t border-neon_blue/20 py-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon_blue/5 to-transparent"></div>
          <div className="relative z-10">
            <p className="text-gray-400 font-Rajdhani">
              © 2024 Portfolio. Crafted with{" "}
              <span className="text-neon_blue">React</span> &{" "}
              <span className="text-neon_purple">Framer Motion</span>
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <motion.div
                className="w-2 h-2 bg-neon_blue rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="w-2 h-2 bg-neon_purple rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="w-2 h-2 bg-neon_pink rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default App;
