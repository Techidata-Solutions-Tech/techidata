import Counter from "./Counter";


const CountSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
    <div className="">
      <span className="text-5xl font-bold text-white">
        <Counter value="180" />
        <span style={{ color: "rgba(243, 99, 31, 1)", marginLeft: "5px" }}>
          +
        </span>
      </span>
      <p className="text-gray-500 text-lg">
        Projects successfully completed
        <br />
        more than 180 projects
      </p>
    </div>

    <div className="">
      <span className="text-5xl font-bold text-white">
        <Counter value="30" />
        <span style={{ color: "rgba(243, 99, 31, 1)", marginLeft: "5px" }}>
          +
        </span>
      </span>
      <p className="text-gray-500 text-lg">
        Clients received funding worth 30 million dollars
      </p>
    </div>

    <div className="">
      <span className="text-5xl font-bold text-white">
        <Counter value="10" />
      </span>
      <p className="text-gray-500 text-lg">
        Passionate Designers & Developers for your project
      </p>
    </div>
  </div>
  )
}

export default CountSection