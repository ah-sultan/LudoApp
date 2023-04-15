import Image from 'next/image'
import { BsStarFill, BsHeart, BsSearch } from 'react-icons/bs'
import { SlRefresh } from 'react-icons/sl'
import QuickView from '../quickView/QuickView'
import { useState } from 'react'
// Images


function ProductCardList(props) {
    const [showModal, setShowModal] = useState(false)
    const rating = Math.floor(props.rating)


    function modalHandler(value) {
        setShowModal(value)
    }
    console.log(showModal)
    return (
        <>
            <div className="w-full flex flex-col md:flex-row gap-y-8 gap-x-7">
                {/* Product Images */}
                <div className="md:w-5/12 lg:w-4/12">
                    <div className="relative thumb">
                        <a href="#" className="block overflow-hidden">
                            <Image src={props.thumbnail} alt="productImg" className="trns-1 group-hover:scale-110 group-hover:rotate-3 w-full" />
                        </a>
                        <div className="badge absolute top-18px -left-0.5">
                            <span className="gradient-primary text-3 text-xs px-2 rounded-[3px] leading-[19px] text-white font-semibold mb-2.5 block">{props.discount}</span>
                            <span className="bg-black uppercase text-3 text-xs px-2 rounded-[3px] leading-[19px] text-white font-semibold mb-2.5 block">{props.new}</span>
                        </div>
                    </div>
                </div>
                {/* Product Description */}
                <div className="md:w-7/12 lg:w-8/12">
                    <div className="flex">
                        {
                            Array(rating).fill().map((_, id) => < BsStarFill key={id} className="inline-block text-sm mr-px text-accent-900" />)
                        }
                        {
                            Array(5 - rating).fill().map((_, id) => <BsStarFill key={id} className="inline-block text-sm mr-px text-tGreay-50" />)
                        }
                        <span className="inline-block text-sm leading-none text-tGreay-150 ml-1.5">( {props.reviews} Review)</span>
                    </div>
                    <h6 className="mb-2.5 mt-3.5">
                        <a href="#" className="text-lg leading-1.2 font-normal text-dark-950 hover:!text-primary-900 group-hover:text-[#474747]">{props.title}</a>
                    </h6>
                    <p className="text-sm leading-6 text-[#6c6c6c] mb-5 line-clamp-2">{props.description}</p>
                    <div>
                        <span className="text-base leading-none font-semibold text-dark-950">${props.price}</span>
                        <span className="text-sm leading-none font-semibold line-through ml-2.5 text-tGreay-150">${props.price - 10 / 100}</span>
                    </div>

                    <div className="flex mt-5 gap-x-2.5">
                        <a href="#" className="product-card-action bg-[#d6d6d6]">
                            <BsHeart className="text-xl" />
                        </a>
                        <button type="button" onClick={() => modalHandler(true)} className="product-card-action bg-[#d6d6d6]">
                            <BsSearch className="text-xl" />
                        </button>
                        <a href="#" className="product-card-action bg-[#d6d6d6]">
                            <SlRefresh className="text-xl" />
                        </a>
                    </div>
                    <button className="btn-primary mt-30px w-[170px] h-50px text-sm leading-[45px] trns-1">Add To Cart</button>
                </div>
            </div>
            <QuickView modalHandler={modalHandler} showModal={showModal} product={props}/>
        </>
    )
}

export default ProductCardList