import { SlRefresh } from 'react-icons/sl'
import { useState } from 'react'

import ShopTopBar from '../shopTopBar/ShopTopBar'
import ProductCard from '../productCard/ProductCard'
import ProductCardList from '../productCard/ProductCardList'

// images 
import productImg from '../../../public/img/products/1.jpg'




function Category(props) {
  const products = props.product
  const [viewType, setViewType] = useState('grid')

  function pViewHandler(value) {
    setViewType(value)
  }

  const showGridTab = viewType === 'grid' ? { visibility: 'visible', opacity: 1, height: 'auto' } : undefined
  const showlistTab = viewType === 'list' ? { visibility: 'visible', opacity: 1, height: 'auto' } : undefined

  return (
    <section className="py-60px lg:py-100px">
      <div className="container">
        <ShopTopBar pViewHandler={pViewHandler} viewTypeBtn={viewType} />
        {/* Grid View */}
        <div className="invisible overflow-hidden opacity-0 h-0 trns-1" style={showGridTab}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-30px">
            {
              products.map((product, index) => {
                  const { id, brand, rating, title, reviews, thumbnail, price, description, category, sku, images } = product

                  return <ProductCard key={index} id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
              })
            }        
          </div>
        </div>
        
        {/* List View */}
        <div className="invisible overflow-hidden opacity-0 h-0 trns-1" style={showlistTab}>
          <div className="gap-y-50px  grid">
            {
              products.map((product, index) => {
                  const { id, brand, rating, title, reviews, thumbnail, price, description, category, sku, images } = product

                  return <ProductCardList key={index} id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
              })
            }
          </div>
        </div>
        <div className="text-center mt-60px">
          <button className="btn-primary text-base font-bold leading-none w-[210px] h-[65px] ">Load More <SlRefresh className="inline-block ml-4" /> </button>
        </div>
      </div>
    </section>
  )
}

export default Category