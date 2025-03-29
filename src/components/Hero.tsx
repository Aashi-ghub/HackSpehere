import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  const subtitle = "Being  Ordinary  is  not  an  Option";

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Content Wrapper */}
      <div className="text-center relative z-10 max-w-4xl w-full">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block my-4 px-3 py-1 bg-[#d13131]/10 text-[#e0ecec] rounded-full text-xs md:text-sm font-medium"
        >
          COUNTDOWN TO Xception STARTS
        </motion.div>

        {/* Main Heading */}
        <h1 className="relative text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-wide flex flex-col items-center text-center">
          <div className="flex items-center justify-center">
            <div className="relative w-16 h-20 sm:w-24 sm:h-24 l:w-24 l:h-32 md:w-32 md:h-44">
              <img
                src="/X[1].webp"
                alt="X Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-transparent translate-x-[-15px] sm:translate-x[-25px] md:translate-x-[-30px] bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]  font-raleway">
              CEPTION
            </span>
          </div>

          {/* Tagline - Fixed Positioning */}
          <span className="text-[#d13131] text-[10px] sm:text-xs md:text-xs ml-24 sm:ml-32  md:ml-32 font-orbitron font-extrabold tracking-[0.2em] mt-[-9px] sm:mt-[-9px] md:mt-[-56px]">
            COMPETE · CONNECT · CONQUER
          </span>
        </h1>

        {/* Subtitle */}
        <div className="text-white text-lg sm:text-xl md:text-3xl font-extrabold mt-12 font-montserrat lg:text-2xl mb-12 max-w-md sm:max-w-xl mx-auto tracking-wide ">
          {subtitle.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0}}
              transition={{
                duration: 0.2,
                delay: 1 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="inline-block mr-2 "
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Register Button */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Link
            to="/register"
            className="group relative inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-br from-[#ec4545] to-[#ad3434] text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-xs sm:text-sm md:text-base"
          >
            <span className="relative z-10 flex items-center">
              REGISTER NOW
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a7abab] to-[#e11414] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="w-full flex justify-center pb-6"
        >
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
    </div>
  );
};

export default Hero;
