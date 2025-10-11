import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../Content";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full flex justify-center">
      <motion.nav
        className={`fixed z-[999] flex items-center gap-2 px-6 py-3 backdrop-blur-xl rounded-2xl duration-500 transition-all ${
          scrolled
            ? "bottom-6 bg-cyber_dark/80 border border-neon_blue/30 shadow-cyber"
            : "bottom-10 bg-cyber_dark/60 border border-neon_blue/20 shadow-neon"
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Holographic Background Effect */}
        <div className="absolute inset-0 bg-neonGradient opacity-5 rounded-2xl"></div>
        
        {nav.map((item, i) => (
          <motion.div
            key={i}
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href={item.link}
              onClick={() => setActive(i)}
              className={`relative text-2xl p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
                active === i
                  ? "text-white bg-neon_blue/20 shadow-glow"
                  : "text-neon_blue hover:text-white hover:bg-neon_blue/10"
              }`}
            >
              {/* Active indicator */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    className="absolute inset-0 bg-neonGradient rounded-xl opacity-20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              
              {/* Icon with glow effect */}
              <motion.div
                className={`relative z-10 ${active === i ? "drop-shadow-glow" : ""}`}
                animate={active === i ? { 
                  textShadow: "0 0 20px rgba(0, 212, 255, 0.8)" 
                } : {}}
              >
                {createElement(item.icon)}
              </motion.div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-neon_blue/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </a>

            {/* Tooltip */}
            <motion.div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-cyber_dark border border-neon_blue/30 px-3 py-1 rounded-lg text-sm font-Rajdhani text-white opacity-0 pointer-events-none transition-opacity duration-300 hover:opacity-100"
              whileHover={{ opacity: 1, y: -5 }}
            >
              {item.title}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neon_blue/30"></div>
            </motion.div>
          </motion.div>
        ))}

        {/* Cyber scan line effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-neon_blue/10 to-transparent rounded-2xl"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.nav>
    </div>
  );
};

export default Navbar;
