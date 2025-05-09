import Tag from "../../components/HomePageComponents/Tag";
import figmsIcon from  '../../assets/images/figma-logo.svg';
import notionIcon from  '../../assets/images/notion-logo.svg';
import slackIcon from  '../../assets/images/slack-logo.svg';
import relumeIcon from  '../../assets/images/relume-logo.svg';
import framerIcon from  '../../assets/images/framer-logo.svg';
import githubIcon from  '../../assets/images/github-logo.svg';
import IntegrationColumns from "../../components/HomePageComponents/IntegrationColumns";


const integrations = [
    {
        name: "Figma",
        icon: figmsIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackIcon,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumeIcon,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerIcon,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
];
export type IntegrationType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container flex flex-col items-center">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                <div className="">
                    <div className="w-full flex lg:justify-start justify-center">
                <Tag>Our Tools</Tag>
                </div>
                <h2 className="text-4xl md:text-5xl md:leading-[55px] leading-[45px] font-medium mt-6 text-center lg:text-start">
                    Powering great ideas with next-gen tools, from{" "}
                    <span className="text-[#F3631F]">design</span> to <span className="text-[#F3631F]">deployment</span>.
                </h2>
                <p className="text-black/50 lg:text-start mt-4 text-lg text-center">
                    We use modern, reliable tools that streamline development
                    and elevate design. Everything we build is crafted for
                    performance, scalability, and polish.
                </p>
                </div>
                <div className="">
                <div className="h-[500px] lg:h-[800px] mt-8 overflow-hidden grid md:grid-cols-2 gap-4 [mask:linear(to_bottom,transparent,white_10%,white_90%, transparent)]">
                <IntegrationColumns integrations={integrations} />
                <IntegrationColumns reverse integrations={integrations.slice().reverse()} className="hidden md:flex"/>
                </div>
                </div>
                </div>
            </div>
        </section>
    );
}
