import Services from "./components/home/Services";
import FreeDemo from "./components/home/FreeDemo";
import Pricing from "./components/home/Pricing";
import TrustStatement from "./components/home/TrustStatement";
import Hero from "./components/home/Hero";
import Faqs from "./components/home/Faqs";
import TestimonialCarousel from "./components/home/Testimonials";

export default function Home() {
  return (
   <>
   <Hero/>
   <Services/>
   <TrustStatement/>
   <Pricing/>
   <TestimonialCarousel/>
   <FreeDemo/>
   <Faqs/>
   </>
  );
}
