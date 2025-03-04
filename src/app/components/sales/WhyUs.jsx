export default function WhyUs() {
    const cards = [
        {
          id: 1,
          icon: "🎓", 
          title: "Struggling to engage students online?",
          description:
            "We create interactive and user-friendly education platforms that boost student engagement, improve learning outcomes, and enhance your brand reputation.",
        },
        {
          id: 2,
          icon: "🚀",
          title: "Need a fast and scalable solution?",
          description:
            "Our high-performance applications are built to scale with your growing business, ensuring seamless user experiences.",
        },
        {
          id: 3,
          icon: "💡",
          title: "Looking for innovative designs?",
          description:
            "We design visually appealing and intuitive interfaces that enhance user engagement and brand identity.",
        },
      ];
    return (
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2">
            <span className="bg-cs-red text-white px-4 py-2 rounded-full text-sm font-semibold">
              WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Why Techidata is your ideal partner?
            </h2>
            </div>
            <div className="md:col-span-1"></div>
            <div className="text-gray-600 mt-4 lg:col-span-2 text-right">
              Techidata builds high-performance websites and apps for education, e-commerce, and taxi services. Our solutions enhance user experience, drive growth, and keep your business ahead with cutting-edge technology.
            </div>
          </div>
  
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div key={i} style={{backgroundColor: "rgba(243, 99, 31, 0.3)"}} className="p-6 rounded-2xl shadow-md">
                <div className="text-4xl">
                {card.icon}
                </div>
                <h3 className="text-lg font-semibold mt-4 text-gray-900">
            {card.title}
                </h3>
                <p className="text-gray-600 mt-2">
             {card.description}
              </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  