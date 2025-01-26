import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Themes from "../components/Themes";
import Team from "../components/Team";
import Sponsors from "../components/Sponsors";
import TechCards from "../components/Problemstatement";
import WhatWeOffer from "../components/WhatWeOffer";
import Footer from "../components/footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-black to-[#0f363b] z-0" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 pointer-events-none" />

      <Navigation />

      <div className="relative z-10">
        <div className="container mx-auto px-0">
          {/* Main content */}
          <div className="flex flex-col justify-center items-center">
            <Hero />
          </div>
          <div className="mx-4">
            <WhatWeOffer />

            {/* Add IDs for scroll navigation */}
            <div id="timeline">
              <Timeline />
            </div>

            <div id="themes">
              <Themes />
            </div>

            {/* TechCards Section (moved above Team) */}
            <div className="mt-16 mx-6">
              <TechCards />
            </div>
            <Team />
            <Sponsors />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
