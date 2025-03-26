import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    title: "Welcome to Department of Student Welfare",
    subtitle: "Empowering Innovation",
    content:
      "The Dean Student Welfare (DSW) plays a crucial role in fostering extracurricular activities, ensuring students grow beyond academics. It oversees nine diverse clubs, each catering to different interests such as cultural arts, technology, sports, and social welfare. These clubs provide a platform for students to explore their talents, enhance leadership skills, and engage in team-based activities. From organizing hackathons, debates, and music events to startup mentorship and social initiatives, they create a vibrant campus environment. DSW helps students maintain a balance between academics and personal interests, promoting holistic development. Through these clubs, students gain confidence, creativity, and real-world skills that prepare them for future challenges.",
    images: ["/DSW LOGO .webp"], 
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
      images: ["/Pari-1.webp", "/Pari-2.webp", "/Pari-3.webp"],
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

const MobileTechAmigos: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextPage();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  return (
    <div className="relative h-auto w-full text-white flex flex-col items-center p-6 rounded-lg shadow-lg overflow-hidden md:hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-[#212121] to-[#212121] opacity-50 rounded-lg"></div>

  <div className="relative flex flex-col items-center h-full w-full gap-6 px-6">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
        className="text-center w-full flex flex-col items-center"
      >
        {/* ✅ Centered Logo for DSW Page */}
        {currentPage === 0 && (
          <img
            src={pages[currentPage].images[0]}
            alt="DSW Logo"
            className="w-32 h-32 rounded-lg object-cover mb-4 mx-auto"
          />
        )}

        <h1 className="text-3xl font-bold text-[white] mb-2">
          {pages[currentPage].title}
        </h1>
        <h2 className="text-xl font-bold text-[white] mb-2">
          {pages[currentPage].subtitle}
        </h2>
        <p className="text-base text-gray-300 leading-relaxed">
          {pages[currentPage].content}
        </p>

        {/* ✅ Images BELOW text for other pages */}
        {currentPage !== 0 && (
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {pages[currentPage].images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${currentPage + 1} - Image ${index + 1}`}
                className="w-full h-40 rounded-lg object-cover"
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  </div>
</div>
  );
};

export default MobileTechAmigos;
