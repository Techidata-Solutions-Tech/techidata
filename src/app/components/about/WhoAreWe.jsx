import Counter from "../Counter";


export default function WhoAreWe() {
  return (
    <section className="py-16  bg-white text-gray-900 ">
      <h2 className="text-4xl font-semibold mb-4">Who are we ?</h2>
      <p className="text-lg text-gray-600 max-w-3xl">
        From the heart of Delhi, we combine speed with precision, delivering
        world-class solutions to a diverse global clientele. Our city's dynamic
        spirit drives us to push boundaries, craft high-quality work, and create
        impact at any scale. Excellence isn’t just a goal—it’s who we are.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="">
          <span className="text-5xl font-bold text-black">
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
          <span className="text-5xl font-bold text-black">
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
          <span className="text-5xl font-bold text-black">
            <Counter value="10" />
          </span>
          <p className="text-gray-500 text-lg">
            Passionate Designers & Developers for your project
          </p>
        </div>
      </div>
    </section>
  );
}
