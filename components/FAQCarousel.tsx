'use client'
import { useState } from "react";

const FAQCarousel = () => {
  const faqs = [
    {
      question: "Does Formalitat offer custom attire?",
      answer: "Yes we do offer customs! – You can order it through our discord server. – discord.gg/formalitat. You can find more information here."
    },
    {
      question: "Does Formalitat do partnerships?",
      answer: "You can see status of our partnership on our discord. If it’s open you can create a ticket and get in touch with us. – We will only do a partnership if it makes sense for us to do so."
    },
    {
      question: "Is Formalitat looking for investors?",
      answer: "Unfortunately, we’re not in need of any investors."
    },
    {
      question: "Is Formalitat for sale or the homestore?",
      answer: "Formalitat is NOT for sale and the homestore will NOT be for sale either."
    },
    {
      question: "How do I get a job at Formalitat?",
      answer: "You can apply by clicking here. – Make sure to follow the instructions."
    },
    {
      question: "Does employees get paid?",
      answer: "Everyone who’s part of the team that makes Formalitat great, gets paid, including sales associates and every rank above."
    }
  ];

  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleExpand = (index: any) => {
    setExpandedFAQ((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-[var(--secondary)] p-4">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
            <span className={`text-2xl text-white ${expandedFAQ === index ? "!text-gold" : ""}`}>
              {expandedFAQ === index ? "-" : "+"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === index ? "h-auto opacity-100" : "h-0 opacity-0"}`}
          >
            <p className="text-gray-200 mt-2">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQCarousel;
