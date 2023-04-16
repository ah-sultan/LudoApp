import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import logo1 from '../../../public/img/brand/1.png'
import logo2 from '../../../public/img/brand/2.png'
import logo3 from '../../../public/img/brand/3.png'
import logo4 from '../../../public/img/brand/4.png'
import logo5 from '../../../public/img/brand/5.png'

const brandLogos = [logo1, logo2, logo3, logo4, logo5, logo1, logo2, logo3,]

function Brand() {
  return (
    <>
        <section>
            <div className="container">
              <Swiper
                loop={true}
                slidesPerView={2}
                speed= {1500}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,

                }}
                breakpoints={{
                  720 :{slidesPerView : 3},
                  960 : {slidesPerView : 4},
                  1200 : {slidesPerView : 5},
                }}
              >
                {
                  brandLogos.length > 0 ? brandLogos.map((logo, index) => (
                    <SwiperSlide key={index} className="justify-between">
                      <a href="#" className="block text-center">
                          <Image src={logo} alt="Brand logo" className="trns-1 grayscale hover:grayscale-0 mx-auto"/>
                      </a>                   
                    </SwiperSlide>
                  )):undefined
                  
                }
              </Swiper>
            </div>
        </section>
    </>
  )
}

export default Brand