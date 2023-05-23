import Image from 'next/image'
import { useState, useEffect } from 'react';

import { FaStar, FaRegHeart, FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa'
import { FiRefreshCw } from 'react-icons/fi'

// Swiper JS  
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Redux features
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decraseItemQuantity } from '@/feature/cart/cartSlice';

function Pdetails(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const product = props.product
    const images = product.images
    const mainPrice = parseInt(product.price)
    const discountPrice = mainPrice - 10 / 100
    const rate = Math.floor(product.rating)

    // redux features 
    const dispatch = useDispatch()
    const cartQuantity = useSelector((data) => data.cart.items)
    const [Getquantity] = cartQuantity.filter((data) => data.id === product.id)
    const quantity = Getquantity === undefined ? 0 : Getquantity.quantity
    
    const cartItems = {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,

    }

    const addToCartHandler = () => {
        dispatch(addToCart(cartItems))
    }



    return (
        <section className="py-60px lg:py-20 xl:py-100px">
            <div className="container">
                <div className="flex flex-col lg:flex lg:flex-row gap-y-30px gap-x-6">
                    {/* Images Section */}
                    <div className="lg:w-1/2">
                        <div>
                            {/* Main Image Section */}
                            <Swiper
                                spaceBetween={10}
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"

                            >
                                {
                                    images.map((image, index) =>
                                        <SwiperSlide key={index}>
                                            <Image src={image} alt="products" className="w-full" width={300} height={350} />
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>
                        {/* Thumb Images */}
                        <div className="w-[95%] mx-auto mt-6">
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
                                            <Image src={image} alt="img-1" width={500} height={500} className="w-full" />
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>
                    </div>
                    {/* Text Section  */}
                    <div className="lg:w-1/2">
                        <h4 className="text-2xl md:text-30px leading-normal font-semibold text-black mb-18px capitalize">{product.title}</h4>
                        <h6 className="text-primary-900 text-2xl leading-tight mb-5">${mainPrice.toFixed(2)} <del className="text-lg text-tGreay-300">${discountPrice.toFixed(2)}</del></h6>
                        {/* Reviews Section */}
                        <div>
                            <div className="inline-flex gap-x-1.5 mr-3">
                                {
                                    Array(rate).fill().map((_, id) => <FaStar key={id} className="text-accent-900 text-base leading-none" />)
                                }

                                {
                                    Array(5 - rate).fill().map((_, id) => <FaStar key={id} className="text-tGreay-100 text-base leading-none" />)
                                }
                            </div>
                            <span className="text-sm md:text-base leading-none text-tGreay-150 font-normal">( {product.reviews} Customer Review )</span>
                        </div>

                        {/* Product Colors */}
                        <div className="flex items-center mt-35px mb-15px">
                            <span className="text-lg leading-relaxed font-semibold text-dark-300 inline-block min-w-[70px]">Color:</span>
                            <div>
                                {
                                    props.variable ? product.colorHex.map((color, id) => {
                                        return <button key={id} className={`w-[36px] h-[36px] rounded-full outline outline-offset-2 outline-solid outline-[#d9d9d9] outline-1 mr-2  hover:outline-primary-900 focus:outline-primary-900`} style={{ background: color }}></button>
                                    }) : undefined
                                }
                            </div>
                        </div>
                        {/* Product Size */}
                        <div className="flex items-center mt-35px mb-15px">
                            <span className="text-lg leading-relaxed font-semibold text-dark-300 inline-block min-w-[70px]">Size:</span>
                            <div>
                                {
                                    props.variable ? product.size.map((size, id) => {
                                        return <button key={id} className={`w-[36px] h-[36px] bg-[#D6D6D6] rounded-full outline outline-offset-2 outline-solid outline-[#d9d9d9] outline-1 mr-2 text-base text-dark-300 uppercase font-bold hover:outline-primary-900 focus:outline-primary-900`}>{size}</button>
                                    }) : undefined
                                }
                            </div>
                        </div>

                        {/* Drescription section */}
                        <p className="text-base leading-[30px] text-tGreay-300 font-light my-30px">{product.description}</p>

                        {/* Button Section */}
                        <div className="flex gap-x-2 sm:gap-x-2.5 mb-30px">
                            <div className="w-70px md:w-20 h-50px rounded-[5px] bg-dark-500 flex items-center justify-between px-2">
                                <button onClick={() => dispatch(decraseItemQuantity(product.id))} type="button" className="text-white text-lg leading-5 font-medium">-</button>
                                <div className="border-0 bg-transparent text-sm leading-[50px] max-w-[30px] text-white text-center font-normal">{quantity}</div>
                                <button onClick={addToCartHandler} type="button" className="text-white text-lg leading-5 font-medium">+</button>
                            </div>
                            {/* Add To Cart Button */}
                            <button onClick={addToCartHandler} className="px-2.5 sm:px-35px rounded-[5px] h-50px bg-primary-900 text-white font-semibold text-[12px] sm:text-sm leading-relaxed block uppercase hover:bg-black trns-1 tracking-widest">Add To Cart</button>
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
        </section>
    )
}

export default Pdetails