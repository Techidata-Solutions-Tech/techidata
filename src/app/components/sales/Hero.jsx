import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center text-center py-20 mt-1 px-4 md:px-10 lg:px-20 bg-[url('/bg-orange-gradient.webp')] bg-cover bg-center before:absolute before:inset-0 before:bg-white before:opacity-50">
      <div className="relative max-w-4xl my-5">
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
          We build powerful websites & apps for growth in education, e-commerce & taxis!
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          Custom websites & apps designed for growth, engagement, and revenue.
        </p>
        <div className="flex justify-center my-2">
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold text-lg shadow-lg hover:bg-orange-600 transition">
            Get in touch →
          </button>
        </div>
      </div>

      <div className="relative w-[90%] max-w-[1256px] h-auto aspect-[1256/591] mx-auto overflow-hidden rounded-t-[60px]">
        <Image
          src="/image2.png"
          alt="Responsive Styled Image"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
