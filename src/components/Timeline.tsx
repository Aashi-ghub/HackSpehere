import { Calendar } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Timeline: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeDescription, setActiveDescription] = useState<string | null>(null);

  const timelineItems = [
    {
      title: "Registration Open",
      description: "Kickstart your journey by registering for the event.",
      detailedDescription: "Here is the detailed description for Registration Open. This is where you start the event process by registering and getting familiar with the rules and guidelines."
    },
    {
      title: "Problem Statement Release",
      description: "Find your teammates and form a strong team.",
      detailedDescription: "Here is the detailed description for Problem Statement Release. The problem statement will be released on the event day, and teams can start brainstorming solutions."
    },
    {
      title: "Dev Sprint (Day-1)",
      description: "Build fast, innovate faster—Dev Sprint awaits!",
      detailedDescription: "Dev Sprint is where coding begins. It's time to put your ideas into action and start building a prototype of your solution on Day-1."
    },
    {
      title: "Git Challenge (Day-2)",
      description: "Collaborate, code, and conquer challenges together!",
      detailedDescription: "Git Challenge on Day-2 will test your skills in collaboration and version control. Teams will need to use Git to manage their project code effectively."
    },
    {
      title: "Pitch Deck Submission",
      description: "Craft your vision and submit your winning pitch deck!",
      detailedDescription: "Pitch Deck Submission requires teams to submit a presentation that showcases their solution, the technology used, and the potential impact of their project."
    },
    {
      title: "Hackathon Day (Final day)",
      description: "Final stretch, last code push—let’s finish strong!",
      detailedDescription: "The final day of the hackathon will be intense as teams finalize their projects, debug, and make their final presentations to the judges."
    },
  ];

  return (
    <div className="relative">
      <h2 className="text-4xl font-bold text-white mb-14 mt-6 flex justify-center items-center gap-2">
        <Calendar className="text-teal-400" /> Event Timeline
      </h2>

      {/* Timeline Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-teal-800 top-[50px] bottom-0 h-full"></div>

      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center md:block"
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 w-3 h-3 rounded-full bg-teal-500 transform -translate-x-1/2 mt-4 animate-pulse"></div>

            {/* Timeline Item */}
            <div
              className={`
                bg-gradient-to-br from-[#255e61] via-[#222] to-[#1a1a1a] p-4 rounded-xl backdrop-blur-sm border transition cursor-pointer
                ${activeItem === item.title ? "border-teal-300 shadow-teal-400 shadow-lg" : "border-transparent"}
                w-full max-w-[90%] md:max-w-[48%] text-center md:text-left 
                ${index % 2 === 0 ? "md:mr-[52%] md:pr-8" : "md:ml-[52%] md:pl-8"}
              `}
              onClick={() => {
                if (activeItem === item.title) {
                  setActiveItem(null);
                  setActiveDescription(null);
                } else {
                  setActiveItem(item.title);
                  setActiveDescription(item.detailedDescription);
                }
              }}
            >
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Description Modal */}
      {activeItem && activeDescription && (
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

            <h3 className="text-lg font-bold text-white mb-4">{activeItem}</h3>
            <p className="text-sm mb-4">{activeDescription}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
