import { Calendar } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Timeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Event Flow");
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
        description: "Get ready to tackle real-world challenges.",
        detailedDescription: "The problem statement will be released and participants can start working on their solutions."
      },
      {
        title: "Project X",
        description: "ProjectX is a dynamic tech fest featuring a series of innovative technical events and coding challenges, providing a platform for enthusiasts to showcase their skills and creativity ",
        detailedDescription: "ProjectX is an exciting tech fest packed with innovative events and coding challenges. Participants can engage in Tech Bingo, a knowledge-based game of luck; Project PPT, a platform for presenting creative ideas; D for Decryption, a cryptography challenge testing problem-solving skills; and Battleground, a strategic coding competition. With a mix of learning, competition, and collaboration, ProjectX is the perfect stage for tech enthusiasts to showcase their skills and creativity",
      },
      {
        title: "Connect X",
        description: "ConnectX is a dynamic event featuring Shuffle, Swap, and Succeed, where participants test their adaptability, strategy, and problem-solving skills in a fast-paced challenge",
        detailedDescription: "ConnectX is a thrilling event that tests adaptability, strategy, and teamwork through engaging challenges. In Sacrifice, players make tough choices to advance. How Would You End It? challenges creative problem-solving with unexpected scenarios. Relay and Rely demands coordination and trust in a fast-paced race, while Swap It keeps participants on their toes with strategic trades. With quick thinking and collaboration at its core, ConnectX promises an exciting and dynamic experience."
        },
      {
        title: "Product X",
        description: "ProductX is a strategic event that challenges participants to craft smart strategies and manage strong finances to drive success.",
        detailedDescription: "ProductX is a dynamic event that tests strategic thinking, financial skills, and creativity. In The Big Why, participants dig deep to uncover the core reasons behind decisions. Take It to Make It adds excitement with a mock auction, where smart bidding and resource management are key—remember, this is XCEPTION! Bridge the Gap challenges teams to bring together opposing forces with strategic insight. Finally, in Pitch It Wrong, participants tackle the impossible by pitching unthinkable ideas with confidence. ProductX pushes the limits of strategy, finance, and innovative thinking."
      },
      {
        title: "Sense X",
        description: "SenseX is an intense event where participants must think fast and react even faster to outpace the competition",
        detailedDescription: "SenseX is a fast-paced event that challenges your ability to think and react quickly. In Maze Runner, if you win, you'll prove you have a sharp memory and can handle complexity under pressure. Blindfolded and All tests your ability to navigate by touch and intuition. What Did It Say? challenges your listening skills, making sure you can recall important details. Lastly, Fragile Fragrance pushes your sense of smell to the limit—can you identify the scent? SenseX sharpens your senses, quick thinking, and reaction time in thrilling ways."
      },
      {
        title: "Closing Ceremony",
        description: "The Closing Ceremony marks the grand finale of the event, celebrating achievements, recognizing outstanding participants, and reflecting on the memorable moments shared throughout",
        detailedDescription: "The Closing Ceremony is the grand finale of the event, a moment to reflect on the exciting journey and celebrate the achievements of all participants. It features the announcement of competition winners, special recognitions for outstanding performances, and heartfelt gratitude for everyone who contributed to the event’s success. With inspiring speeches, performances, and entertainment, the ceremony brings everyone together to honor the creativity, teamwork, and innovation that made the event truly memorable. It’s a fitting conclusion, leaving participants with a sense of accomplishment, pride, and lasting memories."
      },
    ],
    "Day 1": [
      {
        title: "Opening Ceremony & Instructions (10:00 AM - 10:10 AM)",
        description: "Introduction to Tech Showdown, Briefing on event rules and judging criteria",
        detailedDescription: "Tech Showdown is a fast-paced, engaging competition designed to test participants' problem-solving, debugging, and AI-prompt engineering skills. The event consists of three distinct phases, each assessing different aspects of technical expertise and Judging Criteria: Speed: Fastest completion of a grid. Accuracy: Only correctly completed challenges count.",
      },
      {
        title: "Project X: Project PPT (10:20 AM - 10:30 AM)",
        description: "Participants will develop a hardware/software-driven solution to real-world problems in a structured four-day online challenge, culminating in a PowerPoint presentation showcasing their work.",
        detailedDescription: "This event challenges participants to develop a hardware/software-driven solution to real-world problems within a structured four-day online development cycle. Students will choose from 3-4 real-life problem statements and work entirely online to design, prototype, and refine their projects. All coding and development will take place during the four days following the opening ceremony. The event culminates in a PowerPoint presentation, where participants showcase their solutions, highlighting their approach, implementation, and impact.",
      },
      {
        title: "Project X: Tech Bingo (10:30 AM - 11:15 AM)",
        description: "Tech Bingo challenges participants to answer technical questions under pressure and call BINGO to secure their spot in the judgment round.",
        detailedDescription: "Tech Bingo is an exciting and fast-paced event that puts participants’ technical knowledge, critical thinking, and ability to perform under pressure to the test. One representative from each team will compete in a real-life Human Bingo, where they must answer a set of technical questions within or before a given time limit. The challenge doesn’t end with just answering correctly—participants must also call out BINGO to secure their ticket to the judgment round. This event is designed to assess not only technical expertise but also quick decision-making and composure under pressure.",
        },
      {
        title: "Project X: Battleground (11:15 AM - 1:00 AM)",
        description: "Battleground is a coding competition where participants tackle three challenges—Code Writing, Debugging, and Reverse Coding—with top performers advancing.",
        detailedDescription: "Battleground is a thrilling coding competition designed to test participants' problem-solving skills, debugging expertise, and ability to think in reverse. Based on the AUTOMATA FIX category, this event challenges tech enthusiasts to tackle three coding problems—Code Writing, Debugging, and Reverse Coding—one after another. All participants work on the same problem simultaneously, racing against time to find the most efficient solutions. With each round, only the top-performing candidates advance, making the competition more intense as it progresses.",      
        },
      {
        title: "Project X: D for Decryption (12:00 PM - 12:30 PM)",
        description: "Participants enhance a basic portfolio website through two code swaps, adapting and improving each iteration within strict time limits.",
        detailedDescription: "In this event, organizers will provide participants with a basic HTML structure for a portfolio website, serving as the foundation for development. Teams must enhance the website by adding CSS for styling, JavaScript for interactivity, and additional functionalities to improve its design and usability. After an initial development phase, teams will swap their codebases and continue refining another team's project. This process will repeat through two forks, with each team building upon the previous team's work.",
        },
        {
        title: "Connect X: The Sacrifice (10:30 AM - 11:00 AM)",
        description: "The Sacrifice is a strategic challenge where participants make tough elimination decisions, testing teamwork, persuasion, and emotional intelligence to advance.",
        detailedDescription: "The Sacrifice is an exciting challenge that tests how well participants analyze situations, work as a team, and make tough decisions under pressure. It focuses on leadership, communication, problem-solving, and emotional intelligence. In each round, teams must choose and justify eliminating a member for the group's benefit. Players need to think carefully, work together, and give strong reasons for their choices. Only those who make the smartest and most convincing decisions will move forward, making every choice a test of survival, strategy, and teamwork.",
       },
        {
          title: "Connect X: Swap it (11:00 AM - 11:30 AM)",
          description: "Swap It challenges participants to think quickly, adapt instantly, and lead effectively. With unexpected leadership changes, teams must maintain strategy and flow without disruption.",
          detailedDescription: "Swap It is a dynamic challenge designed to test participants' creativity, adaptability, and negotiation skills. Teams nominate a leader who initially guides the discussion, but midway through the challenge, leaders are randomly swapped. The new leader must quickly adapt, align with team goals, and ensure seamless execution without disrupting team dynamics. Success depends on quick thinking, communication, and the ability to lead under unpredictable circumstances.",
        },
        {
          title: "Connect X: How would you end it (11:30 AM - 12:00 PM)",
          description: "How Would You End It? challenges teams to craft unique alternate endings for media, testing creativity, storytelling, and teamwork to engage audiences.",
          detailedDescription: "How Would You End It? is a creative storytelling challenge where teams are tasked with reimagining the ending of a documentary or movie. Participants collaborate to brainstorm, rewrite, and present an alternative conclusion, showcasing their creativity, teamwork, and storytelling skills. The challenge encourages originality while ensuring the new ending remains engaging and impactful. Teams must present their ideas clearly, capturing the essence of the original story while adding their unique twist.",   
        },
        {
        title: "Connect X: Relay & Rely(12:00 PM - 12:30 PM):",
        description: "Relay & Rely tests teamwork, trust, and problem-solving as members solve interconnected puzzles, requiring clear communication and strategic thinking.",
        detailedDescription: "Relay & Rely is a dynamic team-based challenge that tests coordination, trust, and problem-solving skills. Teams are given a four-part puzzle, with each member solving one section before merging their solutions into a final answer. Success depends on clear communication, strategic thinking, and seamless teamwork. The challenge pushes participants to think quickly under pressure while relying on their teammates for a smooth transition. This event encourages adaptability and efficiency, rewarding teams that synchronize their efforts and execute their strategy with precision.",      
         },    
    ],
    "Day 2": [
      {
        title: "Product X: The Big why (10:30 AM - 11:15 AM)",
        description: "This event enhances critical thinking and analytical skills by analyzing both successful and unsuccessful projects, focusing on outcomes and key takeaways.",
        detailedDescription: "This event sharpens critical thinking and enhances analytical skills by engaging participants in the exploration of both successful and unsuccessful projects. It encourages analyzing outcomes, assessing contributing factors, and providing well-reasoned justifications. Participants will gain a deeper understanding of what drives success and failure, fostering intellectual agility and collaborative insight as they discuss and dissect various perspectives.",      
       },
      {
        title: "Product X: Take it to make it! (11:15 AM - 1:00 AM)",
        description: "This event dissects successful and failed projects by evaluating their objectives, strategies, and outcomes to uncover key decisions and factors shaping their success or failure.",
        detailedDescription: "This event dissects successful and failed projects, allowing participants to evaluate objectives, execution, and results. It encourages deep exploration of pivotal decisions, strategies, and external factors, fostering a systematic approach to understanding project dynamics and success. Participants will also gain insights into how to improve future projects through careful analysis.",      
       },
      {
        title: "Product X: Bridge the Gap (10:30 AM - 11:15 AM)",
        description: "This event challenges participants to create a logical and creative connection between two seemingly unrelated concepts, blending imagination with analytical reasoning.",
        detailedDescription: "This event challenges participants to create a persuasive and logical connection between two seemingly unrelated concepts, requiring them to blend imagination with sharp analytical reasoning. The task involves crafting a seamless, thought-provoking link that surprises the audience while also making logical sense. Participants must push the boundaries of creative synthesis, combining diverse ideas in a way that is both intellectually coherent and captivating.",     
       },
      {
        title: "Product X: Pitch it Wrong (11:15 AM - 1:00 AM)",
        description: "In this event, participants pitch wildly impractical ideas, using wit and persuasion to convince judges that the absurd is surprisingly achievable.",
        detailedDescription: "In this event, participants are tasked with pitching wildly impractical, absurd, or seemingly impossible ideas, employing wit, ingenuity, and persuasive flair to convince judges to say YES. The challenge lies in transforming the outlandish into the plausible, crafting a compelling case that combines creativity, humor, and strategic reasoning. Participants must use their persuasive skills to make the unthinkable sound achievable and leave a lasting impression on the judges.",     
      },
      {
        title: "Sense X: Maze Runner (10:30 AM - 11:00 AM)",
        description: "Maze Runner challenges memory, problem-solving, and teamwork as participants memorize and navigate a maze under pressure.",
        detailedDescription: "Maze Runner is a high-intensity competition that tests participants’ memory, navigation skills, and decision-making under pressure. Participants have 30 seconds to observe and memorize the solution to a complex maze before navigating it entirely from memory, without notes or external help. Any deviation from the correct path results in disqualification, making precision and focus crucial. The goal is to complete the maze quickly and accurately, with scoring based on accuracy (30 points), speed (50 points), and efficiency (20 points), totaling 100 points.",
        },
      {
        title: "Sense X: What did it say (11:00 AM - 11:30 AM)",
        description: "What Did It Say tests focus, memory, and communication as participants hear an audio clip once and answer questions based on it.",
        detailedDescription: "What Did It Say is an engaging event that tests participants' listening, memory, and comprehension skills. Competitors listen to an audio clip played only once and must answer a series of questions based on its content, emphasizing attention to detail, focus, and accurate retention of information. Scoring is based on the accuracy of answers (40 points), retention of details (30 points), and timeliness (30 points), totaling 100 points. This event challenges participants to absorb critical information quickly and communicate it effectively under pressure. ",
       },
      {
        title: "Sense X: Too much to touch (11:30 AM - 12:00 PM)",
        description: "Too Much to Touch challenges sensory recall and sequencing as blindfolded participants memorize and arrange 10 textures in the correct order.",
        detailedDescription: "Too Much to Touch is an exciting challenge that tests participants' ability to recognize and recall textures through touch. Blindfolded players are presented with 10 different textures and given one minute to memorize them before arranging them in the exact order within a two-minute time limit. Scoring is based on accuracy (40 points), detail retention (30 points), and timeliness (30 points), with disqualification for any rule violations. Too Much to Touch rewards participants who can master sensory memory and execute their task with precision under pressure.",
      },
      {
        title: "Sense X: Smell & Tell (12:00 PM - 12:30 PM):",
        description: "Smell & Tell tests olfactory memory and sensory perception as participants identify or arrange hidden scent samples in the correct order.",
        detailedDescription: "Smell & Tell is a unique sensory challenge that tests participants' ability to recognize, memorize, and recall different scents. Players are presented with hidden scent samples and given a limited time to sniff and memorize each one, with only one sniff per turn. Scoring is based on accuracy (40 points), detail retention (30 points), and timeliness (30 points), with disqualification for any rule violations. The player with the highest score wins, making Smell & Tell an engaging test of olfactory memory and sensory perception.",
       }
    ],

  };

  return (
    <div className="relative">
      <h2 className="text-4xl font-bold text-white font-orbitron mb-14 mt-6 flex justify-center items-center gap-2">
        <Calendar className="text-red-400" /> Event Timeline
      </h2>
      <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-12 text-center">
        Mark your calendar and prepare for an exciting journey of innovation and creativity.
      </p>
      <div className="flex justify-center space-x-4 mb-10">
        {Object.keys(timelineData).map((day) => (
          <button
            key={day}
            onClick={() => setActiveTab(day)}
            className={`px-6 py-2 rounded-full text-black font-semibold transition ${
              activeTab === day ? "bg-[#ec2a2ae6]" : "bg-white hover:bg-red-400"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white top-[240px] h-[calc(100%-180px)]"></div>
      <div className="space-y-8">
        {timelineData[activeTab].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center md:block"
          >
            <div className="absolute left-1/2 w-3 h-3 rounded-full bg-white transform -translate-x-1/2 mt-4 animate-pulse"></div>
            <div
              className={`bg-gradient-to-tr from-[#827574ba] to-transparent p-10 rounded-xl backdrop-blur-sm border transition cursor-pointer
                ${activeItem === item.title ? "border-red-300 shadow-white-400 shadow-lg" : "border-transparent"}
                w-full max-w-[90%] md:max-w-[48%] text-center md:text-left max-h-[80vh]
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
                <span className="text-sm text-red-400 block">{item.title.match(/\((.*?)\)/)?.[0]}</span>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
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
           className="bg-gradient-to-br from-[#602525] via-[#222] to-[#1a1a1a] text-white p-6 rounded-lg border border-cyan-400 relative 
             w-full max-w-lg max-h-[80vh] overflow-y-auto"
           >
           <button
           onClick={() => setActiveDescription(null)}
           className="absolute top-2 right-2 text-red-400 hover:text-white"
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
