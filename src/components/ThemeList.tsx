import React, { useState } from 'react';
import { Lightbulb, Leaf, Heart, Bot ,AlignRight , CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeList=()=>{
  const [activeTeam, setActiveTeam] = useState("Sustainable Smart Ecosystem");
 const themes={
       "Miscellaneous Innovation":{
        // icon: <Lightbulb className="w-6 h-6 text-primary" />,
        questions: [ 
          {id:1, title:"	AI-Powered Resume Analyzer : Create a tool that reviews resumes and provides actionable feedback, highlighting skills in demand for a specific industry."},
          {id:1, title:"	Anonymous Discussion Platform : Build a platform where students can discuss sensitive topics (e.g., mental health, career stress) anonymously, with built-in moderation to prevent misuse."},
          {id:1, title:"	Study Mode App : An app that locks distracting apps and gamifies focus periods with rewards for uninterrupted study sessions." },
          {id:1, title:"	Crowdsourced Lost & Found : Develop an app where students can report lost items or post found items, with campus geotagging for tracking."},
          {id:1, title:"	Dynamic Mood Board Creator : Build a tool for visualizing goals and tracking progress, integrating elements like photos, videos, and music."},
          {id:1, title:"	Smart Community Noticeboard :Create a digital platform where local communities can share announcements, events, or important updates for better communication and engagement."},
          {id:1, title:"	Student Time-Management Helper :Design an app that helps students schedule their study sessions, track assignments, and get reminders for deadlines in a fun and interactive way."},
          {id:1, title:"	Lost and Found Tracker :Build a simple app where people can report and find lost items in their local area, such as wallets, keys, or even pets."}
           ],
       },
       "Sustainable Smart Ecosystem":{
        // icon: <Leaf className="w-6 h-6 text-primary" />,
        questions: [
          {id:1, title:"	Real-Time Air Quality Tracker : A hyper-local air quality monitoring system for campuses using low-cost IoT devices, with recommendations to improve indoor air quality."},     
          {id:1, title:"	Upcycled Material Exchange : Create a marketplace app where students and clubs can donate or exchange reusable materials for projects or events."},
          {id:1, title:"	Energy Audit Bot : Build an AI system that analyzes a building’s energy consumption and provides actionable insights for reducing waste."},
          {id:1, title:"	Green Habits Challenge App : An app that incentivizes eco-friendly behaviors like carpooling, using reusable bottles, or planting trees with points redeemable for rewards."},
          {id:1, title:"	Sustainable Commuting Hub : A system to suggest the most eco-friendly and cost-effective routes for commuting, integrating public transport and carpooling options."},
          {id:1, title:"	Plant-Watering Reminder App : Develop an app that reminds users to water their plants based on plant type, location, and weather updates."},
          {id:1, title:"	Community Recycling Tracker : Create a solution to help small communities track and reward individuals for proper waste segregation and recycling efforts."},
          {id:1, title:"	Energy Usage Monitor for Homes : Build a basic mobile app that helps users track how much electricity their appliances are consuming and gives tips to save energy."},
          
      ],
       },
       "Health & Wellness":{
        // icon: <Heart className="w-6 h-6 text-primary" />,
        questions: [
         {id:1, tiltle:"	AI Stress Detection via Typing Patterns : A tool that monitors typing patterns or screen time to detect stress levels and offers personalized relief strategies."},
          {id:2, title:"	Fitness for Gamers : Develop a game that integrates physical activity (like jumping or squats) with gameplay, promoting fitness among gamers."},
          {id:3, title:"	Community Wellness Ecosystem : A platform connecting students with local fitness groups, yoga classes, or mental health workshops."},
          {id:4, title:"	AR-Powered Fitness Mirror : Create an augmented reality mirror that acts as a virtual trainer, correcting form and posture in real time."},
          {id:5, title:"	Preventive Health Analyzer : An app that collects symptoms, sleep patterns, and activity data to predict potential health issues and suggest lifestyle changes."},
          {id:6, title:"	Plant-Watering Reminder App :Develop an app that reminds users to water their plants based on plant type, location, and weather updates."},
          {id:7, title:"	Community Recycling Tracker :Create a solution to help small communities track and reward individuals for proper waste segregation and recycling efforts."},
          {id:8, title:"	Energy Usage Monitor for Homes : Build a basic mobile app that helps users track how much electricity their appliances are consuming and gives tips to save energy."},
          
          
      ],
       },
       "Automation":{
        // icon: <Bot className="w-6 h-6 text-primary" />,
        questions: [
       {id:1, title: " AI-Driven Feedback Assistant : Automate the process of collecting, analyzing, and summarizing feedback for classes or events, offering real-time insights."},
        {id:2, title:" Automated Study Guide Creator : A tool that scans textbooks or lecture notes and generates concise study guides, quizzes, or flashcards."},
        {id:3,title: " Queue Management System : Build a smart system for reducing waiting times at cafeterias, libraries, or campus offices by providing real-time queue updates."},
          {id:4,title: " IoT-Based Smart Cafeteria : Develop an automated food-ordering and tray collection system that tracks food preferences and reduces waste."},
            {id:5,title: " AI-Powered Maintenance Bot : Create a system that monitors campus infrastructure (like water leaks, electrical issues) and auto-generates maintenance requests."},
              {id:6,title: " Automatic Door Opener for Public Places : Create a basic sensor-based system to automatically open and close doors in crowded places to reduce manual contact and improve hygiene."},
                {id:7,title: " Smart Grocery List Creator : Develop a mobile app that helps users create grocery lists based on the items they frequently buy and alerts them if they're running out of something."},
                  {id:8,title: " Automated Room Lights : Build a simple IoT-based solution where lights turn on/off automatically when someone enters or leaves a room to save energy."}
          
          
      ],
       }

  }

return(
  <section className="py-20 animate-fade-in " id="team">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-2">
        <Lightbulb className="text-teal-500" />
        THEMES
      </h2>
      
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {Object.keys(themes).map((category) => (
          <Button
            key={category}
            onClick={() => setActiveTeam(category)}
            variant={activeTeam === category ? "default" : "outline"}
            className={`
              px-7 py-2 rounded-full transition-all duration-300 capitalize
              ${activeTeam === category 
                ? 'bg-teal-500 text-black hover:bg-teal-600' 
                : 'bg-transparent text-white hover:bg-teal-500/20'}
            `}
          > 
            {category} 
          </Button>
        ))}
      </div>
      <div className="overflow-x-auto mx-10">
        <table className="min-w-full bg-[rgb(20,184,166)] rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="py-2 px-5 border-b border-r">Sr No</th>
              <th className="py-2 px-5 border-b border-r">Themes</th>
              <th className="py-2 px-5 border-b">IDs</th>
            </tr>
          </thead>
          <tbody>
            {themes[activeTeam].questions.map((question, index) => (
              <tr key={question.id}>
                <td className="py-2 px-4 border-b border-r">{index + 1}</td>
                <td className="py-2 px-4 border-b border-r">{question.title}</td>
                <td className="py-2 px-4 border-b ">{question.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ThemeList;


 