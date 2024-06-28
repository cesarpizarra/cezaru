import React from "react";
import { aboutData } from "../../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
import TextSpan from "../TextSpan";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const sentence = "About".split("");
  return (
    <section className="w-full min-h-screen flex flex-col items-start justify-center mb-20 md:mb-0">
      <motion.div
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.45 }}
      >
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-4xl lg:text-5xl font-bold text-primary  inline-block"
        >
          {sentence.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00a0" : letter}
            </TextSpan>
          ))}
        </motion.h2>
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-lg mb-8"
        >
          What i love to do?
        </motion.p>
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 0.4)}
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
            className="flex flex-col space-y-4 text-justify"
          >
            {aboutData.heading.map((text, index) => (
              <p key={index}>{text}</p>
            ))}

            <div className="mt-4 flex">
              <Link
                href="/about"
                className="px-12 py-2.5 text-lg rounded-md text-wht border-[0.1rem] border-primary bg-primary/10 hover:bg-primary/[.05] font-medium transition-colors ease-in-out duration-200"
              >
                Read more
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
