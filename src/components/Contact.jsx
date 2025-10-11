import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";
import { mailSend } from "../Services/sendMail";

const Contact = () => {
  const { Contact } = content;
  const { register, handleSubmit, reset } = useForm();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Sending Email
  const sendEmail = async (data) => {
    setIsSubmitting(true);
    try {
      await mailSend(data.message, data.user_email);
      reset();
      toast.success("Message sent successfully! 🚀", {
        style: {
          background: '#1A1A1A',
          color: '#00D4FF',
          border: '1px solid #00D4FF',
        },
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        style: {
          background: '#1A1A1A',
          color: '#EC4899',
          border: '1px solid #EC4899',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <section className="min-h-screen bg-cyber_darker relative overflow-hidden py-20" id="contact">
      <Toaster position="top-right" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 matrix-bg opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon_blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon_purple/10 rounded-full blur-3xl"></div>

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
          variants={itemVariants}
        >
          <h2 className="text-6xl lg:text-7xl font-Orbitron font-bold mb-4">
            {Contact.title}
          </h2>
          <div className="w-32 h-1 bg-neonGradient mx-auto rounded-full shadow-glow"></div>
          <p className="text-xl text-gray-400 mt-6 font-Rajdhani">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="cyber-card">
              <h3 className="text-2xl font-Orbitron font-semibold text-neon_blue mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-neon_blue/20 rounded-xl flex items-center justify-center border border-neon_blue/30 group-hover:shadow-glow transition-all duration-300">
                    <i className="bx bx-phone text-neon_blue text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-Rajdhani">Phone</p>
                    <p className="text-white font-Space">+91 9518947453</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-neon_purple/20 rounded-xl flex items-center justify-center border border-neon_purple/30 group-hover:shadow-glow transition-all duration-300">
                    <i className="bx bx-envelope text-neon_purple text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-Rajdhani">Email</p>
                    <p className="text-white font-Space">tushargidde007@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-neon_pink/20 rounded-xl flex items-center justify-center border border-neon_pink/30 group-hover:shadow-glow transition-all duration-300">
                    <i className="bx bx-map text-neon_pink text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-Rajdhani">Location</p>
                    <p className="text-white font-Space">Available Worldwide</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Holographic Display */}
            <motion.div
              className="cyber-card relative overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 212, 255, 0.3)",
                  "0 0 40px rgba(139, 92, 246, 0.3)",
                  "0 0 20px rgba(0, 212, 255, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center p-6">
                <div className="text-4xl font-Orbitron font-bold text-neon_blue mb-2">
                  24/7
                </div>
                <p className="text-gray-400 font-Rajdhani">
                  Available for collaboration
                </p>
              </div>
              
              {/* Scan lines effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-neon_blue/10 to-transparent"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="cyber-card"
            variants={itemVariants}
          >
            <form
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    {...register("name")}
                    className="w-full p-4 bg-cyber_dark border border-neon_blue/30 rounded-xl text-white placeholder-gray-400 focus:border-neon_blue focus:shadow-neon transition-all duration-300 font-Space"
                  />
                  <div className="absolute inset-0 bg-neonGradient opacity-0 hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="user_email"
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                    placeholder="Your Email"
                    required
                    {...register("user_email")}
                    className="w-full p-4 bg-cyber_dark border border-neon_blue/30 rounded-xl text-white placeholder-gray-400 focus:border-neon_blue focus:shadow-neon transition-all duration-300 font-Space"
                  />
                  <div className="absolute inset-0 bg-neonGradient opacity-0 hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    {...register("message")}
                    rows="6"
                    className="w-full p-4 bg-cyber_dark border border-neon_blue/30 rounded-xl text-white placeholder-gray-400 focus:border-neon_blue focus:shadow-neon transition-all duration-300 resize-none font-Space"
                    required
                  ></textarea>
                  <div className="absolute inset-0 bg-neonGradient opacity-0 hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg font-semibold relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bx bx-send text-xl"></i>
                      Send Message
                    </>
                  )}
                </span>
                
                {/* Button glow effect */}
                <motion.div
                  className="absolute inset-0 bg-neonGradient opacity-20"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-neon_blue/10 font-mono text-xs"
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${5 + (i * 18)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            >
              {["@", "#", "$", "%", "&"][i]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
