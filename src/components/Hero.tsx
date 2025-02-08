import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  const title = "InceptionX";
  const subtitle = "Join the ultimate tech innovation challenge. Transform your ideas into reality.";

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden">
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
      <div className="text-center relative z-10">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1.5 bg-[#00FFA3]/10 text-[#e0ecec] rounded-full text-sm font-medium"
        >
          A COUNTDOWN TO HACKATHON STARTS
        </motion.div>
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-wider">
          <span className="bg-gradient-to-r from-[#00FFA3] to-[#00A3FF] bg-clip-text text-transparent inline-block">
            {title.split(" ").map((word, index) => (
              <span key={index} className="inline-block mr-2">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.3 + charIndex * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>
        </h1>
        {/* Subtitle with Typewriter Effect */}
        <div className="text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto overflow-hidden tracking-wide">
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
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </div>
        {/* Button */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <Link
            to="/register"
            className="group relative inline-flex items-center px-8 py-4 bg-[#39a5ad] text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium overflow-hidden"
          >
            <span className="relative z-10">
              REGISTER NOW
              <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFA3] to-[#00A3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          <CountdownTimer />
        </motion.div>
      </div>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
    </div>
  );
};

export default Hero;
