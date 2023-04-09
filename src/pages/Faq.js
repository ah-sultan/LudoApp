import { TfiAngleDown } from 'react-icons/tfi'

import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Header from "@/components/header/Header"
import THead from "@/components/thead/THead"
import { useState } from 'react'
import Footer from '@/components/footer/Footer'
import BackTop from '@/components/backtop/BackTop'

const faqContent = [
    {
        id: 1,
        title: "Mauris congue euismod purus at semper?",
        text: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem ',
        active: true,
    },

    {
        id: 2,
        title: "Donec mattis finibus elit ut tristique?",
        text: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem ',
        active: false
    },

    {
        id: 3,
        title: "Aenean elit orci, efficitur quis nisl?",
        text: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem ',
        active: false
    },

    {
        id: 4,
        title: "Nam pellentesque aliquam metus?",
        text: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem ',
        active: false
    },

]



function FaqAccordion(props) {
    const [clicked, setClicked] = useState(false)
    const [istrue, setIstrue] = useState(false)
    const showAcc = {
        visibility: "visible",
        height: "auto",
        padding: "20px"

    }

    function toggle(index) {
        setClicked(index);
        setIstrue(!istrue)
    }


    return (
        <>
            <div className="mb-30px">
                <div className="bg-[#ebebeb] p-4" onClick={() => { toggle(props.index), props.handleItem(props.index) }}>
                    <h3 className="flex items-center justify-between font-semibold ">
                        <span>
                            <span className="inline-block pr-1">{props.id}.</span>
                            <span className={`${clicked === props.index && props.activAcc === props.index ? 'text-primary-900' : undefined}`}>{props.title}</span>
                        </span>
                        <button>
                            <TfiAngleDown className={`${clicked === props.index && props.activAcc === props.index ? 'text-primary-900' : undefined}`} />
                        </button>
                    </h3>
                </div>
                <div className="px-5 border border-[#ebebeb] invisible h-0 overflow-hidden trns-1" style={props.activAcc === props.index && istrue ? showAcc : undefined}>
                    <p className="text-base leading-relaxed text-tGreay-300">{props.text}</p>
                </div>
            </div>
        </>
    )
}


function Faq() {
    const [activAcc, setActiveAcc] = useState(null)



    function handleItem(value) {
        setActiveAcc(value)
    }

    console.log(activAcc)
    return (
        <>
            <THead />
            <Header />
            <main>
                <Breadcrumb pages="home" title="FAQ" />
                <section className="py-100px">
                    <div className="container">
                        <div className="w-9/12 mx-auto">
                            <h3 className="text-black text-22px leading-1.3 font-semibold">Below are frequently asked questions, you may find the answer for yourself </h3>
                            <p className="text-base leading-relaxed text-tGreay-300 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>
                            {/* Faq Section */}
                            <div className="mt-30px">
                                {
                                    faqContent.map((items, index) => {
                                        return <FaqAccordion key={index} index={index} id={items.id} title={items.title} text={items.text} activAcc={activAcc} handleItem={handleItem} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        <Footer/>
        <BackTop/>
        </>
    )
}

export default Faq