import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="mb-20 flex min-h-screen w-full flex-col items-center justify-center px-4 md:mb-0"
    >
      <motion.div
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.45 }}
        className="w-full"
      >
        <div className="flex flex-col items-center gap-12 md:flex-row">
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
            className="w-full max-w-2xl"
          >
            <div className="mockup-code overflow-x-auto bg-base-100 p-4 text-gray-900">
              <pre data-prefix="1">
                <code className="text-xl">How it all began.</code>
              </pre>
              <pre data-prefix="2">
                <code className="text-xl"></code>
              </pre>
              <pre data-prefix="3">
                <code className="text-sm">
                  Hi there! I&rsquo;m Cesar, a web developer fascinated by the
                  power of websites
                </code>
              </pre>
              <pre data-prefix="4">
                <code className="text-sm">
                  to solve problems and automate processes.
                </code>
              </pre>
              <pre data-prefix="5">
                <code className="text-sm"></code>
              </pre>
              <pre data-prefix="6">
                <code className="text-sm">
                  Since then, my passion for web development has only grown
                  stronger. I began my
                </code>
              </pre>
              <pre data-prefix="7">
                <code className="text-sm">
                  dedicated journey in 2022, diving into the world of coding and
                  web technologies.
                </code>
              </pre>
              <pre data-prefix="8">
                <code className="text-sm">
                  With each project, I aim to push boundaries, deliver
                  exceptional user experiences,
                </code>
              </pre>
              <pre data-prefix="9">
                <code className="text-sm">
                  and make a positive impact through technology.
                </code>
              </pre>
              <pre data-prefix="10">
                <code className="text-sm"></code>
              </pre>
              <pre data-prefix="11">
                <code className="text-sm">
                  As I embark on this exciting path, I&rsquo;m driven by
                  curiosity, a thirst for learning,
                </code>
              </pre>
              <pre data-prefix="12">
                <code className="text-sm">
                  and a willingness to embrace challenges. I believe that web
                  development holds
                </code>
              </pre>
              <pre data-prefix="13">
                <code className="text-sm">
                  immense potential, and I&rsquo;m committed to honing my skills
                  to create innovative
                </code>
              </pre>
              <pre data-prefix="14">
                <code className="text-sm">
                  web solutions that leave a lasting impression.
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
