import Image from "next/image";
import WhoAreWe from "../components/about/WhoAreWe";
import OurValues from "../components/about/OurValues";
import ConsultationSection from "../components/about/Consultation";
import TestimonialsSection from "../components/about/Testimonial";
import WeArePartners from "../components/WeArePartners";
import Head from "next/head";

const About = () => {
  return (
    <>
       <Head>
        <title>About Us - Techidata Solutions</title>
        <meta
          name="description"
          content="Explore our trusted partnerships and collaborations with leading companies. Learn more about the value we bring together with our partners."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.techidata.com/aboutus" />
      </Head>
    <div className="max-w-7xl mx-auto p-5">
  <WeArePartners/>
    <div className="relative w-full max-w-screen-xl mx-auto">
      <Image
        src="https://www.datocms-assets.com/48401/1628644950-javascript.png"
        alt="Responsive Image"
        width={1512}
        height={458}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
    <WhoAreWe/>
    <OurValues/>
    <TestimonialsSection/>
    <ConsultationSection/>
    </div></>
  );
};

export default About;
