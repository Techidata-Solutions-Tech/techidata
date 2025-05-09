"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const RoadmapSection = () => {
  const pinnedSectionRef = useRef(null);
  const lenisRef = useRef(null);

  const cardData = [
    {
      id: 1,
      title: "Design",
      subtitle: "Phase",
      bgColor: "bg-black",
      textColor: "text-[#e6bb6d]",
      placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      id: 2,
      title: "Design",
      subtitle: "Phase",
      bgColor: "bg-black",
      textColor: "text-[#3DD7BD]",
      placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      id: 3,
      title: "Design",
      subtitle: "Phase",
      bgColor: "bg-black",
      textColor: "text-[#D5FD46]",
      placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      id: 4,
      title: "Design",
      subtitle: "Phase",
      bgColor: "bg-black",
      textColor: "text-[#3DD7BD]",
      placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    }
  ];

  const startRotations = [8, -8, 8, -8];
  const endRotations = [-8, 8, -8, 8];
  const startOpacity = 0.5;
  const endOpacity = 1;

  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    lenisRef.current.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const pinnedSection = pinnedSectionRef.current;
    if (!pinnedSection) return;

    const stickyHeader = pinnedSection.querySelector(".sticky-header");
    const cards = gsap.utils.toArray(".card");
    const cardCount = cards.length;
    const pinnedHeight = window.innerHeight * cardCount;

    cards.forEach((card, index) => {
      gsap.set(card, {
        rotation: startRotations[index],
        y: "150%",
        opacity: startOpacity,
        zIndex: index === 0 ? 20 : 10, // Ensure first card is on top initially
      });
    });

    ScrollTrigger.create({
      trigger: pinnedSection,
      start: "top top",
      end: `+=${pinnedHeight}`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress * cardCount;
        const currentCard = Math.floor(progress);

        gsap.to(stickyHeader, {
          opacity: 1 - Math.min(progress * 3, 1),
          duration: 0.1,
          ease: "none",
        });

        cards.forEach((card, index) => {
          if (index < currentCard) {
            gsap.set(card, {
              y: "0%",
              rotation: endRotations[index],
              opacity: 1,
              zIndex: 10,
            });
          } else if (index === currentCard) {
            const cardProgress = progress - currentCard;
            const newY = gsap.utils.interpolate(150, 0, cardProgress);
            const newRotation = gsap.utils.interpolate(
              startRotations[index],
              endRotations[index],
              cardProgress
            );
            const newOpacity = gsap.utils.interpolate(
              startOpacity,
              endOpacity,
              cardProgress
            );
            gsap.set(card, {
              y: `${newY}%`,
              rotation: newRotation,
              opacity: newOpacity,
              zIndex: 20, // Active card on top
            });
          } else if (index === currentCard + 1) {
            const nextCardProgress = progress - currentCard;
            gsap.set(card, {
              y: "150%",
              rotation: startRotations[index],
              opacity: nextCardProgress > 0.5 ? startOpacity : 0,
              zIndex: 10,
            });
          } else {
            gsap.set(card, {
              y: "150%",
              rotation: startRotations[index],
              opacity: 0,
              zIndex: 10,
            });
          }
        });
      },
    });

    return () => {
      lenisRef.current?.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    };
  }, []);

  return (
    <div className="relative">
      <style jsx>{`
        .card-glow {
          box-shadow: 0 0 20px 5px #3dd7bd,
            0 0 30px 10px rgba(230, 187, 109, 0.5);
        }
      `}</style>

      <section
        ref={pinnedSectionRef}
        className="pinned relative h-screen w-full bg-black overflow-hidden"
      >
        <div className="sticky-header absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 z-10">
          <h1 className="text-[20vw] font-light text-transparent [-webkit-text-stroke:2px_#fff]">
            Roadmap
          </h1>
        </div>

        {cardData.map((card, index) => (
          <div
            key={`card-${card.id}`}
            className={`card card-glow absolute h-[60%] w-[80%] md:h-[70%] md:w-[60%] rounded-xl bg-black flex flex-col items-center justify-center text-white`}
            style={{
              left: "50%",
              top: "55%",
              transform: "translate(-50%, -50%)",
              transformOrigin: "center center",
              opacity: index === 0 ? startOpacity : 0,
              zIndex: index === 0 ? 20 : 10
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-[28vw] font-light text-transparent [-webkit-text-stroke:1px_#fff] opacity-80 leading-none select-none">
                {card.id}
              </h1>
            </div>

            <div className="absolute top-3">
              <div
                className={`${
                  card.id === 1
                    ? "bg-[#e6bb6d]"
                    : card.id === 2
                    ? "bg-[#3DD7BD]"
                    : card.id === 3
                    ? "bg-[#D5FD46]"
                    : "bg-[#3DD7BD]"
                } text-black font-bold px-8 py-2 rounded-md text-xl`}
              >
                Phase #{card.id}
              </div>
            </div>

            <div className="relative z-10 text-center mt-28">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-tight flex justify-center items-center gap-4">
                <span className="text-[#e6bb6d]">{card.title}</span>
                <span className="text-transparent [-webkit-text-stroke:2px_#fff] font-bold">
                  {card.subtitle}
                </span>
              </h2>
              <p className="mt-8 text-base md:text-lg text-gray-400 max-w-3xl px-4">
                {card.placeholder}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RoadmapSection;
