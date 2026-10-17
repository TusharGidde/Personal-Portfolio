import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { content } from "../Content";

const Skills = () => {
  const { skills } = content;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            {skills.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary text-lg"
          >
            Core technologies and tools I rely on to build resilient applications.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.skills_content.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-background border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-surfaceElevated p-2">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-full h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div>
                <h3 className="font-medium text-primary text-sm md:text-base">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;