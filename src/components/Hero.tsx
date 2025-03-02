import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  const title = "INCEPTION X";
  const subtitle = "Join the ultimate tech innovation challenge. Transform your ideas into reality.";

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg2.webm" type="video/webm" />
      </video>
      {/* Content Wrapper */}
      <div className="text-center relative z-10 max-w-4xl w-full">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block my-4 px-4 py-1.5 bg-[#00FFA3]/10 text-[#e0ecec] rounded-full text-xs md:text-sm font-medium"
        >
          COUNTDOWN TO INCEPTIONX STARTS
        </motion.div>
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white my-4 leading-tight tracking-wider">
          <span className="bg-gradient-to-r from-[#e9ebeb] via-[#a9b1ae] to-[#46b1b7] font-orbitron bg-clip-text text-transparent inline-block">
            {title.split(" ")[0]} {/* "INCEPTION" */}
          </span>
          <span className="text-white text-5xl md:text-7xl font-orbitron font-extrabold ml-2 inline-block">X</span> {/* "X" in white */}
        </h1>
        {/* Subtitle with Typewriter Effect */}
        <div className="text-white text-sm md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto overflow-hidden tracking-wide">
          {subtitle.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.1,
                delay: 1.2 + index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </div>
        {/* Button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <Link
            to="/register"
            className="group relative inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-[#49adaa] text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium overflow-hidden text-sm md:text-base"
          >
            <span className="relative z-10 flex items-center">
              REGISTER NOW
              <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#51cec8] to-[#22bb90] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
          className="w-full flex justify-center pb-8 md:pb-0"
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
