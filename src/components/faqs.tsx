import React, { useState } from 'react';
import { CircleHelp } from "lucide-react";
const Faqs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'What is InceptionX?',
            answer: 'A hackathon is an event where participants collaborate to create innovative projects, usually within a limited time (e.g., 24-48 hours). Teams work on software, hardware, or other tech solutions based on a given theme or challenge.'
        },
        {
            question: 'How do I participate in a hackathon?',
            answer: 'You can participate by registering on our website and joining an upcoming event.'
        },
        {
            question: 'What are the benefits of participating?',
            answer: 'Participants can improve their skills, network with others, and win prizes. You get to apply coding, designing, and problem-solving skills in a real-world scenario.Connect with fellow programmers, designers, and business enthusiasts.'
        },{
        question:'Who can participate in a hackathon?',
        answer: 'Hackathons are open to students, professionals, and tech enthusiasts. Some may be limited to certain age groups, university students, or specific skill levels. Always check the eligibility criteria for the event.'
        
        }
    ];
  
    const toggleFaq = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center">
          <CircleHelp className="text-primary h-8 w-8" />
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b p-4 transition-all duration-300 ${
                activeIndex === index ? 'border-b border-4 border-teal-500 shadow-lg' : 'border-teal-500/20'
              }`}
            >
              <button
                className="w-full text-left text-white flex justify-between items-center py-2 text-lg font-medium text-gray-700 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span
                  className={`text-white transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ${
                  activeIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className="mt-2 text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Faqs;