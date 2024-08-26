import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, fade } from "../../utils/motion";
import { FaStar } from "react-icons/fa";
import { backend, frontend } from "../../constants/home";
const Skills = () => {
  return (
    <section
      id="skills"
      className="mb-20 flex min-h-screen w-full flex-col items-start justify-center md:mb-0"
    >
      <div className="w-full">
        <motion.div
          variants={staggerContainer(0.8, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.4 }}
          className="mb-12"
        >
          <motion.h2
            variants={fadeIn("up", "tween", 0.1, 0.6)}
            className="mb-4 inline-flex items-center gap-2 text-3xl font-bold tracking-wide lg:text-4xl"
          >
            Featured Skills <FaStar />
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.1, 0.6)}
            className="text-sm"
          >
            {" "}
            These are the technologies and tools I use.
          </motion.p>

          <div className="flex flex-col gap-10 py-8">
            <div>
              <motion.h2
                variants={fadeIn("up", "tween", 0.1, 0.6)}
                className="pb-2 text-center text-2xl tracking-wide"
              >
                Frontend
              </motion.h2>

              <motion.div
                variants={fadeIn("up", "tween", 0.2, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: "false", amount: 0.1 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {frontend.map((f, index) => (
                  <button
                    key={index}
                    className="btn-ghost btn border border-current"
                  >
                    {f}
                  </button>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.h2
                variants={fadeIn("up", "tween", 0.1, 0.6)}
                className="pb-2 text-center text-2xl tracking-wide"
              >
                Backend
              </motion.h2>

              <motion.div
                variants={fadeIn("up", "tween", 0.2, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: "false", amount: 0.1 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {backend.map((b, index) => (
                  <button
                    key={index}
                    className="btn-ghost btn border border-current"
                  >
                    {b}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
