import { motion } from "framer-motion";
import React, { useState } from "react";

// Define the domains data
const domains = [
  { name: "Project X", events: ["Coming Soon"] },
  { name: "Sense X", events: ["Coming Soon"] },
  { name: "Connect X", events: ["Coming Soon"] },
  { name: "Product X", events: ["Coming Soon"] }
];

interface Domain {
  name: string;
  events: string[];
}

interface FloatingBubbleProps {
  domain: Domain;
  position: "left" | "right";
  topOffset: number;
  index: number;
}

const FloatingBubble: React.FC<FloatingBubbleProps> = ({ domain, position, topOffset }) => {
  const [isBurst, setIsBurst] = useState(false);

  const randomDuration = React.useMemo(() => 20 + Math.random() * 10, []);
  const randomOffset = React.useMemo(() => 6 + Math.random() * 12, []);
  const randomDelay = React.useMemo(() => Math.random() * 4, []);

  const handleBurst = () => {
    setIsBurst(true);
    setTimeout(() => setIsBurst(false), 2000);
  };

  if (isBurst) {
    return (
      <div className="absolute" style={{ [position]: '3%', top: `${topOffset}vh` }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-[#d13131] to-[#4b0000]"
            initial={{ scale: 1, x: 0, y: 0, opacity: 1 }}
            animate={{
              scale: 0,
              x: Math.cos(i * 45 * Math.PI / 180) * 100,
              y: Math.sin(i * 45 * Math.PI / 180) * 100,
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-bold text-base md:text-xl cursor-pointer bg-gradient-to-br from-[#d13131] to-[#4b0000] shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#ff4444] hover:to-[#800000] hover:shadow-[#d13131]/50 " 
      style={{
        [position]: '5%',
        top: `${topOffset}vh`,
        zIndex: 50,
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
      initial={{ opacity: 0.9, scale: 0.8 }}
      animate={{ 
        y: [0, randomOffset, -randomOffset, 0],
        x: position === 'left' 
          ? [0, randomOffset * 1.5, -randomOffset, 0] 
          : [0, -randomOffset * 1.5, randomOffset, 0],
        rotate: [0, 8, -8, 0],
        transition: {
          duration: randomDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: randomDelay,
        }
      }}
      whileHover={{ 
        scale: 1.1,
        opacity: 1,
        transition: { 
          duration: 0.2,
          type: "spring",
          stiffness: 300
        }
      }}
      onClick={handleBurst}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span 
        className="z-0 relative font-bold"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {domain.name}
      </motion.span>
    </motion.div>
  );
};

const BubblesContainer = () => {
  const leftBubbles = [domains[0], domains[2]];
  const rightBubbles = [domains[1], domains[3]];

  return (
    <div className="absolute inset-0 hidden lg:block">
      {/* Left side bubbles */}
      {leftBubbles.map((domain, idx) => (
        <FloatingBubble
          key={domain.name}
          domain={domain}
          position="left"
          topOffset={25 + (idx * 50)}
          index={idx}
        />
      ))}

      {/* Right side bubbles */}
      {rightBubbles.map((domain, idx) => (
        <FloatingBubble
          key={domain.name}
          domain={domain}
          position="right"
          topOffset={25 + (idx * 50)}
          index={idx}
        />
      ))}
    </div>
  );
};

export default BubblesContainer;
