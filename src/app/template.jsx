"use client";

import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import ConsultationForm from "./components/sales/Form";

export default function TemplatePage({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-[9999] transition-all duration-300 ease-in-out overflow-auto  ">
          <div className="relative rounded-lg  w-full  sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto shadow-lg transform transition-all duration-300 ease-in-out overflow-auto max-h-[85vh] sm:max-h-[90vh]">
            <button
              onClick={closePopup}
              className="absolute top-1 right-1 sm:top-2 sm:right-2 rounded-full p-1 sm:p-2 hover:bg-gray-200 transition-colors z-10"
              aria-label="Close popup"
            >
              <IoClose className="text-xl sm:text-2xl text-orange-600" />
            </button>

            <div className="bg-white rounded-lg p-3 sm:p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-3 lg:gap-8">
                {/* Left - Image */}
                <div className="w-full md:w-1/2 md:flex items-center justify-center mb-3 sm:mb-4 md:mb-0 hidden ">
                  <Image
                    src="/formimg.png"
                    width={400}
                    height={400}
                    alt="Form illustration"
                    className="object-contain rounded-lg w-full h-auto max-w-[150px] sm:max-w-[180px] md:max-w-full max-h-[150px] sm:max-h-[180px] md:max-h-full"
                    priority
                  />
                </div>

                {/* Right - Form */}
                <div className="w-full md:w-1/2 ">
                  <ConsultationForm onSuccess={closePopup} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <main>{children}</main>
    </>
  );
}
