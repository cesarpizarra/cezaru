import React from "react";
import { footerSocials } from "../../constants/home";
import { motion } from "framer-motion";
import { socialVariants } from "../../utils/motion";

const Left = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <ul className="flex flex-col items-center gap-6">
        {footerSocials.map((social) => (
          <motion.li
            variants={socialVariants(-4)}
            initial="hidden"
            whileHover="hover"
            key={social.name}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 ease-in-out"
            >
              {social.logo}
            </a>
          </motion.li>
        ))}
      </ul>
      <div className="h-24 w-[1px] bg-gray-500" />
    </div>
  );
};

export default Left;
