import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import backgroundImage from "./assets/bg2.webp";

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Wrapper */}
      <div className="text-center relative z-10">
        {/* Tagline */}
        <div className="inline-block mb-4 px-4 py-1.5 bg-[#00FFA3]/10 text-[#e0ecec] rounded-full text-sm font-medium">
          A COUNTDOWN HACKATHON START
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hack
          <span className="bg-gradient-to-r from-[#00FFA3] to-[#00A3FF] bg-clip-text text-transparent">
            {" "}
            Sphere
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Join the ultimate tech innovation challenge. Transform your ideas into
          reality.
        </p>

        {/* Button */}
        <div className="mb-16">
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-[#41c8d2] text-black rounded-full hover:bg-teal-200 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            REGISTER NOW
            <ArrowRight className="ml-2 transition-transform" />
          </Link>
        </div>

        {/* Countdown Timer */}
        <div>
          <CountdownTimer />
        </div>
      </div>

      {/* Optional: Background Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
    </div>
  );
};

export default Hero;
