"use client";
import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import hero from "../../assets/hero.png";
import Image from 'next/image';
const TAB_DATA = [
  {
    label: 'EdTech Services',
    image: `${hero}`,
    ctaText: 'Launch Your Academy',
    ctaLink: '#',
  },
  {
    label: 'E-Com Services',
    image: `${hero}`,
    ctaText: 'Partner with Us',
    ctaLink: '#',
  },
  {
    label: 'Ride Booking',
    image: `${hero}`,
    ctaText: 'Explore Courses',
    ctaLink: '#',
  },
];

const EdTechHero = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = TAB_DATA[activeTabIndex];

  return (
    <section className="relative text-center px-4 pb-20 pt-[130px] lg:min-h-screen flex flex-col items-center bg-gradient-to-r from-[#f5f3ff] via-[#fdf2f8] to-[#fff1f2]">
      {/* Tabs */}
      <div role="tablist" className="flex gap-4 mb-10 flex-wrap justify-center">
        {TAB_DATA.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`px-6 py-2 text-sm md:text-base rounded-full border-2 transition font-medium focus:outline-none ${
              activeTabIndex === index
                ? 'bg-[#F43F5E] text-white border-[#F43F5E]'
                : 'bg-white text-black border-[#F43F5E]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <h1 className="text-4xl md:text-4xl z-99  lg:text-6xl font-medium text-center mt-6 lg:leading-[70px] leading-[45px] w-full bagien ">Design, build, manage, and scale your digital presence with us</h1>
            <p className="text-center text-xl text-black/60 my-5 w-full ">Transforming EdTech by empowering businesses to scale, monetize, and lead.</p>


      <div className="flex gap-4 mb-10 flex-wrap justify-center">
        <a
          href={activeTab.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FD6A2A] text-white px-6 py-3 rounded-lg text-base font-semibold flex items-center gap-2 shadow hover:bg-[#e45a1e] transition"
        >
          {activeTab.ctaText} <FiArrowUpRight />
        </a>
        <a
          href={activeTab.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-[#FD6A2A] text-black px-6 py-3 rounded-lg text-base font-semibold flex items-center gap-2 hover:bg-[#fff7f2] transition"
        >
          {activeTab.ctaText} <FiArrowUpRight />
        </a>
      </div>

      <div className="container mt-[30px] flex justify-center">
            <Image src={hero} alt="" />
        </div>
    </section>
  );
};

export default EdTechHero;
