import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fade } from "../../utils/motion";
import Image from "next/image";
const Hero = () => {
  return (
    <motion.section
      id="#"
      variants={staggerContainer(0.4, 1.3)}
      initial="hidden"
      animate="show"
      className="relative mb-20 flex min-h-screen w-full flex-col items-center justify-center text-center text-white md:mb-0"
    >
      <motion.div className="mb-60 items-center md:flex">
        <motion.div
          initial={{ y: -30 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mx-auto max-w-xs md:max-w-md"
        ></motion.div>
        <div>
          <motion.h1
            variants={fade(0.8, 0.4)}
            className="mb-4 text-5xl font-bold tracking-wide sm:text-6xl md:text-8xl"
          >
            Hi, I&apos;m Cesar!
          </motion.h1>
          <motion.h2
            variants={fade(0.8, 0.5)}
            className="mb-4 whitespace-normal text-2xl font-bold tracking-wide sm:text-4xl md:text-7xl"
          >
            I bring <span className="text-warning">ideas</span> to the{" "}
            <span className="text-primary">web</span>.
          </motion.h2>
          <motion.p
            variants={fade(0.8, 0.7)}
            className="sm:text-md text-sm tracking-wide md:text-xl"
          >
            I&apos;m passionate about bringing innovative and accessible designs
            to life.
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
