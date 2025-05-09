import avatar1 from '../../assets/Avatars/avatar-1.png';
import avatar2 from "../../assets/Avatars/avatar-2.png";
import avatar3 from "../../assets/Avatars/avatar-3.png";
import avatar4 from "../../assets/Avatars/avatar-4.png";
import avatar5 from "../../assets/Avatars/avatar-5.png";
import avatar6 from "../../assets/Avatars/avatar-6.png";
import avatar7 from "../../assets/Avatars/avatar-7.png";
import avatar8 from "../../assets/Avatars/avatar-8.png";
import avatar9 from "../../assets/Avatars/avatar-9.png";
import Tag from "../../components/HomePageComponents/Tag";
import TestimonialColumn from "../../components/HomePageComponents/TestimonialsColums";

const testimonials = [
    {
        text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
        imageSrc: avatar1.src,
        name: "Jamie Rivera",
        username: "@jamietechguru00",
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this tool. ",
        imageSrc: avatar2.src,
        name: "Josh Smith",
        username: "@jjsmith",
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        imageSrc: avatar3.src,
        name: "Morgan Lee",
        username: "@morganleewhiz",
    },
    {
        text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
        imageSrc: avatar4.src,
        name: "Casey Jordan",
        username: "@caseyj",
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
        imageSrc: avatar5.src,
        name: "Taylor Kim",
        username: "@taylorkimm",
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        imageSrc: avatar6.src,
        name: "Riley Smith",
        username: "@rileysmith1",
    },
    {
        text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
        imageSrc: avatar7.src,
        name: "Jordan Patels",
        username: "@jpatelsdesign",
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
        imageSrc: avatar8.src,
        name: "Sam Dawson",
        username: "@dawsontechtips",
    },
    {
        text: "Its user-friendly interface and robust features support our diverse needs.",
        imageSrc: avatar9.src,
        name: "Casey Harper",
        username: "@casey09",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
    return (
        <section className="bg-white py-24">
            <div className="container">
                  <div className="w-full flex justify-center">
                                <Tag>Testimonials</Tag>
                                </div>
                <h2 className="text-4xl md:text-5xl md:leading-[55px] leading-[45px] font-medium mt-6 text-center ">What our clients say</h2>
                <p className="text-black/50  mt-4 text-lg text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi exercitationem nam, dolores mollitia deserunt a cum.
                    Repellendus nostrum exercitationem ducimus.
                </p>
                <div className="flex flex-wrap mt-5 h-[400px] justify-center gap-6 overflow-hidden">
  {/* First column - visible on all screen sizes */}
  <TestimonialColumn 
    testimonials={firstColumn} 
    className="flex w-full sm:w-auto" 
    maskGradient={false}
  />
  
  {/* Second column - visible on tablet (sm) and above */}
  <TestimonialColumn 
    testimonials={secondColumn} 
    className="hidden sm:flex lg:flex w-full sm:w-auto" 
    maskGradient={false}
    reverse={true}
  />
  
  {/* Third column - visible only on desktop (lg) and above */}
  <TestimonialColumn 
    testimonials={thirdColumn} 
    className="hidden lg:flex w-full lg:w-auto" 
    maskGradient={false}
  />
</div>
            </div>
        </section>
    );
};
