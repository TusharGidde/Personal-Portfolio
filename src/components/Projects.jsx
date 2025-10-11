import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";

const Projects = () => {
  const { Projects } = content;
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
      className="min-h-screen py-20 bg-cyber_darker relative overflow-hidden"
      id="projects"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 matrix-bg opacity-5"></div>
      <div className="absolute top-40 left-10 w-96 h-96 bg-neon_pink/10 rounded-full blur-3xl"></div>
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
            {Projects.title}
          </h2>
          <div className="w-32 h-1 bg-neonGradient mx-auto rounded-full shadow-glow"></div>
          <p className="text-xl text-gray-400 mt-6 font-Rajdhani">
            Showcasing my digital creations
          </p>
        </motion.div>

        {/* Projects Swiper */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="pb-16 max-w-6xl mx-auto"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {Projects.project_content.map((project, i) => (
              <SwiperSlide key={i} className="w-80 h-auto">
                <motion.div
                  className="cyber-card group relative overflow-hidden h-full"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 50px rgba(0, 212, 255, 0.3)",
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neon_blue/20 via-transparent to-neon_purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Scan Lines */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-neon_blue/10 to-transparent"
                      animate={{
                        y: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Tech Stack Badges */}
                    <div className="absolute top-3 right-3 flex gap-1">
                      {project.technologies?.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-cyber_dark/80 text-neon_blue text-xs rounded-full border border-neon_blue/30 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 pt-0">
                    <motion.h3
                      className="text-xl font-Orbitron font-semibold text-white mb-3 group-hover:text-neon_blue transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-gray-400 font-Space text-sm leading-relaxed mb-6">
                      {project.description || "An innovative project showcasing modern web development techniques."}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.link && project.link !== " " && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn text-center py-2 px-4 text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="bx bx-link-external mr-2"></i>
                          Live Demo
                        </motion.a>
                      )}
                      
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn border-neon_purple text-neon_purple hover:bg-neon_purple py-2 px-4 text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="bx bxl-github mr-2"></i>
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Holographic Border Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-neon_blue/0 rounded-xl group-hover:border-neon_blue/30 transition-all duration-300"
                    whileHover={{
                      boxShadow: "inset 0 0 30px rgba(0, 212, 255, 0.1)",
                    }}
                  />

                  {/* Corner Accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-neon_blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-neon_blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-neon_blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-neon_blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-neon_blue/10 font-mono text-xs"
              style={{
                top: `${30 + (i * 20)}%`,
                right: `${5 + (i * 15)}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            >
              {["function()", "const app =", "return jsx", "export default"][i]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
