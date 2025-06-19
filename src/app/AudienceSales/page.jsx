// sales/page.jsx
'use client'; // Mark this component as a Client Component

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import the Image component
import Link from "next/link"; // Import the Link component
import Lownav from "../../components/Lownav";
import Upnav from "../../components/Upnav";
import Footer from "../../components/Footer";

const Sales = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const apiKey = "613d3f89-d888-4927-a609-99541b5d46ba";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          email: email,
          subject: "New Sales Professional Newsletter Subscription",
          message: `New subscription request from: ${email}`,
          from_name: "Sales Newsletter Subscription",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to submit. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants (same as before)
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const barAnimation = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: { duration: 1, ease: "easeInOut" },
    }),
  };

  const circleAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  // Updated categories for sales
  const categories = [
    {
      name: "Sales Development Representatives",
      count: "580k",
      width: "95%",
      src: "/images/mark1.webp",
      alt: "Sales Development Representatives",
    },
    {
      name: "Account Executives",
      count: "510k",
      width: "85%",
      src: "/images/mark2.webp",
      alt: "Account Executives",
    },
    {
      name: "Sales Managers & Directors",
      count: "420k",
      width: "75%",
      src: "/images/mark3.webp",
      alt: "Sales Manager",
    },
    {
      name: "Sales Operations",
      count: "240k",
      width: "60%",
      src: "/images/mark4.webp",
      alt: "Sales Operations",
    },
    {
      name: "Customer Success Managers",
      count: "190k",
      width: "50%",
      src: "/images/mark5.webp",
      alt: "Customer Success Manager",
    },
    {
      name: "Inside Sales Representatives",
      count: "160k",
      width: "45%",
      src: "/images/mark6.webp",
      alt: "Inside Sales Representative",
    },
    {
      name: "Sales Enablement Specialists",
      count: "130k",
      width: "40%",
      src: "/images/mark7.webp",
      alt: "Sales Enablement Specialist",
    },
  ];

  // Updated vendor data for sales
  const vendors = [
    { name: "salesforce", logo: "/images/salesforce.webp", top: "10%", left: "15%", size: "medium" },
    { name: "outreach", logo: "/images/outreach.webp", top: "20%", left: "35%", size: "small" },
    { name: "cognism", logo: "/images/cognism.webp", top: "5%", left: "60%", size: "large" },
    { name: "zoominfo", logo: "/images/zoominfo.webp", top: "30%", left: "75%", size: "medium" },
    { name: "sprout", logo: "/images/sprout.webp", top: "50%", left: "15%", size: "large" },
    { name: "hubspot", logo: "/images/hubspot.webp", top: "65%", left: "30%", size: "medium" },
    { name: "conga-logo", logo: "/images/conga-logo.webp", top: "40%", left: "50%", size: "medium" },
    { name: "uplead", logo: "/images/uplead.png", top: "60%", left: "65%", size: "small" },
    { name: "seismic", logo: "/images/seismic.webp", top: "80%", left: "75%", size: "medium" },
    { name: "linkedin", logo: "/images/linkedin.webp", top: "80%", left: "40%", size: "small" },
  ];

  // Updated content cards for sales
  const contentCards = [
    {
      image: "/images/sale1.webp",
      title: "Prospect Qualification Framework",
    },
    {
      image: "/images/sale2.webp",
      title: "Sales Pipeline Optimization",
    },
    {
      image: "/images/sale3.webp",
      title: "Social Selling Playbook",
    },
    {
      image: "/images/sale4.webp",
      title: "Sales Automation Guide",
    },
    {
      image: "/images/sale5.webp",
      title: "Negotiation Strategies",
    },
  ];

  // Updated topics for sales
  const topics = [
    {
      name: "pipeline management",
      size: "text-5xl",
      weight: "font-bold",
      top: "30%",
      left: "30%",
      opacity: 1,
    },
    {
      name: "cold calling",
      size: "text-2xl",
      weight: "font-medium",
      top: "15%",
      left: "10%",
      opacity: 0.8,
    },
    {
      name: "account-based selling",
      size: "text-3xl",
      weight: "font-bold",
      top: "20%",
      left: "60%",
      opacity: 0.9,
    },
    {
      name: "closing techniques",
      size: "text-2xl",
      weight: "font-medium",
      top: "50%",
      left: "5%",
      opacity: 0.7,
    },
    {
      name: "prospecting",
      size: "text-xl",
      weight: "font-bold",
      top: "65%",
      left: "20%",
      opacity: 0.8,
    },
    {
      name: "sales enablement",
      size: "text-lg",
      weight: "font-medium",
      top: "70%",
      left: "45%",
      opacity: 0.7,
    },
    {
      name: "buyer journey",
      size: "text-2xl",
      weight: "font-bold",
      top: "10%",
      left: "40%",
      opacity: 0.9,
    },
    {
      name: "territory management",
      size: "text-xl",
      weight: "font-medium",
      top: "40%",
      left: "65%",
      opacity: 0.8,
    },
    {
      name: "forecasting",
      size: "text-xl",
      weight: "font-medium",
      top: "55%",
      left: "45%",
      opacity: 0.8,
    },
    {
      name: "sales technology",
      size: "text-lg",
      weight: "font-bold",
      top: "25%",
      left: "70%",
      opacity: 0.7,
    },
    {
      name: "value-based selling",
      size: "text-xl",
      weight: "font-medium",
      top: "60%",
      left: "10%",
      opacity: 0.9,
    },
  ];

  return (
    <>
      <Upnav />
      <Lownav />
      <div className="font-sans mt-36">
        {/* Hero Section */}
        <motion.section
          className="bg-white py-16 px-4 md:px-8 lg:px-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-lg font-semibold text-[#333] mb-2">
                SALES AUDIENCE INSIGHTS
              </h2>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-4">
                Reach 42 million sales decision makers
              </h1>
              <p className="text-[#333] mb-6 text-lg leading-relaxed">
                We help sales leaders discover innovative solutions to drive revenue growth.
                Ensure your solution is part of their consideration set.
              </p>
              {/* If "TALK TO SALES" navigates internally, use Link */}
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition duration-300">
                TALK TO SALES
              </button>
            </div>

            <div className="w-full md:w-1/2 relative">
              <Image
                src="/images/Audisaleshero.webp"
                alt="Sales Audience Illustration"
                width={500} // Add appropriate width
                height={500} // Add appropriate height
                layout="responsive" // Or "fill" with parent div styling, or fixed
                objectFit="contain" // Adjust as needed
                priority // Preload this image as it's above the fold
              />
            </div>
          </div>
        </motion.section>

        {/* Professionals Engaged Section */}
        <section className="bg-[#0E1F1C] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
              <motion.div
                className="w-full lg:w-2/5 mb-8 lg:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-3xl font-bold">620,000</span>
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  Sales Professionals
                  <br />
                  Engaged
                </h2>
                <p className="mb-8">
                  We connect with a vast network of sales professionals across industries.
                  Our precision targeting helps you reach the right decision makers based on
                  their role, challenges, and sales priorities.
                </p>
                {/* If "CONTACT US TO LEARN MORE" navigates internally, use Link */}
                <button className="flex items-center text-white font-bold hover:underline transition duration-300">
                  CONTACT US TO LEARN MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </motion.div>

              <div className="w-full lg:w-3/5 lg:pl-16">
                <motion.div
                  className="space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerChildren}
                >
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#0E1F1C] rounded-full flex-shrink-0 overflow-hidden">
                        <Image
                          src={category.src}
                          alt={category.name}
                          width={40} // Appropriate width
                          height={40} // Appropriate height
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <span>{category.name}</span>
                          <span className="bg-yellow-400 text-white px-2 py-0.5 rounded-full text-sm">
                            {category.count}
                          </span>
                        </div>
                        <div className="h-2 bg-white bg-opacity-20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-yellow-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: category.width }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Vendors Researched Section */}
        <section className="bg-[#0E1F1C] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <motion.div
              className="flex flex-col lg:flex-row items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span className="text-3xl font-bold">1,920</span>
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  Sales Tech Vendors
                  <br />
                  Researched
                </h2>
                <p className="mb-8">
                  Sales teams evaluate solutions across CRM, outreach automation, sales intelligence,
                  pipeline management, and closing tools. Our insights into vendor engagement help you
                  stand out in competitive categories.
                </p>
              </div>

              <div className="w-full lg:w-2/3 lg:pl-16">
                <div className="relative min-h-[300px]">
                  <motion.div
                    className="w-full h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerChildren}
                  >
                    {vendors.map((vendor, index) => {
                      let sizeValue = 80; // Default for medium
                      if (vendor.size === "small") sizeValue = 64;
                      else if (vendor.size === "large") sizeValue = 96;

                      return (
                        <motion.div
                          key={index}
                          className={`absolute w-[${sizeValue}px] h-[${sizeValue}px] bg-[#0E1F1C] rounded-full flex items-center justify-center overflow-hidden border-2 border-yellow-400`}
                          variants={circleAnimation}
                          whileHover={{ scale: 1.1 }}
                          style={{
                            top: vendor.top,
                            left: vendor.left,
                          }}
                        >
                          <Image
                            src={vendor.logo}
                            alt={vendor.name}
                            width={sizeValue} // Set width based on size
                            height={sizeValue} // Set height based on size
                            objectFit="contain"
                          />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Assets Consumed Section */}
        <section className="bg-[#0E1F1C] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <motion.div
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="text-3xl font-bold">7,400</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">Sales Assets Consumed</h2>
              <p className="mb-8 max-w-4xl">
                Modern sales professionals consume vast amounts of content before engaging with vendors.
                Gain intelligence on the resources sales leaders trust to inform their decisions,
                and ensure your content is part of their research journey.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {contentCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-[#0E1F1C] rounded-lg overflow-hidden cursor-pointer shadow-lg"
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  <div className="h-48 bg-[#0E1F1C] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300} // Appropriate width
                      height={200} // Appropriate height
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-white">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 text-center">
              {/* If this button navigates internally, use Link */}
              <button className="flex items-center mx-auto text-white font-bold hover:underline transition duration-300">
                GET YOUR CONTENT IN FRONT OF SALES LEADERS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Topics Researched Section */}
        <section className="bg-[#0E1F1C] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-start">
              <motion.div
                className="w-full lg:w-2/3 mb-8 lg:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-64 md:h-96">
                  {topics.map((topic, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${topic.size} ${topic.weight}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: topic.opacity }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      style={{
                        top: topic.top,
                        left: topic.left,
                      }}
                    >
                      {topic.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </div>
                  <span className="text-3xl font-bold">38,700</span>
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  Sales Topics
                  <br />
                  Researched
                </h2>
                <p className="mb-8">
                  We analyze engagement patterns to identify emerging trends,
                  persistent challenges, and the most critical needs of sales teams.
                  These insights help you create campaigns that truly resonate.
                </p>
                <button
                  className="fixed bottom-8 right-8 bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#0E1F1C] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div
                className="w-full lg:w-1/2 mb-8 lg:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <p className="text-sm uppercase font-bold mb-2">
                  POWERED BY OUR WEEKLY NEWSLETTER
                </p>
                <h2 className="text-5xl font-bold mb-6">
                  The Sales<br />
                  Professional<br />
                  newsletter with<br />
                  2.4m+ circulation
                </h2>
                <p className="mb-8 max-w-md text-gray-300">
                  The essential newsletter for sales leaders seeking innovative solutions.
                  We curate the most valuable vendor content with a focus on measurable results,
                  making it easy to learn from proven strategies in key sales disciplines.
                </p>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                  <p className="mb-3 font-medium">
                    Sign up for the Sales Professional newsletter
                  </p>
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Business Email"
                      className="flex-grow px-4 py-2 mb-2 sm:mb-0 sm:mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-yellow-400"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-700 transition duration-300 disabled:bg-gray-400"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "SENDING..." : "SIGN UP"}
                    </button>
                  </div>
                  {errorMessage && (
                    <motion.div
                      className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded-md"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                  {isSubmitted && (
                    <motion.div
                      className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded-md"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Thank you for subscribing to our newsletter!
                    </motion.div>
                  )}
                </form>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative max-w-xs">
                  <Image
                    src="/images/marketphone.png"
                    alt="Sales Newsletter Preview"
                    width={320} // Appropriate width for max-w-xs
                    height={600} // Adjust height as needed
                    layout="intrinsic" // Or "fixed" or "fill" depending on desired behavior
                    className="rounded-xl shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Sales;