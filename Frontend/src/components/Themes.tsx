import { Lightbulb, Leaf, Heart, Bot } from "lucide-react";

const Themes = () => {
  const themes = [
    {
      title: "Miscellaneous Innovation",
      description: "Explore boundless possibilities in tech innovation",
      icon: <Lightbulb className="w-6 h-6 text-primary" />
    },
    {
      title: "Sustainable Smart Ecosystem",
      description: "Build solutions for a sustainable future",
      icon: <Leaf className="w-6 h-6 text-primary" />
    },
    {
      title: "Health & Wellness",
      description: "Transform healthcare through technology",
      icon: <Heart className="w-6 h-6 text-primary" />
    },
    {
      title: "Automation",
      description: "Revolutionize processes with smart automation",
      icon: <Bot className="w-6 h-6 text-primary" />
    },
  ];

  return (
    <section className="py-12 animate-fade-in" id="themes">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Lightbulb className="text-teal-300" />
        Themes
      </h2>
      <div className="grid md:grid-cols-2 gap-6 perspective-1000">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="group bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-teal-700 
              transition-all duration-500 ease-out hover:border-slate-100
              transform-gpu preserve-3d rotate-y-[10deg] hover:rotate-y-[20deg] hover:scale-105
              hover:shadow-xl hover:shadow-teal-500/20 cursor-pointer"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div 
              className="mb-4 relative transform-gpu translate-z-20 group-hover:translate-z-[50px] transition-transform duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                {theme.icon}
              </div>
            </div>
            <h3 
              className="text-xl text-teal-500 font-bold transform-gpu translate-z-10 group-hover:translate-z-[40px] transition-transform duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {theme.title}
            </h3>
            <p 
              className="text-gray-400 mt-2 transform-gpu translate-z-5 group-hover:translate-z-[30px] transition-transform duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {theme.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Themes;