import React from 'react'
import Image from 'next/image'

// Images
import img1 from '../../../public/img/Megamenu/1.jpg'
import img2 from '../../../public/img/Megamenu/2.jpg'
import img3 from '../../../public/img/Megamenu/3.jpg'

function Megamenu(props) {
    return (
        <>
            <div className="absolute left-0 right-0 top-[97%] w-full z-10 trns-1 origin-top invisible scale-y-0 group-hover:visible group-hover:scale-y-100">
                <div className="w-full pt-5 pb-30px px-30px t-shadow-7 bg-white ">
                    <div className="grid grid-cols-4 gap-x-30px">
                        {
                            props.shopMegamenu.map((navlist, id) => {
                                return (
                                    <div key={id}>
                                        <h6 className="text-base capitalize leading-relaxed pb-1 mb-15px border-b w-full hover:text-primary-900 border-tGreay-100">{navlist.title}</h6>
                                        <ul>
                                            {
                                                navlist.navlink.map(([title, url], id) => {
                                                    return (
                                                        <li key={id}><a href={url} className="text-sm leading-[30px] text-black font-normal trns-1 duration-500 hover:text-primary-900 hover:pl-2.5">{title}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pt-5 grid grid-cols-3 gap-x-30px">
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