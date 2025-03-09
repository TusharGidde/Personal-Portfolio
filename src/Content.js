// import images
import Hero_person from './assets/Hero/image.png';

import sql from "./assets/Skills/mysql.png";
import sketch from "./assets/Skills/sketch.png";
import java from "./assets/Skills/java.png";
import reactjs from "./assets/Skills/react.png";
import nodejs from "./assets/Skills/node.png";
import python from "./assets/Skills/python.png";
import javascript from "./assets/Skills/javascript.jpeg"
import express from "./assets/Skills/expressjs.jpeg";
import cplos from "./assets/Skills/c++.jpeg";

import codehlep from "./assets/certification/codehelp.jpeg"
import codenija from "./assets/certification/codeing.jpeg"
import linkedin from "./assets/certification/linkedin.jpeg"
import udemy from "./assets/certification/udemy.jpeg"

import ssd from "./assets/Projects/ssd.jpg"
import rfid from "./assets/Projects/rfid.jpg"
import projectsecond from "./assets/Projects/studynotion.png"
import mongo from "./assets/Skills/mongo.jpg"
import projectthird from "./assets/Projects/img3.png";

import sbgi from "././assets/Education/sbgi.jpeg";
import vit from "./assets/Education/vit.jpg";
import school from "././assets/Education/school.jpeg"


// import icons from react-icons
import { IoBook } from "react-icons/io5";
import { FaCertificate } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: FaRegStar,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#certificate",
      icon: FaCertificate,
    },
    {
      link: "#education",
      icon: IoBook,
    },
   
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  certificate: [
    {
     name: "MERN Stack By CodeHelp",
      icon: codehlep,
      link:"https://drive.google.com/file/d/1D9JXfl1QVDWNIeP8I7H39eJROI80ziKn/view"
    },
    {
     name: " Full Stack Application (LinkedIn Learning)",
      icon: linkedin,
      link:"https://drive.google.com/file/d/1heeV32bKb9BCmZa2FkgAnyPzzHZEK889/view"
    },
    {
     name: "OOP in C++  (Code Studio)",
      icon: codenija,
      link:"https://drive.google.com/file/d/11w6iaDwG5d073jMNDENqh_eISp6j15kF/view"
    },
    {
      name: "Javascript Basics (Code Studio) ",
      icon: codenija,
      link:"https://drive.google.com/file/d/1074Mxz_EVgMgNI0p6CUaqGS20aBZ1Atm/view"
    },
    {
      name: "Mendix Low Code Application  (Udemy)  ",
      icon: udemy,
      link:"https://drive.google.com/file/d/1eHVfvJNG5l6zpcJlFShVpTd6dF_kNqPG/view"
    },
  ],
  hero: {
    title: "Tushar Gidde",
    firstName: "Tushar",
    LastName: "Gidde",
    btnText: "Resume",
    social_media: [
      {
        name: "linkedin",
        link: "http://www.linkedin.com/in/satwik-divate",
      },
       {
        name: "gmail",
        link: "mailto:satwikdivate.com",
      }
    ],
    image: Hero_person,
    hero_content: [
      {
        count: "Software Engineer Coding Dreams into Reality ",
      
      },
    ],
  },
  skills: {
    title: "Skills",
    skills_content: [
      {
        name: "C++",
        // para: "Lorem ipsum text  dummy",
        logo: cplos,
      },
      {
        name: "Java",
        // para: "Lorem ipsum text  dummy",
        logo: java,
      },
      // {
      //   name: "Python",
      //   // para: "Lorem ipsum text  dummy",
      //   logo: python,
      // },
      {
        name: "MySQL",
        // para: "Lorem ipsum text  dummy",
        logo: sql,
      },
      {
        name:"MongoDB",
        logo:mongo
      },
      {
        name: "React js",
        // para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Node js",
        // para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },     
      {
        name: "JavaScript",
        // para: "Lorem ipsum text  dummy",
        logo: javascript,
      },
      {
        name: "Express Js",
        // para: "Lorem ipsum text  dummy",
        logo: express,
      },
    ],
    icon: MdArrowForward,
  },
  Projects: {
    title: "Projects",

    project_content: [
      {
        title: "Swami Dayanand Saraswati Shakha Student Portal",
        image:ssd ,
        link: "https://sdss-portal.vercel.app/",
        deploy: ""
      },
      {
        title: "StudyNotion an Online Education Platform",
        image: projectsecond,
        link: "https://studynotion-frontend-self-six.vercel.app/",
        deploy: ""
      },
      {
        title: "Smart Card Attendance Monitoring System usin RFID",
        image: rfid,
        link: " ",
        deploy: ""
      },
     

    ],
  },
  education: {
    title: "Education",

    education_content: [
      {
        college:
          "Dr. J. J. Magdum College Of Engineering, Jaysingpur",
        img: vit,
        name: "Computer Science and Engineering", 
        // CGPA:7.00,
        link:"https://drive.google.com/file/d/10-ql0ceFI13JCu-EAtF9v_jelPvfJW6e/view?usp=sharing"
      },
      {
        college:
          "Sanjay Bhokare Group of Institutes ,Sangli",
        img: sbgi,
        name: "Diploma in Computer Engineering",
        // CGPA:"86.37%",
        "link":"https://drive.google.com/file/d/1VsofHlv3ivQPBbg8ZHzt-XZ8q6L5qYWw/view?usp=sharing"
      },
      {
        college:
          "Sangli Highschool Sangli",
        img: school,
        name: "10th",
        // CGPA:"92.40%",
        "link":"https://drive.google.com/file/d/1saKW3dPxHDogagQVZpbBoP3_oLa8xEMn/view?usp=sharing"
      },
    ],
  },

  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "tushargidde007@gmail.com",
        icon: GrMail,
        link: "mailto:tushargidde007@gmail.com",
      },
      {
        text: "+91 9518947453",
        icon: MdCall,
        link: "https://wa.me/8669480758",
      },
    
    ],
  },
  Footer: {
    text: "",
  },
};
