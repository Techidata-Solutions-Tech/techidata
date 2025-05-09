"use client";
import { useState, useEffect } from "react";
import Button from "../../components/Buttom";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/aboutus" },
  { label: "Services", href: "/services" },
  { label: "Industry", href: "/industry" },
];

export default function Navbar() {
  const [isRoadmapVisible, setIsRoadmapVisible] = useState(false);
  const [showContactBox, setShowContactBox] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const roadmap = document.getElementById("roadmap");
    if (!roadmap) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRoadmapVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(roadmap);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`${
          isRoadmapVisible ? "hidden" : ""
        } py-3 lg:py-3 fixed top-0 z-50 max-w-[1520px] w-full mx-auto left-1/2 -translate-x-1/2 hidden lg:block`}
      >
        <div className="w-full max-w-screen-2xl mx-auto xl:px-[20%] lg:px-[5%] md:px-[3%] px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 border border-gray-300 rounded-lg p-2 lg:py-5 px-4 lg:px-16 md:pr-2 items-center bg-white shadow-sm">
            {/* Logo */}
            <div>
              <Image src={logo} alt="logo" className="h-12 md:h-11 w-auto" />
            </div>

            {/* Center Nav */}
            <div className="hidden lg:flex justify-center items-center">
              <nav className="flex gap-6 font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm md:text-base text-gray-600 hover:text-gray-900 rounded-full transition duration-150 ease-in-out"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Buttons */}
            <div className="lg:flex justify-end gap-4 relative hidden">
              <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
                <Link
                  href="https://api.whatsapp.com/send?phone=91729999480&text=Hey%20i%20saw%20your%20landing%20page%2C%20I%20am%20looking%20for%20something%20similar.%20Can%20we%20discuss%3F"
                  className="text-green-500 hover:text-green-600"
                  aria-label="WhatsApp"
                >
                  <IoLogoWhatsapp size={26} />
                </Link>
                <span className="text-gray-400">|</span>
                <div
                  className="relative"
                  onMouseEnter={() => setShowContactBox(true)}
                  onMouseLeave={() => setShowContactBox(false)}
                >
                  <p
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                    aria-label="Call"
                    onClick={() => setShowContactBox(!showContactBox)}
                  >
                    <IoCall size={26} />
                  </p>
                  <div
                    className={`absolute top-10 right-0 lg:left-[-150px] w-[280px] sm:w-[350px] lg:w-[410px] bg-white shadow-xl rounded-lg p-4 z-50 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 transition-all duration-300 ease-in-out ${
                      showContactBox
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="">
                      <Image
                        src={logo}
                        alt="logo"
                        className="h-12 md:h-11 w-auto"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="font-semibold text-sm sm:text-base">
                        Write Us
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">
                        example@gmail.com
                      </p>
                      <p className="font-semibold text-sm sm:text-base">
                        We are just a call away
                      </p>
                      <Link
                        href="tel:+91729999480"
                        className="text-sm sm:text-base hover:underline"
                      >
                        +91729999480
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="primary" className="hidden md:block">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile View */}
      <nav
        className={`${
          isRoadmapVisible ? "hidden" : ""
        } py-3 lg:py-3 fixed top-0 z-50 max-w-[1520px] w-full mx-auto left-1/2 -translate-x-1/2 lg:hidden`}
      >
        <div className="w-full max-w-screen-2xl mx-auto xl:px-[20%] lg:px-[5%] md:px-[3%] px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 border border-gray-300 rounded-lg p-2 lg:py-5 px-4 lg:px-16 md:pr-2 items-center bg-white shadow-sm">
            {/* Logo */}
            <div>
              <Image src={logo} alt="logo" className="h-12 md:h-11 w-auto" />
            </div>

            {/* Menu Toggle Button */}
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Menu Header with Close Button */}
          <div className="flex justify-between  mb-8  border border-gray-300 rounded-lg p-2 lg:py-5 px-4 lg:px-16 md:pr-2 items-center bg-white shadow-sm">
            <Image src={logo} alt="logo" className="h-12 md:h-11 w-auto" />
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-800 focus:outline-none"
              aria-label="Close menu"
            >
              <IoClose size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block text-xl  px-4  font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition duration-150"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Information */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IoCall className="text-blue-500" size={20} />
                <Link
                  href="tel:+91729999480"
                  className="text-gray-700 hover:text-blue-600"
                >
                  +91729999480
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <IoLogoWhatsapp className="text-green-500" size={20} />
                <Link
                  href="https://api.whatsapp.com/send?phone=91729999480&text=Hey%20i%20saw%20your%20landing%20page%2C%20I%20am%20looking%20for%20something%20similar.%20Can%20we%20discuss%3F"
                  className="text-gray-700 hover:text-green-600"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>

            <Button variant="primary" className="w-full mt-6">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
