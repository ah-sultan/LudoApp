import Image from 'next/image'
import { RiShoppingBasket2Line } from 'react-icons/ri'

import women from '../../../public/img/deal/woman.png'


function Deal() {
  return (
    <>
        <section className=" mx-30px bg-[url(../../public/img/deal/deal-bg-2.jpg)] bg-center bg-no-repeat rounded-[10px]">
         <div className="container">
         <div className="flex">
              <div className="w-1/2 text-center py-100px">
                  <span className="text-primary-900 text-base font-semibold leading-1.2">#FASHION SHOP</span>
                  <h6 className="text-4xl font-bold text-[#464444] mt-3 mb-21px">Deal Of The Day</h6>
                  {/* Counter */}
                  <div className="flex justify-center gap-x-2 text-dark-600 mb-8 text-4xl leading-none font-extrabold">
                    <div className="w-60px">
                        <h2 className="text-4xl leading-none font-extrabold"><span>0</span></h2>
                        <p className="text-sm leading-none uppercase font-normal">Days</p>
                    </div>
                    <span>:</span>
                    <div className="w-60px">
                        <h2 className="text-4xl leading-none font-extrabold"><span>0</span></h2>
                        <p className="text-sm leading-none uppercase font-normal">Hours</p>
                    </div>
                    <span>:</span>
                    <div className="w-60px">
                        <h2 className="text-4xl leading-none font-extrabold"><span>00</span></h2>
                        <p className="text-sm leading-none uppercase font-normal">Mins</p>
                    </div>
                    <span>:</span>
                    <div className="w-60px">
                        <h2 className="text-4xl leading-none font-extrabold"><span>00</span></h2>
                        <p className="text-sm leading-none uppercase font-normal">Sec</p>
                    </div>
                    
                  </div>
                  <button className="center-child btn-primary mx-auto w-[210px] h-[65px]">Shop Now <RiShoppingBasket2Line className="ml-15px text-lg" /></button>
              </div>
              <div className="w-1/2 self-end">
                <Image src={women} alt="women"/>
              </div>
          </div>
         </div>
        </section>
    </>
  )
}

export default Deal