import React from "react";
import { FaTrophy } from "react-icons/fa";
import { IoRibbonOutline } from "react-icons/io5";
import { Card, CardContent } from "@/components/ui/card";

const prizeData = [
  {
    title: "First Prize",
    amount: "₹60,000",
    perks: [
      "Cash prize of ₹60,000",
      "Internship opportunities",
      "Mentorship from industry experts",
      "Tech gadgets and swag",
    ],
    icon: <FaTrophy className="text-yellow-400 text-4xl" />,
  },
  {
    title: "Second Prize",
    amount: "₹35,000",
    perks: ["Cash prize of ₹35,000", "Internship opportunities", "Tech gadgets and swag"],
    icon: <IoRibbonOutline className="text-white text-4xl" />,
  },
  {
    title: "Third Prize",
    amount: "₹20,000",
    perks: ["Cash prize of ₹20,000", "Tech gadgets and swag"],
    icon: <IoRibbonOutline className="text-orange-400 text-4xl" />,
  },
];

const PrizeCard = ({ title, amount, perks, icon }) => (
  <Card className="w-[600px] max-w-full mt-4 bg-transparent bg-opacity-60 border-2 border-[#14b8a6] rounded-lg shadow-lg p-6">
    <CardContent className="flex flex-col items-center">
      {icon}
      <h2 className="text-4xl text-[#5eead4] font-semibold mt-3">{title}</h2>
      <p className="text-[#5eead4] text-lg font-bold">{amount}</p>
      <ul className="mt-3 text-gray-300 text-xl text-left">
        {perks.map((perk, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-white">✔</span> {perk}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const ExcitingPrizes = () => (
  <section className="text-center py-12 bg-transparent text-white mt-16">
    <h2 className="text-4xl font-orbitron font-bold mb-4">
      Exciting <span className="text-white">Prizes</span>
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] to-[#14b8a6] mx-auto mb-6"></div>

    <p className="mb-8 text-gray-400 text-lg">
      Compete for these amazing prizes and gain recognition for your innovative solutions.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-[1800px] mx-auto">
      {prizeData.map((prize, index) => (
        <PrizeCard key={index} {...prize} />
      ))}
    </div>
  </section>
);

export default ExcitingPrizes;
