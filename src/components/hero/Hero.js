import Image from 'next/image'

import { RiShoppingBasket2Line } from 'react-icons/ri'

// Images 
import heroImg1 from '../../../public/img/hero/slider-1.webp'
import productImg1 from '../../../public/img/hero/display-image.webp'

function Hero() {
  return (
    <>
      <section className="bg-primary-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row h-[780px] sm:h-[470px] md:h-[600px] lg:h-[850px] items-center justify-center sm:justify-between">
            {/* Content Section */}
            <div className="text-center sm:text-left md:w-6/12 lg:w-7/12 xl:w-5/12">
              <span className="hero-ctg">Offer 2021</span>
              <h2 className="hero-title-1">Sale Up to</h2>
              <h2 className="hero-title-2">50% OFF</h2>
              <button className="btn-primary h-50px w-[150px] md:h-[65px] md:w-[210px] font-bold items-center flex justify-center">shop Now <RiShoppingBasket2Line className="ml-15px text-lg" /></button>
            </div>
            {/* Image Section */}
            <div className="sm:w-6/12 lg:w-5/12 xl:w-7/12 mt-50px sm:mt-0">
              <div className="text-center xl:text-right relative">
                <Image src={heroImg1} alt="her img" className="inline-block max-w-[300px] sm:max-w-full" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero