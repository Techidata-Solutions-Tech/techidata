import CallToAction from "../sections/HomePage/CallToAction";
import Features from "../sections/HomePage/Features";
import Footer from "../sections/HomePage/Footer";
import Hero from "../sections/HomePage/Hero";
import Integrations from "../sections/HomePage/Integrations";
import Introduction from "../sections/HomePage/Introduction";
import LogoTicker from "../sections/HomePage/LogoTicker";
import Navbar from "../sections/HomePage/Navbar";
import Services from "../sections/HomePage/Services";
import { Testimonials } from "../sections/HomePage/Testimonial";
import OurValues from "./components/home/OurValues";
import RoadmapSection from "./components/home/Slides";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Services />
      <RoadmapSection />
      <OurValues />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
