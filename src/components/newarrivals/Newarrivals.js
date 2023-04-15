import { useState } from 'react';

import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'
import ProductCard from "../productCard/ProductCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css'

const responsiveSlider = {
    479 : {
        slidesPerView : 2
    },
    720 :{
        slidesPerView : 3
    },

    1200 : {
        slidesPerView : 4
    }
}

function Newarrivals(props) {
    const product = props.product.slice(0, 6);
    const [active, setActive] = useState('All')
    
    const showTab = {
            visibility : "visible",
            opacity : "1",
            height : "auto"
    }


    return (
        <>
            <section className="pb-60px lg:pb-80px xl:pb-100px">
                <div className="container">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h2 className="section-title mb-11px">#newarrivals</h2>
                        <div className="flex gap-x-25px md:gap-x-50px mt-2 md:mt-0">
                            <button className={`product-tab-list-btn ${active === "All" ? 'active' :undefined}`} onClick={() => setActive('All')}>All</button>
                            <button className={`product-tab-list-btn ${active === "New" ? 'active' :undefined}`} onClick={() => setActive('New')}>New</button>
                            <button className={`product-tab-list-btn ${active === "BestSellers" ? 'active' :undefined}`} onClick={() => setActive('BestSellers')}>Best Sellers</button>
                            <button className={`product-tab-list-btn ${active === "ItemSale" ? 'active' :undefined}`} onClick={() => setActive('ItemSale')}>Item Sale</button>
                        </div>
                    </div>
                    <div className="border-t border-[#ececec] pt-60px">
                        <div className="group/btn relative">
                                <div className="invisible opacity-0 overflow-hidden h-0" style={active === "All"? showTab : undefined}>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    loop = {true}
                                    navigation={{
                                        prevEl : "#newArrivalsSliderPrev",
                                        nextEl : "#newArrivalsSliderNext",
                                    }}
                                    breakpoints={responsiveSlider}
                                >
                                {
                                    product.map((product, index) => {
                                        const { id, brand, rating, title, reviews, thumbnail, images, price, description, category, sku } = product
                                           
                                        return (
                                            <SwiperSlide key={index}>
                                                <ProductCard  id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                                </Swiper>
                                </div>
                                <div className="invisible opacity-0 overflow-hidden h-0" style={active === "New"? showTab : undefined}>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop = {true}
                                        navigation={{
                                            prevEl : "#newArrivalsSliderPrev",
                                            nextEl : "#newArrivalsSliderNext",
                                        }}

                                        breakpoints={responsiveSlider}
                                    >
                                {
                                    product.map((product, index) => {
                                        const { id, brand, rating, title, reviews, thumbnail, images, price, description, category, sku } = product
                                           
                                        return (
                                            <SwiperSlide key={index}>
                                                <ProductCard  id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                                </Swiper>
                                </div>
                                <div className="invisible opacity-0 overflow-hidden h-0" style={active === "BestSellers"? showTab : undefined}>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop = {true}
                                        navigation={{
                                            prevEl : "#newArrivalsSliderPrev",
                                            nextEl : "#newArrivalsSliderNext",
                                        }}
                                        breakpoints={responsiveSlider}
                                    >
                                    {
                                        product.map((product, index) => {
                                            const { id, brand, rating, title, reviews, thumbnail, images, price, description, category, sku } = product
                                            
                                            return (
                                                <SwiperSlide key={index}>
                                                    <ProductCard  id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                    </Swiper>
                                </div>
                                <div className="invisible opacity-0 overflow-hidden h-0" style={active === "ItemSale"? showTab : undefined}>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop = {true}
                                        navigation={{
                                            prevEl : "#newArrivalsSliderPrev",
                                            nextEl : "#newArrivalsSliderNext",
                                        }}

                                        breakpoints={responsiveSlider}
                                    >
                                    {
                                        product.map((product, index) => {
                                            const { id, brand, rating, title, reviews, thumbnail, images, price, description, category, sku } = product
                                            
                                            return (
                                                <SwiperSlide key={index}>
                                                    <ProductCard  id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                    </Swiper>
                                </div>
                            <div>
                                <button className="slider-btn left-0 opacity-0 z-50  group-hover/btn:left-3 group-hover/btn:opacity-100 " id="newArrivalsSliderPrev">
                                    <TfiAngleLeft />
                                </button>
                                <button className="slider-btn right-0 opacity-0 z-50 group-hover/btn:right-3 group-hover/btn:opacity-100" id="newArrivalsSliderNext">
                                    <TfiAngleRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newarrivals