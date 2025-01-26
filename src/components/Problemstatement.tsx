import { AlertCircle, Target } from "lucide-react";

const ProblemStatements = () => {
  const problemStatements = [
    { id: 1, title: "Develop a mental health platform leveraging AI for personalized support." },
    { id: 2, title: "Create a blockchain-based supply chain tracking system for transparency." },
    { id: 3, title: "Build a disaster response app with real-time alerts and resource mapping." },
    { id: 4, title: "Design a gamified app to promote sustainable living practices." },
    { id: 5, title: "Develop an AI-driven education tool for adaptive and inclusive learning." },
  ];

  return (
    <section className="py-12 animate-fade-in" id="problem-statements">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Target className="text-teal-400" />
        Problem Statements
      </h2>
      <div className="grid gap-6 px-5">
        {problemStatements.map((problem) => (
          <div
            key={problem.id}
            className="bg-secondary/50 backdrop-blur-sm p-5 rounded-lg border border-white/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <span className="text-teal">
                <AlertCircle className="w-6 h-6" />
              </span>
              <h2 className="text-base  text-white">{problem.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemStatements;
