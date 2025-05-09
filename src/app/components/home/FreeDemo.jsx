"use client";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";

export default function FreeDemo() {
  const [animate, setAnimate] = useState(false);

  return (
    <InView
      triggerOnce
      threshold={0.3}
      onChange={(inView) => {
        if (inView) setAnimate(true);
      }}
    >
      {({ ref }) => (
        <div
          ref={ref}
          className="relative bg-[rgba(31,20,13,1)] min-h-[30rem] text-white"
          style={{ backgroundColor: "rgba(31, 20, 13, 1)" }}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div
              className={`pl-8 py-16 transition-all duration-1000 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-orange-500 text-sm font-semibold tracking-wide">
                GET STARTED NOW
              </h3>
              <h2 className="text-4xl font-extrabold text-white mt-4 leading-tight">
                Build your Classroom Online <br /> and grow your business
              </h2>
              <p className="text-gray-400 mt-4 text-lg">
                Are you ready to make your business more organized? Download Spend.In now!
              </p>
              <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-orange-600">
                Get a Free Demo
              </button>
            </div>

            {/* Image */}
            <div className="md:mt-0 flex justify-center lg:justify-end">
              <div
                className={`lg:absolute lg:w-5/12 h-auto bottom-0 right-0 transition-all duration-1000 ${
                  animate ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <img src="/image.png" alt="Free Demo" className="drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
