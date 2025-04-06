import React, { useRef } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Themes from "../components/Themes";
import Team from "../components/Team";
import TechAmigosPage from "../components/TechAmigosPage";
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

import { motion, useInView } from "framer-motion";

//  Animation Wrapper
const FadeInSection = ({
  children,
  from = "left", // 'left' or 'right'
}: {
  children: React.ReactNode;
  from?: "left" | "right";
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initialX = from === "left" ? -150 : 150;

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {React.Children.map(children, (child: React.ReactNode, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, x: initialX },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 120,
                damping: 20,
              },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.section>
  );
};


const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video background */}
      <VideoBackground />

      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="container mx-auto px-0">
          <div className="flex flex-col justify-center items-center">
            <Hero />
          </div>

          <div className="mx-4">
            {/* Smooth Fade Sections */}
            <FadeInSection>
              <WhatWeOffer />
            </FadeInSection>

            <div id="timeline">
              <FadeInSection>
                <Timeline />
              </FadeInSection>
            </div>

            <div className="mt-20 mx-6">
              <FadeInSection>
                <EventResources />
              </FadeInSection>
            </div>

            <div id="ExcitingPrizes">
              <FadeInSection>
                <ExcitingPrizes />
              </FadeInSection>
            </div>

            <div id="themes">
              <FadeInSection>
                <Themes />
              </FadeInSection>
            </div>

            {/* <FadeInSection>
              <Faculty />
            </FadeInSection> */}

            <FadeInSection>
              <TechAmigos />
            </FadeInSection>

            {/* Uncomment if needed */}
            {/* <FadeInSection><Sponsors /></FadeInSection> */}

            <FadeInSection>
              <FAQs />
            </FadeInSection>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
