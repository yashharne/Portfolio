"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const resumeLink = process.env.RESUME_LINK;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-10 sm:px-20 mt-20 pt-10 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[12px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[16px]">About Me</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 sm:gap-6 mt-6 text-4xl sm:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          Hello, I am
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-300">
            Yash Harne
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md sm:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Fullstack Web Developer with a passion for creating
          functional and user-friendly websites. Check out my skills and
          projects.
        </motion.p>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <motion.div
            variants={slideInFromLeft(1.1)}
            className="py-2 button-primary text-center flex items-center justify-center gap-4 text-white cursor pointer rounded-lg max-w-[200px]"
          >
            <Image src={"/link.svg"} alt="link" width={24} height={24} />
            My Resume
          </motion.div>
        </a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden sm:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;


