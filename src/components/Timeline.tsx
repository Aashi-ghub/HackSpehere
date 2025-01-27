import { Calendar } from "lucide-react";
import React, { useState } from "react";

const Timeline: React.FC = () => {
  const [activeDescription, setActiveDescription] = useState<string | null>(null);

  const timelineItems = [
    {
      title: "Registration Open",
      description: "Kickstart your journey by registering for the event.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-square-pen w-6 h-6"
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
        </svg>
      ),
      isRegistration: true,
    },
    {
      title: "Problem Statement Release",
      description: "Find your teammates and form a strong team.",
      detailedDescription: "Explore various problem statements and brainstorm with your team.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-users w-6 h-6"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Dev Sprint (Day-1)",
      description: "Build fast, innovate faster—Dev Sprint awaits!",
      detailedDescription: "Design to dev :-   we will provide a figma design to them and they have to develop the website with the help of the design in limited time...",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-square-pen w-6 h-6"
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
        </svg>
      ),
    },
    {
      title: "GitChallenge (Day-2) ",
      description: "Find your teammates and form a strong team.",
      detailedDescription: "GitHack :-we will provide a base code or the basic structure of the base website and every team will make some changes according to them such as they can add some features or they can change the design or something like these...after changing the bse code they will push their new updated code to their github and after that other teams will fork that updated code to do more updation any team can fork any team's code and same process will be repeated again and again.....they will have a limited no of forks so that it doesn't require more time..and for judgment we will review the last code they have pushed not the whole history but only the latest code...and by reviewing the latest code they will be given points....",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-users w-6 h-6"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Pitch Deck Submission (Day-3)",
      description: "Build fast, innovate faster—Dev Sprint awaits!",
      detailedDescription: "PPT presentation/ submission :-the teams will submit their solutions and we will shortlist or assign points to them according to their ppt",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-square-pen w-6 h-6"
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
        </svg>
      ),
    },
    {
      title: "Hackathon Day (Final Day)",
      description: "Find your teammates and form a strong team.",
      detailedDescription: "A hackathon is an event, typically lasting several days, where people come together to collaborate in order to solve a problem or identify new opportunities",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-users w-6 h-6"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Calendar className="text-teal-400" />
        Event Timeline
      </h2>

      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-teal-800 transform md:-translate-x-0.5"></div>

      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative">
            {/* Pulsating Dot */}
            <div
              className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-teal-500 transform -translate-x-2 mt-6`}
            >
              <div className="absolute w-8 h-8 rounded-full bg-green-600/20 transform -translate-x-2 -translate-y-2 animate-pulse"></div>
            </div>

            <div
              className={`${
                index % 2 === 0
                  ? "ml-12 md:ml-0 md:mr-[50%] md:pr-8"
                  : "ml-12 md:ml-[50%] md:pl-8"
              }`}
            >
              <div
                onClick={() => setActiveDescription(item.detailedDescription)}
                className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-teal-300 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3 text-green-500">
                    {item.icon}
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  {item.isRegistration && (
                    <button className="px-4 py-1 bg-teal-500 text-white rounded-md text-sm hover:bg-teal-600">
                      Register Now
                    </button>
                  )}
                </div>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Description Modal */}
      {activeDescription && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg border border-cyan-400 relative">
            <button
              onClick={() => setActiveDescription(null)}
              className="absolute top-2 right-2 text-cyan-400 hover:text-white"
            >
              &times;
            </button>
            <p className="text-sm">{activeDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
