import Image from 'next/image'
import { memo, useState } from 'react';
import Offcanvas from '../offcanvas/Offcanvas'


// React Icons 
import { FaStar, FaRegHeart, FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa'
import { FiRefreshCw } from 'react-icons/fi'

// Swiper JS  
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";


function QuickView(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const product = props.product
  const images = product.images

  return (
    <>
    <Offcanvas display={props.showModal ? 'block' : undefined}/>
      <div className={`fixed left-0 right-0 top-0 bottom-0 z-[120] w-full h-full overflow-scroll ${props.showModal ? 'block' : 'hidden'}`}>
        <div className="absolute z-[-1] w-full h-full top-0 bottom-0 left-0 right-0" onClick={() => props.modalHandler(false)}>
        </div>
        <div className="w-[960px] mx-auto p-[35px] mb-100px">
          <div className="p-4 bg-white flex rounded  gap-x-6">
            {/* Images Section */}
            <div className="w-1/2">
              <div>
                {/* Main Image Section */}
                <Swiper
                   spaceBetween={10}
                   thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                   modules={[FreeMode, Navigation, Thumbs]}
                   className="mySwiper2"
                  
                >
                  {
                    images.map((image, index) => 
                    <SwiperSlide key={index}>
                      <Image src={image} alt="products"/>
                    </SwiperSlide>
                  )
                  }
                </Swiper>
              </div>
              {/* Thumb Images */}
              <div className="px-2 mt-6">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"

              >
                  {
                    images.map((image, index) => 
                      <SwiperSlide key={index}>
                        <Image src={image} alt="img-1" width={500} height={500} className="w-full"/>
                      </SwiperSlide>
                    )
                  }
                </Swiper>
              </div>
            </div>
            {/* Text Section  */}
            <div className="w-1/2">
              <h4 className="text-30px leading-none font-semibold text-black mb-18px">{product.title}</h4>
              <h6 className="text-primary-900 text-2xl leading-tight mb-5">${product.price}</h6>
              {/* Reviews Section */}
              <div>
                <div className="inline-flex gap-x-1.5 mr-3">
                  <FaStar className="text-accent-900 text-base leading-none" />
                  <FaStar className="text-accent-900 text-base leading-none" />
                  <FaStar className="text-accent-900 text-base leading-none" />
                  <FaStar className="text-accent-900 text-base leading-none" />
                  <FaStar className="text-accent-900 text-base leading-none" />
                </div>
                <span className="text-base leading-none text-tGreay-150 font-normal">( {product.reviews} Customer Review )</span>
              </div>
              {/* Drescription section */}
              <p className="text-base leading-[30px] text-tGreay-300 font-light my-30px">{product.description}</p>
              {/* Button Section */}
              <div className="flex gap-x-2.5 mb-30px">
                <div className="w-[80px] h-50px rounded-[5px] bg-dark-500 flex items-center justify-between px-2">
                  <button className="text-white text-lg leading-5 font-medium">-</button>
                  <input type="text" className="border-0 bg-transparent text-sm leading-[50px] max-w-[30px] text-white text-center font-normal" placeholder="0" />
                  <button className="text-white text-lg leading-5 font-medium">+</button>
                </div>
                <button className="px-35px rounded-[5px] h-50px bg-primary-900 text-white font-semibold text-sm leading-relaxed block uppercase hover:bg-black trns-1 tracking-widest">Add To Cart</button>
                <button className="w-50px h-50px rounded-[5px] center-child bg-dark-400 text-white text-lg hover:bg-black trns-1"><FaRegHeart /></button>
                <button className="w-50px h-50px rounded-[5px] center-child bg-dark-400 text-white text-lg hover:bg-black trns-1"><FiRefreshCw /></button>
              </div>
              {/* info section */}
              <p className="text-base leading-relaxed text-tGreay-200 font-bold">SKU <span className="font-normal text-tGreay-150 hover:text-primary-900">{product.sku}</span></p>
              <p className="text-base leading-relaxed text-tGreay-200 font-bold my-2.5">Categories: <span className="font-normal text-tGreay-150 hover:text-primary-900">{product.category}</span></p>
              {/* Share */}
              <div>
                <span className="text-base leading-relaxed text-tGreay-200 font-bold">Share</span>
                <div className="inline-flex gap-x-5 pl-6">
                  <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaFacebookF /></a>
                  <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaTwitter /></a>
                  <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaGoogle /></a>
                  <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaInstagram /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(QuickView)