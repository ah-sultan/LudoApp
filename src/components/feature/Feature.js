import Image from 'next/image'
import shipping from '../../../public/img/feature/1.png'
import payments from '../../../public/img/feature/2.png'
import returns from '../../../public/img/feature/3.png'

function FeatureCard(props){
    return (
        <>
            <div className="group flex p-30px border border-tGreay-100 bg-white w-full items-center">
                <div className="center-child w-70px h-70px rounded-full gradient-primary mr-30px">
                    <Image src={props.icon} alt="icon" className="trns-1 group-hover:scale-90 group-hover:rotate-3"/>
                </div>
                <div>
                    <h2 className="text-2xl leading-1.2 text-tGreay-850 font-semibold mb-3px">{props.title}</h2>
                    <span className="text-tGreay-550 font-normal text-base leading-1.2">{props.text}</span>
                </div>
            </div>
        </>
    )
}


function Feature() {
  return (
    <>
    <section className="-mt-[65px]">
        <div className="container">
            <div className="">
            <div className="flex items-center gap-x-6 w-full">
                <FeatureCard icon={shipping} title="Free Shipping" text=" Capped at $39 per order "/>
                <FeatureCard icon={payments} title="Card Payments" text="  12 Months Installments "/>
                <FeatureCard icon={returns} title="Easy Returns" text="  Shop With Confidence "/>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Feature