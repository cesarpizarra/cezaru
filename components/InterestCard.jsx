import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InterestCard = ({ title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-skillBadge rounded-lg"
    >
      <div className="grid grid-cols-1 justify-center items-center">
        <div className="flex tems-center gap-3">
          <div>{icon}</div>
          <p className="text-xs">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default InterestCard;
