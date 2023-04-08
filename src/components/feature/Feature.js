import Image from 'next/image'
import FeatureCard from './FeatureCard'

import shipping from '../../../public/img/feature/1.png'
import payments from '../../../public/img/feature/2.png'
import returns from '../../../public/img/feature/3.png'


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