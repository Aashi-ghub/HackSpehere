import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import backgroundImage from "./assets/background.png";

const Hero = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="inline-block mb-4 px-4 py-1.5 bg-[#00FFA3]/10 text-[#00FFA3] rounded-full text-sm font-medium">
          A COUNTDOWN HACKATHON START
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hack
          <span className="bg-gradient-to-r from-[#00FFA3] to-[#00A3FF] bg-clip-text text-transparent">
            {" "}
            Sphere
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Join the ultimate tech innovation challenge. Transform your ideas into
          reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-[#4bdbd6] text-black rounded-full hover:bg-teal-200 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            REGISTER NOW
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="mt-16">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
