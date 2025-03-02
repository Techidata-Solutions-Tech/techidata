// "use client";
// import dynamic from "next/dynamic";
// import { FiArrowUpRight } from "react-icons/fi";
// import Spline from "@splinetool/react-spline";

// const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

// const EdTechHero = () => {
//   return (
//     <section className="relative flex flex-col items-center text-center px-4 space-y-6 max-w-7xl mx-auto min-h-screen">
//       <div className="flex flex-col items-center text-center px-4 space-y-6 relative  py-16">
//         <div className="absolute inset-0 h-full">
//           <Spline scene="https://prod.spline.design/22xIHQ26oXn1YQJ5/scene.splinecode" />
//         </div>
//         <div className="bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full relative z-10">
//           CRM of the Future
//         </div>

//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-7xl my-5 relative z-10">
//           Transforming EdTech by empowering businesses to scale, monetize, and
//           lead.
//         </h1>

//         <a
//           href="https://wa.me/917299999480"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-orange-500 my-5 text-white flex items-center gap-2 px-5 py-2 rounded-lg text-lg font-medium hover:bg-orange-600 transition relative z-10"
//         >
//           Get in touch <FiArrowUpRight className="text-xl" />
//         </a>
//       </div>

//       {/* Video Player */}
//       <div className="relative w-full mx-auto rounded-lg overflow-hidden shadow-2xl z-10">
//         <div className="relative w-full pt-[56.25%]">
//           <ReactPlayer
//             url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
//             controls
//             playing
//             loop
//             width="100%"
//             height="100%"
//             className="absolute top-0 left-0"
//             config={{
//               file: {
//                 attributes: {
//                   controlsList: "nodownload",
//                 },
//               },
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EdTechHero;
"use client";
import dynamic from "next/dynamic";
import { FiArrowUpRight } from "react-icons/fi";
// import Spline from "@splinetool/react-spline";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const EdTechHero = () => {
  return (
    <section className="relative flex flex-col items-center text-center px-4 space-y-6 max-w-7xl mx-auto lg:min-h-screen">
      <div className="flex flex-col items-center text-center px-4 space-y-6 relative  py-16">
        <div className="absolute inset-0 h-full">
          {/* <Spline scene="https://prod.spline.design/22xIHQ26oXn1YQJ5/scene.splinecode" /> */}
        </div>
        <div className="bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full relative z-10">
          CRM of the Future
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-7xl my-5 relative z-10">
          Transforming EdTech by empowering businesses to scale, monetize, and
          lead.
        </h1>

        <a
          href="https://wa.me/917299999480"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 my-5 text-white flex items-center gap-2 px-5 py-2 rounded-lg text-lg font-medium hover:bg-orange-600 transition relative z-10"
        >
          Get in touch <FiArrowUpRight className="text-xl" />
        </a>
      </div>

      <div className="w-full max-w-7xl mt-10 shadow-2xl rounded-lg overflow-hidden relative">
       <img src="/image2.png" alt="" />
      </div>
    </section>
  );
};

export default EdTechHero;
