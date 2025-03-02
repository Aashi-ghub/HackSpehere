import { Calendar } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Timeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Day 1");
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeDescription, setActiveDescription] = useState<string | null>(null);

  const timelineData = {
    "Event Flow": [
      {
        title: "Registration Open",
        description: "Kickstart your journey by registering for the event.",
        detailedDescription: "Register for the event and get familiar with rules and guidelines.",
      },
      {
        title: "Problem Statement Release",
        description: "Find your teammates and form a strong team.",
        detailedDescription: "The problem statement will be released on the event day.",
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
        title: "Pitch Deck Submission (Day-3)",
        description: "Craft your vision and submit your winning pitch deck!",
        detailedDescription: "Pitch Deck Submission requires teams to submit a presentation that showcases their solution, the technology used, and the potential impact of their project."
      },
      {
        title: "Hackathon Day (Final day)",
        description: "Final stretch, last code push—let’s finish strong!",
        detailedDescription: "The final day of the hackathon will be intense as teams finalize their projects, debug, and make their final presentations to the judges."
      },
    ],
    "Day 1": [
      {
        title: "Opening Ceremony & Instructions (10:00 AM - 10:10 AM)",
        description: "Introduction to Tech Showdown, Briefing on event rules and judging criteria",
        detailedDescription: "Tech Showdown is a fast-paced, engaging competition designed to test participants' problem-solving, debugging, and AI-prompt engineering skills. The event consists of three distinct phases, each assessing different aspects of technical expertise and Judging Criteria: Speed: Fastest completion of a grid. Accuracy: Only correctly completed challenges count.",
      },
      {
        title: "Phase 1: Tech Bingo (10:10 AM - 10:20 AM)",
        description: "Teams will receive a 5x5 Bingo grid filled with technology-related challenges. They must complete tasks to form a row, column, or diagonal.",
        detailedDescription: "Each team receives a 5x5 Tech Bingo grid filled with technology-related challenges. The goal is to complete a row, column, or diagonal by solving tasks as quickly and accurately as possible. Teams must submit proof of completed tasks (screenshots/links) via a Google Form, and moderators validate submissions in real time to ensure fairness.",
      },
      {
        title: "Tech Bingo Evaluation & Break (10:20 AM - 10:30 AM)",
        description: "Submissions are verified in real-time and A Short break before the next round",
        detailedDescription: "Tech Bingo is an interactive challenge where participants engage in fun, tech-based tasks while earning points. This session also includes a short break, allowing teams to refresh and strategize before the next phase of the hackathon. ",
      },
      {
        title: "Phase 2: Reverse Coding (10:30 AM - 11:15 AM)",
        description: "Participants will analyze pre-written code snippets, predict their output, and debug logical errors.",
        detailedDescription: "Teams receive a set of buggy code snippets and must predict the expected output before debugging. After fixing the errors, they submit the corrected code, which is automatically graded. Judges then review the explanations to assess understanding and accuracy.",
      },
      {
        title: "Phase 3: AI vs. Humans – The Prompt Challenge(11:15 AM - 1:00 AM)",
        description: "Teams will compete against AI by crafting prompts that generate the most optimized, accurate, or creative responses.",
        detailedDescription: "Each team receives real-world problem statements that require AI-generated solutions. They iteratively refine their prompts to achieve the most accurate and effective responses. Judges evaluate submissions based on clarity, precision, and overall effectiveness.",
      },
      {
        title: "Progress Review & Next Steps (12:00 PM - 12:30 PM)",
        description: "finalize scores for the day and Insights into Day 2 activities, expectations and Closing remarks ",
        detailedDescription: "Teams showcase progress, receive feedback, and refine strategies. Judges guide next steps for better execution and final success.",
      },
    ],
    "Day 2": [
      {
        title: "Kick-off & Setup (10:00 AM - 10:30 AM)",
        description: "Introduction to Git Hack: Explanation of rules, timelines, objectives, and judging criteria. The initial HTML base structure is shared via the GitHub ID of the team leader.",
        detailedDescription: "The Kick-off and Setup phase sets the stage for Git Hack, introducing participants to the event’s objectives, rules, and judging criteria. It begins with an overview of version control, collaboration, and structured development workflows using Git and GitHub. The team leader receives the initial HTML base structure via GitHub and shares access with teammates, ensuring a smooth setup. Teams clone the repository, review the base code, and implement a branching strategy for efficient collaboration. This phase is crucial for aligning tasks, making the first commit, and preparing for the development process ahead.",
      },
      {
        title: "Phase 1: First Fork & Enhancements (10:30 AM - 11:00 AM)",
        description: "Teams enhance the project using CSS and JavaScript, focusing on functional improvements.",
        detailedDescription: "Teams will enhance the project by incorporating CSS for styling and JavaScript for interactivity, ensuring a visually appealing and dynamic user experience. This phase focuses on functional improvements, such as responsive design, user-friendly navigation, and interactive elements. The goal is to refine the project’s usability and aesthetics while maintaining clean and efficient code.",
      },
      {
        title: " Phase 2: First Code Swap & Iteration (11:00 AM - 11:30 AM)",
        description: "Teams swap codebases as directed and continue development based on the previous progress, adapting and enhancing features while maintaining code quality and consistency.",
        detailedDescription: "Teams exchange codebases as instructed, analyzing the existing structure and continuing development. They build upon previous progress, refining features, optimizing functionality, and ensuring seamless integration while maintaining code quality. ",
      },
      {
        title: "Phase 3: Bug Injection Challenge & Swap (11:30 AM - 12:00 PM)",
        description: "Teams have 5 minutes to introduce a hidden bug into another team's code. The receiving team must analyze the code, identify the bug, and fix it before proceeding with further enhancements and optimizations.",
        detailedDescription: "Teams are given 5 minutes to strategically introduce a hidden bug into another team's code. Once swapped, the receiving team must carefully analyze, identify, and resolve the bug before proceeding with further enhancements and improvements.",
      },
      {
        title: "Phase 4: Final Code Swap & Refinements (12:00 PM - 12:30 PM):",
        description: "The last set of swaps is made for final refinements. Teams document their changes through commits and prepare for submission.",
        detailedDescription: "In the final round of swaps, teams refine and polish the project while ensuring seamless integration. They document all modifications through commits, maintaining a clear version history, and make final preparations for submission",
      },
      {
        title: "Submission Deadline (12:30)",
        description: "No late submissions will be accepted. Judges will evaluate the final code based on quality, creativity, and debugging efficiency.",
        detailedDescription: "No late submissions will be accepted, ensuring fairness and adherence to the competition timeline. Judges will carefully evaluate each team's final code, assessing its overall quality, creativity in implementation, and efficiency in debugging. The teams' ability to refine and optimize their projects will play a crucial role in the final evaluation.",
      },
    ],
    "Day 3": [
      {
        title: "Pitch Deck Submission",
        description: "Craft your vision and submit your winning pitch deck!",
        detailedDescription: "Showcase your solution and its impact in a presentation.",
      },
      {
        title: "Hackathon Day (Final day)",
        description: "Final stretch, last code push—let’s finish strong!",
        detailedDescription: "Finalize projects, debug, and make final presentations.",
      },
    ],
  };

  return (
    <div className="relative">
      <h2 className="text-4xl font-bold text-white mb-14 mt-6 flex justify-center items-center gap-2">
        <Calendar className="text-teal-400" /> Event Timeline
      </h2>
      
      
      <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-12 text-center">Mark your calendar and prepare for an exciting journey of innovation and creativity.</p>


      {/* Tabs for Day Selection */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(timelineData).map((day) => (
          <button
            key={day}
            onClick={() => setActiveTab(day)}
            className={`px-6 py-2 rounded-full text-white font-semibold transition ${
              activeTab === day ? "bg-teal-500" : "bg-gray-700 hover:bg-teal-600"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
      {/* Timeline Vertical Line */}
<div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-0.5 bg-teal-800 top-[220px] md:h-[calc(100%-180px)] h-full"></div>

<div className="space-y-8 px-4 md:px-0">
  {timelineData[activeTab].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center md:block"
    >
      {/* Timeline Circle */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-teal-500 transform -translate-x-1/2 mt-4 animate-pulse"></div>

      {/* Timeline Item */}
      <div
        className={`bg-gradient-to-br from-[#255e61] via-[#222] to-[#1a1a1a] p-6 md:p-10 rounded-xl backdrop-blur-sm border transition cursor-pointer
          ${activeItem === item.title ? "border-teal-300 shadow-teal-400 shadow-lg" : "border-transparent"}
          w-full max-w-full md:max-w-[48%] text-center md:text-left min-h-40
          ${index % 2 === 0 ? "md:mr-[52%] md:pr-8" : "md:ml-[52%] md:pl-8"}`}
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
        <div>
          <h3 className="text-lg font-bold text-white">{item.title.split("(")[0]}</h3>
          <span className="text-sm text-cyan-400 block">{item.title.match(/\((.*?)\)/)?.[0]}</span>
          <p className="text-sm text-gray-400">{item.description}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>

{/* Detailed Description Modal */}
{activeItem && activeDescription && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-4"
    onClick={() => setActiveDescription(null)}
  >
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-[#255e61] via-[#222] to-[#1a1a1a] text-white p-6 rounded-lg border border-cyan-400 relative w-full max-w-[90%] md:max-w-md max-h-[80vh] overflow-y-auto"
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
      )}
    </div>
  );
};

export default Timeline;
