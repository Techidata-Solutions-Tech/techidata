import Image from "next/image";

const FeatureSection = ({
  title,
  subtitle,
  features,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  imagePosition,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center `}
      >
        <div className={`${imagePosition === "left" ? "md:order-2" : "md:order-1"}`}>
          <span className="bg-cs-red text-white px-4 py-2 rounded-full text-sm font-semibold uppercase">
            Accelerate Growth
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">{title}</h2>
          <p className="text-gray-600 mt-4">{subtitle}</p>
          <ul className="mt-6 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-orange-500 text-xl">✔</span>
                <p className="text-gray-700">{feature}</p>
              </li>
            ))}
          </ul>
          <a
            href={buttonLink}
            className="mt-6 inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            {buttonText} →
          </a>
        </div>

        <div className={`rounded-lg w-full h-64 flex items-center justify-center ${imagePosition === "left" ? "md:order-1" : "md:order-2"}`}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={300}
              className="rounded-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-lg"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
