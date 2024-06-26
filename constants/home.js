import { FaTiktok, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const navLinks = [
  {
    title: "About",
    cName: "nav_item",
    url: "/about",
  },
  {
    title: "Skills",
    cName: "nav_item",
    url: "/skills",
  },
  {
    title: "Projects",
    cName: "nav_item",
    url: "/projects",
  },
  {
    title: "Contact",
    cName: "nav_item",
    url: "/contact",
  },
  {
    title: "Resume",
    url: "#",
    cName: "cta_resume",
  },
];

export const emailLink =
  "https://mail.google.com/mail/u/0/?to=cpizarra002@gmail.com&su=&body=&fs=1&tf=cm";

export const footerSocials = [
  {
    name: "facebook",
    logo: <FaFacebookF size={22} />,
    url: "https://web.facebook.com/cesar.pizarra.1/",
  },
  {
    name: "instagram",
    logo: <AiFillInstagram size={22} />,
    url: "https://www.instagram.com/_cezaru_/",
  },
  {
    name: "tiktok",
    logo: <FaTiktok size={22} />,
    url: "https://www.tiktok.com/@cesar_pizarra?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "linkedin",
    logo: <FaLinkedinIn size={22} />,
    url: "https://www.linkedin.com/in/cesar-pizarra-610336258/",
  },
  {
    name: "github",
    logo: <FaGithub size={22} />,
    url: "https://github.com/cesarpizarra",
  },
];

export const heroData = {
  name: "Cesar Pizarra",
  subheading: "Let's build something great together!",
  description:
    "I'm an aspiring front-end web developer passionate about bringing innovative and accessible web designs to life.",
};

export const aboutData = {
  heading: [
    "Hi there! I'm Cesar, and I'm on a journey to pursue a career in web development. I've always been fascinated by the power of websites and their ability to solve problems and automate processes.",
    "Since then, my passion for web development has only grown stronger. I began my dedicated journey in 2022, diving into the world of coding and web technologies. With each project, I aim to push boundaries, deliver exceptional user experiences, and make a positive impact through technology.",
    "As I embark on this exciting path, I'm driven by curiosity, a thirst for learning, and a willingness to embrace challenges. I believe that web development holds immense potential, and I'm committed to honing my skills to create innovative web solutions that leave a lasting impression.",
  ],
  education: {
    course: "Bachelor of Science in Computer Science",
    school: "Don Mariano Marcos Memorial State University",
  },
  certification: {
    title: "Web Developer of the Year",
    school: "Don Mariano Marcos Memorial State University",
  },
};

export const skills = [
  {
    name: "HTML",
    logo: "htmlicon.png",
  },
  {
    name: "CSS",
    logo: "css.png",
  },
  {
    name: "Javascript",
    logo: "js.png",
  },

  {
    name: "TypeScript",
    logo: "typescript.png",
  },
  {
    name: "React",
    logo: "react.png",
  },
  {
    name: "Next",
    logo: "nextjs.png",
  },
  {
    name: "Tailwind",
    logo: "tailwind.png",
  },
  {
    name: "Bootstrap",
    logo: "bootstrap.png",
  },
  {
    name: "Node Js",
    logo: "node js.png",
  },
  {
    name: "Express",
    logo: "express.png",
  },
  {
    name: "Mongo DB",
    logo: "mongo db.png",
  },
  {
    name: "Git",
    logo: "git.png",
  },
  {
    name: "Postman",
    logo: "postman.png",
  },
  {
    name: "Vite",
    logo: "vite.png",
  },
  {
    name: "VSCode",
    logo: "vs code.png",
  },
  {
    name: "Figma",
    logo: "figma.png",
  },
];

export const projects = [
  {
    title: "My Portfolio Website",
    description: "My second Front-end web developer portfolio website.",
    techsUsed: ["Next", "Tailwind", "Framer Motion"],
    image: "portfolio2.png",
    liveUrl: "https://cpizarra.vercel.app",
    githubUrl: "#",
  },

  {
    title: "Todo App",
    description:
      "A Todo App with a dark/light mode theme switcher and local storage. A challenge from the Frontend Mentor website.",
    techsUsed: ["Next", "Tailwind"],
    image: "todo-app.png",
    liveUrl: "https://todo-app-teal-nu.vercel.app/",
    githubUrl: "https://github.com/cesarpizarra/todo-app",
  },

  {
    title: "Bookmark Landing Page",
    description:
      "A Bookmark Landing Page challenge from the Frontend Mentor website.",
    techsUsed: ["React", "Vite", "Tailwind"],
    image: "bookmark-landingpage.png",
    liveUrl: "https://bookmark-landing-page-ten-silk.vercel.app/",
    githubUrl: "https://github.com/cesarpizarra/bookmark-landing-page",
  },
];

export const otherProjects = [
  {
    title: "Faculty Evaluation System",
    description:
      "A simple UI for Faculty Evaluation System that I created to apply what I've learned in Tailwindcss.",
    techsUsed: ["HTML", "CSS", "Javascript", "Tailwind"],
    image: "faculty-evaluation.png",
    liveUrl: "https://facultyevaluationsytem-cb.netlify.app/",
    githubUrl: "https://github.com/sezaru-dev/faculty-evaluation-system",
  },
  {
    title: "Hiragana Multiple Choice",
    description:
      "A simple Hiragana Multiple Choice App that I created when I started learning Javascript. Aims to make memorizing Japanese Hiragana fun.",
    techsUsed: ["HTML", "CSS", "Javascript"],
    image: "hiragana-multiple-choice.png",
    liveUrl: "https://hiraganamultiplechoice.netlify.app/",
    githubUrl: "https://github.com/sezaru-dev/hiragana-multiple-choice",
  },
  {
    title: "Hiragana Memorization Game",
    description:
      "A simple Hiragana Memorization Game that I created when I started learning Javascript. Aims to make memorizing Japanese Hiragana fun when I'm studying Japanese Language.",
    techsUsed: ["HTML", "CSS", "Javascript"],
    image: "hiragana-memorization-game.png",
    liveUrl: "https://hiraganamemorizationgame.netlify.app/",
    githubUrl: "https://github.com/sezaru-dev/hiragana-memorization-game",
  },
];

export const schoolProjects = [
  {
    title: "CCS FES",
    description:
      "Automates the manual evaluation of College of Computer Studies Faculty Members.",
    techsUsed: ["HTML", "CSS", "Javascript", "ASP.net", "MS Access"],
    image: "ccsfes.png",
  },
  {
    title: "Dr. Smart: An android application to diagnose patient's illness",
    description:
      "A simple app that diagnose patient's illness based on the symptoms provided.",
    techsUsed: ["C#", "Unity"],
    image: "drsmart.jpg",
  },
];

export const contactData = {
  title:
    "I am actively seeking opportunities as a web developer and would love to contribute to real projects while expanding my skill set. If you're interested, don't hesitate to reach out. I'm always available to connect and discuss potential collaborations.",
};
