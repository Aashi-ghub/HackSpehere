import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-31T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 sm:grid-cols-4 font-orbitron gap-4 max-w-md sm:max-w-3xl mx-auto p-4"
    >
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <motion.div
          key={unit}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: index * 0.1,
          }}
          className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg text-center relative overflow-hidden group w-full"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-cyan-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              background: ["rgba(0,0,0,0)", "rgba(20,184,166,0.1)", "rgba(0,0,0,0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={value}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-3xl sm:text-4xl font-bold text-[#eff4f4] mb-2"
              >
                {value.toString().padStart(2, "0")}
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 uppercase text-xs sm:text-sm"
            >
              {unit}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
