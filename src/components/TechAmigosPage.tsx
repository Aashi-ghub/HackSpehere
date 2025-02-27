import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    title: "Tech Amigos Club",
    subtitle: "Igniting Innovation Through Community",
    content:
      "Welcome to Tech Amigos Club – where digital visionaries forge tomorrow's solutions. We're a dynamic ecosystem of developers, designers, and dreamers united by our passion for technological excellence. Our diverse community spans from curious beginners to seasoned architects, fostering an environment where groundbreaking ideas flourish through collaboration. At our core, we believe that the most revolutionary solutions emerge when bright minds connect. Whether you're crafting your first line of code or architecting complex systems, you'll find kindred spirits ready to support your journey, challenge your thinking, and celebrate your successes.",
    images: ["/tech-amigos_logo-.webp"],
  },
  {
    title: "Aagaz 2024",
    subtitle: "Event 1",
    content:
      "Aagaz 2024 was a vibrant event designed to empower freshers by enhancing their knowledge, sharpening problem-solving skills, and fostering both individual and collaborative learning. It provided an engaging platform to ignite innovation, encourage creativity, and set the stage for a dynamic academic journey!",
    images: ["/agz1.webp", "/agz2.webp", "/agz3.webp"],
  },
  {
    title: "XPEDITION 2024",
    subtitle: "Event 2",
    content:
      "XPEDITION 2024, hosted by CGC on August 21-22, was a resounding success, organized by the Tech Amigos club under DSW. Day 1 featured the intense Code and Cup Clash and The Idea Factory, where budding entrepreneurs pitched innovative tech ideas. Day 2 brought the thrilling Tech Escape, an escape room challenge testing problem-solving and teamwork. The event fostered innovation, collaboration, and creativity, making it a memorable experience for all tech enthusiasts!",
    images: ["/xped1.webp", "/xped2.webp", "/xped3.webp"],
  },
  {
    title: "Scavanger Hunt 2024",
    subtitle: "Event 3",
    content:
      "The Scavenger Hunt at Parivartan 2024 challenged participants to decode clues and hunt for company names hidden across the campus. As teams progressed, they had to unlock different mystery boxes, each containing hints to the final treasure. Solving puzzles and accessing various locked rooms, they showcased problem-solving, teamwork, and strategic thinking in a thrilling, fast-paced environment. Organized by Tech Amigos, the event created an atmosphere of excitement, learning, and collaboration. It was a huge success, leaving participants thrilled and eager for more!",
    images: ["/sh1.webp", "/sh2.webp", "/sh3.webp"],
  },
  {
    title: "Gitfinity 2025",
    subtitle: "Event 4",
    content:
      "Gitfinity 2025, hosted by Tech Amigos in collaboration with DSW, was a vibrant celebration of innovation and collaboration! With 100+ participants, the event featured an inspiring keynote, hands-on GitHub workshops, live challenges, and valuable networking opportunities. From leadership insights to real-world GitHub applications, it was a day of learning, growth, and community building!",
    images: ["/git1.webp", "/git2.webp", "/git3.webp"],
  },
];

const TechAmigos: React.FC = () => {
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

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="relative h-auto w-full text-white flex flex-col p-10 px-14 rounded-lg shadow-lg overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E3C3D] to-[#212121] opacity-50 rounded-lg"></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center h-full w-full gap-8 px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            className="text-center"
          >
            {currentPage === 0 ? (
              <>
                <img
                  src={pages[currentPage].images[0]}
                  alt="Tech Amigos Logo"
                  className="w-24 h-24 mx-auto mb-6 rounded-lg"
                />
                <h1 className="text-4xl font-bold text-cyan-400 mb-4">
                  {pages[currentPage].title}
                </h1>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  {pages[currentPage].subtitle}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {pages[currentPage].content}
                </p>
              </>
            ) : (
              <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="max-w-lg text-left">
                  <h1 className="text-4xl font-bold text-cyan-400 mb-4">
                    {pages[currentPage].title}
                  </h1>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                    {pages[currentPage].subtitle}
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {pages[currentPage].content}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 overflow-hidden max-w-full">
                  {pages[currentPage].images.map(
                    (img, index) =>
                      img && (
                        <motion.img
                          key={index}
                          src={img}
                          alt={`Slide ${currentPage + 1} - Image ${index + 1}`}
                          className="w-[15rem] h-52 rounded-lg object-cover shadow-md"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                          style={{ maxWidth: "100%" }} 
                        />
                      )
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons with Adjusted Margins */}
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
  );
};

export default TechAmigos;


