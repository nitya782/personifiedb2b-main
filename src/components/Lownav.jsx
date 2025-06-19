'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Logo1 from "@/assets/Logo1.png";
import Logo2 from "@/assets/Logo2.png";

const LowNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [screenSize, setScreenSize] = useState({
        isSmall: false,
        isMedium: false,
        isXLarge: false,
        isDesktop: false,
        showGetStarted: true
    });

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
        setServicesOpen(false);
        setSolutionsOpen(false);
        setResourcesOpen(false);
    }, []);

    const checkScreenSize = useCallback(() => {
        const width = window.innerWidth;
        const userAgent = navigator.userAgent.toLowerCase();
        const isIPad = /ipad|ipod|iphone/.test(userAgent);
        const isSurface = /surface/.test(userAgent);
        const isTablet = (width >= 768 && width <= 1024) || isIPad || isSurface;

        setScreenSize({
            isSmall: width < 768,
            isMedium: width >= 768 && width < 1400,
            isXLarge: width >= 1400 && width < 1700,
            isDesktop: width >= 1700,
            showGetStarted: !isTablet
        });

        if (width >= 768) {
            setServicesOpen(false);
            setSolutionsOpen(false);
            setResourcesOpen(false);
        }
    }, []);

    useEffect(() => {
        checkScreenSize();
        const resizeHandler = () => {
            checkScreenSize();
            // Debounce for performance
            let timeout;
            clearTimeout(timeout);
            timeout = setTimeout(checkScreenSize, 100);
        };

        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, [checkScreenSize]);

    const getResponsiveStyles = useCallback(() => {
        if (screenSize.isXLarge) {
            return { textSize: 'text-xl', gap: 'gap-14', justify: 'justify-end' };
        } else if (screenSize.isMedium) {
            return { textSize: 'text-lg', gap: 'gap-10', justify: 'justify-center' };
        } else if (screenSize.isDesktop) {
            return { textSize: 'text-3xl', gap: 'gap-14', justify: 'justify-center' };
        } else {
            return { textSize: 'text-base', gap: 'gap-12', justify: 'justify-center' };
        }
    }, [screenSize]);

    const responsiveStyles = getResponsiveStyles();

    const toggleSolutions = useCallback(() => {
        if (screenSize.isSmall) {
            setSolutionsOpen(prev => !prev);
            if (!solutionsOpen) {
                setServicesOpen(false);
                setResourcesOpen(false);
            }
        }
    }, [screenSize.isSmall, solutionsOpen]);

    const toggleServices = useCallback(() => {
        if (screenSize.isSmall) {
            setServicesOpen(prev => !prev);
            if (!servicesOpen) {
                setSolutionsOpen(false);
                setResourcesOpen(false);
            }
        }
    }, [screenSize.isSmall, servicesOpen]);

    const toggleResources = useCallback(() => {
        if (screenSize.isSmall) {
            setResourcesOpen(prev => !prev);
            if (!resourcesOpen) {
                setSolutionsOpen(false);
                setServicesOpen(false);
            }
        }
    }, [screenSize.isSmall, resourcesOpen]);

    // Menu items data for better maintainability
    const solutionsItems = [
        { name: 'B2B Content Syndication', link: '/ContentSyndication' },
        { name: 'Display Advertising', link: '/DisplayAds' },
        { name: 'Sales Development', link: '/SalesDevelopment' },
    ];

    const solutionsDesktopItems = [
        { name: 'Connect', subText: 'B2B Content Syndication', image: '/images/b2b.jpg', link: '/ContentSyndication' },
        { name: 'Engage', subText: 'Display Advertising', image: '/images/advertise.jpg', link: '/DisplayAds' },
        { name: 'Convert', subText: 'Sales Development', image: '/images/sales.jpg', link: '/SalesDevelopment' },
    ];

    const audienceItems = [
        { name: 'Our IT by audience', link: '/IT' },
        { name: 'Our Marketing by audience', link: '/AudienceMarketing' },
        { name: 'Our Sales by audience', link: '/AudienceSales' },
        { name: 'Our Finance by audience', link: '/Finance' },
    ];

    const audienceDesktopItems = [
        { name: 'IT', subText: 'Our IT by audience', image: '/images/IT.webp', link: '/IT' },
        { name: 'Marketing', subText: 'Our Marketing by audience', image: '/images/marketing.webp', link: '/AudienceMarketing' },
        { name: 'Sales', subText: 'Our Sales by audience', image: '/images/sales.webp', link: '/AudienceSales' },
        { name: 'Finance', subText: 'Our Finance by audience', image: '/images/finance.webp', link: '/Finance' },
    ];

    const resourcesItems = [
        { name: 'White Paper', link: '#' },
        { name: 'Blogs', link: '/Blogs' },
    ];

    return (
        <nav 
            className="fixed top-[56px] left-0 right-0 z-40 text-black bg-white px-4 py-3 flex justify-between items-center flex-wrap h-auto lg:h-[100px]"
            aria-label="Main navigation"
        >
            <div className="flex items-center gap-x-1">
  <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#386861] rounded">
    <Image
      src={Logo1}
      alt="Company Logo Part 1"
      width={96}
      height={96}
      className="h-12 lg:h-12 w-auto"
      priority
    />
  </Link>
  <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#386861] rounded">
    <Image
      src={Logo2}
      alt="Company Logo Part 2"
      width={96}
      height={96}
      className="h-12 lg:h-24 w-auto"
      priority
    />
  </Link>
</div>

           <button
        className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-[#386861] rounded p-1"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
    >
        {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
    </button>

    <ul
        className={`flex flex-col md:flex-row md:flex items-start md:items-center ${responsiveStyles.gap} w-full md:w-auto mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'} md:flex ${responsiveStyles.justify}`}
    >
        <li className="relative group">
            <Link href="/"
                className={`hover:text-gray-700 border-0 font-bold ${responsiveStyles.textSize} transition-colors focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
            >
                Home
            </Link>
        </li>
        <li className="relative group">
            <Link href="/About"
                className={`hover:text-gray-700 font-bold ${responsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
            >
                About Us
            </Link>
        </li>

        {/* SOLUTIONS */}
        <li className="relative group">
            <button
                onClick={toggleSolutions}
                type="button"
                className={`hover:text-gray-700 flex items-center gap-1 font-bold ${responsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
                aria-expanded={solutionsOpen}
            >
                Solutions <FaChevronDown size={12} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            <ul
                className={`${screenSize.isSmall ? (solutionsOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible') : 'hidden'} bg-white shadow-xl transition-all duration-300 rounded-xl mt-1`}
                aria-hidden={!solutionsOpen}
            >
                {solutionsItems.map((item, i) => (
                    <li key={i} className="px-4 py-3 hover:bg-[#386861] hover:text-white text-lg border-b border-[#e6d9a1] last:border-b-0">
                        <Link href={item.link}
                            className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-white rounded"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-50 mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all origin-top">
                <div className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200">
                    <div className="grid grid-cols-3 gap-4 p-4 w-max">
                        {solutionsDesktopItems.map((item, index) => (
                            <div key={index} className="relative w-56 h-56 overflow-hidden rounded-lg group/item">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="opacity-90 group-hover/item:opacity-100 transition-opacity duration-300"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent">
                                    <h3 className="text-xl font-bold mb-1 text-white">{item.name}</h3>
                                    <p className="text-sm text-white/90">{item.subText}</p>
                                </div>
                                <Link href={item.link}
                                    className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-white rounded"
                                ></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </li>

        {/* AUDIENCES DROPDOWN */}
        <li className="relative group">
            <button
                onClick={toggleServices}
                type="button"
                className={`hover:text-gray-700 flex items-center gap-1 font-bold ${responsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
                aria-expanded={servicesOpen}
            >
                Audience <FaChevronDown size={12} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <ul
                className={`${screenSize.isSmall ? (servicesOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible') : 'hidden'} bg-white shadow-xl transition-all duration-300 rounded-xl mt-1`}
                aria-hidden={!servicesOpen}
            >
                {audienceItems.map((item, index) => (
                    <li key={index} className="px-4 py-3 hover:bg-[#386861] hover:text-white text-lg border-b border-[#e6d9a1] last:border-b-0">
                        <Link href={item.link}
                            className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-white rounded"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-50 mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all origin-top">
                <div className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200">
                    <div className="flex gap-4 p-4 w-max">
                        {audienceDesktopItems.map((item, index) => (
                            <div key={index} className="relative w-48 h-48 overflow-hidden rounded-lg group/item">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="opacity-90 group-hover/item:opacity-100 transition-opacity duration-300"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent">
                                    <h3 className="text-lg font-bold mb-1 text-white">{item.name}</h3>
                                    <p className="text-sm text-white/90">{item.subText}</p>
                                </div>
                                <Link href={item.link}
                                    className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-white rounded"
                                ></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </li>

        {/* RESOURCES */}
        <li className="relative group">
            <button
                onClick={toggleResources}
                type="button"
                className={`hover:text-gray-700 flex items-center gap-1 font-bold ${responsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
                aria-expanded={resourcesOpen}
            >
                Resources <FaChevronDown size={12} className={`transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            <ul
                className={`${screenSize.isSmall ? (resourcesOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible') : 'absolute left-0 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100'} bg-white shadow-xl transition-all duration-300 w-[300px] rounded-xl mt-8`}
                aria-hidden={!resourcesOpen}
            >
                <div>
                    {resourcesItems.map((item, index) => (
                        <li key={index} className="px-4 py-3 hover:bg-[#386861] hover:text-white text-lg border-b border-[#e6d9a1] last:border-b-0">
                            <Link href={item.link}
                                className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-white rounded"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </div>
            </ul>
        </li>

        <li>
            <Link href="/Contact"
                className={`hover:text-gray-700 font-bold ${responsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
            >
                Contact
            </Link>
        </li>

        <li className="flex flex-col gap-2 mt-4 md:hidden text-base text-gray-700">
            <span>example@gmail.com</span>
            <span>+3929 299 453</span>
            <div className="flex gap-3 mt-2 text-[#386861]">
                {[
                    { icon: <FaFacebookF />, label: 'Facebook' },
                    { icon: <FaInstagram />, label: 'Instagram' },
                    { icon: <FaPinterestP />, label: 'Pinterest' },
                    { icon: <FaYoutube />, label: 'YouTube' }
                ].map((social, i) => (
                    <a
                        key={i}
                        href="#"
                        aria-label={social.label}
                        className="hover:text-[#294944] focus:outline-none focus:ring-2 focus:ring-[#386861] rounded-full p-1"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </li>
    </ul>

    {screenSize.showGetStarted && (
        <Link href="/Contact"
            className={`
                hidden md:block bg-[#386861] text-white py-2 px-6 font-bold rounded-2xl
                transition-all duration-300 hover:bg-[#294944] mt-4 md:mt-0 w-full md:w-auto
                ${responsiveStyles.textSize} relative overflow-hidden group hover:shadow-lg hover:shadow-[#294944]/50
                transform hover:-translate-y-1 active:translate-y-0
                focus:outline-none focus:ring-2 focus:ring-[#386861] focus:ring-offset-2
            `}
        >
            Get Started Now ↗
            <span className="absolute inset-0 opacity-0 bg-gradient-to-r from-[#F7D270]/60 to-transparent group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/20 group-hover:w-64 group-hover:h-64 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
        </Link>
    )}
</nav>
);
};

export default LowNav;