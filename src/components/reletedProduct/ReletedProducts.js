import ProductCard from "../productCard/ProductCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css'

import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'


// images 
import productImg from '../../../public/img/products/1.jpg'


const ReletedProducts = (props) => {
  return (
    <>
        <section>
            <div className="container pb-100px">
                <h2 className="section-title text-center ">Related Products</h2>
                <div className="pt-60px">
                    <div className="group/btn relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop = {true}
                        navigation={{
                            prevEl : "#relatedSliderPrev",
                            nextEl : "#relatedSliderNext",
                        }}
                        breakpoints={{
                            479 : {
                                slidesPerView : 2
                            },
                            720 :{
                                slidesPerView : 3
                            },
                        
                            1200 : {
                                slidesPerView : 4
                            }
                        }}
                    >
                    {
                        props.product.map((product, index) => {
                            const { id, brand, rating, title, reviews, thumbnail, images, price, description, category, sku } = product
                            
                            return (
                                <SwiperSlide key={index}>
                                    <ProductCard  id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                </SwiperSlide>
                            )
                        })
                                    }
                        </Swiper>
                        <div>
                            <button className="slider-btn left-0 opacity-0  group-hover/btn:left-3 group-hover/btn:opacity-100  z-40" id="relatedSliderPrev">
                                <TfiAngleLeft/>
                            </button>
                            <button className="slider-btn right-0 opacity-0 group-hover/btn:right-3 group-hover/btn:opacity-100 z-40" id="relatedSliderNext">
                                <TfiAngleRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ReletedProducts