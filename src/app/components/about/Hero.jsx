import Image from 'next/image';

export default function HeroSection() {
    const avatars = [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/35.jpg",
        "https://randomuser.me/api/portraits/men/50.jpg",
        "https://randomuser.me/api/portraits/women/20.jpg",
        "https://randomuser.me/api/portraits/men/20.jpg",
      ];
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="main-content">


      <section aria-labelledby="about-heading">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          <div>
             <div className="flex items-center mb-6">
        <div className="flex -space-x-2 mr-3">
          {avatars.map((num,i) => (
            <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
              <Image
                src={`${num}`}
                alt=""
                width={32}
                height={32}
                className="h-full w-full object-cover"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600">loved by over 2 million worldwide</p>
      </div>
        <h1 id="about-heading" className="text-3xl font-bold text-gray-900 mb-6">About Techidata</h1>

            <p className="text-gray-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <figure className="relative h-64 sm:h-72 rounded-lg overflow-hidden">
            <Image
              src="/about/hero1.png"
              alt="Techidata office space with team members collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </figure>
        </div>

        <figure className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden mb-10">
          <img
            src="/about/hero2.png"
            alt="Techidata team members"
            className="object-cover w-[100vw]"
          />
        </figure>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </section>
    </main>
  );
}
