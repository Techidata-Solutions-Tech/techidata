import React from "react";

const WeArePartners = () => {
  return (
    <div className="py-10">
      <div className="w-[180px] h-[40px] px-[25px] py-[12px] rounded-[47px] border border-opacity-50 border-white bg-cs-red text-white text-sm flex items-center justify-center">
        Your Digital Partner
      </div>

      <div className="w-[842px] max-w-full h-auto text-center md:text-left font-normal font-custom text-black my-5">
        <p style={{ fontFamily: 'Bagien'}} className="text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] md:text-[42px] md:leading-[60px] lg:text-[50px] lg:leading-[71px] tracking-[0%]">
          We are the partners you can Trust <br />
          to build your brand's online presence
        </p>
      </div>
    </div>
  );
};

export default WeArePartners;
