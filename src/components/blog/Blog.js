import BlogCard from "./BlogCard"


// Images
import img1 from '../../../public/img/blog/1.jpg'


function Blog() {
  return (
    <>
        <section className="py-100px">
            <div className="container">
                <h2 className="section-title text-center block mb-11px">#blog</h2>
                <p className="text-base text-center text-[#474747] leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing eiusmod. </p>
                
                <div className="flex mt-60px">
                <div className="px-3">
                    <BlogCard img={img1} title="There are many variations of passages of Lorem" pDate="24 Aug, 2021" comment="1.4 k"/>
                </div>
                <div className="px-3">
                    <BlogCard img={img1} title="It is a long established factoi ader will be distracted" pDate="24 Aug, 2021" comment="1.4 k"/>
                </div>
                <div className="px-3">
                    <BlogCard img={img1} title="Contrary to popular belieflo lorem Ipsum is not" pDate="24 Aug, 2021" comment="1.4 k"/>
                </div>
            </div>
            </div>
            
        </section>
    </>
  )
}

export default Blog