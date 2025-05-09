"use client";
import { useState } from "react";

export default function OurValues() {
  return (
    <div className="bg-[#F9F9F7] w-full py-12 px-5 md:px-[108px] text-center">
      <h2 className="text-3xl font-serif font-semibold text-gray-900">
        Our Values
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
    <div className="relative flex flex-col justify-center items-start px-4 py-10 space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative flex justify-between items-center w-full p-4 hover:bg-white transition duration-300 ease-in-out cursor-pointer"
          onMouseMove={(e) => handleMouseMove(e, item.image)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex gap-4 items-center">
            <span className="text-gray-500 text-sm">(0{index + 1})</span>
            <h2 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h2>
          </div>
          <span className="text-gray-500 text-sm">(0{index + 1})</span>
        </div>
      ))}

      {hovered && (
        <div
          className="absolute w-40 h-40 bg-cover bg-center rounded-lg shadow-lg transition-transform duration-150 pointer-events-none"
          style={{
            top: `${position.y}px`,
            left: `${position}px`,
            backgroundImage: `url(${hovered})`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
};
