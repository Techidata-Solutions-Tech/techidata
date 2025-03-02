"use client";

const testimonials = [
  {
    name: "Divya Pratap",
    position: "Web Developer",
    image: "/images/divya.jpg",
    text: "It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance is now more neat than before, thanks to Spend.In!",
  },
  {
    name: "Anurag Rai",
    position: "Manager",
    image: "/images/anurag.jpg",
    text: "Spend.In has transformed our financial management, making it easier than ever to track expenses.",
  },
  {
    name: "Vikas",
    position: "Mobile App Developer",
    image: "/images/vikas.jpg",
    text: "A fantastic tool! Simple, effective, and highly recommended for all businesses.",
  },
  {
    name: "Divya Pratap",
    position: "Web Developer",
    image: "/images/divya.jpg",
    text: "It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance is now more neat than before, thanks to Spend.In!",
  },
  {
    name: "Anurag Rai",
    position: "Manager",
    image: "/images/anurag.jpg",
    text: "Spend.In has transformed our financial management, making it easier than ever to track expenses.",
  },
  {
    name: "Vikas",
    position: "Mobile App Developer",
    image: "/images/vikas.jpg",
    text: "A fantastic tool! Simple, effective, and highly recommended for all businesses.",
  },
  {
    name: "Divya Pratap",
    position: "Web Developer",
    image: "/images/divya.jpg",
    text: "It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance is now more neat than before, thanks to Spend.In!",
  },
  {
    name: "Anurag Rai",
    position: "Manager",
    image: "/images/anurag.jpg",
    text: "Spend.In has transformed our financial management, making it easier than ever to track expenses.",
  },
  {
    name: "Vikas",
    position: "Mobile App Developer",
    image: "/images/vikas.jpg",
    text: "A fantastic tool! Simple, effective, and highly recommended for all businesses.",
  },
];

export default function Container() {
  return (
    <div className="">
      <Testimonials />
      <Cards />
    </div>
  );
}
function Testimonials() {
  return (
    <section className="sticky top-0 w-full h-screen flex items-center justify-center  text-center px-4">
      <div className="-z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-black">
          Testimonials
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mt-2">
          What they say about{" "}
          <span className="text-gray-600 font-medium">Techidata Solutions</span>
        </p>
      </div>
    </section>
  );
}

const Cards = () => {
  return (
    <div className="z-50 w-full px-4 pt-20 pb-10 scrollbar-hide">
      <div className="grid z-50 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white z-50 opacity-100 shadow-md border rounded-lg p-6 text-left flex flex-col justify-between"
            style={{
              marginTop: index % 2 === 0 ? "2rem" : "5rem",
              marginBottom: index % 2 !== 0 ? "0" : "5rem",
            }}
          >
            <p className="font-semibold text-lg">It's just incredible!</p>
            <p className="text-gray-600 my-2">{testimonial.text}</p>
            <div className="flex items-center pt-4 border-t-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border"
              />
              <div className="ml-3">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
