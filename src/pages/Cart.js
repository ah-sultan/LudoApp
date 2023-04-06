import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import THead from "@/components/thead/THead"
import Image from "next/image"

import img1 from '../../public/img/cart/1.jpg'

function CartCard(props){
  return(
    <div className="flex items-center w-full mb-6 pb-6 border-b border-tGreay-100">
      <div className="rounded overflow-hidden">
        <Image src={img1} width={150} height={300}/>
      </div>
      <div className="pl-6 w-8/12 ">
        <div className="flex justify-between items-center">
        <h5 className="text-lg text-dark-900 font-semibold ">Rey Nylon Backpack</h5>
        <span className="center-child py-1 px-2 border border-black rounded-sm text-sm">$50</span>
        </div>
        <div className="flex items-center mt-2 mb-7">
            <span className="text-sm text-tGreay-900 leading-relaxed font-normal">Red</span>
            <span className="h-5 border-l border-tGreay-300 mx-4"></span>
            <span className="text-sm text-tGreay-900 leading-relaxed font-normal">XL</span>
        </div>
        <div className="flex justify-between items-start border-t border-tGreay-300 pt-3">
          <div className="border-y border-black w-24 items-center flex justify-between">
            <button type="button" className="px-2 py-2 text-black text-base leading-none border-x border-black border-solid">+</button>
            <span className="w-16 text-sm leading-none text-black inline-block text-center">0</span>
            <button type="button" className="px-2 py-2 text-black text-base leading-none border-x border-black border-solid">-</button>
          </div>
          <p className="pt-2 text-base leading-1.2 text-dark-650 font-bold">
            <span className="mr-2 inline-block">Total Price:</span>
            <span>$70</span>
          </p>
          </div>
      </div>
    </div>
  )
}

function Cart() {
  return (
    <>
        <THead/>
        <Header/>
        <main>
        <Breadcrumb pages="home" title="cart"/>
        <div className="container">
          <div className="py-100px">
              <h4 className="text-2xl leading-4 font font-semibold mb-30px">Your cart items</h4>
              <div className="flex ">
                <div className="pt-30px border-t border-tGreay-100 w-7/12">
                  <CartCard/>
                  <CartCard/>
                  <CartCard/>
                  <div className="grid grid-cols-3 gap-x-3">
                    <button className="bg-black hover:bg-primary-900 h-45px text-sm uppercase text-white leading-none center-child">Continue Shopping</button>
                    <button className="bg-black hover:bg-primary-900 h-45px text-sm uppercase text-white leading-none center-child">Update Cart</button>
                    <button className="bg-primary-900 h-45px text-sm uppercase text-white leading-none center-child">Clear Cart</button>
                  </div>
                </div>
                <div className="w-5/12 pl-12">
                  {/* Coupon Card Area */}
                  <div className="bg-tGreay-100 px-30px py-10">
                    <div className=" relative before:content-[''] before:h-px before:absolute before:left-0 before:right-0 before:top-[13px] before:bg-tGreay-200" >
                      <h6 className="text-lg leading-1.2 font-bold mb-5 bg-tGreay-100 relative z-[1] inline-block pr-3"> Use Coupon Code</h6>
                    </div>
                      <p className="text-sm leading-relaxed text-tGreay-300 mb-3.5">Enter your coupon code if you have one.</p>
                      <div className="flex gap-x-3">
                      <input type="text" className="bg-white h-45px block w-7/12 px-2.5 py-2 text-base "/>
                      <button className="bg-black hover:bg-primary-900 w-5/12 h-45px px-5 text-sm uppercase text-white leading-none center-child block">Apply Coupon</button>
                      </div>
                  </div>
                  {/* Checkout Card Area */}
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
                                <input type="checkbox" name="Standard" id="Standard" className="mr-2"/> Standard
                              </label>
                              <span>$20.00</span>
                            </li>
                            <li className="text-base text-tGreay-300 flex justify-between mb-2.5"> 
                              <label htmlFor="Standard">
                                <input type="checkbox" name="Standard" id="Standard" className="mr-2"/> Express 
                              </label>
                              <span>$20.00</span>
                            </li>
                            
                          </ul>
                        </form>
                      </div>
                      <h6 className="flex items-center justify-between text-xl text-primary-900 font-bold mt-10">
                        <span>Grand Total</span>
                        <span> $260.00</span>
                      </h6>
                      <button className="bg-black hover:bg-primary-900 h-45px w-full text-sm uppercase text-white leading-none center-child block mt-7">Proceed to Checkout</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
        </main>
        <Footer/>
    </>
  )
}

export default Cart