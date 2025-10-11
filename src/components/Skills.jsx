import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { content } from "../Content";

const Skills = () => {
  const { skills } = content;
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="min-h-screen py-20 flex justify-center items-center bg-cyber_darker relative overflow-hidden"
      id="skills"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 matrix-bg opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-neon_purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon_blue/10 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        className="container px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
        >
          <h2 className="text-6xl lg:text-7xl font-Orbitron font-bold mb-4">
            {skills.title}
          </h2>
          <div className="w-32 h-1 bg-neonGradient mx-auto rounded-full shadow-glow"></div>
          <p className="text-xl text-gray-400 mt-6 font-Rajdhani">
            Technologies I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {skills.skills_content.map((skill, i) => (
            <motion.div
              key={i}
              className="cyber-card group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(0, 212, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Holographic Scan Line */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-neon_blue/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center gap-6 p-6">
                {/* Skill Logo */}
                <motion.div
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-neon_blue/20 to-neon_purple/20 flex items-center justify-center border border-neon_blue/30 shadow-neon">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 object-contain filter brightness-110"
                    />
                  </div>
                  
                  {/* Floating particles around logo */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-neon_blue rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                </motion.div>

                {/* Skill Info */}
                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-Orbitron font-semibold text-white mb-2"
                    whileHover={{ color: "#00D4FF" }}
                  >
                    {skill.name}
                  </motion.h3>
                  <p className="text-gray-400 font-Space text-sm leading-relaxed">
                    {skill.para}
                  </p>
                  
                  {/* Skill Level Indicator */}
                  <div className="mt-4">
                    <div className="w-full bg-cyber_dark rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-neonGradient rounded-full shadow-glow"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "85%" } : { width: 0 }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Icon */}
                <motion.div
                  className="absolute top-4 right-4 text-neon_blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                >
                  <i className="bx bx-code-alt text-xl"></i>
                </motion.div>
              </div>

              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-neonGradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-neon_blue/20 font-mono text-sm"
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i * 12)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              {["</>", "{}", "[]", "()", "&&", "||"][i]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
