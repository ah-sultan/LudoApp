import Image from 'next/image'
import brandLogo1 from '../../../public/img/brand/1.png'
import brandLogo2 from '../../../public/img/brand/2.png'
import brandLogo3 from '../../../public/img/brand/3.png'
import brandLogo4 from '../../../public/img/brand/4.png'
import brandLogo5 from '../../../public/img/brand/5.png'


function Brand() {
  return (
    <>
        <section>
            <div className="container">
                <div className="flex justify-between items-center">
                    <Image src={brandLogo1} alt="Brand logo" className="trns-1 grayscale hover:grayscale-0"/>
                    <Image src={brandLogo2} alt="Brand logo" className="trns-1 grayscale hover:grayscale-0"/>
                    <Image src={brandLogo3} alt="Brand logo" className="trns-1 grayscale hover:grayscale-0"/>
                    <Image src={brandLogo4} alt="Brand logo" className="trns-1 grayscale hover:grayscale-0"/>
                    <Image src={brandLogo5} alt="Brand logo" className="trns-1 grayscale hover:grayscale-0"/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Brand