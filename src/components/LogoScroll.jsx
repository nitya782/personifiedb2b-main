'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const LogoScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationId;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 2;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const logos = [
    { name: 'OnPay', imageUrl: '/images/onpay.jpg' },
    { name: 'BambooHR', imageUrl: '/images/bamboo.jpg' },
    { name: 'Samsara', imageUrl: '/images/samsara.jpg' },
    { name: 'Azuga', imageUrl: '/images/azuga.jpg' },
    { name: 'Nextiva', imageUrl: '/images/nextiva.jpg' },
    { name: 'Vonage', imageUrl: '/images/vonage.jpg' },
    { name: 'Samsara', imageUrl: '/images/samsara.jpg' },
    { name: 'Ring Central', imageUrl: '/images/ring.jpg' },
    { name: 'Ooma', imageUrl: '/images/ooma.jpg' },
    { name: 'QuickBooks', imageUrl: '/images/quick.jpg' },
    { name: 'Teletrac', imageUrl: '/images/teletrac.jpg' },
    { name: 'Azuga', imageUrl: '/images/azuga.jpg' },
  ];

  const allLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-[#192825]  py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full overflow-hidden bg-darkGreen">
          <div
            ref={scrollRef}
            className="flex items-center whitespace-nowrap bg-darkGreen"
            style={{ width: 'fit-content' }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mx-4 sm:mx-6 md:mx-12 lg:mx-10 inline-flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center h-20 min-w-[150px] md:min-w-[180px] rounded-full p-3 sm:p-4 bg-darkGreen">
                  <Image
                    src={logo.imageUrl}
                    alt={logo.name}
                    width={140}
                    height={60}
                    className="h-full max-h-[70px] sm:max-h-[60px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScroll;