'use client';

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Based on the insights gathered, we develop a comprehensive SEO strategy tailored to your business’s unique needs and objectives.",
  },
  {
    number: "02",
    title: "Process",
    description:
      "Based on the insights gathered, we develop a comprehensive SEO strategy tailored to your business’s unique needs and objectives.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Based on the insights gathered, we develop a comprehensive SEO strategy tailored to your business’s unique needs and objectives.",
  },
];

const HowItWork = () => {
  return (
    <section className="bg-[#0A1918] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left Side: Steps */}
        <div className="w-full max-w-md space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#132623] rounded-xl px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-5">
                <span className="text-[#F7D270] text-xl font-bold">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-gray-300 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Image and Heading */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6 relative">
          <span className="bg-[#1F2B29] text-[#F7D270] text-sm font-medium px-6 py-2 rounded-md">
            How It Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            How Kulan Is Work Process For Our<br />
            Marketing Customer
          </h2>

          {/* Wrapper with custom clipPath */}
          <svg width="0" height="0">
            <clipPath id="quarterCut" clipPathUnits="objectBoundingBox">
              <path d="
                M0,0 
                H1 
                V1 
                H0.25 
                A0.25,0.25 0 0,1 0,0.75 
                Z" />
            </clipPath>
          </svg>

          <div className="w-full max-w-2xl h-auto rounded-[2rem] overflow-hidden">
            <Image
              src="/images/HowItWork.jpg"
              alt="Team working"
              width={800}
              height={500}
              style={{ clipPath: 'url(#quarterCut)' }}
              className="rounded-[2rem] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;