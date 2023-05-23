import Image from 'next/image'
import Offcanvas from '../offcanvas/Offcanvas'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '@/feature/cart/cartSlice'


function SiteCartCard(props) {
    const dispatch = useDispatch()
    console.log(props.id)
    return (
        <>
            <div className="flex">
                <div className="flex-1">
                    <a href="#">
                        <Image src={props.img} alt="img" width={120} height={200} />
                    </a>
                </div>
                <div className="pl-15px flex-[3] xs:flex-[2]">
                    <div className="flex items-center justify-between mb-2.5">
                        <h6 className="text-sm leading-relaxed font-normal text-black hover:text-primary-900">{props.title.substring(0, 30)}</h6>
                        <button onClick={() => dispatch(removeFromCart(props.id))} className="text-lg leading-relaxed font-normal text-black hover:text-primary-900" type="button">×</button>
                    </div>
                    <h6 className="text-sm leading-relaxed font-normal text-[#474747]">{props.quantity} x <span className="text-lg leading-relaxed font-medium text-primary-900">${props.price}</span></h6>
                </div>
            </div>
        </>
    )
}



function SideCart(props) {

    useEffect(() => {
        if (props.offCanvasVisibilty) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [props.offCanvasVisibilty])

    // Redux Feature
    const cartData = useSelector((data) => data.cart.items)

    return (
        <>
            <Offcanvas display={props.offCanvasVisibilty ? "block" : "none"} />
            <div className={`fixed  w-[300px] xs:w-[400px] h-full z-[150] top-0 bottom-0 -right-[500px] duration-500 trns-1 invisible `} style={props.offCanvasVisibilty ? { visibility: 'visible', right: '0' } : undefined}>
                <div className="bg-white p-5 h-full overflow-scroll">
                    <div className="flex justify-between mb-30px">
                        <h6 className="text-xl leading-relaxed font-bold">Cart</h6>
                        <button className="group/line w-5 h-5 relative" onClick={() => props.cartHandler(false)}>
                            <span className="bg-primary-900 w-5 h-0.5 inline-block absolute trns-1 duration-500 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-45 group-hover/line:-rotate-180"></span>
                            <span className="bg-primary-900 w-5 h-0.5 inline-block absolute trns-1 duration-500 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45 group-hover/line:rotate-0"></span>
                        </button>
                    </div>
                    {/* Product Card */}
                    <ul>

                        {
                            cartData.map((data, index) => {
                                return (
                                    <li key={index} className="pb-30px mb-30px border-b border-b-[#ebebeb] last:mb-0 last:border-0">
                                        <SiteCartCard id={parseInt(data.id)} img={data.thumbnail} title={data.title} price={data.price} quantity={data.quantity} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* Button */}
                    <div>
                        <a href="/Cart" className="py-2.5 px-15px block text-base leading-relaxed text-white text-center trns-1 bg-black hover:bg-primary-900 mb-30px">View Cart</a>
                        <a href="/Checkout" className="py-2.5 px-15px block text-base leading-relaxed text-white text-center trns-1  bg-primary-900">Check Out</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideCart