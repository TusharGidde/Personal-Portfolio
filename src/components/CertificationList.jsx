import { motion } from "framer-motion";
import { content } from "../Content";

const CertificationList = () => {
  const { certificate } = content;

  return (
    <section id="certificate" className="py-24 px-6 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Certifications
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {certificate.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl bg-background border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-xl bg-surfaceElevated flex items-center justify-center border border-white/5 overflow-hidden flex-shrink-0">
                <img
                  src={cert.icon}
                  alt={cert.name}
                  className="w-10 h-10 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium tracking-tight text-primary group-hover:text-accent transition-colors">
                  {cert.name}
                </h3>
              </div>
              <div className="shrink-0 text-secondary group-hover:text-accent transition-colors hidden sm:block">
                <i className="bx bx-right-top-arrow-circle text-2xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all"></i>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationList;