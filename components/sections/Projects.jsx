import React from "react";
import { projects } from "../../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, socialVariants } from "../../utils/motion";
import TextSpan from "../TextSpan";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
const Projects = () => {
  const sentence = "Projects".split("");
  return (
    <section className="min-h-screen scroll-mt-36" id="projects">
      <motion.div
        variants={staggerContainer(0.4, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.45 }}
        className="mb-12"
      >
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-4xl lg:text-5xl text-primary font-bold mb-4 inline-block"
        >
          {sentence.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00a0" : letter}
            </TextSpan>
          ))}
        </motion.h2>
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-lg"
        >
          Here are some of the projects that I built.
        </motion.p>
      </motion.div>
      <div className="featured">
        {projects.map((project, index) => (
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", amount: 0.1 }}
            key={index}
            className="featured__item"
          >
            <div className="featured__img-container">
              <img src={project.image} alt="Featured Image" />
            </div>
            <div className="featured__content">
              <h2 className="text-whiteSecondary font-semibold text-2xl">
                {project.title}
              </h2>
              <ul className="flex items-center  text-whiteSecondary text-sm space-x-2 flex-wrap mt-4">
                {project.techsUsed.map((technology, index) => (
                  <li
                    className="px-1 py-1 rounded-md text-xs bg-gray-500 bg-opacity-10"
                    key={index}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <p className="mt-2">{project.description}</p>

              <div className="flex items-center gap-3 mt-8">
                <motion.a
                  variants={socialVariants(-4)}
                  initial="hidden"
                  whileHover="hover"
                  href={project.liveUrl}
                  className="cursor-pointer inline-flex items-center gap-2 bg-primary p-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Take a look
                  <HiOutlineExternalLink size={20} />
                </motion.a>
                <motion.a
                  variants={socialVariants(-4)}
                  initial="hidden"
                  whileHover="hover"
                  href={project.githubUrl}
                  className="cursor-pointer bg-darkPrimary bg-opacity-50 p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={20} className="cursor-pointer" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={fadeIn("up", "tween", 0.1, 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 1 }}
        className="w-full flex items-center justify-center"
      >
        <Link
          href="/projects"
          className="px-12 py-2.5 text-lg rounded-md text-wht border-[0.1rem] border-primary bg-primary/10 hover:bg-primary/[.05] font-medium transition-colors ease-in-out duration-200"
        >
          See more
        </Link>
      </motion.div>
    </section>
  );
};

export default Projects;
