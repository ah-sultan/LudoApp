import Image from "next/image"

import TeamCard from "@/components/teamCard/TeamCard"
import Brand from "@/components/brand/Brand"
import Testtimonial from "@/components/testimonial/Testimonial"
import FeatureCard from "@/components/feature/FeatureCard"

import { FaShoppingBasket } from "react-icons/fa"

// images 
import bag from '../../public/img/about/bag.png'
import aboutImg from '../../public/img/about/about-right.png'
import servicesImg from '../../public/img/about/srevice-left-img.png'

// Team Section Images
import team1 from '../../public/img/team/1.jpg'
import team2 from '../../public/img/team/2.jpg'
import team3 from '../../public/img/team/3.jpg'

// Feature Section Images
import shipping from '../../public/img/feature/1.png'
import payments from '../../public/img/feature/2.png'
import returns from '../../public/img/feature/3.png'


function About() {
    return (
        <>
            {/* Banner Scetion ===========================*/}
            <section className="h-[500px] md:h-[400px] lg:h-[528px] bg-primary-200">
                <div className="container h-full">
                    <div className="flex flex-col lg:flex-row items-end h-full justify-center">
                        <div className="lg:w-1/2 xl:pr-6">
                            <h2 className="text-[32px] md:text-5xl uppercase font-light leading-1.2 mb-21px">About Us</h2>
                            <p className="text-base leading-relaxed text-justify text-[#3c3c3c]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius modjior tem incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamyl quinol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisau irure dolor in reprehenderit in voluptate velit esse cillum dolore euhti fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
                            <Image src={bag} alt="bag" className="hidden lg:block mt-6" />
                        </div>
                        <div className="w-1/2 text-center hidden lg:block">
                            <Image src={aboutImg} alt="girls" className="ml-auto" />
                        </div>
                    </div>
                </div>
            </section>
            {/* services Section =========================== */}
            <section className="py-60px lg:py-20 xl:py-100px bg-[#F0FCFC]">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-50px md:mb-0 md:px-3">
                            <Image src={servicesImg} alt="services Img" />
                        </div>
                        <div className="md:w-1/2 md:px-3">
                            <p className="text-base leading-none font-semibold text-black mb-4">100% Guaranteed Pure Cotton </p>
                            <h2 className="text-2xl lg:text-[36px] leading-snug uppercase font-normal pr-12 mb-15px">Best Products Here Every Day</h2>
                            <p className="text-base leading-7 text-tGreay-300 mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius modjior tem incididunt ut labore et dolore magna aliqua.</p>
                            <button className="btn-primary h-[53px] w-[170px] center-child gap-x-2.5 text-sm font-bold">Shop now <FaShoppingBasket /></button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team Section ===========================*/}
            <section className="py-60px lg:py-20 xl:py-100px">
                <div>
                    <div className="container">
                        <h2 className="section-title text-center mb-60px">#ourteam</h2>
                        <div className="grid md:grid-cols-3 gap-x-6 gap-y-30px">
                            <TeamCard img={team1} name="Howard Burns" title="Our Team" />
                            <TeamCard img={team2} name="Lester Houser" title="Our Team" />
                            <TeamCard img={team3} name="Craig Chaney" title="Our Team" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Feature Section ===========================*/}
            <section className="py-60px lg:py-20 xl:py-100px bg-[#F4F4F4]">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-30px gap-x-6">
                        <FeatureCard icon={shipping} title="Free Shipping" text=" Capped at $39 per order " />
                        <FeatureCard icon={payments} title="Card Payments" text="  12 Months Installments " />
                        <FeatureCard icon={returns} title="Easy Returns" text="  Shop With Confidence " />
                    </div>
                </div>
            </section>
            {/* Testimonial Section =========================== */}
            <Testtimonial />
            {/* Brand Area ===========================*/}
            <div className="border-t pt-60px pb-100px">
                <Brand />
            </div>
        </>
    )
}

export default About