'use client'
import { useState } from "react";
import { InView } from "react-intersection-observer";

export default function Services() {
    const [animate, setAnimate] = useState(false);

    return (
      <InView
        triggerOnce
        threshold={0.3}
        onChange={(inView) => {
          if (inView) setAnimate(true);
        }}
      >
        {({ ref }) => (
          <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
{/* Left side */}
              <div className={`lg:sticky top-32 self-start transition-all duration-700  ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `}>
                <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                  Your life's work, <br /> powered by our life's work
                </h1>
                <p className="text-gray-600 mt-4 text-lg">
                  A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that{" "}
                  <a href="#" className="text-blue-600 underline">values your privacy</a>.
                </p>
                <div className="flex">
                <a href="https://wa.me/7299999480" target="_blank" rel="noopener noreferrer"  className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2">
                  Get in touch <span>↗</span>
                </a>
                </div>
              </div>

              {/* right Side */}

              <div className="grid grid-cols-1 gap-6">
                {/* Cards */}
                {[
                  { title: "CMS", icon: "📌" },
                  { title: "People Management", icon: "👤" },
                  { title: "Mail", icon: "💬" },
                  { title: "Books", icon: "📖" },
                  { title: "Web Design", icon: "💻" },
                  { title: "Marketing", icon: "📢" },
                  { title: "Analytics", icon: "📊" },
                  { title: "E-commerce", icon: "🛒" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gray-100 rounded-xl shadow-md p-6 border border-gray-200 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }} // Staggered animation
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
                    <p className="text-gray-700 mt-2 text-sm">
                      We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </InView>
    );
}
