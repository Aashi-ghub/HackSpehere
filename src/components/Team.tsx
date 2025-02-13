import { Users } from "lucide-react";
import { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import React from "react";

const Team = () => {
  const [activeTeam, setActiveTeam] = useState("organizing");
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const teamCategories = {
    organizing: [
      { name: "Aryan Srivastava", role: "Event Lead", image: "/ab.webp", linkedin: "https://www.linkedin.com/in/aryan-srivastava-cgc2237354/" },
      { name: "Shridhar Kumar", role: "Event Lead", image: "/sb.webp", linkedin: "https://www.linkedin.com/in/shridhar-kumar-65143824a/" },
      { name: "Siddharth Karn", role: "Event Lead", image: "/sd.webp", linkedin: "https://www.linkedin.com/in/siddharth-rishabh-a8a18b274/" },
      { name: "Yash Rajput", role: "Event Lead", image: "/yash.webp", linkedin: "https://www.linkedin.com/in/yash4823/" },
    ],
    technical: [
      { name: "Aashi", role: "Tech Lead", image: "/aashi.webp", linkedin: "https://www.linkedin.com/in/aashi-raghuwanshi" },
      { name: "Jyoti", role: "Backend Developer", image: "/Jyoti.webp", linkedin: "https://www.linkedin.com/in/jyoti-khetwal-543731262" },
      { name: "Gautam Dhiman", role: "Frontend Developer", image: "/gautam.webp", linkedin: "https://www.linkedin.com/in/gautam-dhiman-585b0b313" },
      { name: "Kanan", role: "Frontend Developer", image: "/kanan.webp", linkedin: "https://www.linkedin.com/in/kanan-kango-16499b282/" },
    ],
    design: [
      { name: "Devendra", role: "Media Head", image: "/devendra.webp", linkedin: "https://www.linkedin.com/in/devender-kumar-5207ab34a" },
      { name: "Kamakshi", role: "Designer", image: "/kamakshi.webp", linkedin: "https://www.linkedin.com/in/kamakshi-sachdeva-3318a7325" },
      { name: "Arushi", role: "Designer", image: "/arushi.webp", linkedin: "https://www.linkedin.com/in/arushi-sharma-40b361314" },
      { name: "Piyush", role: "Designer", image: "/piyush.webp", linkedin: "https://www.linkedin.com/in/piyush-bajaj18" },
    ],
    pr: [
      { name: "Abhinav", role: "Content Lead", image: "/Abhinav.webp", linkedin: "https://www.linkedin.com/in/abhinav-kumar-3b238a28a" },
      { name: "Unnati", role: "Content", image: "/unnati.webp", linkedin: "https://www.linkedin.com/in/unnati-negi-3714b331b" },
      { name: "Sarang", role: "PR", image: "/sarang.webp", linkedin: "https://www.linkedin.com/in/sarang-ahlawat" },
      { name: "Radhika", role: "Content", image: "/radhika.jpeg", linkedin: "https://www.linkedin.com/in/radhika-7206b9330/" },
      ,
    ],
  };
  // Preload all images once the component mounts
  useEffect(() => {
    const imagesToPreload = Object.values(teamCategories).flat().map((member) => member.image);
    imagesToPreload.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => setLoadedImages((prev) => [...prev, image]);
    });
  }, []);

  return (
    <section className="py-10 animate-fade-in" id="team">
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
              px-7 py-2 rounded-full transition-all duration-300 capitalize 
              ${activeTeam === category 
                ? 'bg-teal-500 text-black hover:bg-teal-600' 
                : 'bg-transparent text-white hover:bg-teal-500/20'}
            `}
          >
            {category} Team
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamCategories[activeTeam as keyof typeof teamCategories].map((member, index) => (
          <div 
            key={index} 
            className="group relative bg-gradient-to-br from-[#1f1f1f] via-[#1e2323] to-[#000f0f] rounded-xl p-6 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#111212] via-[#1e2323] to-[#1f1f1f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 h-full flex flex-col items-center transition-all duration-500">
              <div className="relative mb-6 group-hover:scale-95 transition-transform duration-300">
                <div className="w-28 h-28 sm:w-32 font-serif sm:h-32 mx-auto rounded-2xl overflow-hidden border-2 border-teal-500/50 shadow-lg shadow-teal-700/30 transform rotate-3 group-hover:rotate-0 group-hover:rounded-full transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy" // Added lazy loading
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl border-2 border-white/50 -z-10 transform -rotate-3 opacity-100 group-hover:opacity-0 transition-all duration-300" />
              </div>

              <div className="text-center transition-all duration-500 mb-6">
                <h3 className="text-xl sm:text-2xl text-white font-bold mb-2 tracking-tight">{member.name}</h3>
                <div className="inline-block min-w-[140px]">
                  <p className="text-sm whitespace-nowrap text-teal-400 font-medium px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-950 to-teal-400 hover:from-black/5 hover:to-teal-800 text-white px-4 py-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect
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
