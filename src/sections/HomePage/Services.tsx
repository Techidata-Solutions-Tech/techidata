'use client';
import Tag from "../../components/HomePageComponents/Tag";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Define Project type
type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
  duration: number;
};

const PortfolioCarousel = () => {
  return (
    <div className="bg-black">
      <ResponsiveCarousel />
    </div>
  );
};

const ResponsiveCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile ? <VerticalScroll /> : <HorizontalScrollCarousel />;
};

const VerticalScroll = () => {
  return (
    <div className="bg-black">
      {/* Intro Card */}
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full px-4 py-16 text-white">
          <div className="w-full flex items-center justify-center">
            <Tag>Portfolio</Tag>
          </div>
          <h2 className="text-3xl text-center leading-tight font-medium mt-6 max-w-4xl">
            Making your dreams a reality, be it <span className="text-[#F3631F]">fashion</span> or <span className="text-[#F3631F]">food delivery</span>.
          </h2>
          <p className="text-white/50 mt-4 text-base text-center max-w-2xl">
            Explore my curated selection of apps — like <strong>Vestra</strong> and <strong>GrubGo</strong>.
            Each product reflects clean design, seamless UX, and real-world impact.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      {projects.map((project) => (
        <MobileProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

const MobileProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#f5f0e8] px-4 "
    >
      {/* Image */}
      <div className="w-full h-64 md:h-80 relative mb-8 rounded-xl overflow-hidden mt-5">
        <Image
          src={project.url}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="w-full">
        <h2 className="text-3xl font-light mb-4 tracking-tight text-black">
          {project.title}
        </h2>
        <span className="inline-block px-4 py-1 rounded-full bg-red-500 text-white text-xs font-medium mb-4">
          Completed in {project.duration} Months
        </span>
        <p className="text-gray-500 text-sm leading-relaxed mt-4">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {/* Intro Card */}
          <div>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-neutral-900 text-white">
              <div className="w-full flex items-center justify-center">
                <Tag>Our Tools</Tag>
              </div>
              <h2 className="text-4xl mx-16 text-center md:text-5xl md:leading-[55px] leading-[45px] font-medium mt-6">
                Powering great ideas with next-gen tools, from <span className="text-[#F3631F]">design</span> to <span className="text-[#F3631F]">deployment</span>.
              </h2>
              <p className="text-white/50 lg:text-start mt-4 text-lg text-center">
                We use modern, reliable tools that streamline development
                and elevate design. Everything we build is crafted for
                performance, scalability, and polish.
              </p>
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className="group relative h-screen w-screen overflow-hidden flex items-center justify-center bg-[#f5f0e8] md:pt-20"
    >
      <div className="max-w-6xl max-h-[80vh] w-full h-full flex flex-col lg:flex-row mx-4">
        {/* Image */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative flex items-center justify-center ">
          <div className="w-full h-full lg:h-[90%] relative rounded-2xl overflow-hidden">
            <Image
              src={project.url}
              alt={project.title}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 text-center md:text-start h-1/2 lg:h-full flex flex-col justify-center px-4 md:px-8 lg:px-16">
          <div className="mb-4 lg:mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight text-black">
              {project.title}
            </h2>
            <span className="inline-block px-6 py-2 rounded-full bg-red-500 text-white text-sm font-medium mb-8">
              Completed in {project.duration} Months
            </span>
          </div>
          <p className="text-gray-500 max-w-lg text-base leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};


const projects = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/thala-a6213.appspot.com/o/iphone%2015.png?alt=media&token=1d24fe22-ae94-471c-a5e9-892e37ce095c",
    title: "Exaministry",
    description: "We had the opportunity to design and develop the website for Exaministry, a modern platform dedicated to empowering students through personalized exam preparation resources. Our team crafted a sleek, responsive UI with smooth animations and a focus on user experience. From content structure to performance optimization, we handled the project end-to-end — delivering a site that's both functional and visually compelling.",
    duration: 3,
    id: 1,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/thala-a6213.appspot.com/o/Credible.png?alt=media&token=6dcf98d1-28db-4d8a-a7d2-f037bb224241",
    title: "Droppins App",
    description: "Droppins is your ultimate on-demand delivery companion — a seamless fusion of Blinkit’s lightning-fast grocery delivery and Swiggy’s wide-ranging food delivery network. Whether you're craving your favorite restaurant dish or need essentials delivered in minutes, Droppins has you covered. With real-time tracking, curated local options, and a sleek user-friendly interface, Droppins brings convenience to your doorstep — fast, fresh, and fuss-free.",
    duration: 6,
    id: 2,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/thala-a6213.appspot.com/o/Ecom01.png?alt=media&token=65ae09a9-f7a4-4116-8f9f-1e556a1623d1",
    title: "Shop24U",
    description: "Shop24U is your go-to destination for trendsetting women’s fashion, where style meets convenience. From everyday essentials to statement pieces, we bring you a curated collection of clothing that celebrates every woman’s individuality. Whether you're dressing up for brunch, work, or a night out, Shop24U offers the latest styles, seamless shopping, and doorstep delivery — all in just a few taps. Because fashion should be effortless, empowering, and always on point.",
    duration: 6,
    id: 3,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/thala-a6213.appspot.com/o/Ecom02.png?alt=media&token=60291220-87f9-46ff-9fc1-db7cb1ef023d",
    title: "Vestra",
    description: "Vestra is a fashion-forward e-commerce app designed for women who dress with intention and confidence. Discover handpicked styles that blend comfort with statement, from everyday chic to weekend glam. With personalized recommendations, easy navigation, and fast shipping, Vestra makes dressing up (or down) feel effortless. It’s not just fashion — it’s your vibe, your way.",
    duration: 3,
    id: 4,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/thala-a6213.appspot.com/o/iphone%2015.png?alt=media&token=a7d008df-1f9a-4364-a739-2cd52cd80aed",
    title: "GrubGo",
    description: "GrubGo is your personal food genie, delivering everything from local legends to your favorite big-name bites — hot, fresh, and fast. Whether it’s a lazy Sunday, late-night hunger, or a busy weekday, GrubGo brings your cravings to your doorstep with just a tap. With real-time tracking, smart suggestions, and lightning-fast delivery, eating well has never been easier. Go ahead — your next meal is just a GrubGo away.",
    duration: 3,
    id: 5,
  },
  // Add more projects as needed
];

export default PortfolioCarousel;
