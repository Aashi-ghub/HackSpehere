import { Wifi, Coffee, Bus, Bed, Gift, Code2, Award, Smile } from "lucide-react";
import { motion } from "framer-motion";

const WhatWeOffer = () => {
  const offerings = [
    { icon: <Wifi className="w-8 h-8 text-primary" />, title: "High-Speed WiFi", description: "Stay connected with blazing fast internet" },
    { icon: <Coffee className="w-8 h-8 text-primary" />, title: "Free Food & Drinks", description: "Keep energized throughout the event" },
    { icon: <Bus className="w-8 h-8 text-primary" />, title: "Transportation", description: "Enjoy free transport services from the nearest metro station" },
    { icon: <Bed className="w-8 h-8 text-primary" />, title: "Accommodation", description: "Comfortable stay for all participants" },
    { icon: <Gift className="w-8 h-8 text-primary" />, title: "Swag & Goodies", description: "Amazing swag and prizes for winners" },
    { icon: <Code2 className="w-8 h-8 text-primary" />, title: "Workshops", description: "Learn from industry experts" },
    { icon: <Award className="w-8 h-8 text-primary" />, title: "Certificates", description: "Get certified for your participation" },
    { icon: <Smile className="w-8 h-8 text-primary" />, title: "Networking", description: "Connect with like-minded developers" }
  ];

  return (
    <section className="py-16 animate-fade-in" id="offerings">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offerings.map((offering, index) => (
          <motion.div
            key={index}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // 0.2-second delay per item
            viewport={{ once: true }}
            className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {offering.icon}
            </div>
            <h3 className="text-xl text-white font-bold mb-2">{offering.title}</h3>
            <p className="text-gray-400">{offering.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;

