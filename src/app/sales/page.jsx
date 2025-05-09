import Image from "next/image";
import EventsSection from "../components/UpcomingEvents";
import ConsultationForm from "../components/sales/Form";

const Sales = () => {
  return (
    <div className="">
      <div className="w-full">
        <div className="lg:hidden block">
          <Image
            src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/113/833/original/MB_%2824%29.webp?1741863161"
            alt="Image for small screens"
            layout="responsive"
            width={1200}
            height={675}
          />
        </div>

        <div className="hidden lg:block">
          <Image
            src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/113/832/original/Banner_%283%29.webp?1741863156"
            alt="Image for large screens"
            layout="responsive"
            width={1200}
            height={675}
          />
        </div>
      </div>
      <div className="max-lg:w-full max-lg:mt-5 mx-auto lg:fixed lg:top-[10rem] lg:right-5 z-50 ">
        <div className="flex lg:block max-lg:justify-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <ConsultationForm />
        </div>{" "}
      </div>
      <div className="p-5 grid lg:grid-cols-11 max-w-7xl mx-auto">
        <div className="lg:col-span-8">
          <h1 className="text-4xl font-bold mb-6">
            How OTT Platforms Handle Millions of Concurrent Viewers Using HLD
          </h1>

          <div className="text-gray-600 mb-8">
            <span className="font-medium">STARTS ON:</span> March 22, 2025 5:00
            PM (IST)
            <span className="mx-2 font-medium">ENDS ON:</span> March 22, 2025
            8:00 PM (IST)
            <span className="mx-2 font-medium">VENUE:</span> Online
          </div>

          <hr className="border-gray-600 border-2 mb-8" />

          <Masterclass />
        </div>
      </div>
    </div>
  );
};

export default Sales;

const Masterclass = () => {
  return (
    <div className="">
      {/* About Section */}
      <div className="mb-6">
        <h2 className="bg-blue-50 text-blue-800 text-xl font-bold p-4 rounded-t-md">
          About this Masterclass
        </h2>
        <div className="bg-white py-4 text-gray-600 text-[23px] text-justify">
          <p>
            Ever wondered what goes on behind the scenes of a streaming
            platform? How do these platforms handle millions of concurrent
            viewers without crashing? What technologies power this seamless
            experience?
          </p>
          <p className="mt-2 text-[23px] text-justify">
            Join this Scaler Masterclass with Pragya on{" "}
            <strong>Saturday, 22nd March, at 5:00 PM</strong> to uncover the
            high-level design (HLD) of top OTT platforms. From scaling
            infrastructure with databases, caches, and load balancers to
            tackling real-world system design challenges, this session will help
            you decode the architecture of massive streaming platforms.
          </p>
        </div>
      </div>

      {/* What You Will Gain Section */}
      <div className="mb-6">
        <h2 className="bg-blue-50 text-blue-800 text-xl font-bold p-4 rounded-t-md">
          What You Will Gain From This Masterclass
        </h2>
        <div className="bg-white py-4 text-gray-600">
          <ul className="list-disc pl-5 space-y-2 text-justify text-[23px]">
            <li>
              Understand how big streaming platforms are able to scale to
              millions of concurrent users
            </li>
            <li>
              Understand how to approach HLD system design problems in
              interviews
            </li>
            <li>
              Get insight into the infrastructure like databases, caches,
              messaging queues, load balancers etc.
            </li>
          </ul>
        </div>
      </div>

      {/* Meet Pragya Agarwal Section */}
      <div className="mb-6">
        <h2 className="bg-blue-50 text-blue-800 text-xl font-bold p-4 rounded-t-md">
          Meet Pragya Agarwal
        </h2>
        <div className="bg-white py-4 text-gray-600">
          <ul className="list-disc pl-5 space-y-2 text-justify text-[23px]" >
            <li>Senior Software Engineer, InterviewBit</li>
            <li>Instructor & Mentor, Scaler</li>
            <li>An IIT-Bombay alumnus</li>
            <li>Former Platform Engineer at Media.Net</li>
            <li>16+ years of programming experience</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600  text-[23px] text-justify leading-8">
            Certificates: All attendees get certificates from Anshuman Singh and
            Scaler Academy! Please be careful while entering your details while
            registering since they will go on your Certificate.
          </p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="bg-blue-50 text-blue-800 text-xl font-bold p-4 rounded-t-md">
          This Masterclass is for
        </h2>
        <div className="flex  flex-wrap justify-center items-center py-6 gap-8">
          <div className="flex items-center gap-5 w-[300px]">
            <img
              src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
              alt="hi"
              className="h-20 w-20 rounded-full"
            />
            <p>SDEs looking to upskill</p>
          </div>
          <div className="flex items-center gap-5 max-w-[300px]">
            <img
              src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
              alt="hi"
              className="h-20 w-20 rounded-full"
            />
            <p>SDEs wanting to change from Service to Product Companies</p>
          </div>
        </div>
        <Image
          src="/img-sample.webp"
          alt="Image for small screens"
          layout="responsive"
          width={1200}
          height={675}
        />

        <div className="mb-6 mt-4">
          <h2 className="bg-blue-50 text-blue-800 text-xl font-bold p-4 rounded-t-md">
            About Techidata
          </h2>
          <div className="bg-white py-4 text-gray-600">
            <p className="text-[23px] text-justify">
              Many aspirants (like us!) who enter software engineering are
              exposed to conventional teaching methods and are taught to 'cram'
              content. This creates a gap in their Computer Science learning,
              makes them underconfident, and prevents them from accelerating in
              their career. Enter Scaler Academy!
            </p>
            <p className="mt-2 text-[23px] text-justify">
              Scaler Academy is a tailor-made program, by the industry, for the
              industry. It is to help master the foundations of Computer Science
              (Data Structure Algorithms & System Design) and take their career
              to the next level, via:{" "}
            </p>

            <ul className="list-disc pl-5 space-y-2 text-[23px] text-justify">
              <li>A Structured, Guided and Industry-Vetted curriculum</li>
              <li>Live Classes by Experts who have been there, done that</li>
              <li>Guided 1:1 Mentorship from Industry Veterans</li>
              <li>
                Hyper-personalised learning experience through real-life
                projects
              </li>
              <li>
                Dedicated Career Support, Placement Assistance & 900 Employer
                Partners
              </li>
              <li>Aspirational peer group of 30K+ Scaler Students & Alumni</li>
              <li>
                We've introduced 2 Electives - Advanced DSA Data Structure
                Algorithms for Competitive Programming, and Product Management
                to help you further accelerate your tech career. These will be
                taught at the end of the course, and are entirely optional.
                However, they provide deep insight into crucial topics, so we
                strongly advise you to opt for them!
              </li>
              <li>
                NEW! You can now get a sense of our core offering for free.
                Experience everything that the Academy offers and take the leap
                to your dream company. Attend a Free Class, watch Recorded
                content from our experts, attempt practice problems and block a
                mentor from top tech companies to get structured guidance
              </li>
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              The curriculum is designed to make you a solid engineer by
              preparing you for the toughest challenges you may face as you make
              headway in your career.
            </p>
          </div>
        </div>
      </div>
      <EventsSection />
    </div>
  );
};
