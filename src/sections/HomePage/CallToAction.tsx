
import Image from "next/image";
import star from "../../assets/images/star.png";
import blueSwirl from "../../assets/images/spring.png"; 
import Button from "../../components/Buttom";

export default function CallToAction() {
  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-white to-[#D2DCFF]">
      {/* Left decorative element */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-80 blur-sm">
        <Image
          src={star}
          alt="Decorative element"
          width={280}
          height={500}
          className="transform hidden md:flex -scale-x-100"
        />
      </div>
      
      {/* Right decorative element */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 opacity-80 blur-sm">
        <Image
          src={blueSwirl}
          alt="Decorative element"
          width={280}
          height={500} 
          className="hidden md:flex"
        />
      </div>
      
      <div className="container mx-auto max-w-4xl px-6 relative z-10">
       
          <h2 className="text-4xl md:text-5xl text-center font-medium text-[#1A1A2E] tracking-tight">
            Sign up for free today
          </h2>
    
      
        
        <p className="text-[#424256] text-lg text-center mt-5 max-w-2xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <Button variant="primary" className="bg-[#1A1A2E] text-white px-8 py-3 rounded-full font-medium">
            Get for free
          </Button>
          
          <Button variant="secondary" className="bg-transparent border border-[#1A1A2E] text-[#1A1A2E] px-8 py-3 rounded-full font-medium flex items-center">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}