import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";
import React from "react";
import Bubbles from "./Bubbles";

const Hero = () => {
  const subtitle = "BEING ORDINARY IS NOT AN OPTION";

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full opacity-80 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster="/fallback-image.jpg" // Add a fallback image
          ref={(video) => {
            if (video) {
              video.playbackRate = 0.5; // Set playback speed to 0.5x (slower)
            }
          }}
        >
          <source src="/arrow.webm" type="video/webm" />
          {/* Add WebM version for better browser support */}
          <source src="/arrow.mp4" type="video/mp4" />
          {/* Fallback text if video fails to load */}
          Your browser does not support the video tag.
        </video>

        {/* Mobile Fallback Image - Hidden on desktop */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="/mobile-fallback.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Add Bubbles Component
      <div className="absolute inset-0 ">
        <Bubbles />
      </div> */}

      {/* Enhanced Background Overlay with Gradient - Update z-index */}
      <div className="absolute inset-0 bg-black "></div>

      {/* Content Wrapper - Update z-index */}
      <div className="text-center relative z-[3] max-w-4xl w-full">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block my-2 mt-16 px-3 py-1 bg-[#d13131]/10 text-[#e0ecec] rounded-full text-xs md:text-sm font-bold"
        >
          Countdown begins - 21 APRIL
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

        {/* Subtitle with enhanced visibility */}
        <div className="text-white text-lg sm:text-xl md:text-3xl font-bold mt-16 font-montserrat lg:text-2xl mb-12 max-w-md sm:max-w-xl mx-auto tracking-wide drop-shadow-lg">
          {subtitle.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.2,
                delay: 1 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Register Button */}
        {!localStorage.getItem("teamData") && (
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
        )}

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
    </div>
  );
};

export default Hero;
