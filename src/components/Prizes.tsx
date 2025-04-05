import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "phosphor-react";

const prizeData = [
  {
    title: "First Prize",
    amount: "₹31,000",
    perks: [
      "Cash prize of ₹31,000",
      "Trophy",
      "Exclusive winner's certificate",
      "Featured on social media & website",
    ],
    icon: <Trophy size={42} weight="fill" className="text-yellow-400" />,
    highlight: true,
  },
  {
    title: "Second Prize",
    amount: "₹21,000",
    perks: [
      "Cash prize of ₹21,000",
      "Runner-up certificate",
      "Social media recognition",
    ],
    icon: <Medal size={40} weight="bold" className="text-white" />,
  },
  {
    title: "Third Prize",
    amount: "₹11,000",
    perks: [
      "Cash prize of ₹11,000",
      "Achievement certificate",
      "Social media mention",
    ],
    icon: <Star size={40} weight="fill" className="text-orange-300" />,
  },
];

const PrizeCard = ({ title, amount, perks, icon, highlight = false }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`w-full md:w-[350px] lg:w-[340px] bg-gradient-to-br ${
      highlight
        ? "from-[#562424] to-[#2e2c2c]"
        : "from-[#161616] to-[#2a2a2a]"
    } border border-gray-700 rounded-2xl shadow-md py-14 text-white`}
  >
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="bg-white bg-opacity-10 p-3 rounded-full">{icon}</div>
      <h2 className="text-2xl font-bold text-[#ff4c4c]">{title}</h2>
      <p className="text-xl font-semibold text-gray-200">{amount}</p>
      <ul className="mt-4 text-sm text-gray-300 space-y-2 text-left">
        {perks.map((perk, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-green-400">✔</span>
            {perk}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ExcitingPrizes = () => (
  <section className="text-center py-16 px-4  text-white mt-12">
    <h2 className="text-3xl md:text-4xl font-extrabold font-orbitron mb-4">
      Exciting <span className="text-[#ff4c4c]">Prizes</span>
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-[#8e4242] to-[#77111194] mx-auto mb-8" />

    <p className="mb-12 text-gray-400 text-lg max-w-xl mx-auto">
      Compete for these amazing prizes and gain recognition for your innovative solutions.
    </p>

    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
      <PrizeCard {...prizeData[1]} />
      <PrizeCard {...prizeData[0]} highlight />
      <PrizeCard {...prizeData[2]} />
    </div>
  </section>
);

export default ExcitingPrizes;
