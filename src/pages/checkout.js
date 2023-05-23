import { useState } from "react"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Meta from "@/components/meta/Meta"


function Accordion(props) {
    const [activeAcrr, setActiveAcrr] = useState(0)
    const [isTrue, setIsTrue] = useState(false)

    function handleAcrr(value) {
        setActiveAcrr(value)
        setIsTrue(!isTrue)
    }

    const showAcc = {
        visibility: "visible",
        height: 'auto',
        paddingTop: '6px',
        opacity: 1,
    }
    return (
        <>
            <div className="mb-3">
                <div onClick={() => handleAcrr(props.id)}>
                    <h4 className="text-base font-semibold text-black leading-1.2 mb-2">{props.title}</h4>
                </div>
                <div className="pt-0 pl-2.5 trns-1 duration-500 invisible h-0 opacity-0" style={activeAcrr === props.id && isTrue ? showAcc : undefined}>
                    <p className="text-dark-700 text-sm leading-relaxed">{props.text}</p>
                </div>
            </div>
        </>
    )
}

const accor = [
    {
        title: 'Direct bank transfer',
        text: 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.',
    },

    {
        title: 'Check payments',
        text: 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.',
    },

    {
        title: 'Cash on delivery',
        text: 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.',
    }

]

function Checkout() {


    return (
        <>
            <Meta title="checkout" />
            <Breadcrumb pagse="shop" title="Checkout" />
            <div className="container">
                <div className="py-60px lg:py-20 xl:py-100px">
                    <div className="flex flex-col lg:flex-row gap-x-30px">
                        <div className="w-full lg:w-7/12 lg-px-0">
                            <div>
                                <h4 className="text-2xl font-semibold text-black mb-30px">Billing Details</h4>
                                <form action="#">
                                    <div className="flex flex-col md:flex-row gap-x-6 mb-6">
                                        <div className="w-full md:w-1/2">
                                            <label htmlFor="fName" className="block text-base text-dark-700 mb-2.5">First Name</label>
                                            <input type="text" id="fName" className="form-input" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <label htmlFor="lName" className="block text-base text-dark-700 mb-2.5">Last Name</label>
                                            <input type="text" id="lName" className="form-input" />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="companyName" className="block text-base text-dark-700 mb-2.5">Company Name</label>
                                        <input type="text" id="companyName" className="form-input" />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="selectCountry" className="block text-base text-dark-700 mb-2.5">Country Name</label>
                                        <select id="lName" className="form-input bg-transparent">
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
                                        <input type="text" placeholder="House number and street name" id="companyName" className="form-input mb-2.5" />
                                        <input type="text" placeholder="Apartment, suite, unit etc." id="companyName" className="form-input" />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="townCity" className="block text-base text-dark-700 mb-2.5">Town / City</label>
                                        <input type="text" id="townCity" className="form-input" />
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-x-6 mb-6 ">
                                        <div className="w-full md:w-1/2">
                                            <label htmlFor="stateCounty" className="block text-base text-dark-700 mb-2.5">State / County</label>
                                            <input type="text" id="stateCounty" className="form-input" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <label htmlFor="postCodeZIp" className="block text-base text-dark-700 mb-2.5">Postcode / ZIP</label>
                                            <input type="text" id="postCodeZIp" className="form-input" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-x-6 mb-6">
                                        <div className="w-full md:w-1/2">
                                            <label htmlFor="phone" className="block text-base text-dark-700 mb-2.5">Phone</label>
                                            <input type="text" id="phone" className="form-input" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <label htmlFor="email" className="block text-base text-dark-700 mb-2.5">Email Address</label>
                                            <input type="email" id="email" className="form-input" />
                                        </div>
                                    </div>
                                    <div className="py-30px">
                                        <h4 className="text-lg leading-1.2 text-black font-semibold mb-2.5">Additional information</h4>
                                        <label className="block text-base text-dark-700 mb-2.5" id="message"> Order notes </label>
                                        <textarea type="text" placeholder="Notes about your order, e.g. special notes for delivery." id="message" className="w-full border border-tGreay-100 h-[140px] px-5 text-base leading-relaxed text-dark-700 focus:outline-none" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="w-full lg:w-5/12 mt-30px xl:mt-0">
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
                                <div className="mt-9">
                                    {/* Accordion Items */}
                                    {
                                        accor.map((items, index) => {
                                            return <Accordion key={index} id={index} title={items.title} text={items.text} />
                                        })
                                    }
                                </div>
                            </div>
                            <button className="w-full mt-6 h-45px bg-primary-900 text-center block text-white text-base leading-none uppercase hover:bg-black font-bold">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout
