import React from "react";
import { footerSocials } from "../../constants/home";
import { motion } from "framer-motion";
import { socialVariants } from "../../utils/motion";

const Footer = () => {
  return (
    <section className="text-whiteSecondary mx-auto max-w-[1440px] px-5 py-6 md:px-10">
      <footer>
        <nav className="mb-4">
          <ul className="flex items-center justify-center gap-8">
            {footerSocials.map((social) => (
              <motion.li
                variants={socialVariants(-3)}
                initial="hidden"
                whileHover="hover"
                key={social.name}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-appPurple transition-colors duration-200 ease-in-out"
                >
                  {social.logo}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <p className="text-center text-sm">Built by Cesar G. Pizarra © 2024</p>
      </footer>
    </section>
  );
};

export default Footer;
