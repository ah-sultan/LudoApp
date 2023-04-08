import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import THead from "@/components/thead/THead"
import Image from "next/image"

// icons 
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa"
import { CiLocationOn } from "react-icons/ci"


function ContactCard(props){
    return(
        <>
            <div className={`border flex items-center px-35px py-30px ${props.className} group`}>
                <div className="h-70px w-70px rounded-full center-child gradient-primary ">
                    <div className="text-2xl text-white group-hover:rotate-12 group-hover:text-[26px] trns-1 duration-500">
                        {props.icon}
                    </div>
                </div>
                <div className="pl-30px">
                    <h6 className="text-2xl leading-1.2 text-black mb-0.5 font-semibold">{props.title}</h6>
                    <p><a href={props.action} className="text-base leading-relaxed text-tGreay-300 hover:text-primary-900">{props.text}</a></p>
                </div>
            </div>
        </>
    )
}

function Contact() {
  return (
    <>
        <THead/>
        <Header/>
        <main>
            <Breadcrumb title="Contact Us" pages="home"/>
            <section className="py-100px">
                <div className="container">
                    <div className="p-70px bg-white t-shadow-7">
                        <div className="flex gap-x-6">
                            <div className="w-5/12">
                                <ContactCard icon={<FaPhone/>} action="tel:012 345 67 89" title="Phone:" text="012 345 67 89" className=""/>
                                <ContactCard icon={<FaEnvelope/>} action="mailto:demo@example.com" title="Email:" text="demo@example.com" className="mt-30px"/>
                                <ContactCard icon={<FaLocationArrow/>} action="#" title="Address:" text="Your address goes here" className="mt-30px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    
    </>
  )
}

export default Contact