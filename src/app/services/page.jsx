import React from 'react';
import Counter from '../components/Counter';
import HoverImageContainer from '../components/services/HoverimageList';
import Link from 'next/link';

const title1 = "Divya Pratap";
const description1 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolore quae ab amet aperiam eius provident, facilis vero, omnis doloribus deserunt eligendi impedit fugiat nam!";
const items1 = [
  { title: "Another Item 1", image: "/another-image1.jpg" },
  { title: "Another Item 2", image: "/another-image2.jpg" },
  { title: "Another Item 3", image: "/another-image3.jpg" },
  { title: "Another Item 4", image: "/another-image4.jpg" },
];

const Services = () => {
  return (
    <div className='max-w-7xl mx-auto px-5'>
      <div className="py-10">
        <div className="w-[180px] h-[40px] px-[25px] py-[12px] rounded-[47px] border border-opacity-50 border-white bg-cs-red text-white text-sm flex items-center justify-center">
          Your Digital Partner
        </div>

        <div className="w-[842px] max-w-full h-auto text-center md:text-left font-normal font-custom text-black my-5">
        <p style={{ fontFamily: 'Bagien'}} className="text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] md:text-[42px] md:leading-[60px] lg:text-[50px] lg:leading-[71px] tracking-[0%]">
          We are the partners you can Trust <br />
          to build your brand's online presence
        </p>
        </div>
      </div>
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

      <div className='grid md:grid-cols-2 gap-5 my-5'>
        <div className='flex flex-col gap-8'>
          <img src="https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__" alt="" className='w-full h-auto' />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum pariatur eveniet ipsa harum veritatis repellat, voluptate quod eligendi aliquid ipsum necessitatibus modi iste tenetur ut esse quaerat deserunt blanditiis similique?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum pariatur eveniet ipsa harum veritatis repellat, voluptate quod eligendi aliquid ipsum necessitatibus modi iste tenetur ut esse quaerat deserunt blanditiis similique?
          </p>
        </div>
        <HoverImageContainer title={title1} description={description1} items={items1} />
      </div>
      <Cards testimonials={testimonials.slice(0,3)}/>

    </div>
  );
};

export default Services;



const Cards = ({testimonials}) => {

  
    return (
      <div className="grid z-50 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
        {testimonials.map((testimonial, index) => {
          return (
            <Link href={testimonial.url} key={index} passHref>
              <div
                className="bg-white z-50 opacity-100 shadow-md border rounded-lg text-left flex flex-col justify-between"
                aria-labelledby={`partner-${index}`}
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} logo`}
                  className="w-full"
                  style={{ height: `${index === 0 ? 300 : index === 1 ? 350 : 320}px`, objectFit: "cover" }}
                />
                <div className="m-3">
                  <p className="text-xl font-bold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.type}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  
  const testimonials = [
    {
      name: "Divya Pratap",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
    {
      name: "Anurag Rai",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
    {
      name: "Vikas",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
    {
      name: "Divya Pratap",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
    {
      name: "Anurag Rai",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
    {
      name: "Vikas",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
    {
      name: "Divya Pratap",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
    {
      name: "Anurag Rai",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
    {
      name: "Vikas",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
    {
      name: "Divya Pratap",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
    {
      name: "Anurag Rai",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
    {
      name: "Vikas",
      image:
        "https://s3-alpha-sig.figma.com/img/d702/be02/7c391efa57f7914478b387e8b6f5db20?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM87QmPkJYzs0NODmMQ3B5bQIHDl0azcOHN3OQSOxKAM6gw6B8D6h1~QgZd71R0Nitz9WPcR-Q6Njdg-WYHSVu6MSn2qx~dH-3IoDXt3rP6Jq6NcT4ASf0QkCZN75hh~lp0anWum7pc-MYN4MS190HIRAmvrL3NB2l4QPDA2n~YhiTxDhr1jxxqezNifx1TJT1UGvnS3EyybY07KULH1Z3d8dmD0s10iYXzrfPzfGpob5LsYzTa~I4mgsJxNkk6T5dmXA0fRqZqVrWRHP64BrrNUptpXnutNxSR0wRBo-2P5Gflyqxxp-YCXhzy~ataDf82IJiVIDhg4GGaAZvMp7g__",
      type: "Ed-Tech Website",
      url: "#",
    },
  ];