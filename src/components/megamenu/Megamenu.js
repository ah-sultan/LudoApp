import React, { memo, useCallback, useContext, useEffect, useState } from 'react'
import Image from 'next/image'

// Images
import img1 from '../../../public/img/Megamenu/1.jpg'
import img2 from '../../../public/img/Megamenu/2.jpg'
import img3 from '../../../public/img/Megamenu/3.jpg'
import Link from 'next/link'

function Megamenu(props) {
    const [isTrue, setIsTrue] = useState(false)
    const [clicked, setClicked] = useState("0");


    useEffect(() => {
        setIsTrue(props.showNav)
    },)

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    }


    return (
        <>
            <div className={`h-0 lg:h-auto lg:absolute left-0 right-0 top-[97%] w-auto z-[20] trns-1 origin-top invisible scale-y-0 lg:group-hover:visible lg:group-hover:scale-y-100 ${isTrue ? "showSubNav" : null}`}>
                <div className="w-full lg:pt-5 lg:pb-30px pl-2.5 lg:px-30px lg:t-shadow-7 lg:bg-white ">
                    <div className="lg:grid grid-cols-4 gap-x-30px">
                        {
                            props.shopMegamenu.map((navlist, id) => {
                                return (
                                    <div key={id}>
                                        <h6 className={`text-sm lg:text-base text-dark-700 lg:text-black capitalize leading-relaxed py-2 lg:py-0 lg:pb-1 mb-0 lg:mb-15px border-b w-full hover:text-primary-900 border-tGreay-100 flex justify-between font-semibold ${clicked === id ? "text-primary-900" : undefined}`} onClick={() => handleToggle(id)}>{navlist.title}

                                            <span className={`text-base lg:hidden trns-1 ${clicked === id ? "rotate-45" : undefined}`}>+</span>
                                        </h6>
                                        <ul className={`trns-1 invisible lg:visible h-0 lg:h-auto overflow-hidden origin-top translate-y-0 lg:transform-none ${clicked === id ? "showSubNav" : undefined}`}>
                                            {
                                                navlist.navlink.map(([title, url], id) => {
                                                    return (
                                                        <li key={id} className="border-tGreay-100 border-b lg:border-0"><Link href={url || `/`} className="py-2 lg:py-0 text-sm inline-block leading-[30px] text-dark-700 lg:text-black font-normal trns-1 duration-500 hover:text-primary-900 lg:hover:pl-2.5">{title}</Link></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pt-5 hidden lg:grid grid-cols-3 gap-x-30px">
                        <div>
                            <Link href="/" className="block overflow-hidden ">
                                <Image src={img1} alt="img-1" className="hover:scale-110 trns-1 w-full" />
                            </Link>
                        </div>
                        <div>
                            <Link href="/" className="block overflow-hidden ">
                                <Image src={img2} alt="img-1" className="hover:scale-110 trns-1 w-full" />
                            </Link>
                        </div>
                        <div>
                            <Link href="/" className="block overflow-hidden ">
                                <Image src={img3} alt="img-1" className="hover:scale-110 trns-1 w-full" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default memo(Megamenu)