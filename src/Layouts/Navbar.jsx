import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;

  return (
    <div className="w-full flex justify-center">
      
      <nav
        className={`fixed z-[999] flex items-center gap-5 bg-slate-200/20 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 bottom-10 border border-0.5 border-black-100`}
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
