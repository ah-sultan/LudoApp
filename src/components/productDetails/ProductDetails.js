import Image from 'next/image'
import { useState } from 'react';

import {FaStar, FaRegHeart, FaFacebookF, FaTwitter, FaGoogle, FaInstagram} from 'react-icons/fa'
import {FiRefreshCw} from 'react-icons/fi'

// Swiper JS  
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";


// images
import img1 from '../../../public/img/pdetails/1.jpg'
import img2 from '../../../public/img/pdetails/2.jpg'
import img3 from '../../../public/img/pdetails/3.jpg'
import img4 from '../../../public/img/pdetails/4.jpg'


function Pdetails(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="py-100px">
        <div className="container">
            <div className="flex gap-x-6">
            {/* Images Section */}
                <div className="w-1/2">
                <div>
                    {/* Main Image Section */}
                    <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                    >
                        <SwiperSlide >
                            <Image src={img1} alt="img-1" width={500} height={500} className="w-full"/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={img2} alt="img-1" width={500} height={500} className="w-full"/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={img3} alt="img-1" width={500} height={500} className="w-full"/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={img3} alt="img-1" width={500} height={500} className="w-full"/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={img1} alt="img-1" width={500} height={500} className="w-full"/>
                        </SwiperSlide>

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
                     <SwiperSlide >
                            <Image src={img1} alt="img-1" width={500} height={500} className="w-full"/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={img2} alt="img-1" width={500} height={500} className="w-full"/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={img3} alt="img-1" width={500} height={500} className="w-full"/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={img3} alt="img-1" width={500} height={500} className="w-full"/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={img1} alt="img-1" width={500} height={500} className="w-full"/>
                        </SwiperSlide>
                </Swiper>
                </div>
                </div>

                {/* Text Section  */}
                <div className="w-1/2">
                <h4 className="text-30px leading-none font-semibold text-black mb-18px">Ardene Microfiber Tights</h4>
                <h6 className="text-primary-900 text-2xl leading-tight mb-5">$18.90</h6>
                {/* Reviews Section */}
                <div>
                    <div className="inline-flex gap-x-1.5 mr-3">
                    <FaStar className="text-accent-900 text-base leading-none"/>
                    <FaStar className="text-accent-900 text-base leading-none"/>
                    <FaStar className="text-accent-900 text-base leading-none"/>
                    <FaStar className="text-accent-900 text-base leading-none"/>
                    <FaStar className="text-accent-900 text-base leading-none"/>
                    </div>
                    <span className="text-base leading-none text-tGreay-150 font-normal">( 5 Customer Review )</span>
                </div>
                {/* Product types */}
                <div className={`${props.variable ? 'block' : 'hidden'}`} style={{display : 'none'}}>
                    {/* Colors */}
                    <div className="flex items-center mt-35px mb-15px">
                        <span className="text-lg leading-relaxed text-dark-300 inline-block min-w-[70px]">Color:</span>
                        <div>
                            {
                                props.variable ? props.color.map((color, id) => {
                                    return <button key={id} className={`w-[36px] h-[36px] rounded-full outline outline-offset-2 outline-solid outline-[#d9d9d9] outline-1 mr-2  hover:outline-primary-900 focus:outline-primary-900`} style={{background : color}}></button>
                                    }) :undefined
                            }
                        </div>
                    </div>
                    {/* Size */}
                    <div className="flex items-center mt-35px mb-15px">
                        <span className="text-lg leading-relaxed text-dark-300 inline-block min-w-[70px]">Size:</span>
                        <div>
                            {
                                props.variable ?props.size.map((size, id) => {
                                    return <button key={id} className={`w-[36px] h-[36px] bg-[#D6D6D6] rounded-full outline outline-offset-2 outline-solid outline-[#d9d9d9] outline-1 mr-2 text-base text-dark-300 uppercase font-bold hover:outline-primary-900 focus:outline-primary-900`}>{size}</button>
                                    }) : undefined
                            }
                        </div>
                    </div>
                </div>
                {/* Drescription section */}
                <p className="text-base leading-[30px] text-tGreay-300 font-light my-30px">Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo </p>
                {/* Button Section */}
                <div className="flex gap-x-2.5 mb-30px">
                    <div className="w-[80px] h-50px rounded-[5px] bg-dark-500 flex items-center justify-between px-2">
                    <button className="text-white text-lg leading-5 font-medium">-</button>
                    <input type="text" className="border-0 bg-transparent text-sm leading-[50px] max-w-[30px] text-white text-center font-normal" placeholder="0"/>
                    <button className="text-white text-lg leading-5 font-medium">+</button> 
                    </div>
                    <button className="px-35px rounded-[5px] h-50px bg-primary-900 text-white font-semibold text-sm leading-relaxed block uppercase hover:bg-black trns-1 tracking-widest">Add To Cart</button>
                    <button className="w-50px h-50px rounded-[5px] center-child bg-dark-400 text-white text-lg hover:bg-black trns-1"><FaRegHeart/></button>
                    <button className="w-50px h-50px rounded-[5px] center-child bg-dark-400 text-white text-lg hover:bg-black trns-1"><FiRefreshCw/></button>
                </div>
                {/* info section */}
                <p className="text-base leading-relaxed text-tGreay-200 font-bold">SKU <span className="font-normal text-tGreay-150 hover:text-primary-900">Ch-256xl</span></p>
                <p className="text-base leading-relaxed text-tGreay-200 font-bold my-2.5">Categories: <span className="font-normal text-tGreay-150 hover:text-primary-900">Fashion.eCommerce</span></p>
                {/* Share */}
                <div>
                    <span className="text-base leading-relaxed text-tGreay-200 font-bold">Share</span>
                    <div className="inline-flex gap-x-5 pl-6">
                    <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaFacebookF/></a>
                    <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaTwitter/></a>
                    <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaGoogle/></a>
                    <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaInstagram/></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pdetails