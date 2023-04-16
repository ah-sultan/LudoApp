import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import TestimonialCard from "./TestimonialCard"

import client1 from '../../../public/img/testimonial/1.png'
import client2 from '../../../public/img/testimonial/2.png'
import client3 from '../../../public/img/testimonial/3.png'

const testimonialData = [
  {
    text : "Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididuntut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation.",
    img : client1,
    name : "Daisy Morgan",
    title : "Happy Coustome",
    rate : 4
  },

  {
    text : "Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididuntut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation.",
    img : client1,
    name : "Daisy Morgan",
    title : "Happy Coustome",
    rate : 4
  },

  {
    text : "Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididuntut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation.",
    img : client1,
    name : "Daisy Morgan",
    title : "Happy Coustome",
    rate : 4
  },

  {
    text : "Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididuntut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation.",
    img : client1,
    name : "Daisy Morgan",
    title : "Happy Coustome",
    rate : 4
  },
]

function Testtimonial() {
  return (
    <>
        <section className="py-60px lg:py-20 xl:py-100px">
            <div className="container">
                <h2 className="section-title text-center mb-5">#testimonial</h2>
                <div className="pt-60px pb-2">
                  <Swiper 
                    loop={true}
                    slidesPerView={1}
                    spaceBetween= {24}
                    speed= {1500}
                    breakpoints={{
                      720 : {slidesPerView : 2},
                      1200 : {slidesPerView: 3}
                    }}
                  >
                    {
                      testimonialData.map((data, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <TestimonialCard rate={data.rate} text={data.text} img={data.img} name={data.name} title={data.title}/>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testtimonial

