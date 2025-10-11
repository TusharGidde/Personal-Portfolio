import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden matrix-bg">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber_darker via-cyber_dark to-cyber_darker">
        <div className="absolute inset-0 bg-cyberGrid bg-[size:100px_100px] animate-matrix opacity-20"></div>
      </div>

      {/* Floating Neon Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-neon_blue/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-neon_purple/30 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 bg-neon_pink/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="min-h-screen relative flex items-center justify-center py-8">
        <motion.div
          ref={ref}
          className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Content Section */}
          <motion.div
            className="space-y-8 text-white order-2 lg:order-1"
            variants={itemVariants}
          >
            {/* Glitch Effect Title */}
            <div className="space-y-6">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-Orbitron font-black tracking-wider leading-tight">
                  {hero.title}
                </h1>
                {/* Glitch overlay */}
                <div className="absolute inset-0 text-5xl sm:text-6xl lg:text-8xl font-Orbitron font-black tracking-wider leading-tight text-neon_blue opacity-20 animate-cyber-pulse">
                  {hero.title}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <p className="text-xl sm:text-2xl font-Rajdhani font-light text-gray-300 leading-relaxed">
                  <span className="text-neon_blue">Software Engineer</span> Coding Dreams into{" "}
                  <span className="text-neon_purple">Reality</span>
                </p>
                <div className="h-1 w-32 bg-neonGradient rounded-full mt-4 shadow-glow"></div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-6 pt-6"
              variants={itemVariants}
            >
              {/* Resume Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://drive.google.com/file/d/1CQYnIRP7JL_1n6FCk1TjIDCENDtP_I4W/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold"
                >
                  <motion.i
                    className="bx bx-download text-xl"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {hero.btnText}
                </a>
              </motion.div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {hero.social_media.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 cyber-card flex items-center justify-center text-neon_blue hover:text-white transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <i className={`bx bxl-${social.name} text-2xl`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative flex justify-center items-center order-1 lg:order-2"
            variants={itemVariants}
          >
            {/* Holographic Frame */}
            <div className="relative">
              {/* Rotating Rings */}
              <motion.div
                className="absolute -inset-8 border-2 border-neon_blue/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-12 border border-neon_purple/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-16 border border-neon_pink/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Holographic Glow */}
                <div className="absolute inset-0 bg-neonGradient rounded-full blur-xl opacity-30 animate-glow"></div>
                
                {/* Image Frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neon_blue/50 shadow-neon backdrop-blur-sm">
                  <img
                    src={hero.image}
                    alt="Portfolio Hero"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neon_blue/20 via-transparent to-neon_purple/20"></div>
                  
                  {/* Scan Lines Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon_blue/5 to-transparent animate-cyber-pulse"></div>
                </div>

                {/* Floating Data Points */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 bg-neon_blue rounded-full shadow-glow`}
                    style={{
                      top: `${20 + (i * 10)}%`,
                      left: `${15 + (i * 8)}%`,
                    }}
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon_blue rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-neon_blue rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;