import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Themes from "../components/Themes";
import Team from "../components/Team";
import TechAmigosPage from "../components/TechAmigosPage"
import Sponsors from "../components/Sponsors";
import TechCards from "../components/Problemstatement";
import WhatWeOffer from "../components/WhatWeOffer";
import Footer from "../components/footer";
import VideoBackground from "../components/videobackground";
import FAQs from "../components/faqs";
import TechAmigos from "../components/TechAmigos";
import ExcitingPrizes from "../components/Prizes";
import EventResources from "../components/EventResources";
import Faculty from "../components/Faculty";



const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Video background with gradient overlay */}
      <VideoBackground />
      
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

            <div className="mt-20 mx-6">
            <EventResources />
            </div>
           
            <div id="ExicitingPrizes">
              <ExcitingPrizes />
            </div>


            <div id="themes">
              <Themes />
            </div>

          
            
            <Faculty/>
            <TechAmigos />
            <Sponsors />
            <FAQs />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;