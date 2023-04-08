import Image from 'next/image'
import {AiFillStar} from 'react-icons/ai'


function TestimonialCard(props) {
    const rate = Math.floor(props.rate)
  return (
    <>
        <div className="bg-white t-shadow-6 py-60px px-10">
            <div className="flex gap-x-1.5 mb-5">
                {
                    Array(rate).fill().map((_,id) => <AiFillStar className="text-sm text-accent-900"/>)
                }
                {
                    Array(5 -rate).fill().map((_,id) => <AiFillStar className="text-sm text-tGreay-100"/>)
                }
            </div>
            <p className="text-lg leading-relaxed text-tGreay-300 text-justify italic">{props.text}</p>
            <div className="mt-10 flex items-center">
                <div>
                    <Image height={56} width={56} alt="img" src={props.img}/>
                </div>
                <div className="pl-25px">
                    <h6 className="text-dark-900 text-lg leading-1.2 font-medium mb-0">{props.name}</h6>
                    <span className="text-sm leading-none text-tGreay-300">{props.title}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default TestimonialCard