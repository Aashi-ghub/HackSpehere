import { AlertCircle } from "lucide-react";

const ProblemStatements = () => {
  const problemStatements = [
    { id: 1, title: "Develop a mental health platform leveraging AI for personalized support." },
    { id: 2, title: "Create a blockchain-based supply chain tracking system for transparency." },
    { id: 3, title: "Build a disaster response app with real-time alerts and resource mapping." },
    { id: 4, title: "Design a gamified app to promote sustainable living practices." },
    { id: 5, title: "Develop an AI-driven education tool for adaptive and inclusive learning." },
  ];

  return (
    <div className="grid gap-3 animate-fade-in">
      <h3 className="text-xl font-bold text-white mb-4">Problem Statements</h3>
      {problemStatements.map((problem) => (
        <div
          key={problem.id}
          className="bg-secondary/50 backdrop-blur-sm p-3 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105"
        >
          <div className="flex items-center gap-2">
            <span className="text-teal">
              <AlertCircle className="w-4 h-4" />
            </span>
  <span className="text-sm text-white">{problem.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProblemStatements;
