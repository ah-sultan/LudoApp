import Image from "next/image"
import { BiCalendar } from 'react-icons/bi'
import { FaFacebookF, FaTwitter, FaGoogle, FaComments } from 'react-icons/fa'

function BlogDetailsCard(props) {
    return (
        <>
            <div className="w-full">
                <div>
                    <a href="#" className="block overflow-hidden">
                        <Image src={props.img} alt="img-1" />
                    </a>
                </div>
                <div className="pt-30px">
                    <div className="flex items-center gap-x-3">
                        <a href="#" className="flex items-center text-[#454545] text-base leading-relaxed font-semibold hover:text-primary-900">
                            <BiCalendar className="text-primary-900 text-lg mr-1" />
                            {props.pDate}
                        </a>
                        <span className="inline-block h-21px w-0.5 bg-primary-900"></span>
                        <a href="#" className="flex items-center text-[#454545] text-base leading-relaxed font-semibold hover:text-primary-900">
                            <BiCalendar className="text-primary-900 text-lg mr-1" />
                            {props.comment}
                        </a>
                    </div>
                    <h5 className="blog-title">
                        {props.title}
                    </h5>
                    <p className={`text-dark-300 text-base leading-relaxed ${props.text === undefined ? 'mb-0' : 'mb-10'}`}>{props.text}</p>
                    <h5 className="blog-title">
                        {props.title}
                    </h5>
                    <p className={`text-dark-300 text-base leading-relaxed ${props.text === undefined ? 'mb-0' : 'mb-10'}`}>{props.text}</p>
                    <p className={`text-dark-300 text-base leading-relaxed ${props.text === undefined ? 'mb-0' : 'mb-10'}`}>{props.text}</p>
                    <div className="grid grid-cols-2 gap-x-6 lg:gap-x-30px mb-10">
                        <Image src={props.img} alt="img-1" />
                        <Image src={props.img} alt="img-1" />
                    </div>
                    <p className={`text-dark-300 text-base leading-relaxed ${props.text === undefined ? 'mb-0' : 'mb-10'}`}>{props.text}</p>
                </div>
                <div className="md:flex justify-between items-center bg-tGreay-100 py-3 px-5 mb-10">
                    <div>
                        <a href="#" className="inline-block text-black text-sm mr-2.5 font-semibold"><FaFacebookF /></a>
                        <a href="#" className="inline-block text-black text-sm mr-2.5 font-semibold"><FaTwitter /></a>
                        <a href="#" className="inline-block text-black text-sm mr-2.5 font-semibold"><FaGoogle /></a>
                        <a href="#" className="text-black text-base mr-2.5 font-semibold inline-flex items-center">2 <FaComments className="inline-block ml-1 text-base" /></a>
                    </div>
                    <div className="flex mt-4 md:mt-0">
                        <p className="text-base text-dark-700 mr-4 font-semibold">Tags:</p>
                        <ul className="flex gap-x-1">
                            <li><a href="#" className="text-base text-tGreay-200 hover:text-primary-900">Fashion,</a></li>
                            <li><a href="#" className="text-base text-tGreay-200 hover:text-primary-900">eCommerce,</a></li>
                            <li><a href="#" className="text-base text-tGreay-200 hover:text-primary-900">Dress,</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetailsCard