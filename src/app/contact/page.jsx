"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "../../sections/HomePage/Navbar";
import Footer from "../../sections/HomePage/Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companyIndustry: "",
    projectBudget: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.companyName)
      newErrors.companyName = "Company name is required";
    if (!formData.companyIndustry)
      newErrors.companyIndustry = "Industry is required";
    if (!formData.projectBudget) newErrors.projectBudget = "Select a budget";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="w-full">
    <div className="max-w-7xl   mx-auto min-h-screen p-10 grid md:grid-cols-2 gap-12 pt-[5rem]">
      <Navbar/>
      {/* Left Section */}
      <div className="flex flex-col gap-8 py-24">
        <h2 className="text-4xl font-light">Tell us about your project</h2>
        <p className="text-gray-500 text-lg">We will get back to you ASAP</p>
        <a
        href={`tel:+916000831966`} className="flex items-center gap-5">
        <span className="text-3xl font-semibold">+91 6000831966</span>
        <FiArrowUpRight size={30}/>
        </a>
        <p className="text-gray-500">Contact Us</p>
        <a
        href={`mailto:techidata01@gmail.com`} className="flex items-center gap-5">
        <span className="text-2xl font-semibold">techidata01@gmail.com</span>
        <FiArrowUpRight size={30}/>
        </a>
        <p className="text-gray-500">Email</p>
      </div>

      {/* Right Section - Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 py-24">
        <h2 className="text-2xl font-medium">
          Tell us about your project in detail
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field outline-none border-b-2 placeholder-gray-700 text-lg inline-block w-full pb-2 border-black"
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="error-text">{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-field outline-none border-b-2 placeholder-gray-700 text-lg inline-block w-full pb-2 border-black"
              onChange={handleChange}
            />

            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
          </div>{" "}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field outline-none border-b-2 placeholder-gray-700 text-lg inline-block w-full pb-2 border-black"
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="input-field outline-none border-b-2 placeholder-gray-700 text-lg inline-block w-full pb-2 border-black"
              onChange={handleChange}
            />
            {errors.companyName && (
              <p className="error-text">{errors.companyName}</p>
            )}
          </div>
        </div>
        <input
          type="text"
          name="companyIndustry"
          placeholder="Company Industry"
          className="input-field outline-none border-b-2 placeholder-gray-700 text-lg inline-block w-full pb-2 border-black"
          onChange={handleChange}
        />
        {errors.companyIndustry && (
          <p className="error-text">{errors.companyIndustry}</p>
        )}

        {/* Budget Selection */}
        <div>
          <p className="font-medium text-lg">Project Budget (INR)</p>
          <div className="flex gap-4 mt-3 flex-wrap">
            {[
              "Under 50,000",
              "Under 1,00,000",
              "Under 5,00,000",
              "Above 5,00,000",
            ].map((budget) => (
              <button
                type="button"
                key={budget}
                onClick={() =>
                  setFormData({ ...formData, projectBudget: budget })
                }
                className={`px-5 py-2 border rounded-full text-sm font-medium transition ${
                  formData.projectBudget === budget
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {budget}
              </button>
            ))}
          </div>
          {errors.projectBudget && (
            <p className="error-text">{errors.projectBudget}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white flex items-center gap-2 px-3 lg:px-5 py-2 rounded-lg text-md lg:text-lg font-medium hover:bg-orange-600 transition"
        >
          Get in touch <FiArrowUpRight className="text-xl" />
        </button>
      </form>


    </div>
    </div>
  );
};

export default ContactForm;
