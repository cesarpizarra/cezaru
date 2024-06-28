import React from "react";
import Head from "next/head";
import { aboutData, interests } from "../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import TextSpan from "../components/TextSpan";
import Image from "next/image";
import InterestCard from "../components/InterestCard";

const about = () => {
  const sentence = "About".split("");
  const educationData = [
    {
      year: "2023-2024 - Present",
      institution: "Don Mariano Marcos Memorial State University",
      degree: "Bachelor of Science in Computer Science",
    },
    {
      year: "2018 - 2019",
      institution: "Senior High School",
      degree: "Technical Vocational Livelihood (TVL)",
    },

    {
      year: "2016 - 2017",
      institution: "Leones National High School",
      degree: "High School Diploma",
    },
  ];
  return (
    <>
      <Head>
        <title>Cesar Pizarra | Portofolio</title>
        <meta name="author" content="cezaru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/my-logo.png" />
      </Head>
      <main className="relative max-w-6xl px-5 md:px-10 lg:px-12 xl:px-0 mx-auto z-20">
        <section className="min-h-screen pt-40 lg:pt-44">
          <div className="w-full">
            <motion.div
              variants={staggerContainer(0.3, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: "false", amount: 0.45 }}
            >
              <motion.h2
                variants={fadeIn("up", "tween", 0.1, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: "false", amount: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-primary inline-block"
              >
                {sentence.map((letter, index) => (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00a0" : letter}
                  </TextSpan>
                ))}
              </motion.h2>

              <motion.p
                variants={fadeIn("up", "tween", 0.1, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: "false", amount: 0.2 }}
                className="text-lg mb-8"
              >
                What i love to do?
              </motion.p>
              <div className="grid lg:grid-cols-2 gap-14">
                <div>
                  <motion.div
                    variants={fadeIn("up", "tween", 0.2, 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: "false", amount: 0.2 }}
                    className="mb-4"
                  >
                    <div className="mx-auto max-w-md">
                      <Image
                        src="/cezar.jpg"
                        width="400"
                        height="400"
                        alt="My Image"
                        style={{ width: "auto", height: "auto" }}
                        className="rounded-md"
                      />
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  variants={fadeIn("up", "tween", 0.2, 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: "false", amount: 0.2 }}
                  className="flex flex-col space-y-4 text-justify"
                >
                  {aboutData.heading.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </motion.div>
              </div>

              <div className="mt-10">
                <motion.h3
                  variants={fadeIn("up", "tween", 0.2, 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: "false", amount: 0.2 }}
                  className="text-xl lg:text-2xl font-bold text-whiteSecondary inline-block"
                >
                  Educational Background
                </motion.h3>
                <motion.div
                  variants={fadeIn("up", "tween", 0.2, 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: "false", amount: 0.2 }}
                  className="relative mt-4 border-l-4 border-primary"
                >
                  {educationData.map((edu, index) => (
                    <div key={index} className="mb-8 ml-6">
                      <div className="absolute w-6 h-6 bg-primary rounded-full -left-3.5 border-4 border-white"></div>
                      <div className=" p-6 rounded-md ">
                        <h3 className="text-lg font-semibold">
                          {edu.institution}
                        </h3>
                        <span className="text-primary font-semibold">
                          {edu.year}
                        </span>
                        <p className="mt-2 text-gray-600">{edu.degree}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="py-10">
                <motion.h3
                  variants={fadeIn("up", "tween", 0.2, 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: "false", amount: 0.2 }}
                  className="text-xl lg:text-2xl font-bold text-whiteSecondary inline-block"
                >
                  Interests
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4  lg:grid-cols-4">
                  {interests.map((skill) => (
                    <InterestCard
                      key={skill.title}
                      title={skill.title}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default about;
