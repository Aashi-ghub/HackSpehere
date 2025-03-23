
import React from "react";

const PageHeader: React.FC = () => {
  return (
    <div className="text-center mb-8 animate-slide-down">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-700 via-red-500 to-white-600 text-transparent bg-clip-text">
        Registration
      </h1>
      <p className="text-lg opacity-80 text-white italic mb-6">
        Being ordinary is not an option.
      </p>
      <div className="flex justify-center gap-3">
        <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-md text-sm  font-medium">
          Compete
        </span>
        <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-md text-sm font-medium">
          Connect
        </span>
        <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-md text-sm font-medium">
          Conquer
        </span>
      </div>
    </div>
  );
};

export default PageHeader;