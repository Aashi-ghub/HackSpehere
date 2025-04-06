import { Briefcase, HeartPulse, Leaf, Bot } from "lucide-react";

const Themes = () => {
  const themes = [
    {
      title: "Business & Entrepreneurship",
      description: "Innovate and disrupt industries with groundbreaking business solutions. Transform ideas into scalable ventures and shape the future of commerce.",
      icon: <Briefcase className="w-6 h-6 text-red-500" />
    },
    {
      title: "Health & Fitness",
      description: "Empower yourself with knowledge on wellness, nutrition, and fitness. Explore cutting-edge health tech, workout routines, and mindful living for a better you.",
      icon: <HeartPulse className="w-6 h-6 text-red-500" />
    },
    {
      title: "Sustainable & Green Ecosystem",
      description: "Create impactful solutions that promote sustainability, eco-friendly practices, and environmental conservation for a better tomorrow.",
      icon: <Leaf className="w-6 h-6 text-red-500" />
    },
    {
      title: "Intelligent Automation",
      description: "Streamline processes, enhance efficiency, and drive innovation through automation, robotics, and AI-powered systems.",
      icon: <Bot className="w-6 h-6 text-red-500" />
    },
  ];

  return (
    <section className="py-12 animate-fade-in" id="themes">
      <h2 className="text-3xl font-bold justify-center text-white mb-8 flex font-orbitron items-center gap-2">
        <Briefcase className="text-red-500" />
        Themes
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {themes.map((theme, index) => (
          <div
            key={index}
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
        ))}
      </div>
    </section>
  );
};

export default Themes;
