export default function ConsultationSection() {
  return (
    <div className="bg-[#1F140D] w-full py-[130px] px-6 md:px-[108px] text-center text-white my-5">
      <h2 className="text-3xl md:text-5xl font-semibold">
        Get a free consultation about <br className="hidden md:block" />
        your projects
      </h2>
      <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
        Let's discuss your project or maybe a vision you have in mind. Book a
        quick call with our team and see where it goes.
      </p>
      <button className="mt-8 border border-orange-500 text-orange-500 px-6 py-3 rounded-md text-lg font-medium hover:bg-orange-500 hover:text-white transition-all">
        Book a Call Now ↗
      </button>
    </div>
  );
}
