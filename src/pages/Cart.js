
import Image from "next/image"
import Meta from "@/components/meta/Meta"
import { useEffect, useState } from "react"

import Breadcrumb from "@/components/breadcrumb/Breadcrumb"

// Redux Features
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, incraseItemQuantity, clearCart, decraseItemQuantity } from "@/feature/cart/cartSlice"
import Link from "next/link"

function CartCard(props) {

  const dispatch = useDispatch()

  const title = props.title
  const image = props.thumbnail
  const price = parseInt(props.price)
  const quantity = props.quantity
  const totalPrice  = price * quantity
  const size = "xl"


  return (
    <div className="flex items-center w-full mb-6 pb-6 border-b border-tGreay-100">
      <div className="rounded overflow-hidden basis-[20%]">
        <Image src={image} width={150} height={300} />
      </div>
      <div className="pl-4 md:pl-6 basis-[80%]">
        <div className="flex justify-between items-center">
          <h5 className="text-sm md:text-lg text-dark-900 font-semibold line-camp-1 pr-4">{title}</h5>
          <span className="center-child py-0.5 md:py-0.5 px-1 md:px-2 border border-black rounded-sm text-[12px] leading-none md:text-sm">${price}</span>
        </div>
        <div className="flex items-center md:mt-2 mb-3 md:mb-7">
          <span className="text-[12px] md:text-sm text-tGreay-900 leading-relaxed font-normal">{size}</span>

        </div>
        <div className="flex justify-between items-start border-t border-tGreay-300 pt-3">
          <div className="flex gap-x-2 items-center">
            <div className="border-y border-black w-20 md:w-24 items-center flex justify-between">
              <button onClick={() => dispatch(decraseItemQuantity(props.id))} type="button" className="px-2 py-2 text-black text-base leading-none border-x border-black border-solid" >-</button>
              <span className="flex-[3] text-sm leading-none text-black inline-block text-center">{quantity}</span>
              <button onClick={() => dispatch(incraseItemQuantity(props.id))} type="button" className="px-2 py-2 text-black text-base leading-none border-x border-black border-solid">+</button>
            </div>
            <span onClick={() => dispatch(removeFromCart(props.id))} className="text-tGreay-300 text-sm">Remove</span>
          </div>
         
          <p className="pt-2 text-sm md:text-base leading-1.2 text-dark-650 font-bold">
            <span className="mr-2 inline-block">Total:</span>
            <span>${totalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

function Cart() {

// Redux Feature ==============
const cartData = useSelector((items) => items.cart.items)
const dispatch = useDispatch()

  return (
    <>
      <Meta title="cart" />
      <Breadcrumb pages="home" title="cart" />
      <div className="container">
        <div className="py-60px lg:py-20 xl:py-100px">
          <h4 className="text-20px sm:text-2xl leading-4 font font-semibold mb-30px">Your cart items</h4>
          <div className="flex flex-col lg:flex-row">
            <div className="pt-30px border-t border-tGreay-100 lg:w-7/12">
              {
                cartData.map((item, index) => (
                  <CartCard key={index} id={item.id} title={item.title} thumbnail={item.thumbnail} quantity={item.quantity} price={item.price}/>
                ))
              }

              <div className="grid md:grid-cols-3 gap-3">
                <Link href="/" className="bg-black hover:bg-primary-900 h-45px text-sm uppercase text-white leading-none center-child">Continue Shopping</Link>
                <button className="bg-black hover:bg-primary-900 h-45px text-sm uppercase text-white leading-none center-child">Update Cart</button>
                <button onClick={() => dispatch(clearCart())} className="bg-primary-900 h-45px text-sm uppercase text-white leading-none center-child">Clear Cart</button>
              </div>
            </div>
            <div className="lg:w-5/12 lg:pl-12 mt-30px lg:mt-0">
              {/* Coupon Card Area ================*/}
              <div className="bg-tGreay-100 px-30px py-10">
                <div className=" relative before:content-[''] before:h-px before:absolute before:left-0 before:right-0 before:top-[13px] before:bg-tGreay-200" >
                  <h6 className="text-lg leading-1.2 font-bold mb-5 bg-tGreay-100 relative z-[1] inline-block pr-3"> Use Coupon Code</h6>
                </div>
                <p className="text-sm leading-relaxed text-tGreay-300 mb-3.5">Enter your coupon code if you have one.</p>
                <div className="xl:flex gap-x-3">
                  <input type="text" className="bg-white h-45px block w-full xl:w-7/12 px-2.5 py-2 text-base mb-6 xl:mb-0" />
                  <button className="bg-black hover:bg-primary-900 w-full xl:w-5/12 h-45px px-5 text-sm uppercase text-white leading-none center-child block">Apply Coupon</button>
                </div>
              </div>
              {/* Checkout Card Area ================*/}
              <div className="bg-tGreay-100 px-30px mt-8 py-10">
                <div className=" relative before:content-[''] before:h-px before:absolute before:left-0 before:right-0 before:top-[13px] before:bg-tGreay-200">
                  <h6 className="text-lg leading-1.2 font-bold mb-5 bg-tGreay-100 relative z-[1] inline-block pr-3"> Cart Total</h6>
                </div>
                <p className="text-black text-base flex justify-between mt-6 mb-5">
                  <span>Total products </span>
                  <span className="font-bold">$260.00</span>
                </p>
                <div>
                  <form action="#">
                    <ul>
                      <li className="text-base text-tGreay-300 flex justify-between mb-2.5">
                        <label htmlFor="Standard">
                          <input type="checkbox" name="Standard" id="Standard" className="mr-2" /> Standard
                        </label>
                        <span>$20.00</span>
                      </li>
                      <li className="text-base text-tGreay-300 flex justify-between mb-2.5">
                        <label htmlFor="Standard">
                          <input type="checkbox" name="Standard" id="Standard" className="mr-2" /> Express
                        </label>
                        <span>$20.00</span>
                      </li>

                    </ul>
                  </form>
                </div>
                <h6 className="flex items-center justify-between text-base md:text-xl text-primary-900 font-bold mt-10">
                  <span>Grand Total</span>
                  <span> $260.00</span>
                </h6>
                <button className="bg-black hover:bg-primary-900 h-45px w-full text-sm uppercase text-white leading-none center-child block mt-7">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart