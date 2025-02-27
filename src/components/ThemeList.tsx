import React, { useEffect, useState } from 'react';
import { PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from 'react-router-dom';

const ThemeList = () => {
  const { theme } = useParams();
  const themes = {
    "Miscellaneous Innovation": {
      // icon: <Lightbulb className="w-6 h-6 text-primary" />,
      questions: [ 
        {PS:"HSPS209", title:"A freelancing platform connecting gig workers with employers, integrating AI-driven job recommendations, escrow payments, and advanced search features for seamless project ."},
        {PS:"HSPS216", title:"Build a platform where students can discuss sensitive topics (e.g., mental health, career stress) anonymously, with built-in moderation to prevent misuse."},
        {PS:"HSPS215", title:"An app that locks distracting apps and gamifies focus periods with rewards for uninterrupted study sessions." },
        {PS:"HSPS210", title:"Create an AI system that verifies news credibility using deep learning and cross-referencing multiple sources."},
        {PS:"HSPS214", title:"Build a tool for visualizing goals and tracking progress, integrating elements like photos, videos, and music."},
        {PS:"HSPS213", title:"Create a digital platform where local communities can share announcements, events, or important updates for better communication and engagement."},
        {PS:"HSPS212", title:"Design an app that helps students schedule their study sessions, track assignments, and get reminders for deadlines in a fun and interactive way."},
        {PS:"HSPS211", title:"Build a simple app where people can report and find lost items in their local area, such as wallets, keys, or even pets."}
      ],
    },
    "Sustainable Smart Ecosystem": {
      // icon: <Leaf className="w-6 h-6 text-primary" />,
      questions: [
        {PS:"HSPS134", title:"	A hyper-local air quality monitoring system for campuses using low-cost IoT devices, with recommendations to improve indoor air quality." },     
        {PS:"HSPS135", title:"	Create a marketplace app where students and clubs can donate or exchange reusable materials for projects or events."},
        {PS:"HSPS136", title:"	Build an AI system that analyzes a building’s energy consumption and provides actionable insights for reducing waste."},
        {PS:"HSPS138", title:"	An app that incentivizes eco-friendly behaviors like carpooling, using reusable bottles, or planting trees with points redeemable for rewards." },
        {PS:"HSPS137", title:"	Create a solution to help small communities track and reward individuals for proper waste segregation and recycling efforts."},
        {PS:"HSPS139", title:"	Develop an app that reminds users to water their plants based on plant type, location, and weather updates."},
        {PS:"HSPS141", title:"	Food Waste Reduction Platform "},
        {PS:"HSPS140", title:"	Build a basic mobile app that helps users track how much electricity their appliances are consuming and gives tips to save energy."},
        {PS:"HSPS143",title:"   Innovate to Capture More Sunlight and Boost Energy : "},
        {PS:"HSPS142",title: " Students struggle with transportation, and ride-sharing apps are expensive."}
    ],
    },
    "Health & Wellness": {
      // icon: <Heart className="w-6 h-6 text-primary" />,
      questions: [
        {PS:"HSPS155", title:"A tool that monitors typing patterns or screen time to detect stress levels and offers personalized relief strategies."},
        // {PS:2, title:" Develop a game that integrates physical activity (like jumping or squats) with gameplay, promoting fitness among gamers."},
        // {PS:3, title:"A platform connecting students with local fitness groups, yoga classes, or mental health workshops."},
        {PS:"HSPS156", title:"Create an augmented reality mirror that acts as a virtual trainer, correcting form and posture in real time."},
        // {PS:5, title:"An app that collects symptoms, sleep patterns, and activity data to predict potential health issues and suggest lifestyle changes."},
        // {PS:6, title:"Develop an app that reminds users to water their plants based on plant type, location, and weather updates."},
        // {PS:7, title:"Create a solution to help small communities track and reward individuals for proper waste segregation and recycling efforts."},
        // {PS:8, title:"Build a basic mobile app that helps users track how much electricity their appliances are consuming and gives tips to save energy."}, 
    ],
    },
    "Automation": {
      // icon: <Bot className="w-6 h-6 text-primary" />,
      questions: [
        {PS:"HSPS191", title: " A customizable, open-source home automation system for turning appliances on/off with voice commands."},
        {PS:"HSPS189", title:" A tool that scans textbooks or lecture notes and generates concise study guides, quizzes, or flashcards."},
        {PS:"HSPS188",title: " Build a smart system for reducing waiting times at cafeterias, libraries, or campus offices by providing real-time queue updates."},
        {PS:"HSPS197",title: " AI-Powered Smart Scholarship & Financial Aid Finder"},
        {PS:"HSPS190",title: " Create a system that monitors campus infrastructure (like water leaks, electrical issues) and auto-generates maintenance requests."},
        {PS:"HSPS194",title: " Hostel laundry facilities get overcrowded, leading to long wait times."},
        {PS:"HSPS184",title: " Develop a mobile app that helps users create grocery lists based on the items they frequently buy and alerts them if they're running out of something."},
        {PS:"HSPS186",title: " Build a simple IoT-based solution where lights turn on/off automatically when someone enters or leaves a room to save energy."},
      ],
    }
  };

  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  useEffect(() => {
    if (theme && themes[theme]) setActiveTheme(theme);
    else setActiveTheme(null);
  }, [theme]);

  const allQuestions = Object.entries(themes).flatMap(([themeName, data]) =>
    data.questions.map(question => ({ ...question, theme: themeName }))
  );

  const displayedQuestions = activeTheme
    ? allQuestions.filter(question => question.theme === activeTheme)
    : allQuestions;

  return (
    <section className="py-20 text-left animate-fade-in px-10" id="team">
      <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-2">
        <PencilLine className="text-teal-500" />
        Problem Statements
      </h2>

      {/* Theme Selection Buttons */}
      <div className="mb-8 flex flex-wrap gap-4">
        {Object.keys(themes).map((category) => (
          <Button
            key={category}
            onClick={() => setActiveTheme(category)}
            variant={activeTheme === category ? "default" : "outline"}
            className={`px-7 py-2 rounded-full transition-all duration-300 capitalize
              ${activeTheme === category ? 'bg-teal-500 text-black hover:bg-teal-600' : 'bg-transparent text-white hover:bg-teal-500/20'}`}
          >
            {category}
          </Button>
        ))}
        <Button
          onClick={() => setActiveTheme(null)}
          variant={activeTheme === null ? "default" : "outline"}
          className={`px-7 py-2 rounded-full transition-all duration-300 capitalize
            ${activeTheme === null ? 'bg-teal-500 text-black hover:bg-teal-600' : 'bg-transparent text-white hover:bg-teal-500/20'}`}
        >
          All
        </Button>
      </div>

      {/* Table Displaying Problem Statements */}
      <div className="overflow-x-auto">
        <div className="flex justify-start min-w-[800px]">
          <table className="w-full bg-[#e7fcf1] rounded-lg shadow-lg text-black">
            <thead>
              <tr>
                <th className="py-4 px-5 border-[rgb(20,184,166)] border-b border-r w-1/12">Sr No</th>
                <th className="py-4 px-5 border-[rgb(20,184,166)] border-b border-r w-1/2">Title</th>
                <th className="py-4 px-5 border-[rgb(20,184,166)] border-b border-r w-1/12">PS NUMBER</th>
                <th className="py-4 px-5 border-[rgb(20,184,166)] border-b w-1/4">Theme</th>
              </tr>
            </thead>
            <tbody>
              {displayedQuestions.map((question, index) => (
                <tr key={question.PS}>
                  <td className="py-2 px-4 border-[rgb(20,184,166)] border-b border-r">{index + 1}</td>
                  <td className="py-2 px-4 border-[rgb(20,184,166)] border-b border-r">{question.title}</td>
                  <td className="py-2 px-4 border-[rgb(20,184,166)] border-b border-r">{question.PS}</td>
                  <td className="py-2 px-4 border-[rgb(20,184,166)] border-b">{question.theme}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ThemeList;





// return(
//   <section className="py-20 animate-fade-in " PS="team">
//       <h2 className="text-4xl font-bold text-white mb-8 flex items-center justify-center gap-2">
//         <PencilLine className="text-teal-500 " />
//         Problem Statements
//       </h2>
      
//       <div className="mb-8 flex flex-wrap justify-center gap-4">
//         {Object.keys(themes).map((category) => (
//           <Button
//             key={category}
//             onClick={() => setActiveTeam(category)}
//             variant={activeTeam === category ? "default" : "outline"}
//             className={`
//               px-7 py-2 rounded-full transition-all duration-300 capitalize
//               ${activeTeam === category 
//                 ? 'bg-teal-500 text-black hover:bg-teal-600' 
//                 : 'bg-transparent text-white hover:bg-teal-500/20'}
//             `}
//           > 
//             {category} 
//           </Button>
//         ))}
//       </div>
//       <div className="overflow-x-auto mx-10">
//         <table className="min-w-full bg-white rounded-lg shadow-lg">
//           <thead>
//             <tr>
//                 <th className="py-4 px-5 border-b border-r w-1/12">S.No.</th>
//               <th className="py-4 px-5 border-b border-r w-1/12">Problem Statement Title</th>
//               <th className="py-4 px-5 border-b border-r w-1/12">PS Number</th>
//               <th className="py-4 px-5 border-b w-1/12">Theme</th>
//             </tr>
//           </thead>
//           <tbody>
//             {themes[activeTeam].questions.map((question, index) => (
//               <tr key={question.PS}>
//                 <td className="py-2 px-4 border-b border-r">{index + 1}</td>
//                 <td className="py-2 px-4 border-b border-r">{question.title}</td>
//                 <td className="py-2 px-4 border-b border-r">{question.PS}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };




 