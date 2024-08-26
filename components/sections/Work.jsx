import React from "react";
import { workExperience } from "../../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
import { IoMdGitNetwork } from "react-icons/io";
const Work = () => {
  return (
    <section className="relative min-h-screen scroll-mt-36" id="work">
      <motion.div
        variants={staggerContainer(0.4, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.45 }}
        className="mb-12"
      >
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="mb-4 inline-flex items-center gap-2 text-3xl font-bold tracking-wide lg:text-4xl"
        >
          Work History <IoMdGitNetwork />
        </motion.h2>
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-sm"
        >
          Here is a summary of my work experience.
        </motion.p>
      </motion.div>

      <div className="mt-12">
        <ul class="timeline timeline-vertical">
          {workExperience.map((work, index) => (
            <li key={index}>
              <div
                class={`timeline-box p-8 ${index % 2 === 0 ? "timeline-start" : "timeline-end"}`}
              >
                <p class="italic">{work.date}</p>
                <p class="text-primary">{work.isCurrent && "Present"}</p>
                <h2 class="font-bold">{work.position}</h2>
                <p>{work.company}</p>
              </div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`h-5 w-5 ${work.isCurrent ? "text-primary" : ""}`}
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <hr className={work.isCurrent ? "bg-primary" : ""} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;