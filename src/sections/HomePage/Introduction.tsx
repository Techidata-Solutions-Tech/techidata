"use client";
import Tag from "../../components/HomePageComponents/Tag";
import {  useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're moving fast to build standout digital experiences — but clunky tools and over-complicated workflows keep getting in the way. We streamline the process, combining clean code with intuitive design to help you launch faster, smoother, and smarter.`;
const words = text.split(" "); // Split by spaces to get words

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);

    const wordIndex = useTransform(scrollYProgress, [0, 0.9], [0, words.length]);

    useEffect(() => {
        const unsubscribe = wordIndex.on("change", (latest) => {
            setCurrentWord(latest); // Round down to get whole word indexes
        });

        return () => unsubscribe(); // Clean up subscription
    }, [wordIndex]);

    return (
        <section className="py-24  relative lg:px-40">
            <div className="md:w-full container relative md:px-[4%]">
                <div className="sticky top-5 lg:top-36"> {/* Adjusted sticky positioning */}
                    <div className="flex justify-center">
                        <Tag>Introducing Techidata</Tag>
                    </div>

                    <div className="text-4xl md:text-5xl md:leading-[55px] leading-[45px] text-center font-medium mt-8  ">
                        <span>Your creative process deserves better.</span>{" "}
                        <div className="min-h-[220px] md:min-h-[165px]"> {/* Fixed height container for text */}
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={twMerge(
                                        "transition-all duration-300 inline-block mr-1",
                                        index < currentWord ? "text-black" : "text-black/20"
                                    )}
                                >
                                    {word}
                                </span>
                            ))}
                        </div>
                        <span className="text-[#F3631F] block mt-4">
                            That&apos;s why we started Techidata.
                        </span>
                    </div>
                </div>
                <div className="h-[200vh]" ref={scrollTarget}></div> {/* Increased scroll space */}
            </div>
        </section>
    );
}
