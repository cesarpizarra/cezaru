import React from "react";
import { motion } from "framer-motion";
import { socialVariants } from "../../utils/motion";
import { emailLink } from "../../constants/home";

const Right = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <motion.a
        variants={socialVariants(-4)}
        initial="hidden"
        whileHover="hover"
        href={emailLink}
        target="_blank"
        rel="noreferrer"
        className="writing-mode-v-rl text-sm transition-colors duration-200 ease-in-out"
      >
        cpizarra002@gmail.com
      </motion.a>
      <div className="h-24 w-[1px] bg-gray-500" />
    </div>
  );
};

export default Right;
