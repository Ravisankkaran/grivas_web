import React from 'react'
import Image  from 'next/image';
import Girl from '../../../public/assets/WhatsApp Image 2024-05-06 at 22.15.39_6e0b3b34.jpg' 
function Hero() {
  return (
    <div>
        
<section className=" p-5">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-12">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-start gap-y-10">
          <h1 className="text-4xl font-bold md:text-[45px] space-y-4">
            EXPLORE CUTTING EDGE <br />
            <div className=" text-[#FFA901]"> GADGETS</div>
          </h1>
          <p className="mt-2 text-sm md:text-[18px]">
            Witness the latest devices in smart home transformating<br/> the way{" "}
          </p>
          <button className=" shadow-2xl text-left text-lg md:text-sm text-white rounded-md bg-gradient-to-r from-yellow-200  to-orange-500 px-12 py-3 mt-10 ">
            Get started
          </button>{" "}
        </div>

        <div className="order-1 lg:order-2">
          <Image
            className="h-80 w-80 object-cover lg:w-[500px] lg:h-[600px]"
            src={Girl}
            alt=""
          />
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Hero
