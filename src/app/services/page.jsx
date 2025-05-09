// import Image from "next/image";
// import WhoAreWe from "../components/about/WhoAreWe";
// import OurValues from "../components/about/OurValues";
// import ConsultationSection from "../components/about/Consultation";
// import TestimonialsSection from "../components/about/Testimonial";
// import WeArePartners from "../components/WeArePartners";
// import { Testimonials } from "../../sections/HomePage/Testimonial";
// import Head from "next/head";
// import Introduction from "../../sections/HomePage/Introduction";
// import Footer from "../../sections/HomePage/Footer";
// import CallToAction from "../../sections/HomePage/CallToAction";
// import Navbar from "../../sections/HomePage/Navbar";
// import LogoTicker from "../../sections/HomePage/LogoTicker";
// import ServicesWeOffer from "../../sections/ServicesPage/ServicesWeOffer";
// import Services from "../../sections/HomePage/Services";
// import AboutHeroSection from "../../sections/About-us/AboutHeroSection";
// import Features from "../../sections/HomePage/Features";

// const About = () => {
//   return (

// <div className="relative">
//     <Navbar/>
//     <AboutHeroSection/>
//    <LogoTicker/>
//    <ServicesWeOffer/>
//    <Introduction/>

//    <Services/>

//    <Testimonials/>
//    <CallToAction/>
//    <Footer/>
//     </div>
//   );
// };

// export default About;

import Features from "../components/industry/Features";
import Services from "../components/industry/Services";
import OurTools from "../../sections/HomePage/Integrations";
import HowCanWeHelp from "../components/services/HowCanWeHelp";
import Faqs from "../components/home/Faqs";
import HeroSection from "../components/services/Hero";
const Page = () => {
  return (
    <div className="pt-[6rem]">
      <HeroSection />
      <Features />
      <Services />

      <HowCanWeHelp />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-500 text-justify">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </div>
      <div className="bg-black"></div>
      <div className="w-[100vw] h-[100vh] flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-col justify-center items-center gap-5">
        <p className="baigen text-[3rem] text-center">
          Wondering about our projects?
        </p>
        <p className="text-gray-600 baigen text-[1.5rem] text-center">
          Let me give you a tour
        </p>
      </div>
      <OurTools />
      <Faqs />
    </div>
  );
};

export default Page;
