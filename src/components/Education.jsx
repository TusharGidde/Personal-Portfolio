import { motion } from "framer-motion";
import { content } from "../Content";

const Education = () => {
  const { education } = content;

  return (
    <section id="education" className="py-24 px-6 bg-background border-t border-white/5">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            {education.title}
          </motion.h2>
        </div>

        <div className="space-y-4">
          {education.education_content.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group block p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="w-16 h-16 rounded-xl bg-background border border-white/5 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.college}
                    className="w-12 h-12 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-xl font-medium tracking-tight text-primary">
                    {item.name}
                  </h3>
                  <p className="text-secondary">
                    {item.college}
                  </p>
                </div>
                {item.CGPA && (
                  <div className="sm:text-right mt-4 sm:mt-0">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                      CGPA: {item.CGPA}
                    </span>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;