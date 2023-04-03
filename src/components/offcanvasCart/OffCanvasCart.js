import Image from 'next/image'
import img1 from '../../../public/img/cart/1.jpg'


function CanvasCard(props){
    return(
        <>
        <div className="flex">
           <div className="w-[110px]">
                <a href="#">
                    <Image src={props.img} alt="img" className="w-[110px]"/>
                </a>
           </div>
           <div className="pl-15px flex-1">
                <div className="flex items-center justify-between mb-2.5">
                    <a href="#" className="text-sm leading-relaxed font-normal text-black hover:text-primary-900">{props.title}</a>
                    <button className="text-lg leading-relaxed font-normal text-black hover:text-primary-900" type="button">×</button>
                </div>
                <h6 className="text-sm leading-relaxed font-normal text-[#474747]">1 x <span className="text-lg leading-relaxed font-medium text-primary-900">${props.price}</span></h6>
           </div>
        </div>
        </>
    )
}



function OffCanvasCart(props) {
     

  return (
   <div className={`fixed w-[400px] h-full z-50 top-0 bottom-0 -right-[500px] duration-500 trns-1 invisible  ${ props.offCanvasVisibilty ? '!visible offcanvas-overlay !right-0' : undefined}  `}>
            <div className="bg-white p-5 h-full overflow-scroll">
                <div className="flex justify-between mb-30px">
                    <h6 className="text-xl leading-relaxed font-bold">Cart</h6>
                    <button className="w-5 h-5 relative" onClick={() => props.cartHandler(false)}>
                        <div className="w-full h-full rotate-45">
                            <div className="w-full h-0.5 bg-primary-900 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="w-0.5 h-full bg-primary-900 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                    </button>
                </div>
                {/* Product Card */}
                <ul className="">
                    <li className="pb-30px mb-30px border-b border-b-[#ebebeb] last:mb-0 last:border-0">
                        <CanvasCard img={img1} title="Women's Elizabeth Coat" price="43.28"/>
                    </li>
                    <li className="pb-30px mb-30px border-b border-b-[#ebebeb] last:mb-0 last:border-0">
                        <CanvasCard img={img1} title="Women's Elizabeth Coat" price="43.28"/>
                    </li>
                    <li className="pb-30px mb-30px border-b border-b-[#ebebeb] last:mb-0 last:border-0">
                        <CanvasCard img={img1} title="Women's Elizabeth Coat" price="43.28"/>
                    </li>
                </ul>
                {/* Button */}
                <div>
                    <a href="#" className="py-2.5 px-15px block text-base leading-relaxed text-white text-center trns-1 bg-black hover:bg-primary-900 mb-30px">View Cart</a>
                    <a href="#" className="py-2.5 px-15px block text-base leading-relaxed text-white text-center trns-1  bg-primary-900">Check Out</a>
                </div>
            </div>
   </div>
  )
}

export default OffCanvasCart