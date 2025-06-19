'use client';

import { motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight, CheckCircle, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Upnav from "../components/Upnav";
import Lownav from "../components/Lownav";
import Footer from "../components/Footer";

// 1. Import dynamic from next/dynamic
import dynamic from 'next/dynamic';

// 2. Dynamically import the components
//    - ssr: false ensures they are only rendered on the client side
const LazyLogoscroll = dynamic(() => import("../components/LogoScroll"), { ssr: false });
const LazyHowItWork = dynamic(() => import("../components/HowItWork"), { ssr: false });
const LazyProjectStatsComponent = dynamic(() => import("../components/ProjectStatsComponent"), { ssr: false });

const ServiceCard = ({ service, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="relative rounded-md overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer w-full"
      style={{ aspectRatio: "1/1" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        className={`absolute inset-0 object-cover transition-opacity duration-300 ${
          isHovered ? "opacity-70" : "opacity-100"
        }`}
      />

      <div className="relative h-full flex flex-col items-start justify-end p-6 text-white z-10">
        <span className={`text-4xl font-bold transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
          {`0${service.id}`}
        </span>
        <span className={`text-3xl font-bold transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
          {service.title}
        </span>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 text-black p-6 z-20 overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          height: isHovered ? "50%" : "0%",
          backgroundColor: isHovered ? "rgba(255, 209, 102, 0.9)" : "transparent",
          boxShadow: isHovered ? "0 -5px 15px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div style={{ opacity: isHovered ? 1 : 0, transition: "opacity 300ms", transitionDelay: isHovered ? "200ms" : "0ms" }}>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="mb-4">{service.description}</p>
          <Link href={service.link} className="text-black hover:text-blue-400 hover:underline font-semibold transition duration-300">
            More Details→
          </Link>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const solution = [
    { id: "01", title: "Content Syndication", link: "/ContentSyndication" },
    { id: "02", title: "Display Advertising", link: "/DisplayAds" },
    { id: "03", title: "Sales Development", link: "/SalesDevelopment" },
  ];

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerEvents = () => {
      const pointerElements = document.querySelectorAll('a, button, .group');
      pointerElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsPointer(true));
        el.addEventListener('mouseleave', () => setIsPointer(false));
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    handlePointerEvents();

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

const services = [
      {
        id: 1,
        title: "Lead Generation",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        image: "/images/lead_gen.jpg",
        link: "/services/lead-generation", // Link for the specific service page
      },
      {
        id: 2,
        title: "Data Solutions",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        image: "/images/data_sol.jpg",
        link: "/services/data-solutions", // Link for the specific service page
      },
      {
        id: 3,
        title: "Account Based Marketing",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        image: "/images/account_based.jpg",
        link: "/services/account-based-marketing", // Link for the specific service page
      },
    ];

  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:title" content=" Digital Marketing Agency" />
        <meta property="og:description" content="Digital marketing agencies often run paid advertising campaigns for themselves." />
        {/* <meta property="og:image" content="https://blogs.compare-bazaar.com/images/blog2.webp" />
        <meta property="og:url" content={currentUrl} /> */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="PersonifiedB2B" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Upnav />
      <Lownav />

      {/* Hero Section */}
      <section className="relative bg-[#0E1F1C] text-white pt-[30px] lg:pt-20 pb-20 px-6 xl:px-32 min-h-[70vh] flex items-center justify-center overflow-hidden mt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-image.png"
            alt="Team working"
            fill
            className="w-full h-[300] object-cover opacity-30 md:opacity-40"
          />
          <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-gradient-radial from-[#F7D270]/60 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none animate-pulse" />
        </div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* SVG shapes remain the same */}
        </div>

        <div className="relative z-20 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-y-12 md:gap-y-0">
          <div className="w-full md:w-[55%] space-y-6 lg:space-y-8 min-h-[550px] justify-center">
            <span className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg xl:text-xl font-bold tracking-wide border border-[#3ABF6E]">
              Digital Marketing Agency
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-balance"
            >
              <span>Digital Marketing</span><br className="hidden lg:block" />
              <span>Solution For Your Business</span>
            </motion.h1>

            <motion.p
              ref={paragraphRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-300 text-base xl:text-lg leading-relaxed"
            >
              Digital marketing agencies often run paid advertising campaigns for themselves.
              This includes creating compelling ad copy for platforms like Google Ads,
              Facebook Ads, and LinkedIn Ads.
            </motion.p>

            <div className="relative inline-block">
              <div className="absolute inset-0 w-full h-full bg-gradient-radial from-[#F7D270]/60 to-transparent rounded-full blur-2xl opacity-60 animate-pulse z-[-1]" />
              <button className="relative overflow-hidden bg-[#1E2E2B] group px-6 py-3 rounded-md border border-[#3ABF6E] text-white text-base xl:text-lg hover:text-black z-10">
                <span className="relative z-10">Schedule a Free Consultation →</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F7D270] to-[#F7D270]/60 blur-sm translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center"></div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative bg-[#0E1F1C] text-white py-20 px-6 md:px-20">
        {/* SVG shapes remain the same */}

        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-7/12">
            <Image
              src="/images/about-team.jpg"
              alt="Team working together"
              width={800}
              height={550}
              className="rounded-lg shadow-lg h-[550px] object-cover w-full"
            />
          </div>

          <div className="md:w-1/2 space-y-6">
            <span className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Save Your Time And <br /> Money With Our Agencies
            </h2>
            <p className="text-gray-300">
              Digital marketing agencies often run paid advertising campaigns for themselves. This includes creating compelling.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F7D270] text-black p-3 rounded-full text-xl">💰</div>
                <div>
                  <h4 className="text-lg font-bold">Experience and Expertise</h4>
                  <p className="text-gray-300">
                    Digital marketing agencies often run paid advertising campaigns for themselves. This includes creating compelling ad.
                  </p>
                </div>
              </div>
              {/* Other features */}
            </div>

            <div className="pt-4">
              <button className="relative overflow-hidden group px-6 py-3 rounded-md border border-[#3ABF6E] text-white text-base xl:text-lg transition duration-300 bg-[#1E2E2B] hover:text-black z-10">
                <span className="relative z-10">More About Us →</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F7D270] to-[#F7D270]/60 blur-sm translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Use the dynamically imported components */}
      {/* <LazyLogoscroll /> */}

      {/* Services Section */}
<section className="bg-[#0E1F1C] py-20 px-4 sm:px-6 lg:px-12 min-h-screen relative overflow-hidden text-white">
  {/* Background Star Decoration */}
  <Image
    src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/star.png"
    alt="Star"
    width={150}
    height={150}
    className="absolute left-0 top-28 w-20 sm:w-28 lg:w-36 z-0 opacity-50 animate-pulse"
    data-aos="fade-up"
    data-aos-delay="100"
  />

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Heading */}
    <div className="text-center mb-16">

      <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
        What We Offer
      </h1>
      <p className="mt-3 text-lg text-white/80 sm:text-xl">
        Fueling Your Business Growth with Precision
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service) => (
        <div
          key={service.id}
          className="group bg-[#152925] p-6 rounded-2xl shadow-lg border border-[#00d9a640] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#00d9a6]"
        >
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="text-2xl font-bold text-[#F7D270] mb-2 transition duration-300 group-hover:text-[#fff] group-hover:drop-shadow-[0_0_10px_#f7d270] ">
            {service.title}
          </h3>
          <p className="text-white/80 mb-4">{service.description}</p>
          <a
            href={service.link}
            className="inline-block text-sm font-semibold text-[#00d9a6] group-hover:text-white transition duration-300 "
          >
            Learn More →
          </a>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Why Choose Section */}
      <section className="bg-[#0f2d26] text-white py-16 px-4 sm:px-8 lg:px-24">
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute right-0 top-0 w-full lg:w-2/4 h-full">
            <Image
              src="/images/workkulan.jpg"
              alt="Business Discussion"
              fill
              className="rounded-2xl object-cover"
              style={{
                minHeight: '500px',
                maxHeight: '800px'
              }}
            />
          </div>

          <div className="relative z-10 lg:w-1/2">
            <div className="mb-8 lg:mb-12">
              <button className="bg-[#b9aa86] text-[#0f2d26] px-6 py-3 rounded-lg font-semibold mb-6 hover:bg-[#d4c5a0] transition-colors">
                Why Choose Kulan
              </button>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Help Your Business To Grow Up More Stronger</h2>
              <p className="text-lg md:text-xl">
                Digital marketing agencies often run paid advertising campaigns for themselves. This includes creating compelling.
              </p>
            </div>

            <div className="bg-[#356e62] p-6 md:p-8 rounded-2xl shadow-lg mt-8 lg:mt-12 lg:-mr-16">
              <div className="flex items-center gap-4 md:gap-6 mb-6">
                <Award className="text-[#b9aa86] flex-shrink-0" size={36} />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">World Marketing Winning Awards 2023</h3>
              </div>

              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="text-[#b9aa86] mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm md:text-base lg:text-lg">
                    Allow customers to choose from various payment methods and offer flexible billing options.
                  </span>
                </li>
                {/* Other list items */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <div className="bg-[#0E1F1C] min-h-screen w-full py-12 px-4 md:py-16 md:px-8 lg:px-12 relative overflow-hidden cursor-default">
        <div className="absolute left-0 bottom-0 w-20 h-20 rounded-full border border-[#f5d78c] opacity-20"></div>

        <Image
          src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/star.png"
          alt="Star"
          width={100}
          height={100}
          className="absolute top-28 left-0 w-16 sm:w-20 lg:w-24 opacity-40 animate-float z-0 pointer-events-none"
          data-aos="fade-up"
          data-aos-delay="100"
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="mb-6">
                <p className="text-white text-sm md:text-base max-w-lg">
                  Our experienced consultants can assist you in aligning your IT
                  strategy with your business objectives.
                </p>
              </div>

              {solution.map((service) => (
                <Link
                  href={service.link}
                  key={service.id}
                  className="block border-t border-[#304038] py-6 group hover:bg-[#1E2E2B]/30 transition-colors duration-300 px-2 rounded-md"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <span className="text-[#f5d78c] text-sm">{service.id}</span>
                      <h3 className="text-white font-medium text-lg">
                        {service.title}
                      </h3>
                    </div>
                    <div className="text-white transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </Link>
              ))}

              <div className="pt-8">
                <button className="relative overflow-hidden bg-[#1E2E2B] group px-6 py-3 rounded-md border border-[#3ABF6E] text-white text-base xl:text-lg hover:text-black z-10">
                  <span className="relative z-10">View Our Solutions→</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#F7D270] to-[#F7D270]/60 blur-sm translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <p className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide w-max">
                Our Solutions
              </p>
              <div>
                <h2 className="text-white text-1xl md:text-3xl lg:text-2xl font-bold leading-tight">
                  What Solutions We Provide <br />
                  For Your Business
                </h2>
              </div>

              <div className="relative">
                <div className="w-full h-auto overflow-hidden rounded-tl-3xl rounded-br-3xl">
                  <Image
                    src="/images/solutions.jpg"
                    alt="Team of professionals working together"
                    width={700}
                    height={50}
                    className="w-full h-full object-cover rounded-tl-3xl rounded-tr-3xl rounded-br-[15rem] rounded-bl-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Replace original components with their lazy-loaded counterparts */}
      <LazyProjectStatsComponent />

      <LazyHowItWork />
      <Footer />
    </>
  );
};

export default Home;