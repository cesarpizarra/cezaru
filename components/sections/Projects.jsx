import React from "react";
import { projects } from "../../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, socialVariants } from "../../utils/motion";
import { MdAssignment } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
const Projects = () => {
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
          className="mb-4 inline-flex items-center gap-2 text-3xl font-bold tracking-wide lg:text-4xl"
        >
          Projects <MdAssignment />
        </motion.h2>
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-sm"
        >
          Here are some of the projects that I built.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: "false", amount: 0.1 }}
              key={i}
              className="card w-full bg-base-100 shadow-xl"
            >
              <figure className="relative h-64 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
                <ul className="flex flex-wrap items-center gap-2 space-x-2 text-sm text-whiteSecondary">
                  {project.techsUsed.map((technology, index) => (
                    <li
                      className="rounded-md bg-gray-500 bg-opacity-10 px-1 py-1 text-xs"
                      key={index}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                {project.githubUrl && project.liveUrl && (
                  <div className="card-actions mt-5 justify-end">
                    <motion.a
                      variants={socialVariants(-4)}
                      initial="hidden"
                      whileHover="hover"
                      href={project.githubUrl}
                      className="tooltip cursor-pointer rounded-full border-2 bg-base-300 p-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-tip="View Repo"
                    >
                      <FiGithub size={20} className="cursor-pointer" />
                    </motion.a>

                    <motion.a
                      variants={socialVariants(-4)}
                      initial="hidden"
                      whileHover="hover"
                      href={project.liveUrl}
                      className="tooltip cursor-pointer rounded-full border-2 bg-base-300 p-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-tip="Visit"
                    >
                      <HiOutlineExternalLink
                        size={20}
                        className="cursor-pointer"
                      />
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
