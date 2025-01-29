import { Calendar } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Timeline: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [heading, setHeading] = useState<string>("Description");
  const [activeDescription, setActiveDescription] = useState<string | null>(null);

  const timelineItems = [
    { title: "Registration Open", description: "Kickstart your journey by registering for the event." },
    { title: "Problem Statement Release", description: "Find your teammates and form a strong team." },
    { title: "Dev Sprint (Day-1)", description: "Build fast, innovate faster—Dev Sprint awaits!" },
    { title: "Git Challenge (Day-2)", description: "Collaborate, code, and conquer challenges together!" },
    { title: "Pitch Deck Submission", description: "Craft your vision and submit your winning pitch deck!" },
    { title: "Hackathon Day (Final day)", description: "Final stretch, last code push—let’s finish strong!" },
  ];

  return (
    <div className="relative">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Calendar className="text-teal-400" /> Event Timeline
      </h2>

      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-teal-800 transform md:-translate-x-0.5"></div>

      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-teal-500 transform -translate-x-2 mt-6 animate-pulse"></div>
            <div className={`${index % 2 === 0 ? "ml-12 md:ml-0 md:mr-[50%] md:pr-8" : "ml-12 md:ml-[50%] md:pl-8"}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setActiveItem(item.title);
                  setActiveDescription(item.description);
                  setHeading(item.title);
                }}
                className={`bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border transition cursor-pointer ${
                  activeItem === item.title ? "border-teal-300 shadow-teal-400 shadow-lg" : "border-gray-700/50"
                }`}
              >
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {activeDescription && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setActiveDescription(null)}
        >
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 text-white p-6 rounded-lg border border-cyan-400 relative w-96 max-h-96 overflow-y-auto"
          >
            <button
              onClick={() => setActiveDescription(null)}
              className="absolute top-2 right-2 text-cyan-400 hover:text-white"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold text-cyan-400 mb-4">{heading}</h3>
            <p className="text-sm mb-4">{activeDescription}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
