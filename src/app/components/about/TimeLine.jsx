const TimelineCard = ({ title, description, isLeft }) => {
    return (
      <div className={`flex max-md:flex-col ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full mb-8 md:mb-12`}>
        <div className={`w-full md:w-5/12 px-4 rounded-lg shadow-md ${isLeft ? 'bg-blue-100' : 'bg-pink-100'} mx-4 md:mx-0`}>
          <h3 className="text-lg md:text-xl py-6 font-semibold">{title}</h3>
          <p className="text-sm md:text-base text-gray-600 pb-6">{description}</p>
        </div>
        <div className="w-2/12 hidden md:flex justify-center">
          <div className="w-6 h-6 bg-orange-500 rounded-full z-[10]"></div>
        </div>
        <div className="w-full md:w-5/12"></div>
      </div>
    );
  };
  
  const Timeline = () => {
    const items = [
      { title: "Mobile App Development", description: "Develop a custom mobile app that allows students to learn anytime, anywhere. Benefit: Boost student engagement and accessibility" },
      { title: "Mobile App Development", description: "Develop a custom mobile app that allows students to learn anytime, anywhere. Benefit: Boost student engagement and accessibility" },
      { title: "Mobile App Development", description: "Develop a custom mobile app that allows students to learn anytime, anywhere. Benefit: Boost student engagement and accessibility" },
      { title: "Mobile App Development", description: "Develop a custom mobile app that allows students to learn anytime, anywhere. Benefit: Boost student engagement and accessibility" },
    ];
  
    return (
      <div className="relative flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Adjust top and bottom to match your dot positioning */}
        <div className="max-md:hidden absolute top-[calc(8rem+15px)] lgtop-[calc(8rem+3px)] bottom-[calc(12rem+3px)] w-1 bg-black left-1/2 transform -translate-x-1/2 z-0"></div>
        {items.map((item, index) => (
          <TimelineCard
            key={index}
            title={item.title}
            description={item.description}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    );
  };
  
export default Timeline