
import React from "react";
import image1 from "../images/logo.jpg";

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "@remixicon/react";

import { motion, AnimatePresence } from "motion/react";

const Heading = ({ isOpen, setisOpen }) => {
  return (
    <div className={"flex  h-30 w-full py-2 relative"}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className={`flex items-center gap-2 `}
          >
            <img
              src={image1}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover"
            />

            <h1 className="text-xl font-bold font-serif">
              Employee
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setisOpen(!isOpen)}
        className={`${isOpen ? "w-7 h-7 rounded-full bg-[#cdc9bf] flex items-center justify-center cursor-pointer absolute right-1 top-3.5" : "w-7 h-7 rounded-full bg-[#cdc9bf] flex items-center justify-center cursor-pointer absolute right-3.5 top-3.5"}`}
      >
        {isOpen ? (
          <RiArrowLeftSLine />
        ) : (
          <RiArrowRightSLine />
        )}
      </button>
    </div>
  );
};

export default Heading;
