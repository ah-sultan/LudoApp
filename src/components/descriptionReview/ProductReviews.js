import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

// Images
import img1 from '../../../public/img/review/1.png'
import img2 from '../../../public/img/review/2.png'

function SingleReview(props) {
    return (
        <>
            <div className="w-full flex items-center mb-50px">
                {/* Image Section */}
                <div className="mr-15px min-w-[120px]">
                    <Image src={props.img} alt='img1' />
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        {/* Name & Review Sectio */}
                        <div className="flex items-center">
                            <h5 className="mr-15px text-xl leading-none text-[#525252] font-semibold mb-0">{props.name}</h5>
                            <div className="items-center flex">
                                <FaStar className="inline-block text-accent-900 text-sm leading-none" />
                                <FaStar className="inline-block text-accent-900 text-sm leading-none" />
                                <FaStar className="inline-block text-accent-900 text-sm leading-none" />
                                <FaStar className="inline-block text-accent-900 text-sm leading-none" />
                                <FaStar className="inline-block text-accent-900 text-sm leading-none" />
                            </div>
                        </div>
                        <button className="text-base font-normal leading-relaxed text-[#525252] hover:text-primary-900">
                            Reply
                        </button>
                    </div>
                    {/* Text */}
                    <div>
                        <p className="w-[93%] text-base font-normal leading-relaxed text-tGreay-300 mt-10px">{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}



function ProductReviews() {
    return (
        <>
            <section>
                <div className="container px-0">
                    <div className="flex">
                        <div className="w-7/12 gap-x-6">
                            <div>
                                <SingleReview img={img1} name="White Lewis" text="Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla. " />
                                <div className="pl-70px">
                                    <SingleReview img={img2} name="White Lewis" text="Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla. " />
                                </div>
                            </div>
                        </div>
                        <div className="w-5/12">
                            <div className="pl-50px">
                                <h6 className="text-lg leading-1.2 font-semibold text-dark-300">Add a Review</h6>
                                {/* Form Section */}
                                <form action="#">
                                    {/* Rating */}
                                    <div className="mt-2.5 mb-5">
                                        <span className="text-lg leading-none font-semibold text-dark-300 inline-block mr-15px">Your rating:</span>
                                        <FaStar className="inline-block text-accent-900 text-sm leading-none" />
                                        <FaStar className="inline-block text-accent-900 text-sm leading-none" />
                                        <FaStar className="inline-block text-accent-900 text-sm leading-none" />
                                        <FaStar className="inline-block text-accent-900 text-sm leading-none" />
                                        <FaStar className="inline-block text-accent-900 text-sm leading-none" />
                                    </div>
                                    <div className="flex gap-x-6">
                                        <input type="text" placeholder="Name" className="h-[45px] w-1/2 text-[#474747] text-sm leading-1.2 py-0.5 pl-5 pr-2.5 border border-[#ebebeb] mb-15px" />
                                        <input type="email" placeholder="Email" className="h-[45px] w-1/2 text-[#474747] text-sm leading-1.2 py-0.5 pl-5 pr-2.5 border border-[#ebebeb] mb-15px" />
                                    </div>
                                    <textarea placeholder="Message" className="h-[213px] w-full text-[#474747] text-sm leading-1.2 py-5 pl-5 pr-2.5 border border-[#ebebeb] mb-5" />
                                    <button type="submit" className="btn-primary w-[170px] h-50px font-bold text-base leading-none">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductReviews