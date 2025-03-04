import React from "react";
import HeroSection from "../components/sales/Hero";
import WhyUs from "../components/sales/WhyUs";
import FeatureSection from "../components/sales/FeatureSection";
import Testimonials from "../components/sales/Testimonials";
import BrandCarousel from "../components/sales/BrandCarousel";
import ConsultationForm from "../components/sales/Consultation";

const Sales = () => {
  return (
    <div>
      <HeroSection />
      <BrandCarousel/>
      <WhyUs />
      <FeatureSection
        title="Power your business with cutting-edge websites & apps designed for growth."
        features={[
          "Custom Website & Mobile App Development for a unique digital presence.",
          "User-Friendly Design & Intuitive Navigation to improve engagement.",
          "Mobile-First & Responsive Design for seamless accessibility.",
        ]}
        buttonText="Learn More"
        buttonLink="/digital-growth"
        imageSrc="/digital-growth.png"
        imageAlt="Digital Growth"
        imagePosition="right"
      />
      <FeatureSection
        title="Boost your online sales with scalable e-commerce solutions."
        features={[
          "Seamless shopping experiences with modern UI/UX.",
          "Secure payment gateways and easy checkout processes.",
          "Optimized performance for higher conversion rates.",
        ]}
        buttonText="Explore Now"
        buttonLink="/ecommerce-solutions"
        imageSrc="/ecommerce.png"
        imageAlt="E-Commerce Solutions"
        imagePosition="left"
      />
      <FeatureSection
        title="Automate your workflow with AI-powered business solutions."
        features={[
          "Smart automation to streamline operations.",
          "Data-driven insights for better decision-making.",
          "Enhance productivity with AI-based tools.",
        ]}
        buttonText="Get Started"
        buttonLink="/ai-automation"
        imageSrc="/ai-automation.png"
        imageAlt="AI Automation"
        imagePosition="right"
      />
      <Testimonials/>
      <ConsultationForm/>
    </div>
  );
};

export default Sales;
