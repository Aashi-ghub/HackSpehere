import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-1T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="bg-black/80 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-200"
        >
          <div className="text-4xl font-bold text-[#3fa6a8] mb-2">
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-gray-400 uppercase text-sm">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;