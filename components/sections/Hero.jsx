import React from "react";
import { heroData } from "../../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fade } from "../../utils/motion";
import TextSpan from "../TextSpan";
import { IoIosArrowDown } from "react-icons/io";
const Hero = () => {
  return (
    <motion.section
      id="#"
      variants={staggerContainer(0.4, 1.3)}
      initial="hidden"
      animate="show"
      className="relative mb-20 flex min-h-screen w-full flex-col items-center justify-center text-center md:mb-0"
    >
      <motion.div className="mb-60">
        <motion.h1
          variants={fade(0.8, 0.4)}
          className="mb-4 text-4xl font-bold tracking-wide lg:text-7xl"
        >
          {heroData.name.split("").map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00a0" : letter}
            </TextSpan>
          ))}
        </motion.h1>
        <motion.h2
          variants={fade(0.8, 0.5)}
          className="mb-4 whitespace-normal text-xl font-bold tracking-wide lg:text-5xl"
        >
          {heroData.subheading.split("").map((letter, index) => {
            if (letter === " ") {
              return "\u00a0";
            }
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00a0" : letter}
              </TextSpan>
            );
          })}
        </motion.h2>
        <motion.p
          variants={fade(0.8, 0.7)}
          className="text-base tracking-wide md:text-lg"
        >
          {heroData.description}
        </motion.p>

        <span className="absolute bottom-48 animate-bounce">
          <IoIosArrowDown size={40} />
        </span>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
