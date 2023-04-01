import ProductCard from "../productCard/ProductCard"

import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'


// images 
import productImg from '../../../public/img/products/1.jpg'

function Newarrivals() {
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
                        <div className="flex gap-x-6 px-3">
                            <ProductCard img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70"/>
                            <ProductCard img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70"/>
                            <ProductCard img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70"/>
                            <ProductCard img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70"/>
                        </div>
                        <div>
                            <button className="slider-btn left-0 opacity-0  group-hover/btn:left-3 group-hover/btn:opacity-100 ">
                                <TfiAngleLeft/>
                            </button>
                            <button className="slider-btn right-0 opacity-0 group-hover/btn:right-3 group-hover/btn:opacity-100">
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

export default Newarrivals