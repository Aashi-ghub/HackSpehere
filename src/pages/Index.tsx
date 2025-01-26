import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Themes from "../components/Themes";
import Team from "../components/Team";
import Sponsors from "../components/Sponsors";
import TechCards from "../components/Problemstatement";
import WhatWeOffer from "../components/WhatWeOffer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#000000] via-[#030b0e] to-[#0a2539]">
      <Navigation />

      <div className="relative">
        <div className="container mx-auto px-4">
          {/* Main content */}
          <Hero />
          <WhatWeOffer />
          <Timeline />
          <Themes />
          <Team />
          <Sponsors />
          {/* TechCards Section */}
          <div className="mt-16">
            <TechCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
