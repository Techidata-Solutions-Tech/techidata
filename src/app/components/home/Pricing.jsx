'use client'
import { useState } from "react";
import { InView } from "react-intersection-observer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const [animate, setAnimate] = useState(false);

  const plans = [
    {
      name: "Basic",
      monthlyPrice: "₹30,000",
      yearlyPrice: "₹3,00,000",
      features: [
        "Basic workflow automatic",
        "Basic workflow",
        "User interface improvements",
        "Email support",
        "Enhanced security features",
      ],
      unavailable: [
        "Mobile app integration",
        "Performance optimization",
        "Data visualization enhancements",
        "Collaboration tools upgrade",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: "₹80,000",
      yearlyPrice: "₹8,00,000",
      features: [
        "Basic workflow automatic",
        "Basic workflow",
        "User interface improvements",
        "Email support",
        "Enhanced security features",
        "Mobile app integration",
      ],
      unavailable: [
        "Performance optimization",
        "Data visualization enhancements",
        "Collaboration tools upgrade",
      ],
      badge: "Most Popular",
    },
    {
      name: "Startup",
      monthlyPrice: "₹1,50,000",
      yearlyPrice: "₹15,00,000",
      features: [
        "Basic workflow automatic",
        "Basic workflow",
        "User interface improvements",
        "Email support",
        "Enhanced security features",
        "Mobile app integration",
        "Performance optimization",
        "Data visualization enhancements",
        "Collaboration tools upgrade",
      ],
      unavailable: [],
    },
  ];

  return (
    <InView
      triggerOnce
      threshold={0.3}
      onChange={(inView) => {
        if (inView) setAnimate(true);
      }}
    >
      {({ ref }) => (
        <div
          ref={ref}
          className={`max-w-7xl mx-auto px-6 lg:px-12 py-16 transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <span className="text-white bg-cs-red px-4 py-1 rounded-full text-sm font-semibold">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Wondering about our Prices?
            </h2>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex justify-center items-center mt-8">
            <span className="text-gray-700 font-semibold mr-3">Monthly</span>
            <div
              className={`relative w-16 h-8 flex items-center rounded-full cursor-pointer ${
                isYearly ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              ></div>
            </div>
            <span className="text-gray-700 font-semibold ml-3">Yearly</span>
          </div>

          {isYearly && (
            <div className="text-orange-500 text-sm mt-2 flex justify-center">
              Save 65% 🚀
            </div>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 relative"
              >
                {plan.badge && (
                  <span className="absolute top-4 right-4 bg-cs-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span>📦</span> {plan.name}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  <span className="text-gray-600 text-sm"> /{isYearly ? "year" : "month"}</span>
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 w-full justify-center">
                  Go with this Plan <span>↗</span>
                </button>
                <ul className="mt-5 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                  {plan.unavailable.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400 line-through">
                      <FaTimesCircle className="text-red-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </InView>
  );
}
