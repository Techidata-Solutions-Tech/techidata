import React from 'react';
import Tag from '../../components/HomePageComponents/Tag';
import Button from '../../components/Buttom';

export default function AboutHeroSection() {
  return (
    <div className="bg-gray-50 relative mt-8 py-16 md:py-24 h-screen"style={{
      background: "linear-gradient(74.99deg, rgba(221, 214, 243, 0.381176) 32.01%, rgba(250, 172, 168, 0.4) 94.77%)"
    }}>
      <div className="max-w-6xl mx-auto h-full  px-4 sm:px-6 lg:px-8">
        <div className="text-center h-full flex flex-col items-center justify-center">
          <div className="inline-flex items-center justify-center mb-6">
            <Tag className="b text-sm px-3 py-1 rounded-full flex items-center">
      
              Available now, only 3 spots left
            </Tag>
          </div>
         
          <h1 className="text-4xl md:text-4xl z-99 lg:text-6xl font-medium text-center mt-6 lg:leading-[70px] leading-[45px] w-full bagien">
           
            <span className="block text-gray-900 mt-2">Beyond <span className="inline-block mx-1">✦</span> Limits.</span>
            <span className="block text-orange-500 mt-2">Amplified With AI.</span>
          </h1>
          
          <p className="text-center text-xl text-black/60 mt-5 w-full">
            Design services at your fingertips. Pause or cancel anytime.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="primary" >Get Started</Button>
            <Button variant="secondary" >View Projects</Button>
            </div>
        </div>
      </div>
    </div>
  );
}