import { useState } from "react";
import ProductCard from "../productCard/ProductCard"
import { BiRightArrowAlt } from 'react-icons/bi'


function Products(props) {
    const product = props.product.slice(0, 8);
    const [active, setActive] = useState('All')

    const showTab = {
        visibility: "visible",
        opacity: "1",
        height: "auto"
    }

    return (
        <>
            <section className="py-60px lg:py-20 xl:py-100px">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title">#product</h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-x-2.5 mt-30px md:mt-25px mb-10 md:mb-60px">
                        <button className={`product-tab-btn ${active === "All" ? "active" : undefined}`} onClick={(e) => setActive('All')}>All</button>
                        <button className={`product-tab-btn ${active === "New" ? "active" : undefined}`} onClick={(e) => setActive('New')}>New</button>
                        <button className={`product-tab-btn ${active === "Men" ? "active" : undefined}`} onClick={(e) => setActive('Men')}>Man</button>
                        <button className={`product-tab-btn ${active === "Women" ? "active" : undefined}`} onClick={(e) => setActive('Women')}>Women</button>
                        <button className={`product-tab-btn ${active === "Kids" ? "active" : undefined}`} onClick={(e) => setActive('Kids')}>Kids</button>
                    </div>
                    <div>
                        <div className="grid gap-y-30px xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-30px trns-1 i invisible opacity-0 overflow-hidden h-0" style={active === "All" ? showTab : undefined}>
                            {
                                product.map((product, index) => {
                                    const { id, brand, rating, title, reviews, thumbnail, price, description, category, sku, images } = product

                                    return <ProductCard key={index} id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                })
                            }
                        </div>
                        <div className="grid gap-y-30px xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-30px trns-1 i invisible opacity-0 overflow-hidden h-0" style={active === "New" ? showTab : undefined}>
                            {
                                product.map((product, index) => {
                                    const { id, brand, rating, title, reviews, thumbnail, price, description, category, sku, images } = product

                                    return <ProductCard key={index} id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                })
                            }
                        </div>
                        <div className="grid gap-y-30px xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-30px trns-1 i invisible opacity-0 overflow-hidden h-0" style={active === "Men" ? showTab : undefined}>
                            {
                                product.map((product, index) => {
                                    const { id, brand, rating, title, reviews, thumbnail, price, description, category, sku, images } = product

                                    return <ProductCard key={index} id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                })
                            }
                        </div>
                        <div className="grid gap-y-30px xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-30px trns-1 i invisible opacity-0 overflow-hidden h-0" style={active === "Women" ? showTab : undefined}>
                            {
                                product.map((product, index) => {
                                    const { id, brand, rating, title, reviews, thumbnail, price, description, category, sku, images } = product

                                    return <ProductCard key={index} id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                })
                            }
                        </div>
                        <div className="grid gap-y-30px xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-30px trns-1 i invisible opacity-0 overflow-hidden h-0" style={active === "Kids" ? showTab : undefined}>
                            {
                                product.map((product, index) => {
                                    const { id, brand, rating, title, reviews, thumbnail, price, description, category, sku, images } = product

                                    return <ProductCard key={index} id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                })
                            }
                        </div>
                    </div>
                    <div className="text-center mt-60px">
                        <button className="btn-primary  w-[210px] h-[65px] font-bold center-child mx-auto gap-x-15px">Load More <BiRightArrowAlt className="inline-block text-xl" /></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
