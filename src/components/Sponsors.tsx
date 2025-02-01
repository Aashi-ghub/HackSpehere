import { Award } from "lucide-react";

const Sponsors = () => {
  const sponsors = [
    {
      name: "HackWithIndia",
      logo: "/hack-with-india.png",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-24" id="sponsors">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center">
          <Award className="text-primary h-8 w-8" />
          Our Sponsors
        </h2>
        <div className="flex justify-center">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="relative px-20 py-10 rounded-3xl bg-secondary/20 backdrop-blur-sm border border-white/5"
            >
               <a href="https://www.linkedin.com/company/hackwithindia/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-[100%] rounded-[100%] h-80 md:h-40 opacity-90 transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;