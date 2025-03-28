import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileTechAmigos from "./MobileTechAmigos";

const pages = [
  {
    title: "Welcome to Department of Student Welfare",
    subtitle: "Empowering Innovation",
    content:
      "The Dean Student Welfare (DSW) plays a crucial role in fostering extracurricular activities, ensuring students grow beyond academics. It oversees nine diverse clubs, each catering to different interests such as cultural arts, technology, sports, and social welfare. These clubs provide a platform for students to explore their talents, enhance leadership skills, and engage in team-based activities. From organizing hackathons, debates, and music events to startup mentorship and social initiatives, they create a vibrant campus environment. DSW helps students maintain a balance between academics and personal interests, promoting holistic development. Through these clubs, students gain confidence, creativity, and real-world skills that prepare them for future challenges.",
    images: ["/DSW LOGO .webp"], // Ensure the file is correctly placed in public folder
    centered: true,
  },
  {
    title: "Parivartan",
    subtitle: "Event 1",
    content:
      "Parivartan, CGC Landran's annual flagship event, unites 25,000+ dreamers, creators, and visionaries from 50+ North Indian colleges. With 30+ thrilling events—including hackathons, coding battles, cultural performances, esports, and entrepreneurial showcases—it’s a dynamic platform for competition, collaboration, and creativity. Beyond contests, Parivartan fosters networking, learning, and mentorship, making it more than just an event—it’s an electrifying experience that inspires, challenges, and transforms all who participate.",
    images: ["/Pari-1.webp", "/Pari-2.webp", "Pari-3.webp"],
  },
  {
    title: "Annual Sports Meet (ASM)",
    subtitle: "Event 2",
    content:
      "The Annual Sports Meet at CGC Landran is a grand celebration of strength, skill, and sportsmanship, bringing together over 1,500 athletes and a spirited audience of 13,000+. With a range of intense track and field events, the competition pushes participants to showcase their endurance, agility, and teamwork. More than just a contest, it fosters camaraderie, resilience, and the true spirit of sports, creating an electrifying atmosphere where passion meets performance and champions are forged.",
    images: ["/git1.webp", "/git2.webp", "/git3.webp"],
  },
  {
    title: "Smart India Hackathon (SIH)",
    subtitle: "Event 3",
    content:
      "The Smart India Hackathon (SIH) is the nation’s largest innovation-driven coding marathon, bringing together 20,000+ brilliant tech minds to solve real-world challenges with cutting-edge digital solutions. With participation from 50+ nodal centers, including our own college, SIH fosters creativity, collaboration, and problem-solving, empowering students to develop groundbreaking solutions that drive technological advancement and societal impact.",
    images: ["/SIH-1.webp", "/SIH-2.webp", "/SIH-3.webp"],
  },
  {
    title: "MUN",
    subtitle: "Event 4",
    content:
      "The Model United Nations (MUN) at CGC Landran is a hub of diplomacy, debate, and global problem-solving, bringing together 500 passionate delegates from 25+ institutes. Engaging in high-stakes discussions across dynamic committees, participants navigate complex global issues with intellect, strategy, and negotiation skills. More than just debate, MUN fosters critical thinking, leadership, and a deep understanding of international affairs, making it an unforgettable experience for aspiring changemakers.",
    images: ["/MUN-1.webp", "/MUN-2.webp", "/MUN-3.webp"],
  },
];

const TechAmigos: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextPage();
    }, 10000);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div>
      <div className="hidden md:block">
        <div className="relative h-auto mt-20 w-full text-white flex flex-col p-10 px-14 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#212121] to-[#212121] opacity-50 rounded-lg"></div>
          <div
            className={`relative flex flex-col ${
              pages[currentPage].centered ? "items-center text-center w-full" : "items-start text-left"
            } h-full w-full gap-8 px-10`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
                className={`flex flex-col ${
                  pages[currentPage].centered ? "justify-center items-center w-full" : "lg:flex-row justify-between items-center"
                } gap-8`}
              >
                <div className={pages[currentPage].centered ? "max-w-5xl w-full text-center px-10" : "max-w-lg text-left"}>
                  {pages[currentPage].images.length === 1 && pages[currentPage].centered && (
                    <img
                      src={pages[currentPage].images[0]}
                      alt="Logo"
                      className="w-40 h-40 mx-auto mb-6"
                    />
                  )}
                  <h1 className="text-4xl font-bold text-[white] mb-4">{pages[currentPage].title}</h1>
                  <h2 className="text-2xl font-bold text-[white] mb-4">{pages[currentPage].subtitle}</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">{pages[currentPage].content}</p>
                </div>
                {!pages[currentPage].centered && (
                  <div className="flex flex-wrap justify-center gap-6 overflow-hidden max-w-full">
                    {pages[currentPage].images.map((img, index) => (
                      <motion.img
                        key={index}
                        src={img}
                        alt={`Slide ${currentPage + 1} - Image ${index + 1}`}
                        className="w-[15rem] h-52 rounded-lg object-cover shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                        style={{ maxWidth: "100%" }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={prevPage}
            className="absolute left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextPage}
            className="absolute right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <div className="block md:hidden">
        <MobileTechAmigos />
      </div>
    </div>
  );
};

export default TechAmigos;