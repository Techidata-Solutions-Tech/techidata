"use client";

import { useState, useEffect } from "react";

export default function ConsultationForm() {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ text: "", type: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.phone) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]+$/.test(data.phone))
      newErrors.phone = "Invalid phone number";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.websiteType)
      newErrors.websiteType = "Please select a website type";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    const data = {
      name: formElements.name.value,
      phone: formElements.phone.value,
      email: formElements.email.value,
      websiteType: formElements.websiteType.value,
    };

    const newErrors = validateForm(data);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.status === 200) {
        setMessage({ text: "Form submitted successfully!", type: "success" });
        event.target.reset();
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      setMessage({ text: error.message, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-center px-6 pt-10 bg-[#1F140D] text-white">
      {message.text && (
        <div
          className={`fixed top-5 right-2 z-[100000000] px-6 py-3 rounded-lg text-white text-center text-sm shadow-lg transition-all duration-500 ${
            message.type === "success" ? "bg-green-500" : "bg-cs-red"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="flex flex-col items-center justify-between text-white">
        <div className="sm:max-w-2xl text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Get a free consultation about your projects
          </h1>
          <p className="text-gray-300 text-lg">
            Calculate your IIT JAM rank using marks, category, and preferred
            program.
            <br />
            Instantly predict colleges & cutoffs!"
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
          <div className="absolute w-48 h-48 bg-gradient-to-r from-[#543A29] to-[#2D1C14] rounded-full blur-3xl opacity-50"></div>
          <img
            src="https://s3-alpha-sig.figma.com/img/3a8f/aeae/8b9174e484aa65f384a8e2dca112a831?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L-GJzavw~qKxy7LP3Ftq6TwxiKzpNvOZFw7Ys9QOyfzoGMqZqFyJmpAI61PoPjQaPVb8a-1Bv6KbPbVlN9ddwHyx4fA5eomsUytfStkQWkcP6eGF0MgTMcpdQqVWGbtWgqvicHO7O9pkGMbXZLx8SIBsCyb7Zj-JnTyTqbUYHJA39wzV9WxPc04gC2Zih438K48VvBQmGLmZpuUP0cQnDo4lT1UBGM~VgsxUBHL22tBakdqDLOyoRWT15ASbLJorZ1FIn2053b0PE6jRDqH2MWDoRpqAwN3Q7t1Wey8U0-sLBAHhPJUuHkJO2jErr4GQ60PQ-wMBByyaRasI9hOyqw__"
            alt="Student"
            className="relative z-10 w-72 md:w-80 object-cover"
          />
        </div>
      </div>

      <div className="m-0">
        {/* <div className="h-10"></div> */}
        <div className="bg-white text-black p-6 md:p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">
            We will get back to you!!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="w-full p-3 border rounded"
              onChange={() => setErrors({ ...errors, name: "" })}
            />
            {errors.name && (
              <p className="text-cs-red text-sm">{errors.name}</p>
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
              className="w-full p-3 border rounded"
              onChange={() => setErrors({ ...errors, phone: "" })}
            />
            {errors.phone && (
              <p className="text-cs-red text-sm">{errors.phone}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full p-3 border rounded"
              onChange={() => setErrors({ ...errors, email: "" })}
            />
            {errors.email && (
              <p className="text-cs-red text-sm">{errors.email}</p>
            )}

            <select
              name="websiteType"
              className="w-full p-3 border rounded"
              onChange={() => setErrors({ ...errors, websiteType: "" })}
            >
              <option value="">What kind of website do you want?</option>
              <option value="Ed-tech Website">Ed-tech Website</option>
              <option value="E-Commerce Website">E-Commerce Website</option>
            </select>
            {errors.websiteType && (
              <p className="text-cs-red text-sm">{errors.websiteType}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
            >
              {isSubmitting ? "Booking..." : "Book a Free Call"}
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-4">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-600 underline">
              Terms & Conditions
            </a>
          </p>
        </div>
        <div className="pt-10"></div>

      </div>
    </div>
  );
}
