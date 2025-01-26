import { Calendar } from "lucide-react";

import React from "react";

const Timeline: React.FC = () => {
  return (
    <div className="relative">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Calendar className="text-teal-400" />
        Event Timeline
      </h2>
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-teal-800 transform md:-translate-x-0.5"></div>

      <div className="space-y-8">
        {/* Timeline Item 1 */}
        <div className="relative">
          {/* Pulsating Dot */}
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-teal-300 transform -translate-x-2 mt-6 sign">
            <div className="absolute w-8 h-8 rounded-full bg-green-600/20 transform -translate-x-2 -translate-y-2 animate-pulse"></div>
          </div>

          <div className="ml-12 md:ml-0 md:mr-[50%] md:pr-8">
            <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-teal-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3 text-green-500">
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
                    className="lucide lucide-square-pen w-6 h-6 sign"
                  >
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-white">Registration Open</h3>
                </div>
                <span className="text-sm font-semibold text-green-400"></span>
              </div>
              <p className="text-sm text-gray-400">
                Kickstart your journey by registering for the event.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-teal-500 transform -translate-x-2 mt-6">
            <div className="absolute w-8 h-8 rounded-full bg-green-600/20 transform -translate-x-2 -translate-y-2 animate-pulse"></div>
          </div>

          <div className="ml-12 md:ml-[50%] md:pl-8">
            <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3 text-green-500">
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
                    className="lucide lucide-users w-6 h-6 sign"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-white">Problem Statement Release</h3>
                </div>
                <span className="text-sm font-semibold text-green-400"></span>
              </div>
              <p className="text-sm text-gray-400">
                Find your teammates and form a strong team.
              </p>
            </div>
          </div>
        </div>

        {/* TimeLine-3*/}
        
        <div className="relative">
          
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-green-600 transform -translate-x-2 mt-6">
            <div className="absolute w-8 h-8 rounded-full bg-green-600/20 transform -translate-x-2 -translate-y-2 animate-pulse"></div>
          </div>

          <div className="ml-12 md:ml-0 md:mr-[50%] md:pr-8">
            <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3 text-green-500">
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
                    className="lucide lucide-square-pen w-6 h-6 sign"
                  >
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-white">Dev Sprint (Day-1)</h3>
                </div>
                <span className="text-sm font-semibold text-green-400"></span>
              </div>
              <p className="text-sm text-gray-400">
              "Build fast, innovate faster—Dev Sprint awaits!"
              </p>
            </div>
          </div>
        </div>
         {/* Timeline Item 4 */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-green-600 transform -translate-x-2 mt-6">
            <div className="absolute w-8 h-8 rounded-full bg-green-600/20 transform -translate-x-2 -translate-y-2 animate-pulse"></div>
          </div>

          <div className="ml-12 md:ml-[50%] md:pl-8">
            <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3 text-green-500">
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
                    className="lucide lucide-users w-6 h-6 sign"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-white">Git Challenge (Day-2)</h3>
                </div>
                <span className="text-sm font-semibold text-green-400"></span>
              </div>
              <p className="text-sm text-gray-400">
               "Conquer the Git challenge!"
              </p>
            </div>
          </div>
        </div>



         {/* Timeline Item 5 */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-green-600 transform -translate-x-2 mt-6">
            <div className="absolute w-8 h-8 rounded-full bg-green-600/20 transform -translate-x-2 -translate-y-2 animate-pulse"></div>
          </div>

          <div className="ml-12 md:ml-0 md:mr-[50%] md:pr-8">
            <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3 text-green-500">
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
                    className="lucide lucide-square-pen w-6 h-6 sign"
                  >
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-white">Pitch deck submission</h3>
                </div>
                <span className="text-sm font-semibold text-green-400"></span>
              </div>
              <p className="text-sm text-gray-400">
              "Innovative solution to [problem] for [target market], driving [outcome]."
              </p>
            </div>
          </div>
        </div>

         {/* Timeline Item 6 */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-green-600 transform -translate-x-2 mt-6 ">
            <div className="absolute w-8 h-8 rounded-full bg-green-600/20 transform -translate-x-2 -translate-y-2 animate-pulse"></div>
          </div>

          <div className="ml-12 md:ml-[50%] md:pl-8">
            <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3 text-green-500">
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
                    className="lucide lucide-users w-6 h-6 sign"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-white">Hackathon Day (Final Day)</h3>
                </div>
                <span className="text-sm font-semibold text-green-400"></span>
              </div>
              <p className="text-sm text-gray-400">
              "Final push to bring our idea to life!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
