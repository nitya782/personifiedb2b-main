// components/FAQ.jsx
'use client'; // This directive makes the component a Client Component in Next.js App Router

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
// If you were to add images, you would import 'next/image' like this:
// import Image from "next/image";
// If you were navigating to other pages, you would import 'next/link' like this:
// import Link from "next/link";

const FAQ = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="faq-section" className="faq-section py-10 px-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-[white] mb-8 text-center">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none group"
              aria-expanded={expandedIndex === index}
            >
              <h3 className="text-base font-semibold text-[#ceeec6] group-hover:text-[white] transition-colors">
                {faq.question}
              </h3>
              <span className="text-[white]">
                {expandedIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </span>
            </button>
            
            {expandedIndex === index && (
              <div className="mt-3 text-[white] transition-all duration-300 ease-in-out">
                {Array.isArray(faq.answer) ? (
                  <ul className="space-y-2">
                    {faq.answer.map((item, i) => (
                      <li key={i} className="flex items-start text-base">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-400 mt-2 mr-2 "></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed text-base">{faq.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;