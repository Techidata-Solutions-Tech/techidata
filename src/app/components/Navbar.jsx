"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-[1000000] ${
      scrolled ?"py-4": "shadow-md border-b" 
    }`}>
      <nav
        className={`max-w-5xl mx-auto z-50 bg-white  px-7 transition-all duration-300 ${
          scrolled ? "shadow-md border border-gray-300 rounded-full" : "border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href='/' className="flex items-center">
            <Image src="/td.png" alt="TechiData Logo" height={50} width={120} />
          </Link>

          <div className="hidden md:flex md:space-x-4 lg:space-x-6">
            {["About Us", "Projects", "Services", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item?.split(" ").join("").toLocaleLowerCase()}`}
                  className="text-gray-700 hover:text-orange-600 transition"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:block">
            <Link
              href="/"
              className="bg-orange-500 text-white flex items-center gap-2 px-3 lg:px-5 py-2 rounded-lg text-md lg:text-lg font-medium hover:bg-orange-600 transition"
            >
              Get in touch <FiArrowUpRight className="text-xl" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none p-2"
          >
            <IoMenu size={28} />
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col items-center pt-10 space-y-6 md:hidden`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-700 p-2"
          >
            <IoClose size={30} />
          </button>

          {["About Us", "Projects", "Services", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item?.split(" ").join("").toLocaleLowerCase()}`}
                className="text-gray-700 hover:text-orange-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}

          <a
            href="https://wa.me/7299999480"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition w-11/12 mt-5"
            onClick={() => setIsOpen(false)}
          >
            Get in touch <FiArrowUpRight className="text-xl" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
