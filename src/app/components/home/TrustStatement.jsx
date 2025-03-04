const TrustStatement = () => {
  return (
    <div className="flex flex-col items-center text-center  max-w-7xl mx-auto px-6 py-12">
  
      <button className="bg-cs-red text-white text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full">
        How can we help?
      </button>

      <p className="mt-6 text-lg md:text-xl lg:text-2xl font-semibold max-w-3xl text-gray-900">
        We believe that trust is paramount in a relationship. We do not own or
        sell your data, and we most certainly do not bank on advertising-based
        business models. The only way we make money is from the software license
        fees you pay us.
      </p>

      <button className="mt-8 border border-orange-500 text-orange-500 text-sm md:text-base font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition">
        Watch Video →
      </button>
    </div>
  );
};

export default TrustStatement;
