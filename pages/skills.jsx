import React from "react";
import Head from "next/head";
import { skills as techSkills } from "../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import SkillCard from "../components/SkillCard";
import TextSpan from "../components/TextSpan";

const skills = () => {
  const sentence = "Skills".split("");
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
        <section className="w-full min-h-screen flex flex-col items-start justify-center pt-40 lg:pt-0 mb-14 lg:mb-0">
          <div className="w-full">
            <motion.div
              variants={staggerContainer(0, 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: "false", amount: 0.4 }}
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
                These are the technologies and tools I use.
              </motion.p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6">
              {techSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  imgUrl={skill.logo}
                  widthHeight={50}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default skills;
