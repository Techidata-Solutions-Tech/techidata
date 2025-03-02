import Link from "next/link";
import WeArePartners from "../components/WeArePartners";
import Head from "next/head";

const Partners = () => {
  return (
    <>
      <Head>
        <title>Our Partners - Trusted Collaborations and Partnerships</title>
        <meta
          name="description"
          content="Explore our trusted partnerships and collaborations with leading companies. Learn more about the value we bring together with our partners."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.techidata.com/partners" />
      </Head>

      <div className="p-5 max-w-7xl mx-auto">
        <WeArePartners />
        <Cards />
      </div>
    </>
  );
};

export default Partners;

const Cards = () => {
 const aHeight = 310
 const bHeight = 280
 const cHeight = 330

  return (
    <div className="grid z-50 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
                style={{ height: `${index % 6 === 0? aHeight:index % 6 === 1? cHeight:index % 6 === 2? bHeight:index % 6 === 3? aHeight:index % 6 === 4? bHeight:index % 6 === 5? aHeight: cHeight}px`, objectFit: "cover" }}
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
