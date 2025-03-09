import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useEffect } from "react";
import CertificationList from "./components/CertificationList";


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <CertificationList/>
      <Education />
      <Contact />
      <footer className="p-3 text-center">
      
      </footer>
    </div>
  );
};

export default App;
