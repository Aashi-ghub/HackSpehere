/*import { Users } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";

const Organizers = () => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const organizers = [
    { name: "Aryan Srivastava", role: "Event Organizer", image: "/ab.webp" },
    { name: "Shridhar Kumar", role: "Event Organizer", image: "/sb.webp" },
    { name: "Siddharth Karn", role: "Event Organizer", image: "/sd.webp" },
    { name: "Yash Rajput", role: "Event Organizer", image: "/yash.webp" },
    { name: "Another Member", role: "Event Organizer", image: "/yash.webp" },
  ];

  useEffect(() => {
    organizers.forEach((member) => {
      const img = new Image();
      img.src = member.image;
      img.onload = () => setLoadedImages((prev) => [...prev, member.image]);
    });
  }, []);

  return (
    <section className="py-8 animate-fade-in" id="team">
      <h2 className="text-3xl font-bold font-orbitron justify-center text-white mb-6 flex items-center gap-2">
        <Users className="text-red-500" />
        Organizers
      </h2>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-8">
        {organizers.map((member, index) => (
          <div 
            key={index} 
            className="group relative bg-gradient-to-br from-[#1f1f1f] via-[#1e2323] to-[#0f0101dc] rounded-xl p-4 min-h-[140px] flex flex-col items-center transition-all duration-500 hover:shadow-xl hover:shadow-white/20 hover:scale-[1.02] w-full sm:w-[400px]"
          >
            <div className="relative mb-4">
              <div className="w-32 h-32 sm:w-44 sm:h-44 mx-auto rounded-2xl overflow-hidden border border-white/50 shadow-md transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center transition-all duration-500 mt-3"> 
              <h3 className="text-lg sm:text-xl text-white font-bold mb-2">{member.name}</h3>
              <p className="text-sm sm:text-base text-white font-medium px-3 py-1 rounded-full bg-white/10 border border-white/20">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizers;*/





import { Users } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";

const Organizers = () => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const organizers = [
    { name: "Dr. Gagandeep Bhullar", role: "Event Organizer", image: "/" },
    { name: "Ms. Namrata Chopra", role: "Event Organizer", image: "/" },
    { name: "Ms. Gurpreet Kaur", role: "Event Organizer", image: "/" },
    { name: "Mr. Rohit", role: "Event Organizer", image: "/" },
    { name: "Mr. Cd", role: "Event Organizer", image: "/" },
  ];

  useEffect(() => {
    organizers.forEach((member) => {
      const img = new Image();
      img.src = member.image;
      img.onload = () => setLoadedImages((prev) => [...prev, member.image]);
    });
  }, []);

  return (
    <section className="py-8 animate-fade-in" id="team">
      <h2 className="text-3xl font-bold font-orbitron justify-center text-white mb-6 flex items-center gap-2">
        <Users className="text-red-500" />
        Organizers
      </h2>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-8">
        {organizers.map((member, index) => (
          <div 
            key={index} 
            className="group relative bg-transparent rounded-xl p-4 min-h-[140px] flex flex-col items-center transition-all duration-500 hover:shadow-xl hover:shadow-white/20 hover:scale-[1.02] w-full sm:w-[330px]"
          >
            <div className="relative mb-4">
              <div className="w-40 h-40 sm:w-52 sm:h-52 mx-auto overflow-hidden shadow-md transition-all duration-300 rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center transition-all duration-500 mt-3"> 
              <h3 className="text-lg sm:text-xl text-white font-bold mb-2">{member.name}</h3>
              <p className="text-sm sm:text-base text-white font-medium px-3 py-1 rounded-full bg-white/10 border border-white/20">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizers;
