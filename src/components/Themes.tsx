import { Lightbulb, Leaf, Heart, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const Themes = () => {
  const themes = [
    {
      title: "Miscellaneous Innovation",
      description: "Explore boundless possibilities in tech innovation",
      icon: <Lightbulb className="w-6 h-6 text-red-300" />
    },
    {
      title: "Sustainable Smart Ecosystem",
      description: "Build solutions for a sustainable future",
      icon: <Leaf className="w-6 h-6 text-red-300" />
    },
    {
      title: "Health & Wellness",
      description: "Transform healthcare through technology",
      icon: <Heart className="w-6 h-6 text-red-300" />
    },
    {
      title: "Automation",
      description: "Revolutionize processes with smart automation",
      icon: <Bot className="w-6 h-6 text-red-300" />
    },
  ];

  return (
    <section className="py-12 animate-fade-in" id="themes">
      <h2 className="text-3xl font-bold justify-center text-white mb-8 flex font-orbitron items-center gap-2">
        <Lightbulb className="text-red-300" />
        Themes
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {themes.map((theme, index) => (
          <Link to={`/themesList/${theme.title}`} key={index}>
            <div
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-black 
              transition-transform duration-100 ease-out hover:scale-105 hover:border-slate-100 
              hover:shadow-xl hover:shadow-red-500/20 cursor-pointer"
            >
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl opacity-30 transition-opacity duration-300" />
                <div className="relative">
                  {theme.icon}
                </div>
              </div>
              <h3 className="text-xl text-white font-bold">
                {theme.title}
              </h3>
              <p className="text-gray-400 mt-2">
                {theme.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Themes;