import React, { useState } from 'react';
import { CircleHelp } from "lucide-react";
const Faqs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'What is InceptionX ?',
            answer: 'InceptionX is an innovative 3-day event organized to bring together creative minds to solve real-world challenges.'
        },
        {
            question: 'What is the aim of InceptionX ?',
            answer:'The event aims is to promote teamwork, technical expertise, and problem-solving skills through collaboration and mentorship.'
        },
        {
            question: 'What are the benefits of participating?',
            answer: 'Participating in InceptionX offers portfolio building, networking opportunities, and exposure to new technologies, enhancing both skills and career growth.'
        },
        {
          question:"Will there be mentors available during the event ?",
          answer:"Yes, we will have industry experts and mentors available throughout the event to guide participants and provide technical assistance."
        }
    ];
  
    const toggleFaq = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-white mb-1 flex items-center gap-3 justify-center">
          <CircleHelp className="text-primary h-8 w-8" />
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className='text-[#8d8f92] text-lg text-center font-stretch-extra-condense'>Find answers to common questions about Inception X.</div>
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