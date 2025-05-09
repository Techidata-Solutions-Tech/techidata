import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import {
  FaSearch,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavbarMenu({ isMenuOpen, toggleMenu }) {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  const [showOnlineProgamDropdown, setShowOnlineProgamDropdown] =
    useState(false);
  const [showStudyMaterialDropdown, setShowStudyMaterialDropdown] =
    useState(false);
  const [showTestMaterialDropdown, setShowTestMaterialDropdown] =
    useState(false);
  const [showAcademyDropdown, setShowAcademyDropdown] = useState(false);
  const [showExamsDropdown, setShowExamsDropdown] = useState(false);
  const [showFreePYQsDropdown, setShowFreePYQsDropdown] = useState(false);
  const [onlineProgramData, setOnlineProgramData] = useState([]);
  const [studyMaterialData, setStudyMaterialData] = useState([]);
  const [testSeriesData, setTestSeriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchOnlineProgramData = async () => {
    setLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(
        `${baseUrl}/api/static/course/cat-data?course_type=1`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setOnlineProgramData(data);
    } catch (error) {
      console.error("Error fetching online program data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data for Study Materials
  const fetchStudyMaterialData = async () => {
    setLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(
        `${baseUrl}/api/static/course/cat-data?course_type=2`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setStudyMaterialData(data);
    } catch (error) {
      console.error("Error fetching study material data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data for Test Series
  const fetchTestSeriesData = async () => {
    setLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(
        `${baseUrl}/api/static/course/cat-data?course_type=3`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTestSeriesData(data);
    } catch (error) {
      console.error("Error fetching test series data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  // Function to handle link clicks
  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full sm:w-[350px] h-full bg-white shadow-md transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } flex flex-col`} // Added flex flex-col
      >
        {/* Top Header - Fixed */}
        <div className="lg:hidden grid grid-cols-12 px-5 md:px-8 bg-white h-[80px] flex-shrink-0">
          <div className="col-span-6 flex items-center">
            <Link href="/" className="flex" onClick={handleLinkClick}>
              <div className="mr-4 w-[35px] h-[35px] bg-backgroundColor rounded-md"></div>
              <div className="text-[22px] font-bold text-black">VedPrep</div>
            </Link>
          </div>
          <button
            className="text-[30px] text-black col-span-6 flex justify-end items-center"
            onClick={toggleMenu}
          >
            <IoCloseSharp />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="w-full max-w-[350px] mx-auto">
            {/* Search Bar */}
            <div className="px-4 mb-2 mt-5">
              <div className="flex items-center border rounded-md px-2 py-1 h-[45px] bg-[#F4F4F4]">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="flex-1 outline-none bg-[#F4F4F4] pl-4 text-[15px]"
                />
                <FaSearch className="text-gray-400" />
              </div>
            </div>

            {/* Menu Items */}
            <div className="px-4">
              {/* Online Program */}
              <div className="flex justify-between items-center py-2 border-b text-black">
                <Link
                  href="/online-courses"
                  onClick={handleLinkClick}
                  className={`text-[16px] font-medium ${
                    isActive("/online-courses")
                      ? "text-blue-600 underline decoration-blue-600"
                      : "text-black"
                  }`}
                >
                  Online Courses
                </Link>
                <button className="text-lg text-textColor bg-backgroundColor p-1 rounded-md">
                  <MdOutlineAdd
                    className="text-[20px] bg-back"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowOnlineProgamDropdown(!showOnlineProgamDropdown);
                      fetchOnlineProgramData();
                    }}
                  />
                </button>
              </div>
              {showOnlineProgamDropdown && (
                <div className="px-4 py-2 border-b ">
                  {loading ? (
                    <div className="px-4 py-2 text-gray-700">Loading...</div>
                  ) : (
                    onlineProgramData.map((item) => (
                      <Link
                        key={item._id}
                        href={`/online-courses/${item.seo_url}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 "
                        onClick={() => {
                          handleLinkClick();
                          setShowOnlineProgamDropdown(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))
                  )}
                </div>
              )}

              {/* Study Material */}

              <div className="flex justify-between items-center py-2 border-b text-black">
                <Link
                  href="/study-materials"
                  onClick={handleLinkClick}
                  className={`text-[16px] font-medium ${
                    isActive("/study-materials")
                      ? "text-blue-600 underline decoration-blue-600"
                      : " text-black"
                  }`}
                >
                  Study Material
                </Link>
                <button className="text-lg text-textColor bg-backgroundColor p-1 rounded-md">
                  <MdOutlineAdd
                    className="text-[20px] bg-back"
                    onClick={(e) => {
                      setShowStudyMaterialDropdown(!showStudyMaterialDropdown);
                      fetchStudyMaterialData();
                    }}
                  />
                </button>
              </div>
              {showStudyMaterialDropdown && (
                <div className="px-4 py-2 border-b">
                  {loading ? (
                    <div className="px-4 py-2 text-gray-700">Loading...</div>
                  ) : (
                    studyMaterialData.map((item) => (
                      <Link
                        key={item._id}
                        href={`/study-materials/${item.seo_url}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          handleLinkClick();
                          setShowStudyMaterialDropdown(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))
                  )}
                </div>
              )}

              {/* Test Series */}
              <div className="flex justify-between items-center py-2 border-b text-black">
                <Link
                  href="/test-series"
                  onClick={handleLinkClick}
                  className={`text-[16px] font-medium ${
                    isActive("/test-series")
                      ? "text-blue-600 underline decoration-blue-600"
                      : " text-black"
                  }`}
                >
                  Test Series
                </Link>
                <button className="text-lg text-textColor bg-backgroundColor p-1 rounded-md">
                  <MdOutlineAdd
                    className="text-[20px] bg-back"
                    onClick={(e) => {
                      setShowTestMaterialDropdown(!showTestMaterialDropdown);
                      fetchTestSeriesData();
                    }}
                  />
                </button>
              </div>
              {showTestMaterialDropdown && (
                <div className="px-4 py-2 border-b">
                  {loading ? (
                    <div className="px-4 py-2 text-gray-700">Loading...</div>
                  ) : (
                    testSeriesData.map((item) => (
                      <Link
                        key={item._id}
                        href={`/test-series/${item.seo_url}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          handleLinkClick();
                          setShowTestMaterialDropdown(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))
                  )}
                </div>
              )}

              {/* Academy Link with Dropdown */}
              <div className="flex justify-between items-center py-2 border-b text-black">
                <Link
                  href="#"
                  onClick={handleLinkClick}
                  className={`text-[16px] font-medium ${
                    isActive("/academy")
                      ? "text-blue-600 underline decoration-blue-600"
                      : "text-black"
                  }`}
                >
                  Academy
                </Link>
                <button className="text-lg text-textColor bg-backgroundColor p-1 rounded-md">
                  <MdOutlineAdd
                    className="text-[20px] bg-back"
                    onClick={() => setShowAcademyDropdown(!showAcademyDropdown)}
                  />
                </button>
              </div>
              {showAcademyDropdown && (
                <div className="px-4 py-2 border-b">
                  <ul className="space-y-2 divide-y-2 list-none">
                    <li className="pl-3">
                      <Link
                        href="/academy/chemistry"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        Chemistry
                      </Link>
                    </li>
                    <li className="pl-3 pt-2">
                      <Link
                        href="/academy/physics"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        Physics
                      </Link>
                    </li>
                    <li className="pl-3 pt-2">
                      <Link
                        href="/academy/maths"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        Math
                      </Link>
                    </li>
                    <li className="pl-3 pt-2">
                      <Link
                        href="/academy/biology"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        Biology
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              {/* Free PYQs */}
              <div className="flex justify-between items-center py-2 border-b text-black">
                <Link
                  href="/previous-year-questions"
                  onClick={handleLinkClick}
                  className={`text-[16px] font-medium ${
                    isActive("/previous-year-questions")
                      ? "text-blue-600 underline decoration-blue-600"
                      : " text-black"
                  }`}
                >
                  Free PYQs
                </Link>
                {/* <button className="text-lg text-textColor bg-backgroundColor p-1 rounded-md">
                  <MdOutlineAdd
                    className="text-[20px] bg-back"
                    onClick={() =>
                      setShowFreePYQsDropdown(!showFreePYQsDropdown)
                    }
                  />
                </button> */}
              </div>
              {/* {showFreePYQsDropdown && (
                <div className="px-4 py-2 border-b">
                  <ul className="space-y-2 divide-y-2 list-none">
                    <li className="pl-3">
                      <Link
                        href="/previous-year-questions/chemistry"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        Chemistry
                      </Link>
                    </li>
                    <li className="pl-3 pt-2">
                      <Link
                        href="/previous-year-questions/physics"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        Physics
                      </Link>
                    </li>
                    <li className="pl-3 pt-2">
                      <Link
                        href="/previous-year-questions/maths"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        Math
                      </Link>
                    </li>
                    <li className="pl-3 pt-2">
                      <Link
                        href="/previous-year-questions/biology"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        Biology
                      </Link>
                    </li>
                  </ul>
                </div>
              )} */}

              {/* About Us Link */}
              <div className="flex justify-between items-center py-2 border-b text-black">
                <Link
                  href="/about-us"
                  onClick={handleLinkClick}
                  className={`text-[16px] font-medium ${
                    isActive("/about")
                      ? "text-blue-600 underline decoration-blue-600"
                      : " text-black"
                  }`}
                >
                  About Us
                </Link>
              </div>

              {/* Exams */}
              <div className="flex justify-between items-center py-2 border-b text-black">
                <Link
                  href="https://vedprep.com/exams/"
                  onClick={handleLinkClick}
                  className={`text-[16px] font-medium ${
                    isActive("/academy")
                      ? "text-blue-600 underline decoration-blue-600"
                      : "text-black"
                  }`}
                >
                  Exams
                </Link>
                <button className="text-lg text-textColor bg-backgroundColor p-1 rounded-md">
                  <MdOutlineAdd
                    className="text-[20px] bg-back"
                    onClick={() => setShowExamsDropdown(!showExamsDropdown)}
                  />
                </button>
              </div>
              {showExamsDropdown && (
                <div className="px-4 py-2 border-b">
                  <ul className="space-y-2 divide-y-2 list-none">
                    <li className="pl-3">
                      <Link
                        href="https://vedprep.com/exams/csir-net/"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        CSIR NET
                      </Link>
                    </li>
                    <li className="pl-3 pt-2">
                      <Link
                        href="https://vedprep.com/exams/cuet-pg/"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        CUET PG
                      </Link>
                    </li>
                    <li className="pl-3 pt-2">
                      <Link
                        href="https://vedprep.com/exams/iit-jam/"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        IIT JAM
                      </Link>
                    </li>
                    <li className="pl-3 pt-2">
                      <Link
                        href="https://vedprep.com/exams/gate/"
                        className="text-black"
                        onClick={handleLinkClick}
                      >
                        GATE
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              {/* Contact Link */}
              <div className="flex justify-between items-center py-2 border-b text-black">
                <Link
                  href="/vedgayan"
                  onClick={handleLinkClick}
                  className={`text-[16px] font-medium ${
                    isActive("/vedgayan")
                      ? "text-blue-600 underline decoration-blue-600"
                      : " text-black"
                  }`}
                >
                  Vedgayan
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="px-4 mt-8 mb-10">
              <div className="flex justify-around">
                <Link
                  href="https://www.facebook.com/vedprep/"
                  target="_blank"
                  className="border rounded-md shadow-sm"
                >
                  <GrFacebookOption className="text-gray-500 text-xl m-2" />
                </Link>
                <Link
                  href="https://www.instagram.com/vedprep/"
                  target="_blank"
                  className="border rounded-md shadow-sm"
                >
                  <FaInstagram className="text-gray-500 text-xl m-2 " />
                </Link>
                <Link
                  href="https://www.whatsapp.com/channel/0029VaJLjQO5kg74WLIiYn0j"
                  target="_blank"
                  className="border rounded-md shadow-sm"
                >
                  <FaWhatsapp className="text-gray-500 text-xl m-2" />
                </Link>
                <Link
                  href="https://t.me/vedprepchemacademy"
                  target="_blank"
                  className="border rounded-md shadow-sm"
                >
                  <FaTelegram className="text-gray-500 text-xl m-2 " />
                </Link>
                <Link
                  href="https://www.youtube.com/@VedPrepChemAcademy"
                  target="_blank"
                  className="border rounded-md shadow-sm"
                >
                  <FaYoutube className="text-gray-500 text-xl m-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
