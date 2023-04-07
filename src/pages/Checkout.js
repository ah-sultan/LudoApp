import { useEffect, useRef } from "react"

import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import THead from "@/components/thead/THead"

function Checkout() {

    const accordion = useRef()
    useEffect(() => {
        const accordionBlock = accordion.current
        const accordionItem = accordionBlock.children

        for (let i = 0; i < accordionItem.length; i++) {
            accordionItem[i].firstChild.addEventListener('click', function () {

                if (this.nextSibling.classList === "block") {
                    this.nextSibling.style.display = "none"
                } else {
                    this.nextSibling.style.display = "block"
                }
            })
        }

    })

    return (
        <>
            <THead />
            <Header />
            <main>
                <Breadcrumb pagse="shop" title="Checkout" />
                <div className="container">
                    <div className="py-100px">
                        <div className="flex">
                            <div className="w-7/12 px-3">
                                <div>
                                    <h4 className="text-2xl font-semibold text-black mb-30px">Billing Details</h4>
                                    <form action="#">
                                        <div className="flex gap-x-6 mb-6">
                                            <div className="w-1/2">
                                                <label htmlFor="fName" className="block text-base text-dark-700 mb-2.5">First Name</label>
                                                <input type="text" id="fName" className="w-full border border-tGreay-100 h-45px px-5 text-base leading-[50px] text-dark-700" />
                                            </div>
                                            <div className="w-1/2">
                                                <label htmlFor="lName" className="block text-base text-dark-700 mb-2.5">Last Name</label>
                                                <input type="text" id="lName" className="w-full border border-tGreay-100 h-45px px-5 text-base leading-[50px] text-dark-700" />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="companyName" className="block text-base text-dark-700 mb-2.5">Company Name</label>
                                            <input type="text" id="companyName" className="w-full border border-tGreay-100 h-45px px-5 text-base leading-[50px] text-dark-700" />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="selectCountry" className="block text-base text-dark-700 mb-2.5">Country Name</label>
                                            <select id="lName" className="w-full border border-tGreay-100 h-45px px-5 text-base leading-[50px] text-dark-700 bg-transparent">
                                                <option value="United State">Select Country</option>
                                                <option value="United State">United State</option>
                                                <option value="Canada">Canada</option>
                                                <option value="England">England</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Australia">Australia</option>
                                            </select>
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-base text-dark-700 mb-2.5">Street Address</label>
                                            <input type="text" placeholder="House number and street name" id="companyName" className="w-full border border-tGreay-100 h-45px px-5 text-base leading-[50px] text-dark-700 mb-2.5" />
                                            <input type="text" placeholder="Apartment, suite, unit etc." id="companyName" className="w-full border border-tGreay-100 h-45px px-5 text-base leading-[50px] text-dark-700" />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="townCity" className="block text-base text-dark-700 mb-2.5">Town / City</label>
                                            <input type="text" id="townCity" className="w-full border border-tGreay-100 h-45px px-5 text-base leading-[50px] text-dark-700" />
                                        </div>
                                        <div className="flex gap-x-6 mb-6">
                                            <div className="w-1/2">
                                                <label htmlFor="stateCounty" className="block text-base text-dark-700 mb-2.5">State / County</label>
                                                <input type="text" id="stateCounty" className="w-full border border-tGreay-100 h-45px px-5 text-base leading-[50px] text-dark-700" />
                                            </div>
                                            <div className="w-1/2">
                                                <label htmlFor="postCodeZIp" className="block text-base text-dark-700 mb-2.5">Postcode / ZIP</label>
                                                <input type="text" id="postCodeZIp" className="w-full border border-tGreay-100 h-45px px-5 text-base leading-[50px] text-dark-700" />
                                            </div>
                                        </div>
                                        <div className="flex gap-x-6 mb-6">
                                            <div className="w-1/2">
                                                <label htmlFor="phone" className="block text-base text-dark-700 mb-2.5">Phone</label>
                                                <input type="text" id="phone" className="w-full border border-tGreay-100 h-45px px-5 text-base leading-[50px] text-dark-700" />
                                            </div>
                                            <div className="w-1/2">
                                                <label htmlFor="email" className="block text-base text-dark-700 mb-2.5">Email Address</label>
                                                <input type="email" id="email" className="w-full border border-tGreay-100 h-45px px-5 text-base leading-[50px] text-dark-700" />
                                            </div>
                                        </div>
                                        <div className="py-30px">
                                            <h4 className="text-lg leading-1.2 text-black font-semibold mb-2.5">Additional information</h4>
                                            <label className="block text-base text-dark-700 mb-2.5" id="message">Street Address</label>
                                            <textarea type="text" placeholder="Notes about your order, e.g. special notes for delivery." id="message" className="w-full border border-tGreay-100 h-[140px] px-5 text-base leading-[50px] text-dark-700 focus:outline-none" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="px-3 w-5/12">
                                <h4 className="text-2xl font-semibold text-black mb-30px">Your order</h4>
                                <div className="px-9 py-11 bg-tGreay-100">
                                    <ul className="flex justify-between mb-7">
                                        <li className="text-base leading-relaxed text-black font-semibold">Product</li>
                                        <li className="text-base leading-relaxed text-black font-semibold">total</li>
                                    </ul>
                                    <div className="pt-7 pb-5 border-y border-[#d5d6da] ">
                                        <ul className="flex justify-between mb-2.5">
                                            <li className="text-dark-700 text-base leading-relaxed">Product Name X 1</li>
                                            <li className="text-dark-700 text-base leading-relaxed">$100</li>
                                        </ul>
                                        <ul className="flex justify-between mb-2.5">
                                            <li className="text-dark-700 text-base leading-relaxed">Product Name X 1</li>
                                            <li className="text-dark-700 text-base leading-relaxed">$100</li>
                                        </ul>
                                    </div>
                                    <ul className="flex justify-between mt-7 mb-18px">
                                        <li className="text-black font-semibold text-base leading-relaxed">Shipping</li>
                                        <li className="text-dark-700 text-base leading-relaxed">$100</li>
                                    </ul>
                                    <div className="py-18px border-y border-[#d5d6da] ">
                                        <ul className="flex justify-between ">
                                            <li className="text-black font-semibold text-base leading-relaxed">Total</li>
                                            <li className="text-primary-900 font-semibold text-base leading-relaxed">$100</li>
                                        </ul>
                                    </div>
                                    {/* Accordion Section */}
                                    <div className="mt-9" ref={accordion}>
                                        {/* Accordion Items */}
                                        <div className="mb-4">
                                            <div>
                                                <h4 className="text-base font-semibold text-black leading-1.2 mb-2">Direct bank transfer</h4>
                                            </div>
                                            <div className="pt-1.5 pl-2.5 trns-1 hidden">
                                                <p className="text-dark-700 text-sm leading-relaxed">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                            </div>
                                        </div>
                                        {/* Accordion Items */}
                                        <div className="mb-4">
                                            <div>
                                                <h4 className="text-base font-semibold text-black leading-1.2 mb-2">Check payments</h4>
                                            </div>
                                            <div className="pt-1.5 pl-2.5 trns-1 hidden">
                                                <p className="text-dark-700 text-sm leading-relaxed">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                            </div>
                                        </div>
                                        {/* Accordion Items */}
                                        <div>
                                            <div>
                                                <h4 className="text-base font-semibold text-black leading-1.2 mb-2">Cash on delivery</h4>
                                            </div>
                                            <div className="pt-1.5 pl-2.5 trns-1 hidden">
                                                <p className="text-dark-700 text-sm leading-relaxed">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

        </>
    )
}

export default Checkout