import React, { useState } from 'react'

import ProductInformation from './ProductInformation'
import ProductDescription from './ProductDescription'
import ProductReviews from './ProductReviews'


function DescriptionReview() {
    const [active, setActive] = useState('description')
    console.log(active)

    const tabBtn = [
        {
           action: "information",
           title : "Information"
        },
        {
            action: "description",
            title : "Description"
        },
        {
            action: "reviews",
            title : "Reviews (02)"
        },
    ]

    return (
        <section>
            <div className="container">
                <div className="h-60px flex justify-center rounded-[5px] bg-light-700 gap-x-2.5">

                    {
                        tabBtn.map((btn, index) => 
                        <button key={index} className={`text-sm md:text-lg leading-6 bg-transparent text-dark-400 font-semibold trns-1 py-18px px-2.5 md:px-5 hover:text-white hover:bg-primary-900 ${active === btn.action ? '!bg-primary-900 !text-white' : undefined}`} onClick={() => setActive(btn.action)}>{btn.title}</button>
                        )
                    }
                </div>
                <div className="pt-60px overflow-hidden">
                    <div className={`opacity-0 invisible trns-1 overflow-hidden h-0 ${active === 'information' ? '!visible !opacity-100 h-auto' : undefined}`}>
                        <ProductInformation />
                    </div>
                    <div className={`opacity-0 invisible trns-1 overflow-hidden h-0 ${active === 'description' ? '!visible !opacity-100 h-auto' : undefined}`}>
                        <ProductDescription />
                    </div>
                    <div className={`opacity-0 invisible trns-1 overflow-hidden h-0 ${active === 'reviews' ? '!visible !opacity-100 h-auto' : undefined}`}>
                        <ProductReviews />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DescriptionReview