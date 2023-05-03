import Image from 'next/image'
import { RiShoppingBasket2Line } from 'react-icons/ri'

import women from '../../../public/img/deal/woman.png'
import CountDown from '../countDown/CountDown'


function Deal() {
  return (
    <>
        <section className=" md:mx-30px bg-[url(../../public/img/deal/deal-bg-2.jpg)] bg-cover bg-center bg-no-repeat rounded-[10px]">
         <div className="container">
         <div className="flex flex-col md:flex-row items-center py-60px lg:py-20  xl:py-100px">
              <div className="md:w-1/2 lg:w-2/5 text-center">
                  <span className="text-primary-900 text-base font-semibold leading-1.2">#FASHION SHOP</span>
                  <h6 className="text-4xl font-bold text-[#464444] mt-3 mb-21px">Deal Of The Day</h6>
                  {/* Counter */}
                  <CountDown/>
                  <button className="center-child btn-primary mx-auto w-[150px] md:w-[210px] h-[50px] md:h-[65px]">Shop Now <RiShoppingBasket2Line className="ml-15px text-lg" /></button>
              </div>
              <div className="md:w-1/2 lg:w-3/5 text-right self-end mt-50px md:mt-0">
                <Image src={women} alt="women" className="ml-auto"/>
              </div>
          </div>
         </div>
        </section>
    </>
  )
}

export default Deal