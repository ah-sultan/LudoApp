import TestimonialCard from "./TestimonialCard"

import client1 from '../../../public/img/testimonial/1.png'
import client2 from '../../../public/img/testimonial/2.png'
import client3 from '../../../public/img/testimonial/3.png'

function Testtimonial() {
  return (
    <>
        <section className="py-100px">
            <div className="container">
                <h2 className="section-title text-center mb-5">#testimonial</h2>
                <div className="grid grid-cols-3 gap-x-6">
                  <TestimonialCard rate={5} text="Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididuntut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation." img={client1} name="Daisy Morgan" title="Happy Coustomer"/>
                  <TestimonialCard rate={4} text="Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididuntut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation." img={client2} name="rayna Chung" title="Happy Coustomer"/>
                  <TestimonialCard rate={3} text="Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididuntut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation." img={client3} name="Daisy Morgan" title="Happy Coustomer"/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testtimonial