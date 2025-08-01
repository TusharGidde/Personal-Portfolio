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
import projectFourth from "./assets/Projects/projectthird.png"
import mongo from "./assets/Skills/mongo.jpg"
import projectthird from "./assets/Projects/img3.png";

import sbgi from "././assets/Education/sbgi.jpeg";
import vit from "./assets/Education/vit.jpg";
import jjm from "./assets/logo.png";
import school from "././assets/Education/school.jpeg"

import devtown from "./assets/certification/devtown.png"

import shopesy from "./assets/Projects/image.png"
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
      link:"https://codehelp.com"
    },
    {
     name: "OOP in C++  ",
      icon: devtown,
      link:"https://drive.google.com/drive/folders/1zONcXgcXMSLGwuN-RKhvWmv8HmSnCwOD"
    },
    {
      name: "Java core concepts ",
      icon: devtown,
      link:"https://drive.google.com/drive/folders/1zONcXgcXMSLGwuN-RKhvWmv8HmSnCwOD"
    },
    {
      name: "Self paced datastructure and algorithms ",
      icon: devtown,
      link:"https://drive.google.com/drive/folders/1zONcXgcXMSLGwuN-RKhvWmv8HmSnCwOD"
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
        link: "https://www.linkedin.com/in/tushar-gidde-092625216/",
      },
       {
        name: "gmail",
        link: "mailto:tushargidde007@gmail.com",
      }
    ],
    image: Hero_person,
    hero_content: [
      {
        // count: "Software Engineer Coding Dreams into Reality ",
      
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
        title: "Shop Now (basic react frontend)",
        image:shopesy ,
        link: "https://shopsy-73m8slk36-tushargiddes-projects.vercel.app/",
        deploy: ""
      },
      {
        title: "StudyNotion an Online Education Platform",
        image: projectsecond,
        link: "https://studynotion-frontend-self-six.vercel.app/",
        deploy: ""
      },
      {
        title: "GameHub - Classic Games Collection - Pure HTML, CSS & JavaScript",
        image: projectFourth,
        link: "https://tic-tak-toe-mu-gules.vercel.app/",
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
        img: jjm,
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
