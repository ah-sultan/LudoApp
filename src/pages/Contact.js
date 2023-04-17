import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import THead from "@/components/thead/THead"
import Image from "next/image"

// icons 
import { FaPhone, FaEnvelope, FaLocationArrow, FaArrowRight } from "react-icons/fa"
import { CiLocationOn } from "react-icons/ci"
import BackTop from "@/components/backtop/BackTop"


function ContactCard(props) {
    return (
        <>
            <div className={`border flex items-center py-25px px-5 lg:px-35px lg:py-30px ${props.className} group`}>
                <div className="h-60px xl:h-70px w-60px xl:w-70px rounded-full center-child gradient-primary ">
                    <div className="text-2xl text-white group-hover:rotate-12 group-hover:text-[26px] trns-1 duration-500">
                        {props.icon}
                    </div>
                </div>
                <div className="pl-5 lg:pl-30px">
                    <h6 className="text-xl lg:text-2xl leading-1.2 text-black mb-0.5 font-semibold">{props.title}</h6>
                    <p><a href={props.action} className="text-base leading-relaxed text-tGreay-300 hover:text-primary-900">{props.text}</a></p>
                </div>
            </div>
        </>
    )
}

function Contact() {
    return (
        <>
            <THead />
            <Header />
            <main>
                <Breadcrumb title="Contact Us" pages="home" />
                <section className="py-60px lg:py-20 xl:py-100px">
                    <div className="container">
                        <div className="py-50px px-30px lg:p-70px bg-white t-shadow-7">
                            <div className="flex flex-col gap-y-30px gap-x-6">
                                <div className="lg:w-5/12">
                                    <ContactCard icon={<FaPhone />} action="tel:012 345 67 89" title="Phone:" text="012 345 67 89" className="" />
                                    <ContactCard icon={<FaEnvelope />} action="mailto:demo@example.com" title="Email:" text="demo@example.com" className="mt-30px" />
                                    <ContactCard icon={<FaLocationArrow />} action="#" title="Address:" text="Your address goes here" className="mt-30px" />
                                </div>
                                <div className="lg:w-7/12 lg:pl-30px">
                                    <h4 className="text-black text-30px leading-1.2 mb-12.5 font-semibold">Leave a Message</h4>
                                    <p className="text-base leading-7 text-dark-700">There are many variations of passages of Lorem Ipsum available but the suffered alteration in some form.</p>
                                    <div className="mt-30px">
                                        <form action="#">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <input type="text" className="form-input" placeholder="Name *" />
                                                </div>
                                                <div>
                                                    <input type="Email" className="form-input" placeholder="Email *" />
                                                </div>
                                            </div>
                                            <div className="pt-30px">
                                                <textarea placeholder="Your Message *" className="form-input h-[200px] focus:outline-none py-6 leading-normal" />
                                            </div>
                                            <button className="btn-primary center-child text-sm leading-none w-[210px] h-[65px] mt-30px tracking-wide font-semibold">Post Comment <FaArrowRight className="ml-1" /> </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BackTop />
        </>
    )
}

export default Contact
