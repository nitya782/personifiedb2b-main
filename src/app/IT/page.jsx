"use client"; // This directive makes the component a Client Component

import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component for optimization
import Link from "next/link"; // Import Next.js Link component for navigation
import { motion } from "framer-motion";
import Lownav from "../../components/Lownav";
import Upnav from "../../components/Upnav";
import Footer from "../../components/Footer";

const It = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Replace with your Web3Forms API key
      const apiKey = "d2de4773-7e69-47b5-976c-50267c31532a";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          email: email,
          subject: "New Finance Professional Newsletter Subscription",
          message: `New subscription request from: ${email}`,
          from_name: "Finance Newsletter Subscription",
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

  // Animation variants
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

  const categories = [
    {
      name: "Software Development & Engineering",
      count: "468k",
      width: "95%",
      src: "/images/person1.webp",
      alt: "Professional 1",
    },
    {
      name: "IT Generalists, Specialists & Analysts",
      count: "396k",
      width: "80%",
      src: "/images/person2.webp",
      alt: "Professional 2",
    },
    {
      name: "Data Management, Data Science & BI",
      count: "168k",
      width: "60%",
      src: "/images/person3.webp",
      alt: "Professional 3",
    },
    {
      name: "DevOps, IT Ops & Systems",
      count: "63k",
      width: "30%",
      src: "/images/person4.webp",
      alt: "Professional 4",
    },
    {
      name: "IT Support & Helpdesk",
      count: "61k",
      width: "28%",
      src: "/images/person5.webp",
      alt: "Professional 5",
    },
    {
      name: "IT Networking & Infrastructure",
      count: "58k",
      width: "26%",
      src: "/images/person6.webp",
      alt: "Professional 6",
    },
    {
      name: "IT Security",
      count: "47k",
      width: "21%",
      src: "/images/person7.webp",
      alt: "Professional 7",
    },
  ];

  const vendors = [
    { name: "zscaler", logo: "/images/zscaler.webp", top: "10%", left: "15%", size: "medium" },
    { name: "aws", logo: "/images/aws.webp", top: "20%", left: "35%", size: "small" },
    { name: "cisco", logo: "/images/cisco.webp", top: "5%", left: "60%", size: "large" },
    { name: "gooddata", logo: "/images/gooddata.webp", top: "30%", left: "75%", size: "medium" },
    { name: "ibm", logo: "/images/ibm.png", top: "50%", left: "15%", size: "large" },
    { name: "mavrck", logo: "/images/mavrck.webp", top: "65%", left: "30%", size: "medium" },
    { name: "microfocus", logo: "/images/microfocus.webp", top: "40%", left: "50%", size: "medium" },
    { name: "nvidia", logo: "/images/nvidia.webp", top: "60%", left: "65%", size: "small" },
    { name: "sap", logo: "/images/sap.webp", top: "80%", left: "75%", size: "medium" },
    { name: "tibco", logo: "/images/tibco.webp", top: "80%", left: "40%", size: "small" },
  ];

  const contentCards = [
    {
      image: "/images/audiences-thumbs-6.webp",
      title: "Audience Segment 6",
    },
    {
      image: "/images/audiences-thumbs-1.webp",
      title: "Audience Segment 1",
    },
    {
      image: "/images/audiences-thumbs-2-1.webp",
      title: "Audience Segment 2",
    },
    {
      image: "/images/audiences-thumbs-4-1.webp",
      title: "Audience Segment 4",
    },
    {
      image: "/images/audiences-thumbs-5-1.webp",
      title: "Audience Segment 5",
    },
  ];

  const topics = [
    {
      name: "cloud resilience",
      size: "text-5xl",
      weight: "font-bold",
      top: "30%",
      left: "30%",
      opacity: 1,
    },
    {
      name: "invoice processing efficiency",
      size: "text-2xl",
      weight: "font-medium",
      top: "15%",
      left: "10%",
      opacity: 0.8,
    },
    {
      name: "critical data",
      size: "text-3xl",
      weight: "font-bold",
      top: "20%",
      left: "60%",
      opacity: 0.9,
    },
    {
      name: "automated detection",
      size: "text-2xl",
      weight: "font-medium",
      top: "50%",
      left: "5%",
      opacity: 0.7,
    },
    {
      name: "network management",
      size: "text-xl",
      weight: "font-bold",
      top: "65%",
      left: "20%",
      opacity: 0.8,
    },
    {
      name: "automated detection",
      size: "text-lg",
      weight: "font-medium",
      top: "70%",
      left: "45%",
      opacity: 0.7,
    },
    {
      name: "identity management",
      size: "text-2xl",
      weight: "font-bold",
      top: "10%",
      left: "40%",
      opacity: 0.9,
    },
    {
      name: "cloud disaster recovery",
      size: "text-xl",
      weight: "font-medium",
      top: "40%",
      left: "65%",
      opacity: 0.8,
    },
    {
      name: "customer acquisition cost",
      size: "text-xl",
      weight: "font-medium",
      top: "55%",
      left: "45%",
      opacity: 0.8,
    },
    {
      name: "expense process",
      size: "text-lg",
      weight: "font-bold",
      top: "25%",
      left: "70%",
      opacity: 0.7,
    },
    {
      name: "organizational resilience",
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
            {/* Left Content */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-lg font-semibold text-[#333] mb-2">
                IT AUDIENCE INSIGHTS
              </h2>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-4">
                Reach 46 million IT buyers
              </h1>
              <p className="text-[#333] mb-6 text-lg leading-relaxed">
                We help Information Technology leaders research solutions to complex problems.
                Make sure your brand is part of their journey.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition duration-300">
                TALK TO SALES
              </button>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/images/Audiences-IT.webp"
                alt="IT Audience Illustration"
                width={500} // Set appropriate width
                height={500} // Set appropriate height
                layout="responsive" // Makes image responsive
                objectFit="contain" // Ensures the image fits within its container
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/api/placeholder/500/500"; // Fallback placeholder
                }}
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
                  Professionals
                  <br />
                  Engaged
                </h2>
                <p className="mb-8">
                  We recommend content to a wide-reaching Finance audience based
                  on their job role and experience. Precision targeting you can
                  tap into to reach the right Accounts & Contacts.
                </p>
                {/* Updated to Link component */}
                <Link href="/contact-us" legacyBehavior>
                  <a className="flex items-center text-white font-bold hover:underline transition duration-300">
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
                  </a>
                </Link>
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
                          width={40}
                          height={40}
                          objectFit="cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/api/placeholder/40/40";
                          }}
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
                  <span className="text-3xl font-bold">2,350</span>
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  Vendors
                  <br />
                  Researched
                </h2>
                <p className="mb-8">
                  IT teams rely on software solutions for Network & Cloud Security,
                  Application Development, Big Data, Process Automation, IT
                  Infrastructure, IoT and more. Our insights into vendor engagement can
                  help you go-to-market efficiently in highly competitive categories.
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
                      let sizeValue;
                      if (vendor.size === "medium") sizeValue = 80;
                      else if (vendor.size === "large") sizeValue = 96;
                      else sizeValue = 64; // default small

                      return (
                        <motion.div
                          key={index}
                          className={`absolute w-${sizeValue/4} h-${sizeValue/4} bg-[#0E1F1C] rounded-full flex items-center justify-center overflow-hidden border-2 border-yellow-400`}
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
                            width={sizeValue}
                            height={sizeValue}
                            objectFit="contain"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/api/placeholder/80/80";
                            }}
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
                <span className="text-3xl font-bold">5,900</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">Assets Consumed</h2>
              <p className="mb-8 max-w-4xl">
                Today's B2B buyers prefer to self-educate before vendor engagement, making your content a crucial part of the sales process. Gain intelligence on the content favored by IT leaders to inform your marketing strategies.
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
                  <div className="h-48 bg-[#0E1F1C] overflow-hidden relative"> {/* Added relative to parent for Image */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill" // Fill parent div
                      objectFit="cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/300/200";
                      }}
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
              {/* Updated to Link component */}
              <Link href="/contact-us" legacyBehavior>
                <a className="flex items-center mx-auto text-white font-bold hover:underline transition duration-300">
                  GET YOUR CONTENT INTO THE HANDS OF BUYERS
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
                </a>
              </Link>
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
                  <span className="text-3xl font-bold">37,500</span>
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  Topics
                  <br />
                  Researched
                </h2>
                <p className="mb-8">
                  We analyze millions of engagement signals to identify common
                  pain points, shifting trends and the most critical business
                  needs of Finance teams. Insights we can leverage to help you run
                  better campaigns.
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
                  The IT<br />
                  Professional<br />
                  newsletter with<br />
                  1.8m+ circulation
                </h2>
                <p className="mb-8 max-w-md text-gray-300">
                  The only newsletter dedicated to helping IT teams discover solutions that drive business outcomes. Curating endless vendor content with a results-oriented approach, we make it easy to learn from what's worked in the areas that matter most.
                </p>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                  <p className="mb-3 font-medium">
                    Sign up for the IT Professional newsletter
                  </p>
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Business Email"
                      className="flex-grow px-4 py-2 mb-2 sm:mb-0 sm:mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black bg-white"
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
                  {isSubmitted && (
                    <p className="text-green-500 mt-2">
                      Thank you for subscribing!
                    </p>
                  )}
                  {errorMessage && (
                    <p className="text-red-500 mt-2">{errorMessage}</p>
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
                    src="/images/IT-909x1536-1.webp"
                    alt="IT Newsletter Preview"
                    width={909} // Original width
                    height={1536} // Original height
                    layout="responsive"
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

export default It;