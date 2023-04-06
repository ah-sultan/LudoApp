import ProductCard from "../productCard/ProductCard"
import { BiRightArrowAlt } from 'react-icons/bi'



function Products(props) {

    const product = props.product.slice(0, 8);

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
                        <div className="grid grid-cols-4 gap-30px">
                            {
                                product.map((product) => {
                                    const { id, brand, rating, title, reviews, thumbnail, price, description, category, sku } = product

                                    return <ProductCard key={id} id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} />
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