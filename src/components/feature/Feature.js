import Image from 'next/image'
import FeatureCard from './FeatureCard'

import shipping from '../../../public/img/feature/1.png'
import payments from '../../../public/img/feature/2.png'
import returns from '../../../public/img/feature/3.png'


function Feature() {
  return (
    <>
    <section className="lg:-mt-[130px]">
        <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-x-6 gap-y-30px mt-65px">
                <FeatureCard icon={shipping} title="Free Shipping" text=" Capped at $39 per order "/>
                <FeatureCard icon={payments} title="Card Payments" text="  12 Months Installments "/>
                <FeatureCard icon={returns} title="Easy Returns" text="  Shop With Confidence "/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Feature