import Image from "next/image"
import { BiRightArrowAlt, BiCalendar } from 'react-icons/bi'

function BlogCard(props) {
    return (
        <>
            <div className="w-full">
                <div>
                    <a href="#" className="block overflow-hidden">
                        <Image src={props.img} alt="img-1" className="hover:scale-110 hover:rotate-3 trns-1 w-full" />
                    </a>
                </div>
                <div className="pt-30px pl-30px pr-5 pb-10 bg-primary-200 ">
                    <div className="flex items-center gap-x-3">
                        <a href="#" className="flex items-center text-[#454545] text-sm leading-relaxed font-semibold hover:text-primary-900">
                            <BiCalendar className="text-primary-900 text-lg mr-1" />
                            {props.pDate}
                        </a>
                        <span className="inline-block h-21px w-0.5 bg-primary-900"></span>
                        <a href="#" className="flex items-center text-[#454545] text-sm leading-relaxed font-semibold hover:text-primary-900">
                            <BiCalendar className="text-primary-900 text-lg mr-1" />
                            {props.comment}
                        </a>
                    </div>
                    <h5 className="mb-15px mt-21px">
                        <a href="#" className="text-22px lg:text-lg xl:text-22px text-dark-650 font-bold hover:text-primary-900">{props.title}</a>
                    </h5>
                    <p className={`text-dark-700 text-base leading-relaxed line-clamp-2 ${props.text === undefined ? 'mb-0' : 'mb-25px'}`}>{props.text}</p>
                    <button href="#" className="uppercase text-11px leading-none font-bold text-white gradient-dark rounded-full w-[119px] h-[35px] center-child hover:gradient-primary trns-1 hover:-translate-y-px hover:t-shadow-2">Read More <BiRightArrowAlt className="text-sm" /></button>
                </div>
            </div>
        </>
    )
}

export default BlogCard