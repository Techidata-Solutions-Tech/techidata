"use client";
import { useState } from "react";

export default function OurServices() {
  return (
    <div className="bg-[#F9F9F7] max-w-7xl mx-auto py-12 px-5 md:px-[108px] text-center  mt-10">
       <button className='px-6 py-2 text-sm md:text-base rounded-full border-2 transition font-medium focus:outline-none bg-[#F43F5E] text-white border-[#F43F5E]'>Services We Offer
          </button>
      <h2 className="text-3xl font-serif font-semibold text-gray-900 lg:leading-[70px] leading-[45px] bagien">
        Our Services
      </h2>
      <p className="text-lg font-sans text-gray-600 mt-4 leading-9">
        Together, we're the perfect partners. 🤝 We bring your vision to life
        with top-tier creativity and a seamless, worry-free experience. No
        fluff—just results that matter.
      </p>
      <HoverImageList />
    </div>
  );
}

const HoverImageList = () => {
  const [hovered, setHovered] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const items = [
    { title: "Brand Identity", image: "/image1.jpg" },
    { title: "Seamless Collaboration", image: "/image2.jpg" },
    { title: "Maintenance", image: "/image3.jpg" },
    { title: "Weekly Updates", image: "/image4.jpg" },
  ];

  const handleMouseMove = (e, image) => {
    const itemRect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - itemRect.left; 
    const relativeY = e.clientY - itemRect.top; 
    setHovered(image);
    setPosition({ x: relativeX, y: relativeY });
  };

  return (
    <div className="relative flex flex-col justify-center items-start py-10 space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="baigen relative flex justify-between items-center w-full hover:bg-white transition duration-300 ease-in-out cursor-pointer"
          onMouseMove={(e) => handleMouseMove(e, item.image)}
          onMouseLeave={() => setHovered(null)}
        >
          <span className="text-gray-500 text-sm max-sm:hidden">(0{index + 1})</span>

          <div className="flex max-sm:flex-col gap-1 sm::gap-4 max-[400px]:flex-wrap items-start sm:justify-between sm:items-center sm:min-w-[350px]">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            <span className="text-gray-500 text-sm max-w-[400px]:pr-2 inline-block sm:hidden">(0{index + 1}){" "}</span>{item.title}
            </h2>
            <span className="text-gray-500 text-xs sm:text-sm">(View More)</span>

          </div>
        </div>
      ))}

      {hovered && (
        <div
          className="absolute w-40 h-40 bg-cover bg-center rounded-lg shadow-lg transition-transform duration-150 pointer-events-none"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            backgroundImage: `url(${hovered})`,
            // transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
};
