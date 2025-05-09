"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { FiArrowUpRight } from "react-icons/fi";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const TABS = [
  { key: "ecom", label: "Ecom" },
  { key: "edtech1", label: "Edtech" },
  { key: "edtech2", label: "Edtech" },
];

const TAB_CONTENT = {
  ecom: {
    badge: "E-commerce of the Future",
    heading: "Design, build, manage, and scale your digital presence with us",
    subheading:
      "Transforming EdTech by empowering businesses to scale, monetize, and lead.",
    image: "/image2.png",
  },
  edtech1: {
    badge: "CRM of the Future",
    heading:
      "Transforming EdTech by empowering businesses to scale, monetize, and lead.",
    subheading: "Empowering EdTech businesses with next-gen solutions.",
    image: "/image2.png",
  },
  edtech2: {
    badge: "Learning Reimagined",
    heading: "Innovative tools for modern education.",
    subheading: "Scale your EdTech business with advanced technology.",
    image: "/image2.png",
  },
};

const EdTechHero = () => {
  const [activeTab, setActiveTab] = useState("ecom");
  const content = TAB_CONTENT[activeTab];
  const tabRefs = useRef([]);

  const handleKeyDown = (event, index) => {
    const tabCount = TABS.length;
    let newIndex = index;

    switch (event.key) {
      case "ArrowRight":
        newIndex = (index + 1) % tabCount;
        break;
      case "ArrowLeft":
        newIndex = (index - 1 + tabCount) % tabCount;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = tabCount - 1;
        break;
      default:
        return;
    }

    if (newIndex !== index) {
      event.preventDefault();
      const newTabKey = TABS[newIndex].key;
      setActiveTab(newTabKey);
      tabRefs.current[newIndex]?.focus();
    }
  };

  return (
    <section className="relative flex flex-col items-center text-center px-4 space-y-6 max-w-7xl mx-auto lg:min-h-screen pt-[200px]">
      <div>hi</div>
      <div role="tablist" aria-label="Content tabs" className="flex gap-4 mt-8">
        {TABS.map((tab, index) => (
          <button
            key={tab.key}
            id={`tab-${tab.key}`}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`tabpanel-${tab.key}`}
            tabIndex={activeTab === tab.key ? 0 : -1}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => setActiveTab(tab.key)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`px-6 py-2 rounded-full font-semibold text-lg border transition
              ${
                activeTab === tab.key
                  ? "bg-red-500 text-white"
                  : "bg-white text-red-500 border-red-500"
              }
            `}
            style={{
              borderWidth: "2px",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Panel */}
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
        className="w-full"
      >
        <div className="flex flex-col items-center text-center px-4 space-y-6 relative py-16">
          <div className="bg-cs-red text-white text-sm font-semibold px-4 py-1 rounded-full relative z-10">
            {content.badge}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-7xl my-5 relative z-10">
            {content.heading}
          </h1>
          <p className="text-lg text-gray-600">{content.subheading}</p>

          <a
            href="https://wa.me/917299999480"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 my-5 text-white flex items-center gap-2 px-5 py-2 rounded-lg text-lg font-medium hover:bg-orange-600 transition relative z-10"
          >
            Get in touch <FiArrowUpRight className="text-xl" />
          </a>

          <div className="w-full max-w-7xl mt-10 shadow-2xl rounded-lg overflow-hidden relative">
            <img src={content.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdTechHero;
