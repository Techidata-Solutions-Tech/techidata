'use client'
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqsData = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    answer: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    answer: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <div className="flex justify-center py-3">
        <p className="bg-red-500 text-white rounded-full px-5 py-1">FAQs</p>
      </div>
      <div className="text-center">
        <span className="bg-cs-red text-white px-4 py-1 rounded-full text-sm font-semibold">FAQs</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">Frequently Asked Questions</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md"
            role="button"
            onClick={() => toggleFaq(index)}
            aria-expanded={openIndex === index}
          >

            <div className="flex justify-between items-center p-6 bg-gray-50">
              <p className="font-semibold text-gray-800 text-lg text-justify">{faq.question}</p>
              <div className="ml-4 shrink-0">
                {openIndex === index ? (
                  <FiChevronUp className="text-gray-600 w-6 h-6" />
                ) : (
                  <FiChevronDown className="text-gray-600 w-6 h-6" />
                )}
              </div>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-600 bg-white text-justify">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
