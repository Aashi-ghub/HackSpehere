import { Users } from "lucide-react";
import { useState } from "react";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const [activeTeam, setActiveTeam] = useState("organizing");
 
  const teamCategories = {
    organizing: [
      { name: "Shridhar Kumar", role: "Lead ", image: "/sb.jpg", linkedin: "https://www.linkedin.com/in/shridhar-kumar-65143824a/" },
      { name: "Siddharth Rishabh", role: "Lead", image: "/sd.jpg", linkedin: "https://www.linkedin.com/in/siddharth-rishabh-a8a18b274/" },
      { name: "Aryan Shrivastava", role: "Lead", image: "/ab.jpg", linkedin: "https://www.linkedin.com/in/aryan-srivastava-cgc2237354/" },
      { name: "Yash Rajput", role: "Lead", image: "/1705141588146.jpeg", linkedin: "https://www.linkedin.com/in/yash4823/" },
    ],
    technical: [
      { name: "Kanan", role: "Frontend Developer", image: "/kanan.jpg", linkedin: "https://www.linkedin.com/in/kanan-kango-16499b282/" },
      { name: "Jyoti", role: "Backend Developer", image: "https://i.pravatar.cc/150?img=5", linkedin: "https://linkedin.com/in/jyoti" },
      { name: "Gautam Dhiman", role: "Frontend Developer", image: "https://i.pravatar.cc/150?img=6", linkedin: "https://linkedin.com/in/gautam-dhiman" },
      { name: "Aashi Raghuwanshi", role: "Tech", image: "https://i.pravatar.cc/150?img=12", linkedin: "https://www.linkedin.com/in/aashi-raghuwanshi/" },
    ],
    design: [
      { name: "Kamakshi", role: "Design Lead", image: "https://i.pravatar.cc/150?img=7", linkedin: "https://www.linkedin.com/in/kamakshi-sachdeva-3318a7325/" },
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
    <section className="py-10 animate-fade-in " id="team">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Users className="text-teal-500" />
        Team
      </h2>
      
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {Object.keys(teamCategories).map((category) => (
          <Button
            key={category}
            onClick={() => setActiveTeam(category)}
            variant={activeTeam === category ? "default" : "outline"}
            className={`
              px-6 py-2 rounded-full transition-all duration-300 capitalize
              ${activeTeam === category 
                ? 'bg-teal-500 text-black hover:bg-teal-600' 
                : 'bg-transparent text-white hover:bg-teal-500/20'}
            `}
          >
            {category} Team
          </Button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-4 gap-6">
        {teamCategories[activeTeam as keyof typeof teamCategories].map((member, index) => (
          <div key={index} className="group perspective">
            <div className="relative w-full h-[350px] transition-transform duration-700 transform-style-3d hover:rotate-y-180">
              {/* Front of card */}
              <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-gradient-to-br from-[#181717] via-[#2f2f2f] to-[#1b1a1a] shadow-xl">
                {/* Glowing accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glass effect top bar */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm" />
                
                {/* Content */}
                <div className="h-full p-8 flex flex-col items-center justify-center relative z-10">
                  <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-teal-500/50 shadow-lg shadow-teal-700/30 transform rotate-3 group-hover:rotate-0 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-2 -right-2 w-32 h-32 rounded-2xl border-2 border-white/50 -z-10 transform -rotate-3 group-hover:rotate-0 transition-all duration-300" />
                  </div>
                  <h3 className="text-2xl text-white font-bold mb-2 tracking-tight">{member.name}</h3>
                  <p className="text-teal-400 font-medium px-4 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
                    {member.role}
                  </p>
                </div>
              </div>
              {/* Back of card */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-gradient-to-br from-[#255e61] via-[#222] to-[#1a1a1a] shadow-xl">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-white to-teal-500 opacity-20" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col">
                  <div className="flex-1 bg-gradient-to-b from-teal-950 via-black/50 to-teal-600 flex items-center justify-center p-8">
                    <div className="relative">
                      <h3 className="text-3xl font-bold text-white uppercase tracking-widest text-center">
                        Hack Sphere
                      </h3>
                      <div className="absolute -inset-1 bg-white/20 blur-lg -z-10" />
                    </div>
                  </div>
                  
                  <div className="p-8 backdrop-blur-sm bg-black/20 flex flex-col items-center justify-center gap-4">
                    <h3 className="text-2xl text-white font-bold">{member.name}</h3>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-teal-950 to-teal-400 hover:from-teal-400 hover:to-teal-500 text-black px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                    >
                      <Linkedin className="w-5 h-5" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;