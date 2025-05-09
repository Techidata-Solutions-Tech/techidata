"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export type TestimonialColumnType = Array<{
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}>;

export default function TestimonialColumn(props: {
  testimonials: TestimonialColumnType;
  className?: string;
  reverse?: boolean;
  maskGradient?: boolean;
}) {
  const { testimonials, className, reverse = false, maskGradient = true } = props;

  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : "0%",
      }}
      animate={{
        y: reverse ? "0%" : "-50%",
      }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      }}
      className={twMerge(
        "flex flex-col gap-6 pb-4",
        maskGradient && "[mask:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
        className
      )}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <React.Fragment key={i}>
          {testimonials.map((testimonial, index) => (
            <div
              className="p-6 sm:p-8 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] bg-white max-w-xs w-full transition-all duration-300 hover:shadow-lg"
              key={`${index}-${i}`}
            >
              <div className="text-neutral-700 leading-relaxed">{testimonial.text}</div>
              <div className="flex items-center gap-3 mt-5">
                <Image 
                  src={testimonial.imageSrc} 
                  width={40} 
                  height={40} 
                  alt={testimonial.name} 
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col gap-1">
                  <div className="font-medium tracking-tight leading-5 text-neutral-800">{testimonial.name}</div>
                  <div className="leading-5 tracking-tight text-neutral-500">{testimonial.username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  );
}