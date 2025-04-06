import { Wifi, Coffee, Gift, Gamepad, Award, Smile } from "lucide-react";
import { motion } from "framer-motion";

const iconBounce = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

const WhatWeOffer = () => {
  const offerings = [
    { icon: <Gift className="w-6 h-6 text-white" />, title: "Swag & Goodies", description: "Amazing swag and prizes for winners" },
    { icon: <Award className="w-6 h-6 text-white" />, title: "Certificates", description: "Get certified for your participation" },
    { icon: <Smile className="w-6 h-6 text-white" />, title: "Networking", description: "Connect with like-minded developers" },
    { icon: <Coffee className="w-6 h-6 text-white" />, title: "Food & Refreshments", description: "Enjoy complimentary snacks and beverages" },
    { icon: <Gamepad className="w-6 h-6 text-white" />, title: "Fun & Mini Games", description: "Fun challenges & games to keep you engaged" },
    { icon: <Wifi className="w-6 h-6 text-white" />, title: "High-Speed WiFi", description: "Seamless internet access for all participants" },
  ];

  return (
    <section className="py-16" id="offerings">
      <h2 className="text-4xl font-bold font-orbitron text-white mb-12 text-center">
        What We Offer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.map((offering, index) => {
          const isLeftSide = index % 3 === 0 || index % 3 === 1;
          const direction = isLeftSide ? -100 : 100;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -6,
                  boxShadow: "0px 8px 20px rgba(255, 0, 0, 0.15)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 14,
                }}
                className="bg-gradient-to-br from-[#4a1f1a] via-[#151310]  to-[#000000] p-4 rounded-2xl backdrop-blur-md shadow-inner hover:shadow-lg transition-all duration-300"
              >
                <motion.div variants={iconBounce} initial="initial" animate="animate">
                  {offering.icon}
                </motion.div>
                <h3 className="text-xl text-white font-semibold mt-4 mb-1">
                  {offering.title}
                </h3>
                <p className="text-gray-400">{offering.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeOffer;
