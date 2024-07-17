import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  projects as myProjects,
  otherProjects,
  schoolProjects,
} from "../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, socialVariants } from "../utils/motion";
import TextSpan from "../components/TextSpan";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
const projects = () => {
  const projectSplit = "Projects".split("");
  const otherProjectSplit = "Other Projects".split("");
  const schoolProjectSplit = "Thesis Project".split("");
  return (
    <>
      <Head>
        <title>Cesar Pizarra | Portfolio</title>
        <meta
          name="description"
          content="Cesar Pizarra is an aspiring frontend web developer passionate about creating visually appealing and user-friendly websites. Explore my portfolio to see my work and learn more about my skills and projects."
        />

        <meta
          name="keywords"
          content="cezaru, cesar pizarra, cesar, pizarra,"
        />
        <meta name="author" content="cezaru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/my-logo.png" />
      </Head>
      <main className="relative max-w-6xl px-5 md:px-10 lg:px-12 xl:px-0 mx-auto z-20">
        <section className="min-h-screen pt-40 lg:pt-44" id="projects">
          <div className="w-full">
            <motion.div
              variants={staggerContainer(0, 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: "false", amount: 0.3 }}
              className="mb-12"
            >
              <motion.h2
                variants={fadeIn("up", "tween", 0.1, 0.6)}
                className="text-4xl lg:text-5xl text-primary font-bold mb-4 inline-block"
              >
                {projectSplit.map((letter, index) => (
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
              {myProjects.map((project, index) => (
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
                  <div className="featured__content mt-4">
                    <h2 className="text-whiteSecondary font-semibold text-2xl">
                      {project.title}
                    </h2>
                    <span className="text-sm text-primary">Featured</span>
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
                        take a look
                        <HiOutlineExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        variants={socialVariants(-4)}
                        initial="hidden"
                        whileHover="hover"
                        href={project.githubUrl}
                        className="cursor-pointer bg-gray-500 bg-opacity-50 p-2 rounded-full"
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

            <div className="mb-28">
              <motion.div
                variants={staggerContainer(0, 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: "false", amount: 0.3 }}
                className="mb-12"
              >
                <motion.h2
                  variants={fadeIn("up", "tween", 0.1, 0.6)}
                  className="text-4xl lg:text-5xl text-primary font-bold mb-4 inline-block"
                >
                  {schoolProjectSplit.map((letter, index) => (
                    <TextSpan key={index}>
                      {letter === " " ? "\u00a0" : letter}
                    </TextSpan>
                  ))}
                </motion.h2>
              </motion.div>

              <div>
                {schoolProjects.map((project, index) => (
                  <motion.div
                    variants={fadeIn("up", "tween", 0.2, 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: "false", amount: 0.1 }}
                    key={index}
                    className="lg:flex items-center justify-between gap-10"
                  >
                    <div className="w-full h-48 md:h-72 overflow-hidden rounded max-w-md mx-auto">
                      <Image
                        src={`/${project.image}`}
                        alt={project.image}
                        width={500}
                        height={300}
                        className="object-cover h-full object-fit rounded hover:scale-105 transition-all ease-in-out duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-whiteSecondary py-2">
                        {project.title}
                      </h4>
                      <p className="text-xs text-justify">
                        {project.description}
                      </p>
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
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className=" mb-28">
              <motion.div
                variants={staggerContainer(0, 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: "false", amount: 0.3 }}
                className="mb-12"
              >
                <motion.h2
                  variants={fadeIn("up", "tween", 0.1, 0.6)}
                  className="text-4xl lg:text-5xl text-center text-primary font-bold mb-4 inline-block"
                >
                  {otherProjectSplit.map((letter, index) => (
                    <TextSpan key={index}>
                      {letter === " " ? "\u00a0" : letter}
                    </TextSpan>
                  ))}
                </motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-md md:max-w-none mx-auto gap-14 md:gap-8 mb-8">
                {otherProjects.map((project, index) => (
                  <motion.div
                    variants={fadeIn("up", "tween", 0.2, 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: "false", amount: 0.1 }}
                    key={index}
                    className="rounded-t-md overflow-hidden bg-darkSecondary flex flex-col h-full"
                  >
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={`/${project.image}`}
                        alt={project.image}
                        fill={true}
                        sizes="100vw"
                        className="object-cover hover:scale-105 transition-all ease-in-out duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h4 className="text-center text-lg font-semibold text-whiteSecondary mb-4">
                        {project.title}
                      </h4>
                      <p className="text-xs text-justify mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <ul className="flex items-center justify-center text-whiteSecondary text-sm space-x-2 flex-wrap">
                          {project.techsUsed.map((technology, index) => (
                            <li className="px-1 py-1 rounded-md" key={index}>
                              {technology}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-3 text-primary">
                          <motion.a
                            variants={socialVariants(-4)}
                            initial="hidden"
                            whileHover="hover"
                            href={project.githubUrl}
                            className="cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FiGithub size={20} className="cursor-pointer" />
                          </motion.a>
                          <motion.a
                            variants={socialVariants(-4)}
                            initial="hidden"
                            whileHover="hover"
                            href={project.liveUrl}
                            className="cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <HiOutlineExternalLink size={20} />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default projects;
