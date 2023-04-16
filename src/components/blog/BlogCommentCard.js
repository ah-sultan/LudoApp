import Image from 'next/image'
import user from '../../../public/img/blog/user.png'

import { BsArrowRightShort } from 'react-icons/bs'

function BlogCommentCard() {
    return (
        <>
            <div className="md:flex mb-60px">
                <div className="mr-30px basis-auto flex-grow-0 flex-shrink-0 mb-5 md:mb-0">
                    <Image src={user} alt='user' />
                </div>
                <div>
                    <h6 className='text-2xl leading-1.2 font-semibold mb-2 '>Maxine Singleton </h6>
                    <span className="text-base leading-normal font-bold text-dark-500"> 21 July 2021 </span>
                    <p className="text-base leading-relaxed text-tGreay-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid ut labore et dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamc laboris nisi ut aliquip ex ea comm consequat. </p>
                    <button type="button" className="center-child text-xs py-2 px-4 mt-5 capitalize text-white font-bold trns-1 bg-black rounded-[30px] hover:t-shadow-2 hover:gradient-primary">Reply<BsArrowRightShort /></button>
                </div>
            </div>
        </>
    )
}

export default BlogCommentCard