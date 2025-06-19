'use client';

import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Upnav = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-center w-full bg-[#386861] text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl px-2 sm:px-4 py-2 sm:py-4 gap-2 sm:gap-3 md:gap-0">
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center md:justify-start text-center md:text-left">
                <AiOutlineClockCircle size={18} />
                <span className="font-bold">Working Hours :</span>
                <span>Monday - Friday, 10am - 05pm</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 sm:gap-4 text-center">
                <span className="font-bold">example@gmail.com</span>
                <span className="font-bold hidden sm:inline">|</span>
                <span className="font-bold">+3929 455 645</span>
                <span className="font-bold hidden sm:inline">|</span>
                <FaFacebookF />
                <FaInstagram />
                <FaPinterestP />
                <FaYoutube />
            </div>
        </div>
    );
};

export default Upnav;