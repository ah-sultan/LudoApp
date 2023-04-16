import BlogDetailsCard from "@/components/blog/BlogDetailsCard"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import THead from "@/components/thead/THead"

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'


import singleBlog from '../../public/img/blog/single-blog.jpg'
import BlogCommentCard from "@/components/blog/BlogCommentCard"
import BackTop from "@/components/backtop/BackTop"



function BlogDetails() {
    return (
        <>
            <THead />
            <Header />
            <main>
                <Breadcrumb pages="home" title="blog Details" />
                <section className="py-100px">
                    <div className="container">
                        <div className="lg:w-8/12 mx-auto">
                            <BlogDetailsCard img={singleBlog} pDate="24 Aug, 2021" comment="123 K" title="It is a long established factoi ader will be distr." text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspicia unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis " />

                            <div className="flex items-center justify-between">
                                <button type="button" className="w-60px md:w-[98px] h-60px md:h-[75px] bg-tGreay-100 center-child text-3xl hover:gradient-primary hover:t-shadow-2 hover:text-white"><FaAngleLeft /></button>
                                <button type="button" className="w-60px md:w-[98px] h-60px md:h-[75px] bg-tGreay-100 center-child text-3xl hover:gradient-primary hover:t-shadow-2 hover:text-white"><FaAngleRight /></button>
                            </div>
                            {/* Blog Comments */}
                            <h5 className="mt-100px text-3xl font-bold mb-50px">Comments (03)</h5>
                            <div>
                                <div>
                                    <BlogCommentCard />
                                    <div className="md:pl-70px">
                                        <BlogCommentCard />
                                    </div>
                                </div>
                                <div>
                                    <BlogCommentCard />
                                </div>
                            </div>
                            {/* Comment Form */}
                            <div className="mt-100px">
                                <h4 className="text-[30px] text-black mb-5">Leave a Comment</h4>
                                <div>
                                    <form action="#">
                                        <div className="flex flex-col md:flex-row gap-y-30px gap-x-6 mt-30px">
                                            <div className="md:w-1/2">
                                                <input type="text" id="fName" placeholder="Name *" className="form-input h-50px" />
                                            </div>
                                            <div className="md:w-1/2">
                                                <input type="text" id="lName" placeholder="Email *" className="form-input h-50px" />
                                            </div>
                                        </div>
                                        <div className="flex gap-x-6 mt-30px">
                                            <input type="text" id="fName" placeholder="Subject (Optinal)" className="form-input h-50px" />
                                        </div>
                                        <div className="flex gap-x-6 mt-30px">
                                            <textarea placeholder="Message" className="form-input h-[180px] py-4 leading-1.2 focus:outline-none placeholder:py-5" />
                                        </div>
                                        <button className="btn-primary h-60px w-[210px] center-child mt-30px tracking-[2px]">Post Comment <BsArrowRightShort /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BackTop/>
        </>
    )
}

export default BlogDetails