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
        description: "Get ready to tackle real-world challenges.",
        detailedDescription: "The problem statement will be released and participants can start working on their solutions."
      },
      {
        title: "Project X",
        description: "Find your teammates and form a strong team.",
        detailedDescription: "The problem statement will be released on the event day.",
      },
      {
        title: "Product X",
        description: "Build fast, innovate faster—Dev Sprint awaits!",
        detailedDescription: "Dev Sprint is where coding begins. It's time to put your ideas into action and start building a prototype of your solution on Day-1."
      },
      {
        title: "Connect X",
        description: "Collaborate, code, and conquer challenges together!",
        detailedDescription: "Git Challenge on Day-2 will test your skills in collaboration and version control. Teams will need to use Git to manage their project code effectively."
      },
      {
        title: "Sense X",
        description: "Craft your vision and submit your winning pitch deck!",
        detailedDescription: "Pitch Deck Submission requires teams to submit a presentation that showcases their solution, the technology used, and the potential impact of their project."
      },
      {
        title: "Closing Ceremony",
        description: "Celebrate your achievements and get ready for the results.",
        detailedDescription: " The Closing Ceremony will feature the announcement of winners, recognition of participants, and a recap of the event highlights."
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
        description: "The PPT Round requires teams to analyze real-world problems, develop a working software or hardware prototype, and present their findings. The presentation must showcase the project’s functionality, key insights, and impact.",
        detailedDescription: "In the PPT Round, teams will be given real-world problem statements to solve by developing a software or hardware prototype. They must create a structured PowerPoint presentation demonstrating their approach, implementation, and outcomes. The presentation should include a live demo to showcase the project’s functionality. Original work is mandatory, and AI tools can be used if disclosed.",
      },
      {
        title: "Project X: Tech Bingo (10:30 AM - 11:15 AM)",
        description: "Tech Bingo is a fast-paced event that tests participants’ technical knowledge and critical thinking. Teams solve tech challenges to mark answers on a 5x5 digital bingo card, earning points by completing rows, columns, or a full house.",
        detailedDescription: "In Tech Bingo, teams receive a 5x5 digital bingo card and must solve tech-related challenges announced every 2 minutes. Correct answers allow them to mark their cards, aiming to complete rows, columns, or a full house to score points. Once marked, answers cannot be changed. External help is prohibited, and cheating leads to disqualification. The team with the fastest correct responses wins in case of a tie.",
        },
      {
        title: "Project X: Battleground (11:15 AM - 1:00 AM)",
        description: "1v1 is a head-to-head challenge where participants debug and fix frontend code under time pressure. Each player receives buggy code, identifies issues, and provides structured explanations before submitting their solution.",
        detailedDescription: "In Battleground, participants face off in a frontend debugging challenge hosted on HackerRank. Each player receives buggy code snippets and must identify, debug, and fix the issues while maintaining the original logic and output. Explanations must clearly justify the fixes. No external tools are allowed, and incorrect or partial fixes result in lower scores. The best debuggers with the fastest, most accurate solutions will emerge victorious.",      
        },
      {
        title: "Project X: D for Decryption (12:00 PM - 12:30 PM)",
        description: "D for Decryption challenges participants to decode encrypted tech-based puzzles using logical reasoning and decryption techniques. With only pen and paper, participants must solve the puzzles within the given time.",
        detailedDescription: "In D for Decryption, participants receive questions encrypted in Morse code and must decode them using a provided sheet. The event is conducted offline, with no electronic devices allowed. Accuracy and speed are key, as points are awarded for correct decryption, answer accuracy, and time efficiency. Independent problem-solving is required, making this event a true test of analytical thinking and cryptography skills.",
        },
      {
        title: "Product X: The Big why (10:30 AM - 11:15 AM)",
        description: "The Big Why challenges participants to analyze real-world case studies of business successes and failures. Through group discussions, they must critically evaluate key factors and justify their reasoning.",
        detailedDescription: "In The Big Why, participants receive case studies of thriving and failed businesses and must dissect the reasons behind their outcomes. Working in teams, they analyze market strategies, financial decisions, and external influences to present a structured argument. The event emphasizes logical reasoning, teamwork, and persuasive communication, making it a test of business acumen and analytical thinking.",      
       },
      {
        title: "Product X: Take it to make it! (11:15 AM - 1:00 AM)",
        description: "Take It to Make It! is a thrilling mock auction event where teams bid for materials within a budget and use them to create a product. Strategic thinking, budget management, and creativity are key to success.",
        detailedDescription: "In Take It to Make It!, participants engage in a mock auction, bidding for essential items within a fixed budget. The challenge is to craft a functional or innovative product from the purchased materials while justifying their choices. Unlike other events where points are earned, this event introduces spending mechanics, emphasizing financial strategy. Overspending results in penalties, making resource allocation and decision-making crucial for victory.",      
       },
      {
        title: "Product X: Bridge the Gap (10:30 AM - 11:15 AM)",
        description: "Bridge the Gap challenges participants to establish a logical connection between two seemingly unrelated concepts. By blending creativity with analytical thinking, participants must present a compelling and coherent link within the given time.",
        detailedDescription: "In Bridge the Gap, participants receive two distinct topics and must creatively bridge them using logic and reasoning. The event is conducted on stage, where each team gets preparation time before presenting their connections. Props, slides, or live demonstrations can enhance their arguments. Originality, clarity, and engagement are key, as judges score based on creativity, logical coherence, and audience impact. This event tests both critical thinking and presentation skills.",     
       },
      {
        title: "Product X: Pitch it Wrong (11:15 AM - 1:00 AM)",
        description: "Pitch It Wrong is a fun and challenging event where participants must present an impractical, absurd, or impossible idea and convince the judges to say YES by making it sound feasible.",
        detailedDescription: "In Pitch It Wrong, participants receive a logically or scientifically impossible idea and must creatively pitch it as if it could work. The event takes place on stage, where teams have limited time to prepare and deliver their presentation. Persuasion, confidence, and humor play a key role in convincing the judges. The more absurd yet convincing the pitch, the higher the chances of winning. Bonus points if the judges say YES !",     
       },      
    ],
    "Day 2": [
      {
        title: "Connect X: The Sacrifice (10:30 AM - 11:00 AM)",
        description: "The Sacrifice challenges participants to make tough decisions, testing their teamwork, strategy, and emotional intelligence. Only those who justify their choices wisely can progress.",
        detailedDescription: "The Sacrifice is an intense challenge designed to assess participants' teamwork, decision-making, and emotional intelligence. In each round, teams face critical situations where they must strategically choose and justify the elimination of a member for the greater good. The challenge pushes individuals to think critically, communicate effectively, and collaborate under pressure. Only those who make the most convincing and rational decisions will advance, making every choice a test of survival and strategy.",
       },
      {
        title: "Connect X: Swap it (11:00 AM - 11:30 AM)",
        description: "Swap It challenges participants to think quickly, adapt instantly, and lead effectively. With unexpected leadership changes, teams must maintain strategy and flow without disruption.",
        detailedDescription: "Swap It is a dynamic challenge designed to test participants' creativity, adaptability, and negotiation skills. Teams nominate a leader who initially guides the discussion, but midway through the challenge, leaders are randomly swapped. The new leader must quickly adapt, align with team goals, and ensure seamless execution without disrupting team dynamics. Success depends on quick thinking, communication, and the ability to lead under unpredictable circumstances.",
      },
      {
        title: "Connect X: How would you end it (11:30 AM - 12:00 PM)",
        description: "How Would You End It? challenges participants to reimagine endings, testing their creativity and storytelling skills. Teams must collaborate to craft impactful alternate conclusions for given media.",
        detailedDescription: "How Would You End It? is a creative storytelling event that pushes participants to think outside the box. Teams are given a documentary or movie and must brainstorm, rewrite, and present an alternative ending using their collective imagination. This challenge encourages originality, teamwork, and compelling storytelling, where the best narratives are engaging, relatable, and well-presented.",
        },
      {
        title: "Connect X: Relay & Rely(12:00 PM - 12:30 PM):",
        description: "Relay & Rely tests teams’ coordination, trust, and problem-solving skills through a relay-style puzzle challenge. Each member must complete their part, relying on teammates to merge solutions seamlessly.",
        detailedDescription: "Relay & Rely is a dynamic team-based challenge designed to enhance coordination, trust, and communication. Teams are given a four-part puzzle, with each member responsible for solving one section before merging them into a final solution. The challenge requires strong teamwork, problem-solving, and strategic execution, as success depends on how well participants synchronize their efforts. The event encourages collaboration, critical thinking, and efficiency under pressure.",      
        },
      {
        title: "Sense X: Maze Runner (10:30 AM - 11:00 AM)",
        description: "Maze Runner is a thrilling mental and physical challenge where participants memorize a maze in 30 seconds and then navigate it from memory. The event tests memory, problem-solving, and teamwork under pressure.",
        detailedDescription: "Maze Runner is a competitive event designed to test participants’ memory, navigation skills, teamwork, and decision-making. Participants are shown the solution to a complex maze for 30 seconds and must then navigate the maze without any notes or external help. They must replicate the exact path from memory, with any deviation leading to disqualification. The goal is to complete the maze quickly and accurately within the time limit. Scoring is based on accuracy (30 points), speed (50 points), and efficiency (20 points), adding up to a total of 100 points.",
        },
      {
        title: "Sense X: What did it say (11:00 AM - 11:30 AM)",
        description: "What Did It Say is a listening-based challenge where participants hear an audio clip once and answer questions based on it. The event tests focus, memory, and communication skills by evaluating how well participants retain and relay information.",
        detailedDescription: "What Did It Say is an engaging event designed to test participants’ listening, memory, and comprehension skills. Competitors listen to an audio clip played only once and then answer a series of questions based on its content. The challenge emphasizes attention to detail, focus, and accurate retention of information. Participants are not allowed to take notes or receive external help during the event. Scoring is based on accuracy of answers (40 points), detail retention (30 points), and timeliness (30 points), making a total of 100 points. ",
       },
      {
        title: "Sense X: Too much to touch (11:30 AM - 12:00 PM)",
        description: "Too Much to Touch is a tactile memory challenge where blindfolded participants touch and memorize 10 textures, then arrange them in the exact order they were presented. The event tests sensory recall, sequencing skills, and focus.",
        detailedDescription: "Too Much to Touch tests participants' ability to recognize and recall textures through touch. Blindfolded players memorize 10 textures in 1 minute and arrange them in order within 2 minutes. Scoring is based on accuracy (40 points), detail retention (30 points), and timeliness (30 points), with rule violations leading to disqualification.",
      },
      {
        title: "Sense X: Smell & Tell (12:00 PM - 12:30 PM):",
        description: "Smell & Tell is a sensory-based challenge where participants sniff and memorize hidden scent samples, then identify or arrange them in the correct order. The event tests olfactory memory, sensory perception, and recall accuracy.",
        detailedDescription: "Smell & Tell is a sensory challenge where participants sniff and memorize hidden scent samples, then identify or arrange them correctly within a set time. Each player gets one sniff per turn and must submit answers on time. Scoring is based on accuracy (40 points), detail retention (30 points), and timeliness (30 points), with rule violations leading to disqualification. The highest scorer wins.",
       },
    ],
  };

  return (
    <div className="relative">
      <h2 className="text-4xl font-bold text-white font-orbitron mb-14 mt-6 flex justify-center items-center gap-2">
        <Calendar className="text-red-400 " /> Event Timeline
      </h2>
      
      
      <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-12 text-center">Mark your calendar and prepare for an exciting journey of innovation and creativity.</p>


      {/* Tabs for Day Selection */}
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

      {/* Timeline Vertical Line */}
      <div className=" hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white top-[240px] h-[calc(100%-180px)]"></div>

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
            {/* Timeline Circle */}
            <div className="absolute left-1/2 w-3 h-3 rounded-full bg-white transform -translate-x-1/2 mt-4 animate-pulse"></div>

            {/* Timeline Item */}
            <div
              className={`bg-gradient-to-tr from-[#827574ba]  to-transparent p-10 rounded-xl backdrop-blur-sm border transition cursor-pointer
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

      {/* Detailed Description Modal */}
      {activeItem && activeDescription && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 "
          onClick={() => setActiveDescription(null)}
        >
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-[#602525] via-[#222] to-[#1a1a1a] text-white p-6 rounded-lg border border-cyan-400 relative w-96 max-h-96 overflow-y-auto"
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