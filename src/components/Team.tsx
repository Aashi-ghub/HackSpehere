import { Users } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";
const Team = () => {
  const [activeTeam, setActiveTeam] = useState("organizing");
  const teamCategories = {
    organizing: [
      { name: "John Doe", role: "Lead Organizer", image: "https://i.pravatar.cc/150?img=1" },
      { name: "Jane Smith", role: "Co-Organizer", image: "https://i.pravatar.cc/150?img=2" },
      { name: "Mike Johnson", role: "Event Manager", image: "https://i.pravatar.cc/150?img=3" },
    ],
    technical: [
      { name: "Alex Chen", role: "Tech Lead", image: "https://i.pravatar.cc/150?img=4" },
      { name: "Sarah Wilson", role: "Backend Developer", image: "https://i.pravatar.cc/150?img=5" },
      { name: "David Park", role: "Frontend Developer", image: "https://i.pravatar.cc/150?img=6" },
    ],
    design: [
      { name: "Emma Davis", role: "Design Lead", image: "https://i.pravatar.cc/150?img=7" },
      { name: "Lucas Brown", role: "UI Designer", image: "https://i.pravatar.cc/150?img=8" },
      { name: "Sophia Lee", role: "UX Designer", image: "https://i.pravatar.cc/150?img=9" },
    ],
    pr: [
      { name: "Oliver White", role: "PR Lead", image: "https://i.pravatar.cc/150?img=10" },
      { name: "Isabella Garcia", role: "Social Media Manager", image: "https://i.pravatar.cc/150?img=11" },
      { name: "William Taylor", role: "Content Creator", image: "https://i.pravatar.cc/150?img=12" },
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
      <div className="grid md:grid-cols-3 gap-6">
        {teamCategories[activeTeam as keyof typeof teamCategories].map((member, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-xl border border-teal-500/20 hover:border-teal-500/60 transition-all duration-300 text-center transform hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20"
          >
            <div className="relative z-10">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto border-2 border-teal-500 group-hover:scale-105 transition-transform duration-300 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl text-white font-bold mb-2">{member.name}</h3>
              <p className="text-teal-400 font-medium">{member.role}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;