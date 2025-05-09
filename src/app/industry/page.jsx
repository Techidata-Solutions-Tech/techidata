import React from 'react'
import Features from '../components/industry/Features'
import Services from '../components/industry/Services'
import CountSection from '../components/industry/CountSection'
import Faqs from '../components/home/Faqs'
import Image from 'next/image'
import HeroSection from '../components/industry/Hero'

const Page = () => {
  return (
    <div className='pt-[6rem]'>
      <HeroSection/>
    <Features/>
    <Services/>
  
<div className="relative w-full aspect-[1512/532] my-10">
      <Image
        src="/about/hero2.png"
        alt="Banner"
        fill
        className="object-cover"
      />
  
    </div>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-500'>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </div>
    <div className="bg-black">
    <CountSection/>

</div> 
<Faqs/>
    </div>
  )
}

export default Page