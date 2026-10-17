import { motion } from "framer-motion";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center justify-center pt-24 pb-12 px-6"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="order-2 md:order-1 flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-[500px]"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-balance">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              Software engineer. I build modern, scalable web applications with a focus on polished user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1CQYnIRP7JL_1n6FCk1TjIDCENDtP_I4W/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Resume
            </a>

            <div className="flex items-center gap-2">
              {hero.social_media.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-surfaceElevated hover:bg-zinc-700 transition-colors text-primary"
                  aria-label={social.name}
                >
                  <i className={`bx bxl-${social.name} text-xl`}></i>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Image Asset */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden bg-surfaceElevated grayscale hover:grayscale-0 transition-all duration-700">
            {/* Fallback pattern if image is missing */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* The actual image */}
            <img
              src={hero.image}
              alt="Tushar Gidde"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              style={{ objectPosition: 'center top' }}
            />
            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;