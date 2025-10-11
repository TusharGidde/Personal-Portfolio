import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { content } from "../Content";

const CertificationList = () => {
  const { certificate } = content;
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
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
    <section className="min-h-screen bg-cyber_darker relative overflow-hidden py-20" id="certificate">
      {/* Background Effects */}
      <div className="absolute inset-0 matrix-bg opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon_pink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon_green/10 rounded-full blur-3xl"></div>

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
            Certifications
          </h2>
          <div className="w-32 h-1 bg-neonGradient mx-auto rounded-full shadow-glow"></div>
          <p className="text-xl text-gray-400 mt-6 font-Rajdhani">
            Professional achievements and credentials
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {certificate.map((cert, i) => (
            <motion.div
              key={i}
              className="cyber-card group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 40px rgba(0, 212, 255, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Holographic Scan Line */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-neon_purple/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center gap-6 p-6">
                {/* Certificate Icon */}
                <motion.div
                  className="relative flex-shrink-0"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-neon_purple/20 to-neon_pink/20 rounded-2xl flex items-center justify-center border border-neon_purple/30 shadow-neon overflow-hidden">
                    <img
                      src={cert.icon}
                      alt={cert.name}
                      className="w-16 h-16 object-contain filter brightness-110"
                    />
                  </div>
                  
                  {/* Verification Badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-neon_green rounded-full flex items-center justify-center border-2 border-cyber_darker"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 10px rgba(16, 185, 129, 0.5)",
                        "0 0 20px rgba(16, 185, 129, 0.8)",
                        "0 0 10px rgba(16, 185, 129, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <i className="bx bx-check text-white text-xs"></i>
                  </motion.div>
                </motion.div>

                {/* Certificate Info */}
                <div className="flex-1 min-w-0">
                  <motion.h3
                    className="text-lg font-Orbitron font-semibold text-white mb-2 group-hover:text-neon_purple transition-colors duration-300 line-clamp-2"
                    whileHover={{ x: 5 }}
                  >
                    {cert.name}
                  </motion.h3>
                  
                  {cert.issuer && (
                    <p className="text-gray-400 font-Rajdhani text-sm mb-2">
                      Issued by: <span className="text-neon_blue">{cert.issuer}</span>
                    </p>
                  )}
                  
                  {cert.date && (
                    <p className="text-gray-400 font-Space text-sm flex items-center gap-2">
                      <i className="bx bx-calendar text-neon_green"></i>
                      {cert.date}
                    </p>
                  )}

                  {/* Skills Tags */}
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {cert.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-neon_purple/20 text-neon_purple text-xs rounded-full border border-neon_purple/30 font-Rajdhani"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  {cert.link && (
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-neon_blue/20 rounded-xl flex items-center justify-center border border-neon_blue/30 text-neon_blue hover:bg-neon_blue hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="bx bx-link-external text-sm"></i>
                    </motion.a>
                  )}
                  
                  <motion.button
                    className="w-10 h-10 bg-neon_purple/20 rounded-xl flex items-center justify-center border border-neon_purple/30 text-neon_purple hover:bg-neon_purple hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="bx bx-download text-sm"></i>
                  </motion.button>
                </div>
              </div>

              {/* Certificate Number/ID */}
              {cert.id && (
                <div className="absolute top-2 right-2 text-xs text-gray-500 font-mono">
                  #{cert.id}
                </div>
              )}

              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-neonGradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {[
            { number: certificate.length, label: "Certifications", icon: "bx-award" },
            { number: "100%", label: "Verified", icon: "bx-shield-check" },
            { number: "2024", label: "Latest", icon: "bx-calendar" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="cyber-card text-center p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl font-Orbitron font-bold text-neon_blue mb-2"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(0, 212, 255, 0.5)",
                    "0 0 40px rgba(0, 212, 255, 0.8)",
                    "0 0 20px rgba(0, 212, 255, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 font-Rajdhani flex items-center justify-center gap-2">
                <i className={`bx ${stat.icon} text-neon_purple`}></i>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Certificate Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-neon_purple/10 text-xl"
              style={{
                top: `${25 + (i * 20)}%`,
                left: `${10 + (i * 20)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.2,
              }}
            >
              {["🏆", "🎖️", "📋", "✅"][i]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationList;
