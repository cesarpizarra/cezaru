import { FaTiktok, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdCardTravel, MdMovie } from "react-icons/md";
import { FaCode, FaBrain, FaBook, FaGamepad, FaCamera } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { calculateAge, formatDate } from "../utils/date";
export const navLinks = [
  {
    title: "Home",
    cName: "nav_item",
    url: "#",
  },
  {
    title: "About",
    cName: "nav_item",
    url: "#about",
  },
  {
    title: "Skills",
    cName: "nav_item",
    url: "#skills",
  },
  {
    title: "Projects",
    cName: "nav_item",
    url: "#projects",
  },
  {
    title: "Work",
    cName: "nav_item",
    url: "#work",
  },
  {
    title: "Contact",
    cName: "nav_item",
    url: "#contact",
  },
  // {
  //   title: "Resume",
  //   url: "https://drive.google.com/file/d/1pFOJW9_ubHJtihlb4p3kWw9xUAs-KyIQ/view?usp=sharing",
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
  name: "Hi, I'm Cesar!",
  subheading: "I bring ideas to the web.",
  description:
    "I'm passionate about bringing innovative and accessible designs to life.",
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

export const frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "React",
  "Next.js",
  "TypeScript",
  "Vite",
  "Figma",
  "Node.js",
  "Mobile Responsive",
  "Git",
];

export const backend = [
  "Express",
  "Node.js",
  "Next.js",
  "TypeScript",
  "MongoDB",
  "MySQL",
  "Postman",
  "Git",
];

export const projects = [
  {
    title: "Pabuya",
    description:
      "The Ultimate TMDB  Alternative for Discovering Thousands of Movies and TV Shows",
    techsUsed: ["React", "TypeScript", "Tailwind", "TMDB API"],
    image: "pabuya.png",
    liveUrl: "https://pabuya.vercel.app/",
    githubUrl: "https://github.com/cesarpizarra/pabuya",
  },
  {
    title:
      "Development of Student Information System for Academia De Sta. Cecilia Foundation Inc.",
    description:
      "This is our thesis project: a Student Information System (SIS) for Academia De Sta. Cecilia Foundation Inc",
    techsUsed: [
      "MongoDb",
      "Express Js",
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind Css",
      "Postman",
    ],
    image: "adscfi.png",
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "Naruto Characters",
    description:
      "Explore the rich world of Naruto Shippuden characters. Discover detailed profiles, captivating backstories, and unique abilities of your favorite ninjas.",
    techsUsed: ["Next", "TypeScript", "Tailwind", "Dattebayo API"],
    image: "naruto.png",
    liveUrl: "https://naruto-black.vercel.app/",
    githubUrl: "https://github.com/cesarpizarra/naruto",
  },

  {
    title: "Bookmark Landing Page",
    description:
      "A Bookmark Landing Page challenge from the Frontend Mentor website.",
    techsUsed: ["React", "Vite", "Tailwind"],
    image: "bookmark.png",
    liveUrl: "https://bookmark-landing-page-ten-silk.vercel.app/",
    githubUrl: "https://github.com/cesarpizarra/bookmark-landing-page",
  },
  {
    title: "Amazon Clone",
    description:
      "Clone of Amazon's shopping experience with product details, reviews, and a responsive design.",
    techsUsed: ["React", "TypeScript", "Tailwind", "DaisyUI", "DummyJSON API"],
    image: "amazon.png",
    liveUrl: "https://cesarpizarra.github.io/amazon-clone/",
    githubUrl: "https://github.com/cesarpizarra/amazon-clone",
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
    title: "Weather App",
    description:
      "Dynamic weather app with real-time updates and location-based forecasts.",
    techsUsed: ["React", "Vite", "Tailwind"],
    image: "weather-app.png",
    liveUrl: "https://cesarpizarra.github.io/weather-app/",
    githubUrl: "https://github.com/cesarpizarra/weather-app",
  },
];

export const workExperience = [
  {
    position: "Full Stack Developer",
    company: "at Nord Oaks BPO",
    date: "2024 - Current - Full-time",
    isCurrent: true,
  },
  {
    position: "Web Developer",
    company: "Freelance Self Employed",
    date: "2023 - 2024  - Freelance",
    isCurrent: false,
  },
  {
    position: "Government Internship Program (GIP)",
    company: "Office of the House of Representative",
    date: "2 months - 2023 - On-the-job training",
    isCurrent: false,
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
