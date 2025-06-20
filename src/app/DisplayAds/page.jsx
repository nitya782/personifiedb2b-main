'use client';

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


function DisplayAds() {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-screen mt-36 bg-cover bg-center flex items-center justify-start px-8 md:px-16 lg:px-32"
        style={{ backgroundImage: "url('/images/herodis.jpg')" }}
      >
        <div className="text-left text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Eliminate wasted ad spend <br />
            with <span className="text-[#ffd800]">high performing</span> <br />
            display advertising.
          </h1>
          <button className="bg-[#0E1F1C] text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Informational Section */}
      <div className="w-full min-h-screen bg-[#0E1F1C] text-white py-20 px-8 md:px-16 lg:px-32 flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Activate display ads that <br />
            stimulate engagement – <br />
            <span className="text-[#FFD700]">not just impressions.</span>
          </h2>
          <p className="text-lg mb-8">
            By leveraging our unique ad creatives with smart data use, IQengage
            delivers personalized, interactive, and chat-worthy experiences...
          </p>
          <p className="text-lg mb-8">
            We've spent over two decades building and refining our first-party
            audiences...
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Next Level <span className="text-[#FFD700]">Attention.</span>
          </h3>
          <p className="text-lg">
            In a world of passive scrolling and fleeting impressions...
          </p>
        </div>
        <div className="flex-grow">
          <Image
            src="/images/displayphone.webp"
            alt="Mobile Engagement"
            width={800}
            height={800}
            className="w-full h-full py-12 max-h-[800px] object-contain"
          />
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-[url('/images/bg2.webp')] bg-[#0E1F1C] w-full text-white pt-20 pb-36 px-4 sm:px-12 md:px-20 lg:px-40 xl:px-60 relative overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Reach the full buying unit,
            <br />
            accelerating lead conversion.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-4 items-start mb-6 p-6"
          >
            <p className="text-lg md:w-1/3 text-white font-semibold">
              Our Services
            </p>
            <p className="text-lg md:w-2/3">
              Our team handles all aspects of ad creation, placement, and
              management...
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 mt-10 text-black">
            {[
              {
                title: "Increased Relevance:",
                content:
                  "Ensure your ads are only shown to those most likely to convert...",
              },
              {
                title: "Custom Audiences:",
                content:
                  "Build detailed audience profiles to tailor your ad creative...",
              },
              {
                title: "Behavioral Targeting:",
                content:
                  "Leverage user behavior to engage decision-makers...",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                whileHover={hoverEffect}
                variants={cardVariants}
                className="bg-[#ffea00] p-8 rounded-xl shadow-lg flex-1 min-h-[250px] flex flex-col justify-center"
              >
                <div className="p-4 rounded-lg">
                  <h2 className="font-bold text-xl mb-3 text-gray-800">
                    {service.title}
                  </h2>
                  <p className="text-gray-700">{service.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex"
          >
            <Link href="/" passHref>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffea00",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ffd800] hover:bg-yellow-300 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg shadow-lg"
              >
                I AM READY TO DRIVE REVENUE →
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Case Study Section */}
      <section className="bg-[#0E1F1C] text-white w-full py-32 px-4 sm:px-12 md:px-20 lg:px-40 xl:px-60 -mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16"
        >
          <motion.div
            className="flex-1"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="uppercase text-[#ffd800] font-semibold text-sm mb-2">
              Customer Success Story
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Cisco Integrated Channel Program Exceeds Expectations with Kulan
            </h2>
            <p className="text-gray-300 mb-8">
              With Kulan, Cisco launched a dynamic integrated demand generation...
            </p>
            <Link href="/" passHref>
              <motion.p whileHover={{ x: 5 }} className="text-2xl text-white font-semibold cursor-pointer">
                READ FULL CASE STUDY →
              </motion.p>
            </Link>
          </motion.div>

          <motion.div
            className="flex-1 max-w-xl"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.5)",
              }}
              className="w-full rounded-xl shadow-xl overflow-hidden relative"
              style={{ marginTop: "-200px", position: "relative", zIndex: 20 }}
            >
              <div className="w-full h-[700px] aspect-[1/3]">
                <Image
                  src="/images/display-ads.webp"
                  alt="Display Ads"
                  width={1200}
                  height={700}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Connect Section */}
      <div
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center relative flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/connectus.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white flex flex-col items-center"
        >
          <Link
            href="/contact"
            className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
          >
            <span className="text-yellow-400">Connect</span>
            <motion.span
              className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition duration-300"
              whileHover={{ scale: 1.2, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="text-black w-5 h-5 md:w-6 md:h-6" />
            </motion.span>
          </Link>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl mt-2 font-medium">
            with us
          </p>
        </motion.div>
      </div>

    </>
  );
}

export default DisplayAds;
