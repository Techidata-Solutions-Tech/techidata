import Footer from "../../sections/HomePage/Footer";
import CallToAction from "../../sections/HomePage/CallToAction";
import LogoTicker from "../../sections/HomePage/LogoTicker";
import Hero from "../components/about/Hero";
import OurTeam from "../components/about/OurTeam";
import CountSection from "../components/about/CountSection";
import TimeLine from "../components/about/TimeLine";
const About = () => {
  return (
    //     <>
    //        <Head>
    //         <title>About Us - Techidata Solutions</title>
    //         <meta
    //           name="description"
    //           content="Explore our trusted partnerships and collaborations with leading companies. Learn more about the value we bring together with our partners."
    //         />
    //         <meta name="robots" content="index, follow" />
    //         <link rel="canonical" href="https://www.techidata.com/aboutus" />
    //       </Head>
    //     <div className="md:w-full container relative md:px-[4%]">
    //   <WeArePartners/>
    //     <div className="relative w-full max-w-screen-xl mx-auto">
    //       <Image
    //         src="https://www.datocms-assets.com/48401/1628644950-javascript.png"
    //         alt="Responsive Image"
    //         width={1512}
    //         height={458}
    //         className="w-full h-auto object-cover"
    //         priority
    //       />
    //     </div>
    //     <Introduction/>
    //     <OurValues/>
    //  <Testimonials/>
    //     <ConsultationSection/>
    //     </div></>

    <div className="relative pt-[6rem]">
      <Hero />
      <LogoTicker />
      {/* <Introduction /> */}
      <OurTeam />
      <div className="bg-black">
        <CountSection />
      </div>
      <TimeLine />
      {/* <Features />
      <Testimonials /> */}
      <CallToAction />
    </div>
  );
};

export default About;
