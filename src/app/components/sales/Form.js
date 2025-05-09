"use client";

import { useState, useEffect } from "react";

export default function ConsultationForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    graduationYear: "",
    jobTitle: "",
    program: "",
    mobileNumber: "",
    termsAgreed: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ text: "", type: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.graduationYear)
      newErrors.graduationYear = "Graduation year is required";
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
    if (!formData.program) newErrors.program = "Program is required";

    if (!formData.mobileNumber)
      newErrors.mobileNumber = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobileNumber))
      newErrors.mobileNumber = "Invalid phone number (10 digits required)";

    if (!formData.termsAgreed)
      newErrors.termsAgreed = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage({ text: "Form submitted successfully!", type: "success" });
      setFormData({
        email: "",
        fullName: "",
        graduationYear: "",
        jobTitle: "",
        program: "",
        mobileNumber: "",
        termsAgreed: false
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      setMessage({ text: "Failed to submit form", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {message.text && (
        <div
          className={`fixed top-2 sm:top-3 md:top-5 right-2 z-50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-white text-center text-xs sm:text-sm shadow-lg transition-all duration-500 ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Email */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Email ID<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email ID"
            className={`w-full p-2 sm:p-3 text-xs sm:text-sm border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Full Name and Graduation Year */}
        <div className="">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your Full Name"
              className={`w-full p-2 sm:p-3 text-xs sm:text-sm border rounded-md ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Company Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your Full Name"
                className={`w-full p-2 sm:p-3 text-xs sm:text-sm border rounded-md ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>
          </div>
          <div className="">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Company Industry<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your Full Name"
                className={`w-full p-2 sm:p-3 text-xs sm:text-sm border rounded-md ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>
          </div>
        </div>

        {/* Job Title and Program */}

        {/* Mobile Number */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Mobile Number<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <span className="p-2 sm:p-3 text-xs sm:text-sm border border-r-0 rounded-l-md bg-gray-100">
              +91
            </span>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className={`flex-1 p-2 sm:p-3 text-xs sm:text-sm border rounded-r-md ${
                errors.mobileNumber ? "border-red-500" : "border-gray-300"
              }`}
              maxLength="10"
            />
          </div>
          {errors.mobileNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            You'll receive an OTP on this number for verification
          </p>
        </div>

        <div>
          <p className="font-medium text-lg">Project Budget (INR)</p>
          <div className="flex gap-4 mt-3 flex-wrap">
            {[
              "Under 50,000",
              "Under 1,00,000",
              "Under 5,00,000",
              "Above 5,00,000"
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

        {/* Terms Agreement */}
        <div className="flex items-start mt-2">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleChange}
              className="w-3 h-3 sm:w-4 sm:h-4 border border-gray-300 rounded"
            />
          </div>
          <div className="ml-2 sm:ml-3">
            <label className="text-xs sm:text-sm text-gray-700">
              By continuing, I have read and agree to Scaler's{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy
              </a>
            </label>
            {errors.termsAgreed && (
              <p className="text-red-500 text-xs mt-1">{errors.termsAgreed}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition duration-200 mt-2 sm:mt-3"
        >
          {isSubmitting ? "Submitting..." : "Continue"}
        </button>
      </form>
    </div>
  );
}
