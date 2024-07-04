import { FaTiktok, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdCardTravel, MdMovie } from "react-icons/md";
import { FaCode, FaBrain, FaBook, FaGamepad, FaCamera } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { calculateAge, formatDate } from "../utils/date";
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
  // {
  //   title: "Resume",
  //   url: "#",
  //   cName: "cta_resume",
  // },
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

  personal_info: {
    birthDay: formatDate("2001-03-22"),
    city: "San Fernando",
    zipcode: "2509",
    website: "https://cpizarra.vercel.app",
    age: calculateAge("2001-03-22"),
    email: "cpizarra002@gmail.com",
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
    name: "Next Js",
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
  // {
  //   title: "My Portfolio Website",
  //   description: "My second Front-end web developer portfolio website.",
  //   techsUsed: ["Next", "Tailwind", "Framer Motion"],
  //   image: "portfolio2.png",
  //   liveUrl: "https://cpizarra.vercel.app",
  //   githubUrl: "#",
  // },
  {
    title: "Pabuya",
    description:
      "The Ultimate TMDB Alternative for Discovering Thousands of Movies and TV Shows",
    techsUsed: ["React", "TypeScript", "Tailwind", "TMDB API"],
    image: "pabuya.png",
    liveUrl: "https://pabuya.vercel.app/",
    githubUrl: "https://github.com/cesarpizarra/pabuya",
  },
  {
    title: "Naruto Characters",
    description:
      "Explore the rich world of Naruto Shippuden characters. Discover detailed profiles, captivating backstories, and unique abilities of your favorite ninjas.",
    techsUsed: ["Next", "Tailwind", "Dattebayo API "],
    image: "naruto.png",
    liveUrl: "https://naruto-black.vercel.app/",
    githubUrl: "https://github.com/cesarpizarra/naruto",
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
    title: "Intro Section Dropdown",
    description:
      "A Intro Section with Dropdown Navigation challenge from the Frontend Mentor website.",
    techsUsed: ["React", "Vite", "Tailwind"],
    image: "intro-section.png",
    liveUrl:
      "https://cesarpizarra.github.io/intro-section-with-dropdown-navigation-main/",
    githubUrl:
      "https://github.com/cesarpizarra/intro-section-with-dropdown-navigation-main",
  },
  {
    title: "Todo App",
    description:
      "A Todo App with a dark/light mode theme switcher and local storage. A challenge from the Frontend Mentor website.",
    techsUsed: ["React", "Vite", "Tailwind"],
    image: "todo-app.png",
    liveUrl: "https://todo-app-teal-nu.vercel.app/",
    githubUrl: "https://github.com/cesarpizarra/todo-app",
  },

  {
    title: "My first Front-end web developer portfolio website.",
    description:
      "This project marks the beginning of my journey as a front-end web developer. My first portfolio website was designed to present my initial work, skills, and experiences in web development. It served as a platform to showcase my growth and dedication to learning the craft of web development.",
    techsUsed: ["React", "Vite", "Tailwind"],
    image: "portfolio.png",
    liveUrl: "https://cezaru.vercel.app/",
    githubUrl: "https://github.com/cesarpizarra/portfolio",
  },

  {
    title: "Fylo dark theme landing page",
    description:
      "A Fylo landing page challenge from the Frontend Mentor website.",
    techsUsed: ["React", "Vite", "Tailwind"],
    image: "fylo.png",
    liveUrl: "https://fylo-ashy.vercel.app/",
    githubUrl: "https://github.com/cesarpizarra/fylo",
  },

  {
    title: "Weather App",
    description:
      "Dynamic weather app with real-time updates and location-based forecasts.",
    techsUsed: ["React", "Vite", "Tailwind"],
    image: "weather-app.png",
    liveUrl: "https://cesarpizarra.github.io/weather-app/",
    githubUrl: "https://github.com/cesarpizarra/weather-app",
  },
  {
    title: "Login Form",
    description:
      "This is a simple responsive login form created using Tailwind CSS and HTML and JavaScript.",
    techsUsed: ["HTML", "CSS", "JS", "Tailwind"],
    image: "login-form.png",
    liveUrl: "https://cesarpizarra.github.io/loginform/",
    githubUrl: "https://github.com/cesarpizarra/loginform",
  },
];

export const schoolProjects = [
  {
    title:
      "Development of Student Information System for Academia De Sta. Cecilia Foundation Inc.",
    description:
      "The thesis project involves the development of a robust Student Information System (SIS) tailored for Academia De Sta. Cecilia Foundation Inc. This system is designed to streamline various administrative tasks related to student management, including enrollment, grading, attendance tracking, and communication between students, parents, and faculty members. Leveraging modern technologies such as MongoDB for database management, Express.js for backend API development, React for the frontend user interface, and Node.js for server-side operations, the SIS offers enhanced scalability, performance, and data security. Tailwind CSS is utilized for efficient styling, ensuring a responsive and visually appealing user experience. Postman is employed for API testing and validation, ensuring reliability and functionality across the system.",
    techsUsed: [
      "MongoDb",
      "Express Js",
      "React",
      "Node.js",
      "Tailwind Css",
      "Postman",
    ],
    image: "adscfi.png",
  },
];

export const contactData = {
  title:
    "I am actively seeking opportunities as a web developer and would love to contribute to real projects while expanding my skill set. If you're interested, don't hesitate to reach out. I'm always available to connect and discuss potential collaborations.",
};

export const interests = [
  {
    icon: <FaCode size={20} />,
    title: "Coding",
  },
  {
    icon: <FaBrain size={20} />,
    title: "Learning",
  },
  {
    icon: <MdMovie size={20} />,
    title: "Watching Movies",
  },
  {
    icon: <FaGamepad size={20} />,
    title: "Online Games",
  },
  {
    icon: <FaBook size={20} />,
    title: "Reading",
  },
  {
    icon: <FaCamera size={20} />,
    title: "Photography",
  },
  {
    icon: <MdCardTravel size={20} />,
    title: "Traveling",
  },
  {
    icon: <GiCookingPot size={20} />,
    title: "Cooking",
  },
];
