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
          <div className="flex h-[800px] items-center">
            <div className="w-5/12">
              <span className="hero-ctg">Offer 2021</span>
              <h2 className="hero-title-1">Sale Up to</h2>
              <h2 className="hero-title-2">50% OFF</h2>
              <button className="btn-primary h-[65px] w-[210px] font-bold items-center flex justify-center">shop Now <RiShoppingBasket2Line className="ml-15px text-lg" /></button>

            </div>
            <div className="w-7/12">
              <div className="text-center relative">
                <Image src={heroImg1} alt="her img" className="inline-block" />
                <div className="hero-card">
                  <div>
                    <h3 className="text-21px font-semibold text-tGreay-700">Full Dress</h3>
                    <span className="block text-lg leading-relaxed font-bold text-tGreay-650 text-left">$21.00</span>
                    <a href="#" className="text-primary-900 underline block mt-auto text-15px capitalize text-left">shop now</a>
                  </div>
                  <Image src={productImg1} alt="Product 1" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero