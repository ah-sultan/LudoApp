import Image from 'next/image'
import { RiShoppingBasket2Line } from 'react-icons/ri'


// Images
import img1 from '../../../public/img/banner/4.jpg'
import img2 from '../../../public/img/banner/5.jpg'
import img3 from '../../../public/img/banner/6.jpg'


function Banner() {
  return (
    <>
        <section className="pb-60px lg:pb-20 xl:pb-100px px-15px" >
            <div className="grid lg:grid-cols-3 gap-x-6 gap-y-30px">
                {/* Banner Card */}
                <div>
                    <a href="#" className="relative block overflow-hidden group">
                        <Image src={img1} alt="img1" className="group-hover:rotate-3 group-hover:scale-110 transition duration-300 ease-out w-full"/>
                        <div className="absolute bottom-30px left-30px w-full h-full flex flex-col justify-end ">
                            <h6 className="text-20px md:text-2xl leading-[34px] font-bold text-tGreay-800 mb-[29px] capitalize">
                                <span className="block">Best Collection </span>
                                <span>For Men</span>
                            </h6>
                            <button className="btn-primary center-child w-[114px] h-[35px] text-[11px] leading-none gap-x-[5px] font-bold">SHOP NOW <RiShoppingBasket2Line/></button>
                        </div>
                    </a>
                </div>
                {/* Banner Card */}
                <div>
                    <a href="#" className="relative block overflow-hidden group">
                        <Image src={img2} alt="img1" className="group-hover:rotate-3 group-hover:scale-110 transition duration-300 ease-out w-full"/>
                        <div className="absolute bottom-30px left-30px w-full h-full flex flex-col justify-end ">
                            <h6 className="text-20px md:text-2xl leading-[34px] font-bold text-tGreay-800 mb-[29px] capitalize">
                                <span className="block">Best Collection </span>
                                <span>For Men</span>
                            </h6>
                            <button className="btn-primary center-child w-[114px] h-[35px] text-[11px] leading-none gap-x-[5px] font-bold">SHOP NOW <RiShoppingBasket2Line/></button>
                        </div>
                    </a>
                </div>
                {/* Banner Card */}
                <div>
                    <a href="#" className="relative block overflow-hidden group">
                        <Image src={img3} alt="img1" className="group-hover:rotate-3 group-hover:scale-110 transition duration-300 ease-out w-full"/>
                        <div className="absolute bottom-30px left-30px w-full h-full flex flex-col justify-end ">
                            <h6 className="text-20px md:text-2xl leading-[34px] font-bold text-tGreay-800 mb-[29px] capitalize">
                                <span className="block">Best Collection </span>
                                <span>For Men</span>
                            </h6>
                            <button className="btn-primary center-child w-[114px] h-[35px] text-[11px] leading-none gap-x-[5px] font-bold">SHOP NOW <RiShoppingBasket2Line/></button>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner