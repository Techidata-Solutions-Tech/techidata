import FeatureCard from "../../components/HomePageComponents/FeatureCard";
import Tag from "../../components/HomePageComponents/Tag";
import avatar1 from "../../assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "../../assets/images/avatar-florence-shaw.jpg";
import avatar3 from "../../assets/images/avatar-lula-meyers.jpg";
import Image from "next/image";
import Avatar from "../../components/HomePageComponents/Avatar";
import Key from "../../components/HomePageComponents/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Our Services</Tag>
                </div>

                <h2 className="text-6xl font-medium text-center mt-6">
                    Looking for these services?{" "}
                    <span className="text-[#F3631F]">See here</span>
                </h2>
                <div className="mt-12 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 justify-items-center">
                    <FeatureCard
                        title="Real-time Collaboration"
                        className="col-span-2"
                        description="Work together seamlessly with conflict-free editing"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    className="rounded-full"
                                    alt="Avatart 1"
                                />
                            </Avatar>
                            <Avatar className="z-30 -ml-6 border-indigo-500">
                                <Image
                                    src={avatar2}
                                    className="rounded-full"
                                    alt="Avatart 2"
                                />
                            </Avatar>
                            <Avatar className="z-20 -ml-6 border-amber-500">
                                <Image
                                    src={avatar3}
                                    className="rounded-full"
                                    alt="Avatart 3"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent overflow-visible">
  <div className="w-full h-full bg-neutral-700 rounded-full flex justify-center items-center gap-1">
    {Array.from({ length: 3 }).map((_, i) => (
      <span
        className="w-1.5 h-1.5 rounded-full bg-white"
        key={i}
      ></span>
    ))}
  </div>
</Avatar>

                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Design System"
                         className="col-span-2"
                        description="Create and manage design systems with ease"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">We&apos;ve achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> growth</p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Version Control"
                         className="col-span-2"
                        description="Keep track of changes and revert to previous versions"
                    >
                        <div className="aspect-video flex flex-col items-center justify-center gap-4">
                            <div className="">
                            <Key className="w-15">W</Key>
                            </div>
                            <div className=" flex items-center justify-center gap-4">
                            <Key className="w-15">A</Key>
                            <Key className="w-15">S</Key>
                            <Key className="w-15">D</Key>
                            </div>
                          
                        </div>

                    </FeatureCard>
                    <FeatureCard
                        title="Design System"
                         className="col-span-3"
                        description="Create and manage design systems with ease"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">We&apos;ve achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> growth</p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Design System"
                         className="col-span-3"
                        description="Create and manage design systems with ease"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">We&apos;ve achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> growth</p>
                        </div>
                    </FeatureCard>
                    </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center  justify-center">
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full flex items-center justify-center text-xl">&#10038;</span>
                            <span className="font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
