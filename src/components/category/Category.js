import { SlRefresh } from 'react-icons/sl'
import { useState } from 'react'

import ShopTopBar from '../shopTopBar/ShopTopBar'
import ProductCard from '../productCard/ProductCard'
import ProductCardList from '../productCard/ProductCardList'

// images 
import productImg from '../../../public/img/products/1.jpg'




function Category() {
  const [viewType, setViewType] = useState('grid')

  function pViewHandler(value) {
    setViewType(value)
  }

  const showGridTab = viewType === 'grid' ? { visibility: 'visible', opacity: 1, height: 'auto' } : undefined
  const showlistTab = viewType === 'list' ? { visibility: 'visible', opacity: 1, height: 'auto' } : undefined

  return (
    <section className="py-100px">
      <div className="container">
        <ShopTopBar pViewHandler={pViewHandler} viewTypeBtn={viewType} />
        {/* Grid View */}
        <div className="grid-cols-4 gap-30px  grid invisible opacity-0 h-0 trns-1" style={showGridTab}>
          {Array(12).fill(<ProductCard img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70" />)}
        </div>
        {/* List View */}
        <div className="gap-y-50px  grid invisible opacity-0 h-0 trns-1" style={showlistTab}>
          {Array(12).fill(<ProductCardList img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70" description="More room to move.With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or.." />)}
        </div>
        <div className="text-center mt-60px">
          <button className="btn-primary text-base font-bold leading-none w-[210px] h-[65px] ">Load More <SlRefresh className="inline-block ml-4" /> </button>
        </div>
      </div>
    </section>
  )
}

export default Category