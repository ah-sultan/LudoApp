import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

// Images
import img1 from '../../../public/img/review/1.png'
import img2 from '../../../public/img/review/2.png'

function SingleReview(props) {

    const rating = 3
    return (
        <>
            <div className="w-full flex flex-col lg:flex-row lg:items-center mb-50px">
                {/* Image Section */}
                <div className="mr-15px min-w-[120px] mb-4 lg:mb-0">
                    <Image src={props.img} alt='img1' />
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        {/* Name & Review Sectio */}
                        <div className="flex items-center mb-2.5">
                            <h5 className="mr-15px text-xl leading-none text-[#525252] font-semibold mb-0">{props.name}</h5>
                            <div className="items-center flex">
                                {
                                    Array(rating).fill().map((_, id) => <FaStar key={id} className="inline-block text-accent-900 text-sm leading-none" />)
                                }

                                {
                                    Array(5 - rating).fill().map((_, id) => <FaStar key={id} className="inline-block text-tGreay-100 text-sm leading-none" />)
                                }
                            </div>
                        </div>
                        <button className="text-sm font-normal leading-relaxed text-tGreay-300 hover:text-primary-900">
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
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-7/12 pr-3">
                            <div>
                                <SingleReview img={img1} name="White Lewis" text="Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla. " />
                                <div className="md:pl-70px">
                                    <SingleReview img={img2} name="White Lewis" text="Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla. " />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-5/12 lg:pl-30px pr-1">
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
                                <div className="flex flex-col md:flex-row gap-6">
                                    <input type="text" placeholder="Name" className="form-input" />
                                    <input type="email" placeholder="Email" className="form-input" />
                                </div>
                                <textarea placeholder="Your Message *" className="form-input h-[180px] focus:outline-none py-6 leading-normal my-7" />
                                <button type="submit" className="btn-primary w-[170px] h-50px font-bold text-base leading-none">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductReviews