import { Award } from "lucide-react";

const Sponsors = () => {
  const sponsors = [
    { name: "HackWithIndia"},
  ];

  return (
    <section className="py-16 animate-fade-in" id="sponsors">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2 justify-center">
        <Award className="text-primary" />
        Our Sponsors
      </h2>
      <div className="flex flex-col items-center justify-center gap-10">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-secondary/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 flex items-center justify-center w-[400px] h-[150px]"
          >
            <img
              
              alt={sponsor.name}
              className="max-w-full h-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
