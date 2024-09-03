import React from "react";
import { featuredProjects, otherProjects } from "../../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, socialVariants } from "../../utils/motion";
import { BsBoxSeam } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from "next/image";
const Projects = () => {
  return (
    <section className="scroll-mt-36" id="projects">
      <motion.div
        variants={staggerContainer(0.4, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.45 }}
        className="mb-12"
      >
        <motion.div className="rounded-2xl bg-base-300 p-8">
          <motion.h2
            variants={fadeIn("up", "tween", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", amount: 0.45 }}
            className="mb-4 inline-flex items-center gap-2 text-xl font-bold tracking-wide lg:text-2xl"
          >
            Featured Projects <BsBoxSeam />
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: "false", amount: 0.1 }}
                key={i}
                className="card w-full bg-base-100 shadow-xl"
              >
                <figure className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-md card-title">{project.title}</h2>
                  <p className="text-xs">{project.description}</p>

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

        <motion.div className="mt-12 rounded-2xl bg-base-300 p-8">
          <motion.h2
            variants={fadeIn("up", "tween", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", amount: 0.45 }}
            className="mb-4 inline-flex items-center gap-2 text-xl font-bold tracking-wide lg:text-2xl"
          >
            Other Projects <MdAssignment />
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, i) => (
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: "false", amount: 0.1 }}
                key={i}
                className="card w-full bg-base-100 shadow-xl"
              >
                <figure className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-md card-title">{project.title}</h2>
                  <p className="text-xs">{project.description}</p>

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
      </motion.div>
    </section>
  );
};

export default Projects;
