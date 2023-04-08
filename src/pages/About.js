import THead from "@/components/thead/THead"
import Header from "@/components/header/Header"
import Image from "next/image"
import { FaShoppingBasket } from "react-icons/fa"
// images 
import bag from '../../public/img/about/bag.png'
import aboutImg from '../../public/img/about/about-right.png'
import servicesImg from '../../public/img/about/srevice-left-img.png'

function About() {
    return (
        <>
            <THead />
            <Header />
            <main>
                {/* Banner Scetion ===========================*/}
                <section className="h-[528px] bg-primary-200">
                    <div className="container h-full">
                        <div className="flex items-end h-full">
                            <div className="w-1/2 pr-6">
                                <h2 className="text-5xl uppercase font-light leading-none mb-21px">About Us</h2>
                                <p className="text-base leading-relaxed text-justify text-[#3c3c3c]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius modjior tem incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamyl quinol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisau irure dolor in reprehenderit in voluptate velit esse cillum dolore euhti fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
                                <Image src={bag} alt="bag" />
                            </div>
                            <div className="w-1/2 text-center">
                                <Image src={aboutImg} alt="girls" className="ml-auto" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* services Section =========================== */}
                <section className="py-100px bg-[#F0FCFC]">
                    <div className="container">
                        <div className="flex items-center">
                            <div className="w-1/2">
                                <Image src={servicesImg} alt="services Img" />
                            </div>
                            <div className="w-1/2 px-3">
                                <p className="text-base leading-none font-semibold text-black mb-4">100% Guaranteed Pure Cotton </p>
                                <h2 className="text-[36px] leading-snug uppercase font-normal pr-12 mb-15px">Best Products Here Every Day</h2>
                                <p className="text-base leading-7 text-tGreay-300 mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius modjior tem incididunt ut labore et dolore magna aliqua.</p>
                                <button className="btn-primary h-[53px] w-[170px] center-child gap-x-2.5 text-sm font-bold">Shop now <FaShoppingBasket /></button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Team Section */}
                <section className="py-100px">
                    <div>
                        <div className="container">
                            <h2 className="section-title text-center">#ourteam</h2>
                            <div className="grid grid-col-3 gap-x-6">
                                {

                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About