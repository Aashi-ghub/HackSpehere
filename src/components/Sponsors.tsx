import { Award } from "lucide-react";

const Sponsors = () => {
  const sponsors = [
    {
      name: "HackWithIndia",
      logo: "/hack-with-india.jpeg",
      link: "https://hackwithindia.in/",
    },
    {
      name: "D4",
      logo: "/logo.jpeg",
      link: "https://d4.com/",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-24" id="sponsors">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center">
          <Award className="text-primary h-8 w-8" />
          Our Sponsors
        </h2>
        <div className="flex justify-center gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center w-40 h-40 md:w-80 md:h-80"
            >
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-contain opacity-90 transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
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