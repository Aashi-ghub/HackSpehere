import { Users } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";
import { Linkedin } from "lucide-react";
const Team = () => {
  const [activeTeam, setActiveTeam] = useState("organizing");
 
  const teamCategories = {
    organizing: [
      { name: "Shridhar Kumar", role: "Lead Organizer", image: "/1705691561997.jpeg", linkedin: "https://www.linkedin.com/in/shridhar-kumar-65143824a/" },
      { name: "Siddharth Rishab", role: "Co-Organizer", image: "/1724743115009.jpeg", linkedin: "https://www.linkedin.com/in/siddharth-rishabh-a8a18b274/" },
      { name: "Aryan Shrivastava", role: "Event Manager", image: "/1719437893743.jpeg", linkedin: "https://www.linkedin.com/in/aryan-srivastava-cgc2237354/" },
      { name: "Yash Rajput", role: "Event Manager", image: "/1705141588146.jpeg", linkedin: "https://www.linkedin.com/in/yash4823/" },
    ],
    technical: [
      { name: "Kanan", role: "Frontend Developer", image: "/kanan.jpg", linkedin: "https://www.linkedin.com/in/kanan-kango-16499b282/" },
      { name: "Jyoti", role: "Backend Developer", image: "https://i.pravatar.cc/150?img=5", linkedin: "https://linkedin.com/in/jyoti" },
      { name: "Gautam Dhiman", role: "Frontend Developer", image: "https://i.pravatar.cc/150?img=6", linkedin: "https://linkedin.com/in/gautam-dhiman" },
      { name: "Aashi Raghuwanshi", role: "Tech", image: "https://i.pravatar.cc/150?img=12", linkedin: "https://www.linkedin.com/in/aashi-raghuwanshi/" },
    ],
    design: [
      { name: "Kamakshi", role: "Design Lead", image: "https://i.pravatar.cc/150?img=7", linkedin: "https://linkedin.com/in/kamakshi" },
      { name: "Arushi", role: "Designer", image: "https://i.pravatar.cc/150?img=8", linkedin: "https://linkedin.com/in/arushi" },
      { name: "Devendra", role: "Designer", image: "https://i.pravatar.cc/150?img=9", linkedin: "https://linkedin.com/in/devendra" },
      { name: "Sania", role: "Designer", image: "https://i.pravatar.cc/150?img=12", linkedin: "https://linkedin.com/in/sania" },
    ],
    pr: [
      { name: "Sarang", role: "PR Lead", image: "https://i.pravatar.cc/150?img=10", linkedin: "https://linkedin.com/in/sarang" },
      { name: "Kushal", role: "Social Media Manager", image: "https://i.pravatar.cc/150?img=11", linkedin: "https://linkedin.com/in/kushal" },
      { name: "Rahul", role: "Content Creator", image: "https://i.pravatar.cc/150?img=12", linkedin: "https://linkedin.com/in/rahul" },
      { name: "Unnati", role: "Content Creator", image: "https://i.pravatar.cc/150?img=12", linkedin: "https://linkedin.com/in/unnati" },
    ],
  };
  return (
    <section className="py-16 animate-fade-in" id="team">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Users className="text-teal-500" />
        Team
      </h2>
      {/* Team Toggle Group */}
      <div className="mb-8 flex justify-center">
        <ToggleGroup
          type="single"
          value={activeTeam}
          onValueChange={(value) => value && setActiveTeam(value)}
          className="justify-center bg-white/10 p-1 rounded-lg"
        >
          <ToggleGroupItem 
            value="organizing" 
            className="capitalize data-[state=on]:bg-teal-400 data-[state=on]:text-black text-white hover:text-black"
          >
            Organizing Team
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="technical" 
            className="capitalize data-[state=on]:bg-teal-500 data-[state=on]:text-black text-white hover:text-black"
          >
            Technical Team
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="design" 
            className="capitalize data-[state=on]:bg-teal-600 data-[state=on]:text-black text-white hover:text-black"
          >
            Design Team
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="pr" 
            className="capitalize data-[state=on]:bg-teal-700 data-[state=on]:text-black text-white hover:text-black"
          >
            PR Team
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {/* Team Members Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {teamCategories[activeTeam as keyof typeof teamCategories].map((member, index) => (
          <div key={index} className="group perspective">
            <div className="relative w-full h-[300px] transition-transform duration-700 transform-style-3d hover:rotate-y-180">
              {/* Front of card */}
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-xl border border-teal-500/20 hover:border-teal-500/60 transition-all duration-300 text-center">
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 rounded-full mx-auto border-2 border-teal-500 transition-transform duration-300 shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-2xl text-white font-bold mb-2">{member.name}</h3>
                  <p className="text-teal-400 font-medium">{member.role}</p>
                </div>
              </div>
              {/* Back of card */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-teal-900/90 to-teal-800/90 backdrop-blur-lg p-8 rounded-xl border border-teal-500/20 flex flex-col items-center justify-center">
                <h3 className="text-2xl text-white font-bold mb-4">{member.name}</h3>
                <p className="text-teal-300 mb-6">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;