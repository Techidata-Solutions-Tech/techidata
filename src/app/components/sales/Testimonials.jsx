import React from "react";

const testimonialsData = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Vikash",
    title: "Software Developer",
    avatar: "/images/avatar1.png",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut",
    name: "Vikash",
    title: "Software Developer",
    avatar: "/images/avatar2.png",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    name: "Vikash",
    title: "Software Developer",
    avatar: "/images/avatar3.png",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    name: "Vikash",
    title: "Software Developer",
    avatar: "/images/avatar4.png",
  },
  {
    text: "Another testimonial text here...",
    name: "John Doe",
    title: "UI Designer",
    avatar: "/images/avatar5.png",
  },
  {
    text: "Yet another testimonial content...",
    name: "Alice Smith",
    title: "Frontend Engineer",
    avatar: "/images/avatar6.png",
  },
  {
    text: "More testimonial text...",
    name: "Bob Johnson",
    title: "Backend Developer",
    avatar: "/images/avatar7.png",
  },
  {
    text: "The final testimonial example...",
    name: "Eve Williams",
    title: "Project Manager",
    avatar: "/images/avatar8.png",
  },
  {
    text: "And another one just to be safe",
    name: "Adam West",
    title: "The Bat Man",
    avatar: "/images/avatar9.png",
  },
];

const Testimonials = () => {
  const groupTestimonials = [];
  for (let i = 0; i < testimonialsData.length; i += 4) {
    const group = testimonialsData.slice(i, i + 4);
    groupTestimonials.push(group);
  }

  return (
    <div className="max-w-7xl mx-auto mb-5">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          Testimonials
        </h2>
        <p className="text-center text-gray-500 mb-8">
          What they say about Techidata Solutions
        </p>
      </div>
      <div className="p-10 rounded-xl" style={{backgroundColor: "rgba(243, 99, 31, 0.3)"}} >
        {groupTestimonials.map((group, groupIndex) => (
          <div key={groupIndex} className="lg:grid lg:grid-cols-7 lg:gap-5 mb-5">
            <div key={0} className="md:col-span-5 flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                {group[0] && (
                  <div className="bg-white rounded-xl p-6 shadow-xl h-full flex flex-col justify-between">
                    <p className="text-gray-700 mb-4">{group[0].text}</p>
                    <div className="flex items-center mt-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                        <img
                          src={group[0].avatar}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {group[0].name}
                        </p>
                        <p className="text-sm text-gray-500">{group[0].title}</p>
                      </div>
                    </div>
                  </div>
                )}
                {group[1] && (
                  <div className="bg-white rounded-xl p-6 shadow-xl h-full flex flex-col justify-between">
                    <p className="text-gray-700 mb-4">{group[1].text}</p>
                    <div className="flex items-center mt-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                        <img
                          src={group[1].avatar}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {group[1].name}
                        </p>
                        <p className="text-sm text-gray-500">{group[1].title}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {group[2] && (
                <div className="bg-white rounded-xl p-6 shadow-xl h-full flex flex-col justify-between">
                  <p className="text-gray-700 mb-4">{group[2].text}</p>
                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                      <img
                        src={group[2].avatar}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {group[2].name}
                      </p>
                      <p className="text-sm text-gray-500">{group[2].title}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="max-lg:mt-5 lg:col-span-2 ">
              {group[3] && (
                <div className="bg-white w-full rounded-xl p-6 shadow-xl h-full flex flex-col justify-between">
                  <p className="text-gray-700 mb-4">{group[3].text}</p>
                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                      <img
                        src={group[3].avatar}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {group[3].name}
                      </p>
                      <p className="text-sm text-gray-500">{group[3].title}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;