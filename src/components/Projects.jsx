import { motion } from "framer-motion";
import { content } from "../Content";

const Projects = () => {
  const { Projects } = content;

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-16 md:flex md:items-end md:justify-between grid gap-4">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              {Projects.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-secondary text-lg"
            >
              Selected personal and academic projects demonstrating system design, frontend architecture, and full-stack integration.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Projects.project_content.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col gap-4"
            >
              <a
                href={project.link !== " " ? project.link : "#"}
                target={project.link !== " " ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface border border-white/5"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gradient overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
              </a>

              <div>
                <h3 className="text-xl font-medium tracking-tight mb-2 group-hover:text-accent transition-colors">
                  <a
                    href={project.link !== " " ? project.link : "#"}
                    target={project.link !== " " ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                {project.description && (
                  <p className="text-secondary mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                )}

                <div className="flex items-center gap-4">
                  {project.link && project.link !== " " && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent inline-flex items-center gap-1 text-sm font-medium transition-colors"
                    >
                      View Live <i className="bx bx-right-arrow-alt text-lg"></i>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary inline-flex items-center gap-1 text-sm transition-colors"
                    >
                      <i className="bx bxl-github text-base"></i> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;