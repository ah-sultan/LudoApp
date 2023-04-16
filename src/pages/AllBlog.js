import BlogCard from "@/components/blog/BlogCard"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import THead from "@/components/thead/THead"

import blogImg from '../../public/img/blog/1.jpg'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import BackTop from "@/components/backtop/BackTop"

function Blog() {
    return (
        <>
            <THead />
            <Header />
            <main>
                <Breadcrumb title="Blog" pages="home" />
                <section className="py-60px lg:py-20 xl:py-100px">
                    <div className="container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-50px">
                            {
                                Array(12).fill().map((_, id) => <BlogCard key={id} img={blogImg} pDate="24 Aug, 2021" comment="1.5 K" title="There are many variations of passages of Lorem" text="Here's a block of text from a blog post that isn't conveniently three lines long like you designed for originally. It's probably like 6 lines on mobile or even on desktop depending on how you have things laid out. Truly a big pain in the derriere, and not the sort of thing you expected to be wasting your time trying to deal with at 4:45pm on a Friday am I right? You've got tickets to SmackDown and you heard there's gonna be a dark match with that local guy from two towns over that your cousin went to high school with before the show starts, and you're gonna miss it if you're not there early." />)
                            }
                        </div>
                    </div>
                    <div>
                        <ul className="flex justify-center items-center gap-x-2.5 pt-50px">
                            <li><button type="button" className="paginatio-btn active"><BiChevronLeft /></button></li>
                            <li><button type="button" className="paginatio-btn active">1</button></li>
                            <li><button type="button" className="paginatio-btn active">2</button></li>
                            <li><button type="button" className="paginatio-btn active"><BiChevronRight /></button></li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
            <BackTop/>
        </>
    )
}

export default Blog