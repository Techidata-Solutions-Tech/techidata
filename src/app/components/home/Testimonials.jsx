"use client";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Jimmy Bartney",
    position: "Product Manager at Picko Lab",
    image: "/user.webp",
    title: "It's just incredible!",
    feedback:
      "It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance is now more neat than before, thanks to Spend.In!",
  },
  {
    name: "Sarah Lee",
    position: "CEO at InnovateX",
    image: "/user.webp",
    title: "Best Decision Ever!",
    feedback:
      "Spend.In has transformed the way we handle our business finances. I highly recommend it to every entrepreneur looking for smooth expense management.",
  },
  {
    name: "David Miller",
    position: "CTO at FinTech Ltd",
    image: "/user.webp",
    title: "A Game Changer!",
    feedback:
      "Managing finances used to be a nightmare. Thanks to Spend.In, everything is now streamlined and hassle-free!",
  },
  {
    name: "Amanda Smith",
    position: "Founder at StartupPro",
    image: "/user.webp",
    title: "Highly Recommended!",
    feedback:
      "The best tool for managing business expenses efficiently. I've seen remarkable improvements in tracking finances.",
  },
];

export default function TestimonialCarousel() {
  const [animate, setAnimate] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 2.2, spacing: 20 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 1.5, spacing: 15 } },
      "(max-width: 768px)": { slides: { perView: 1.2, spacing: 10 } },
      "(max-width: 480px)": { slides: { perView: 1, spacing: 8 } },
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
          className={`py-16 bg-gray-100 transition-all duration-1000 ease-in-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="px-5 max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <span className="bg-cs-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                Testimonials
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4">
                Our Users' Kind Words
              </h2>
              <p className="text-gray-500 mt-2 max-w-xl mx-auto">
                Here are some testimonials from our users after using Spend.In to
                manage their business expenses.
              </p>
            </div>

            <div ref={sliderRef} className="keen-slider mt-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="keen-slider__slide bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-sm flex flex-col justify-between my-1"
                >
                  <h3 className="text-lg font-semibold">{testimonial.title}</h3>
                  <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
                  <div className="flex items-center mt-4 border-t pt-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}
