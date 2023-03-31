import ProductCard from "../productCard/ProductCard"
import {BiRightArrowAlt} from 'react-icons/bi'

// images 
import productImg from '../../../public/img/products/1.jpg'


function Products() {
  return (
    <>
    <section className="py-100px">
        <div className="container">
            <div className="text-center">
                <h2 className="section-title">#product</h2>
            </div>
            <div className="flex items-center justify-center gap-x-2.5 mt-25px mb-60px">
                <button className="product-tab-btn active">All</button>
                <button className="product-tab-btn active">New</button>
                <button className="product-tab-btn active">Man</button>
                <button className="product-tab-btn active">Women</button>
                <button className="product-tab-btn active">KIds</button>
            </div>
            <div>
                <div className="flex gap-x-6">
                    <ProductCard img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70"/>
                    <ProductCard img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70"/>
                    <ProductCard img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70"/>
                    <ProductCard img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70"/>
                </div>
            </div>
            <div className="text-center mt-60px">
                <button className="btn-primary  w-[210px] h-[65px] font-bold center-child mx-auto gap-x-15px">Load More <BiRightArrowAlt className="inline-block text-xl"/></button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Products