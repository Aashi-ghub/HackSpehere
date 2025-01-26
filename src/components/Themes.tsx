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
      <h2 className="text-3xl font-bold text-teal-500 mb-8 flex items-center gap-2">
        <Lightbulb className="text-slate-50" />
        Themes
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-teal-700 hover:border-slate-100 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {theme.icon}
            </div>
            <h3 className="text-xl text-teal-500 font-bold">{theme.title}</h3>
            <p className="text-gray-400 mt-2">{theme.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Themes;