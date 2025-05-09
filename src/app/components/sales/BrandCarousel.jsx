"use client";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const brandLogos = [
  { name: "Forbes", src: "/forbes.svg" },
  { name: "Axios", src: "/axios.svg" },
  { name: "Fast Company", src: "/fastcompany.svg" },
  { name: "Barron's", src: "/barrons.svg" },
  { name: "Axios", src: "/axios.svg" },
  { name: "Fast Company", src: "/fastcompany.svg" },
];

export default function TestimonialCarousel() {
  const [animate, setAnimate] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 5, spacing: 20 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 4, spacing: 15 } },
      "(max-width: 768px)": { slides: { perView: 3, spacing: 10 } },
      "(max-width: 600px)": { slides: { perView: 2, spacing: 8 } },
    },
    dragSpeed: 0.5,
    renderMode: "performance",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <InView
      triggerOnce
      threshold={0.3}
      onChange={(inView) => {
        if (inView) setAnimate(true);
      }}
    >
      {({ ref }) => (
        <section
          ref={ref}
          className={`py-5 transition-all duration-1000 ease-in-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="px-5 max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto px-6 text-center text-gray-500 font-semibold">
              Powering global DTC and B2B setups
            </div>

            <div ref={sliderRef} className="keen-slider mt-2">
              {brandLogos.map((testimonial, index) => (
                <div
                  key={index}
                  className="keen-slider__slide border border-gray-200 flex flex-col justify-between my-3"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={160}
                    height={70}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}
