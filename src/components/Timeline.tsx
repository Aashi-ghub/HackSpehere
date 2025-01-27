import { Calendar } from "lucide-react";
import React, { useState } from "react";

const Timeline: React.FC = () => {
  const [activeDescription, setActiveDescription] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [heading, setHeading] = useState<string>("Description");

  const timelineItems = [
    {
      title: "Registration Open",
      description: "Kickstart your journey by registering for the event.",
      detailedDescription: "Explore the registration details and take the first step toward participation.",
      hasButton: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="cyan"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
        </svg>
      ),
    },
    {
      title: "Problem Statement Release",
      description: "Find your teammates and form a strong team.",
      detailedDescription: "Explore various problem statements and brainstorm innovative solutions with your team.",
      hasButton: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="cyan"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
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
      heading: "Design to Dev",
      detailedDescription: "We will provide a Figma design to them, and they have to develop the website with the help of the design in limited time...",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="cyan"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
        </svg>
      ),
    },
    {
      title: "Git Challenge (Day-2)",
      description: "Collaborate, code, and conquer challenges together with GitChallenge!",
      heading: "Githack",
      detailedDescription:
        "We will provide a base code or the basic structure of the base website. Every team will make changes such as adding features, redesigning, etc. After updating, they will push their new code to GitHub. Other teams can fork this code and make further updates, with a limited number of forks allowed. Judging will be based on the final code submitted.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="cyan"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Pitch Deck Submission",
      description: "Craft your vision, showcase your innovation, and submit your winning pitch deck!",
      heading: "Pitch Deck",
      detailedDescription: "Teams will submit their solutions, and points will be assigned based on their presentation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="cyan"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
        </svg>
      ),
    },
    {
      title: "Hackathon Day (Final day)",
      description: "Final stretch, last code push—let's finish strong and make innovation happen!",
      heading: "Final Day",
      detailedDescription: "Welcome to the hackathon!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="cyan"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveDescription(null);
      setActiveItem(null);
    }
  };

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
                onClick={() => {
                  setActiveDescription(item.detailedDescription);
                  setActiveItem(item.title);
                  setHeading(item.title);
                }}
                className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-teal-300 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3 text-green-500">
                    {item.icon}
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Description Modal */}
      {activeDescription && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
        >
          <div className="bg-gray-900 text-white p-6 rounded-lg border border-cyan-400 relative w-96 max-h-96 overflow-y-auto">
            <button
              onClick={() => {
                setActiveDescription(null);
                setActiveItem(null);
              }}
              className="absolute top-2 right-2 text-cyan-400 hover:text-white"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold text-cyan-400 mb-4">{heading}</h3>
            <p className="text-sm mb-4">{activeDescription}</p>
            {activeItem === "Registration Open" && (
              <button
                className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
              >
                Register
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
