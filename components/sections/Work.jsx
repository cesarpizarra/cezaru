import React from "react";
import { workExperience } from "../../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
import { IoMdGitNetwork } from "react-icons/io";
import Image from "next/image";
const Work = () => {
  return (
    <section className="relative mb-96 mt-36 scroll-mt-36" id="work">
      <motion.div
        variants={staggerContainer(0.4, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.45 }}
        className="mb-12 rounded-2xl bg-base-300 p-8 shadow-xl"
      >
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="mb-4 inline-flex items-center gap-2 text-xl font-bold tracking-wide lg:text-2xl"
        >
          Work History <IoMdGitNetwork />
        </motion.h2>
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-sm"
        >
          Here is a summary of my work experience.
        </motion.p>

        <div className="mt-12 flex gap-12">
          <div className="grid gap-10 md:grid-cols-2">
            {workExperience.map((work, index) => (
              <motion.div
                variants={fadeIn("up", "tween", 0.1, 0.6)}
                key={index}
                className="flex items-center gap-1"
              >
                <figure className="w-24 rounded-3xl transition hover:scale-105">
                  <Image
                    src={work.image}
                    alt={work.position}
                    width={500}
                    height={500}
                  />
                </figure>

                <div className="divider lg:divider-horizontal"></div>
                <div className="transition hover:scale-105">
                  <div className="text-md font-bold leading-8 tracking-wide md:text-lg">
                    {work.position}
                  </div>
                  <div className="text-xs font-normal leading-8 tracking-wide md:text-sm">
                    {work.company}
                  </div>
                  <div className="text-xs font-normal leading-8 tracking-wide md:text-sm">
                    {work.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
