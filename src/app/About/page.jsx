'use client';

import { motion, useInView } from "framer-motion";
import React, { useEffect ,useRef,useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, Award,ArrowUpRight} from "lucide-react";
import Head from 'next/head';
import Link from 'next/link';

// Import dynamic from next/dynamic
import dynamic from 'next/dynamic';

// Dynamically import the components
const Upnav = dynamic(() => import("../../components/Upnav"), { ssr: false });
const Lownav = dynamic(() => import("../../components/Lownav"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });
const LazyLogoscroll = dynamic(() => import("../../components/LogoScroll"), { ssr: false }); // If you uncomment this later
const LazyHowItWork = dynamic(() => import("../../components/HowItWork"), { ssr: false });
const LazyProjectStatsComponent = dynamic(() => import("../../components/ProjectStatsComponent"), { ssr: false });

const About = () => {

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

  useEffect(() => {
    const aosCSS = document.createElement("link");
    aosCSS.rel = "stylesheet";
    aosCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
    document.head.appendChild(aosCSS);

    const aosScript = document.createElement("script");
    aosScript.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
    aosScript.async = true;
    aosScript.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: false,
        });
      }
    };
    document.body.appendChild(aosScript);

    return () => {
      if (document.head.contains(aosCSS)) {
        document.head.removeChild(aosCSS);
      }
      if (document.body.contains(aosScript)) {
        document.body.removeChild(aosScript);
      }
    };
  }, []);

  return (
    <>
    <Head>
        <title>About</title>
        <meta property="og:title" content=" Why Choose Kulan" />
        <meta property="og:description" content="We Help Your Business To Grow Up More Stronger." />
        {/* <meta property="og:image" content="https://blogs.compare-bazaar.com/images/blog2.webp" />
        <meta property="og:url" content={currentUrl} /> */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="PersonifiedB2B" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Upnav />
      <Lownav />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] mt-[100px] sm:mt-[120px] md:mt-[144px] bg-gradient-to-r from-[#302600] via-[#121b1a] to-[#08231f] flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-600 opacity-10 top-[20%] left-[15%]"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full border border-gray-600 opacity-10 bottom-[10%] right-[10%]"></div>
        <h1 className="mt-4 text-3xl font-extrabold z-10">About US</h1>
      </div>

      {/* Why Choose Kulan Section */}
      <section className="bg-[#0f2d26] text-white py-16 px-4 sm:px-8 lg:px-24">
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute right-0 top-0 w-full lg:w-2/4 h-full">
            <Image
              src="/images/workkulan.jpg"
              alt="Business Discussion"
              className="rounded-2xl object-cover"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div className="relative z-10 lg:w-1/2">
            <div className="mb-8 lg:mb-12">
              <button className="bg-[#b9aa86] text-[#0f2d26] px-6 py-3 rounded-lg font-semibold mb-6 hover:bg-[#d4c5a0] transition-colors">
                Why Choose Kulan
              </button>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We Help Your Business To Grow Up More Stronger
              </h2>
              <p className="text-lg md:text-xl">
                Digital marketing agencies often run paid advertising campaigns
                for themselves. This includes creating compelling.
              </p>
            </div>

            <div className="bg-[#356e62] p-6 md:p-8 rounded-2xl shadow-lg mt-8 lg:mt-12 lg:-mr-16">
              <div className="flex items-center gap-4 md:gap-6 mb-6">
                <Award className="text-[#b9aa86]" size={36} />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  World Marketing Winning Awards 2023
                </h3>
              </div>

              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="text-[#b9aa86] mt-1" size={20} />
                  <span className="text-sm md:text-base lg:text-lg">
                    Allow customers to choose from various payment methods and
                    offer flexible billing options to accommodate their
                    financial preferences.
                  </span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="text-[#b9aa86] mt-1" size={20} />
                  <span className="text-sm md:text-base lg:text-lg">
                    Deliver excellent customer service through various channels,
                    including phone, email, live chat, and in-person assistance
                    at physical locations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use the dynamically imported components */}
      {/* If you uncomment Logoscroll later, use <LazyLogoscroll /> */}
      <LazyHowItWork />
      <LazyProjectStatsComponent />

      {/* Solutions Section (this section is already part of the current file) */}
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
                    height={500}
                    className="w-full h-full object-cover rounded-tl-3xl rounded-tr-3xl rounded-br-[15rem] rounded-bl-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
    <div className="min-h-screen bg-[#356e62] text-white px-4 py-16 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-16">
          <span className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide shadow-md">
            Our Vision
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* CARD COMPONENT */}
          {[
            {
              title: 'Our Mission',
              content: [
                'At Queen B2M leadership, our mission is to revolutionize the full-time literacy landscape through world-leading strategies, cutting-edge technology, and a deep understanding of our clients\' needs.',
                'We aim to be the trusted partner that guides businesses toward sustainable growth and prosperity.',
              ],
            },
            {
              title: 'Our Approach',
              content: [
                'We believe in the power of data-driven insights, creative ingenuity, and a relentless pursuit of excellence.',
                'Rooted in deep market understanding, our approach delivers transformative solutions aligned with client goals.',
              ],
            },
            {
              title: 'Our Values',
              content: [
                '<strong>Innovation:</strong> Constantly pushing boundaries to deliver fresh, effective strategies.',
                '<strong>Collaboration:</strong> Success through strong, value-driven client partnerships.',
              ],
            },
            {
              title: 'Our Vision',
              content: [
                '<strong>Integrity:</strong> We uphold trust and transparency in every interaction.',
                '<strong>Results:</strong> Focused on delivering measurable, tangible success.',
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00d9a640] transition-all duration-300 group border border-white/20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#F7D270] mb-4 ">
                {item.title}
              </h2>
              {item.content.map((text, j) => (
                <p
                  key={j}
                  className="mb-3 text-white/90"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* extra  */}
    {/* About Section */}
    {/* About Section */}
    <section className="bg-[#356e62] text-white py-20 px-4 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image with overlay */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src="/images/about-team.jpg"
            alt="About Queen B2M"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#356e62aa] to-[#1e2e2bcc] opacity-20"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10">

          <h2 className="text-4xl font-bold mb-6 leading-snug">
            More Than a Company,
            <br />
            We’re a <span className="text-[#F7D270]">Purpose-Driven Movement</span>
          </h2>
          <p className="text-lg text-white/90 mb-6">
            PersonifiedB2b marketing stands at the intersection of innovation and impact. We unite strategy, creativity, and technology to fuel transformative growth for clients worldwide.
          </p>
          <p className="text-lg text-white/90 mb-8">
            With purpose at our core, we build trust, foster leadership, and empower sustainable change — one idea, one mission at a time.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-[#F7D270] text-[#1e2e2b] font-semibold rounded-xl shadow-md hover:bg-[#d4c5a0]  duration-300"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>


      <Footer />
    </>
  );
};

export default About;