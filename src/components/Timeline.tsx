import { Calendar } from "lucide-react";
import React from "react";

const Timeline: React.FC = () => {
  // Event data array for dynamic rendering
  const events = [
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
      alignment: "left",
    },
    {
      title: "Problem Statement Release",
      description: "Find your teammates and form a strong team.",
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
      alignment: "right",
    },
    {
      title: "Dev Sprint (Day-1)",
      description: "Build fast, innovate faster—Dev Sprint awaits!",
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
      alignment: "left",
    },
    {
      title: "Git Challenge (Day-2)",
      description: "Conquer the Git challenge!",
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
      alignment: "right",
    },
    {
      title: "Pitch Deck Submission",
      description:
        "Innovative solution to [problem] for [target market], driving [outcome].",
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
      alignment: "left",
    },
    {
      title: "Hackathon Day (Final Day)",
      description: "Final push to bring our idea to life!",
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
      alignment: "right",
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

      <div className="space-y-12">
        {events.map((event, index) => (
          <div className="relative" key={index}>
            {/* Pulsating Dot */}
            <div
              className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full ${
                index % 2 === 0 ? "bg-teal-300" : "bg-teal-500"
              } transform -translate-x-2 mt-6`}
            >
              <div className="absolute w-8 h-8 rounded-full bg-green-600/20 transform -translate-x-2 -translate-y-2 animate-pulse"></div>
            </div>

            <div
              className={`ml-12 ${
                event.alignment === "left"
                  ? "md:ml-0 md:mr-[50%] md:pr-8"
                  : "md:ml-[50%] md:pl-8"
              }`}
            >
              <div
                className="bg-black/50 p-4 rounded-xl  border border-teal-800 hover:border-white transition-transform transform hover:scale-105"
                style={{ transition: "transform 0.3s ease-in-out" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3 text-teal-500">
                    {event.icon}
                    <h3 className="text-lg font-bold text-white">
                      {event.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-white">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
