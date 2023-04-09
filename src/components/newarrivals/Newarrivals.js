import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'
import ProductCard from "../productCard/ProductCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css'


function Newarrivals(props) {
    const product = props.product.slice(0, 6);

    return (
        <>
            <section className="pb-100px">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <h2 className="section-title mb-11px">#newarrivals</h2>
                        <div className="flex gap-x-50px">
                            <button className="product-tab-list-btn">All</button>
                            <button className="product-tab-list-btn">New</button>
                            <button className="product-tab-list-btn">Best Sellers</button>
                            <button className="product-tab-list-btn">Item Sale</button>
                        </div>
                    </div>
                    <div className="border-t border-[#ececec] pt-60px">
                        <div className="group/btn relative">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={30}
                                    slidesPerView={4}
                                    loop = {true}
                                    navigation={{
                                        prevEl : "#newArrivalsSliderPrev",
                                        nextEl : "#newArrivalsSliderNext",
                                    }}
                                >
                                {
                                    product.map((product) => {
                                        const { id, brand, rating, title, reviews, thumbnail, images, price, description, category, sku } = product
                                           
                                        return (
                                            <SwiperSlide key={id}>
                                                <ProductCard  id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
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