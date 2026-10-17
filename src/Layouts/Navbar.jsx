import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { content } from "../Content";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [active, setActive] = useState(0);

  // Update active state based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = nav.map((item) => {
        const id = item.link.substring(1);
        return document.getElementById(id);
      });

      let current = 0;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop - 200;
          if (scrollY >= sectionTop) {
            current = i;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nav]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-auto">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-1 p-2 bg-surface/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-full"
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className="relative flex items-center justify-center w-12 h-12 rounded-full transition-colors group"
            aria-label={`Navigate to ${item.link}`}
          >
            {active === i ? (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            ) : null}
            <div
              className={`relative z-10 transition-colors ${
                active === i ? "text-white" : "text-secondary group-hover:text-primary"
              }`}
            >
              {createElement(item.icon, { size: 20 })}
            </div>

            {/* Tooltip on hover */}
            <div className="absolute -top-10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all pointer-events-none bg-surfaceElevated text-xs font-medium px-2 py-1 rounded shadow-lg border border-white/5">
              {item.link.substring(1).charAt(0).toUpperCase() + item.link.substring(2)}
            </div>
          </a>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navbar;