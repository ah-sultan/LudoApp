import Image from 'next/image'
import { BsStarFill, BsHeart, BsSearch } from 'react-icons/bs'
import { SlRefresh } from 'react-icons/sl'
import QuickView from '../quickView/QuickView'
import { useState } from 'react'
// Images


function ProductCard(props) {
    const [showModal, setShowModal] = useState(false)

    function modalHandler(value) {
        setShowModal(value)
    }

  return (
    <>
        <div className="group w-full">
            {/* Product Images */}
            <div className="relative thumb">
                <a href="#" className="block overflow-hidden">
                    <Image src={props.img} alt="productImg" className="trns-1 group-hover:scale-110 group-hover:rotate-3"/>
                </a>
                <div className="badge absolute top-18px -left-0.5">
                    <span className="gradient-primary text-3 text-xs px-2 rounded-[3px] leading-[19px] text-white font-semibold mb-2.5 block">{props.discount}</span>
                    <span className="bg-black uppercase text-3 text-xs px-2 rounded-[3px] leading-[19px] text-white font-semibold mb-2.5 block">{props.new}</span>
                </div>
                <div className="absolute top-18px right-18px">
                    <a href="#" className="product-card-action">
                        <BsHeart className="text-xl"/>
                    </a>
                    <button type="button" onClick={() => modalHandler(true)} className="product-card-action translate-y-5 invisible opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
                        <BsSearch className="text-xl"/>
                    </button>
                    <a href="#" className="product-card-action translate-y-5 invisible opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
                        <SlRefresh className="text-xl"/>
                    </a>
                </div>
                <button className="btn-primary absolute left-0 right-0 bottom-0 mx-auto w-[60%] h-50px text-sm leading-[45px] invisible opacity-0 group-hover:visible group-hover:bottom-5 group-hover:opacity-100 trns-1">Add To Cart</button>
            </div>
            {/* Product Description */}
            <div className="content pt-30px">
                <div>
                    <BsStarFill className="inline-block text-sm mr-px text-accent-900"/>
                    <BsStarFill className="inline-block text-sm mr-px text-tGreay-50"/>
                    <BsStarFill className="inline-block text-sm mr-px text-tGreay-50"/>
                    <BsStarFill className="inline-block text-sm mr-px text-tGreay-50"/>
                    <BsStarFill className="inline-block text-sm mr-px text-tGreay-50"/>
                    <span className="inline-block text-sm leading-none text-tGreay-150 ml-1.5">( {props.review} Review)</span>
                </div>
                <h6 className="my-2.5">
                    <a href="#" className="text-base leading-1.2 font-normal text-dark-950 hover:!text-primary-900 group-hover:text-[#474747]">{props.title}</a>
                </h6>
                <div>
                <span className="text-base leading-none font-semibold text-dark-950">${props.price}</span>
                <span className="text-sm leading-none font-semibold line-through ml-2.5 text-tGreay-150">${props.discountPrice}</span>
                </div>
            </div>
            <QuickView modalHandler={modalHandler} showModal={showModal} product={props} />
        </>
    )
}

export default ProductCard