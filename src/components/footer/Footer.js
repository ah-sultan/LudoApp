import {FaTwitter, FaTumblr, FaFacebookF, FaInstagram, FaHeart} from 'react-icons/fa'

// Images
import Image from 'next/image'
import logo from '../../../public/img/footer/logo-white.png'
import payment from '../../../public/img/footer/payment.png'

const quickLinks =[
    ['support', '/support'],
    ['helpline', '/helpline'],
    ['courses', '/courses'],
    ['about', '/about'],
    ['event', '/event'],
]

const otherPage =[
    ['About', '/About'],
    ['Blog', '/BLog'],
    ['Speakers', '/Speakers'],
    ['about', '/about'],
    ['Contact', '/Contact'],
    ['Tricket', '/Tricket'],
]

const company =[
    ['Jesco', '/'],
    ['Shop', '/Shop'],
    ['Contact us', '/Contact'],
    ['Log in', '/Login'],
    ['Help', '/Help'],
]

function Footer() {
  return (
    <>
        <footer className=" md:border-[30px] md:border-t-0 border-white bg-[#333] ">
            <div className="container">
                <div className="flex flex-wrap flex-col sm:flex-row px-3 md:px-0 py-50px md:pt-20 pb-10 xl:pb-[75px]">
                    <div className="w-full md:w-9/12 lg:w-3/12 mb-30px md:mb-30px">
                        <Image src={logo} alt="logo"/>
                        <p className="text-base leading-[27px] text-tGreay-250 font-light mt-[27px] mb-4 ">Lorem ipsum dolor sit amet consectet adipisicing elit, sed do eiusmod templ incididunt ut labore et dolore magnaol aliqua Ut enim ad minim. </p>
                        <ul className="flex gap-x-3">
                            <li>
                                <a href="#" className="text-base text-white w-8 h-8 rounded-full center-child trns-1 hover:gradient-primary hover:t-shadow-2"><FaTwitter/></a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white w-8 h-8 rounded-full center-child trns-1 hover:gradient-primary hover:t-shadow-2"><FaTumblr/></a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white w-8 h-8 rounded-full center-child trns-1 hover:gradient-primary hover:t-shadow-2"><FaFacebookF/></a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white w-8 h-8 rounded-full center-child trns-1 hover:gradient-primary hover:t-shadow-2"><FaInstagram/></a>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-2/12 mb-30px md:mb-30px lg:pl-30px xl:pl-[50px]">
                        <h4 className="text-xl leading-5 text-white font-semibold mb-27px">Quicks Links</h4>
                        <ul>
                            {
                                quickLinks.map(([title, url],index) => {
                                    return (
                                        <li key={index} className="mb-2 pl-3 relative before:content-[''] before:absolute before:inline-block before:w-1.5 before:h-px before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-tGreay-250 ">
                                            <a href={url} className="inline-block capitalize text-tGreay-250 text-base leading-[27px] hover:text-primary-900 hover:pl-2 ease-linear duration-300 transition-all">{title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-2/12 mb-30px md:mb-30px lg:pl-30px xl:pl-[50px]">
                        <h4 className="text-xl leading-5 text-white font-semibold mb-27px">Other Pages</h4>
                        <ul>
                            {
                                otherPage.map(([title, url],index) => {
                                    return (
                                        <li key={index} className="mb-2 pl-3 relative before:content-[''] before:absolute before:inline-block before:w-1.5 before:h-px before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-tGreay-250 ">
                                            <a href={url} className="inline-block capitalize text-tGreay-250 text-base leading-[27px] hover:text-primary-900 hover:pl-2 ease-linear duration-300 transition-all">{title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-2/12 mb-30px md:mb-30px lg:pl-30px xl:pl-[50px]">
                        <h4 className="text-xl leading-5 text-white font-semibold mb-27px">Company</h4>
                        <ul>
                            {
                                company.map(([title, url],index) => {
                                    return (
                                        <li key={index} className="mb-2 pl-3 relative before:content-[''] before:absolute before:inline-block before:w-1.5 before:h-px before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-tGreay-250 ">
                                            <a href={url} className="inline-block capitalize text-tGreay-250 text-base leading-[27px] hover:text-primary-900 hover:pl-2 ease-linear duration-300 transition-all">{title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="sm:w-1/2 md:w-9/12 lg:w-3/12">
                        <h4 className="text-xl leading-5 text-white font-semibold mb-27px">Store Information.</h4>
                        <p className="text-base leading-[27px] text-tGreay-250 font-light mt-[27px] mb-[5px] ">2005 Your Address Goes Here. 896, Address 10010, HGJ </p> 
                        <p className="text-base leading-[27px] text-tGreay-250 font-light my-[5px] ">Phone/Fax: <a href="#" className="hover:text-primary-900">0123456789</a> </p>        
                        <p className="text-base leading-[27px] text-tGreay-250 font-light mb-30px">Email: <a href="#" className="hover:text-primary-900">demo@example.com</a> </p>  
                        <Image src={payment} alt="payment"/>      
                    </div>
                </div>
            </div>
            <div className="text-center pt-25px pb-5 bg-tGreay-700">
                     <p className="text-sm leading-[26px] text-white font-normal">© 2021 Jesco Made With <FaHeart className="inline-block text-primary-900 mx-0.5"/> By HasThemes.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer