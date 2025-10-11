import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { content } from "../Content";

const Education = () => {
  const { education } = content;
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
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
    <section className="min-h-screen bg-cyber_darker relative overflow-hidden py-20" id="education">
      {/* Background Effects */}
      <div className="absolute inset-0 matrix-bg opacity-5"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-neon_green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon_purple/10 rounded-full blur-3xl"></div>

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
            {education.title}
          </h2>
          <div className="w-32 h-1 bg-neonGradient mx-auto rounded-full shadow-glow"></div>
          <p className="text-xl text-gray-400 mt-6 font-Rajdhani">
            Academic journey and achievements
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-neonGradient shadow-glow hidden md:block"></div>

          <div className="space-y-12">
            {education.education_content.map((item, i) => (
              <motion.div
                key={i}
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 w-6 h-6 bg-neon_blue rounded-full border-4 border-cyber_darker shadow-glow hidden md:block"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0, 212, 255, 0.5)",
                      "0 0 40px rgba(0, 212, 255, 0.8)",
                      "0 0 20px rgba(0, 212, 255, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />

                {/* Education Card */}
                <div className="md:ml-20 ml-0">
                  <div className="cyber-card group relative overflow-hidden">
                    {/* Holographic Scan Line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-neon_blue/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                    />

                    <div className="flex items-center gap-8 p-8 md:flex-row flex-col text-center md:text-left">
                      {/* Institution Logo */}
                      <motion.div
                        className="relative flex-shrink-0"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-24 h-24 bg-gradient-to-br from-neon_blue/20 to-neon_purple/20 rounded-2xl flex items-center justify-center border border-neon_blue/30 shadow-neon">
                          <img
                            src={item.img}
                            alt={item.college}
                            className="w-16 h-16 object-contain filter brightness-110"
                          />
                        </div>
                        
                        {/* Floating particles around logo */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-neon_blue rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      </motion.div>

                      {/* Education Details */}
                      <div className="flex-1 space-y-4">
                        <motion.h3
                          className="text-2xl font-Orbitron font-semibold text-white group-hover:text-neon_blue transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {item.name}
                        </motion.h3>

                        <div className="space-y-2">
                          <p className="text-neon_purple font-Rajdhani font-semibold text-lg">
                            {item.college}
                          </p>
                          
                          {item.CGPA && (
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                              <span className="text-gray-400 font-Space">CGPA:</span>
                              <motion.span
                                className="text-neon_green font-bold font-Orbitron text-lg"
                                animate={{
                                  textShadow: [
                                    "0 0 10px rgba(16, 185, 129, 0.5)",
                                    "0 0 20px rgba(16, 185, 129, 0.8)",
                                    "0 0 10px rgba(16, 185, 129, 0.5)",
                                  ],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                {item.CGPA}
                              </motion.span>
                            </div>
                          )}

                          {item.year && (
                            <p className="text-gray-400 font-Space">
                              <i className="bx bx-calendar mr-2 text-neon_blue"></i>
                              {item.year}
                            </p>
                          )}
                        </div>

                        {/* Achievement Badges */}
                        {item.achievements && (
                          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {item.achievements.map((achievement, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-neon_blue/20 text-neon_blue text-sm rounded-full border border-neon_blue/30 font-Rajdhani"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Hover Effect Icon */}
                      <motion.div
                        className="absolute top-4 right-4 text-neon_blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                      >
                        <i className="bx bx-graduation text-2xl"></i>
                      </motion.div>
                    </div>

                    {/* Bottom Glow Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-neonGradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Academic Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-neon_blue/10 text-2xl"
              style={{
                top: `${15 + (i * 12)}%`,
                right: `${8 + (i * 10)}%`,
              }}
              animate={{
                y: [-15, 15, -15],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            >
              {["🎓", "📚", "🏆", "📜", "🔬", "💡"][i]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
