import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
import Image from "next/image";
import { aboutData } from "../../constants/home";

const About = () => {
  return (
    <section
      id="about"
      className="mb-20 flex min-h-screen w-full flex-col items-center justify-center md:mb-0"
    >
      <motion.div
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.45 }}
        className="w-full"
      >
        <div className="flex flex-col gap-12 md:flex-row">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.4)}
            className="mb-4"
          >
            <div className="mx-auto max-w-xs md:max-w-md">
              <Image
                src="/illustration1.png"
                width={500}
                height={500}
                alt="My Image"
                style={{ width: "100%", height: "auto" }}
                className="-scale-x-100 rounded-md"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.4)}
            className="w-full max-w-2xl space-y-4 rounded-md text-justify text-sm tracking-wide"
          >
            <h1 className="text-xl">How it all began.</h1>
            <div className="mockup-code">
              <pre data-prefix="$">
                <code>npm i cezaru</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>installing...</code>
              </pre>
              <div className="space-y-2 px-8 py-4">
                {aboutData.heading.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>

              <pre data-prefix=">" className="text-success">
                <code>Done!</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
