import Image from 'next/image'
import Link from 'next/link'
import { BsStarFill, BsHeart, BsSearch } from 'react-icons/bs'
import { SlRefresh } from 'react-icons/sl'
import { useState } from 'react'


// Redux Feature
import { useDispatch } from 'react-redux'
import { showQuickView } from '@/feature/quickView/quickViewSlice'
import { addToCart } from '@/feature/cart/cartSlice'

function ProductCard(props) {


    const mainPrice = parseInt(props.price)
    const discountPrice = mainPrice - 10 / 100
    const getRating = parseInt(props.rating)
    const rating = getRating > 5 ? 5 : Math.floor(getRating)
    //Redux Feature    
    const dispatch = useDispatch()

    const cartItems = {
        id: props.id,
        title: props.title,
        thumbnail: props.thumbnail,
        price: props.price
    }
    const addToCartHandler = () => {
        dispatch(addToCart(cartItems))
    }

    return (
        <>
            <div className="group w-full">
                {/* Product Images */}
                <div className="relative thumb">
                    <Link href="#" className="block overflow-hidden">
                        <Image width={320} height={100} src={props.thumbnail} alt="productImg" className="w-full trns-1 group-hover:scale-110 group-hover:rotate-3" />
                    </Link>
                    <div className="badge absolute top-18px -left-0.5">
                        <span className="gradient-primary text-3 text-xs px-2 rounded-[3px] leading-[19px] text-white font-semibold mb-2.5 block">{props.brand}</span>
                        <span className="bg-black uppercase text-3 text-xs px-2 rounded-[3px] leading-[19px] text-white font-semibold mb-2.5 block">-10%</span>
                    </div>
                    <div className="absolute top-18px right-18px">
                        <button type="button" className="product-card-action">
                            <BsHeart className="text-xl" />
                        </button>
                        <button type="button" onClick={() => dispatch(showQuickView(props))} className="product-card-action xl:translate-y-5 xl:invisible xl:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
                            <BsSearch className="text-xl" />
                        </button>
                        <button type="bu" className="product-card-action xl:translate-y-5 xl:invisible xl:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
                            <SlRefresh className="text-xl" />
                        </button>
                    </div>
                    <button onClick={addToCartHandler} className="btn-primary absolute left-0 right-0 bottom-0 mx-auto w-[60%] h-50px text-sm leading-[45px] invisible opacity-0 group-hover:visible group-hover:bottom-5 group-hover:opacity-100 trns-1">Add To Cart</button>
                </div>
                {/* Product Description */}
                <div className="content pt-30px">
                    <div>
                        {
                            Array(rating).fill().map((_, id) => < BsStarFill key={id} className="inline-block text-sm mr-px text-accent-900" />)
                        }
                        {
                            Array(5 - rating).fill().map((_, id) => <BsStarFill key={id} className="inline-block text-sm mr-px text-tGreay-50" />)
                        }
                        <span className="inline-block text-sm leading-none text-tGreay-150 ml-1.5">( {props.reviews} Review)</span>
                    </div>
                    <h6 className="my-2.5">
                        <Link href={`/shop/[cetagory]/[id]`} as={`/shop/${props.category}/${props.id}`} className="text-base leading-1.2 font-medium !capitalize text-dark-950 hover:!text-primary-900 group-hover:text-[#474747]">{props.title}</Link>
                    </h6>
                    <div>
                        <span className="text-base leading-none font-semibold text-dark-950">${mainPrice.toFixed(2)}</span>
                        <span className="text-sm leading-none font-semibold line-through ml-2.5 text-tGreay-150">${discountPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard