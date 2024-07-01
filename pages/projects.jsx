import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  projects as myProjects,
  otherProjects,
  schoolProjects,
} from "../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import TextSpan from "../components/TextSpan";
import ProjectLeft from "../components/ProjectLeft";
import ProjectRight from "../components/ProjectRight";

const projects = () => {
  const projectSplit = "Projects".split("");
  const otherProjectSplit = "Other Projects".split("");
  const schoolProjectSplit = "Thesis and Capstone Project".split("");
  return (
    <>
      <Head>
        <title>Cesar Pizarra | Portofolio</title>
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

            <div className="grid grid-cols-1 gap-6 lg:gap-48 mb-8">
              {myProjects.slice(0, 3).map((project, index) => {
                if (index % 2 === 1) {
                  return <ProjectLeft key={index} project={project} />;
                }
                return <ProjectRight key={index} project={project} />;
              })}
            </div>

            <div
              className="border-t-4 mt-5 border-[0.1rem] border-primary bg-primary/10 hover:bg-primary/[.05]  rounded-b text-white px-4 py-3 shadow-md"
              role="alert"
            >
              <div className="flex">
                <div className="py-1">
                  <svg
                    className="fill-current h-6 w-6 text-white mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Hi, this is Cezaru!</p>
                  <p className="text-sm">
                    Other projects will be uploaded soon. Have a nice day!
                  </p>
                </div>
              </div>
            </div>

            {/* <div className=" mb-28">
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
                  <motion.a
                    variants={fadeIn("up", "tween", 0.2, 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: "false", amount: 0.1 }}
                    href={project.liveUrl}
                    target="_blank"
                    key={index}
                    className="rounded-md overflow-hidden"
                  >
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={`/${project.image}`}
                        alt={project.image}
                        fill={true}
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 bg-darkSecondary">
                      <h4 className="text-center text-xl font-semibold text-whiteSecondary mb-4">
                        {project.title}
                      </h4>

                      <ul className="flex items-center justify-center text-whiteSecondary text-sm space-x-2 flex-wrap">
                        {project.techsUsed.map((technology, index) => (
                          <li className="px-1 py-1 rounded-md" key={index}>
                            {technology}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.a>
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
                  className="text-4xl lg:text-5xl text-primary font-bold mb-4 inline-block"
                >
                  {schoolProjectSplit.map((letter, index) => (
                    <TextSpan key={index}>
                      {letter === " " ? "\u00a0" : letter}
                    </TextSpan>
                  ))}
                </motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-md md:max-w-none mx-auto gap-14 md:gap-8 mb-8">
                {schoolProjects.map((project, index) => {
                  if (project.title === "") {
                    return (
                      <motion.div
                        variants={fadeIn("up", "tween", 0.2, 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: "false", amount: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        className="rounded-md overflow-hidden"
                      >
                        <div className="relative w-full h-48 overflow-hidden">
                          <Image
                            src={`/${project.image}`}
                            alt={project.image}
                            fill={true}
                            sizes="100vw"
                            className="object-fit"
                          />
                        </div>
                        <div className="p-4 bg-darkSecondary">
                          <h4 className="text-center text-xl font-semibold text-whiteSecondary mb-4">
                            {project.title}
                          </h4>

                          <ul className="flex items-center justify-center text-whiteSecondary text-sm space-x-2 flex-wrap">
                            {project.techsUsed.map((technology, index) => (
                              <li className="px-1 py-1 rounded-md" key={index}>
                                {technology}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    );
                  }
                  return (
                    <motion.div
                      variants={fadeIn("up", "tween", 0.2, 0.4)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: "false", amount: 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      key={index}
                      className="rounded-md overflow-hidden"
                    >
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={`/${project.image}`}
                          alt={project.image}
                          fill={true}
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 bg-darkSecondary">
                        <h4 className="text-center text-xl font-semibold text-whiteSecondary mb-4">
                          {project.title}
                        </h4>

                        <ul className="flex items-center justify-center text-whiteSecondary text-sm space-x-2 flex-wrap">
                          {project.techsUsed.map((technology, index) => (
                            <li className="px-1 py-1 rounded-md" key={index}>
                              {technology}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default projects;
