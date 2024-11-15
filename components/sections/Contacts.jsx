import React from "react";
import { contactData, emailLink } from "../../constants/home";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
import Image from "next/image";
const Contacts = () => {
  return (
    <section id="contact" className="my-24 h-96">
      <motion.div
        variants={staggerContainer(0.4, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.45 }}
        className="mx-auto flex h-full w-full flex-col items-center justify-center text-center"
      >
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-md md:text-xl"
        >
          {contactData.title}
        </motion.p>
        <motion.div
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="mx-auto max-w-md"
        >
          <Image
            src="/illustration2.png"
            width="300"
            height="300"
            alt="My Image"
            style={{ width: "auto", height: "auto" }}
            className="-scale-x-100 rounded-md"
          />
        </motion.div>

        <motion.a
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          href={emailLink}
          target="_blank"
          className="btn-neutral btn-outline btn mt-8"
        >
          Say Hello !
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contacts;
