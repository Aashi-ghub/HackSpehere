import { Users } from "lucide-react";
import { useState } from "react";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Team = () => {
  const [activeTeam, setActiveTeam] = useState("organizing");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
 
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
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-10" 
      id="team"
    >
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
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div 
              className={`relative w-full h-[350px] rounded-xl overflow-hidden cursor-pointer transition-all duration-500
                ${expandedCard === index ? 'scale-105 shadow-2xl' : 'hover:scale-102'}
              `}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-purple-500/20 to-blue-500/20 animate-gradient-x" />
              
              <div className="relative h-full bg-black/80 p-8 flex flex-col items-center justify-center">
                <motion.div 
                  className="relative mb-6"
                  animate={{ 
                    scale: expandedCard === index ? 0.8 : 1,
                    y: expandedCard === index ? -30 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-teal-500/50 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: expandedCard === index ? -20 : 0,
                    opacity: expandedCard === index ? 0.7 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl text-white font-bold mb-2 tracking-tight">{member.name}</h3>
                  <p className="text-teal-400 font-medium px-4 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
                    {member.role}
                  </p>
                </motion.div>

                {/* LinkedIn button with staggered entrance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: expandedCard === index ? 1 : 0,
                    y: expandedCard === index ? 0 : 20
                  }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="absolute bottom-8 left-0 right-0 flex justify-center"
                >
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-400 text-black px-6 py-3 rounded-full 
                             hover:from-teal-400 hover:to-teal-500 transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Team;