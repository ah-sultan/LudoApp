import React from 'react'

import ProductInformation from './ProductInformation'
import ProductDescription from './ProductDescription'
import ProductReviews from './ProductReviews'


function DescriptionReview() {
  return (
   <section className="pb-100px">
    <div className="container">
        <div className="h-60px flex justify-center rounded-[5px] bg-light-700 gap-x-2.5">
            <button className="text-lg leading-6 bg-transparent text-dark-400 font-semibold trns-1 py-18px px-5 hover:text-white hover:bg-primary-900">Information</button>
            <button className="text-lg leading-6 bg-transparent text-dark-400 font-semibold trns-1 py-18px px-5 hover:text-white hover:bg-primary-900">Description</button>
            <button className="text-lg leading-6 bg-transparent text-dark-400 font-semibold trns-1 py-18px px-5 hover:text-white hover:bg-primary-900">Reviews (02)</button>
        </div>
        <div className="pt-60px">
            <div className="hidden">
                <ProductInformation/>
            </div>
            <div className="hidden">
                <ProductDescription/>
            </div>
            <div className="block">
                <ProductReviews/>
            </div>
        </div>
    </div>
   </section>
  )
}

export default DescriptionReview