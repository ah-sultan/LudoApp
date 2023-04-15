import React, {useCallback, useContext, useEffect, useState } from 'react'
import Image from 'next/image'

// Images
import img1 from '../../../public/img/Megamenu/1.jpg'
import img2 from '../../../public/img/Megamenu/2.jpg'
import img3 from '../../../public/img/Megamenu/3.jpg'

function Megamenu(props) {

    return (
        <>
            <div className="h-0 lg:h-auto lg:absolute left-0 right-0 top-[97%] w-auto z-[20] trns-1 origin-top invisible scale-y-0 lg:group-hover:visible group-hover:scale-y-100">
                <div className="w-full md:pt-5 md:pb-30px pl-2.5 md:px-30px md:t-shadow-7 md:bg-white ">
                    <div className="lg:grid grid-cols-4 gap-x-30px">
                        {
                            props.shopMegamenu.map((navlist, id) => {
                                return (
                                    <div key={id}>
                                        <h6 className="text-sm md:text-base text-dark-700 md:text-black capitalize leading-relaxed py-2 md:py-0 md:pb-1 mb-0 md:mb-15px border-b w-full hover:text-primary-900 border-tGreay-100 flex justify-between font-semibold">{navlist.title} <span className="text-base lg:hidden">+</span></h6>
                                        <ul className="invisible lg:visible h-0 lg:h-auto overflow-hidden origin-top translate-y-0 lg:transform-none">
                                            {
                                                navlist.navlink.map(([title, url], id) => {
                                                    return (
                                                        <li key={id} className="border-tGreay-100 border-b lg:border-0"><a href={url} className="py-2 md:py-0 text-sm inline-block leading-[30px] text-dark-700 md:text-black font-normal trns-1 duration-500 hover:text-primary-900 md:hover:pl-2.5">{title}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pt-5 hidden md:grid grid-cols-3 gap-x-30px">
                        <div>
                            <a href="#" className="block overflow-hidden ">
                                <Image src={img1} alt="img-1" className="hover:scale-110 trns-1 w-full" />
                            </a>
                        </div>
                        <div>
                            <a href="#" className="block overflow-hidden ">
                                <Image src={img2} alt="img-1" className="hover:scale-110 trns-1 w-full" />
                            </a>
                        </div>
                        <div>
                            <a href="#" className="block overflow-hidden ">
                                <Image src={img3} alt="img-1" className="hover:scale-110 trns-1 w-full" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Megamenu