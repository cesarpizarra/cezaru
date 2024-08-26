import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Left from "./Left";
import Right from "./Right";
import { motion } from "framer-motion";
import { leftRightElementVariants } from "../../utils/motion";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="fixed bottom-0 left-0 right-0 z-10 hidden w-full xl:block">
        <motion.div
          variants={leftRightElementVariants}
          initial="hidden"
          animate="show"
          className="relative mx-auto flex max-w-[1536px] items-end justify-between px-5 md:px-10"
        >
          <Left />
          <Right />
        </motion.div>
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
