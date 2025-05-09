"use client";
import React, { useState } from "react";
import { TbCategory } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { MdAdminPanelSettings } from "react-icons/md";
import MobileNavbarMenu from "./MobileNavbarMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function MobileNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { data: session, status } = useSession();

  if (pathname?.startsWith("/admin")) {
    return null;
  } else if (pathname?.startsWith("/userdashboard")) {
    return null;
  }

  return (
    <>
      <div className="lg:hidden grid grid-cols-12 px-5 md:px-8 bg-white h-[80px] shadow-md fixed w-full z-50">
        {/* Left */}
        <div className="col-span-6 flex items-center">
          <Link href="/" className="flex">
            <div className="mr-4 w-[35px] h-[35px] bg-backgroundColor rounded-md"></div>
            <div className="text-[22px] font-bold text-black">VedPrep</div>
          </Link>
        </div>
        {/* Right */}
        <div className="col-span-6 flex justify-end items-center">
          <div className="mr-4 flex justify-center items-center px-4 py-2 rounded-md">
            {/* Login Button */}
            {!session ? (
              <div>
                <Link
                  href="/login"
                  className="font-bold bg-backgroundColor p-2 px-3 rounded-lg text-black"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div>
                {session.user.role !== "admin" ? (
                  <Link
                    href="/userdashboard/myaccount"
                    className="w-[40px] h-[40px] flex justify-center bg-[#F4F4F4] rounded-full items-center"
                  >
                    <BiUser className="text-[30px] text-[#6d6c80]" />
                  </Link>
                ) : (
                  <Link
                    href="/admin/Home/testimonialsetting"
                    className="w-[40px] h-[40px] flex justify-center bg-[#F4F4F4] rounded-full items-center"
                  >
                    <MdAdminPanelSettings className="text-[28px] text-[#5751e1]" />
                  </Link>
                )}
              </div>
            )}
          </div>
          <div>
            <TbCategory
              className="text-[#5751e1] text-4xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Side Menu */}
      <MobileNavbarMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}
