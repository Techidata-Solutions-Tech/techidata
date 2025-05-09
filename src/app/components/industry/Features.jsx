const FeatureCard = ({ icon, title, description, bgColor }) => {
    return (
      <div className={`p-6 rounded-lg shadow-md ${bgColor} flex flex-col items-start space-y-4`}>
        <div className="text-3xl">{icon}</div>
        <h3 className="text-xl font-semibold ">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base text-justify">{description}</p>
      </div>
    );
  };

  const Features = () => {
    const features = [
      {
        icon: "🤖",
        title: "AI based Learning",
        description: "Create a stunning and user-friendly website that attracts new students and engages current ones. Benefit: Improve brand image and increase enrollment.",
        bgColor: "bg-blue-100"
      },
      {
        icon: "🎮",
        title: "Gamified Systems",
        description: "Develop a custom mobile app that allows students to learn anytime, anywhere. Benefit: Boost student engagement and accessibility",
        bgColor: "bg-pink-100"
      },
      {
        icon: "👥",
        title: "Better Communities",
        description: "Develop bespoke software tailored to your specific needs, from student portals to curriculum management tools. Benefit: Gain a competitive edge with unique and effective technology.",
        bgColor: "bg-pink-100"
      },
      {
        icon: "🧠",
        title: "Better Learning",
        description: "Seamlessly integrate your website and app with popular LMS platforms like Moodle and Canvas. Benefit: Streamline administrative tasks and improve data management.",
        bgColor: "bg-blue-100"
      }
    ];

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col">
        <div className=" flex justify-center">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
            LET'S GET STARTED
          </button>
        </div>
        <main className="flex-grow flex flex-col items-center">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Introducing Techidata Your Partner in EDTech Innovation.
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto text-justify">
              Scaling a business isn't straightforward, so we're reimagining the process. Whether you're enhancing your online presence, optimizing your marketing strategy, or streamlining operations, our agency empowers you with the right tools to succeed.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
              Let's Connect →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
              />
            ))}
          </div>
        </main>
      </div>
    );
  };

  export default Features
